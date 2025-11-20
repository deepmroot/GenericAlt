import React from 'react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { ArrowRight, Check } from 'lucide-react';

export const Steps: React.FC = () => {
  const steps = [
    {
      num: "01",
      tag: "Discovery",
      title: "Tell us what you need",
      desc: "Share target specs, unit volumes, and delivery windows so we tailor the sourcing plan."
    },
    {
      num: "02",
      tag: "Verification",
      title: "Factory shortlist & samples",
      desc: "We pre-vet suppliers, send samples, and align on compliance requirements early."
    },
    {
      num: "03",
      tag: "In Motion",
      title: "Ship, track, and deliver",
      desc: "Consolidate freight, manage customs, and keep every shipment on-time with live updates."
    }
  ];

  const comparisonPoints = [
    "We speak your language",
    "24/7 global support",
    "Production-to-Ship in 24h",
    "99.8% QC accuracy",
    "Streamlined inventory management",
    "Same-day stock processing",
    "Hide the china origin",
    "99.9% successful delivery rate",
    "Built for growth and scalability"
  ];

  return (
    <section id="process" className="py-32 px-4 lg:px-12 bg-charcoal relative rounded-t-[4rem] shadow-[0_-40px_80px_rgba(0,0,0,0.3)] overflow-hidden">
      
      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fdfff9 1px, transparent 1px), linear-gradient(90deg, #fdfff9 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-24 gap-12">
          <div>
            <Badge label="How we operate" color="ivory" />
            <h2 className="text-6xl lg:text-8xl font-bold tracking-tighter mt-8 max-w-3xl text-ivory">
              Built for speed without <span className="font-serif italic text-lime">losing control.</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {steps.map((step, i) => (
            <Card key={i} className="group relative flex flex-col min-h-[500px] border-t-4 border-t-olive hover:border-t-lime !bg-olive/40 hover:!bg-olive transition-colors">
              <div className="flex justify-between items-start mb-12">
                <span className="text-8xl font-bold text-white/5 group-hover:text-lime/20 transition-colors font-serif italic leading-none">
                  {step.num}
                </span>
                <span className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-ivory/60 bg-charcoal">
                  {step.tag}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-ivory mb-6 tracking-tight">{step.title}</h3>
              <p className="text-xl text-ivory/60 leading-relaxed mb-12 flex-grow font-light">
                {step.desc}
              </p>

              <div className="flex items-center gap-3 text-base font-bold text-lime cursor-pointer group-hover:translate-x-2 transition-transform uppercase tracking-widest">
                Continue <ArrowRight size={20} />
              </div>
            </Card>
          ))}
        </div>
        
        {/* Comparison Card Section */}
        <div className="rounded-[3rem] bg-olive border border-white/5 overflow-hidden grid lg:grid-cols-12 relative shadow-2xl">
             {/* Background noise/texture for the card */}
             <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{backgroundImage: 'radial-gradient(#d3f54c 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

             {/* Left Side: Text Content */}
             <div className="lg:col-span-5 p-10 lg:p-20 flex flex-col justify-center relative z-10 border-b lg:border-b-0 lg:border-r border-white/5">
                <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-ivory mb-10 tracking-tighter leading-[0.9]">
                    Why Generic is the <br/>
                    <span className="text-lime font-serif italic">Right Choice.</span>
                </h3>
                <p className="text-xl text-ivory/60 mb-12 leading-relaxed max-w-md">
                    Generic brings all the benefits of sovereign fulfillment without the downsides of traditional agents.
                    <br/><br/>
                    Transparency, communication, and trust are our core pillars reflected in everything we do.
                </p>
                <div className="flex">
                    <Button label="Work with us" className="!px-12 !py-6 text-xl" />
                </div>
             </div>

             {/* Right Side: Checklist */}
             <div className="lg:col-span-7 bg-charcoal/30 relative z-10 flex flex-col justify-center py-6 lg:py-0">
                <div className="flex flex-col">
                    {comparisonPoints.map((point, i) => (
                        <div key={i} className="flex items-center justify-between p-6 lg:px-12 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group cursor-default">
                            <span className="text-lg lg:text-xl font-bold text-ivory/80 group-hover:text-lime transition-colors tracking-wide">{point}</span>
                            <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center text-olive shrink-0 shadow-[0_0_15px_rgba(211,245,76,0.4)] group-hover:scale-110 transition-transform">
                                <Check size={20} strokeWidth={3} />
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};