'use client';

import { useEffect, useState } from 'react';
import { TradeEvaluation, TradeAsset } from '../../lib/types';
import { evaluateTrade, formatValue, getTradeVerdict } from '../../lib/trade-evaluation';
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
  const [evaluation, setEvaluation] = useState<TradeEvaluation | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const teamA = NBA_TEAMS.find(t => t.id === teamAId);
  const teamB = NBA_TEAMS.find(t => t.id === teamBId);

  useEffect(() => {
    if (isOpen && teamAAssets.length > 0 && teamBAssets.length > 0) {
      setIsLoading(true);
      // Simulate loading time for better UX
      setTimeout(() => {
        const result = evaluateTrade(teamAAssets, teamBAssets);
        setEvaluation(result);
        setIsLoading(false);
      }, 1500);
    }
  }, [isOpen, teamAAssets, teamBAssets]);

  if (!isOpen) return null;

  const verdict = evaluation ? getTradeVerdict(
    evaluation, 
    teamA?.city + ' ' + teamA?.name, 
    teamB?.city + ' ' + teamB?.name
  ) : null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Trade Evaluation</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl cursor-pointer"
          >
            ×
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="trade-loader mb-6">
                <div className="loading-ring"></div>
              </div>
              <p className="text-gray-300 text-lg font-medium">Evaluating trade scenario...</p>
              <p className="text-gray-500 text-sm mt-2">Analyzing draft pick values and market factors</p>
            </div>
          ) : evaluation ? (
            <div className="space-y-6">
              {/* Trade Verdict */}
              <div className={`text-center p-6 rounded-lg border-2 ${
                verdict?.color === 'green' ? 'bg-green-900/20 border-green-600' :
                verdict?.color === 'yellow' ? 'bg-yellow-900/20 border-yellow-600' :
                'bg-red-900/20 border-red-600'
              }`}>
                <div className="text-4xl mb-2">{verdict?.icon}</div>
                <h3 className={`text-xl font-bold ${
                  verdict?.color === 'green' ? 'text-green-400' :
                  verdict?.color === 'yellow' ? 'text-yellow-400' :
                  'text-red-400'
                }`}>
                  {verdict?.text}
                </h3>
                {!evaluation.isBalanced && (
                  <p className="text-gray-300 mt-2">
                    Value difference: {formatValue(evaluation.difference)} points
                  </p>
                )}
              </div>

              {/* Value Summary */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {teamA && (
                        <>
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: teamA.primaryColor }}
                          />
                          <h4 className="font-semibold text-white">
                            {teamA.city} {teamA.name}
                          </h4>
                        </>
                      )}
                    </div>
                    <span className="text-2xl font-bold text-blue-400">
                      {formatValue(evaluation.teamAValue)}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {evaluation.breakdown.teamA.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-300">
                          {item.pick.year} {item.pick.round === 1 ? '1st' : '2nd'} Round
                        </span>
                        <span className="text-gray-400">
                          {formatValue(item.adjustedValue)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {teamB && (
                        <>
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: teamB.primaryColor }}
                          />
                          <h4 className="font-semibold text-white">
                            {teamB.city} {teamB.name}
                          </h4>
                        </>
                      )}
                    </div>
                    <span className="text-2xl font-bold text-blue-400">
                      {formatValue(evaluation.teamBValue)}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {evaluation.breakdown.teamB.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-300">
                          {item.pick.year} {item.pick.round === 1 ? '1st' : '2nd'} Round
                        </span>
                        <span className="text-gray-400">
                          {formatValue(item.adjustedValue)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detailed Breakdown */}
              <div className="bg-gray-750 rounded-lg p-4 border border-gray-600">
                <h4 className="font-semibold text-white mb-4">Value Methodology</h4>
                <div className="text-sm text-gray-300 space-y-2">
                  <p>• Based on Kevin Pelton's 2017 Draft Pick Value Chart</p>
                  <p>• Future picks depreciate by 15% per year beyond the first year</p>
                  <p>• Second round picks valued at 30% of first round equivalent</p>
                  <p>• Trades within 20% value difference are considered balanced</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">
              <p>Unable to evaluate trade. Please ensure both teams have selected picks.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 