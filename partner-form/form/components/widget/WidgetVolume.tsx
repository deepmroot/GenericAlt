import React from 'react';
import { Gauge } from 'lucide-react';
import { FormData } from '../../types';

export const WidgetVolume = ({data}: {data: FormData}) => (
  <div className="h-full w-full bg-[#fdfff9] border-[8px] border-[#fdfff9] rounded-[2rem] p-8 flex flex-col text-[#282a1e]">
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#282a1e]/40 mb-4">Velocity Metric</div>
    
    <div className="flex flex-col items-center justify-center flex-1">
       <div className="relative w-56 h-56 flex items-center justify-center">
           <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              {/* Background Track */}
              <circle cx="50" cy="50" r="40" stroke="#282a1e" strokeWidth="6" strokeOpacity="0.1" fill="none" />
              {/* Active Track */}
              <circle cx="50" cy="50" r="40" stroke="#d3f54c" strokeWidth="6" fill="none" strokeDasharray="251" strokeDashoffset={251 - (251 * (data.orderVolume ? 0.75 : 0.05))} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
           </svg>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-[#282a1e]">
              <Gauge size={24} className="opacity-20 mb-3" />
              <span className="text-5xl font-bold tracking-tighter">{data.orderVolume ? data.orderVolume.split(' ')[0] : '0'}</span>
              <span className="text-[9px] font-bold uppercase tracking-widest opacity-50 mt-2">Orders/Day</span>
           </div>
       </div>
    </div>

    <div className="text-center px-4 py-3 bg-[#282a1e]/5 rounded-xl">
        <p className="text-[10px] leading-relaxed opacity-60">Volume determines factory tier matching.</p>
    </div>
  </div>
);