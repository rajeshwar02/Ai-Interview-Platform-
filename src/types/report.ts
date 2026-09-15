import type { HiringRecommendation } from './candidate';
import type { TranscribedTurn } from './interview';

export interface CategoryScore {
  category: string;
  score: number; // 0 - 100
  weightPercentage: number;
  feedback: string;
}

export interface SkillAssessment {
  skillName: string;
  proficiencyLevel: 'Expert' | 'Proficient' | 'Developing' | 'Unsatisfactory';
  evidenceSummary: string;
}

export interface InterviewReport {
  id: string;
  interviewId: string;
  candidateId: string;
  jobId: string;
  candidateName: string;
  candidateEmail: string;
  jobTitle: string;
  department: string;
  interviewDate: string;
  durationMinutes: number;
  overallScore: number; // 0-100
  recommendation: HiringRecommendation;
  executiveSummary: string;
  categoryScores: CategoryScore[];
  skillAssessments: SkillAssessment[];
  strengths: string[];
  weaknesses: string[];
  skillGaps: string[];
  keyQuotes: string[];
  transcripts: TranscribedTurn[];
  codingAssessment?: {
    problemTitle: string;
    language: string;
    score: number;
    codeQualityScore: number;
    efficiencyScore: number;
    testCasesPassed: number;
    totalTestCases: number;
    codeSnippet: string;
    aiFeedback: string;
  };
}
