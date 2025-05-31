'use client';

import { useState } from 'react';
import { NBATeam, TradeScenario, TeamTradeSide, TradeAsset, OwnedDraftPick } from '../../lib/types';
import { NBA_TEAMS } from '../../lib/nba-teams';
import { getTeamOwnedPicks, analyzeTeamDraftCapital } from '../../lib/draft-picks';
import PickSelector from './PickSelector';
import TradeEvaluationModal from './TradeEvaluationModal';

export default function TradeScenarioBuilder() {
  const [selectedTeams, setSelectedTeams] = useState<[string, string]>(['', '']);
  const [teamAPicks, setTeamAPicks] = useState<OwnedDraftPick[]>([]);
  const [teamBPicks, setTeamBPicks] = useState<OwnedDraftPick[]>([]);
  const [teamAGives, setTeamAGives] = useState<OwnedDraftPick[]>([]);
  const [teamBGives, setTeamBGives] = useState<OwnedDraftPick[]>([]);
  const [showEvaluation, setShowEvaluation] = useState(false);

  const currentYear = new Date().getFullYear();

  // Get pick counts for all teams for display in team selector
  const getTeamPickCount = (teamId: string): number => {
    return getTeamOwnedPicks(teamId).length;
  };

  const handleTeamSelection = (teamIndex: 0 | 1, teamId: string) => {
    const newSelectedTeams = [...selectedTeams] as [string, string];
    newSelectedTeams[teamIndex] = teamId;
    setSelectedTeams(newSelectedTeams);

    // Get actual owned picks for the selected team
    if (teamId) {
      const picks = getTeamOwnedPicks(teamId);
      if (teamIndex === 0) {
        setTeamAPicks(picks);
        setTeamAGives([]);
      } else {
        setTeamBPicks(picks);
        setTeamBGives([]);
      }
    }
  };

  const handleEvaluateTrade = () => {
    if (teamAGives.length > 0 && teamBGives.length > 0) {
      setShowEvaluation(true);
    }
  };

  // Reset function to bring everything back to initial state
  const handleReset = () => {
    setSelectedTeams(['', '']);
    setTeamAPicks([]);
    setTeamBPicks([]);
    setTeamAGives([]);
    setTeamBGives([]);
    setShowEvaluation(false);
  };

  // Convert OwnedDraftPick to TradeAsset (no more legacy conversion!)
  const teamAAssets: TradeAsset[] = teamAGives.map(pick => ({ 
    type: 'pick', 
    pick: pick 
  }));
  const teamBAssets: TradeAsset[] = teamBGives.map(pick => ({ 
    type: 'pick', 
    pick: pick 
  }));

  const canEvaluate = selectedTeams[0] && selectedTeams[1] && teamAGives.length > 0 && teamBGives.length > 0;

  // Modified close handler that resets the page after closing modal
  const handleCloseModal = () => {
    setShowEvaluation(false);
    handleReset(); // This will reset all state back to initial values
  };

  return (
    <div className="space-y-8">
      {/* Data Validity Notice */}
      <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400">⚠️</span>
          <p className="text-yellow-200 text-sm">
            <strong>Data Validity:</strong> Draft pick information is accurate as of May 31, 2024. 
            Trades and transactions after this date are not reflected in the current data.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">
            Create Trade Scenario
          </h2>
          <button
            onClick={handleReset}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-lg transform hover:scale-105 cursor-pointer text-sm"
          >
            🔄 Reset
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Team A Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">Team A</h3>
            <div className="space-y-2">
              <label className="block text-sm text-gray-300 mb-2">Select Team</label>
              <select
                value={selectedTeams[0]}
                onChange={(e) => handleTeamSelection(0, e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Choose a team...</option>
                {NBA_TEAMS.filter(team => team.id !== selectedTeams[1]).map(team => {
                  const pickCount = getTeamPickCount(team.id);
                  return (
                    <option key={team.id} value={team.id}>
                      {team.city} {team.name} ({pickCount} picks)
                    </option>
                  );
                })}
              </select>
            </div>
            {selectedTeams[0] && (
              <PickSelector
                key={selectedTeams[0]}
                teamId={selectedTeams[0]}
                availablePicks={teamAPicks}
                title="Team A Gives"
                onPicksChange={setTeamAGives}
              />
            )}
          </div>

          {/* Team B Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">Team B</h3>
            <div className="space-y-2">
              <label className="block text-sm text-gray-300 mb-2">Select Team</label>
              <select
                value={selectedTeams[1]}
                onChange={(e) => handleTeamSelection(1, e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Choose a team...</option>
                {NBA_TEAMS.filter(team => team.id !== selectedTeams[0]).map(team => {
                  const pickCount = getTeamPickCount(team.id);
                  return (
                    <option key={team.id} value={team.id}>
                      {team.city} {team.name} ({pickCount} picks)
                    </option>
                  );
                })}
              </select>
            </div>
            {selectedTeams[1] && (
              <PickSelector
                key={selectedTeams[1]}
                teamId={selectedTeams[1]}
                availablePicks={teamBPicks}
                title="Team B Gives"
                onPicksChange={setTeamBGives}
              />
            )}
          </div>
        </div>

        {/* Draft Capital Summary */}
        {(selectedTeams[0] || selectedTeams[1]) && (
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {selectedTeams[0] && (
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">
                  {NBA_TEAMS.find(t => t.id === selectedTeams[0])?.city} {NBA_TEAMS.find(t => t.id === selectedTeams[0])?.name} Draft Capital
                </h4>
                <div className="text-sm text-gray-400">
                  {(() => {
                    const analysis = analyzeTeamDraftCapital(selectedTeams[0]);
                    return (
                      <div className="space-y-1">
                        <div>Total Picks: {analysis.totalFirstRoundPicks + analysis.totalSecondRoundPicks}</div>
                        <div>First Round: {analysis.totalFirstRoundPicks} | Second Round: {analysis.totalSecondRoundPicks}</div>
                        <div>Own: {analysis.ownOriginalPicks} | Acquired: {analysis.acquiredPicks}</div>
                        {analysis.swapPicks > 0 && <div>Swaps: {analysis.swapPicks}</div>}
                        {analysis.conditionalPicks > 0 && <div>Conditional: {analysis.conditionalPicks}</div>}
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
            {selectedTeams[1] && (
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">
                  {NBA_TEAMS.find(t => t.id === selectedTeams[1])?.city} {NBA_TEAMS.find(t => t.id === selectedTeams[1])?.name} Draft Capital
                </h4>
                <div className="text-sm text-gray-400">
                  {(() => {
                    const analysis = analyzeTeamDraftCapital(selectedTeams[1]);
                    return (
                      <div className="space-y-1">
                        <div>Total Picks: {analysis.totalFirstRoundPicks + analysis.totalSecondRoundPicks}</div>
                        <div>First Round: {analysis.totalFirstRoundPicks} | Second Round: {analysis.totalSecondRoundPicks}</div>
                        <div>Own: {analysis.ownOriginalPicks} | Acquired: {analysis.acquiredPicks}</div>
                        {analysis.swapPicks > 0 && <div>Swaps: {analysis.swapPicks}</div>}
                        {analysis.conditionalPicks > 0 && <div>Conditional: {analysis.conditionalPicks}</div>}
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Evaluate Trade Button */}
        {canEvaluate && (
          <div className="mt-8 text-center">
            <button
              onClick={handleEvaluateTrade}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg transform hover:scale-105 cursor-pointer"
            >
              🏀 Evaluate Trade
            </button>
          </div>
        )}
      </div>

      {/* Trade Evaluation Modal */}
      <TradeEvaluationModal
        isOpen={showEvaluation}
        onClose={handleCloseModal}
        teamAAssets={teamAAssets}
        teamBAssets={teamBAssets}
        teamAId={selectedTeams[0]}
        teamBId={selectedTeams[1]}
      />
    </div>
  );
} 