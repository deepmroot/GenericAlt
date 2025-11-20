import React from 'react';

interface BadgeProps {
  label: string;
  color?: 'lime' | 'ivory';
}

export const Badge: React.FC<BadgeProps> = ({ label, color = 'lime' }) => {
  const styles = color === 'lime' 
    ? "border-lime text-lime" 
    : "border-ivory/30 text-ivory";

  return (
    <span className={`inline-block px-4 py-1.5 border rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${styles} shadow-none`}>
      {label}
    </span>
  );
};