import type { InterviewSession, TranscribedTurn } from '../types/interview';
import { MOCK_INTERVIEW_SESSIONS } from '../mocks/interviews.mock';
import { simulateNetworkDelay, ApiError } from './apiClient';

let sessionsStore: Record<string, InterviewSession> = { ...MOCK_INTERVIEW_SESSIONS };

export const interviewService = {
  async getSessionByToken(token: string): Promise<InterviewSession> {
    const session = sessionsStore[token];
    if (session) {
      return simulateNetworkDelay(session, 300);
    }

    // Default fallback interview session structure for dynamic candidate tokens
    const defaultSession: InterviewSession = {
      id: `int-${Date.now()}`,
      token,
      candidateId: 'cand-demo',
      jobId: 'job-1',
      candidateName: 'Candidate User',
      candidateEmail: 'candidate@example.com',
      jobTitle: 'Senior Full Stack Engineer',
      status: 'Scheduled',
      currentRoundIndex: 0,
      currentQuestionIndex: 0,
      totalQuestions: 5,
      transcripts: [],
    };

    sessionsStore[token] = defaultSession;
    return simulateNetworkDelay(defaultSession, 300);
  },

  async addTranscriptTurn(token: string, turn: TranscribedTurn): Promise<InterviewSession> {
    const session = sessionsStore[token];
    if (!session) {
      throw new ApiError('Interview session not found', 404);
    }
    session.transcripts.push(turn);
    return simulateNetworkDelay(session, 150);
  },

  async updateSessionStatus(token: string, status: InterviewSession['status']): Promise<InterviewSession> {
    const session = sessionsStore[token];
    if (!session) {
      throw new ApiError('Session not found', 404);
    }
    session.status = status;
    if (status === 'Completed') {
      session.endedAt = new Date().toISOString();
    }
    return simulateNetworkDelay(session, 300);
  },
};
