'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">
              NBA Draft Pick Trade Analyzer
            </h1>
            <p className="text-gray-400 mt-2">
              Compare and evaluate draft pick trades between NBA teams
            </p>
          </div>
          
          <nav className="flex space-x-4">
            <Link 
              href="/"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                pathname === '/' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              🏠 Home
            </Link>
            <Link 
              href="/saved-analyses"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                pathname === '/saved-analyses' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              📊 Saved Analyses
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 