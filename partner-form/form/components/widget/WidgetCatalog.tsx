import React from 'react';
import { Layers, Tag } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetCatalog = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="flex items-center justify-between mb-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40">Product Matrix</div>
        <Layers size={24} className="text-[#d3f54c]" />
    </div>
    
    <div className="flex-1 p-8 rounded-[2rem] bg-[#282a1e] text-[#fdfff9] text-base leading-relaxed relative overflow-hidden">
       <div className="absolute top-0 right-0 p-4 opacity-10">
          <Tag size={64} />
       </div>
       <div className="relative z-10 font-light">
         {data.whatSell || <span className="opacity-30 italic">Defining product parameters...</span>}
       </div>
    </div>

    <div className="mt-6 flex gap-3">
       <div className="flex-1 py-3 rounded-xl bg-[#d3f54c] text-[10px] font-bold text-[#282a1e] uppercase tracking-wider text-center flex items-center justify-center">Sector Analysis</div>
       <div className="flex-1 py-3 rounded-xl border border-[#282a1e]/10 text-[10px] text-[#282a1e]/40 uppercase tracking-wider text-center flex items-center justify-center">Keywords</div>
    </div>
  </div>
);