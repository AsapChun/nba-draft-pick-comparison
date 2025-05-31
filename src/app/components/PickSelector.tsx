'use client';

import { useState } from 'react';
import { DraftPick } from '../../lib/types';

interface PickSelectorProps {
  teamId: string;
  availablePicks: DraftPick[];
  title: string;
  onPicksChange: (picks: DraftPick[]) => void;
}

export default function PickSelector({ teamId, availablePicks, title, onPicksChange }: PickSelectorProps) {
  const [selectedPicks, setSelectedPicks] = useState<DraftPick[]>([]);

  const handlePickToggle = (pick: DraftPick) => {
    const isSelected = selectedPicks.some(p => p.id === pick.id);
    let newSelectedPicks;
    
    if (isSelected) {
      newSelectedPicks = selectedPicks.filter(p => p.id !== pick.id);
    } else {
      newSelectedPicks = [...selectedPicks, pick];
    }
    
    setSelectedPicks(newSelectedPicks);
    onPicksChange(newSelectedPicks);
  };

  const groupPicksByYear = (picks: DraftPick[]) => {
    return picks.reduce((acc, pick) => {
      if (!acc[pick.year]) {
        acc[pick.year] = [];
      }
      acc[pick.year].push(pick);
      return acc;
    }, {} as Record<number, DraftPick[]>);
  };

  const groupedPicks = groupPicksByYear(availablePicks);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-gray-100 text-lg">{title}</h4>
        {selectedPicks.length > 0 && (
          <span className="text-sm text-blue-400 font-medium">
            {selectedPicks.length} selected
          </span>
        )}
      </div>
      
      <div className="relative">
        <div className="border-2 border-gray-600 rounded-lg bg-gray-750 shadow-inner">
          <div className="max-h-64 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
            {Object.entries(groupedPicks).map(([year, picks]) => (
              <div key={year} className="space-y-3">
                <div className="pb-2 border-b border-gray-600">
                  <h5 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                    {year} Draft
                  </h5>
                </div>
                <div className="space-y-2 pl-2">
                  {picks.map(pick => {
                    const isSelected = selectedPicks.some(p => p.id === pick.id);
                    return (
                      <label 
                        key={pick.id}
                        className={`flex items-center space-x-3 p-3 rounded-md cursor-pointer transition-all duration-200 border ${
                          isSelected 
                            ? 'bg-blue-600 border-blue-500 text-white shadow-md transform scale-[1.02]' 
                            : 'bg-gray-700 border-gray-600 hover:bg-gray-650 hover:border-gray-500 text-gray-200 hover:shadow-sm'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handlePickToggle(pick)}
                          className="rounded border-gray-400 text-blue-600 focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-sm font-medium">
                          {pick.year} {pick.round === 1 ? '1st' : '2nd'} Round Pick
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {availablePicks.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                <p className="text-sm">No draft picks available</p>
              </div>
            )}
          </div>
          
          {availablePicks.length > 6 && (
            <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
              Scroll for more
            </div>
          )}
        </div>
      </div>

      {selectedPicks.length > 0 && (
        <div className="mt-4 p-4 bg-gray-700 border border-gray-600 rounded-lg">
          <h5 className="text-sm font-semibold text-gray-200 mb-3 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Selected Picks
          </h5>
          <div className="grid grid-cols-1 gap-2">
            {selectedPicks.map(pick => (
              <div key={pick.id} className="flex items-center justify-between text-sm bg-gray-650 p-2 rounded border border-gray-600">
                <span className="text-gray-300 font-medium">
                  {pick.year} {pick.round === 1 ? '1st' : '2nd'} Round
                </span>
                <button 
                  onClick={() => handlePickToggle(pick)}
                  className="text-red-400 hover:text-red-300 text-xs cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 