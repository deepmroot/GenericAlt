
import React from 'react';
import { Server, Cpu, Activity, Box } from 'lucide-react';
import { TechLayout } from './TechLayout';
import { TechStackCategory } from '../../types';

interface TechProps {
  data: TechStackCategory;
  index: number;
}

export const TechInfra: React.FC<TechProps> = ({ data, index }) => {
  const inverted = index % 2 !== 0;

  // Styles
  const cardMainBg = inverted ? 'bg-[#fdfff9]/5' : 'bg-[#282a1e]';
  const cardMainText = inverted ? 'text-[#fdfff9]' : 'text-[#fdfff9]';
  const cardSubBg = inverted ? 'bg-[#fdfff9]/10 border-[#fdfff9]/10' : 'bg-[#282a1e]/5 border-[#282a1e]/10';

  return (
    <TechLayout data={data} index={index} icon={Server} idLabel="INFRASTRUCTURE">
        <div className="grid grid-cols-2 gap-4">
            <div className={`rounded-xl p-4 col-span-2 ${cardMainBg} ${cardMainText}`}>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase text-[#d3f54c]">System Health</span>
                    <Activity size={14} className="text-[#d3f54c]" />
                </div>
                <div className="text-3xl font-bold mb-1">99.9%</div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#d3f54c] h-full w-[99%]"></div>
                </div>
            </div>

            <div className={`border rounded-xl p-4 ${cardSubBg}`}>
                <div className="flex items-center gap-2 mb-3 opacity-60">
                    <Cpu size={16} />
                    <span className="text-xs font-bold uppercase">Orchestrator</span>
                </div>
                <div className="font-mono text-sm font-bold">Railway</div>
                <div className="flex gap-1 mt-2">
                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
            </div>

            <div className={`border rounded-xl p-4 ${cardSubBg}`}>
                <div className="flex items-center gap-2 mb-3 opacity-60">
                    <Box size={16} />
                    <span className="text-xs font-bold uppercase">Containers</span>
                </div>
                <div className="font-mono text-sm font-bold">Docker</div>
                <div className="text-xs opacity-50 mt-1">8 Services Active</div>
            </div>
        </div>
    </TechLayout>
  );
};
