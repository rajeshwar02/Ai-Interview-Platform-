import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'indigo'
    | 'outline'
    | 'strong-hire'
    | 'hire'
    | 'consider'
    | 'reject';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[11px] font-medium tracking-wide',
    md: 'px-2.5 py-1 text-xs font-semibold tracking-wide',
  };

  const variantStyles = {
    default: 'bg-slate-800 text-slate-300 border border-slate-700/60',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    danger: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    indigo: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/30',
    outline: 'bg-transparent text-slate-300 border border-slate-700',
    'strong-hire': 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-900/20',
    hire: 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30',
    consider: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
    reject: 'bg-rose-500/15 text-rose-300 border border-rose-500/30',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full transition-colors',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
