import React from 'react';
import { User, Check } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetIdentity = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e] relative">
    <div className="absolute top-8 right-8">
      <div className="bg-[#d3f54c] text-[#282a1e] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Active</div>
    </div>

    <div className="flex items-center gap-5 mb-10">
       <div className="w-16 h-16 rounded-full bg-[#282a1e] text-[#d3f54c] flex items-center justify-center shadow-sm">
         <User size={28} />
       </div>
       <div>
          <h3 className="text-2xl font-bold leading-none mb-1">Identity</h3>
          <div className="text-[10px] font-mono text-[#282a1e]/40 uppercase tracking-wider">User Profile</div>
       </div>
    </div>

    <div className="space-y-4 flex-1">
       <div className="grid grid-cols-2 gap-3">
          <div className="p-5 rounded-[1.5rem] bg-[#282a1e]/5 border border-[#282a1e]/5">
             <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#282a1e]/40 mb-2">First</div>
             <div className="font-bold text-xl tracking-tight">{data.firstName || '---'}</div>
          </div>
          <div className="p-5 rounded-[1.5rem] bg-[#282a1e]/5 border border-[#282a1e]/5">
             <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#282a1e]/40 mb-2">Last</div>
             <div className="font-bold text-xl tracking-tight">{data.lastName || '---'}</div>
          </div>
       </div>
       <div className="p-6 rounded-[1.5rem] bg-[#282a1e] text-[#fdfff9] flex justify-between items-center mt-4">
          <div className="overflow-hidden">
             <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d3f54c] mb-1">Contact</div>
             <div className="font-mono text-sm truncate">{data.email || 'awaiting_input'}</div>
          </div>
          {data.email && <div className="bg-[#d3f54c] text-[#282a1e] p-1.5 rounded-full"><Check size={14} /></div>}
       </div>
    </div>
  </div>
);