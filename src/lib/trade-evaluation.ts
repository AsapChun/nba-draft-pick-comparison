import { DraftPick, TradeAsset, TradeEvaluation, PickValueBreakdown } from './types';

// Kevin Pelton 2017 Draft Pick Value Chart
const PELTON_VALUES: Record<number, number> = {
  1: 4000, 2: 3100, 3: 2670, 4: 2410, 5: 2240, 6: 2110, 7: 2000, 8: 1910, 9: 1830, 10: 1720,
  11: 1600, 12: 1500, 13: 1400, 14: 1320, 15: 1240, 16: 1180, 17: 1130, 18: 1080, 19: 1030, 20: 980,
  21: 920, 22: 860, 23: 800, 24: 750, 25: 700, 26: 660, 27: 620, 28: 570, 29: 520, 30: 470,
  31: 360, 32: 350, 33: 330, 34: 320, 35: 300, 36: 290, 37: 280, 38: 270, 39: 250, 40: 240,
  41: 230, 42: 220, 43: 210, 44: 200, 45: 190, 46: 180, 47: 170, 48: 160, 49: 150, 50: 140,
  51: 130, 52: 120, 53: 110, 54: 100, 55: 90, 56: 90, 57: 80, 58: 70, 59: 60, 60: 50
};

export function calculatePickValue(pick: DraftPick, currentYear: number = 2025): PickValueBreakdown {
  // Base value for middle of the round (pick 15 for 1st round, pick 45 for 2nd round)
  const basePickNumber = pick.round === 1 ? 15 : 45;
  const baseValue = PELTON_VALUES[basePickNumber] || 0;
  
  // Year adjustment - each year out reduces value
  const yearsOut = pick.year - currentYear;
  const yearDecline = Math.max(0, yearsOut - 1) * 0.15; // 15% decline per year after first year
  const yearAdjustment = 1 - yearDecline;
  
  // Round adjustment - 2nd round picks are worth less
  const roundAdjustment = pick.round === 1 ? 1 : 0.3;
  
  const adjustedValue = baseValue * yearAdjustment * roundAdjustment;
  
  return {
    pick,
    baseValue,
    adjustedValue: Math.round(adjustedValue),
    yearAdjustment,
    roundAdjustment
  };
}

export function evaluateTrade(
  teamAAssets: TradeAsset[], 
  teamBAssets: TradeAsset[], 
  currentYear: number = 2025
): TradeEvaluation {
  const teamABreakdown = teamAAssets.map(asset => 
    calculatePickValue(asset.pick, currentYear)
  );
  
  const teamBBreakdown = teamBAssets.map(asset => 
    calculatePickValue(asset.pick, currentYear)
  );
  
  const teamAValue = teamABreakdown.reduce((sum, item) => sum + item.adjustedValue, 0);
  const teamBValue = teamBBreakdown.reduce((sum, item) => sum + item.adjustedValue, 0);
  
  const difference = Math.abs(teamAValue - teamBValue);
  const higherValue = Math.max(teamAValue, teamBValue);
  const imbalancePercentage = higherValue > 0 ? (difference / higherValue) * 100 : 0;
  
  // Trade is considered balanced if difference is less than 20%
  const isBalanced = imbalancePercentage < 20;
  const favoredTeam = isBalanced ? null : (teamAValue > teamBValue ? 'A' : 'B');
  
  return {
    teamAValue,
    teamBValue,
    difference,
    favoredTeam,
    isBalanced,
    breakdown: {
      teamA: teamABreakdown,
      teamB: teamBBreakdown
    }
  };
}

export function formatValue(value: number): string {
  return value.toLocaleString();
}

export function getTradeVerdict(
  evaluation: TradeEvaluation, 
  teamAName?: string, 
  teamBName?: string
): { 
  text: string; 
  color: 'green' | 'yellow' | 'red'; 
  icon: string;
} {
  if (evaluation.isBalanced) {
    return {
      text: 'Balanced Trade',
      color: 'green',
      icon: '⚖️'
    };
  }
  
  const percentage = (evaluation.difference / Math.max(evaluation.teamAValue, evaluation.teamBValue)) * 100;
  const favoredTeamName = evaluation.favoredTeam === 'A' ? teamAName : teamBName;
  const teamText = favoredTeamName || `Team ${evaluation.favoredTeam}`;
  
  if (percentage < 35) {
    return {
      text: `Slightly Favors ${teamText}`,
      color: 'yellow',
      icon: '📊'
    };
  } else {
    return {
      text: `Heavily Favors ${teamText}`,
      color: 'red',
      icon: '⚠️'
    };
  }
}