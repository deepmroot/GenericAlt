
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 border-t border-[#d3f54c]/10 text-center bg-[#282a1e]">
      <div className="container mx-auto px-6">
        <Link to="/" className="font-bold text-xl tracking-wider flex items-center justify-center gap-2 mb-4 hover:scale-105 transition-transform inline-flex">
          <div className="w-2 h-2 bg-[#d3f54c] rounded-full" />
          <span className="text-[#fdfff9]">GENERIC</span>
          <span className="text-[#d3f54c]">ALTERNATIVES</span>
        </Link>
        <p className="text-[#fdfff9]/60 text-sm mb-8 font-medium">
          GENERIC ALTERNATIVES LIMITED (NI735578)
        </p>
        <p className="text-[#fdfff9]/40 text-sm mb-8">
          Automation + AI + CRM + Scraping + API workflows
        </p>

        {/* Login / Signup Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Link to="/login" className="px-6 py-3 rounded-full text-sm font-bold text-[#fdfff9] hover:text-[#d3f54c] border border-[#fdfff9]/10 hover:border-[#d3f54c]/30 transition-all">
            Log In
          </Link>
          <Link to="/signup" className="px-6 py-3 rounded-full text-sm font-bold bg-[#d3f54c] text-[#282a1e] hover:bg-[#fdfff9] transition-all uppercase tracking-widest">
            Start china sourcing
          </Link>
        </div>

        <div className="flex justify-center gap-4 text-xs text-[#fdfff9]/30">
          <span>© {new Date().getFullYear()} Generic Alternatives</span>
          <span>•</span>
          <span>London / Guangzhou</span>
          <span>•</span>
          <span>Systems Confidential</span>
        </div>
      </div>
    </footer>
  );
};

