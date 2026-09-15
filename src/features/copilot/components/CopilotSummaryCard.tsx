import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { FileText, CheckCircle, AlertTriangle } from 'lucide-react';
import { cn } from '../../../utils/cn';
import type { CopilotSummary } from '../../../types/copilot';

interface CopilotSummaryCardProps {
  summary: CopilotSummary;
  className?: string;
}

export const CopilotSummaryCard: React.FC<CopilotSummaryCardProps> = ({
  summary,
  className,
}) => {
  return (
    <Card className={cn('relative overflow-hidden', className)}>
      {/* Section indicator */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-indigo-600/0 rounded-l-xl" />

      <CardHeader className="pl-7">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/20">
            <FileText className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <CardTitle className="text-base">Interview Summary</CardTitle>
            <p className="text-[11px] text-slate-500 font-mono mt-0.5">AI-Generated Analysis</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pl-7 space-y-5">
        {/* Headline */}
        <div className="p-3.5 rounded-lg bg-slate-800/30 border border-slate-800/50">
          <p className="text-sm text-indigo-300 font-semibold leading-relaxed italic">
            "{summary.headline}"
          </p>
        </div>

        {/* Overview */}
        <p className="text-[13px] text-slate-300 leading-relaxed">{summary.overview}</p>

        {/* Strengths */}
        <div>
          <h4 className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            Key Strengths
          </h4>
          <ul className="space-y-2">
            {summary.strengths.map((strength, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                {strength}
              </li>
            ))}
          </ul>
        </div>

        {/* Areas for Growth */}
        <div>
          <h4 className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            Areas for Growth
          </h4>
          <ul className="space-y-2">
            {summary.areasForGrowth.map((area, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Culture Fit */}
        <div className="p-3.5 rounded-lg bg-slate-800/30 border border-slate-800/50">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
            Culture Fit Assessment
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">{summary.cultureFitNotes}</p>
        </div>
      </CardContent>
    </Card>
  );
};
