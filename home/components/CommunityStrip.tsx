import React from 'react';
import { ArrowRight, Globe2, MapPin, Users2 } from 'lucide-react';

export const CommunityStrip: React.FC = () => {
  return (
    <section className="max-w-7xl w-full mx-auto px-8 py-16">
      <div className="bg-[#1a1c14] border border-white/10 rounded-[2.25rem] p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full">
        <div className="flex items-center gap-3 text-base text-[#d5e0bf] flex-wrap">
          <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#d3f54c]/60 text-[#d3f54c] uppercase tracking-widest text-xs bg-white/5">
            Connect with global partners
          </div>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest">
            <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-[#fdfff9] flex items-center gap-2">
              <Globe2 size={14} /> US & EU buyers
            </span>
            <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-[#fdfff9] flex items-center gap-2">
              <MapPin size={14} /> Asia factories
            </span>
            <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-[#fdfff9] flex items-center gap-2">
              <Users2 size={14} /> Logistics crew
            </span>
          </div>
        </div>
        <button className="inline-flex items-center gap-2 text-[#d3f54c] font-semibold text-xl">
          Join our network <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default CommunityStrip;
