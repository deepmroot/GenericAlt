import React from 'react';
import { ArrowDownCircle, Factory, Globe2, Shield, Truck } from 'lucide-react';

const features = [
  {
    title: 'Factory Direct Partnerships',
    description: 'Connect directly with verified manufacturers to secure reliable production and pricing without middlemen.',
    highlight: 'Cut out agent markups and reclaim your margins.',
    icon: Factory,
  },
  {
    title: 'Streamlined Logistics',
    description: 'Consolidated freight, customs support, and door-to-door routing handled by one operator.',
    highlight: 'Lower landed costs with optimized lanes.',
    icon: Truck,
  },
  {
    title: 'Quality Assurance',
    description: 'Pre-shipment inspections, sampling, and compliance checks so every order arrives production-ready.',
    highlight: 'Protect your reputation with documented QC.',
    icon: Shield,
  },
  {
    title: 'Market Intelligence',
    description: 'Real-time pricing and demand signals so you can forecast confidently and launch ahead of trends.',
    highlight: 'Decisions backed by live sourcing data.',
    icon: Globe2,
  },
];

export const FeatureGrid: React.FC = () => {
  return (
    <section className="max-w-7xl w-full mx-auto px-8 py-24 space-y-14">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 text-xs uppercase tracking-widest text-[#d3f54c] bg-white/5">
            solutions overview
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#fdfff9] tracking-tight leading-tight">
            Sourcing built for <span className="serif-accent italic text-[#d3f54c]">brands, founders,</span> and ecommerce.
          </h2>
          <p className="text-xl md:text-2xl text-[#d5e0bf] max-w-3xl leading-relaxed">
            Every engagement is designed to lower landed costs, raise quality, and accelerate delivery. The same sovereign look and feel from /invest now powers your sourcing control center.
          </p>
        </div>
        <button className="self-start md:self-end px-8 py-4 rounded-full bg-[#d3f54c] text-[#282a1e] font-bold text-xl hover:bg-[#fdfff9] transition flex items-center gap-2">
          View all solutions <ArrowDownCircle size={20} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-7">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group bg-[#1a1c14] border border-white/10 rounded-[2.25rem] p-8 flex flex-col gap-6 hover:border-[#d3f54c] transition w-full"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/40">
                  <Icon size={24} strokeWidth={2.25} />
                </div>
                <h3 className="text-2xl font-bold text-[#fdfff9]">{feature.title}</h3>
              </div>
              <p className="text-[#d5e0bf] text-lg leading-relaxed">{feature.description}</p>
              <div className="text-[#d3f54c] font-semibold text-base flex items-center gap-2">
                <ArrowDownCircle size={18} /> {feature.highlight}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureGrid;
