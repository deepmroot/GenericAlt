
import React from 'react';
import { Radar } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetSourceChannel = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="flex items-center justify-between mb-8">
       <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40">Attribution</div>
       <div className="animate-spin-slow">
          <Radar size={24} className="text-[#d3f54c]" />
       </div>
    </div>
    
    <div className="flex-1 flex items-center justify-center relative">
       {/* Radar Rings */}
       <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-[#282a1e]/5" />
          <div className="w-48 h-48 rounded-full border border-[#282a1e]/10 absolute" />
          <div className="w-32 h-32 rounded-full border border-[#282a1e]/20 absolute" />
       </div>

       {/* Active Source */}
       <div className="relative z-10 text-center">
          <div className="text-4xl font-bold tracking-tighter mb-2 text-[#282a1e]">
             {data.referralSource || 'Scanning...'}
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest bg-[#282a1e] text-[#d3f54c] px-3 py-1 rounded-full inline-block">
             Origin Detected
          </div>
       </div>
    </div>

    <div className="mt-auto text-center">
       <button className="w-full py-4 bg-[#d3f54c] rounded-[1.5rem] font-bold text-lg hover:bg-[#c0e045] transition-colors shadow-lg shadow-[#d3f54c]/20">
          SUBMIT APPLICATION
       </button>
    </div>
  </div>
);
