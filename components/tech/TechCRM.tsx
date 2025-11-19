
import React from 'react';
import { Database, MapPin, Phone, Tag } from 'lucide-react';
import { TechLayout } from './TechLayout';
import { TechStackCategory } from '../../types';

interface TechProps {
  data: TechStackCategory;
  index: number;
}

export const TechCRM: React.FC<TechProps> = ({ data, index }) => {
  const inverted = index % 2 !== 0;
  
  // Styles
  const containerBg = inverted ? 'bg-[#fdfff9]/5 border-[#fdfff9]/10' : 'bg-[#282a1e]/5 border-[#282a1e]/10';
  const headerBg = inverted ? 'bg-[#fdfff9]/10 text-[#fdfff9]' : 'bg-[#282a1e] text-[#fdfff9]';
  const avatarBg = inverted ? 'bg-[#d3f54c] text-[#282a1e]' : 'bg-[#d3f54c] text-[#282a1e]';
  const itemBg = inverted ? 'bg-[#fdfff9]/10 border-[#fdfff9]/5' : 'bg-white border-[#282a1e]/5';
  const itemText = inverted ? 'text-[#fdfff9]' : 'text-[#282a1e]';

  return (
    <TechLayout data={data} index={index} icon={Database} idLabel="TWENTY CRM">
        <div className={`rounded-2xl border overflow-hidden ${containerBg}`}>
            <div className={`p-4 flex items-center justify-between ${headerBg}`}>
                <span className="font-bold text-sm tracking-wider">LEAD PROFILE</span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                    <div className="flex gap-4">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold ${avatarBg}`}>
                            SZ
                        </div>
                        <div>
                            <h4 className="font-bold text-xl">Shenzhen Electronics</h4>
                            <div className="flex items-center gap-1 text-sm opacity-60">
                                <MapPin size={12} />
                                <span>Guangdong, CN</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className={`text-3xl font-bold ${inverted ? 'text-[#d3f54c]' : 'text-[#282a1e]'}`}>85</div>
                        <div className="text-xs font-bold uppercase tracking-wider opacity-50">Lead Score</div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className={`flex items-center justify-between p-3 rounded-lg border ${itemBg} ${itemText}`}>
                        <div className="flex items-center gap-2 opacity-70">
                            <Phone size={16} />
                            <span className="text-sm font-medium">WhatsApp Valid</span>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#d3f54c] flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#282a1e] rounded-full"></div>
                        </div>
                    </div>
                    <div className={`flex items-center justify-between p-3 rounded-lg border ${itemBg} ${itemText}`}>
                        <div className="flex items-center gap-2 opacity-70">
                            <Tag size={16} />
                            <span className="text-sm font-medium">Catalog Vectorized</span>
                        </div>
                         <div className="w-4 h-4 rounded-full bg-[#d3f54c] flex items-center justify-center">
                            <div className="w-2 h-2 bg-[#282a1e] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </TechLayout>
  );
};
