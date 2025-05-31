'use client';

import { useState } from 'react';
import { NBATeam, DraftPick, TradeScenario, TeamTradeSide, TradeAsset } from '../../lib/types';
import { NBA_TEAMS, generateTeamPicks } from '../../lib/nba-teams';
import TeamSelector from './TeamSelector';
import PickSelector from './PickSelector';
import TradePreview from './TradePreview';
import TradeEvaluationModal from './TradeEvaluationModal';

export default function TradeScenarioBuilder() {
  const [selectedTeams, setSelectedTeams] = useState<[string, string]>(['', '']);
  const [tradeScenario, setTradeScenario] = useState<TradeScenario | null>(null);
  const [teamAPicks, setTeamAPicks] = useState<DraftPick[]>([]);
  const [teamBPicks, setTeamBPicks] = useState<DraftPick[]>([]);
  const [teamAGives, setTeamAGives] = useState<DraftPick[]>([]);
  const [teamBGives, setTeamBGives] = useState<DraftPick[]>([]);
  const [showEvaluation, setShowEvaluation] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleTeamSelection = (teamIndex: 0 | 1, teamId: string) => {
    const newSelectedTeams = [...selectedTeams] as [string, string];
    newSelectedTeams[teamIndex] = teamId;
    setSelectedTeams(newSelectedTeams);

    // Generate available picks for the selected team
    if (teamId) {
      const picks = generateTeamPicks(teamId, currentYear, 6);
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

  const teamAAssets: TradeAsset[] = teamAGives.map(pick => ({ type: 'pick', pick }));
  const teamBAssets: TradeAsset[] = teamBGives.map(pick => ({ type: 'pick', pick }));

  const canEvaluate = selectedTeams[0] && selectedTeams[1] && teamAGives.length > 0 && teamBGives.length > 0;

  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Create Trade Scenario
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Team A Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-200">Team A</h3>
            <TeamSelector
              selectedTeamId={selectedTeams[0]}
              onTeamSelect={(teamId) => handleTeamSelection(0, teamId)}
              excludeTeamId={selectedTeams[1]}
            />
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
            <TeamSelector
              selectedTeamId={selectedTeams[1]}
              onTeamSelect={(teamId) => handleTeamSelection(1, teamId)}
              excludeTeamId={selectedTeams[0]}
            />
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
        onClose={() => setShowEvaluation(false)}
        teamAAssets={teamAAssets}
        teamBAssets={teamBAssets}
        teamAId={selectedTeams[0]}
        teamBId={selectedTeams[1]}
      />
    </div>
  );
} 