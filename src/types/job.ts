export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Hybrid';
export type ExperienceLevel = 'Entry' | 'Mid-Level' | 'Senior' | 'Lead' | 'Executive';
export type JobStatus = 'Draft' | 'Active' | 'Paused' | 'Closed';
export type InterviewDifficulty = 'Standard' | 'Challenging' | 'Adaptive';

export interface EvaluationCriteriaWeight {
  id: string;
  category: string; // e.g., 'Role Knowledge', 'Problem Solving', 'Behavioral', 'Communication', 'Technical Skill'
  weightPercentage: number;
  description: string;
}

export interface QuestionRoundConfig {
  id: string;
  roundType: 'Behavioral' | 'Role Specific' | 'Problem Solving' | 'Communication' | 'Technical' | 'Coding';
  title: string;
  durationMinutes: number;
  questionCount: number;
  required: boolean;
}

export interface InterviewConfig {
  durationMinutes: number;
  difficulty: InterviewDifficulty;
  totalQuestions: number;
  rounds: QuestionRoundConfig[];
  evaluationCriteriaWeights: EvaluationCriteriaWeight[];
  codingRequired: boolean;
  voiceRequired: boolean;
  resumeRequired: boolean;
  enableAiFollowups: boolean;
  enableResumeBasedQuestions: boolean;
  welcomeMessage?: string;
  customInstructions?: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  employmentType: EmploymentType;
  location: string;
  experienceLevel: ExperienceLevel;
  salaryMin?: number;
  salaryMax?: number;
  currency?: string;
  description: string;
  requiredSkills: string[];
  optionalSkills: string[];
  status: JobStatus;
  createdAt: string;
  updatedAt: string;
  candidateCount: number;
  completedInterviewsCount: number;
  averageScore?: number;
  interviewConfig: InterviewConfig;
  aiAnalysis?: {
    detectedRole: string;
    industryCategory: string;
    keyResponsibilities: string[];
    suggestedCriteria: EvaluationCriteriaWeight[];
    recommendedDifficulty: InterviewDifficulty;
    summary: string;
  };
}

export interface CreateJobInput extends Omit<Job, 'id' | 'createdAt' | 'updatedAt' | 'candidateCount' | 'completedInterviewsCount' | 'averageScore'> {}
