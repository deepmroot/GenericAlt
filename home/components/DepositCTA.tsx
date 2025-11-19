import React from 'react';
import { ArrowRight, CreditCard, Globe2, Plane, Wallet } from 'lucide-react';

export const DepositCTA: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
      <div className="bg-[#1a1c14] border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/40">
            <Wallet size={22} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#d3f54c]">move money</p>
            <h3 className="text-2xl font-bold text-[#fdfff9]">Set up a direct deposit.</h3>
          </div>
        </div>
        <p className="text-[#d5e0bf] max-w-2xl leading-relaxed">
          Connect external accounts, route payroll, and trigger payouts from one industrial-grade console. Spend controls stay on,
          even when the funds move fast.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-4 space-y-2">
            <p className="text-sm text-[#d5e0bf]">Connect</p>
            <p className="text-xl font-semibold text-[#fdfff9]">Your bank • Brokerage • Others</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-4 space-y-2">
            <p className="text-sm text-[#d5e0bf]">Earn</p>
            <p className="text-xl font-semibold text-[#fdfff9]">5.15% APY savings ready</p>
          </div>
        </div>
        <button className="self-start px-6 py-3 rounded-full bg-[#d3f54c] text-[#282a1e] font-bold hover:bg-[#fdfff9] transition flex items-center gap-2">
          Set it up <ArrowRight size={18} />
        </button>
      </div>

      <div className="bg-[#fdfff9] text-[#1a1c14] rounded-[2.5rem] border border-[#d3f54c]/40 p-8 space-y-5 shadow-sharp-white">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#282a1e] text-[#d3f54c] flex items-center justify-center">
            <CreditCard size={22} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Transfers & cards</p>
            <h3 className="text-xl font-bold">Spend controls stay on.</h3>
          </div>
        </div>
        <ul className="space-y-3 text-sm text-[#1a1c14]">
          {[`Tap to pay, online, in store, or abroad.`, `Earn up to 5.15% on savings & certificates.`, `Move money across accounts for free.`].map((item) => (
            <li key={item} className="flex items-start gap-3 bg-[#1a1c14] text-[#fdfff9] rounded-[1.5rem] px-4 py-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d3f54c]"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="grid sm:grid-cols-3 gap-3 text-xs text-[#6b6f5c]">
          <div className="bg-[#282a1e] text-[#d3f54c] rounded-[1.25rem] p-4 flex flex-col gap-2">
            <Globe2 size={18} />
            <span className="text-[#fdfff9] font-semibold">All your cards</span>
            <span>Connected & synced</span>
          </div>
          <div className="bg-[#282a1e] text-[#d3f54c] rounded-[1.25rem] p-4 flex flex-col gap-2">
            <Plane size={18} />
            <span className="text-[#fdfff9] font-semibold">Travel ready</span>
            <span>International support</span>
          </div>
          <div className="bg-[#282a1e] text-[#d3f54c] rounded-[1.25rem] p-4 flex flex-col gap-2">
            <ArrowRight size={18} />
            <span className="text-[#fdfff9] font-semibold">Instant access</span>
            <span>Issue and pause in seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepositCTA;
