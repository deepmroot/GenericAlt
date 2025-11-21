import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';
import { FormData } from '../../types';

export const WidgetExperience = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="flex items-center justify-between mb-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40">Sourcing Maturity</div>
        <ShieldCheck size={28} className="text-[#d3f54c]" />
    </div>
    
    <div className="space-y-3 flex-1 overflow-y-auto no-scrollbar pr-1">
       {/* Option 1: Pro */}
       <div className={clsx("p-6 rounded-[2rem] border-2 transition-all duration-300", data.experience === 'Yes, multiple times' ? "bg-[#282a1e] border-[#282a1e] text-[#fdfff9]" : "bg-transparent border-[#282a1e]/10 text-[#282a1e]/40")}>
          <div className="font-bold text-xl tracking-tight mb-1">Pro</div>
          <div className="text-[10px] font-mono uppercase tracking-widest opacity-70">Standard SOPs apply</div>
       </div>

       {/* Option 2: Growth */}
       <div className={clsx("p-6 rounded-[2rem] border-2 transition-all duration-300", data.experience === 'Once or twice' ? "bg-[#282a1e] border-[#282a1e] text-[#fdfff9]" : "bg-transparent border-[#282a1e]/10 text-[#282a1e]/40")}>
          <div className="font-bold text-xl tracking-tight mb-1">Growth</div>
          <div className="text-[10px] font-mono uppercase tracking-widest opacity-70">Guided onboarding</div>
       </div>

       {/* Option 3: Noob */}
       <div className={clsx("p-6 rounded-[2rem] border-2 transition-all duration-300", data.experience === 'No, this is my first time' ? "bg-[#282a1e] border-[#282a1e] text-[#fdfff9]" : "bg-transparent border-[#282a1e]/10 text-[#282a1e]/40")}>
          <div className="font-bold text-xl tracking-tight mb-1">Noob</div>
          <div className="text-[10px] font-mono uppercase tracking-widest opacity-70">Full assistance req.</div>
       </div>
    </div>
  </div>
);