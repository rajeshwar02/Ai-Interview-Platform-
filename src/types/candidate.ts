export type CandidateStatus = 'Invited' | 'In Progress' | 'Completed' | 'Shortlisted' | 'Rejected' | 'Expired';
export type HiringRecommendation = 'Strong Hire' | 'Hire' | 'Consider' | 'Reject';

export interface Candidate {
  id: string;
  jobId: string;
  jobTitle: string;
  name: string;
  email: string;
  phone?: string;
  resumeUrl?: string;
  status: CandidateStatus;
  invitedAt: string;
  completedAt?: string;
  overallScore?: number;
  matchPercentage?: number;
  recommendation?: HiringRecommendation;
  interviewToken: string;
  inviteExpiresAt: string;
}

export interface InviteCandidateInput {
  jobId: string;
  name: string;
  email: string;
  phone?: string;
  expirationDays?: number;
}
