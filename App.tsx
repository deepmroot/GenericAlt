
import React from 'react';
// Navigation removed as per request
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Traction } from './components/Traction';
import { PriceBreakdown } from './components/PriceBreakdown';
import { DeepDive } from './components/DeepDive';
import { Roadmap } from './components/Roadmap';
import { Raise } from './components/Raise';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#282a1e] text-[#fdfff9] font-sans selection:bg-[#d3f54c] selection:text-[#282a1e] overflow-x-hidden relative">
      
      {/* Global Faint Dotted Background Pattern */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(#d3f54c 2px, transparent 2px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <main className="relative z-10">
        <Hero />
        <Services />
        <Traction />
        <DeepDive />
        <PriceBreakdown />
        <Roadmap />
        <Raise />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
