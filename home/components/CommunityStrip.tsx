import React from 'react';
import { ArrowRight } from 'lucide-react';

const faces = [
  'Alex (Launch engineer)',
  'Jade (Video creator)',
  'Alec (Dev)',
  'Priya (Merchant)',
  'Diego (Ops)',
];

export const CommunityStrip: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="bg-[#1a1c14] border border-white/10 rounded-[2rem] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3 text-sm text-[#d5e0bf] flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#d3f54c]/60 text-[#d3f54c] uppercase tracking-widest text-xs">
            these awesome humans
          </div>
          <div className="flex flex-wrap gap-2">
            {faces.map((face) => (
              <span key={face} className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-[#fdfff9] text-xs">
                {face}
              </span>
            ))}
          </div>
        </div>
        <button className="inline-flex items-center gap-2 text-[#d3f54c] font-semibold">
          Join them <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default CommunityStrip;
