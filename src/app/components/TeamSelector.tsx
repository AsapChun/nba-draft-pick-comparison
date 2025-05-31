'use client';

import { NBA_TEAMS } from '../../lib/nba-teams';
import { NBATeam } from '../../lib/types';

interface TeamSelectorProps {
  selectedTeamId: string;
  onTeamSelect: (teamId: string) => void;
  excludeTeamId?: string;
}

export default function TeamSelector({ selectedTeamId, onTeamSelect, excludeTeamId }: TeamSelectorProps) {
  const availableTeams = NBA_TEAMS.filter(team => team.id !== excludeTeamId);
  const selectedTeam = NBA_TEAMS.find(team => team.id === selectedTeamId);

  return (
    <div className="space-y-3">
      <select
        value={selectedTeamId}
        onChange={(e) => onTeamSelect(e.target.value)}
        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
      >
        <option value="">Select a team...</option>
        {availableTeams.map(team => (
          <option key={team.id} value={team.id}>
            {team.city} {team.name}
          </option>
        ))}
      </select>

      {selectedTeam && (
        <div 
          className="flex items-center space-x-3 p-3 rounded-lg border"
          style={{ 
            borderColor: selectedTeam.primaryColor,
            backgroundColor: `${selectedTeam.primaryColor}15`
          }}
        >
          <div 
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: selectedTeam.primaryColor }}
          />
          <span className="font-medium text-white">
            {selectedTeam.city} {selectedTeam.name}
          </span>
          <span className="text-sm text-gray-400">
            ({selectedTeam.abbreviation})
          </span>
        </div>
      )}
    </div>
  );
} 