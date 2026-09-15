import type { InterviewReport } from '../types/report';

export const MOCK_REPORTS: Record<string, InterviewReport> = {
  // Software Engineer Report (cand-1)
  'cand-1': {
    id: 'rep-1',
    interviewId: 'int-1',
    candidateId: 'cand-1',
    jobId: 'job-1',
    candidateName: 'Alex Rivera',
    candidateEmail: 'alex.rivera@example.com',
    jobTitle: 'Senior Full Stack Engineer',
    department: 'Engineering',
    interviewDate: '2026-09-04',
    durationMinutes: 44,
    overallScore: 92,
    recommendation: 'Strong Hire',
    executiveSummary: 'Alex exhibited exceptional proficiency in distributed frontend microservices, React concurrency patterns, and TypeScript type safety. During the interactive coding phase, Alex solved the dynamic pagination and caching problem cleanly in 14 minutes with zero lint warnings and optimal time complexity O(N). Demonstrated high maturity in system design trade-offs.',
    categoryScores: [
      {
        category: 'Technical Architecture',
        score: 95,
        weightPercentage: 35,
        feedback: 'Articulated clean micro-frontend architecture with module federation and optimistic UI updates under low bandwidth.',
      },
      {
        category: 'Problem Solving & Coding',
        score: 94,
        weightPercentage: 30,
        feedback: 'Passed 100% of test cases. Implemented a thread-safe LRU cache wrapper in TypeScript with edge-case handling.',
      },
      {
        category: 'Communication & Tradeoffs',
        score: 88,
        weightPercentage: 20,
        feedback: 'Extremely clear verbal communication. Proactively highlighted memory overhead vs latency tradeoffs.',
      },
      {
        category: 'Culture & Leadership',
        score: 90,
        weightPercentage: 15,
        feedback: 'Strong engineering advocacy. Shared past experience mentoring junior devs through automated CI/CD code quality gates.',
      },
    ],
    skillAssessments: [
      { skillName: 'React & TypeScript', proficiencyLevel: 'Expert', evidenceSummary: 'Handled complex generics, strict mode bounds, and custom hook state machine cleanly.' },
      { skillName: 'System Architecture', proficiencyLevel: 'Expert', evidenceSummary: 'Proposed clean caching hierarchy (CDN -> Redis -> PostgreSQL index optimization).' },
      { skillName: 'Node.js Microservices', proficiencyLevel: 'Proficient', evidenceSummary: 'Solid understanding of event loops, worker threads, and rate-limiting middleware.' },
    ],
    strengths: [
      'Mastery over modern React concurrency features and TypeScript architecture',
      'Flawless code execution and test pass rate under timed constraints',
      'Strong architectural clarity when discussing backend API scaling and DB indexing',
    ],
    weaknesses: [
      'Could elaborate more on automated end-to-end testing strategies with Playwright/Cypress',
    ],
    skillGaps: ['Deep GraphQL Subscriptions experience (primarily worked with REST/gRPC)'],
    keyQuotes: [
      '"I always prioritize optimistic UI updates with automatic rollback strategies so users experience instant interactions even on high-latency mobile connections."',
      '"When designing state management, I prefer keeping transient UI state strictly local and server state synchronized via TanStack Query rather than bloating global stores."',
    ],
    codingAssessment: {
      problemTitle: 'LRU Cache with TTL Expiry',
      language: 'typescript',
      score: 96,
      codeQualityScore: 98,
      efficiencyScore: 94,
      testCasesPassed: 8,
      totalTestCases: 8,
      codeSnippet: `class LRUCache<K, V> {
  private capacity: number;
  private cache = new Map<K, { value: V; expiresAt: number }>();

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: K): V | undefined {
    const item = this.cache.get(key);
    if (!item) return undefined;
    if (Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return undefined;
    }
    // Refresh access order
    this.cache.delete(key);
    this.cache.set(key, item);
    return item.value;
  }
}`,
      aiFeedback: 'Clean, elegant execution utilizing Javascript Map insertion order mechanics with TTL timestamp checks. Code was fully typed with no TypeScript errors.',
    },
    transcripts: [
      { id: 't1', speaker: 'AI', text: 'Welcome Alex. Let us start by discussing how you approach state management in large scale React web applications.', timestamp: '00:02', category: 'Technical Architecture' },
      { id: 't2', speaker: 'Candidate', text: 'Thank you! I categorize state into three distinct boundaries: server state, global client state, and local component state. I prefer TanStack Query for server caching and Zustand for global UI parameters like theme or session.', timestamp: '00:18', category: 'Technical Architecture', sentiment: 'Strong' },
      { id: 't3', speaker: 'AI', text: 'Excellent distinction. How do you handle optimistic UI updates when a server request might fail on a spotty network?', timestamp: '01:05', category: 'Technical Architecture' },
      { id: 't4', speaker: 'Candidate', text: 'I update the local UI cache immediately, snapshot the previous context, and if the mutation throws an error, I roll back the UI seamlessly and display an inline toast retry action.', timestamp: '01:32', category: 'Technical Architecture', sentiment: 'Strong' },
    ],
  },

  // Financial Accountant Report (cand-4)
  'cand-4': {
    id: 'rep-4',
    interviewId: 'int-4',
    candidateId: 'cand-4',
    jobId: 'job-2',
    candidateName: 'Emily Watson, CPA',
    candidateEmail: 'emily.watson@example.com',
    jobTitle: 'Senior Financial Accountant',
    department: 'Finance & Accounting',
    interviewDate: '2026-09-07',
    durationMinutes: 34,
    overallScore: 89,
    recommendation: 'Strong Hire',
    executiveSummary: 'Emily demonstrated rigorous GAAP knowledge and flawless audit preparation methodologies. Successfully parsed complex multi-currency journal adjustments, intercompany eliminations, and tax deferral scenarios during the audit case study.',
    categoryScores: [
      { category: 'GAAP & Regulatory Knowledge', score: 92, weightPercentage: 40, feedback: 'Precise understanding of ASC 606 revenue recognition rules and lease accounting standard ASC 842.' },
      { category: 'Financial Analysis & Auditing', score: 88, weightPercentage: 30, feedback: 'Accurately identified balance sheet variances and unrecorded liabilities in the audit simulation.' },
      { category: 'Attention to Detail', score: 90, weightPercentage: 15, feedback: 'Demonstrated meticulous checking of reconciliation trail logs.' },
      { category: 'Ethical Judgement', score: 85, weightPercentage: 15, feedback: 'Strict adherence to Sarbanes-Oxley compliance and internal control separation of duties.' },
    ],
    skillAssessments: [
      { skillName: 'US GAAP Compliance', proficiencyLevel: 'Expert', evidenceSummary: 'Answered complex revenue deferral and lease amortization calculations flawlessly.' },
      { skillName: 'Financial Reporting & ERP', proficiencyLevel: 'Expert', evidenceSummary: 'Deep experience with NetSuite General Ledger and automated month-end close procedures.' },
      { skillName: 'Internal Audit Controls', proficiencyLevel: 'Proficient', evidenceSummary: 'Strong knowledge of SOX 404 control testing and discrepancy documentation.' },
    ],
    strengths: [
      'Active CPA license with 7+ years of mid-to-large corporate ledger management',
      'Deep fluency in ASC 606 revenue recognition for recurring SaaS subscriptions',
      'Clear, methodical explanations during financial anomaly scenario tests',
    ],
    weaknesses: ['Has relied primarily on NetSuite ERP; minor onboarding needed for SAP Financials if migrated.'],
    skillGaps: [],
    keyQuotes: [
      '"Under ASC 606, revenue must be recognized as performance obligations are satisfied, not when cash invoices are disbursed. For multi-year software contracts, unbundled obligations require standalone selling price allocation."',
    ],
    transcripts: [
      { id: 't1', speaker: 'AI', text: 'Emily, how do you handle a scenario where a vendor invoice arrives after the period close deadline?', timestamp: '00:04', category: 'GAAP & Regulatory Knowledge' },
      { id: 't2', speaker: 'Candidate', text: 'I evaluate the materiality of the amount. If material, I book an unbilled accrual journal entry in the current period to align with the matching principle under US GAAP, then reverse it in the next period upon invoice processing.', timestamp: '00:35', category: 'GAAP & Regulatory Knowledge', sentiment: 'Strong' },
    ],
  },

  // Sales Executive Report (cand-6)
  'cand-6': {
    id: 'rep-6',
    interviewId: 'int-6',
    candidateId: 'cand-6',
    jobId: 'job-3',
    candidateName: 'Marcus Vance',
    candidateEmail: 'marcus.vance@example.com',
    jobTitle: 'Enterprise Account Executive',
    department: 'Sales & Business Development',
    interviewDate: '2026-09-09',
    durationMinutes: 29,
    overallScore: 94,
    recommendation: 'Strong Hire',
    executiveSummary: 'Marcus delivered a stellar interview performance during the live objection handling roleplay. Demonstrated top-tier MEDDPICC qualification rigor, executive presence, and strategic value storytelling when pitching against enterprise competitors.',
    categoryScores: [
      { category: 'Persuasion & Objection Handling', score: 96, weightPercentage: 35, feedback: 'Handled tough pricing and security compliance objections smoothly without discounting.' },
      { category: 'Discovery & Need Identification', score: 92, weightPercentage: 25, feedback: 'Asked insightful questions regarding ROI, current tech stack bottleneck, and economic buyer approval.' },
      { category: 'Communication & Presence', score: 95, weightPercentage: 25, feedback: 'Articulate, confident tone with excellent active listening and pacing.' },
      { category: 'Sales Methodology (MEDDPICC)', score: 92, weightPercentage: 15, feedback: 'Quantified metrics and mapped decision criteria thoroughly.' },
    ],
    skillAssessments: [
      { skillName: 'Objection Handling', proficiencyLevel: 'Expert', evidenceSummary: 'Reframed price resistance into quantifiable multi-year ROI and risk reduction.' },
      { skillName: 'MEDDPICC Framework', proficiencyLevel: 'Expert', evidenceSummary: 'Demonstrated disciplined qualification steps for deals above $150k ARR.' },
    ],
    strengths: [
      'Proven track record of achieving 135%+ quota attainment over 4 consecutive years',
      'Outstanding executive presence and live sales roleplay execution',
      'Mastery of value-based selling and champion building within enterprise prospect accounts',
    ],
    weaknesses: ['Prefers short sales cycles (<60 days); ensure alignment on 6-9 month enterprise deal cycles.'],
    skillGaps: [],
    keyQuotes: [
      '"When a C-suite prospect claims software is too expensive, I never immediately offer a discount. I anchor back to their quantified pain points and demonstrate how delaying deployment costs them $40k per month in lost productivity."',
    ],
    transcripts: [
      { id: 't1', speaker: 'AI', text: 'Marcus, imagine a Chief Information Security Officer tells you your software lacks SOC2 Type II certification for their specific jurisdiction. How do you respond?', timestamp: '00:03', category: 'Persuasion & Objection Handling' },
      { id: 't2', speaker: 'Candidate', text: 'I validate their concern immediately because security is paramount. I outline our ISO 27001 compliance, share our third-party penetration testing audit reports, and offer a custom security addendum validated by our legal counsel.', timestamp: '00:42', category: 'Persuasion & Objection Handling', sentiment: 'Strong' },
    ],
  },
};
