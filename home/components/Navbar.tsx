import React, { useRef } from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Invest', badge: 'NEW', href: '/invest' },
    { label: 'Supplying', href: '#process' },
    { label: 'FAQ', href: '#how-it-works' },
    { label: 'Benefits', href: '#solutions' },
    { label: 'Partners', href: '#partners' },
    { label: 'Blogs', href: '#intelligence' },
    { label: 'Jobs', href: '#contact' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100] px-4 py-6 lg:py-10 pointer-events-none">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">

        {/* Logo Island with Company Name */}
        <div className="pointer-events-auto flex items-center gap-3 bg-olive/90 backdrop-blur-xl border border-white/5 rounded-full p-2 pr-6 shadow-2xl shrink-0">
          <div className="w-10 h-10 bg-lime rounded-full flex items-center justify-center text-olive shadow-[0_0_15px_rgba(211,245,76,0.4)]">
            <ShieldCheck size={24} strokeWidth={2.5} />
          </div>
          <span className="font-bold tracking-tight text-ivory text-xl">GENERIC<span className="text-black font-serif italic px-1.5 py-0.5 bg-white ml-1.5">ALT</span></span>
        </div>

        {/* Navigation Island - Scrollable, shrinks to fit */}
        <div className="pointer-events-auto relative bg-olive/90 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl max-w-full lg:min-w-0 lg:shrink overflow-hidden group">

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="w-full flex flex-nowrap justify-start items-center px-3 py-2 gap-1 overflow-x-auto no-scrollbar touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Inline style to ensure scrollbar is hidden on Webkit browsers */}
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="px-4 py-2 lg:px-5 lg:py-3 rounded-full text-sm font-bold text-ivory/80 hover:text-olive hover:bg-lime transition-all flex items-center gap-2 group/link whitespace-nowrap shrink-0">
                {link.label}
                {link.badge && (
                  <span className="bg-lime text-olive text-[9px] px-1.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider group-hover/link:bg-olive group-hover/link:text-lime transition-colors">{link.badge}</span>
                )}
              </a>
            ))}

            {/* Spacer for the fade effect */}
            <div className="w-8 shrink-0 lg:hidden"></div>
          </div>

          {/* Right Fade / Scroll Hint (Visible on mobile/tablet) - Clickable */}
          <div
            onClick={scrollRight}
            className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-olive via-olive/80 to-transparent lg:hidden flex items-center justify-end pr-3 cursor-pointer hover:bg-olive/20 transition-colors"
          >
            <div className="animate-pulse text-lime opacity-70">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Actions Island */}
        <div className="pointer-events-auto flex items-center gap-2 bg-olive/90 backdrop-blur-xl border border-white/5 rounded-full p-2 pl-6 shadow-2xl shrink-0">
          <Link to="/login" className="text-sm font-bold text-ivory hover:text-lime transition-colors mr-2 whitespace-nowrap">Log In</Link>
          <Link to="/signup" className="bg-lime text-olive rounded-full px-6 py-3 text-sm font-bold hover:bg-white transition-colors shadow-none uppercase tracking-widest whitespace-nowrap">
            Start Sourcing
          </Link>
        </div>
      </div>
    </nav>
  );
};