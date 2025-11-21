import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const WidgetFallback = ({progress}: {progress: number}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-10 flex flex-col items-center justify-center text-center text-[#282a1e] relative overflow-hidden">
     {/* Inner Border for decoration */}
     <div className="absolute inset-4 border border-[#282a1e]/5 rounded-[1.5rem] pointer-events-none" />
     
     <div className="mb-10 relative">
        <div className="w-40 h-40 rounded-full border-4 border-[#282a1e]/5 flex items-center justify-center bg-[#282a1e]/[0.02]">
            <ShieldCheck className="text-[#d3f54c]" size={48} />
        </div>
        <div className="absolute inset-0 rounded-full border-t-4 border-[#d3f54c] animate-spin" />
     </div>
     
     <h3 className="text-3xl font-bold mb-4 tracking-tight">System Initializing</h3>
     <p className="text-base text-[#282a1e]/60 max-w-[240px] leading-relaxed">
        Complete the fields to generate your factory sourcing profile.
     </p>
     
     <div className="mt-12 text-[#282a1e] font-mono text-2xl font-bold bg-[#d3f54c] px-6 py-2 rounded-full">
        {Math.round(progress)}%
     </div>
  </div>
);