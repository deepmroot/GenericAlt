import React from 'react';
import { Package } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetSourcing = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <style>{`
      .lime-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: #d3f54c rgba(40, 42, 30, 0.05);
      }
      .lime-scrollbar::-webkit-scrollbar {
        width: 6px;
      }
      .lime-scrollbar::-webkit-scrollbar-track {
        background: rgba(40, 42, 30, 0.05);
        border-radius: 10px;
        margin-block: 4px;
      }
      .lime-scrollbar::-webkit-scrollbar-thumb {
        background: #d3f54c;
        border-radius: 10px;
      }
      .lime-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #b5d43b;
      }
    `}</style>
    <div className="flex items-center gap-4 mb-8">
       <div className="p-4 bg-[#282a1e] rounded-2xl text-[#d3f54c]">
         <Package size={24} />
       </div>
       <div className="text-2xl font-bold text-[#282a1e] tracking-tight">Sourcing Queue</div>
    </div>
    
    <div className="flex-1 overflow-hidden relative">
       <div className="space-y-3 h-full overflow-y-auto pr-2 pb-4 lime-scrollbar">
         {data.whatSource ? data.whatSource.split('\n').map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-[#282a1e]/5 border border-[#282a1e]/5 hover:bg-[#d3f54c]/20 transition-colors">
               <div className="w-2 h-2 bg-[#d3f54c] rounded-full flex-shrink-0" />
               <span className="text-sm font-bold text-[#282a1e] break-words leading-tight">{item}</span>
            </div>
         )) : (
            <div className="flex flex-col gap-3 opacity-10">
               <div className="h-16 bg-[#282a1e] rounded-[1.5rem] w-full" />
               <div className="h-16 bg-[#282a1e] rounded-[1.5rem] w-3/4" />
               <div className="h-16 bg-[#282a1e] rounded-[1.5rem] w-1/2" />
            </div>
         )}
       </div>
       {/* Fade for scroll */}
       <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#fdfff9] to-transparent pointer-events-none" />
    </div>
  </div>
);