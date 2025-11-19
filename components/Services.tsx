
import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section className="py-32 bg-[#fdfff9] rounded-t-[4rem] relative z-10 mt-[-2rem]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
            <div>
                <h2 className="text-7xl font-bold mb-6 text-[#282a1e]">What We Do</h2>
                <p className="text-2xl text-[#282a1e]/70 font-light max-w-xl">
                    We replace the manual sourcing agent with transparency, code, and speed.
                </p>
            </div>
            <div className="h-px flex-1 bg-[#282a1e]/10 mx-12 hidden md:block" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
            {SERVICES.map((service, idx) => (
                <div key={idx} className="group p-10 rounded-[3rem] border-3 border-[#282a1e]/5 bg-[#282a1e] hover:bg-[#d3f54c] hover:border-[#d3f54c] hover:scale-[1.02] transition-all duration-500">
                    <div className="w-20 h-20 bg-[#d3f54c] rounded-full flex items-center justify-center mb-8 text-[#282a1e] group-hover:bg-[#282a1e] group-hover:text-[#d3f54c] transition-colors">
                        <service.icon size={36} strokeWidth={2} />
                    </div>
                    <h3 className="text-4xl font-bold mb-6 text-[#fdfff9] group-hover:text-[#282a1e] transition-colors">{service.title}</h3>
                    <p className="text-xl text-[#fdfff9]/70 leading-relaxed group-hover:text-[#282a1e]/80 transition-colors font-medium">
                        {service.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
