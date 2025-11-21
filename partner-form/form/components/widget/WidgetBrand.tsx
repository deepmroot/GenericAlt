import React from 'react';
import { Factory } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetBrand = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="space-y-10 h-full flex flex-col">
       <div className="flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40">Entity Profile</div>
          <div className="w-12 h-12 rounded-2xl bg-[#282a1e]/5 flex items-center justify-center">
            <Factory size={24} className="text-[#282a1e]" />
          </div>
       </div>

       <div className="flex-1 flex flex-col justify-center space-y-4">
          <div>
            <div className="text-5xl lg:text-6xl font-bold tracking-tighter text-[#282a1e] leading-[0.9] break-words">
              {data.brandName || 'Unknown'}
            </div>
          </div>
          <div>
            <span className="font-mono text-sm text-[#d3f54c] bg-[#282a1e] px-3 py-1 rounded-lg inline-block">
              {data.website || 'domain_pending'}
            </span>
          </div>
       </div>

       <div className="border-t border-[#282a1e]/10 pt-8">
         <div className="grid grid-cols-3 gap-2 text-[9px] font-mono text-center text-[#282a1e] uppercase font-bold">
            <div className="p-4 bg-[#282a1e]/5 rounded-2xl hover:bg-[#d3f54c] transition-colors cursor-default">Inc.</div>
            <div className="p-4 bg-[#282a1e]/5 rounded-2xl hover:bg-[#d3f54c] transition-colors cursor-default">LLC</div>
            <div className="p-4 bg-[#282a1e]/5 rounded-2xl hover:bg-[#d3f54c] transition-colors cursor-default">Ltd.</div>
         </div>
       </div>
    </div>
  </div>
);