import type { Job, CreateJobInput, JobStatus } from '../types/job';
import { MOCK_JOBS } from '../mocks/jobs.mock';
import { simulateNetworkDelay, ApiError } from './apiClient';

let jobsStore: Job[] = [...MOCK_JOBS];

export const jobService = {
  async getJobs(filters?: { status?: JobStatus; search?: string; department?: string }): Promise<Job[]> {
    let result = [...jobsStore];
    
    if (filters?.status) {
      result = result.filter((j) => j.status === filters.status);
    }
    
    if (filters?.department) {
      result = result.filter((j) => j.department.toLowerCase() === filters.department?.toLowerCase());
    }

    if (filters?.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.department.toLowerCase().includes(q) ||
          j.requiredSkills.some((s) => s.toLowerCase().includes(q))
      );
    }

    return simulateNetworkDelay(result, 350);
  },

  async getJobById(id: string): Promise<Job> {
    const job = jobsStore.find((j) => j.id === id);
    if (!job) {
      throw new ApiError(`Job with ID ${id} not found`, 404);
    }
    return simulateNetworkDelay(job, 300);
  },

  async createJob(input: CreateJobInput): Promise<Job> {
    const newJob: Job = {
      ...input,
      id: `job-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      candidateCount: 0,
      completedInterviewsCount: 0,
    };
    jobsStore.unshift(newJob);
    return simulateNetworkDelay(newJob, 600);
  },

  async updateJobStatus(id: string, status: JobStatus): Promise<Job> {
    const index = jobsStore.findIndex((j) => j.id === id);
    if (index === -1) {
      throw new ApiError(`Job not found`, 404);
    }
    jobsStore[index] = { ...jobsStore[index], status, updatedAt: new Date().toISOString() };
    return simulateNetworkDelay(jobsStore[index], 300);
  },

  async analyzeJobDescription(description: string, title: string): Promise<Job['aiAnalysis']> {
    // Simulated AI parsing logic
    const isTech = title.toLowerCase().includes('engineer') || title.toLowerCase().includes('developer') || description.toLowerCase().includes('react');
    const isFinance = title.toLowerCase().includes('accountant') || title.toLowerCase().includes('finance') || description.toLowerCase().includes('gaap');
    const isSales = title.toLowerCase().includes('sales') || title.toLowerCase().includes('account executive') || description.toLowerCase().includes('b2b');

    let detectedRole = 'Professional Specialist';
    let industryCategory = 'General Industry';
    let keyResponsibilities = [
      'Execute core operational deliverables according to organizational standards',
      'Collaborate across cross-functional teams to fulfill strategic milestones',
      'Prepare reporting metrics and optimize workflow efficiency',
    ];

    if (isTech) {
      detectedRole = 'Senior Software Engineer';
      industryCategory = 'Technology & Software';
      keyResponsibilities = [
        'Architect responsive front-end components and microservices',
        'Design database schemas and optimize query execution latency',
        'Lead code reviews and maintain automated CI/CD deployment pipelines',
      ];
    } else if (isFinance) {
      detectedRole = 'Certified Financial Accountant';
      industryCategory = 'Finance & Accounting';
      keyResponsibilities = [
        'Prepare general ledger entries and audit compliance documentation',
        'Ensure full compliance with US GAAP guidelines and statutory regulations',
        'Conduct monthly financial variance analysis and cash flow forecasting',
      ];
    } else if (isSales) {
      detectedRole = 'Enterprise Sales Representative';
      industryCategory = 'B2B Sales & SaaS';
      keyResponsibilities = [
        'Drive multi-channel enterprise deal discovery and C-suite pitches',
        'Handle complex contract negotiations and price positioning',
        'Maintain high MEDDPICC qualification standards throughout sales cycles',
      ];
    }

    const aiAnalysisResult: NonNullable<Job['aiAnalysis']> = {
      detectedRole,
      industryCategory,
      keyResponsibilities,
      suggestedCriteria: [
        { id: 'c1', category: 'Role Specific Knowledge', weightPercentage: 40, description: 'Domain mastery and technical/procedural expertise' },
        { id: 'c2', category: 'Problem Solving & Scenarios', weightPercentage: 30, description: 'Analytical depth during unexpected operational constraints' },
        { id: 'c3', category: 'Communication & Presence', weightPercentage: 15, description: 'Clarity, conciseness, and stakeholder management' },
        { id: 'c4', category: 'Behavioral & Alignment', weightPercentage: 15, description: 'Adaptability, team culture fit, and ownership mindset' },
      ],
      recommendedDifficulty: 'Standard',
      summary: `AI analyzed the job description for ${title}. Recommended a structured 3-round interview evaluating ${detectedRole} key competencies.`,
    };

    return simulateNetworkDelay(aiAnalysisResult, 900); // realistic AI processing delay
  },
};
