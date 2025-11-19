
import React from 'react';
import { 
  Terminal, 
  Cpu, 
  Mic, 
  Container,
  Server,
  Plane
} from 'lucide-react';
import { TimelineCarousel } from './TimelineCarousel';

export const DeepDive: React.FC = () => {
  return (
    <section className="bg-[#282a1e] py-32 md:py-48 relative z-20 border-y-4 border-[#d3f54c] overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#d3f54c 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      {/* Header Section */}
      <div className="container mx-auto px-6 text-[#fdfff9] relative z-10 mb-32">
        <div className="max-w-6xl mx-auto text-center">
           <div className="inline-flex items-center gap-4 px-8 py-4 bg-[#fdfff9]/10 text-[#d3f54c] rounded-full font-bold text-base tracking-widest uppercase mb-10 hover:scale-105 transition-transform cursor-default backdrop-blur-md border border-[#d3f54c]/20">
              <Terminal size={24} />
              <span>Engineering Manifesto</span>
           </div>
           <h2 className="text-7xl md:text-[7rem] font-bold leading-[0.9] mb-12 tracking-tighter text-[#fdfff9]">
             Built, Not <span className="serif-accent italic text-[#282a1e] bg-[#d3f54c] px-8 py-2 rounded-[2rem] inline-block transform -rotate-2 ">Bought.</span>
           </h2>
           <p className="text-2xl md:text-4xl font-medium text-[#fdfff9]/80 leading-relaxed max-w-5xl mx-auto">
             We don't rent intelligence. We host it. By moving from expensive API wrappers to <strong className="text-[#fdfff9] underline decoration-[#d3f54c] decoration-4 underline-offset-8">bare-metal open source infrastructure</strong>, we achieved the unit economics necessary for global scale.
           </p>
        </div>
      </div>

      {/* Hardware Grid */}
      <div className="container mx-auto px-6 mb-48 relative z-10">
         <div className="grid xl:grid-cols-2 gap-24 items-start">
            <div className="space-y-12 sticky top-32">
               <h3 className="text-6xl md:text-8xl font-bold leading-tight text-[#fdfff9]">
                  Open Source is <br/>
                  <span className="serif-accent italic text-[#282a1e] bg-[#d3f54c] px-4 leading-normal inline-block">Liberty.</span>
               </h3>
               <div className="space-y-8 text-xl md:text-2xl text-[#fdfff9]/80 font-medium leading-relaxed">
                 <p>
                   Generic Alternatives was born from a refusal to pay per-token. We pivoted from "Vibe Coding" wrappers to actual infrastructure development.
                 </p>
               </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
               {/* Card 1: AMD MI300 */}
               <div className="bg-[#1a1c14] text-[#fdfff9] p-8 rounded-[2rem] border-2 border-[#fdfff9]/10 hover:border-[#d3f54c] transition-colors duration-300 flex flex-col justify-between min-h-[320px] group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d3f54c]/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-[#d3f54c]/10"></div>
                  <div className="bg-[#d3f54c] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-[#282a1e] group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <Cpu size={32} strokeWidth={2.5} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-3xl font-bold mb-3 group-hover:text-[#d3f54c] transition-colors">AMD MI300</h4>
                    <p className="opacity-70 text-lg leading-snug font-medium">State-of-the-art hardware running local inference for voice & text.</p>
                  </div>
               </div>

               {/* Card 2: Voice Cloning */}
               <div className="bg-[#fdfff9] p-8 rounded-[2rem] border-2 border-transparent hover:border-[#d3f54c] transition-colors duration-300 flex flex-col justify-between min-h-[320px] group relative overflow-hidden">
                   <div className="bg-[#282a1e] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-[#d3f54c] group-hover:bg-[#d3f54c] group-hover:text-[#282a1e] transition-colors duration-300">
                      <Mic size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold mb-3 text-[#282a1e]">Voice Cloning</h4>
                    <p className="text-[#282a1e]/70 text-lg leading-snug font-medium">IBM Granite 1.5B 8B Paramter ASR Model + Emotion2Vec for human-parity prosody.</p>
                  </div>
               </div>

               {/* Card 3: Microservices */}
               <div className="bg-[#fdfff9] p-8 rounded-[2rem] border-2 border-transparent hover:border-[#d3f54c] transition-colors duration-300 flex flex-col justify-between min-h-[320px] group relative overflow-hidden">
                   <div className="bg-[#282a1e] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-[#d3f54c] group-hover:bg-[#d3f54c] group-hover:text-[#282a1e] transition-colors duration-300">
                      <Container size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold mb-3 text-[#282a1e]">Microservices</h4>
                    <p className="text-[#282a1e]/70 text-lg leading-snug font-medium">Docker containers replacing expensive SaaS subscriptions.</p>
                  </div>
               </div>

               {/* Card 4: Self-Hosted */}
               <div className="bg-[#d3f54c] text-[#282a1e] p-8 rounded-[2rem] border-2 border-[#d3f54c] hover:bg-[#c2e830] transition-colors duration-300 flex flex-col justify-between min-h-[320px] group relative overflow-hidden">
                   <div className="bg-[#282a1e] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-[#d3f54c] transition-colors duration-300">
                      <Server size={32} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold mb-3">Self-Hosted</h4>
                    <p className="opacity-80 text-lg leading-snug font-bold">Jina AI & Custom scrapers running on our own metal.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* RULER CAROUSEL SECTION */}
      <div className="relative z-10">
        {/* Section Title */}
        <div className="container mx-auto px-6 mb-16">
             <h3 className="text-5xl md:text-6xl font-bold text-[#fdfff9] flex items-center gap-4">
               <Plane className="text-[#d3f54c]" size={48} />
               <span className="border-b-4 border-[#d3f54c]">The Journey</span>
             </h3>
        </div>

        <TimelineCarousel />
      </div>

    </section>
  );
};
