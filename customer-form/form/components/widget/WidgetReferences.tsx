import React from 'react';
import { FileText } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetReferences = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40 mb-8">Asset Library</div>
    <div className="grid grid-cols-2 gap-4 mb-8 flex-1 content-start">
       {data.references.length > 0 ? data.references.map((f,i) => (
          <div key={i} className="aspect-square rounded-[2rem] bg-[#282a1e] text-[#fdfff9] flex flex-col items-center justify-center p-4 text-center border-2 border-transparent hover:border-[#d3f54c] transition-colors">
             <FileText className="text-[#d3f54c] mb-3" size={32} />
             <div className="text-[10px] font-mono truncate w-full opacity-60 px-2">{f.name}</div>
          </div>
       )) : (
          <>
             <div className="aspect-square rounded-[2rem] border-2 border-dashed border-[#282a1e]/10 flex items-center justify-center text-[#282a1e]/20">
                <div className="text-[10px] font-bold uppercase tracking-widest">No Media</div>
             </div>
             <div className="aspect-square rounded-[2rem] border-2 border-dashed border-[#282a1e]/10 flex items-center justify-center text-[#282a1e]/20">
                <div className="text-[10px] font-bold uppercase tracking-widest">No Docs</div>
             </div>
          </>
       )}
    </div>
    <div className="p-6 rounded-[2rem] bg-[#d3f54c] text-[#282a1e] relative overflow-hidden">
       <div className="relative z-10 text-sm font-bold leading-tight max-w-[80%]">
          Uploading references increases quote accuracy by 40%.
       </div>
       <div className="absolute -right-4 -bottom-4 opacity-20">
          <FileText size={80} />
       </div>
    </div>
  </div>
);