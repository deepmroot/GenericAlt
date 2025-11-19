
import React from 'react';
import { 
  Terminal, 
  Cpu, 
  Mic, 
  Database, 
  Search, 
  MessageCircle, 
  Share2, 
} from 'lucide-react';

const PipelineTerminal = ({ title, steps }: { title: string, steps: { icon: React.ElementType, label: string, sub: string }[] }) => (
  <div className="w-full mb-32 relative">
    {/* Section Header */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b-2 border-[#282a1e]/10 pb-8">
         <div>
            <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#282a1e] p-2 rounded-lg">
                    <Terminal size={20} className="text-[#d3f54c]" />
                </div>
                <span className="font-bold text-[#282a1e]/60 tracking-widest uppercase text-sm">Pipeline Architecture</span>
            </div>
            <h4 className="text-4xl md:text-5xl font-bold text-[#282a1e] tracking-tight">{title}</h4>
         </div>
    </div>

    {/* Steps Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative">
        {steps.map((step, idx) => (
            <div key={idx} className="group p-10 rounded-[3rem] border-3 border-[#282a1e] bg-[#282a1e] hover:bg-[#d3f54c] hover:border-[#d3f54c] hover:scale-[1.02] transition-all duration-500 h-full flex flex-col justify-between">
                 <div>
                     <div className="w-20 h-20 bg-[#d3f54c] rounded-full flex items-center justify-center mb-8 text-[#282a1e] group-hover:bg-[#282a1e] group-hover:text-[#d3f54c] transition-colors shadow-lg">
                        <step.icon size={36} strokeWidth={2} />
                     </div>
                     
                     <div className="flex justify-between items-start mb-6">
                        <h5 className="text-3xl font-bold text-[#fdfff9] group-hover:text-[#282a1e] transition-colors leading-tight">{step.label}</h5>
                        <span className="font-mono text-[#d3f54c] font-bold opacity-50 text-xl group-hover:text-[#282a1e] group-hover:opacity-100 transition-all">0{idx + 1}</span>
                     </div>
                 </div>
                 <p className="text-xl text-[#fdfff9]/70 leading-relaxed group-hover:text-[#282a1e]/80 transition-colors font-medium">
                    {step.sub}
                 </p>
            </div>
        ))}
    </div>
  </div>
);

export const PipelineArchive: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <h3 className="text-5xl md:text-6xl font-bold mb-24 text-center text-[#282a1e]">
         <span className="relative inline-block">
            Production Pipelines
            <span className="absolute bottom-2 left-0 w-full h-3 bg-[#d3f54c] -z-10 transform -rotate-1"></span>
         </span>
      </h3>
      
      <PipelineTerminal 
        title="Social Discovery Engine"
        steps={[
          { icon: Search, label: "Seed Discovery", sub: "Google Maps & FB Scraping" },
          { icon: Share2, label: "Follower Mining", sub: "Instagrapi + Regex Triage" },
          { icon: Cpu, label: "Classification", sub: "Llama 4 Vision Model" },
          { icon: Database, label: "CRM Sync", sub: "Twenty CRM Upsert" }
        ]}
      />

      <PipelineTerminal 
        title="Autonomous Voice Negotiation"
        steps={[
          { icon: Database, label: "Lead Qualification", sub: "Vector Embedding Search" },
          { icon: Mic, label: "Voice Generation", sub: "VibeVoice + AudioCraft Foley" },
          { icon: MessageCircle, label: "Realtime Logic", sub: "Google Live API (Brain)" },
          { icon: Terminal, label: "Action Execution", sub: "Function Calling & Deals" }
        ]}
      />
    </div>
  );
};
