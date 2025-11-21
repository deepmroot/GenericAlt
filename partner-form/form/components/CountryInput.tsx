import React, { useState, useMemo, useRef, useEffect } from 'react';
import { countries } from '../data/countries';

const INPUT_CLASSES = "w-full bg-[#1a1c14] border-2 border-[#fdfff9]/10 rounded-[2rem] px-8 py-6 text-xl text-[#fdfff9] placeholder:text-[#fdfff9]/20 focus:outline-none focus:border-[#d3f54c] focus:bg-[#282a1e] transition-all duration-300 font-medium";

export const CountryInput = ({ 
  value, 
  onChange, 
  autoFocus, 
  placeholder 
}: { 
  value: string; 
  onChange: (val: string) => void; 
  autoFocus?: boolean; 
  placeholder?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (!value) return countries;
    const lower = value.toLowerCase();
    return countries.filter(c => c.name.toLowerCase().includes(lower));
  }, [value]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
     <div className="relative w-full" ref={wrapperRef}>
        <input 
           className={INPUT_CLASSES}
           value={value}
           onChange={(e) => { 
             onChange(e.target.value); 
             setIsOpen(true); 
           }}
           onFocus={() => setIsOpen(true)}
           placeholder={placeholder}
           autoFocus={autoFocus}
        />
        {isOpen && filtered.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 max-h-[300px] overflow-y-auto bg-[#1a1c14] border-2 border-[#fdfff9]/10 rounded-[1.5rem] z-50 shadow-2xl no-scrollbar">
               {filtered.map(c => (
                   <button 
                      key={c.name}
                      type="button"
                      onClick={() => { 
                        onChange(c.name); 
                        setIsOpen(false); 
                      }}
                      className="w-full text-left px-8 py-4 flex items-center gap-4 hover:bg-[#d3f54c] hover:text-[#282a1e] transition-colors border-b border-[#fdfff9]/5 last:border-0 group"
                   >
                      <span className="text-2xl leading-none">{c.flag}</span>
                      <span className="font-medium text-lg tracking-tight">{c.name}</span>
                   </button>
               ))}
            </div>
        )}
     </div>
  );
};