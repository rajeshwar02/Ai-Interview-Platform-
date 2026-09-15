import type { CopilotData } from '../types/copilot';

export const MOCK_COPILOT_DATA: Record<string, CopilotData> = {
  'int-1': {
    interviewId: 'int-1',
    candidateName: 'Alex Rivera',
    candidateEmail: 'alex.rivera@example.com',
    candidateAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    jobTitle: 'Senior Full Stack Engineer',
    department: 'Engineering',
    interviewDate: '2026-09-04T14:45:00Z',
    interviewDuration: 44,
    interviewStatus: 'Completed',
    overallScore: 92,

    summary: {
      headline: 'Exceptional candidate with deep full-stack expertise and strong system design instincts.',
      overview:
        'Alex Rivera demonstrated outstanding technical proficiency across all interview rounds. Their responses showed a sophisticated understanding of modern web architecture, React performance optimization, and distributed systems principles. Communication was clear, structured, and solution-oriented throughout the 44-minute session.',
      strengths: [
        'Expert-level React architecture knowledge with practical performance optimization strategies',
        'Strong system design thinking — proposed scalable, fault-tolerant solutions unprompted',
        'Excellent communication skills — structured answers with clear reasoning chains',
        'Demonstrated coding proficiency with clean, well-tested TypeScript implementation',
      ],
      areasForGrowth: [
        'Could deepen knowledge of observability and monitoring tooling',
        'Limited experience with multi-region deployment strategies',
      ],
      cultureFitNotes:
        'Candidate displayed a collaborative mindset, referencing team-based problem solving multiple times. Aligned well with Acme Corp engineering values around code quality and mentorship.',
    },

    metrics: [
      {
        id: 'tech',
        label: 'Technical Proficiency',
        score: 94,
        maxScore: 100,
        color: 'emerald',
        description: 'React, TypeScript, System Design',
      },
      {
        id: 'comm',
        label: 'Communication',
        score: 90,
        maxScore: 100,
        color: 'indigo',
        description: 'Clarity, structure, and articulation',
      },
      {
        id: 'problem',
        label: 'Problem Solving',
        score: 88,
        maxScore: 100,
        color: 'amber',
        description: 'Analytical approach and creativity',
      },
      {
        id: 'coding',
        label: 'Coding Assessment',
        score: 100,
        maxScore: 100,
        color: 'emerald',
        description: '8/8 test cases passed',
      },
      {
        id: 'culture',
        label: 'Culture Fit',
        score: 91,
        maxScore: 100,
        color: 'indigo',
        description: 'Team alignment and values',
      },
      {
        id: 'leadership',
        label: 'Leadership Potential',
        score: 85,
        maxScore: 100,
        color: 'amber',
        description: 'Mentorship and initiative indicators',
      },
    ],

    insights: [
      {
        id: 'ins-1',
        type: 'strength',
        title: 'React Performance Mastery',
        description:
          'Candidate demonstrated advanced knowledge of React 18 concurrent features, transitions API, and virtualization. Mentioned specific patterns like useDeferredValue and Suspense boundaries for data-heavy UIs.',
        confidence: 96,
      },
      {
        id: 'ins-2',
        type: 'strength',
        title: 'Clean Code Implementation',
        description:
          'LRU Cache solution was implemented with generics, proper typing, and edge-case handling. All 8 test cases passed on first submission — indicates strong problem decomposition skills.',
        confidence: 99,
      },
      {
        id: 'ins-3',
        type: 'observation',
        title: 'System Design Depth',
        description:
          'When discussing architecture, the candidate proactively considered caching strategies, database indexing, and API gateway patterns. This suggests senior-level systems thinking even without explicit prompting.',
        confidence: 91,
      },
      {
        id: 'ins-4',
        type: 'caution',
        title: 'DevOps & Observability Gap',
        description:
          'Candidate was less specific when discussing monitoring, alerting, and CI/CD pipeline design. While not a core requirement, this may limit initial independence in production support scenarios.',
        confidence: 78,
      },
      {
        id: 'ins-5',
        type: 'observation',
        title: 'Collaborative Communication Style',
        description:
          'Throughout the interview, Alex consistently framed answers in terms of team collaboration and peer review. This aligns strongly with Acme Corp\'s engineering culture of shared ownership.',
        confidence: 88,
      },
    ],

    recruiterActions: [
      {
        id: 'act-1',
        label: 'Advance to Final Round',
        description: 'Schedule a live panel interview with the engineering leadership team.',
        priority: 'primary',
        icon: 'arrow-right',
      },
      {
        id: 'act-2',
        label: 'Generate Scorecard Report',
        description: 'Create a detailed PDF report to share with the hiring committee.',
        priority: 'secondary',
        icon: 'file-text',
      },
      {
        id: 'act-3',
        label: 'Share with Hiring Manager',
        description: 'Send AI analysis and transcript to the hiring manager for review.',
        priority: 'secondary',
        icon: 'send',
      },
      {
        id: 'act-4',
        label: 'Request Follow-up Interview',
        description: 'Schedule an additional round focusing on DevOps and infrastructure topics.',
        priority: 'outline',
        icon: 'calendar',
      },
    ],

    recommendation: 'Strong Hire',
  },
};
