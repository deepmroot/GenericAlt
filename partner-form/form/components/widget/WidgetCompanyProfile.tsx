
import React from 'react';
import { Building2, Briefcase } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetCompanyProfile = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="flex items-center justify-between mb-8">
       <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40">Entity ID</div>
       <Building2 size={24} className="text-[#d3f54c]" />
    </div>

    <div className="flex-1 flex flex-col gap-4">
       {/* ID Card Style */}
       <div className="bg-[#282a1e] text-[#fdfff9] p-6 rounded-[1.5rem] relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <Briefcase size={80} />
          </div>
          
          <div className="relative z-10">
             <div className="text-[10px] font-mono uppercase tracking-widest text-[#d3f54c] mb-2">Organization</div>
             <div className="text-3xl font-bold tracking-tight leading-none mb-4 break-words">
                {data.companyName || 'Generic Partner'}
             </div>
             
             <div className="w-full h-[1px] bg-[#fdfff9]/10 my-4" />
             
             <div className="grid grid-cols-2 gap-4">
                <div>
                   <div className="text-[9px] font-mono uppercase tracking-widest opacity-50 mb-1">Role</div>
                   <div className="font-medium">{data.role || '---'}</div>
                </div>
                <div>
                   <div className="text-[9px] font-mono uppercase tracking-widest opacity-50 mb-1">Web</div>
                   <div className="font-medium truncate">{data.website || '---'}</div>
                </div>
             </div>
          </div>
       </div>

       {/* Status Indicator */}
       <div className="mt-auto flex items-center gap-3 p-4 bg-[#d3f54c]/10 rounded-2xl border border-[#d3f54c]/20">
          <div className="w-2 h-2 bg-[#d3f54c] rounded-full animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest">Profile Initializing...</span>
       </div>
    </div>
  </div>
);
