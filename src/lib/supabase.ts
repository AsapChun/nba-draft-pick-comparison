import { createClient } from '@supabase/supabase-js'
import { SavedTradeAnalysis, SaveTradeAnalysisRequest } from './types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Save a trade analysis
export async function saveTradeAnalysis(request: SaveTradeAnalysisRequest): Promise<SavedTradeAnalysis> {
  const { data, error } = await supabase
    .from('saved_trade_analyses')
    .insert({
      team_a_id: request.team_a_id,
      team_b_id: request.team_b_id,
      team_a_name: request.team_a_name,
      team_b_name: request.team_b_name,
      team_a_assets: request.team_a_assets,
      team_b_assets: request.team_b_assets,
      ai_evaluation: request.ai_evaluation,
      analysis_name: request.analysis_name,
      notes: request.notes,
      favored_team: request.ai_evaluation.favoredTeam,
      imbalance_score: request.ai_evaluation.imbalanceScore,
      confidence_level: request.ai_evaluation.confidenceLevel,
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to save analysis: ${error.message}`);
  }

  return data;
}

// Get all saved trade analyses
export async function getSavedTradeAnalyses(): Promise<SavedTradeAnalysis[]> {
  const { data, error } = await supabase
    .from('saved_trade_analyses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch analyses: ${error.message}`);
  }

  return data || [];
}

// Get a specific saved trade analysis
export async function getSavedTradeAnalysis(id: string): Promise<SavedTradeAnalysis | null> {
  const { data, error } = await supabase
    .from('saved_trade_analyses')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null; // Not found
    }
    throw new Error(`Failed to fetch analysis: ${error.message}`);
  }

  return data;
}

// Delete a saved trade analysis
export async function deleteSavedTradeAnalysis(id: string): Promise<void> {
  const { error } = await supabase
    .from('saved_trade_analyses')
    .delete()
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to delete analysis: ${error.message}`);
  }
} 