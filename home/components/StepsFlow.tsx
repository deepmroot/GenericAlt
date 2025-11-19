import React from 'react';
import { ArrowRight, Sparkle, UsersRound } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Join the waitlist',
    body: 'We welcome teams shipping real value. Get early access for modern money movement.',
    badge: 'Beta ready',
  },
  {
    id: '02',
    title: 'Small, short onboarding',
    body: 'Complete verification, connect your accounts, and set controls in minutes.',
    badge: 'Concierge support',
  },
  {
    id: '03',
    title: 'Use Fast Funds',
    body: 'Send, receive, and settle instantly with zero-fee internal transfers.',
    badge: 'Live monitoring',
  },
];

export const StepsFlow: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-widest text-[#d3f54c]">
            onboarding
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#fdfff9] tracking-tight">
            Get started in <span className="serif-accent italic text-[#d3f54c]">seconds</span>.
          </h2>
        </div>
        <button className="px-5 py-3 rounded-full bg-[#d3f54c] text-[#282a1e] font-bold hover:bg-[#fdfff9] transition flex items-center gap-2">
          Waitlist me <Sparkle size={18} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-[#1a1c14] border border-white/10 rounded-[2rem] p-6 space-y-4 hover:border-[#d3f54c] transition"
          >
            <div className="flex items-center justify-between">
              <div className="h-12 w-12 rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/40 text-lg font-bold">
                {step.id}
              </div>
              <div className="px-3 py-1 rounded-full border border-[#d3f54c]/60 text-[#d3f54c] text-xs uppercase tracking-widest">
                {step.badge}
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#fdfff9]">{step.title}</h3>
            <p className="text-sm text-[#d5e0bf] leading-relaxed">{step.body}</p>
            <button className="inline-flex items-center gap-2 text-[#d3f54c] font-semibold">
              Continue <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-[#fdfff9] text-[#1a1c14] rounded-[2rem] border border-[#d3f54c]/40 p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-[#282a1e] text-[#d3f54c] flex items-center justify-center">
            <UsersRound size={18} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">For teams big and small</p>
            <p className="text-lg font-semibold">Revenue-generating businesses get priority access.</p>
          </div>
        </div>
        <button className="px-5 py-3 rounded-full border border-[#1a1c14] text-[#1a1c14] font-semibold hover:border-[#d3f54c] hover:text-[#d3f54c] transition">
          Apply now
        </button>
      </div>
    </section>
  );
};

export default StepsFlow;
