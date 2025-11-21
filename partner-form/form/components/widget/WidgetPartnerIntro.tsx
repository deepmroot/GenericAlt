
import React from 'react';
import { Handshake, TrendingUp } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetPartnerIntro = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e] relative overflow-hidden">
    {/* Decorative BG */}
    <div className="absolute -right-12 -top-12 w-64 h-64 bg-[#d3f54c] rounded-full opacity-20 blur-3xl" />

    <div className="flex-1 flex flex-col items-center justify-center text-center z-10">
       <div className="w-32 h-32 bg-[#282a1e] rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-[#d3f54c]/20">
          <Handshake size={56} className="text-[#d3f54c]" />
       </div>
       
       <h2 className="text-3xl font-bold tracking-tight mb-2">Partner Program</h2>
       <p className="text-[#282a1e]/60 font-medium">Unlock Recurring Revenue</p>

       <div className="mt-12 w-full">
          <div className="flex items-center gap-4 p-4 bg-[#282a1e]/5 rounded-[1.5rem] mb-3">
             <div className="w-10 h-10 rounded-full bg-[#d3f54c] flex items-center justify-center text-[#282a1e]">
                <TrendingUp size={20} />
             </div>
             <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Commission</div>
                <div className="font-bold text-lg">Lifetime Rev-Share</div>
             </div>
          </div>
       </div>
    </div>
  </div>
);
