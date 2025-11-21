import React from 'react';
import { clsx } from 'clsx';
import { FormData } from '../../types';

export const WidgetOrderSize = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40 mb-8">Ticket Size</div>
    <div className="grid grid-cols-1 gap-4 flex-1 overflow-y-auto no-scrollbar pr-1">
       {['Under $500','$500–$1,000','$1,000–$3,000','$3,000–$10,000','$10,000+'].map(opt => (
          <div key={opt} className={clsx("flex items-center justify-between px-6 py-5 rounded-[1.5rem] border-2 transition-all", data.expectedOrderSize === opt ? "border-[#282a1e] bg-[#282a1e] text-[#d3f54c]" : "border-[#282a1e]/10 bg-transparent text-[#282a1e]/40")}>
             <span className="font-mono text-xs font-bold uppercase tracking-wide">{opt}</span>
             {data.expectedOrderSize === opt && <div className="w-2 h-2 bg-[#d3f54c] rounded-full" />}
          </div>
       ))}
    </div>
  </div>
);