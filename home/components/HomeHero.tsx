import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Warehouse, Zap } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-[#1a1c14] border border-white/10 rounded-b-[3.5rem] pb-24">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(#d3f54c 2px, transparent 2px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-8 pt-16 space-y-14">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#d3f54c] text-[#d3f54c] uppercase tracking-widest text-sm bg-[#d3f54c]/5">
          sourcing & distribution
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center w-full">
          <div className="space-y-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] text-[#fdfff9] tracking-tight">
              Source smarter. Ship faster. <span className="serif-accent italic text-[#d3f54c]">Earn more</span> on every order.
            </h1>
            <p className="text-2xl text-[#d5e0bf] max-w-4xl leading-relaxed">
              We are your one-stop partner for factory-direct sourcing, quality enforcement, and efficient global distribution.
              Cut out middlemen, protect your margins, and ship products your customers trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-[#d3f54c] text-[#282a1e] font-bold text-xl hover:bg-[#fdfff9] transition flex items-center gap-2">
                Start a project <ArrowRight size={22} />
              </button>
              <button className="px-8 py-4 rounded-full border border-white/20 text-[#fdfff9] font-semibold text-xl hover:border-[#d3f54c] transition flex items-center gap-2">
                Explore solutions <Truck size={22} />
              </button>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 text-base text-[#d5e0bf] w-full">
              {[{ label: 'Verified factories', value: '250+', icon: ShieldCheck }, { label: 'Average landed savings', value: '18%', icon: Warehouse }, { label: 'On-time deliveries', value: '98.6%', icon: Zap }].map(({ label, value, icon: Icon }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-[1.75rem] px-5 py-4 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/40">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#fdfff9]">{value}</p>
                    <p className="text-xs uppercase tracking-widest">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute -inset-8 bg-[#d3f54c]/20 blur-3xl rounded-full" />
            <div className="relative bg-[#fdfff9] text-[#1a1c14] rounded-[3rem] p-9 shadow-sharp-white border border-[#d3f54c]/40 space-y-6 w-full">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Live sourcing window</p>
                  <p className="text-3xl md:text-4xl font-bold leading-tight">"Innovative Solutions for Global Distribution"</p>
                </div>
                <div className="px-4 py-2 rounded-full bg-[#282a1e] text-[#d3f54c] font-semibold flex items-center gap-2 text-sm">
                  <Truck size={18} /> In motion
                </div>
              </div>
              <div className="grid gap-3 bg-[#1a1c14] text-[#fdfff9] rounded-[1.75rem] p-5">
                {[
                  { title: 'Factory Direct Partnerships', value: 'Negotiated' },
                  { title: 'Streamlined Logistics', value: 'Optimized lanes' },
                  { title: 'Quality Assurance', value: 'Pre-shipment QC' },
                  { title: 'Market Intelligence', value: 'Real-time' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between text-base">
                    <span>{item.title}</span>
                    <span className="text-[#d3f54c] font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-base font-semibold text-[#1a1c14]">
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
