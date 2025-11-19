
import React from 'react';
import { Check } from 'lucide-react';
import { TechStackCategory } from '../../types';

interface TechLayoutProps {
  data: TechStackCategory;
  index: number;
  icon: React.ElementType;
  children: React.ReactNode;
  idLabel: string;
}

export const TechLayout: React.FC<TechLayoutProps> = ({ data, index, icon: Icon, children, idLabel }) => {
  const isEven = index % 2 === 0;
  // Even = Dark Background (#282a1e), Light Card
  // Odd = Light Background (#fdfff9), Dark Card
  
  const words = data.title.split(' ');
  const lastWord = words.pop();
  const firstWords = words.join(' ');

  // Section styling
  const sectionBg = isEven ? 'bg-[#282a1e]' : 'bg-[#fdfff9]';
  const sectionText = isEven ? 'text-[#fdfff9]' : 'text-[#282a1e]';
  const patternColor = isEven ? '#d3f54c' : '#282a1e';
  const bgLabelColor = isEven ? 'text-[#fdfff9]' : 'text-[#282a1e]';

  // Card styling
  const cardBg = isEven ? 'bg-[#fdfff9]' : 'bg-[#1a1c14]';
  const cardText = isEven ? 'text-[#282a1e]' : 'text-[#fdfff9]';
  const cardBorder = isEven ? 'border-transparent' : 'border-[#d3f54c]/30';

  // Icon in card header
  const iconBg = isEven ? 'bg-[#282a1e]' : 'bg-[#d3f54c]';
  const iconColor = isEven ? 'text-[#d3f54c]' : 'text-[#282a1e]';

  // Content styling
  const textMuted = isEven ? 'text-[#fdfff9]/70' : 'text-[#282a1e]/70';
  
  // Checkmark styling
  const checkBg = isEven ? 'bg-[#d3f54c]/10' : 'bg-[#282a1e]/5';
  const checkIconColor = isEven ? 'text-[#d3f54c]' : 'text-[#282a1e]';

  // Alternating rotation for the highlighted word
  const rotationClass = isEven ? '-rotate-2' : 'rotate-2';

  return (
    <section className={`py-24 relative overflow-hidden ${sectionBg} ${sectionText}`}>
       
       {/* Grid Background Pattern */}
       <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
          backgroundImage: `radial-gradient(${patternColor} 1.5px, transparent 1.5px)`, 
          backgroundSize: '32px 32px' 
       }}></div>

       {/* Background Text Label */}
       <div className={`absolute top-1/2 -translate-y-1/2 ${!isEven ? 'left-0' : 'right-0'} text-[10vw] font-black uppercase leading-none pointer-events-none whitespace-nowrap opacity-[0.03] select-none ${bgLabelColor}`}>
          {idLabel}
       </div>

       <div className="container mx-auto px-6 relative z-10">
         <div className={`grid lg:grid-cols-2 gap-12 md:gap-24 items-center ${!isEven ? '' : 'lg:grid-flow-dense'}`}>
             
             {/* Text Section */}
             <div className={`${!isEven ? '' : 'lg:col-start-2'}`}>
                <h3 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight ${sectionText}`}>
                    {firstWords} <br/>
                    <span className={`serif-accent italic text-[#282a1e] bg-[#d3f54c] px-8 py-2 rounded-[2rem] inline-block transform ${rotationClass} mt-2`}>
                        {lastWord}.
                    </span>
                </h3>
                
                <div className={`space-y-8 text-xl md:text-2xl font-light leading-relaxed mb-10 ${textMuted}`}>
                    <p>
                        Core component <strong className="text-[#d3f54c]">0{index + 1}</strong> of the automated pipeline. This subsystem handles the specific deterministic logic required to manage <strong className={isEven ? 'text-[#fdfff9]' : 'text-[#282a1e]'}>{data.title}</strong> at scale.
                    </p>
                </div>

                <div className="space-y-6">
                    {data.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-6 group">
                            <div className={`mt-2 w-6 h-6 rounded-full shrink-0 flex items-center justify-center transition-all border border-[#d3f54c] ${checkBg} group-hover:bg-[#d3f54c]`}>
                                <Check size={14} className={`${checkIconColor} transition-colors group-hover:text-[#282a1e]`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className={`font-medium text-xl md:text-2xl block leading-tight ${sectionText} opacity-90 break-words`}>{item}</span>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             {/* Graphic Section */}
             <div className={`flex flex-col justify-center ${!isEven ? '' : 'lg:col-start-1'}`}>
                <div className={`${cardBg} ${cardText} ${cardBorder} rounded-[2.5rem] p-8 transform hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden`}>
                   
                   {/* Card Header */}
                   <div className={`flex items-center justify-between mb-8 border-b-2 pb-6 ${isEven ? 'border-[#282a1e]/10' : 'border-[#fdfff9]/10'}`}>
                      <div className="flex items-center gap-3">
                          <div className={`${iconBg} p-2 rounded-full ${iconColor}`}>
                              <Icon size={24} />
                          </div>
                          <span className="font-bold uppercase tracking-widest text-sm opacity-80">System Manifest</span>
                      </div>
                      <div className={`${isEven ? 'bg-[#282a1e]/5' : 'bg-[#fdfff9]/10'} px-3 py-1 rounded-lg`}>
                          <div className="font-mono font-bold opacity-40 text-xs">v2.{index + 1}.0</div>
                      </div>
                   </div>

                   {/* The Unique Graphic Component */}
                   {children}

                   {/* Status Footer */}
                   <div className={`mt-8 rounded-xl p-6 border flex justify-between items-center ${isEven ? 'bg-[#282a1e]/5 border-[#282a1e]/10' : 'bg-[#fdfff9]/5 border-[#fdfff9]/10'}`}>
                      <span className="font-bold text-sm opacity-50 uppercase tracking-wider">Status</span>
                      <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#d3f54c] rounded-full animate-pulse"></div>
                          <span className={`font-bold text-xs uppercase tracking-widest ${isEven ? 'text-[#282a1e]' : 'text-[#fdfff9]'}`}>
                              Online
                          </span>
                      </div>
                  </div>
                </div>
             </div>
         </div>
       </div>
    </section>
  );
};
