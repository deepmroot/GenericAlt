
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
    { name: 'Overview', href: '/invest#overview' },
    { name: 'Traction', href: '/invest#traction' },
    { name: 'Technology', href: '/invest#technology' },
    { name: 'Roadmap', href: '/invest#roadmap' },
    { name: 'Invest', href: '/invest#invest' }
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
      <div className={`max-w-7xl mx-auto bg-[#0c0f01]/80 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-between p-2 pl-8 shadow-2xl transition-all duration-500 pointer-events-auto ${isScrolled ? 'bg-[#0c0f01]/90' : 'bg-[#0c0f01]/60'}`}>
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
           <div className="w-10 h-10 bg-[#d3f54c] rounded-full flex items-center justify-center text-[#282a1e]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
           </div>
           <div className="flex flex-col leading-none">
             <span className="font-bold text-lg tracking-wide text-[#fdfff9]">GENERIC</span>
             <span className="text-[#d3f54c] text-xs font-bold tracking-widest uppercase">ALTERNATIVES</span>
           </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-6 py-3 rounded-full text-[#f5ffe0] text-base font-medium hover:bg-[#fdfff9]/10 hover:text-white transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block pr-2">
           <Link
            to="/invest#invest"
            className="bg-[#d3f54c] text-[#0c0f01] text-base font-bold px-8 py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 block"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden w-12 h-12 flex items-center justify-center bg-[#fdfff9]/10 rounded-full text-[#d3f54c] mr-2" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full mt-4 left-4 right-4 bg-[#1a1c14] border border-[#d3f54c]/20 rounded-[2rem] p-6 flex flex-col gap-4 shadow-2xl pointer-events-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[#fdfff9] text-xl font-bold py-4 border-b border-white/5 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
