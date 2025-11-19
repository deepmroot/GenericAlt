
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'glass';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "rounded-[2rem] font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 h-[72px] px-10 hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-[#d3f54c] text-[#282a1e] hover:bg-white",
    outline: "border-3 border-[#fdfff9] text-[#fdfff9] hover:bg-[#fdfff9] hover:text-[#282a1e]",
    glass: "bg-[#fdfff9]/10 backdrop-blur-md border border-[#fdfff9]/20 text-[#fdfff9] hover:bg-[#fdfff9]/20"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
