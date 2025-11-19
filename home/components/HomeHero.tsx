import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Wallet2, Zap } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-[#1a1c14] border border-white/10 rounded-b-[3.5rem] pb-16">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(#d3f54c 2px, transparent 2px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 space-y-10">
        <div className="flex items-center justify-between gap-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-[#d3f54c] text-[#282a1e] font-extrabold flex items-center justify-center shadow-sharp-accent">
              GA
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#d3f54c]">Generic Alternatives</p>
              <p className="text-lg font-semibold text-[#fdfff9] leading-tight">Railway-native money movement</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm font-semibold text-[#fdfff9]">
            <button className="px-5 py-2 rounded-full border border-white/20 hover:border-[#d3f54c] transition flex items-center gap-2">
              Security
              <ShieldCheck size={16} />
            </button>
            <button className="px-5 py-2 rounded-full border border-white/20 hover:border-[#d3f54c] transition flex items-center gap-2">
              Pricing
              <Sparkles size={16} />
            </button>
            <button className="px-5 py-2 rounded-full border border-white/20 hover:border-[#d3f54c] transition flex items-center gap-2">
              Support
              <Zap size={16} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-full border border-[#fdfff9] text-sm font-semibold hover:bg-[#fdfff9] hover:text-[#282a1e] transition">
              Log in
            </button>
            <button className="px-4 py-2 rounded-full bg-[#d3f54c] text-[#282a1e] text-sm font-bold hover:bg-[#fdfff9] transition flex items-center gap-2">
              Join waitlist
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d3f54c] text-[#d3f54c] uppercase tracking-widest text-xs">
              industrial money movement
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#fdfff9]">
              Modern payments, <span className="serif-accent italic text-[#d3f54c]">fast rails</span>, and stress-free controls.
            </h1>
            <p className="text-lg text-[#d5e0bf] max-w-xl">
              Move payroll, vendor payouts, and customer funds with sub-second confirmations. Built for operators who need
              absolute visibility without sacrificing velocity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-full bg-[#d3f54c] text-[#282a1e] font-bold hover:bg-[#fdfff9] transition flex items-center gap-2">
                Get started <ArrowRight size={18} />
              </button>
              <button className="px-6 py-3 rounded-full border border-white/20 text-[#fdfff9] font-semibold hover:border-[#d3f54c] transition flex items-center gap-2">
                See how it works <Wallet2 size={18} />
              </button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-[#d5e0bf]">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#d3f54c]"></span>
                Visa Direct settlement <span className="text-[#fdfff9] font-semibold">under 3 seconds</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#d3f54c]"></span>
                Out-of-network fees reimbursed
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-[#d3f54c]/20 blur-3xl rounded-full" />
            <div className="relative bg-[#fdfff9] text-[#1a1c14] rounded-[2rem] p-6 shadow-sharp-white border border-[#d3f54c]/40 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Operating balance</p>
                  <p className="text-3xl font-bold">$245,600.24</p>
                </div>
                <div className="px-4 py-2 rounded-full bg-[#282a1e] text-[#d3f54c] font-semibold flex items-center gap-2">
                  <Zap size={16} /> Instant ready
                </div>
              </div>
              <div className="bg-[#1a1c14] text-[#fdfff9] rounded-[1.5rem] p-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Payroll Express</span>
                  <span className="text-[#d3f54c] font-semibold">$48,200</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>International Trade Desk</span>
                  <span className="text-[#d3f54c] font-semibold">$16,400</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Embedded payouts</span>
                  <span className="text-[#d3f54c] font-semibold">$9,950</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm font-semibold text-[#1a1c14]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#282a1e]" />
                  Adaptive 2FA enforced
                </div>
                <button className="inline-flex items-center gap-2 text-[#282a1e] hover:text-[#d3f54c]">
                  Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
