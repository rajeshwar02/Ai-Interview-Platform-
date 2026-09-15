import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CopilotPageHeader } from './components/CopilotPageHeader';
import { CopilotCandidateContext } from './components/CopilotCandidateContext';
import { CopilotSummaryCard } from './components/CopilotSummaryCard';
import { CopilotMetricsCard } from './components/CopilotMetricsCard';
import { CopilotInsightsCard } from './components/CopilotInsightsCard';
import { CopilotActionsCard } from './components/CopilotActionsCard';
import { CopilotLoadingState } from './components/CopilotLoadingState';
import { CopilotErrorState } from './components/CopilotErrorState';
import { MOCK_COPILOT_DATA } from '../../mocks/copilot.mock';
import type { CopilotData } from '../../types/copilot';

type PageState = 'loading' | 'ready' | 'not-found' | 'error';

export const CopilotPage: React.FC = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const [state, setState] = useState<PageState>('loading');
  const [data, setData] = useState<CopilotData | null>(null);

  useEffect(() => {
    // Simulate async data fetch
    const timer = setTimeout(() => {
      // Try the interviewId directly, then fall back to 'int-1' for demo
      const copilotData = MOCK_COPILOT_DATA[interviewId || ''] || MOCK_COPILOT_DATA['int-1'];

      if (copilotData) {
        setData(copilotData);
        setState('ready');
      } else {
        setState('not-found');
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [interviewId]);

  if (state === 'loading') {
    return <CopilotLoadingState />;
  }

  if (state === 'not-found') {
    return <CopilotErrorState type="not-found" />;
  }

  if (state === 'error') {
    return <CopilotErrorState type="error" />;
  }

  if (!data) {
    return <CopilotErrorState type="error" />;
  }

  return (
    <div className="space-y-6 max-w-[1400px]">
      {/* Header */}
      <CopilotPageHeader interviewId={interviewId || ''} />

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT — Candidate Context (1/3) */}
        <div className="lg:col-span-1 space-y-6">
          <CopilotCandidateContext data={data} />
        </div>

        {/* RIGHT — AI Copilot Workspace (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <CopilotSummaryCard summary={data.summary} />
          <CopilotMetricsCard metrics={data.metrics} />
          <CopilotInsightsCard insights={data.insights} />
          <CopilotActionsCard actions={data.recruiterActions} />
        </div>
      </div>
    </div>
  );
};
