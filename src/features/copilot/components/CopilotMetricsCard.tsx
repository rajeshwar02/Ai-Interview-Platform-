import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { BarChart3 } from 'lucide-react';
import { cn } from '../../../utils/cn';
import type { CopilotMetric } from '../../../types/copilot';

interface CopilotMetricsCardProps {
  metrics: CopilotMetric[];
  className?: string;
}

const colorMap: Record<string, { bar: string; bg: string; text: string; shadow: string }> = {
  emerald: {
    bar: 'bg-emerald-500',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    shadow: 'shadow-emerald-500/30',
  },
  indigo: {
    bar: 'bg-indigo-500',
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    shadow: 'shadow-indigo-500/30',
  },
  amber: {
    bar: 'bg-amber-500',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    shadow: 'shadow-amber-500/30',
  },
  rose: {
    bar: 'bg-rose-500',
    bg: 'bg-rose-500/10',
    text: 'text-rose-400',
    shadow: 'shadow-rose-500/30',
  },
};

export const CopilotMetricsCard: React.FC<CopilotMetricsCardProps> = ({
  metrics,
  className,
}) => {
  return (
    <Card className={cn('relative overflow-hidden', className)}>
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-violet-600/0 rounded-l-xl" />

      <CardHeader className="pl-7">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/20">
            <BarChart3 className="w-4 h-4 text-violet-400" />
          </div>
          <div>
            <CardTitle className="text-base">Key Performance Metrics</CardTitle>
            <p className="text-[11px] text-slate-500 font-mono mt-0.5">
              {metrics.length} categories evaluated
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pl-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {metrics.map((metric) => {
            const colors = colorMap[metric.color] || colorMap.indigo;
            const pct = Math.round((metric.score / metric.maxScore) * 100);

            return (
              <div
                key={metric.id}
                className="p-3.5 rounded-xl bg-slate-800/30 border border-slate-800/50 hover:border-slate-700/60 transition-colors group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {metric.label}
                  </span>
                  <span className={cn('text-sm font-bold tabular-nums', colors.text)}>
                    {metric.score}
                    <span className="text-slate-600 text-[10px] font-normal">
                      /{metric.maxScore}
                    </span>
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80 mb-2">
                  <div
                    className={cn(
                      'h-full rounded-full transition-all duration-700 ease-out shadow-sm',
                      colors.bar,
                      colors.shadow
                    )}
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <p className="text-[10px] text-slate-500 leading-normal">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
