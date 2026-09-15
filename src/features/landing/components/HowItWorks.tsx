import React, { useState } from 'react';
import {
  FileText,
  Cpu,
  Sliders,
  Send,
  UserCheck,
  Video,
  FileCheck2,
  Trophy,
} from 'lucide-react';
import { Card } from '../../../components/ui/card';
import { Tabs } from '../../../components/ui/tabs';

export const HowItWorks: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState('recruiter');

  const recruiterSteps = [
    {
      num: '01',
      title: 'Paste Job Description',
      description: 'Enter job parameters or upload a JD document. Supports tech, finance, sales, HR, engineering, legal, or any operational role.',
      icon: FileText,
    },
    {
      num: '02',
      title: 'AI Job Analysis & Blueprint',
      description: 'Our engine extracts key responsibilities, parses required vs optional skills, and suggests weighted evaluation criteria.',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Configure Interview Structure',
      description: 'Customize round counts, duration, difficulty, AI follow-ups, coding workspace toggles, and passing thresholds.',
      icon: Sliders,
    },
    {
      num: '04',
      title: 'Invite & Monitor Candidates',
      description: 'Generate secure candidate interview links, dispatch invitations via email, and monitor real-time interview status.',
      icon: Send,
    },
    {
      num: '05',
      title: 'Review Scorecards & Decide',
      description: 'Access comprehensive candidate reports, radar skill breakdowns, code playback, key quotes, and hiring recommendations.',
      icon: Trophy,
    },
  ];

  const candidateSteps = [
    {
      num: '01',
      title: 'Access Interview Lobby',
      description: 'Candidate clicks their secure single-use invitation link with zero software download required.',
      icon: UserCheck,
    },
    {
      num: '02',
      title: 'System & Hardware Check',
      description: 'Automated mic and camera check ensures optimal audio quality, internet stability, and anti-cheating verification.',
      icon: Video,
    },
    {
      num: '03',
      title: 'Dynamic AI Voice Interview',
      description: 'AI interviewer conducts a dynamic conversational interview, asking follow-ups based on candidate answers.',
      icon: Cpu,
    },
    {
      num: '04',
      title: 'Coding / Skill Round (if required)',
      description: 'For technical roles, candidate accesses the Monaco IDE to solve algorithmic tasks with real-time test runner.',
      icon: FileCheck2,
    },
    {
      num: '05',
      title: 'Completion & Instant Confirmation',
      description: 'Interview closes securely, submitting transcripts and audio evidence directly to the recruiter dashboard.',
      icon: Trophy,
    },
  ];

  const currentSteps = activeFlow === 'recruiter' ? recruiterSteps : candidateSteps;

  return (
    <section id="how-it-works" className="py-20 bg-[#090d14] relative border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Streamlined workflow for <span className="text-indigo-400">recruiters and candidates</span>.
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Seamless end-to-end process built for maximum clarity, speed, and candidate comfort.
            </p>
          </div>

          <Tabs
            tabs={[
              { id: 'recruiter', label: 'Recruiter Flow' },
              { id: 'candidate', label: 'Candidate Experience' },
            ]}
            activeTab={activeFlow}
            onChange={(id) => setActiveFlow(id)}
          />
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {currentSteps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.num} hoverable className="border-slate-800 bg-slate-950/70 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-indigo-500/40">{step.num}</span>
                    <div className="w-8 h-8 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
