import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Warehouse, Zap } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-[#1a1c14] border border-white/10 rounded-b-[3.5rem] pb-20">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(#d3f54c 2px, transparent 2px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 space-y-12">
        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#d3f54c] text-[#d3f54c] uppercase tracking-widest text-xs">
          sourcing & distribution
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#fdfff9] tracking-tight">
              Source smarter. Ship faster. <span className="serif-accent italic text-[#d3f54c]">Earn more</span> on every order.
            </h1>
            <p className="text-xl text-[#d5e0bf] max-w-3xl leading-relaxed">
              We are your one-stop partner for factory-direct sourcing, quality enforcement, and efficient global distribution.
              Cut out middlemen, protect your margins, and ship products your customers trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-7 py-3.5 rounded-full bg-[#d3f54c] text-[#282a1e] font-bold text-lg hover:bg-[#fdfff9] transition flex items-center gap-2">
                Start a project <ArrowRight size={20} />
              </button>
              <button className="px-7 py-3.5 rounded-full border border-white/20 text-[#fdfff9] font-semibold text-lg hover:border-[#d3f54c] transition flex items-center gap-2">
                Explore solutions <Truck size={20} />
              </button>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 text-sm text-[#d5e0bf]">
              {[{ label: 'Verified factories', value: '250+', icon: ShieldCheck }, { label: 'Average landed savings', value: '18%', icon: Warehouse }, { label: 'On-time deliveries', value: '98.6%', icon: Zap }].map(({ label, value, icon: Icon }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-[1.5rem] px-4 py-3 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/40">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#fdfff9]">{value}</p>
                    <p className="text-[13px] uppercase tracking-widest">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-[#d3f54c]/20 blur-3xl rounded-full" />
            <div className="relative bg-[#fdfff9] text-[#1a1c14] rounded-[2.5rem] p-7 shadow-sharp-white border border-[#d3f54c]/40 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Live sourcing window</p>
                  <p className="text-3xl font-bold">"Innovative Solutions for Global Distribution"</p>
                </div>
                <div className="px-4 py-2 rounded-full bg-[#282a1e] text-[#d3f54c] font-semibold flex items-center gap-2">
                  <Truck size={16} /> In motion
                </div>
              </div>
              <div className="grid gap-3 bg-[#1a1c14] text-[#fdfff9] rounded-[1.75rem] p-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Factory Direct Partnerships</span>
                  <span className="text-[#d3f54c] font-semibold">Negotiated</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Streamlined Logistics</span>
                  <span className="text-[#d3f54c] font-semibold">Optimized lanes</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Quality Assurance</span>
                  <span className="text-[#d3f54c] font-semibold">Pre-shipment QC</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Market Intelligence</span>
                  <span className="text-[#d3f54c] font-semibold">Real-time</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm font-semibold text-[#1a1c14]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#282a1e]" />
                  Verified compliance & escrow
                </div>
                <button className="inline-flex items-center gap-2 text-[#282a1e] hover:text-[#d3f54c]">
                  View playbook <ArrowRight size={16} />
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
