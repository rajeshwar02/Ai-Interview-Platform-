import React from 'react';
import {
  Brain,
  Code2,
  Mic,
  BarChart3,
  ShieldAlert,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Card } from '../../../components/ui/card';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Adaptive AI Questioning',
      description: 'The AI interviewer listens in real time and asks contextual follow-up questions to probe candidate depth, technical trade-offs, and edge cases.',
    },
    {
      icon: Code2,
      title: 'Integrated Monaco Coding IDE',
      description: 'Built-in VS Code environment supporting TypeScript, Python, Java, and C++ with instant test execution when technical coding is configured.',
    },
    {
      icon: Mic,
      title: 'Natural Voice Conversational AI',
      description: 'Ultra-low latency speech synthesis and speech recognition creates a natural, human-like interview dialogue without typing delays.',
    },
    {
      icon: BarChart3,
      title: 'Objective Skill Radar Scorecards',
      description: 'Every interview yields detailed skill ratings, category breakdowns, transcribed quotes, and a defensible recommendation (Strong Hire, Hire, Consider, Reject).',
    },
    {
      icon: ShieldAlert,
      title: 'Anti-Cheating & Integrity Guard',
      description: 'Monitors tab switches, copy-paste anomalies, voice pattern consistency, and response latency to ensure 100% candidate integrity.',
    },
    {
      icon: Clock,
      title: '10x Recruiter Capacity',
      description: 'Screen hundreds of applicants simultaneously 24/7 without spending hundreds of hours on manual screening calls.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#090d14] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300">
            <Sparkles className="w-3.5 h-3.5" /> Core AI Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for enterprise <span className="text-violet-400">precision and scale</span>.
          </h2>
          <p className="text-sm text-slate-400">
            State-of-the-art AI technology designed to give every candidate a fair, thorough, and highly engaging interview experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <Card key={f.title} hoverable className="border-slate-800 bg-slate-950/80 p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{f.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
