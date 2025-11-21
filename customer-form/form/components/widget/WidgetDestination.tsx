import React from 'react';
import { Globe } from 'lucide-react';
import { FormData } from '../../types';
import { countries } from '../../data/countries';

export const WidgetDestination = ({data}: {data: FormData}) => {
  const found = countries.find(c => c.name === data.country);
  
  return (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
     <div className="flex flex-col h-full justify-between">
        <div className="relative">
           <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40 mb-6">Destination Logistics</div>
           
           <div className="mt-4 relative z-10">
             {found && <div className="text-6xl mb-2">{found.flag}</div>}
             <div className="text-6xl font-bold tracking-tighter break-words text-[#282a1e] leading-[0.85]">
                {data.country || '---'}
             </div>
           </div>

           <Globe size={120} className="absolute -right-4 -top-4 text-[#282a1e] opacity-[0.03]" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 my-8">
           <div className="p-6 rounded-[2rem] bg-[#282a1e] text-[#fdfff9]">
              <div className="text-[9px] uppercase opacity-40 mb-2 tracking-widest">Est. Duty</div>
              <div className="font-mono text-2xl font-bold text-[#d3f54c]">Calc...</div>
           </div>
           <div className="p-6 rounded-[2rem] border-2 border-[#282a1e]/10 bg-transparent text-[#282a1e]">
              <div className="text-[9px] uppercase opacity-40 mb-2 tracking-widest">Transit</div>
              <div className="font-mono text-2xl font-bold">-- Days</div>
           </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-[#d3f54c]/20 rounded-2xl text-[#282a1e]">
           <div className="w-2 h-2 bg-[#282a1e] rounded-full animate-pulse" />
           <div className="text-[10px] font-bold uppercase tracking-widest">Route Optimization Active</div>
        </div>
     </div>
  </div>
  );
};