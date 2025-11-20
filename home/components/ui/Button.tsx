import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary';
  icon?: boolean;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', icon = true, label, className = '', ...props }) => {
  // Increased padding (px-10 py-5) and font size (text-lg)
  const baseStyles = "rounded-full px-10 py-5 font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-3 text-lg group shadow-none";
  
  const variants = {
    primary: "bg-lime text-olive hover:bg-white hover:text-olive",
    outline: "border-2 border-ivory text-ivory bg-transparent hover:border-lime hover:text-lime",
    secondary: "bg-white text-olive hover:bg-lime",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {label}
      {icon && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />}
    </button>
  );
};