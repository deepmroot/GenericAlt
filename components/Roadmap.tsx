
import React from 'react';
import { VERTICALS, COMPARISON_DATA } from '../constants';
import { ArrowRight, Check, X, Zap, Mic, Brain, Activity, Wallet, Receipt, Server, TrendingUp } from 'lucide-react';

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-32 bg-[#fdfff9] rounded-t-[4rem] text-[#282a1e] border-t-4 border-[#d3f54c] relative overflow-hidden">
      
      {/* Background Pattern - Faint Green Dots on White */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#282a1e 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      {/* Abstract Background shapes for visual interest */}
      <div className="absolute right-[-200px] top-[-200px] w-[600px] h-[600px] bg-[#d3f54c]/20 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Comparison Section */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-7xl font-bold mb-6">The <span className="serif-accent italic text-[#282a1e]">Disruption</span></h2>
                <p className="text-2xl text-[#282a1e]/70">Why the old model is obsolete.</p>
            </div>

            {/* Injected Sovereign Advantage Comparison */}
            <div className="max-w-6xl mx-auto mb-24">
                 <h3 className="text-5xl md:text-6xl font-bold text-[#282a1e] mb-16 text-center leading-[0.9]">
                     The <span className="serif-accent italic text-[#282a1e] bg-[#d3f54c] px-8 py-2 rounded-[2rem] inline-block transform -rotate-2">Sovereign</span> Advantage.
                 </h3>

                 <div className="grid md:grid-cols-2 gap-8 items-center">
                       {/* Left: The Problem (SaaS Tax) */}
                       <div className="bg-[#1a1c14] rounded-[3rem] p-10 border border-red-500/20 relative overflow-hidden group h-full flex flex-col shadow-2xl">
                           <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           
                           <div className="relative z-10 flex-grow flex flex-col justify-between">
                               <div className="flex justify-between items-center mb-10">
                                   <h4 className="text-3xl font-bold text-red-400">The SaaS Tax</h4>
                                   <span className="text-red-400 text-sm font-bold uppercase tracking-widest border border-red-500/30 px-3 py-1 rounded-full">Competitors</span>
                               </div>
                               
                               <div className="space-y-6 font-mono text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                                   <div className="flex justify-between border-b border-red-500/20 pb-4">
                                       <span className="text-[#fdfff9]">Voice (ElevenLabs)</span>
                                       <span className="text-red-400">$0.18 / min</span>
                                   </div>
                                   <div className="flex justify-between border-b border-red-500/20 pb-4">
                                       <span className="text-[#fdfff9]">Reasoning (GPT-4)</span>
                                       <span className="text-red-400">$30 / 1M tok</span>
                                   </div>
                                   <div className="flex justify-between border-b border-red-500/20 pb-4">
                                       <span className="text-[#fdfff9]">Transcription</span>
                                       <span className="text-red-400">$0.006 / min</span>
                                   </div>
                               </div>

                               <div className="mt-10 pt-6 border-t-2 border-red-500/20">
                                   <div className="flex justify-between items-end">
                                       <span className="text-sm uppercase tracking-widest font-bold text-red-400">Monthly Variable</span>
                                       <span className="text-4xl font-bold text-red-500">Uncapped</span>
                                   </div>
                               </div>
                           </div>
                       </div>

                       {/* Right: The Solution (Sovereign) */}
                       <div className="bg-[#d3f54c] rounded-[3rem] p-10 text-[#282a1e] relative overflow-hidden transform md:scale-105 z-20 h-full flex flex-col border-4 border-[#282a1e]">
                           <div className="flex justify-between items-center mb-10">
                               <h4 className="text-3xl font-bold">Sovereign Compute</h4>
                               <span className="bg-[#282a1e] text-[#d3f54c] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Generic Alternatives</span>
                           </div>
                           
                           <div className="space-y-6 font-mono text-lg font-bold flex-grow">
                               <div className="flex justify-between border-b-2 border-[#282a1e]/10 pb-4">
                                   <span className="flex items-center gap-2"><Mic size={16}/> VibeVoice (Local)</span>
                                   <span className="opacity-60">Electricity</span>
                               </div>
                               <div className="flex justify-between border-b-2 border-[#282a1e]/10 pb-4">
                                   <span className="flex items-center gap-2"><Brain size={16}/> Llama 3 (Local)</span>
                                   <span className="opacity-60">Electricity</span>
                               </div>
                               <div className="flex justify-between border-b-2 border-[#282a1e]/10 pb-4">
                                   <span className="flex items-center gap-2"><Activity size={16}/> Whisper (Local)</span>
                                   <span className="opacity-60">Electricity</span>
                               </div>
                           </div>

                           <div className="mt-10 pt-6 border-t-4 border-[#282a1e]">
                               <div className="flex justify-between items-end">
                                   <span className="text-sm uppercase tracking-widest font-bold opacity-60">Monthly Fixed</span>
                                   <span className="text-5xl font-bold">$1.72/hr</span>
                               </div>
                           </div>
                       </div>
                   </div>
            </div>

            <div className="grid gap-6">
                {/* Header Row */}
                <div className="hidden md:grid grid-cols-12 gap-6 px-10 py-4 text-sm uppercase tracking-widest font-extrabold text-[#282a1e]/50">
                    <div className="col-span-3">Feature</div>
                    <div className="col-span-4">Traditional Agent</div>
                    <div className="col-span-5">Generic Alternatives</div>
                </div>

                {COMPARISON_DATA.map((point, i) => (
                    <div key={i} className="grid md:grid-cols-12 gap-8 p-8 border-3 border-[#282a1e]/10 rounded-[2.5rem] hover:border-[#282a1e] hover:bg-white transition-all duration-300 items-center bg-[#f5f5f5] relative z-10">
                        <div className="col-span-12 md:col-span-3">
                            <h4 className="text-2xl font-bold">{point.category}</h4>
                        </div>
                        <div className="col-span-12 md:col-span-4 flex gap-4 items-start text-[#ef4444]">
                            <div className="p-2 bg-red-100 rounded-full shrink-0">
                                <X size={20} strokeWidth={3} />
                            </div>
                            <span className="text-xl font-medium text-[#282a1e]/80">{point.traditional}</span>
                        </div>
                        <div className="col-span-12 md:col-span-5 flex gap-4 items-start text-[#15803d]">
                            <div className="p-2 bg-[#d3f54c] rounded-full shrink-0 text-[#282a1e]">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <span className="text-xl font-bold text-[#282a1e]">{point.genericAlternatives}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Long Term Model */}
        <div className="grid lg:grid-cols-2 gap-20 items-stretch mb-32">
            <div className="flex flex-col h-full">
                <h2 className="text-6xl font-bold mb-12 leading-tight">Long-Term <br/><span className="serif-accent italic">Vision</span></h2>
                <div className="space-y-10 relative flex-grow flex flex-col justify-between pb-8">
                    {/* Connecting line */}
                    <div className="absolute left-[26px] top-4 bottom-4 w-1 bg-[#282a1e]/10 rounded-full"></div>

                    <div className="flex gap-8 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#282a1e] flex items-center justify-center text-[#d3f54c] font-bold text-2xl shrink-0 border-4 border-[#fdfff9] shadow-sm">1</div>
                        <div className="pt-2">
                            <h3 className="text-3xl font-bold mb-4">Global Sourcing Pipeline</h3>
                            <p className="text-2xl text-[#282a1e]/70 leading-relaxed">Flowing from China → U.S. → UK → LATAM → Africa. Creating a unified logistics network.</p>
                        </div>
                    </div>
                    <div className="flex gap-8 relative z-10">
                         <div className="w-14 h-14 rounded-2xl bg-[#282a1e] flex items-center justify-center text-[#d3f54c] font-bold text-2xl shrink-0 border-4 border-[#fdfff9] shadow-sm">2</div>
                        <div className="pt-2">
                            <h3 className="text-3xl font-bold mb-4">Digital Agent Replacement</h3>
                            <p className="text-2xl text-[#282a1e]/70 leading-relaxed">Factory-level price audits, QC checklists, and Quote generation done entirely by software.</p>
                        </div>
                    </div>
                    <div className="flex gap-8 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#282a1e] flex items-center justify-center text-[#d3f54c] font-bold text-2xl shrink-0 border-4 border-[#fdfff9] shadow-sm">3</div>
                        <div className="pt-2">
                            <h3 className="text-3xl font-bold mb-4">Multi-Vertical Engine</h3>
                            <p className="text-2xl text-[#282a1e]/70 leading-relaxed">Expanding deep into specific verticals like industrial pumps, apparel, and hospitality.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Verticals Grid */}
            <div className="h-full">
                <div className="bg-[#282a1e] rounded-[3rem] p-10 text-[#fdfff9] h-full flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#d3f54c 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
                    
                    <div className="flex items-center gap-4 mb-10 relative z-10">
                        <Zap className="text-[#d3f54c]" size={32} fill="#d3f54c" />
                        <h3 className="text-4xl font-bold">Active Verticals</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4 flex-grow relative z-10">
                        {VERTICALS.map((vert, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-[#d3f54c] hover:text-[#282a1e] transition-all duration-300 group cursor-default">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="font-bold text-2xl">{vert.title}</h4>
                                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2" />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {vert.items.map((item, i) => (
                                        <span key={i} className="text-sm font-medium px-3 py-1 rounded-lg bg-white/10 group-hover:bg-[#282a1e]/10">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* NEW SECTION: Profitable by Design */}
        <div className="mt-32 border-t-4 border-[#282a1e]/10 pt-24">
            <div className="bg-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden border-4 border-[#d3f54c] shadow-xl">
                 {/* Subtle Background Pattern */}
                 <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#d3f54c 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

                 <div className="relative z-10">
                     <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#282a1e] text-[#d3f54c] text-sm font-bold uppercase tracking-widest mb-6">
                            <TrendingUp size={16} />
                            <span>Financial Health</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-[#282a1e] mb-6 leading-none">
                           Bootstrapped & <br/>
                           <span className="serif-accent italic text-[#fdfff9] bg-[#282a1e] px-6 py-1 rounded-[2rem] inline-block mt-2 transform -rotate-1">Profitable.</span>
                        </h2>
                        <p className="text-xl text-[#282a1e]/80 max-w-3xl mx-auto font-medium leading-relaxed">
                           We aren't burning cash to find product-market fit. We are self-funded, revenue-positive, and operating on secured deposits.
                        </p>
                     </div>

                     <div className="grid md:grid-cols-3 gap-8">
                         {/* Card 1 */}
                         <div className="bg-[#282a1e] p-8 rounded-[2rem] text-[#fdfff9] text-center group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                             <div className="w-16 h-16 bg-[#d3f54c] rounded-2xl flex items-center justify-center text-[#282a1e] mx-auto mb-6 group-hover:scale-110 transition-transform">
                                 <Wallet size={32} />
                             </div>
                             <h3 className="text-2xl font-bold mb-4">Self-Funded</h3>
                             <p className="opacity-70 leading-snug flex-grow">
                                 Zero external debt. 100% founder equity. We built the technology and paid the servers before asking for a penny.
                             </p>
                         </div>

                         {/* Card 2 */}
                         <div className="bg-[#fdfff9] p-8 rounded-[2rem] text-[#282a1e] text-center border-4 border-[#282a1e] group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden flex flex-col h-full">
                             {/* Striped background for deposit look */}
                              <div className="absolute top-0 left-0 w-full h-3 bg-[#282a1e]/10"></div>
                             
                             <div className="w-16 h-16 bg-[#282a1e] rounded-2xl flex items-center justify-center text-[#fdfff9] mx-auto mb-6 group-hover:scale-110 transition-transform">
                                 <Receipt size={32} />
                             </div>
                             <h3 className="text-2xl font-bold mb-4">Orders Secured</h3>
                             <p className="opacity-70 leading-snug font-medium flex-grow">
                                 Client deposits are already in the bank. We operate on positive cash flow, moving metal only when margin is locked.
                             </p>
                         </div>

                         {/* Card 3 */}
                         <div className="bg-[#282a1e] p-8 rounded-[2rem] text-[#fdfff9] text-center group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
                             <div className="w-16 h-16 bg-[#d3f54c] rounded-2xl flex items-center justify-center text-[#282a1e] mx-auto mb-6 group-hover:scale-110 transition-transform">
                                 <Server size={32} />
                             </div>
                             <h3 className="text-2xl font-bold mb-4">Micro-Service Econ</h3>
                             <p className="opacity-70 leading-snug flex-grow">
                                 Our tech doesn't cost us; it saves us. By micro-servicing our stack, we've reduced operational overhead to near zero.
                             </p>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};
