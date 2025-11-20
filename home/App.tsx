import React from 'react';
import { Hero } from './components/Hero';
import { FeaturesGrid } from './components/FeaturesGrid';
import { SecuritySection } from './components/SecuritySection';
import { Steps } from './components/Steps';
import { ComparisonSection } from './components/ComparisonSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="bg-olive text-ivory min-h-screen selection:bg-lime selection:text-olive">
      {/* Global Background Noise */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(#d3f54c_2px,transparent_2px)] bg-[length:60px_60px] opacity-[0.02] pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Base Layer */}
        <div className="relative z-10">
          <Hero />
        </div>
        
        {/* Stacking Logic: 
            Each section needs a higher z-index than the previous one.
            Negative margins pull them up to cover the bottom of the previous section.
        */}
        
        <div className="relative -mt-20 z-20">
           <FeaturesGrid />
        </div>
        
        <div className="relative -mt-20 z-30">
           <SecuritySection />
        </div>

        <div className="relative -mt-20 z-40">
           <Steps />
        </div>

        {/* Formerly the Footer Content */}
        <div className="relative -mt-20 z-50">
           <ComparisonSection />
        </div>

        {/* Intelligence Section */}
        <div className="relative -mt-20 z-60">
           <BlogSection />
        </div>
        
        {/* True Footer - High z-index to stack on top of BlogSection */}
        <div className="relative -mt-20 z-70">
           <Footer />
        </div>
      </div>
    </main>
  );
}