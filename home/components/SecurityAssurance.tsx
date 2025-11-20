import React from 'react';
import { ArrowRight, BadgeCheck, ClipboardCheck, PackageCheck, Radar, Shield } from 'lucide-react';

export const SecurityAssurance: React.FC = () => {
  return (
    <section className="max-w-7xl w-full mx-auto px-8 py-24">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div className="bg-[#1a1c14] border border-white/10 rounded-[2.75rem] p-10 space-y-8 shadow-sharp">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/50">
              <Radar size={24} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-[#d3f54c]">Security first</p>
              <h3 className="text-4xl md:text-5xl font-bold text-[#fdfff9] tracking-tight">Quality & compliance on every lane.</h3>
            </div>
          </div>
          <p className="text-[#d5e0bf] leading-relaxed text-xl">
            Factory audits, product inspections, and shipment seals ensure you get exactly what you approved. Every step is
            documented so you can show customers the rigor behind the work.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[`Pre-shipment inspection photos`, `Compliance paperwork handled`, `Escrow-style supplier releases`, `Continuous shipment tracking`].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-[1.75rem] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d3f54c]"></span>
                <p className="text-base text-[#fdfff9]">{item}</p>
              </div>
            ))}
          </div>
          <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#d3f54c] text-[#d3f54c] font-semibold text-lg hover:bg-[#d3f54c] hover:text-[#282a1e] transition">
            View QC checklist <ArrowRight size={18} />
          </button>
        </div>

        <div className="bg-[#fdfff9] text-[#1a1c14] rounded-[2.75rem] p-9 border border-[#d3f54c]/30 shadow-sharp-white space-y-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-[#282a1e] text-[#d3f54c] flex items-center justify-center">
              <BadgeCheck size={22} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Access controls</p>
              <h3 className="text-3xl font-bold tracking-tight">Trusted handling, transparent proof.</h3>
            </div>
          </div>
          <div className="space-y-4 text-lg text-[#1a1c14]">
            <div className="flex items-center gap-3 bg-[#1a1c14] text-[#fdfff9] rounded-[1.5rem] px-4 py-3">
              <ClipboardCheck size={18} />
              <div>
                <p className="font-semibold">Quality gates you can share</p>
                <p className="text-[#d3f54c]">Stamped reports, photos, and remediation steps.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#1a1c14] text-[#fdfff9] rounded-[1.5rem] px-4 py-3">
              <PackageCheck size={18} />
              <div>
                <p className="font-semibold">Lot-level traceability</p>
                <p className="text-[#d3f54c]">From factory floor to final mile, every handoff is logged.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#1a1c14] text-[#fdfff9] rounded-[1.5rem] px-4 py-3">
              <Shield size={18} />
              <div>
                <p className="font-semibold">Secure payments to factories</p>
                <p className="text-[#d3f54c]">Structured releases when milestones are met.</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#6b6f5c]">Audits and QC are included—not an upsell. That is how we keep your customers coming back.</p>
        </div>
      </div>
    </section>
  );
};

export default SecurityAssurance;
