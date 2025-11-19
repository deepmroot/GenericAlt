import React from 'react';
import { ArrowDownCircle, Banknote, Send, Shield, Users } from 'lucide-react';

const features = [
  {
    title: 'Pay anyone fast',
    description: 'Businesses, contractors, freelancers, or friends — send funds with predictable settlement.',
    highlight: 'Visa Direct means most transfers settle in under 3 seconds.',
    icon: Send,
  },
  {
    title: 'Move money fast',
    description: 'Wires, instant, and non-instant transfers in one pane of glass.',
    highlight: '$1 with no minimum transfer limit keeps every team moving.',
    icon: Banknote,
  },
  {
    title: 'More personal',
    description: 'Your name on the card or account. Secondary account access with controls.',
    highlight: 'Built for founders, finance, and ops to share controls without sharing passwords.',
    icon: Users,
  },
  {
    title: 'Fee free',
    description: 'No monthly fees. No setup fees. Free transfers between accounts.',
    highlight: 'Out-of-network ATM fees reimbursed within 24 hours.',
    icon: Shield,
  },
];

export const FeatureGrid: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs uppercase tracking-widest text-[#d3f54c]">
            product overview
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#fdfff9] tracking-tight">
            Get up and running in <span className="serif-accent italic text-[#d3f54c]">seconds</span>.
          </h2>
          <p className="text-[#d5e0bf] max-w-2xl">
            A single control center for deposits, payments, and cards. Built with the same sovereign aesthetic powering the
            invest experience.
          </p>
        </div>
        <button className="self-start md:self-end px-6 py-3 rounded-full bg-[#d3f54c] text-[#282a1e] font-bold hover:bg-[#fdfff9] transition flex items-center gap-2">
          Sign up <ArrowDownCircle size={18} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group bg-[#1a1c14] border border-white/10 rounded-[2rem] p-6 flex flex-col gap-4 hover:border-[#d3f54c] transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/40">
                  <Icon size={22} strokeWidth={2.25} />
                </div>
                <h3 className="text-xl font-bold text-[#fdfff9]">{feature.title}</h3>
              </div>
              <p className="text-[#d5e0bf] text-sm leading-relaxed">{feature.description}</p>
              <div className="text-[#d3f54c] font-semibold text-sm flex items-center gap-2">
                <ArrowDownCircle size={16} /> {feature.highlight}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureGrid;
