import React from 'react';
import HomeHero from './components/HomeHero';
import { FeatureGrid } from './components/FeatureGrid';
import { SecurityAssurance } from './components/SecurityAssurance';
import { StepsFlow } from './components/StepsFlow';
import { DepositCTA } from './components/DepositCTA';
import { BenefitGrid } from './components/BenefitGrid';
import { CommunityStrip } from './components/CommunityStrip';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#282a1e] text-[#fdfff9] font-sans selection:bg-[#d3f54c] selection:text-[#282a1e] overflow-x-hidden relative">
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#d3f54c 2px, transparent 2px)', backgroundSize: '40px 40px' }}
      />

      <main className="relative z-10 space-y-12 pb-20">
        <HomeHero />
        <FeatureGrid />
        <SecurityAssurance />
        <StepsFlow />
        <CommunityStrip />
        <DepositCTA />
        <BenefitGrid />
      </main>
    </div>
  );
};

export default HomePage;
