'use client';

import { useState, useEffect } from 'react';

interface HowToUseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HowToUseModal({ isOpen, onClose }: HowToUseModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const steps = [
    { icon: '👥', title: 'Select Teams', description: 'Choose two teams to simulate a trade.' },
    { icon: '🎯', title: 'Pick Assets', description: 'Select draft picks each team trades away.' },
    { icon: '🤖', title: 'Comprehensive Analysis', description: 'Get comprehensive trade evaluation.' },
    { icon: '💾', title: 'Save Results', description: 'Save scenarios to compare later.' }
  ];

  const pickTypes = [
    { icon: '🏠', label: 'Own', color: 'text-gray-300' },
    { icon: '📈', label: 'Acquired', color: 'text-green-300' },
    { icon: '🛡️', label: 'Protected', color: 'text-blue-300' },
    { icon: '🔄', label: 'Swap', color: 'text-purple-300' },
    { icon: '❓', label: 'Conditional', color: 'text-orange-300' }
  ];

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800/95 backdrop-blur-md rounded-lg w-full max-w-md max-h-[70vh] border border-gray-600/50 shadow-2xl flex flex-col">
        {/* Header - Fixed */}
        <div className="flex justify-between items-center p-4 border-b border-gray-600/30">
          <h2 className="text-lg font-bold text-white flex items-center">
            <span className="mr-2">🎓</span>
            How to Use
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl cursor-pointer transition-colors"
          >
            ×
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Welcome Message */}
          <div className="bg-blue-900/20 border border-blue-600/30 rounded p-3">
            <p className="text-blue-100 text-xs">
              Evaluate NBA draft pick trades using AI analysis.
            </p>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">How It Works</h3>
            <div className="space-y-2">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-2 bg-gray-700/50 rounded p-2">
                  <div className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm">{step.icon}</span>
                      <h4 className="font-medium text-white text-xs">{step.title}</h4>
                    </div>
                    <p className="text-gray-300 text-xs leading-tight">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pick Types */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">Pick Types</h3>
            <div className="flex flex-wrap gap-1">
              {pickTypes.map((type, index) => (
                <div key={index} className="flex items-center space-x-1 bg-gray-700/50 rounded px-2 py-1">
                  <span className="text-xs">{type.icon}</span>
                  <span className={`${type.color} text-xs font-medium`}>{type.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tips */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-2">Quick Notes</h3>
            <div className="bg-gray-700/50 rounded p-2">
              <ul className="space-y-1 text-gray-300 text-xs">
                <li className="flex items-start space-x-1">
                  <span className="text-green-400 text-xs mt-0.5">✓</span>
                  <span>Look for complementary team needs</span>
                </li>
                <li className="flex items-start space-x-1">
                  <span className="text-green-400 text-xs mt-0.5">✓</span>
                  <span>Pay attention to pick protections</span>
                </li>
                <li className="flex items-start space-x-1">
                  <span className="text-green-400 text-xs mt-0.5">✓</span>
                  <span>Consider draft class strength</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Button - Fixed */}
        <div className="p-4 border-t border-gray-600/30">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-sm transition-colors duration-200 cursor-pointer"
          >
            🚀 Got it!
          </button>
        </div>
      </div>
    </div>
  );
} 