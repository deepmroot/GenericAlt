
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TimelineItem {
  date: string;
  year: string;
  location: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  tags: string[];
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    date: "FEB",
    year: "2025",
    location: "Panama → Philippines",
    titlePart1: "The",
    titlePart2: "Foundation",
    description: "I flew from Panama to the Philippines to work as an Embedded Contractor for AMAI. I engineered an MCP tool and a vector embedding ingestion system utilizing jina-v4-embeddings.",
    tags: ["AMAI", "Jina Embeddings"]
  },
  {
    date: "APR",
    year: "2025",
    location: "Taipei, Taiwan",
    titlePart1: "The",
    titlePart2: "Epiphany",
    description: "Traveling to Taipei, I helped a founder transform her SaaS, 'Fitexto'. This interaction sparked a realization: I was trying to build a massive monolith when I should have been breaking it down.",
    tags: ["SaaS Architecture", "Pivot"]
  },
  {
    date: "JUN",
    year: "2025",
    location: "Hanoi, Vietnam",
    titlePart1: "The",
    titlePart2: "Catalyst",
    description: "In Vietnam, I met Paul. He showed me a single invoice he had sent for $50,000. I looked around the room of administrative staff and realized: this work will be replaced by AI.",
    tags: ["Networking", "Prediction"]
  },
  {
    date: "AUG",
    year: "2025",
    location: "Hanoi → China",
    titlePart1: "The",
    titlePart2: "Prototype",
    description: "Paul saw my previous work and immediately understood the value. We polished the system on the ground. I realized that if I could automate the supply chain for my friend's factory, I could do it for anyone.",
    tags: ["MVP Deployment", "Supply Chain"]
  },
  {
    date: "OCT",
    year: "2025",
    location: "Guangzhou, China",
    titlePart1: "The",
    titlePart2: "Birth",
    description: "I created aggregation methods to turn Bills of Lading + my outbound systems into a discovery engine. I let the Agent take over: looking for distributors in developing nations like Latin America.",
    tags: ["Ingestion", "Automation"]
  },
  {
    date: "NOV",
    year: "2025",
    location: "Global Operations",
    titlePart1: "The",
    titlePart2: "Reality",
    description: "As I sit everyday creating new ingestion methods, I realize the truth that made me drop out of university: those who don't adopt this technology will be replaced by these systems.",
    tags: ["Global Scale", "Future"]
  }
];

const RulerSlide: React.FC<{ item: TimelineItem; index: number }> = ({ item, index }) => {
  return (
    <div className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[800px] flex flex-col justify-start relative group pl-4 md:pl-12 shrink-0 snap-start">
      
      {/* Ruler Track Container */}
      <div className="flex items-end gap-3 md:gap-6 mb-12  border-[#fdfff9]/20 pb-1 w-full relative min-h-[80px]">
         
         {/* The Green Badge Indicator */}
         <div className="absolute bottom-4 left-0 z-10">
            <div className="bg-[#d3f54c] border-3 border-[#282a1e] px-6 py-2 rounded-t-2xl rounded-br-2xl flex items-center gap-3">
                <div className="flex flex-col leading-none">
                    <span className="font-black text-2xl text-[#282a1e] tracking-tighter">{item.date}</span>
                    <span className="text-sm font-bold text-[#282a1e] opacity-80">{item.year}</span>
                </div>
                <div className="h-8 w-px bg-[#282a1e]/20"></div>
                <span className="font-bold text-[#282a1e] uppercase tracking-wider text-sm whitespace-nowrap">{item.location}</span>
            </div>
         </div>
      </div>

      <div className="pr-8 md:pr-20 pl-2">
        {/* Mixed Typography Title */}
        <h3 className="text-6xl md:text-8xl lg:text-[7rem] font-bold text-[#fdfff9] mb-8 leading-[0.85] tracking-tighter">
          {item.titlePart1} <span className="serif-accent italic text-[#d3f54c] opacity-90">{item.titlePart2}</span>
        </h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
            {item.tags.map(tag => (
                <div key={tag} className="border-2 border-[#d3f54c] text-[#d3f54c] px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#d3f54c] hover:text-[#282a1e] transition-colors cursor-default">
                    {tag}
                </div>
            ))}
        </div>

        {/* Description */}
        <p className="text-2xl md:text-3xl font-medium text-[#fdfff9]/80 leading-snug max-w-3xl border-l-4 border-[#d3f54c] pl-6 py-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export const TimelineCarousel: React.FC = () => {
  return (
    <div className="relative pb-12">
      
      {/* --- MOBILE LAYOUT (Vertical) --- */}
      <div className="md:hidden flex flex-col px-6 space-y-16 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[3rem] top-0 bottom-0 w-0.5 bg-[#fdfff9]/10 z-0"></div>

          {TIMELINE_DATA.map((item, index) => (
            <div key={index} className="relative z-10">
                {/* Mobile Header: Date Badge */}
                <div className="flex items-center gap-6 mb-6">
                     <div className="bg-[#d3f54c] border-2 border-[#282a1e] px-4 py-3 rounded-2xl flex flex-col items-center justify-center w-20 shrink-0 text-center z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                        <span className="font-black text-xl text-[#282a1e] leading-none">{item.date}</span>
                        <span className="text-xs font-bold text-[#282a1e] opacity-80">{item.year}</span>
                     </div>
                     <div className="text-[#d3f54c] font-bold text-xs uppercase tracking-widest border-b border-[#d3f54c]/30 pb-1">
                        {item.location}
                     </div>
                </div>

                {/* Mobile Content */}
                <div className="pl-4">
                    <h3 className="text-5xl font-bold text-[#fdfff9] mb-4 leading-[0.9] tracking-tighter">
                      {item.titlePart1} <br/>
                      <span className="serif-accent italic text-[#d3f54c] opacity-90">{item.titlePart2}</span>
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map(tag => (
                            <div key={tag} className="border border-[#d3f54c] text-[#d3f54c] px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest">
                                {tag}
                            </div>
                        ))}
                    </div>

                    <p className="text-lg text-[#fdfff9]/80 font-medium leading-relaxed border-l-2 border-[#d3f54c] pl-4">
                        {item.description}
                    </p>
                </div>
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="flex justify-center pt-8 pb-8">
            <div className="flex flex-col items-center gap-4 text-[#fdfff9]">
                <div className="w-16 h-16 rounded-full bg-[#d3f54c] text-[#282a1e] flex items-center justify-center border-4 border-[#282a1e] shadow-[0px_0px_20px_rgba(211,245,76,0.3)]">
                    <ArrowRight size={32} />
                </div>
                <span className="text-xl font-bold uppercase tracking-widest text-[#d3f54c]">What's Next?</span>
            </div>
          </div>
      </div>


      {/* --- DESKTOP LAYOUT (Horizontal Carousel) --- */}
      <div className="hidden md:flex pt-10 px-6 gap-0 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
        
        {/* Spacer for left alignment */}
        <div className="min-w-[5vw] md:min-w-[10vw] shrink-0"></div>

        {TIMELINE_DATA.map((item, index) => (
          <RulerSlide key={index} item={item} index={index} />
        ))}
        
        {/* End Spacer/CTA */}
        <div className="min-w-[400px] flex items-center justify-center ml-12 shrink-0 snap-start">
            <div className="group flex flex-col items-center gap-6 text-[#fdfff9] cursor-pointer hover:scale-105 transition-transform">
                <div className="w-24 h-24 rounded-full bg-[#d3f54c] text-[#282a1e] flex items-center justify-center border-4 border-[#282a1e]">
                    <ArrowRight size={48} />
                </div>
                <span className="text-3xl font-bold uppercase tracking-widest text-[#d3f54c]">What's Next?</span>
            </div>
        </div>
        
        {/* Trailing spacer */}
        <div className="min-w-[10vw] shrink-0"></div>
      </div>  
    </div>
  );
};
