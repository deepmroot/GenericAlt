
import React from 'react';
import { Cpu, Cloud, Zap, Check, Activity, Users, Globe, Brain, Music, Search, Layers, Mic, Server, Lock, Smartphone, Database, ShieldCheck, TrendingUp } from 'lucide-react';
import { TECH_STACK } from '../constants';
import { TechWorkflows } from './tech/TechWorkflows';
import { TechCRM } from './tech/TechCRM';
import { TechScraping } from './tech/TechScraping';
import { TechAI } from './tech/TechAI';
import { TechInfra } from './tech/TechInfra';

export const PriceBreakdown: React.FC = () => {
  
  return (
    <>
      <section id="pricing" className="pt-32 bg-[#282a1e] relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
          backgroundImage: 'linear-gradient(#d3f54c 1px, transparent 1px), linear-gradient(90deg, #d3f54c 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}></div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="mb-20 max-w-4xl">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d3f54c] text-[#d3f54c] text-xs font-bold uppercase tracking-widest mb-6 bg-[#d3f54c]/10">
                <Activity size={14} />
                <span>Internal Unit Economics</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-bold text-[#fdfff9] leading-[0.9]">
               The Cost of <br/>
               <span className="serif-accent italic text-[#d3f54c]">Autonomy.</span>
             </h2>
          </div>

          {/* Internal Unit Economics Grid */}
          <div className="grid lg:grid-cols-12 gap-8 mb-24">
              
              {/* LEFT COL: The MI300X Instance (Main Driver) */}
              <div className="lg:col-span-7 flex flex-col">
                  <div className="bg-[#1a1c14] border-2 border-[#d3f54c] rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex-grow group">
                      {/* Partnership Badge */}
                      <div className="absolute top-0 right-0 bg-[#d3f54c] text-[#282a1e] px-6 py-3 rounded-bl-[2rem] font-bold text-sm uppercase tracking-wider z-10">
                          AMD / ROCm Partner Status
                      </div>
                      
                      <div className="relative z-10">
                          <div className="w-20 h-20 bg-[#282a1e] border border-[#d3f54c]/30 rounded-[1.5rem] flex items-center justify-center mb-10 text-[#d3f54c]">
                              <Cpu size={40} strokeWidth={1.5} />
                          </div>

                          <h3 className="text-4xl font-bold text-[#fdfff9] mb-2">AMD MI300X Droplet</h3>
                          <p className="text-[#fdfff9]/60 text-lg mb-10 font-medium">
                              Single-instance monolithic host for the entire backend stack.
                          </p>

                          <div className="bg-[#282a1e] rounded-[1.5rem] p-8 border border-[#fdfff9]/5 mb-10">
                              <div className="flex items-baseline gap-2 mb-2">
                                  <span className="text-6xl font-bold text-[#d3f54c] font-mono tracking-tighter">$1.72</span>
                                  <span className="text-[#fdfff9]/60 font-medium">/ hour</span>
                              </div>
                              <p className="text-sm text-[#d3f54c]/80 uppercase tracking-widest font-bold">
                                  Fixed Inference Cost (Round-the-clock Availability)
                              </p>
                          </div>

                          <div className="space-y-4">
                               <div className="flex items-start gap-4">
                                  <div className="mt-1 w-6 h-6 rounded-full bg-[#d3f54c]/20 flex items-center justify-center text-[#d3f54c] shrink-0">
                                      <Check size={14} strokeWidth={3} />
                                  </div>
                                  <div>
                                      <strong className="text-[#fdfff9] block text-lg">192GB VRAM Capacity</strong>
                                      <p className="text-[#fdfff9]/60 text-sm leading-relaxed">
                                          Allows concurrent loading of Llama-3 (Reasoning), VibeVoice (TTS), and Jina-v4 (Embeddings) without swapping.
                                      </p>
                                  </div>
                               </div>
                          </div>
                      </div>

                      {/* Background Gradient */}
                      <div className="absolute bottom-[-20%] right-[-20%] w-[400px] h-[400px] bg-[#d3f54c]/5 rounded-full blur-[80px] group-hover:bg-[#d3f54c]/10 transition-all duration-500"></div>
                  </div>
              </div>

              {/* RIGHT COL: Hybrid Stack & Voice Logic */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                  
                  {/* AWS Lambda Card */}
                  <div className="bg-[#fdfff9]/5 border border-[#fdfff9]/10 rounded-[2rem] p-8 hover:border-[#d3f54c]/50 transition-colors">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 bg-[#fdfff9]/10 rounded-xl text-[#fdfff9]">
                              <Cloud size={24} />
                          </div>
                          <h4 className="text-2xl font-bold text-[#fdfff9]">Amazon EC2 Lambda</h4>
                      </div>
                      <div className="flex items-center justify-between border-t border-[#fdfff9]/10 pt-4">
                           <span className="text-sm font-mono text-[#d3f54c]">Cost Profile</span>
                           <span className="font-bold text-[#fdfff9]">&lt; $5.00 / mo</span>
                      </div>
                  </div>

                  {/* Technical Stack / Voice Logic */}
                  <div className="bg-[#fdfff9] rounded-[2rem] p-8 text-[#282a1e] flex-grow border-4 border-[#282a1e] relative overflow-hidden">
                      <div className="absolute top-[-10px] right-[-20px] text-[#282a1e]/5 text-9xl font-black italic z-0">AI</div>

                      <div className="flex items-center gap-3 mb-6 border-b-2 border-[#282a1e]/10 pb-4 relative z-10">
                          <Mic size={20} className="text-[#d3f54c] bg-[#282a1e] p-1 rounded-md box-content" />
                          <span className="font-bold uppercase tracking-widest text-sm">Voice Logic</span>
                      </div>
                      
                      <div className="space-y-6 relative z-10">
                           <p className="text-lg font-medium leading-snug">
                               Moved off ElevenLabs. Fixed <span className="bg-[#282a1e] text-[#d3f54c] px-1 rounded text-white">$1,250/mo</span> infrastructure cost.
                           </p>
                           
                           <div className="grid grid-cols-2 gap-4">
                              <div className="bg-[#282a1e]/5 p-4 rounded-xl border border-[#282a1e]/10">
                                  <div className="font-bold text-xs uppercase tracking-wider mb-1 text-[#282a1e]/60">Gen</div>
                                  <div className="font-bold text-lg">VibeVoice</div>
                              </div>
                              <div className="bg-[#282a1e]/5 p-4 rounded-xl border border-[#282a1e]/10">
                                  <div className="font-bold text-xs uppercase tracking-wider mb-1 text-[#282a1e]/60">Foley</div>
                                  <div className="font-bold text-lg">AudioCraft</div>
                              </div>
                           </div>
                      </div>
                  </div>

              </div>
          </div>

          {/* METHODOLOGY SECTION (Agentic Employee) */}
          <div className="bg-[#282a1e] border border-[#d3f54c]/30 rounded-[3rem] p-8 md:p-12 mb-24 relative overflow-hidden">
               {/* Background Text */}
               <div className="absolute -bottom-10 right-0 text-[#fdfff9]/5 text-[12vw] font-black uppercase leading-none pointer-events-none whitespace-nowrap">
                  Scale Issues
               </div>

               <div className="relative z-10 grid lg:grid-cols-2 gap-16">
                  {/* Left: The Philosophy */}
                  <div>
                      <h3 className="text-4xl md:text-5xl font-bold text-[#fdfff9] mb-8 leading-tight">
                          The Agentic <br/>
                          <span className="serif-accent italic text-[#d3f54c]">Employee.</span>
                      </h3>
                      
                      <div className="space-y-8 text-lg text-[#fdfff9]/80 font-light leading-relaxed">
                          <p>
                              Our methodology is built on a core belief: <strong className="text-[#fdfff9]">It is a scale issue, not an employment issue.</strong>
                          </p>
                          <p>
                              The bottleneck in supply chain isn't "how" to contact suppliers, but "how many" you can contact and nurture simultaneously. We built an Open Source agentic employee stored within <strong className="text-[#d3f54c]">Twenty CRM</strong> to replace the need for human SDRs entirely.
                          </p>
                      </div>
                  </div>

                  {/* Right: The Math Comparison */}
                  <div className="flex flex-col justify-center">
                       <div className="bg-[#fdfff9] rounded-[2.5rem] p-8 text-[#282a1e] shadow-2xl">
                          <div className="flex items-center justify-between mb-8 border-b-2 border-[#282a1e]/10 pb-6">
                              <div className="flex items-center gap-3">
                                  <Users size={24} className="text-[#d3f54c] bg-[#282a1e] p-1 rounded-full box-content" />
                                  <span className="font-bold uppercase tracking-widest">Cost Comparison</span>
                              </div>
                          </div>

                          <div className="space-y-6">
                              {/* Human */}
                              <div className="flex justify-between items-center opacity-50 grayscale">
                                  <div>
                                      <h4 className="font-bold text-xl">Virtual Assistant</h4>
                                      <p className="text-sm font-medium">Manual outreach</p>
                                  </div>
                                  <div className="text-right">
                                      <div className="font-mono font-bold text-2xl">$12.00</div>
                                      <div className="text-xs font-bold uppercase tracking-wider">/ Hour</div>
                                  </div>
                              </div>
                              {/* Line */}
                              <div className="w-full h-px bg-[#282a1e]/10"></div>
                              {/* Generic Alternatives */}
                              <div className="flex justify-between items-center">
                                  <div>
                                      <h4 className="font-bold text-xl text-[#d3f54c] bg-[#282a1e] px-2 py-1 rounded inline-block mb-1">Generic Alts</h4>
                                      <p className="text-sm font-medium">Automated Nurture</p>
                                  </div>
                                  <div className="text-right">
                                      <div className="font-mono font-bold text-4xl text-[#282a1e]">$1.72</div>
                                      <div className="text-xs font-bold uppercase tracking-wider text-[#d3f54c] bg-[#282a1e] px-2 py-0.5 rounded">/ Hour</div>
                                  </div>
                              </div>
                          </div>
                       </div>
                  </div>
               </div>
          </div>
        </div>
      </section>

      {/* TECH STACK LOOP - FULL WIDTH ALTERNATING SECTIONS */}
      {/* Each Tech component now renders a full <section> */}
      <div className="flex flex-col">
          <TechWorkflows data={TECH_STACK[0]} index={0} />
          <TechCRM data={TECH_STACK[1]} index={1} />
          <TechScraping data={TECH_STACK[2]} index={2} />
          <TechAI data={TECH_STACK[3]} index={3} />
          <TechInfra data={TECH_STACK[4]} index={4} />
      </div>
    </>
  );
};
