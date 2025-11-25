import React from 'react';
import { Button } from './ui/Button';
import { ScanSearch, Handshake, ShieldCheck, Plane, Package, Star, Quote, ArrowRight } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 lg:pb-64 px-4 lg:px-12 bg-olive relative rounded-t-[4rem] shadow-[0_-40px_80px_rgba(0,0,0,0.3)] overflow-hidden z-30 -mt-20">
      
      {/* Dot Grid Background to simulate technical map */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
         <div className="absolute inset-0" 
              style={{ 
                backgroundImage: 'radial-gradient(#fdfff9 1.5px, transparent 1.5px)', 
                backgroundSize: '30px 30px' 
              }}>
         </div>
         {/* Radial fade out */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#282a1e_90%)]"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Top Header Area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20 lg:mb-32">
            <div className="space-y-8">
                <div className="text-lime font-bold text-sm uppercase tracking-widest">Process Control</div>
                <h2 className="text-6xl lg:text-7xl font-bold tracking-tighter text-ivory leading-[0.9]">
                    Granular control <br />
                    <span className="italic font-serif">Across every vertical.</span>
                </h2>
                <Button label="Start Sourcing" className="!px-8 !py-4 text-base" />
            </div>
            
            <div>
                 <p className="text-2xl lg:text-3xl text-ivory font-light leading-snug lg:text-right ml-auto max-w-2xl">
                    Whether it's clothing, retail stock, or agriculture, we shop multiple suppliers to ensure quality, negotiate the best prices, and verify production before it ever leaves the floor.
                 </p>
            </div>
        </div>

        {/* Process Diagram */}
        <div className="relative mb-32">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[3rem] left-[4%] right-[4%] h-40 pointer-events-none -z-10">
                 <svg width="100%" height="100%" viewBox="0 0 1000 200" preserveAspectRatio="none" className="overflow-visible">
                    <path 
                      d="M 50 150 L 275 150 C 375 150 375 50 500 50 C 625 50 625 150 725 150 L 950 150" 
                      fill="none" 
                      stroke="#d3f54c" 
                      strokeWidth="2" 
                      strokeDasharray="8 8"
                      className="opacity-30"
                    />
                 </svg>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 lg:gap-4">
                
                {/* 1. Discovery */}
                <div className="flex flex-row lg:flex-col items-center gap-6 group p-6 lg:p-0 bg-charcoal lg:bg-transparent rounded-[2rem] lg:rounded-none border border-white/5 lg:border-none hover:border-lime/30 transition-all">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-[1.5rem] bg-charcoal border border-white/10 flex items-center justify-center text-ivory group-hover:border-lime group-hover:text-lime transition-all duration-300 shadow-xl z-10 relative">
                        <div className="absolute inset-0 bg-lime/5 rounded-[1.5rem] scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <ScanSearch size={24} className="lg:w-7 lg:h-7 relative z-10" strokeWidth={1.5} />
                    </div>
                    <div className="text-left lg:text-center">
                        <div className="text-ivory font-bold text-lg leading-tight lg:max-w-[180px] lg:mx-auto">
                            Market analysis <br className="hidden lg:block"/> & Vetting
                        </div>
                        <div className="lg:hidden text-ivory/40 text-xs font-bold uppercase tracking-widest mt-2">Phase 01</div>
                    </div>
                </div>

                {/* 2. Negotiation */}
                <div className="flex flex-row lg:flex-col items-center gap-6 group p-6 lg:p-0 bg-charcoal lg:bg-transparent rounded-[2rem] lg:rounded-none border border-white/5 lg:border-none hover:border-lime/30 transition-all">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-[1.5rem] bg-charcoal border border-white/10 flex items-center justify-center text-ivory group-hover:border-lime group-hover:text-lime transition-all duration-300 shadow-xl z-10 relative">
                        <div className="absolute inset-0 bg-lime/5 rounded-[1.5rem] scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <Handshake size={24} className="lg:w-7 lg:h-7 relative z-10" strokeWidth={1.5} />
                    </div>
                    <div className="text-left lg:text-center">
                        <div className="text-ivory font-bold text-lg leading-tight lg:max-w-[180px] lg:mx-auto">
                            Price Negotiation <br className="hidden lg:block"/> & Deposits
                        </div>
                        <div className="lg:hidden text-ivory/40 text-xs font-bold uppercase tracking-widest mt-2">Phase 02</div>
                    </div>
                </div>

                {/* 3. QC (Center, Raised) */}
                <div className="flex flex-row lg:flex-col items-center gap-6 lg:gap-4 lg:-mt-28 group relative w-full lg:w-auto p-6 lg:p-0 bg-lime/10 lg:bg-transparent rounded-[2rem] lg:rounded-none border border-lime/20 lg:border-none">
                    <div className="text-ivory font-bold text-lg mb-2 hidden lg:block">Rigorous QC</div>
                    <div className="w-16 h-16 lg:w-24 lg:h-24 shrink-0 rounded-full bg-olive border-2 border-lime flex items-center justify-center text-lime shadow-[0_0_40px_rgba(211,245,76,0.2)] z-10 transition-all duration-300 group-hover:scale-105 lg:mx-auto">
                        <ShieldCheck size={28} className="lg:w-10 lg:h-10" strokeWidth={1.5} />
                    </div>
                    <div className="text-left lg:text-center">
                        <div className="text-ivory font-bold text-lg lg:hidden">Rigorous QC</div>
                        <div className="lg:hidden text-lime font-bold text-xs uppercase tracking-widest mt-2">Critical Check</div>
                    </div>
                </div>

                {/* 4. Logistics */}
                <div className="flex flex-row lg:flex-col items-center gap-6 group p-6 lg:p-0 bg-charcoal lg:bg-transparent rounded-[2rem] lg:rounded-none border border-white/5 lg:border-none hover:border-lime/30 transition-all">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-[1.5rem] bg-charcoal border border-white/10 flex items-center justify-center text-ivory group-hover:border-lime group-hover:text-lime transition-all duration-300 shadow-xl z-10 relative">
                        <div className="absolute inset-0 bg-lime/5 rounded-[1.5rem] scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <Plane size={24} className="lg:w-7 lg:h-7 relative z-10" strokeWidth={1.5} />
                    </div>
                    <div className="text-left lg:text-center">
                        <div className="text-ivory font-bold text-lg leading-tight lg:max-w-[180px] lg:mx-auto">
                            Sea & Air <br className="hidden lg:block"/> Distribution
                        </div>
                        <div className="lg:hidden text-ivory/40 text-xs font-bold uppercase tracking-widest mt-2">Phase 03</div>
                    </div>
                </div>

                {/* 5. Delivery */}
                <div className="flex flex-row lg:flex-col items-center gap-6 group p-6 lg:p-0 bg-charcoal lg:bg-transparent rounded-[2rem] lg:rounded-none border border-white/5 lg:border-none hover:border-lime/30 transition-all">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-[1.5rem] bg-charcoal border border-white/10 flex items-center justify-center text-ivory group-hover:border-lime group-hover:text-lime transition-all duration-300 shadow-xl z-10 relative">
                        <div className="absolute inset-0 bg-lime/5 rounded-[1.5rem] scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        <Package size={24} className="lg:w-7 lg:h-7 relative z-10" strokeWidth={1.5} />
                    </div>
                    <div className="text-left lg:text-center">
                        <div className="text-ivory font-bold text-lg leading-tight lg:max-w-[180px] lg:mx-auto">
                            Delivery within <br className="hidden lg:block"/> days
                        </div>
                        <div className="lg:hidden text-ivory/40 text-xs font-bold uppercase tracking-widest mt-2">Phase 04</div>
                    </div>
                </div>

            </div>
        </div>

        {/* Case Studies Section - Vertical Stack */}
        <div className="mt-24 lg:mt-48 pt-12 lg:pt-24 border-t border-white/5 relative">
            <div className="mb-12 lg:mb-20">
                <h2 className="text-6xl sm:text-8xl lg:text-[10rem] font-bold text-ivory tracking-tighter mb-6 leading-[0.8]">
                    Sovereign <br/>
                    <span className="font-serif italic text-lime">Standards.</span>
                </h2>
                <p className="text-xl lg:text-2xl text-ivory/60 font-light max-w-2xl ml-2">
                    Real operators reducing overhead and increasing quality through our network.
                </p>
            </div>

            <div className="flex flex-col gap-8">
                
                {/* Card 1: Bomberry - Full Width */}
                <div className="bg-charcoal rounded-[2.5rem] p-8 lg:p-16 border border-white/5 hover:border-lime/30 transition-all duration-500 group relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-20 opacity-10 text-lime group-hover:opacity-20 transition-opacity">
                        <Quote size={120} />
                     </div>
                     
                     <div className="grid lg:grid-cols-3 gap-12 items-end relative z-10">
                         <div className="lg:col-span-2">
                             <div className="flex gap-1 mb-8 text-lime">
                                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" strokeWidth={0} />)}
                             </div>
                             <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-ivory leading-tight mb-8">
                                "We needed commercial equipment for our quarterly store openings. Other agents quoted <span className="text-red-400 line-through decoration-red-400/50">$2,000</span>—Generic found the exact spec for <span className="text-lime font-bold">$1,400</span>. Matthew personally vetted the factory to ensure quality matched our brand."
                             </p>
                         </div>
                         
                         <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-full bg-purple-900/50 border border-white/10 flex items-center justify-center text-lg font-bold text-purple-200">
                                    BB
                                </div>
                                <div>
                                    <div className="font-bold text-ivory tracking-wide uppercase text-lg">Bomberry</div>
                                    <div className="text-sm font-bold text-ivory/40 uppercase tracking-widest">Los Angeles, CA</div>
                                </div>
                            </div>
                            <div className="text-lime font-mono text-sm opacity-80">
                                Saved $600/unit • On-time Delivery
                            </div>
                         </div>
                     </div>
                </div>

                 {/* Card 2: Clothing - Full Width */}
                <div className="bg-charcoal rounded-[2.5rem] p-8 lg:p-16 border border-white/5 hover:border-lime/30 transition-all duration-500 group relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-20 opacity-10 text-lime group-hover:opacity-20 transition-opacity">
                        <Quote size={120} />
                     </div>
                     
                     <div className="grid lg:grid-cols-3 gap-12 items-end relative z-10">
                         <div className="lg:col-span-2">
                             <div className="flex gap-1 mb-8 text-lime">
                                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" strokeWidth={0} />)}
                             </div>
                             <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-ivory leading-tight mb-8">
                                "Sourcing apparel is usually a nightmare of bad samples. The team didn't just negotiate; they helped refine our tech packs and secured a <span className="text-lime">production-grade sample</span> before we committed. True granular control."
                             </p>
                         </div>

                         <div className="border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-full bg-blue-900/50 border border-white/10 flex items-center justify-center text-lg font-bold text-blue-200">
                                    VA
                                </div>
                                <div>
                                    <div className="font-bold text-ivory tracking-wide uppercase text-lg">Vestige Apparel</div>
                                    <div className="text-sm font-bold text-ivory/40 uppercase tracking-widest">Founder & CEO</div>
                                </div>
                            </div>
                            <div className="text-lime font-mono text-sm opacity-80">
                                Sample Verified • Custom QC
                            </div>
                         </div>
                     </div>
                </div>

                {/* Card 3: CTA Banner - Full Width, Smaller Height */}
                <div className="bg-lime rounded-[2.5rem] p-8 lg:px-16 lg:py-12 border border-lime flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group text-olive">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-white/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 w-full lg:w-auto text-center sm:text-left">
                         <div className="w-16 h-16 bg-olive text-lime rounded-full flex items-center justify-center shrink-0">
                            <ShieldCheck size={32} />
                         </div>
                         <div className="max-w-2xl">
                             <h3 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight mb-2">
                                Join the network of brands taking back control.
                             </h3>
                             <p className="text-lg font-medium opacity-80 leading-relaxed">
                                From verified sourcing to negotiated terms, get the granular control your business deserves.
                             </p>
                         </div>
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto justify-end">
                        <div className="flex items-center gap-2 opacity-60">
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};
