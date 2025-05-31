'use client';

import { useState } from 'react';
import { OwnedDraftPick } from '../../lib/types';

interface PickSelectorProps {
  teamId: string;
  availablePicks: OwnedDraftPick[];
  title: string;
  onPicksChange: (picks: OwnedDraftPick[]) => void;
}

export default function PickSelector({ teamId, availablePicks, title, onPicksChange }: PickSelectorProps) {
  const [selectedPickIds, setSelectedPickIds] = useState<string[]>([]);

  const handlePickToggle = (pick: OwnedDraftPick) => {
    const isSelected = selectedPickIds.includes(pick.id);
    let newSelectedIds: string[];
    
    if (isSelected) {
      newSelectedIds = selectedPickIds.filter(id => id !== pick.id);
    } else {
      newSelectedIds = [...selectedPickIds, pick.id];
    }
    
    setSelectedPickIds(newSelectedIds);
    const selectedPicks = availablePicks.filter(p => newSelectedIds.includes(p.id));
    onPicksChange(selectedPicks);
  };

  const getPickTypeColor = (type: string) => {
    switch (type) {
      case 'own': return 'bg-green-600';
      case 'acquired': return 'bg-blue-600';
      case 'swap': return 'bg-purple-600';
      case 'conditional': return 'bg-yellow-600';
      default: return 'bg-gray-600';
    }
  };

  const getPickTypeLabel = (type: string) => {
    switch (type) {
      case 'own': return 'Own';
      case 'acquired': return 'Acquired';
      case 'swap': return 'Swap';
      case 'conditional': return 'Conditional';
      default: return 'Unknown';
    }
  };

  const formatProtections = (pick: OwnedDraftPick) => {
    if (!pick.protections || pick.protections.length === 0) return '';
    
    return pick.protections.map(protection => {
      if (protection.type === 'top') {
        return `Top ${protection.value}`;
      } else if (protection.type === 'range') {
        return Array.isArray(protection.value) 
          ? `${protection.value[0]}-${protection.value[1]}`
          : `${protection.value}`;
      } else if (protection.type === 'lottery') {
        return 'Lottery';
      }
      return '';
    }).join(', ');
  };

  // Group picks by year
  const picksByYear = availablePicks.reduce((acc, pick) => {
    if (!acc[pick.year]) {
      acc[pick.year] = [];
    }
    acc[pick.year].push(pick);
    return acc;
  }, {} as Record<number, OwnedDraftPick[]>);

  const sortedYears = Object.keys(picksByYear).map(Number).sort();

  if (availablePicks.length === 0) {
    return (
      <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
        <h4 className="text-sm font-medium text-gray-300 mb-2">{title}</h4>
        <p className="text-sm text-gray-500">No draft picks available</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
      <h4 className="text-sm font-medium text-gray-300 mb-4">{title}</h4>
      
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {sortedYears.map(year => (
          <div key={year} className="space-y-2">
            <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              {year} Draft
            </h5>
            
            <div className="space-y-2">
              {picksByYear[year]
                .sort((a, b) => a.round - b.round)
                .map(pick => (
                  <div
                    key={pick.id}
                    onClick={() => handlePickToggle(pick)}
                    className={`
                      cursor-pointer rounded-lg p-3 border transition-all duration-200
                      ${selectedPickIds.includes(pick.id)
                        ? 'border-blue-500 bg-blue-500/20 ring-2 ring-blue-500/30'
                        : 'border-gray-600 bg-gray-800/50 hover:bg-gray-700/50 hover:border-gray-500'
                      }
                    `}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-medium text-white">
                            {year} Round {pick.round}
                          </span>
                          <span className={`px-2 py-0.5 text-xs font-medium text-white rounded ${getPickTypeColor(pick.type)}`}>
                            {getPickTypeLabel(pick.type)}
                          </span>
                          {pick.originalOwner !== teamId && (
                            <span className="text-xs text-gray-400">
                              (from {pick.originalOwner})
                            </span>
                          )}
                        </div>
                        
                        {formatProtections(pick) && (
                          <div className="text-xs text-orange-400 mb-1">
                            Protected: {formatProtections(pick)}
                          </div>
                        )}
                        
                        <div className="text-xs text-gray-400 line-clamp-2">
                          {pick.description}
                        </div>
                        
                        {pick.conditionalRules && (
                          <div className="text-xs text-yellow-400 mt-1">
                            Conditional: {pick.conditionalRules.condition}
                          </div>
                        )}
                        
                        {pick.swapConditions && (
                          <div className="text-xs text-purple-400 mt-1">
                            Swap: {pick.swapConditions.description}
                          </div>
                        )}
                      </div>
                      
                      <div className="ml-3 flex-shrink-0">
                        <div className={`
                          w-5 h-5 rounded border-2 flex items-center justify-center
                          ${selectedPickIds.includes(pick.id)
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-400'
                          }
                        `}>
                          {selectedPickIds.includes(pick.id) && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      
      {selectedPickIds.length > 0 && (
        <div className="mt-4 p-3 bg-blue-900/30 rounded-lg border border-blue-600/30">
          <div className="text-sm text-blue-200">
            Selected {selectedPickIds.length} pick{selectedPickIds.length !== 1 ? 's' : ''}
          </div>
        </div>
      )}
    </div>
  );
} 