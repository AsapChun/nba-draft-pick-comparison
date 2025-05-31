'use client';

import { TradeScenario } from '../../lib/types';
import { NBA_TEAMS } from '../../lib/nba-teams';

interface TradePreviewProps {
  scenario: TradeScenario;
}

export default function TradePreview({ scenario }: TradePreviewProps) {
  const [teamA, teamB] = scenario.teams;
  const teamAData = NBA_TEAMS.find(t => t.id === teamA.teamId);
  const teamBData = NBA_TEAMS.find(t => t.id === teamB.teamId);

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-semibold mb-6 text-white">Trade Preview</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Team A Side */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            {teamAData && (
              <>
                <div 
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: teamAData.primaryColor }}
                />
                <h4 className="text-lg font-medium text-white">
                  {teamAData.city} {teamAData.name}
                </h4>
              </>
            )}
          </div>
          
          <div className="space-y-3">
            <div>
              <h5 className="text-sm font-medium text-green-400 mb-2">Receives:</h5>
              <div className="space-y-1">
                {teamA.receives.map((asset, index) => (
                  <div key={index} className="text-sm text-gray-300 bg-green-900/20 p-2 rounded">
                    {asset.pick.year} {asset.pick.round === 1 ? '1st' : '2nd'} Round Pick
                    {asset.pick.originalTeam !== teamA.teamId && (
                      <span className="text-gray-400">
                        {' '}(originally {NBA_TEAMS.find(t => t.id === asset.pick.originalTeam)?.abbreviation})
                      </span>
                    )}
                  </div>
                ))}
                {teamA.receives.length === 0 && (
                  <div className="text-sm text-gray-500 italic">Nothing</div>
                )}
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-red-400 mb-2">Gives:</h5>
              <div className="space-y-1">
                {teamA.gives.map((asset, index) => (
                  <div key={index} className="text-sm text-gray-300 bg-red-900/20 p-2 rounded">
                    {asset.pick.year} {asset.pick.round === 1 ? '1st' : '2nd'} Round Pick
                  </div>
                ))}
                {teamA.gives.length === 0 && (
                  <div className="text-sm text-gray-500 italic">Nothing</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Trade Arrow */}
        <div className="hidden md:flex items-center justify-center">
          <div className="text-2xl text-gray-400">⟷</div>
        </div>

        {/* Team B Side */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            {teamBData && (
              <>
                <div 
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: teamBData.primaryColor }}
                />
                <h4 className="text-lg font-medium text-white">
                  {teamBData.city} {teamBData.name}
                </h4>
              </>
            )}
          </div>
          
          <div className="space-y-3">
            <div>
              <h5 className="text-sm font-medium text-green-400 mb-2">Receives:</h5>
              <div className="space-y-1">
                {teamB.receives.map((asset, index) => (
                  <div key={index} className="text-sm text-gray-300 bg-green-900/20 p-2 rounded">
                    {asset.pick.year} {asset.pick.round === 1 ? '1st' : '2nd'} Round Pick
                    {asset.pick.originalTeam !== teamB.teamId && (
                      <span className="text-gray-400">
                        {' '}(originally {NBA_TEAMS.find(t => t.id === asset.pick.originalTeam)?.abbreviation})
                      </span>
                    )}
                  </div>
                ))}
                {teamB.receives.length === 0 && (
                  <div className="text-sm text-gray-500 italic">Nothing</div>
                )}
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-red-400 mb-2">Gives:</h5>
              <div className="space-y-1">
                {teamB.gives.map((asset, index) => (
                  <div key={index} className="text-sm text-gray-300 bg-red-900/20 p-2 rounded">
                    {asset.pick.year} {asset.pick.round === 1 ? '1st' : '2nd'} Round Pick
                  </div>
                ))}
                {teamB.gives.length === 0 && (
                  <div className="text-sm text-gray-500 italic">Nothing</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trade Summary */}
      <div className="mt-6 pt-6 border-t border-gray-700">
        <div className="text-sm text-gray-400">
          Trade created on {scenario.createdAt.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
} 