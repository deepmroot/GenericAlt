
import React from 'react';
import { Contact, MessageSquare } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetContactDetails = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40 mb-8">Primary Point of Contact</div>
    
    <div className="flex-1 flex flex-col justify-center gap-6">
       {/* Name Card */}
       <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#282a1e] text-[#d3f54c] flex items-center justify-center flex-shrink-0">
             <Contact size={28} />
          </div>
          <div>
             <div className="text-2xl font-bold leading-tight">
                {data.firstName || '---'} {data.lastName || ''}
             </div>
             <div className="text-xs font-mono opacity-50">Authorized Rep</div>
          </div>
       </div>

       {/* Digital Contact Details */}
       <div className="space-y-2 mt-4">
          <div className="p-5 rounded-[1.5rem] border-2 border-[#282a1e]/10 flex items-center justify-between group hover:bg-[#282a1e] hover:text-[#d3f54c] transition-all">
             <div className="font-medium truncate">{data.email || 'Email pending'}</div>
          </div>
          
          <div className="p-5 rounded-[1.5rem] bg-[#d3f54c] text-[#282a1e] flex items-center justify-between">
             <div className="flex items-center gap-3">
                <MessageSquare size={18} />
                <div className="font-bold font-mono">{data.whatsapp || 'WhatsApp'}</div>
             </div>
             <div className="w-2 h-2 bg-[#282a1e] rounded-full animate-pulse" />
          </div>
       </div>
    </div>
  </div>
);
