
import React from 'react';
import { Puzzle, ArrowUpRight } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetSynergy = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="flex items-center justify-between mb-8">
       <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40">Synergy Map</div>
       <Puzzle size={24} className="text-[#d3f54c]" />
    </div>

    <div className="flex-1 bg-[#282a1e] rounded-[2rem] p-6 relative overflow-hidden flex flex-col">
       {/* Abstract Lines */}
       <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100">
          <path d="M0 100 Q 50 50 100 0" stroke="#fdfff9" strokeWidth="2" fill="none" />
          <path d="M0 0 Q 50 50 100 100" stroke="#fdfff9" strokeWidth="2" fill="none" />
       </svg>

       <div className="relative z-10 text-[#fdfff9]">
          <div className="mb-6">
             <div className="text-[9px] font-mono uppercase text-[#d3f54c] mb-2">Proposed Vision</div>
             <div className="text-sm leading-relaxed opacity-80 line-clamp-4 italic">
                "{data.partnershipVision || 'Defining structure...'}"
             </div>
          </div>

          <div className="w-full h-[1px] bg-[#fdfff9]/10 mb-6" />

          <div>
             <div className="text-[9px] font-mono uppercase text-[#d3f54c] mb-2">Value Add</div>
             <div className="text-sm leading-relaxed opacity-80 line-clamp-4 italic">
                "{data.valueAdd || 'Defining value...'}"
             </div>
          </div>
       </div>
       
       <div className="mt-auto self-end">
          <div className="w-10 h-10 rounded-full bg-[#d3f54c] flex items-center justify-center text-[#282a1e]">
             <ArrowUpRight size={20} />
          </div>
       </div>
    </div>
  </div>
);
