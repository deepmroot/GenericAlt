
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[#d3f54c]/10 text-center bg-[#282a1e]">
      <div className="container mx-auto px-6">
        <div className="font-bold text-xl tracking-wider flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 bg-[#d3f54c] rounded-full" />
          <span className="text-white">GENERIC</span>
          <span className="text-[#d3f54c]">ALTERNATIVES</span>
        </div>
        <p className="text-gray-400 text-sm mb-8 font-medium">
            GENERIC ALTERNATIVES LIMITED (NI735578)
        </p>
        <p className="text-gray-500 text-sm mb-8">
            Automation + AI + CRM + Scraping + API workflows
        </p>
        <div className="flex justify-center gap-4 text-xs text-gray-600">
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
