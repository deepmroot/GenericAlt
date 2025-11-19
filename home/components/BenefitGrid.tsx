import React from 'react';
import { ArrowRight, Coins, Send, ShieldCheck, Sparkles } from 'lucide-react';

const perks = [
  {
    title: 'Out of network ATM fees reimbursed',
    detail: '$120/month (~$1,440/year) max reimbursement.',
  },
  {
    title: 'Unlimited free transfers',
    detail: 'Initiate standard, instant, and internal transfers with no per-transfer fees.',
  },
  {
    title: 'Up to 5.15% APY on savings',
    detail: 'Earn yield without locking down visibility or controls.',
  },
  {
    title: 'Transparent earnings',
    detail: 'No monthly fees, ever. See revenue-impact metrics in real time.',
  },
];

export const BenefitGrid: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-widest text-[#d3f54c]">
            rewards & controls
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#fdfff9] tracking-tight">
            Why Generic Alternatives is the <span className="serif-accent italic text-[#d3f54c]">fastest</span> way to move.
          </h2>
        </div>
        <button className="px-5 py-3 rounded-full bg-[#d3f54c] text-[#282a1e] font-bold hover:bg-[#fdfff9] transition flex items-center gap-2">
          Compare plans <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {perks.map((perk) => (
          <div
            key={perk.title}
            className="bg-[#1a1c14] border border-white/10 rounded-[2rem] p-6 space-y-3 hover:border-[#d3f54c] transition"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/40">
                <Sparkles size={18} />
              </div>
              <h3 className="text-lg font-bold text-[#fdfff9]">{perk.title}</h3>
            </div>
            <p className="text-sm text-[#d5e0bf]">{perk.detail}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#fdfff9] text-[#1a1c14] rounded-[2rem] border border-[#d3f54c]/40 p-6 grid sm:grid-cols-3 gap-4 shadow-sharp-white">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#282a1e] text-[#d3f54c] flex items-center justify-center">
            <Send size={20} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Fast transfers</p>
            <p className="text-lg font-semibold">In store, online, abroad</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#282a1e] text-[#d3f54c] flex items-center justify-center">
            <Coins size={20} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Cash access</p>
            <p className="text-lg font-semibold">24/7 card controls</p>
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
