
import React from 'react';
import { TECH_STACK } from '../constants';
import { Code, Server, Database, Search, Lock, Smartphone } from 'lucide-react';

export const Technology: React.FC = () => {
  // Helper to get icon based on id
  const getIcon = (id: string, index: number) => {
    if (id === 'workflows') return <Code size={32} />;
    if (id === 'crm') return <Database size={32} />;
    if (id === 'scraping') return <Search size={32} />;
    if (id === 'ai') return <Smartphone size={32} />;
    if (id === 'infra') return <Server size={32} />;
    if (id === 'governance') return <Lock size={32} />;
    return <Code size={32} />;
  };

  return (
    <section id="technology" className="py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-24">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#d3f54c] mb-8 bg-[#d3f54c] text-[#282a1e]">
                <Code size={24} strokeWidth={3} />
                <span className="text-base font-extrabold tracking-widest uppercase">
                  Proprietary Tech Stack
                </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-[#fdfff9]">
              Automation is <br/>
              <span className="serif-accent italic text-[#d3f54c]">our Product.</span>
            </h2>
            <p className="text-2xl text-[#fdfff9]/70 font-light max-w-3xl mx-auto">
                Generic Alternatives uses a complete internal tech stack that automates most of the sourcing pipeline. We don't just use software; we build the infrastructure.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TECH_STACK.map((tech, i) => {
                return (
                  <div key={tech.id} className="flex flex-col p-10 border-3 border-[#fdfff9]/10 rounded-[3rem] hover:border-[#d3f54c] transition-all duration-500 bg-[#fdfff9]/5 group hover:-translate-y-2 shadow-none backdrop-blur-sm">
                      <div className="flex justify-between items-start mb-8">
                          <div className="w-16 h-16 rounded-2xl bg-[#d3f54c]/10 flex items-center justify-center text-[#d3f54c] group-hover:bg-[#d3f54c] group-hover:text-[#282a1e] transition-colors">
                              {getIcon(tech.id, i)}
                          </div>
                          <div className="text-[#d3f54c] text-6xl font-serif italic font-bold opacity-20 group-hover:opacity-100 transition-opacity">
                              0{i + 1}
                          </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-8 text-[#fdfff9] group-hover:text-[#d3f54c] transition-colors">{tech.title}</h3>
                      
                      <div className="space-y-4 mt-auto">
                          {tech.items.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-4 text-lg text-[#fdfff9]/80 group-hover:text-white transition-colors">
                                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#d3f54c] shrink-0" />
                                  <span className="leading-snug">{item}</span>
                              </div>
                          ))}
                      </div>
                  </div>
                )
            })}
        </div>
      </div>
    </section>
  );
};
