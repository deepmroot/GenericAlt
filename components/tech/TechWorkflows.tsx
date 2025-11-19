
import React from 'react';
import { MapPin, MessageCircle, Database, Code } from 'lucide-react';
import { TechLayout } from './TechLayout';
import { TechStackCategory } from '../../types';

interface TechProps {
  data: TechStackCategory;
  index: number;
}

export const TechWorkflows: React.FC<TechProps> = ({ data, index }) => {
  const inverted = index % 2 !== 0; // Odd index = Inverted (Dark Card)
  
  // Dynamic styles based on inverted state
  const lineColor = inverted ? 'bg-[#fdfff9]/10' : 'bg-[#282a1e]/10';
  const iconContainerBg = inverted ? 'bg-[#fdfff9]' : 'bg-[#282a1e]';
  const iconColor = inverted ? 'text-[#282a1e]' : 'text-[#d3f54c]';
  
  // Alternate for step 3
  const iconContainerBgAlt = inverted ? 'bg-[#d3f54c]' : 'bg-[#d3f54c]';
  const iconColorAlt = inverted ? 'text-[#282a1e]' : 'text-[#282a1e]';

  return (
    <TechLayout data={data} index={index} icon={Code} idLabel="WORKFLOWS">
        <div className="space-y-0">
            {/* Step 1 */}
            <div className="flex gap-4 relative">
                <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-xl ${iconContainerBg} ${iconColor} flex items-center justify-center z-10 border-4 ${inverted ? 'border-[#282a1e]' : 'border-[#fdfff9]'}`}>
                        <MapPin size={20} />
                    </div>
                    <div className={`h-full w-1 ${lineColor} -mt-2 -mb-2`}></div>
                </div>
                <div className="pb-8 pt-2">
                    <h4 className="font-bold text-xl">Target Discovery</h4>
                    <p className="text-sm opacity-60">Scraping Google Maps (G-Maps-Extractor)</p>
                    <div className={`mt-2 inline-block text-xs font-bold px-2 py-1 rounded ${inverted ? 'bg-[#d3f54c]/20 text-[#d3f54c]' : 'bg-[#d3f54c]/20 text-[#282a1e]'}`}>
                        + 150 Leads
                    </div>
                </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative">
                <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-xl ${iconContainerBg} ${iconColor} flex items-center justify-center z-10 border-4 ${inverted ? 'border-[#282a1e]' : 'border-[#fdfff9]'}`}>
                        <MessageCircle size={20} />
                    </div>
                    <div className={`h-full w-1 ${lineColor} -mt-2 -mb-2`}></div>
                </div>
                <div className="pb-8 pt-2">
                    <h4 className="font-bold text-xl">Validation (WAHA)</h4>
                    <p className="text-sm opacity-60">Ping WhatsApp API to verify numbers</p>
                    <div className="mt-2 inline-block bg-green-500/20 text-green-600 text-xs font-bold px-2 py-1 rounded">
                        Verified
                    </div>
                </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative">
                <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 rounded-xl ${iconContainerBgAlt} ${iconColorAlt} flex items-center justify-center z-10 border-4 ${inverted ? 'border-[#282a1e]' : 'border-[#fdfff9]'}`}>
                        <Database size={20} />
                    </div>
                </div>
                <div className="pt-2">
                    <h4 className="font-bold text-xl">CRM Upsert</h4>
                    <p className="text-sm opacity-60">Sync to Twenty CRM Pipeline</p>
                </div>
            </div>
        </div>
    </TechLayout>
  );
};
