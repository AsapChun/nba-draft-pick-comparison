'use client';

import { useEffect, useState } from 'react';
import TradeScenarioBuilder from './components/TradeScenarioBuilder';
import NavBar from './components/NavBar';
import HowToUseModal from './components/HowToUseModal';

export default function Home() {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('nba-draft-analyzer-visited');
    
    if (!hasVisited) {
      // First time user - show the How To Use modal
      setShowWelcomeModal(true);
      // Mark as visited
      localStorage.setItem('nba-draft-analyzer-visited', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <TradeScenarioBuilder />
      </main>

      {/* Welcome modal for first-time users */}
      <HowToUseModal 
        isOpen={showWelcomeModal} 
        onClose={() => setShowWelcomeModal(false)} 
      />
    </div>
  );
}
