import React from 'react';
import { ArrowRight, ClipboardSignature, Globe2, Plane, Truck, Wallet } from 'lucide-react';

export const DepositCTA: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
      <div className="bg-[#1a1c14] border border-white/10 rounded-[2.5rem] p-9 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/40">
            <Wallet size={22} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#d3f54c]">Sourced with care</p>
            <h3 className="text-3xl font-bold text-[#fdfff9] tracking-tight">Delivered with precision.</h3>
          </div>
        </div>
        <p className="text-[#d5e0bf] max-w-2xl leading-relaxed text-lg">
          Verified factories, sealed cartons, and predictable logistics make every shipment feel effortless. We orchestrate from
          PO to final mile so you can scale without babysitting freight.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-4 space-y-2">
            <p className="text-sm text-[#d5e0bf] uppercase tracking-widest">Factories</p>
            <p className="text-xl font-semibold text-[#fdfff9]">Direct partnerships</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[1.5rem] p-4 space-y-2">
            <p className="text-sm text-[#d5e0bf] uppercase tracking-widest">Logistics</p>
            <p className="text-xl font-semibold text-[#fdfff9]">Ocean • Air • Ground</p>
          </div>
        </div>
        <button className="self-start px-6 py-3 rounded-full bg-[#d3f54c] text-[#282a1e] font-bold hover:bg-[#fdfff9] transition flex items-center gap-2">
          Get started <ArrowRight size={18} />
        </button>
      </div>

      <div className="bg-[#fdfff9] text-[#1a1c14] rounded-[2.5rem] border border-[#d3f54c]/40 p-8 space-y-6 shadow-sharp-white">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#282a1e] text-[#d3f54c] flex items-center justify-center">
            <ClipboardSignature size={22} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Deliverables</p>
            <h3 className="text-2xl font-bold tracking-tight">What you can expect.</h3>
          </div>
        </div>
        <ul className="space-y-3 text-base text-[#1a1c14]">
          {[`Samples approved with photo evidence.`, `Production monitored with mid-line checks.`, `Freight booked with milestone updates.`].map((item) => (
            <li key={item} className="flex items-start gap-3 bg-[#1a1c14] text-[#fdfff9] rounded-[1.5rem] px-4 py-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d3f54c]"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="grid sm:grid-cols-3 gap-3 text-xs text-[#6b6f5c]">
          <div className="bg-[#282a1e] text-[#d3f54c] rounded-[1.25rem] p-4 flex flex-col gap-2">
            <Globe2 size={18} />
            <span className="text-[#fdfff9] font-semibold">Global coverage</span>
            <span>US • EU • APAC</span>
          </div>
          <div className="bg-[#282a1e] text-[#d3f54c] rounded-[1.25rem] p-4 flex flex-col gap-2">
            <Plane size={18} />
            <span className="text-[#fdfff9] font-semibold">Fast lanes</span>
            <span>Air & ocean priority</span>
          </div>
          <div className="bg-[#282a1e] text-[#d3f54c] rounded-[1.25rem] p-4 flex flex-col gap-2">
            <Truck size={18} />
            <span className="text-[#fdfff9] font-semibold">Last mile</span>
            <span>Delivery partners aligned</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepositCTA;
