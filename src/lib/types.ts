import { z } from 'zod';

export interface NBATeam {
    id: string;
    name: string;
    city: string;
    abbreviation: string;
    primaryColor: string;
    secondaryColor: string;
    logo?: string;
}

export interface TradeAsset {
    type: 'pick';
    pick: OwnedDraftPick;
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

// Enhanced draft pick ownership types - only for picks the team owns
export type OwnedPickType = 'own' | 'acquired' | 'swap' | 'conditional';

export interface PickProtection {
    type: 'top' | 'lottery' | 'range';
    value: number | [number, number]; // single number for top-X, range for X-Y
}

export interface SwapCondition {
    description: string;
    involvedTeams: string[];
    outcome: 'more_favorable' | 'less_favorable' | 'conditional';
}

export interface ConditionalPickRule {
    condition: string;
    requirement: string; // e.g., "if either MIL or NOP pick is 5-30"
    fallback?: string;
}

export interface OwnedDraftPick {
    id: string;
    year: number;
    round: 1 | 2;
    type: OwnedPickType;
    
    // Source information
    originalOwner: string; // Which team's pick this originally was
    acquiredFrom?: string; // If different from originalOwner, who we got it from
    
    // For swap picks
    swapConditions?: SwapCondition;
    
    // For conditional picks
    conditionalRules?: ConditionalPickRule;
    
    // For protected picks
    protections?: PickProtection[];
    description: string;
    notes?: string;
}

export interface TeamDraftAssets {
    teamId: string;
    picks: {
        [year: number]: {
            firstRound?: OwnedDraftPick[];
            secondRound?: OwnedDraftPick[];
        };
    };
    lastUpdated: Date;
}

// Add prospect information types
export interface ProspectInfo {
  name: string;
  position: string;
  school: string | null;
  projectedRange: string; // e.g., "5-10", "Lottery", "Late First"
  strengths: string[];
  concerns: string[];
  summary: string;
}

export interface ProspectsAnalysis {
  draftYear: number;
  availableProspects: ProspectInfo[];
  summary: string;
  impactOnTrade: string;
}

// Enhanced AI-based trade evaluation types with prospects
export interface AITradeEvaluation {
  favoredTeam: string;
  imbalanceScore: number;
  overallVerdict: string;
  detailedAnalysis?: {
    teamAAnalysis?: string;
    teamBAnalysis?: string;
    valueComparison?: string;
    riskAssessment?: string;
    teamSituationImpact?: string;
  };
  improvements?: {
    forBalance?: string[];
    alternativeStructures?: string[];
  };
  prospectsAnalysis: ProspectsAnalysis[] | null;
  confidenceLevel: number;
  summary: string;
}

// Update Zod schema for AI trade evaluation
export const AITradeEvaluationSchema = z.object({
  favoredTeam: z.string(),
  imbalanceScore: z.number().min(0).max(100),
  overallVerdict: z.string(),
  detailedAnalysis: z.object({
    teamAAnalysis: z.string(),
    teamBAnalysis: z.string(),
    valueComparison: z.string(),
    riskAssessment: z.string(),
    teamSituationImpact: z.string()
  }),
  improvements: z.object({
    forBalance: z.array(z.string()),
    alternativeStructures: z.array(z.string())
  }),
  prospectsAnalysis: z.array(z.object({
    draftYear: z.number(),
    availableProspects: z.array(z.object({
      name: z.string(),
      position: z.string(),
      school: z.string().nullable(),
      projectedRange: z.string(),
      strengths: z.array(z.string()),
      concerns: z.array(z.string()),
      summary: z.string()
    })),
    summary: z.string(),
    impactOnTrade: z.string()
  })).nullable(),
  confidenceLevel: z.number().min(0).max(100),
  summary: z.string()
});

export interface TradeEvaluationRequest {
  teamAAssets: TradeAsset[];
  teamBAssets: TradeAsset[];
  teamAId: string;
  teamBId: string;
  currentYear?: number;
}

// Saved trade analysis types
export interface SavedTradeAnalysis {
  id: string;
  created_at: string;
  team_a_id: string;
  team_b_id: string;
  team_a_name: string;
  team_b_name: string;
  team_a_assets: TradeAsset[];
  team_b_assets: TradeAsset[];
  ai_evaluation: AITradeEvaluation;
  analysis_name?: string;
  notes?: string;
  user_id?: string;
  favored_team?: string;
  imbalance_score?: number;
  confidence_level?: number;
}

export interface SaveTradeAnalysisRequest {
  team_a_id: string;
  team_b_id: string;
  team_a_name: string;
  team_b_name: string;
  team_a_assets: TradeAsset[];
  team_b_assets: TradeAsset[];
  ai_evaluation: AITradeEvaluation;
  analysis_name?: string;
  notes?: string;
}