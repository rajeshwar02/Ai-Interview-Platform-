import type { Candidate, InviteCandidateInput } from '../types/candidate';
import { MOCK_CANDIDATES } from '../mocks/candidates.mock';
import { simulateNetworkDelay, ApiError } from './apiClient';

let candidatesStore: Candidate[] = [...MOCK_CANDIDATES];

export const candidateService = {
  async getCandidates(filters?: { jobId?: string; status?: string; search?: string }): Promise<Candidate[]> {
    let list = [...candidatesStore];
    
    if (filters?.jobId) {
      list = list.filter((c) => c.jobId === filters.jobId);
    }
    
    if (filters?.status) {
      list = list.filter((c) => c.status === filters.status);
    }

    if (filters?.search) {
      const q = filters.search.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.email.toLowerCase().includes(q) ||
          c.jobTitle.toLowerCase().includes(q)
      );
    }

    return simulateNetworkDelay(list, 300);
  },

  async getCandidateById(id: string): Promise<Candidate> {
    const candidate = candidatesStore.find((c) => c.id === id);
    if (!candidate) {
      throw new ApiError(`Candidate ${id} not found`, 404);
    }
    return simulateNetworkDelay(candidate, 250);
  },

  async inviteCandidate(input: InviteCandidateInput, jobTitle: string): Promise<Candidate> {
    const newCandidate: Candidate = {
      id: `cand-${Date.now()}`,
      jobId: input.jobId,
      jobTitle,
      name: input.name,
      email: input.email,
      phone: input.phone,
      status: 'Invited',
      invitedAt: new Date().toISOString(),
      interviewToken: `tok_${Math.random().toString(36).substring(2, 10)}_${Date.now()}`,
      inviteExpiresAt: new Date(Date.now() + (input.expirationDays || 14) * 86400000).toISOString(),
    };

    candidatesStore.unshift(newCandidate);
    return simulateNetworkDelay(newCandidate, 500);
  },
};
