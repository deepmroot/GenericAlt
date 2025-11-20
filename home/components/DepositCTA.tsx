import React from 'react';
import { ArrowRight, ClipboardSignature, Globe2, Plane, Truck, Wallet } from 'lucide-react';

export const DepositCTA: React.FC = () => {
  return (
    <section className="max-w-7xl w-full mx-auto px-8 py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch">
      <div className="bg-[#1a1c14] border border-white/10 rounded-[2.75rem] p-10 flex flex-col gap-7 w-full">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-2xl bg-[#d3f54c]/10 text-[#d3f54c] flex items-center justify-center border border-[#d3f54c]/40">
            <Wallet size={24} />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-[#d3f54c]">Sourced with care</p>
            <h3 className="text-4xl md:text-5xl font-bold text-[#fdfff9] tracking-tight">Delivered with precision.</h3>
          </div>
        </div>
        <p className="text-[#d5e0bf] max-w-3xl leading-relaxed text-xl">
          Verified factories, sealed cartons, and predictable logistics make every shipment feel effortless. We orchestrate from
          PO to final mile so you can scale without babysitting freight.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-[1.75rem] p-5 space-y-2">
            <p className="text-sm text-[#d5e0bf] uppercase tracking-widest">Factories</p>
            <p className="text-2xl font-semibold text-[#fdfff9]">Direct partnerships</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[1.75rem] p-5 space-y-2">
            <p className="text-sm text-[#d5e0bf] uppercase tracking-widest">Logistics</p>
            <p className="text-2xl font-semibold text-[#fdfff9]">Ocean • Air • Ground</p>
          </div>
        </div>
        <button className="self-start px-8 py-4 rounded-full bg-[#d3f54c] text-[#282a1e] font-bold text-xl hover:bg-[#fdfff9] transition flex items-center gap-2">
          Get started <ArrowRight size={20} />
        </button>
      </div>

      <div className="bg-[#fdfff9] text-[#1a1c14] rounded-[2.75rem] border border-[#d3f54c]/40 p-9 space-y-7 shadow-sharp-white w-full">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-[#282a1e] text-[#d3f54c] flex items-center justify-center">
            <ClipboardSignature size={22} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6b6f5c]">Deliverables</p>
            <h3 className="text-3xl font-bold tracking-tight">What you can expect.</h3>
          </div>
        </div>
        <ul className="space-y-4 text-lg text-[#1a1c14]">
          {[`Samples approved with photo evidence.`, `Production monitored with mid-line checks.`, `Freight booked with milestone updates.`].map((item) => (
            <li key={item} className="flex items-start gap-3 bg-[#1a1c14] text-[#fdfff9] rounded-[1.75rem] px-5 py-4">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d3f54c]"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="grid sm:grid-cols-3 gap-4 text-sm text-[#6b6f5c]">
          <div className="bg-[#282a1e] text-[#d3f54c] rounded-[1.5rem] p-5 flex flex-col gap-2">
            <Globe2 size={20} />
            <span className="text-[#fdfff9] font-semibold text-lg">Global coverage</span>
            <span className="text-base">US • EU • APAC</span>
          </div>
          <div className="bg-[#282a1e] text-[#d3f54c] rounded-[1.5rem] p-5 flex flex-col gap-2">
            <Plane size={20} />
            <span className="text-[#fdfff9] font-semibold text-lg">Fast lanes</span>
            <span className="text-base">Air & ocean priority</span>
          </div>
          <div className="bg-[#282a1e] text-[#d3f54c] rounded-[1.5rem] p-5 flex flex-col gap-2">
            <Truck size={20} />
            <span className="text-[#fdfff9] font-semibold text-lg">Last mile</span>
            <span className="text-base">Delivery partners aligned</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepositCTA;
