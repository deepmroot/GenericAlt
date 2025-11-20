import React from 'react';
import { ArrowRight, ClipboardList, Sparkle } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Tell us what you need',
    body: 'Share target specs, unit volumes, and delivery windows so we tailor the sourcing plan.',
    badge: 'Discovery',
  },
  {
    id: '02',
    title: 'Factory shortlist & samples',
    body: 'We pre-vet suppliers, send samples, and align on compliance requirements early.',
    badge: 'Verification',
  },
  {
    id: '03',
    title: 'Ship, track, and deliver',
    body: 'Consolidate freight, manage customs, and keep every shipment on-time with live updates.',
    badge: 'In motion',
  },
];

export const StepsFlow: React.FC = () => {
  return (
    <section className="max-w-7xl w-full mx-auto px-8 py-24 space-y-14">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-xs uppercase tracking-widest text-[#d3f54c] bg-white/5">
            how we operate
          </div>
          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold text-[#fdfff9] tracking-tight leading-tight">
            Built for speed without <span className="serif-accent italic text-[#d3f54c]">losing control</span>.
          </h2>
        </div>
        <button className="px-8 py-4 rounded-full bg-[#d3f54c] text-[#282a1e] font-bold text-xl hover:bg-[#fdfff9] transition flex items-center gap-2">
          Start sourcing <Sparkle size={20} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-7">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-[#1a1c14] border border-white/10 rounded-[2.25rem] p-8 space-y-6 hover:border-[#d3f54c] transition w-full"
          >
            <div className="flex items-center justify-between">
              <div className="h-14 w-14 min-w-[3.5rem] rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/40 text-xl font-bold">
                {step.id}
              </div>
              <div className="px-4 py-1.5 rounded-full border border-[#d3f54c]/60 text-[#d3f54c] text-xs uppercase tracking-widest">
                {step.badge}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#fdfff9]">{step.title}</h3>
            <p className="text-lg text-[#d5e0bf] leading-relaxed">{step.body}</p>
            <button className="inline-flex items-center gap-2 text-[#d3f54c] font-semibold text-base">
              Continue <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-[#fdfff9] text-[#1a1c14] rounded-[2.25rem] border border-[#d3f54c]/40 p-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-[#282a1e] text-[#d3f54c] flex items-center justify-center">
            <ClipboardList size={18} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">For brands & operators</p>
            <p className="text-xl font-semibold">We prioritize revenue-generating teams moving physical goods.</p>
          </div>
        </div>
        <button className="px-6 py-3.5 rounded-full border border-[#1a1c14] text-[#1a1c14] font-semibold text-lg hover:border-[#d3f54c] hover:text-[#d3f54c] transition">
          Apply now
        </button>
      </div>
    </section>
  );
};

export default StepsFlow;
