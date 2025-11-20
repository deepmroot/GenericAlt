import React from 'react';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { SecuritySection } from './components/SecuritySection';
import { Steps } from './components/Steps';
import { ComparisonSection } from './components/ComparisonSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';

// HomePage consolidates previous App structure for routing as /home
export default function HomePage() {
  return (
    <main className="bg-olive text-ivory min-h-screen selection:bg-lime selection:text-olive">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(#d3f54c_2px,transparent_2px)] bg-[length:60px_60px] opacity-[0.02] pointer-events-none"></div>
      <div className="relative z-[10]">
        <div className="relative z-[10]">
          <Hero />
        </div>
        <div className="relative -mt-20 z-[20]">
          <FeaturesGrid />
        </div>
        <div className="relative -mt-20 z-[30]">
          <SecuritySection />
        </div>
        <div className="relative -mt-20 z-[40]">
          <Steps />
        </div>
        <div className="relative -mt-20 z-[50]">
          <ComparisonSection />
        </div>
        <div className="relative -mt-20 z-[60]">
          <BlogSection />
        </div>
        <div className="relative -mt-20 z-[70]">
          <Footer />
        </div>
      </div>
    </main>
  );
}
