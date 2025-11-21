import React from 'react';
import { MessageCircle } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetWhatsApp = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="flex justify-between items-start mb-8">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#d3f54c] animate-pulse" />
        Comm Link
      </div>
      <div className="bg-[#d3f54c] p-3 rounded-xl text-[#282a1e]">
        <MessageCircle size={24} />
      </div>
    </div>
    
    <div className="flex-1 flex flex-col justify-center items-center text-center relative">
       <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <MessageCircle size={200} />
       </div>
       <div className="text-3xl md:text-4xl font-mono font-bold text-[#282a1e] tracking-tighter mb-4 z-10">
          {data.whatsapp || '+__ ___ ___'}
       </div>
       <div className="text-[10px] uppercase tracking-widest text-[#282a1e]/40 bg-[#282a1e]/5 px-4 py-2 rounded-full">WhatsApp Direct Line</div>
    </div>
    
    <div className="mt-auto p-6 rounded-[1.5rem] bg-[#282a1e] text-[#fdfff9] border-l-4 border-[#d3f54c] flex items-center gap-4">
       <div className="flex-1">
         <div className="text-[10px] font-bold uppercase tracking-widest text-[#d3f54c] mb-1">Verification</div>
         <div className="text-xs opacity-80">We will send a one-time code to verify availability.</div>
       </div>
    </div>
  </div>
);