import React from 'react';
import { EmptyState } from '../../../components/common/EmptyState';
import { BrainCircuit, AlertOctagon } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { useNavigate } from 'react-router-dom';

interface CopilotErrorStateProps {
  type: 'not-found' | 'error';
  message?: string;
}

export const CopilotErrorState: React.FC<CopilotErrorStateProps> = ({
  type,
  message,
}) => {
  const navigate = useNavigate();

  if (type === 'not-found') {
    return (
      <EmptyState
        icon={<BrainCircuit className="h-7 w-7" />}
        title="Copilot Data Unavailable"
        description={
          message ||
          'No AI copilot analysis found for this interview. The interview may still be in progress or data has not been generated yet.'
        }
        action={
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate('/app/interviews')}
          >
            Back to Interviews
          </Button>
        }
      />
    );
  }

  return (
    <EmptyState
      icon={<AlertOctagon className="h-7 w-7" />}
      title="Something Went Wrong"
      description={
        message ||
        'An error occurred while loading the AI Copilot analysis. Please try again later.'
      }
      action={
        <Button
          variant="secondary"
          size="sm"
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      }
    />
  );
};
