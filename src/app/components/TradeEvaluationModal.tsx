'use client';

import { useState, useEffect } from 'react';
import { TradeAsset, AITradeEvaluation, OwnedDraftPick } from '../../lib/types';
import { evaluateTradeWithAI, getAITradeVerdict } from '../../lib/trade-evaluation';
import { saveTradeAnalysis } from '../../lib/supabase';
import { NBA_TEAMS } from '../../lib/nba-teams';

interface TradeEvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamAAssets: TradeAsset[];
  teamBAssets: TradeAsset[];
  teamAId: string;
  teamBId: string;
}

export default function TradeEvaluationModal({
  isOpen,
  onClose,
  teamAAssets,
  teamBAssets,
  teamAId,
  teamBId
}: TradeEvaluationModalProps) {
  const [evaluation, setEvaluation] = useState<AITradeEvaluation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [notes, setNotes] = useState('');

  const teamAName = NBA_TEAMS.find(t => t.id === teamAId)?.city + ' ' + NBA_TEAMS.find(t => t.id === teamAId)?.name;
  const teamBName = NBA_TEAMS.find(t => t.id === teamBId)?.city + ' ' + NBA_TEAMS.find(t => t.id === teamBId)?.name;

  useEffect(() => {
    if (isOpen && teamAAssets.length > 0 && teamBAssets.length > 0) {
      evaluateTrade();
      // Reset save state when opening
      setSaveSuccess(false);
      setNotes('');
    }
  }, [isOpen, teamAAssets, teamBAssets, teamAId, teamBId]);

  const evaluateTrade = async () => {
    setLoading(true);
    setError(null);
    setEvaluation(null);
    
    try {
      const result = await evaluateTradeWithAI(
        teamAAssets,
        teamBAssets,
        teamAId,
        teamBId
      );
      
      setEvaluation(result);
    } catch (err) {
      setError('Failed to evaluate trade. Please try again.');
      console.error('Evaluation error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveAnalysis = async () => {
    if (!evaluation) return;

    setSaving(true);
    try {
      const analysisName = `${teamAName} vs ${teamBName} Trade Analysis - ${new Date().toLocaleDateString()}`;
      
      await saveTradeAnalysis({
        team_a_id: teamAId,
        team_b_id: teamBId,
        team_a_name: teamAName,
        team_b_name: teamBName,
        team_a_assets: teamAAssets,
        team_b_assets: teamBAssets,
        ai_evaluation: evaluation,
        analysis_name: analysisName,
        notes: notes.trim() || undefined,
      });
      
      setSaveSuccess(true);
    } catch (err) {
      setError('Failed to save analysis. Please try again.');
      console.error('Save error:', err);
    } finally {
      setSaving(false);
    }
  };

  if (!isOpen) return null;

  const verdict = evaluation ? getAITradeVerdict(evaluation, teamAName, teamBName) : null;

  // Helper function to safely get color classes
  const getColorClass = (color: string, type: 'bg' | 'border' | 'text' = 'bg') => {
    const colorMap = {
      green: { bg: 'bg-green-900/20', border: 'border-green-600/30', text: 'text-green-300' },
      yellow: { bg: 'bg-yellow-900/20', border: 'border-yellow-600/30', text: 'text-yellow-300' },
      red: { bg: 'bg-red-900/20', border: 'border-red-600/30', text: 'text-red-300' }
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || colorMap.yellow[type];
  };

  const formatPickForDisplay = (pick: OwnedDraftPick) => {
    let display = `${pick.year} ${pick.round === 1 ? '1st' : '2nd'} Round Pick`;
    
    // Add original team info with visual indicators
    if (pick.originalOwner !== teamAId && pick.originalOwner !== teamBId) {
      const originalTeam = NBA_TEAMS.find(t => t.id === pick.originalOwner)?.abbreviation || pick.originalOwner;
      display += ` (${originalTeam}`;
      if (pick.acquiredFrom && pick.acquiredFrom !== pick.originalOwner) {
        const acquiredTeam = NBA_TEAMS.find(t => t.id === pick.acquiredFrom)?.abbreviation || pick.acquiredFrom;
        display += ` via ${acquiredTeam}`;
      }
      display += ')';
    }
    
    // Add protections with clear formatting
    if (pick.protections && pick.protections.length > 0) {
      const protectionText = pick.protections.map(p => {
        if (p.type === 'top') {
          return `Top ${p.value}`;
        } else if (p.type === 'range') {
          return Array.isArray(p.value) ? `${p.value.join('-')}` : `${p.value}`;
        } else {
          return 'Lottery';
        }
      }).join(', ');
      display += ` [${protectionText} Protected]`;
    }
    
    return display;
  };

  const getPickTypeInfo = (pick: OwnedDraftPick) => {
    if (pick.type === 'swap') {
      return {
        icon: '🔄',
        label: 'SWAP',
        bgColor: 'bg-purple-900/20',
        textColor: 'text-purple-300',
        borderColor: 'border-purple-600/30'
      };
    } else if (pick.type === 'conditional') {
      return {
        icon: '❓',
        label: 'CONDITIONAL',
        bgColor: 'bg-orange-900/20',
        textColor: 'text-orange-300',
        borderColor: 'border-orange-600/30'
      };
    } else if (pick.protections && pick.protections.length > 0) {
      return {
        icon: '🛡️',
        label: 'PROTECTED',
        bgColor: 'bg-blue-900/20',
        textColor: 'text-blue-300',
        borderColor: 'border-blue-600/30'
      };
    } else if (pick.type === 'acquired') {
      return {
        icon: '📈',
        label: 'ACQUIRED',
        bgColor: 'bg-green-900/20',
        textColor: 'text-green-300',
        borderColor: 'border-green-600/30'
      };
    } else {
      return {
        icon: '🏠',
        label: 'OWN',
        bgColor: 'bg-gray-900/20',
        textColor: 'text-gray-300',
        borderColor: 'border-gray-600/30'
      };
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Trade Analysis</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl cursor-pointer"
            >
              ×
            </button>
          </div>

          {/* Enhanced Trade Summary */}
          <div className="bg-gray-700 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Trade Summary</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-blue-300 mb-3 flex items-center">
                  <span className="mr-2">📤</span>
                  {teamAName} Gives:
                </h4>
                <div className="space-y-3">
                  {teamAAssets.map((asset, index) => {
                    const typeInfo = getPickTypeInfo(asset.pick);
                    return (
                      <div key={index} className={`${typeInfo.bgColor} ${typeInfo.borderColor} border rounded-lg p-3`}>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{typeInfo.icon}</span>
                            <span className="font-semibold text-white">
                              {formatPickForDisplay(asset.pick)}
                            </span>
                          </div>
                          <span className={`${typeInfo.textColor} text-xs font-medium px-2 py-1 rounded`}>
                            {typeInfo.label}
                          </span>
                        </div>
                        {asset.pick.description && (
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {asset.pick.description}
                          </p>
                        )}
                        {/* Show additional context for complex picks */}
                        {(asset.pick.swapConditions?.description || asset.pick.conditionalRules?.condition) && (
                          <div className="mt-2 text-xs text-gray-400 italic">
                            {asset.pick.swapConditions?.description || asset.pick.conditionalRules?.condition}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-red-300 mb-3 flex items-center">
                  <span className="mr-2">📥</span>
                  {teamBName} Gives:
                </h4>
                <div className="space-y-3">
                  {teamBAssets.map((asset, index) => {
                    const typeInfo = getPickTypeInfo(asset.pick);
                    return (
                      <div key={index} className={`${typeInfo.bgColor} ${typeInfo.borderColor} border rounded-lg p-3`}>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{typeInfo.icon}</span>
                            <span className="font-semibold text-white">
                              {formatPickForDisplay(asset.pick)}
                            </span>
                          </div>
                          <span className={`${typeInfo.textColor} text-xs font-medium px-2 py-1 rounded`}>
                            {typeInfo.label}
                          </span>
                        </div>
                        {asset.pick.description && (
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {asset.pick.description}
                          </p>
                        )}
                        {/* Show additional context for complex picks */}
                        {(asset.pick.swapConditions?.description || asset.pick.conditionalRules?.condition) && (
                          <div className="mt-2 text-xs text-gray-400 italic">
                            {asset.pick.swapConditions?.description || asset.pick.conditionalRules?.condition}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <p className="text-gray-300 mt-2">Analyzing the trade scenario...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4 mb-6">
              <p className="text-red-300">{error}</p>
              <button
                onClick={evaluateTrade}
                className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Save Success Message */}
          {saveSuccess && (
            <div className="bg-green-900/20 border border-green-600/30 rounded-lg p-4 mb-6">
              <p className="text-green-300">✅ Analysis saved successfully!</p>
            </div>
          )}

          {/* AI Evaluation Results */}
          {evaluation && verdict && (
            <div className="space-y-6">
              {/* Overall Verdict */}
              <div className={`${getColorClass(verdict.color, 'bg')} ${getColorClass(verdict.color, 'border')} border rounded-lg p-4`}>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl">{verdict.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{verdict.text}</h3>
                </div>
                <p className="text-gray-300">{evaluation.overallVerdict}</p>
                <div className="mt-2 flex items-center space-x-4 text-sm">
                  <span className="text-gray-400">
                    Imbalance Score: <span className="font-medium">{evaluation.imbalanceScore}/100</span>
                  </span>
                  <span className="text-gray-400">
                    Confidence: <span className="font-medium">{evaluation.confidenceLevel}%</span>
                  </span>
                </div>
              </div>

              {/* Available Prospects Analysis */}
              {evaluation.prospectsAnalysis && evaluation.prospectsAnalysis.length > 0 && (
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="mr-2">🏀</span>
                    Available Prospects Analysis
                  </h3>
                  <div className="space-y-6">
                    {evaluation.prospectsAnalysis.map((yearAnalysis, index) => (
                      <div key={index} className="bg-gray-800 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-300 mb-3">
                          {yearAnalysis.draftYear} Draft Class
                        </h4>
                        
                        {/* Draft Class Summary */}
                        <div className="mb-4">
                          <p className="text-gray-300 text-sm mb-2">{yearAnalysis.summary}</p>
                          <div className="bg-blue-900/20 border border-blue-600/30 rounded p-3">
                            <h5 className="font-medium text-blue-200 mb-1">Trade Impact:</h5>
                            <p className="text-blue-100 text-sm">{yearAnalysis.impactOnTrade}</p>
                          </div>
                        </div>

                        {/* Available Prospects */}
                        {yearAnalysis.availableProspects.length > 0 && (
                          <div>
                            <h5 className="font-medium text-gray-200 mb-3">Top Available Prospects:</h5>
                            <div className="grid gap-3">
                              {yearAnalysis.availableProspects.map((prospect, prospectIndex) => (
                                <div key={prospectIndex} className="bg-gray-700 border border-gray-600 rounded-lg p-3">
                                  <div className="flex items-start justify-between mb-2">
                                    <div>
                                      <h6 className="font-semibold text-white">{prospect.name}</h6>
                                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                                        <span>{prospect.position}</span>
                                        {prospect.school && (
                                          <>
                                            <span>•</span>
                                            <span>{prospect.school}</span>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                    <span className="bg-purple-900/30 text-purple-200 text-xs px-2 py-1 rounded">
                                      {prospect.projectedRange}
                                    </span>
                                  </div>
                                  
                                  <p className="text-gray-300 text-sm mb-3">{prospect.summary}</p>
                                  
                                  <div className="grid md:grid-cols-2 gap-3">
                                    <div>
                                      <div className="text-green-300 text-xs font-medium mb-1">Strengths:</div>
                                      <ul className="text-green-200 text-xs space-y-1">
                                        {prospect.strengths.map((strength, i) => (
                                          <li key={i} className="flex items-start space-x-1">
                                            <span className="text-green-400">+</span>
                                            <span>{strength}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div>
                                      <div className="text-red-300 text-xs font-medium mb-1">Concerns:</div>
                                      <ul className="text-red-200 text-xs space-y-1">
                                        {prospect.concerns.map((concern, i) => (
                                          <li key={i} className="flex items-start space-x-1">
                                            <span className="text-red-400">-</span>
                                            <span>{concern}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary */}
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Executive Summary</h3>
                <p className="text-gray-300">{evaluation.summary}</p>
              </div>

              {/* Detailed Analysis */}
              {evaluation.detailedAnalysis && (
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Detailed Analysis</h3>
                  <div className="space-y-4">
                    {evaluation.detailedAnalysis.teamAAnalysis && (
                      <div>
                        <h4 className="font-medium text-blue-300 mb-2">{teamAName} Perspective</h4>
                        <p className="text-gray-300 text-sm">{evaluation.detailedAnalysis.teamAAnalysis}</p>
                      </div>
                    )}
                    {evaluation.detailedAnalysis.teamBAnalysis && (
                      <div>
                        <h4 className="font-medium text-red-300 mb-2">{teamBName} Perspective</h4>
                        <p className="text-gray-300 text-sm">{evaluation.detailedAnalysis.teamBAnalysis}</p>
                      </div>
                    )}
                    {evaluation.detailedAnalysis.valueComparison && (
                      <div>
                        <h4 className="font-medium text-yellow-300 mb-2">Value Comparison</h4>
                        <p className="text-gray-300 text-sm">{evaluation.detailedAnalysis.valueComparison}</p>
                      </div>
                    )}
                    {evaluation.detailedAnalysis.riskAssessment && (
                      <div>
                        <h4 className="font-medium text-orange-300 mb-2">Risk Assessment</h4>
                        <p className="text-gray-300 text-sm">{evaluation.detailedAnalysis.riskAssessment}</p>
                      </div>
                    )}
                    {evaluation.detailedAnalysis.teamSituationImpact && (
                      <div>
                        <h4 className="font-medium text-purple-300 mb-2">Team Situation Impact</h4>
                        <p className="text-gray-300 text-sm">{evaluation.detailedAnalysis.teamSituationImpact}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Improvements */}
              {evaluation.improvements && (
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Suggestions for Improvement</h3>
                  <div className="space-y-4">
                    {evaluation.improvements.forBalance && evaluation.improvements.forBalance.length > 0 && (
                      <div>
                        <h4 className="font-medium text-green-300 mb-2">For Better Balance</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {evaluation.improvements.forBalance.map((suggestion, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-green-400">•</span>
                              <span>{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {evaluation.improvements.alternativeStructures && evaluation.improvements.alternativeStructures.length > 0 && (
                      <div>
                        <h4 className="font-medium text-blue-300 mb-2">Alternative Structures</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {evaluation.improvements.alternativeStructures.map((alternative, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-blue-400">•</span>
                              <span>{alternative}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Save Analysis Section */}
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="mr-2">💾</span>
                  Save Analysis
                </h3>
                
                <div className="space-y-4">
                  {/* Show the hard-coded analysis name as white text */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Analysis Name
                    </label>
                    <p className="text-white font-medium">
                      {`${teamAName} vs ${teamBName} Trade Analysis - ${new Date().toLocaleDateString()}`}
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Notes (Optional)
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Add any additional notes about this trade analysis..."
                      rows={3}
                      disabled={saveSuccess}
                      className={`w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none ${
                        saveSuccess ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    />
                  </div>
                  
                  <button
                    onClick={handleSaveAnalysis}
                    disabled={saving || saveSuccess}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                      saving 
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : saveSuccess
                        ? 'bg-green-600 text-white cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
                    }`}
                  >
                    {saving ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Saving...
                      </span>
                    ) : saveSuccess ? (
                      '✅ Analysis Saved Successfully!'
                    ) : (
                      '💾 Save Comparison Analysis'
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Close Button */}
          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors cursor-pointer"
            >
              Close Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 