import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Traction } from '../components/Traction';
import { PriceBreakdown } from '../components/PriceBreakdown';
import { DeepDive } from '../components/DeepDive';
import { Roadmap } from '../components/Roadmap';
import { Raise } from '../components/Raise';
import { Footer } from '../components/Footer';

const InvestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#282a1e] text-[#fdfff9] font-sans selection:bg-[#d3f54c] selection:text-[#282a1e] overflow-x-hidden relative">
      {/* Global Faint Dotted Background Pattern */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(#d3f54c_2px,transparent_2px)] bg-[length:60px_60px] opacity-[0.02] pointer-events-none"></div>

      <main className="relative z-[10]">
        <div className="relative z-[10]">
          <Hero />
        </div>
        <div className="relative -mt-20 z-[20]">
          <Services />
        </div>
        <div className="relative -mt-20 z-[30]">
          <Traction />
        </div>
        <div className="relative -mt-20 z-[40]">
          <DeepDive />
        </div>
        <div className="relative -mt-20 z-[50]">
          <PriceBreakdown />
        </div>
        <div className="relative -mt-20 z-[60]">
          <Roadmap />
        </div>
        <div className="relative -mt-20 z-[70]">
          <Raise />
        </div>
        <div className="relative -mt-20 z-[80]">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default InvestPage;
