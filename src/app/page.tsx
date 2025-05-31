import TradeScenarioBuilder from './components/TradeScenarioBuilder';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <TradeScenarioBuilder />
      </main>
    </div>
  );
}
