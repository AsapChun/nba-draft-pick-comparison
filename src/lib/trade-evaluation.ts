import { OwnedDraftPick, TradeAsset, AITradeEvaluation, TradeEvaluationRequest } from './types';

export async function evaluateTradeWithAI(
  teamAAssets: TradeAsset[],
  teamBAssets: TradeAsset[],
  teamAId: string,
  teamBId: string,
  currentYear: number = 2025
): Promise<AITradeEvaluation> {
  const request: TradeEvaluationRequest = {
    teamAAssets,
    teamBAssets,
    teamAId,
    teamBId,
    currentYear
  };

  const response = await fetch('/api/evaluate-trade', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error('Failed to evaluate trade');
  }

  const data = await response.json();
  console.log('Client received data:', data);
  console.log('Type of data:', typeof data);
  
  return data;
}

export function getAITradeVerdict(
  evaluation: AITradeEvaluation,
  teamAName?: string,
  teamBName?: string
): {
  text: string;
  color: 'green' | 'yellow' | 'red';
  icon: string;
} {
  if (evaluation.favoredTeam === 'balanced') {
    return {
      text: 'Balanced Trade',
      color: 'green',
      icon: '⚖️'
    };
  }

  const teamText = evaluation.favoredTeam;

  if (evaluation.imbalanceScore < 25) {
    return {
      text: `Slightly Favors ${teamText}`,
      color: 'yellow',
      icon: '📊'
    };
  } else if (evaluation.imbalanceScore < 50) {
    return {
      text: `Moderately Favors ${teamText}`,
      color: 'yellow',
      icon: '⚖️'
    };
  } else {
    return {
      text: `Heavily Favors ${teamText}`,
      color: 'red',
      icon: '⚠️'
    };
  }
}