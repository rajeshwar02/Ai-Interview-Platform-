import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import {
  Lightbulb,
  TrendingUp,
  AlertCircle,
  Eye,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import type { CopilotInsight, InsightType } from '../../../types/copilot';

interface CopilotInsightsCardProps {
  insights: CopilotInsight[];
  className?: string;
}

const insightConfig: Record<
  InsightType,
  { icon: React.FC<{ className?: string }>; color: string; badgeVariant: 'success' | 'warning' | 'indigo'; borderColor: string }
> = {
  strength: {
    icon: TrendingUp,
    color: 'text-emerald-400',
    badgeVariant: 'success',
    borderColor: 'border-l-emerald-500/50',
  },
  observation: {
    icon: Eye,
    color: 'text-indigo-400',
    badgeVariant: 'indigo',
    borderColor: 'border-l-indigo-500/50',
  },
  caution: {
    icon: AlertCircle,
    color: 'text-amber-400',
    badgeVariant: 'warning',
    borderColor: 'border-l-amber-500/50',
  },
};

function typeLabel(type: InsightType): string {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

export const CopilotInsightsCard: React.FC<CopilotInsightsCardProps> = ({
  insights,
  className,
}) => {
  return (
    <Card className={cn('relative overflow-hidden', className)}>
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-cyan-600/0 rounded-l-xl" />

      <CardHeader className="pl-7">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <Lightbulb className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <CardTitle className="text-base">AI Insights</CardTitle>
            <p className="text-[11px] text-slate-500 font-mono mt-0.5">
              {insights.length} insights detected
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pl-7 space-y-3">
        {insights.map((insight) => {
          const config = insightConfig[insight.type];
          const Icon = config.icon;

          return (
            <div
              key={insight.id}
              className={cn(
                'p-4 rounded-xl bg-slate-800/30 border border-slate-800/50 border-l-2 hover:border-slate-700/60 transition-colors',
                config.borderColor
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn('mt-0.5 shrink-0', config.color)}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-sm font-semibold text-white">
                      {insight.title}
                    </span>
                    <Badge variant={config.badgeVariant} size="sm">
                      {typeLabel(insight.type)}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-2">
                    {insight.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1 flex-1 max-w-[100px] overflow-hidden rounded-full bg-slate-800/80">
                      <div
                        className={cn('h-full rounded-full', {
                          'bg-emerald-500': insight.confidence >= 90,
                          'bg-indigo-500': insight.confidence >= 80 && insight.confidence < 90,
                          'bg-amber-500': insight.confidence < 80,
                        })}
                        style={{ width: `${insight.confidence}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono tabular-nums">
                      {insight.confidence}% confidence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
