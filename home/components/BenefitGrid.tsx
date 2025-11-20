import React from 'react';
import { ArrowRight, BookOpen, Factory, Send, ShieldCheck, Sparkles } from 'lucide-react';

const perks = [
  {
    title: 'Factory direct pricing',
    detail: 'Transparent quotes with negotiated rates and no hidden agent fees.',
  },
  {
    title: 'Dedicated sourcing team',
    detail: 'On-ground specialists coordinate samples, QC, and freight hand-offs.',
  },
  {
    title: 'Quality locked in',
    detail: 'Documented inspections and compliance so you can ship with confidence.',
  },
  {
    title: 'Market intelligence',
    detail: 'Live insights on demand curves and commodity shifts for better timing.',
  },
];

export const BenefitGrid: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-widest text-[#d3f54c]">
            sourcing benefits
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#fdfff9] tracking-tight leading-tight">
            Sourced with care, <span className="serif-accent italic text-[#d3f54c]">delivered with precision</span>.
          </h2>
        </div>
        <button className="px-7 py-3.5 rounded-full bg-[#d3f54c] text-[#282a1e] font-bold text-lg hover:bg-[#fdfff9] transition flex items-center gap-2">
          View sourcing playbook <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {perks.map((perk) => (
          <div
            key={perk.title}
            className="bg-[#1a1c14] border border-white/10 rounded-[2rem] p-7 space-y-4 hover:border-[#d3f54c] transition"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/40">
                <Sparkles size={18} />
              </div>
              <h3 className="text-lg font-bold text-[#fdfff9]">{perk.title}</h3>
            </div>
            <p className="text-base text-[#d5e0bf] leading-relaxed">{perk.detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#fdfff9] text-[#1a1c14] rounded-[2rem] border border-[#d3f54c]/40 p-7 grid sm:grid-cols-3 gap-4 shadow-sharp-white">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#282a1e] text-[#d3f54c] flex items-center justify-center">
            <Factory size={20} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Factories</p>
            <p className="text-lg font-semibold">Verified, audited partners</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#282a1e] text-[#d3f54c] flex items-center justify-center">
            <BookOpen size={20} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Playbook</p>
            <p className="text-lg font-semibold">Transparent process</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#282a1e] text-[#d3f54c] flex items-center justify-center">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Protection</p>
            <p className="text-lg font-semibold">International support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitGrid;
