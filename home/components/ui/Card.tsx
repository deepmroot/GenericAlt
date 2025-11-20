import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', variant = 'dark', hoverEffect = true }) => {
  // Increased border radius to 5xl (2.5rem) and padding to p-10 lg:p-12
  const baseStyles = "rounded-[2.5rem] p-10 lg:p-12 transition-all duration-500 relative overflow-hidden shadow-none";
  
  const variants = {
    dark: "bg-charcoal border border-white/10 text-ivory",
    light: "bg-ivory text-olive border border-transparent",
  };

  const hoverStyles = hoverEffect ? "hover:border-lime hover:-translate-y-2" : "";

  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};