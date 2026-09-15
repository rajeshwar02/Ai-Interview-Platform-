import type { InterviewStatus } from './interview';
import type { HiringRecommendation } from './candidate';

export interface CopilotSummary {
  headline: string;
  overview: string;
  strengths: string[];
  areasForGrowth: string[];
  cultureFitNotes: string;
}

export interface CopilotMetric {
  id: string;
  label: string;
  score: number;
  maxScore: number;
  color: 'emerald' | 'indigo' | 'amber' | 'rose';
  description: string;
}

export type InsightType = 'strength' | 'observation' | 'caution';

export interface CopilotInsight {
  id: string;
  type: InsightType;
  title: string;
  description: string;
  confidence: number;
}

export type ActionPriority = 'primary' | 'secondary' | 'outline';

export interface RecruiterAction {
  id: string;
  label: string;
  description: string;
  priority: ActionPriority;
  icon: string;
}

export interface CopilotData {
  interviewId: string;
  candidateName: string;
  candidateEmail: string;
  candidateAvatar: string;
  jobTitle: string;
  department: string;
  interviewDate: string;
  interviewDuration: number; // minutes
  interviewStatus: InterviewStatus;
  overallScore: number;
  summary: CopilotSummary;
  metrics: CopilotMetric[];
  insights: CopilotInsight[];
  recruiterActions: RecruiterAction[];
  recommendation: HiringRecommendation;
}
