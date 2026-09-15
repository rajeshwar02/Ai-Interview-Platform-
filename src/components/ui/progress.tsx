import React from 'react';
import { cn } from '../../utils/cn';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  colorVariant?: 'indigo' | 'emerald' | 'amber' | 'rose';
  showLabel?: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  colorVariant = 'indigo',
  showLabel = false,
  className,
  ...props
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  const barColors = {
    indigo: 'bg-indigo-500 shadow-indigo-500/50',
    emerald: 'bg-emerald-500 shadow-emerald-500/50',
    amber: 'bg-amber-500 shadow-amber-500/50',
    rose: 'bg-rose-500 shadow-rose-500/50',
  };

  return (
    <div className={cn('w-full space-y-1', className)} {...props}>
      {showLabel && (
        <div className="flex justify-between text-xs text-slate-400 font-medium">
          <span>Progress</span>
          <span>{Math.round(clampedValue)}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/80">
        <div
          className={cn('h-full transition-all duration-500 ease-out rounded-full shadow-sm', barColors[colorVariant])}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
};
