
import React from 'react';
import { Network, CircleDollarSign } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetNetworkStats = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40 mb-6">Network Analysis</div>

    <div className="flex-1 flex flex-col gap-6">
       <div className="flex items-center justify-center py-8">
          <div className="relative">
             {/* Central Node */}
             <div className="w-20 h-20 bg-[#282a1e] rounded-full flex items-center justify-center z-10 relative">
                <Network className="text-[#d3f54c]" size={32} />
             </div>
             {/* Orbiting Nodes */}
             <div className="absolute inset-0 -m-8 animate-[spin_10s_linear_infinite]">
                <div className="w-4 h-4 bg-[#d3f54c] rounded-full absolute top-0 left-1/2 -translate-x-1/2" />
             </div>
             <div className="absolute inset-0 -m-8 animate-[spin_15s_linear_infinite_reverse] opacity-50">
                <div className="w-3 h-3 bg-[#282a1e] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" />
             </div>
          </div>
       </div>

       <div className="space-y-3">
          <div className="p-5 rounded-[1.5rem] bg-[#282a1e]/5 border-l-4 border-[#d3f54c]">
             <div className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Model</div>
             <div className="text-xl font-bold">{data.businessType || '---'}</div>
          </div>
          
          <div className="p-5 rounded-[1.5rem] bg-[#282a1e] text-[#fdfff9] flex items-center justify-between">
             <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#d3f54c] mb-1">Client Volume</div>
                <div className="text-xl font-bold">{data.clientRevenue || '---'}</div>
             </div>
             <CircleDollarSign className="text-[#d3f54c]" size={24} />
          </div>
       </div>
    </div>
  </div>
);
