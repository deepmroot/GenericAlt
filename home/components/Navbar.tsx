import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const navLinks = [
    { label: 'Invest', badge: 'NEW', href: '#' },
    { label: 'Supplying', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Benefits', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Blogs', href: '#' },
    { label: 'Jobs', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] px-4 py-6 lg:py-10 pointer-events-none">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
        
        {/* Logo Island */}
        <div className="pointer-events-auto flex items-center bg-olive/90 backdrop-blur-xl border border-white/5 rounded-full p-2 shadow-2xl shrink-0">
          <div className="w-10 h-10 bg-lime rounded-full flex items-center justify-center text-olive shadow-[0_0_15px_rgba(211,245,76,0.4)]">
            <ShieldCheck size={24} strokeWidth={2.5} />
          </div>
        </div>

        {/* Navigation Island - Scrollable, shrinks to fit */}
        <div 
          className="pointer-events-auto flex flex-nowrap justify-start md:justify-center items-center bg-olive/90 backdrop-blur-xl border border-white/5 rounded-full px-3 py-2 shadow-2xl gap-1 max-w-full overflow-x-auto no-scrollbar lg:min-w-0 lg:shrink"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Inline style to ensure scrollbar is hidden on Webkit browsers */}
          <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          
          {navLinks.map((link) => (
             <a key={link.label} href={link.href} className="px-4 py-2 lg:px-5 lg:py-3 rounded-full text-sm font-bold text-ivory/80 hover:text-olive hover:bg-lime transition-all flex items-center gap-2 group whitespace-nowrap shrink-0">
               {link.label}
               {link.badge && (
                 <span className="bg-lime text-olive text-[9px] px-1.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider group-hover:bg-olive group-hover:text-lime transition-colors">{link.badge}</span>
               )}
             </a>
          ))}
        </div>

        {/* Actions Island */}
        <div className="pointer-events-auto flex items-center gap-2 bg-olive/90 backdrop-blur-xl border border-white/5 rounded-full p-2 pl-6 shadow-2xl shrink-0">
             <button className="text-sm font-bold text-ivory hover:text-lime transition-colors mr-2 whitespace-nowrap">Log In</button>
             <button className="bg-lime text-olive rounded-full px-6 py-3 text-sm font-bold hover:bg-white transition-colors shadow-none uppercase tracking-widest whitespace-nowrap">
               Start Sourcing
             </button>
        </div>
      </div>
    </nav>
  );
};