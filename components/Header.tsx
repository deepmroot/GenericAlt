
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Overview', href: '#overview' },
    { name: 'Traction', href: '#traction' },
    { name: 'Technology', href: '#technology' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Invest', href: '#invest', badge: 'NEW' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-[100] px-4 flex justify-center pointer-events-none">
      <div className={`bg-[#1a1c14] backdrop-blur-xl rounded-full border border-white/10 flex items-center p-2 px-8 shadow-2xl transition-all duration-500 pointer-events-auto ${isScrolled ? 'bg-[#1a1c14]/90' : 'bg-[#1a1c14]/80'}`}>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-3 rounded-full text-[#fdfff9]/80 text-sm font-bold hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              {link.name}
              {link.badge && (
                <span className="bg-[#d3f54c] text-[#1a1c14] text-[10px] font-extrabold px-1.5 py-0.5 rounded-md leading-none">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center justify-between w-full gap-4">
          <span className="text-[#fdfff9] font-bold">MENU</span>
          <button
            className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-[#d3f54c]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full mt-4 left-4 right-4 bg-[#1a1c14] border border-[#d3f54c]/20 rounded-[2rem] p-6 flex flex-col gap-4 shadow-2xl pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#fdfff9] text-xl font-bold py-4 border-b border-white/5 last:border-0 flex items-center justify-between"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
              {link.badge && (
                <span className="bg-[#d3f54c] text-[#1a1c14] text-xs font-extrabold px-2 py-1 rounded-md">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
