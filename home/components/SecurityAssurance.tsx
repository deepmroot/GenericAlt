import React from 'react';
import { ArrowRight, BadgeCheck, Fingerprint, Lock, Radar, Smartphone } from 'lucide-react';

export const SecurityAssurance: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
        <div className="bg-[#1a1c14] border border-white/10 rounded-[2.5rem] p-8 space-y-6 shadow-sharp">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/50">
              <Radar size={22} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#d3f54c]">Security first</p>
              <h3 className="text-2xl font-bold text-[#fdfff9]">Security is not an add-on.</h3>
            </div>
          </div>
          <p className="text-[#d5e0bf] leading-relaxed">
            Purpose-built for sensitive money movement. Adaptive identity checks, per-action approvals, and live risk scoring
            keep your payments resilient while teams move quickly.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[`Adaptive login risk`, `Dynamic spending controls`, `Real-time balance protection`, `Continuous monitoring`].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-[1.5rem] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d3f54c]"></span>
                <p className="text-sm text-[#fdfff9]">{item}</p>
              </div>
            ))}
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#d3f54c] text-[#d3f54c] font-semibold hover:bg-[#d3f54c] hover:text-[#282a1e] transition">
            Learn more <ArrowRight size={16} />
          </button>
        </div>

        <div className="bg-[#fdfff9] text-[#1a1c14] rounded-[2.5rem] p-8 border border-[#d3f54c]/30 shadow-sharp-white space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-[#282a1e] text-[#d3f54c] flex items-center justify-center">
              <BadgeCheck size={22} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Access controls</p>
              <h3 className="text-xl font-bold">Frictionless by default</h3>
            </div>
          </div>
          <div className="space-y-4 text-sm text-[#1a1c14]">
            <div className="flex items-center gap-3 bg-[#1a1c14] text-[#fdfff9] rounded-[1.5rem] px-4 py-3">
              <Fingerprint size={18} />
              <div>
                <p className="font-semibold">Zero password login</p>
                <p className="text-[#d3f54c]">Biometric or passkey on every session.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#1a1c14] text-[#fdfff9] rounded-[1.5rem] px-4 py-3">
              <Smartphone size={18} />
              <div>
                <p className="font-semibold">2FA on all transactions</p>
                <p className="text-[#d3f54c]">Spend controls and out-of-network protection.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#1a1c14] text-[#fdfff9] rounded-[1.5rem] px-4 py-3">
              <Lock size={18} />
              <div>
                <p className="font-semibold">Shared controls, no shared passwords</p>
                <p className="text-[#d3f54c]">Allocate access levels for finance and operations.</p>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#6b6f5c]">90% of payments settle in seconds. The rest route through resilient fallbacks.</p>
        </div>
      </div>
    </section>
  );
};

export default SecurityAssurance;
