
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TRACTION_DATA, TRACTION_REGIONS } from '../constants';
import { MapPin, TrendingUp, Globe } from 'lucide-react';

export const Traction: React.FC = () => {
  return (
    <section id="traction" className="py-32 relative bg-[#23251a] rounded-t-[4rem] mt-[-4rem] border-t-4 border-[#d3f54c]">
      
      {/* Dot Grid Background Pattern - Faint */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#d3f54c 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Column: Chart & Data */}
          <div className="lg:w-1/2">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-[#d3f54c] rounded-2xl flex items-center justify-center text-[#282a1e]">
                   <TrendingUp size={32} strokeWidth={2.5} />
                </div>
                <h2 className="text-6xl font-bold text-[#fdfff9]">Current <span className="serif-accent italic text-[#d3f54c]">Traction</span></h2>
             </div>
             
             <p className="text-[#fdfff9]/80 mb-12 text-2xl font-light leading-relaxed">
                We are expanding aggressively using extremely low overheads because automation replaces dozens of manual steps.
             </p>

             <div className="h-[500px] w-full mb-8 bg-[#282a1e] border-3 border-[#d3f54c]/30 rounded-[2.5rem] p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#d3f54c] text-[#282a1e] px-6 py-2 rounded-bl-2xl font-bold text-lg z-10">
                  Revenue Pipeline
                </div>
                {TRACTION_DATA.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-[#fdfff9]/70 text-2xl font-medium">
                    No revenue data available yet.
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={TRACTION_DATA} margin={{ top: 40, right: 10, left: 30, bottom: 30 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#d3f54c" opacity={0.1} vertical={false} />
                      <XAxis 
                          dataKey="name" 
                          stroke="#fdfff9" 
                          tick={{ fill: '#fdfff9', fontSize: 16, fontWeight: 600 }} 
                          axisLine={false}
                          tickLine={false}
                          dy={20}
                      />
                      <YAxis 
                          stroke="#fdfff9" 
                          tick={{ fill: '#fdfff9', fontSize: 16, fontWeight: 600 }} 
                          axisLine={false}
                          tickLine={false}
                          tickFormatter={(value) => `$${value}`}
                          dx={-10}
                          width={60}
                      />
                      <Tooltip 
                          cursor={{fill: '#d3f54c', opacity: 0.1}}
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-[#282a1e] border-2 border-[#d3f54c] p-4 rounded-xl">
                                  <p className="text-[#d3f54c] font-bold text-lg">{payload[0].payload.name}</p>
                                  <p className="text-white text-2xl font-serif">${payload[0].value}</p>
                                  <p className="text-gray-400 text-sm">{payload[0].payload.label}</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                      />
                      <Bar dataKey="value" radius={[16, 16, 0, 0]} animationDuration={1500}>
                          {TRACTION_DATA.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill="#d3f54c" fillOpacity={index === 2 ? 0.6 : 1} stroke="#d3f54c" strokeWidth={2} />
                          ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                )}
             </div>
          </div>

          {/* Right Column: Map Representation */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="bg-[#fdfff9] rounded-[3rem] p-10 text-[#282a1e] relative">
                <div className="absolute -top-6 -right-6 bg-[#282a1e] text-[#d3f54c] w-24 h-24 rounded-full flex items-center justify-center border-4 border-[#d3f54c] z-20 animate-bounce-slow">
                    <Globe size={40} />
                </div>
                
                <h3 className="text-4xl font-bold mb-8 border-b-4 border-[#282a1e]/10 pb-6">Active Regions</h3>
                
                <div className="grid grid-cols-1 gap-4 relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-[42px] top-4 bottom-4 w-1 bg-[#282a1e]/10 rounded-full"></div>
                    
                    {TRACTION_REGIONS.map((region, i) => (
                        <div key={i} className="flex items-center gap-6 p-5 rounded-[2rem] bg-[#282a1e]/5 hover:bg-[#d3f54c] transition-all duration-300 group relative z-10 cursor-default">
                            <div className="bg-[#282a1e] w-12 h-12 rounded-full flex items-center justify-center text-[#d3f54c] shrink-0 group-hover:scale-110 transition-transform border-2 border-transparent group-hover:border-[#282a1e]">
                                <MapPin size={24} />
                            </div>
                            <span className="text-2xl font-bold group-hover:text-[#282a1e]">{region}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-10 p-8 border-3 border-[#282a1e] rounded-[2rem] bg-[#d3f54c]/20">
                    <p className="font-bold text-[#282a1e] text-xl mb-2 uppercase tracking-widest">Strategic Edge</p>
                    <p className="text-lg font-medium leading-snug">
                        Operating with almost <span className="bg-[#282a1e] text-[#d3f54c] px-2 py-0.5 rounded-md">zero staff</span> while outperforming traditional agents.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
