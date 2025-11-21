import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { ShieldCheck, Plane, Box, X, Check, Factory, Truck, Anchor, AlertCircle, Home } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisons = [
    {
      feature: "Margins",
      traditional: "Hidden margins (10-30%) added on top of factory price.",
      generic: "Transparent pricing. No hidden fees."
    },
    {
      feature: "Communication",
      traditional: "Slow, manual WhatsApp/WeChat cycles.",
      generic: "Automated pipelines, instant updates, CRM sync."
    },
    {
      feature: "Your Time",
      traditional: "Wasted on customs, chasing suppliers, and logistics headaches.",
      generic: "Reclaimed. We handle the grunt work so you focus on growth."
    },
    {
      feature: "Scalability",
      traditional: "Relies on manual labor. Hard to scale.",
      generic: "Zero-staff expansion capability via API workflows."
    }
  ];

  const navigate = useNavigate();
  return (
    <section id="partners" className="bg-olive pt-32 pb-32 px-4 lg:px-12 relative overflow-hidden rounded-t-[4rem] shadow-[0_-40px_80px_rgba(0,0,0,0.3)] -mt-20 z-50">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[800px] bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto relative z-10">

        {/* Main CTA Block */}
        <div className="grid xl:grid-cols-2 gap-8 xl:gap-12">

          {/* Left CTA - Turn 7 stops to 1 stop */}
          <Card className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center !p-10 lg:!p-14 bg-charcoal border-white/5">

            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-3xl bg-lime/10 text-lime flex items-center justify-center mb-8 border border-lime/20">
                <Box size={32} strokeWidth={1.5} />
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-ivory leading-[0.9] tracking-tighter mb-6">
                Turn 7 stops <br />
                <span className="text-lime font-serif italic">to 1 stop.</span>
              </h2>

              <p className="text-lg text-ivory/60 mb-10 font-light leading-relaxed max-w-md">
                Scale worldwide based on actual demand instead of sales forecasts without having to wait 60 days with 7 stops.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-ivory tracking-tight">65+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-lime mt-1">Countries</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-ivory tracking-tight">98%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-lime mt-1">On-Time</div>
                </div>
              </div>

              <Button label="Get started now" className="w-full sm:w-auto text-lg py-4" onClick={() => navigate('/form')} />
            </div>

            {/* Comparison Widget (Visual) */}
            <div className="w-full lg:w-[380px] shrink-0 rounded-[2.5rem] overflow-hidden border border-white/10 grid grid-cols-2 relative shadow-2xl">

              {/* Traditional Side */}
              <div className="bg-[#1a1a1a] p-6 pt-8 flex flex-col items-center relative border-r border-white/5">
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-red-500/10 to-transparent pointer-events-none"></div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-8 z-10 bg-red-900/20 px-3 py-1 rounded-full border border-red-500/20">Traditional</div>

                {/* Timeline Dotted */}
                <div className="absolute top-20 bottom-24 w-px border-l-2 border-dashed border-white/10 left-1/2 -translate-x-1/2"></div>

                <div className="flex flex-col gap-4 w-full items-center z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-ivory/40">
                    <Factory size={18} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                    <Truck size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                    <Anchor size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                    <AlertCircle size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                    <Truck size={14} />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-ivory/40 mt-2">
                    <Home size={18} />
                  </div>
                </div>

                <div className="mt-auto pt-6 text-center z-10">
                  <div className="text-3xl font-bold text-red-500 leading-none">60</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-red-400/60 mt-1">Days Avg</div>
                </div>
              </div>

              {/* Generic Side */}
              <div className="bg-lime p-6 pt-8 flex flex-col items-center relative">
                <div className="text-[10px] font-bold uppercase tracking-widest text-olive mb-8 z-10 bg-olive/10 px-3 py-1 rounded-full border border-olive/10">Generic</div>

                {/* Timeline Solid */}
                <div className="absolute top-20 bottom-24 w-0.5 bg-olive/20 left-1/2 -translate-x-1/2"></div>

                <div className="flex flex-col justify-between h-[240px] w-full items-center z-10">
                  <div className="w-10 h-10 rounded-xl bg-olive text-lime flex items-center justify-center shadow-lg">
                    <Factory size={18} />
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-olive/10 text-olive flex items-center justify-center animate-pulse">
                      <Plane size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-olive/60">1-3 Days</span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-olive text-lime flex items-center justify-center shadow-lg">
                    <Home size={18} />
                  </div>
                </div>

                <div className="mt-auto pt-6 text-center z-10">
                  <div className="text-3xl font-bold text-olive leading-none">5</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-olive/60 mt-1">Days Avg</div>
                </div>
              </div>

            </div>

          </Card>

          {/* Right CTA - Comparison List Style */}
          <Card variant="light" className="flex flex-col min-h-[500px] !p-10 lg:!p-14">
            <div className="flex items-center gap-6 mb-10">
              <div className="bg-olive p-4 rounded-2xl text-lime shrink-0">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-olive tracking-tight">What you can expect.</h3>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-3 flex-grow mb-10">
              {comparisons.map((item, i) => (
                <div key={i} className="group border border-olive/10 rounded-[2rem] p-5 hover:border-lime transition-colors bg-white/40 hover:bg-white">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-lg font-bold text-olive uppercase tracking-wide">{item.feature}</h4>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-4 pt-1">
                      {/* Traditional (Bad) */}
                      <div className="flex items-start gap-3 opacity-60 grayscale group-hover:grayscale-0 transition-all">
                        <div className="bg-red-100 text-red-500 rounded-full p-1 shrink-0 mt-1">
                          <X size={14} strokeWidth={3} />
                        </div>
                        <p className="text-sm text-olive font-medium leading-snug">{item.traditional}</p>
                      </div>

                      {/* Generic (Good) */}
                      <div className="flex items-start gap-3">
                        <div className="bg-lime text-olive rounded-full p-1 shrink-0 mt-1">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <p className="text-sm font-bold text-olive leading-snug">{item.generic}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats - The Sovereign Promise */}
            <div className="bg-olive rounded-[2.5rem] p-8 mt-auto relative overflow-hidden group border border-olive/5 shadow-lg">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-lime/10 rounded-full blur-xl group-hover:bg-lime/20 transition-colors"></div>

              <div className="relative z-10">
                <h4 className="text-xl font-bold text-ivory mb-3 flex items-center gap-2">
                  <ShieldCheck className="text-lime" size={24} />
                  The Sovereign Promise
                </h4>
                <p className="text-ivory/70 leading-relaxed text-base font-light">
                  We don't just move boxes. We protect your brand's reputation by ensuring every product meets your exact standards before it leaves the factory.
                </p>
                <div className="mt-4 flex items-center gap-2 text-lime font-bold text-sm uppercase tracking-widest">
                  <Check size={16} />
                  Quality Guaranteed
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};