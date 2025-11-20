import React from 'react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Hexagon, Triangle, Zap, TrendingUp, Wallet, Timer } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: "Higher margins, Higher scale",
    desc: "Cutting costs is the first step towards higher profits. Leverage our buying power, local network, and in-depth expertise of the Chinese market to expand worldwide with higher margins."
  },
  {
    icon: Wallet,
    title: "No more cash tied in inventory",
    desc: "With fast local stock inbounds there is neither overstock nor under stock, turning the overstored inventory in your local warehouse into accessible funds."
  },
  {
    icon: Timer,
    title: "2 to 3 months faster to market",
    desc: "Get your products to the market in a snap, allowing you to immediately sell inventory and new product batches. Save both money and time."
  }
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="solutions" className="py-32 px-4 lg:px-12 bg-charcoal relative rounded-t-[4rem] overflow-hidden">
      {/* Texture for Charcoal section */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fdfff9 1px, transparent 1px), linear-gradient(90deg, #fdfff9 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-24 gap-10">
          <div className="max-w-5xl">
            <Badge label="Solutions Overview" color="ivory" />
            <h2 className="text-6xl lg:text-8xl font-bold tracking-tighter mt-8 text-ivory">
              Sourcing built for <br/>
              <span className="font-serif italic text-lime">brands & founders.</span>
            </h2>
            <p className="text-ivory/60 text-2xl mt-8 max-w-3xl leading-relaxed font-light">
              Every engagement is designed to lower landed costs, raise quality, and accelerate delivery.
              The same sovereign look and feel from /invest now powers your sourcing control center.
            </p>
            
            {/* Brand Logos Section */}
            <div className="mt-12 pt-12 border-t border-white/5">
              <p className="text-sm font-bold uppercase tracking-widest text-ivory/30 mb-8">Powering Logistics For</p>
              <div className="flex flex-wrap items-center gap-12 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
                {/* Brand 1 - Geometric */}
                <div className="flex items-center gap-3 group cursor-default">
                  <Hexagon className="text-lime w-10 h-10" strokeWidth={2.5} />
                  <span className="text-3xl font-bold tracking-widest text-ivory group-hover:text-lime transition-colors">VORTEX</span>
                </div>
                {/* Brand 2 - Serif */}
                <div className="flex items-center gap-3 group cursor-default">
                   <span className="font-serif italic text-4xl font-bold text-ivory group-hover:text-lime transition-colors">Aether</span>
                </div>
                 {/* Brand 3 - Tech */}
                <div className="flex items-center gap-3 group cursor-default">
                  <Triangle className="text-lime w-8 h-8 rotate-180" strokeWidth={3} fill="currentColor" />
                  <span className="text-3xl font-bold tracking-tighter text-ivory group-hover:text-lime transition-colors">KINETIC</span>
                </div>
                 {/* Brand 4 - Bold */}
                <div className="flex items-center gap-3 group cursor-default">
                  <Zap className="text-lime w-8 h-8" strokeWidth={3} />
                  <span className="text-3xl font-bold text-ivory group-hover:text-lime transition-colors flex items-center gap-1">
                    OBLIVION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Card key={i} variant="dark" className="group min-h-[400px] flex flex-col justify-between !bg-olive/50 border-white/5 hover:!bg-olive transition-colors relative overflow-visible">
              <div>
                <div className="w-16 h-16 rounded-[1.5rem] bg-olive border border-white/10 flex items-center justify-center text-lime mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_-10px_rgba(211,245,76,0.2)]">
                  <f.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl xl:text-4xl font-bold text-ivory mb-6 tracking-tight leading-[1.1]">{f.title}</h3>
                <p className="text-xl text-ivory/60 leading-relaxed font-light">{f.desc}</p>
              </div>
              
              <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="h-1.5 w-12 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-lime group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
                <span className="text-2xl font-serif italic text-white/10 group-hover:text-lime/50 transition-colors">0{i + 1}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
