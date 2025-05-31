'use client';

import { useState, useEffect } from 'react';
import { SavedTradeAnalysis } from '../../lib/types';
import { getSavedTradeAnalyses, deleteSavedTradeAnalysis } from '../../lib/supabase';
import { getAITradeVerdict } from '../../lib/trade-evaluation';
import SavedAnalysisModal from '../components/SavedAnalysisModal';
import NavBar from '../components/NavBar';

export default function SavedAnalysesPage() {
  const [analyses, setAnalyses] = useState<SavedTradeAnalysis[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAnalysis, setSelectedAnalysis] = useState<SavedTradeAnalysis | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadAnalyses();
  }, []);

  const loadAnalyses = async () => {
    try {
      setLoading(true);
      const data = await getSavedTradeAnalyses();
      setAnalyses(data);
    } catch (err) {
      setError('Failed to load saved analyses');
      console.error('Load error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteSavedTradeAnalysis(id);
      setAnalyses(prev => prev.filter(a => a.id !== id));
    } catch (err) {
      setError('Failed to delete analysis');
      console.error('Delete error:', err);
    }
  };

  const handleViewAnalysis = (analysis: SavedTradeAnalysis) => {
    setSelectedAnalysis(analysis);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnalysis(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <NavBar />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="text-gray-300 mt-2">Loading saved analyses...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Your Saved Trade Analyses</h2>
          <p className="text-gray-400">
            {analyses.length > 0 
              ? `${analyses.length} saved ${analyses.length === 1 ? 'analysis' : 'analyses'}`
              : 'No saved analyses yet'
            }
          </p>
        </div>
        
        {error && (
          <div className="bg-red-900/20 border border-red-600/30 rounded-lg p-4 mb-6">
            <p className="text-red-300">{error}</p>
            <button
              onClick={loadAnalyses}
              className="mt-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {analyses.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📊</div>
            <p className="text-gray-400 text-lg mb-2">No saved analyses yet.</p>
            <p className="text-gray-500 mb-6">Create and save trade analyses to see them here.</p>
            <a 
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>🏠</span>
              <span>Go to Trade Builder</span>
            </a>
          </div>
        ) : (
          <div className="grid gap-4">
            {analyses.map((analysis) => {
              const verdict = getAITradeVerdict(analysis.ai_evaluation, analysis.team_a_name, analysis.team_b_name);
              
              return (
                <div 
                  key={analysis.id} 
                  className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors border border-gray-700 hover:border-gray-600"
                >
                  <div className="flex justify-between items-start">
                    <div 
                      className="flex-1 cursor-pointer"
                      onClick={() => handleViewAnalysis(analysis)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {analysis.analysis_name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{verdict.icon}</span>
                          <span className={`text-sm font-medium px-2 py-1 rounded ${
                            verdict.color === 'green' ? 'bg-green-900/30 text-green-300' :
                            verdict.color === 'yellow' ? 'bg-yellow-900/30 text-yellow-300' :
                            'bg-red-900/30 text-red-300'
                          }`}>
                            {verdict.text}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span>{new Date(analysis.created_at).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>Imbalance: {analysis.ai_evaluation.imbalanceScore}/100</span>
                        <span>•</span>
                        <span>Confidence: {analysis.ai_evaluation.confidenceLevel}%</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <h4 className="text-sm font-medium text-blue-300 mb-1">
                            {analysis.team_a_name} Gave:
                          </h4>
                          <div className="space-y-1">
                            {analysis.team_a_assets.slice(0, 2).map((asset, index) => (
                              <div key={index} className="text-xs text-gray-300 bg-blue-900/20 p-1 rounded">
                                {asset.pick.year} {asset.pick.round === 1 ? '1st' : '2nd'} Round
                              </div>
                            ))}
                            {analysis.team_a_assets.length > 2 && (
                              <div className="text-xs text-gray-400 italic">
                                +{analysis.team_a_assets.length - 2} more
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-red-300 mb-1">
                            {analysis.team_b_name} Gave:
                          </h4>
                          <div className="space-y-1">
                            {analysis.team_b_assets.slice(0, 2).map((asset, index) => (
                              <div key={index} className="text-xs text-gray-300 bg-red-900/20 p-1 rounded">
                                {asset.pick.year} {asset.pick.round === 1 ? '1st' : '2nd'} Round
                              </div>
                            ))}
                            {analysis.team_b_assets.length > 2 && (
                              <div className="text-xs text-gray-400 italic">
                                +{analysis.team_b_assets.length - 2} more
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm line-clamp-2">
                        {analysis.ai_evaluation.overallVerdict}
                      </p>

                      {analysis.notes && (
                        <div className="mt-2 text-xs text-gray-400 italic">
                          Notes: {analysis.notes.substring(0, 100)}{analysis.notes.length > 100 ? '...' : ''}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(analysis.id);
                      }}
                      className="ml-4 bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 px-3 py-1 rounded text-sm font-medium transition-colors cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Saved Analysis Modal */}
      <SavedAnalysisModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        analysis={selectedAnalysis}
      />
    </div>
  );
} 