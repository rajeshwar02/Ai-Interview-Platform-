import type { InterviewSession } from '../types/interview';

export const MOCK_INTERVIEW_SESSIONS: Record<string, InterviewSession> = {
  'tok_alex_rivera_1': {
    id: 'int-1',
    token: 'tok_alex_rivera_1',
    candidateId: 'cand-1',
    jobId: 'job-1',
    candidateName: 'Alex Rivera',
    candidateEmail: 'alex.rivera@example.com',
    jobTitle: 'Senior Full Stack Engineer',
    status: 'Completed',
    currentRoundIndex: 2,
    currentQuestionIndex: 5,
    totalQuestions: 6,
    startedAt: '2026-09-04T14:45:00Z',
    endedAt: '2026-09-04T15:29:00Z',
    transcripts: [
      { id: 't1', speaker: 'AI', text: 'Hello Alex! Welcome to your AI interview for the Senior Full Stack Engineer position at Acme Corp. We will start with System Architecture.', timestamp: '00:05', category: 'Role Specific' },
      { id: 't2', speaker: 'Candidate', text: 'Hi! Happy to be here. Ready when you are.', timestamp: '00:12', category: 'Role Specific', sentiment: 'Strong' },
      { id: 't3', speaker: 'AI', text: 'Can you explain how you design React applications to handle high data throughput without causing rendering lag?', timestamp: '00:20', category: 'Role Specific' },
      { id: 't4', speaker: 'Candidate', text: 'I leverage memoization, virtualized windowing lists for large datasets, and decouple state updates using React 18 transitions or web worker background processing.', timestamp: '00:55', category: 'Role Specific', sentiment: 'Strong' },
    ],
    codingSubmissions: {
      code: `class LRUCache<K, V> {\n  private capacity: number;\n  private cache = new Map<K, { value: V; expiresAt: number }>();\n\n  constructor(capacity: number) {\n    this.capacity = capacity;\n  }\n\n  get(key: K): V | undefined {\n    const item = this.cache.get(key);\n    if (!item) return undefined;\n    if (Date.now() > item.expiresAt) {\n      this.cache.delete(key);\n      return undefined;\n    }\n    this.cache.delete(key);\n    this.cache.set(key, item);\n    return item.value;\n  }\n}`,
      language: 'typescript',
      passed: true,
      passedTestCasesCount: 8,
      totalTestCasesCount: 8,
    },
  },
};
