import TradeScenarioBuilder from './components/TradeScenarioBuilder';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">
            NBA Draft Pick Trade Analyzer
          </h1>
          <p className="text-gray-400 mt-2">
            Compare and evaluate draft pick trades between NBA teams
          </p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <TradeScenarioBuilder />
      </main>
    </div>
  );
}
