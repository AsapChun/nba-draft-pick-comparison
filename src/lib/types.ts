export interface NBATeam {
    id: string;
    name: string;
    city: string;
    abbreviation: string;
    primaryColor: string;
    secondaryColor: string;
    logo?: string;
  }
  
export interface DraftPick {
    id: string;
    teamId: string;
    year: number;
    round: 1 | 2;
    originalTeam: string;
    protections?: string;
    value?: number;
}

export interface TradeAsset {
    type: 'pick';
    pick: DraftPick;
}

export interface TeamTradeSide {
    teamId: string;
    receives: TradeAsset[];
    gives: TradeAsset[];
}

export interface TradeScenario {
    id: string;
    name: string;
    teams: [TeamTradeSide, TeamTradeSide];
    createdAt: Date;
    notes?: string;
    isBalanced?: boolean;
    favoredTeam?: string;
}

export interface TradeEvaluation {
    teamAValue: number;
    teamBValue: number;
    difference: number;
    favoredTeam: string | null;
    isBalanced: boolean;
    breakdown: {
        teamA: PickValueBreakdown[];
        teamB: PickValueBreakdown[];
    };
}

export interface PickValueBreakdown {
    pick: DraftPick;
    baseValue: number;
    adjustedValue: number;
    yearAdjustment: number;
    roundAdjustment: number;
}