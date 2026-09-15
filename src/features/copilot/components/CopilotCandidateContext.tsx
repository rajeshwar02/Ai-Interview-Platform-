import React from 'react';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import {
  User,
  Briefcase,
  Clock,
  Calendar,
  Award,
  Activity,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import type { CopilotData } from '../../../types/copilot';

interface CopilotCandidateContextProps {
  data: CopilotData;
  className?: string;
}

const statusVariantMap: Record<string, 'success' | 'warning' | 'danger' | 'indigo' | 'default'> = {
  Completed: 'success',
  'In Progress': 'warning',
  Scheduled: 'indigo',
  Terminated: 'danger',
  Verified: 'default',
};

const recommendationVariantMap: Record<string, 'strong-hire' | 'hire' | 'consider' | 'reject'> = {
  'Strong Hire': 'strong-hire',
  Hire: 'hire',
  Consider: 'consider',
  Reject: 'reject',
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatDuration(minutes: number): string {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hrs > 0) return `${hrs}h ${mins}m`;
  return `${mins} min`;
}

function getScoreColor(score: number): string {
  if (score >= 85) return 'text-emerald-400';
  if (score >= 70) return 'text-amber-400';
  return 'text-rose-400';
}

function getScoreRingColor(score: number): string {
  if (score >= 85) return 'border-emerald-500/40';
  if (score >= 70) return 'border-amber-500/40';
  return 'border-rose-500/40';
}

export const CopilotCandidateContext: React.FC<CopilotCandidateContextProps> = ({
  data,
  className,
}) => {
  const infoItems = [
    {
      icon: User,
      label: 'Candidate',
      value: data.candidateName,
    },
    {
      icon: Briefcase,
      label: 'Position',
      value: data.jobTitle,
    },
    {
      icon: Activity,
      label: 'Status',
      value: data.interviewStatus,
      badge: true,
    },
    {
      icon: Clock,
      label: 'Duration',
      value: formatDuration(data.interviewDuration),
    },
    {
      icon: Calendar,
      label: 'Interview Date',
      value: formatDate(data.interviewDate),
    },
  ];

  return (
    <Card className={cn('relative overflow-hidden', className)}>
      {/* Subtle AI accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-600" />

      <CardContent className="pt-5">
        {/* Candidate Header */}
        <div className="flex items-start gap-4 mb-5">
          <img
            src={data.candidateAvatar}
            alt={data.candidateName}
            className="w-12 h-12 rounded-xl object-cover border border-slate-700/60 shadow-lg"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-white tracking-tight truncate">
              {data.candidateName}
            </h3>
            <p className="text-xs text-slate-400 truncate">{data.candidateEmail}</p>
            <div className="flex items-center gap-2 mt-1.5">
              <Badge variant={recommendationVariantMap[data.recommendation]} size="sm">
                {data.recommendation}
              </Badge>
              <span className="text-[10px] text-slate-500 font-mono">{data.department}</span>
            </div>
          </div>
        </div>

        {/* Overall Score Circle */}
        <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800/60 mb-5">
          <div
            className={cn(
              'flex h-14 w-14 items-center justify-center rounded-xl border-2 shrink-0',
              getScoreRingColor(data.overallScore)
            )}
          >
            <div className="flex flex-col items-center">
              <span className={cn('text-xl font-bold leading-none', getScoreColor(data.overallScore))}>
                {data.overallScore}
              </span>
              <span className="text-[9px] text-slate-500 font-mono mt-0.5">/ 100</span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs font-semibold text-white">Overall Score</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              AI-evaluated performance across all interview rounds and assessment criteria.
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="space-y-2.5">
          {infoItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 text-xs"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800/60 border border-slate-700/40 shrink-0">
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <span className="text-slate-500 w-24 shrink-0 font-medium">{item.label}</span>
                {item.badge ? (
                  <Badge variant={statusVariantMap[item.value] || 'default'} size="sm">
                    {item.value}
                  </Badge>
                ) : (
                  <span className="text-slate-200 font-medium truncate">{item.value}</span>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
