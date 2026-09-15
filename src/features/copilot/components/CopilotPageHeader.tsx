import React from 'react';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { BrainCircuit, ArrowLeft, Download, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CopilotPageHeaderProps {
  interviewId: string;
}

export const CopilotPageHeader: React.FC<CopilotPageHeaderProps> = ({ interviewId }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* Back navigation */}
      <button
        onClick={() => navigate(`/app/interviews/${interviewId}`)}
        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors group"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
        Back to Interview Details
      </button>

      {/* Title Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 shadow-lg shadow-indigo-500/20">
            <BrainCircuit className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl font-bold text-white tracking-tight">
                AI Interview Copilot
              </h1>
              <Badge variant="indigo" size="sm">
                Beta
              </Badge>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              AI-powered insights from the candidate's interview.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            leftIcon={<Download className="w-3.5 h-3.5" />}
          >
            Export
          </Button>
          <Button
            variant="outline"
            size="sm"
            leftIcon={<Share2 className="w-3.5 h-3.5" />}
          >
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};
