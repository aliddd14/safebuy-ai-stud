import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glassOpacity?: 'light' | 'medium' | 'heavy';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  hoverEffect = false,
  glassOpacity = 'medium',
  ...props 
}) => {
  const bgClasses = {
    light: 'bg-white/40',
    medium: 'bg-white/60',
    heavy: 'bg-white/80'
  };

  const baseClasses = `${bgClasses[glassOpacity]} backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl`;
  const hoverClasses = hoverEffect ? "transition-all duration-300 hover:shadow-xl hover:bg-white/70 hover:-translate-y-1" : "";

  return (
    <motion.div 
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'success' | 'warning' | 'danger' | 'premium';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral' }) => {
  const variants = {
    neutral: 'bg-slate-100 text-slate-600 border-slate-200',
    success: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    warning: 'bg-amber-50 text-amber-600 border-amber-200',
    danger: 'bg-rose-50 text-rose-600 border-rose-200',
    premium: 'bg-blue-50 text-blue-600 border-blue-200',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant]} uppercase tracking-wide`}>
      {children}
    </span>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = "",
  ...props 
}) => {
  const baseClasses = "py-3 px-6 rounded-xl font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-slate-900 text-white shadow-lg hover:bg-slate-800 hover:shadow-xl",
    secondary: "bg-white/50 backdrop-blur-md border border-slate-200 text-slate-700 hover:bg-white/80",
    ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
