import React from 'react';
import { CalendarDays } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetBudget = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="flex items-center justify-between mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40">Project Scope</div>
        <CalendarDays size={28} className="text-[#d3f54c]" />
    </div>
    
    <div className="space-y-10">
       <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#282a1e]/40 mb-2">Capital Allocation</div>
          <div className="text-5xl font-bold text-[#282a1e] tracking-tighter">{data.budget || '---'}</div>
       </div>
       <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#282a1e]/40 mb-2">Target Timeline</div>
          <div className="text-5xl font-bold text-[#282a1e] tracking-tighter">{data.timeline || '---'}</div>
       </div>
    </div>

    <div className="mt-auto pt-8 border-t-2 border-[#282a1e]/5 flex items-center justify-between text-xs font-mono">
       <span className="text-[#282a1e]/60 font-bold tracking-widest">READY FOR SUBMISSION</span>
       <div className="w-3 h-3 rounded-full bg-[#d3f54c] animate-pulse" />
    </div>
  </div>
);