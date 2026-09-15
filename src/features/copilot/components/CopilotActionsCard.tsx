import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import {
  Zap,
  ArrowRight,
  FileText,
  Send,
  CalendarDays,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import type { RecruiterAction } from '../../../types/copilot';

interface CopilotActionsCardProps {
  actions: RecruiterAction[];
  className?: string;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  'arrow-right': ArrowRight,
  'file-text': FileText,
  send: Send,
  calendar: CalendarDays,
};

const variantMap: Record<string, 'primary' | 'secondary' | 'outline'> = {
  primary: 'primary',
  secondary: 'secondary',
  outline: 'outline',
};

export const CopilotActionsCard: React.FC<CopilotActionsCardProps> = ({
  actions,
  className,
}) => {
  return (
    <Card className={cn('relative overflow-hidden', className)}>
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-600/0 rounded-l-xl" />

      <CardHeader className="pl-7">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20">
            <Zap className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <CardTitle className="text-base">Recruiter Actions</CardTitle>
            <p className="text-[11px] text-slate-500 font-mono mt-0.5">
              Recommended next steps
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pl-7 space-y-2.5">
        {actions.map((action) => {
          const Icon = iconMap[action.icon] || ArrowRight;
          const variant = variantMap[action.priority] || 'secondary';

          return (
            <div
              key={action.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/25 border border-slate-800/50 hover:border-slate-700/60 transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white group-hover:text-indigo-200 transition-colors">
                  {action.label}
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                  {action.description}
                </p>
              </div>
              <Button
                variant={variant === 'primary' ? 'ai' : variant}
                size="sm"
                className="shrink-0"
                leftIcon={<Icon className="w-3.5 h-3.5" />}
              >
                {action.priority === 'primary' ? 'Go' : 'Action'}
              </Button>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
