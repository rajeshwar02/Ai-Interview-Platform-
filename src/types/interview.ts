export type InterviewStatus = 'Scheduled' | 'Verified' | 'In Progress' | 'Completed' | 'Terminated';
export type InterviewState = 'speaking' | 'listening' | 'thinking' | 'processing' | 'answering' | 'coding';

export interface Question {
  id: string;
  roundId: string;
  category: string;
  questionText: string;
  contextOrScenario?: string;
  expectedKeyPoints?: string[];
  followUpPrompt?: string;
  codingProblem?: CodingProblem;
}

export interface CodingTestCase {
  id: string;
  input: string;
  expectedOutput: string;
  isHidden?: boolean;
}

export interface CodingProblem {
  id: string;
  title: string;
  description: string;
  initialCode: Record<string, string>; // e.g. { javascript: "...", python: "..." }
  testCases: CodingTestCase[];
  hints?: string[];
}

export interface TranscribedTurn {
  id: string;
  speaker: 'AI' | 'Candidate';
  text: string;
  timestamp: string;
  category?: string;
  sentiment?: 'Strong' | 'Neutral' | 'Hesitant' | 'Needs Depth';
}

export interface InterviewSession {
  id: string;
  token: string;
  candidateId: string;
  jobId: string;
  candidateName: string;
  candidateEmail: string;
  jobTitle: string;
  status: InterviewStatus;
  currentRoundIndex: number;
  currentQuestionIndex: number;
  totalQuestions: number;
  startedAt?: string;
  endedAt?: string;
  transcripts: TranscribedTurn[];
  codingSubmissions?: {
    code: string;
    language: string;
    passed: boolean;
    passedTestCasesCount: number;
    totalTestCasesCount: number;
  };
}
