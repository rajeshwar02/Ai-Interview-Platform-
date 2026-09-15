import type { InterviewReport } from '../types/report';
import { MOCK_REPORTS } from '../mocks/reports.mock';
import { simulateNetworkDelay, ApiError } from './apiClient';

export const reportService = {
  async getReportByCandidateId(candidateId: string): Promise<InterviewReport> {
    const report = MOCK_REPORTS[candidateId] || MOCK_REPORTS['cand-1'];
    if (!report) {
      throw new ApiError(`Report for candidate ${candidateId} not found`, 404);
    }
    return simulateNetworkDelay(report, 350);
  },

  async getReportById(reportId: string): Promise<InterviewReport> {
    const report = Object.values(MOCK_REPORTS).find((r) => r.id === reportId) || MOCK_REPORTS['cand-1'];
    if (!report) {
      throw new ApiError(`Report ${reportId} not found`, 404);
    }
    return simulateNetworkDelay(report, 300);
  },
};
