import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Play, Mic, CheckCircle2, UserCheck, Bot } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  // Interactive Live AI Interview Preview State
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const roles = [
    {
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      aiQuestion: 'How do you structure React query caches to minimize re-renders when streaming real-time WebSockets?',
      candidateAnswer: 'I decouple server state into granular query keys and use optimistic updates with rollback snapshots...',
      evalScore: '94%',
      statusBadge: 'Technical Architecture Round',
    },
    {
      title: 'Senior Financial Accountant',
      department: 'Finance',
      aiQuestion: 'Under US GAAP ASC 842, how do you classify an operating lease vs a finance lease on the balance sheet?',
      candidateAnswer: 'Operating leases recognize straight-line expense, whereas finance leases bifurcate interest and amortization...',
      evalScore: '91%',
      statusBadge: 'GAAP Compliance Round',
    },
    {
      title: 'Enterprise Account Executive',
      department: 'Sales',
      aiQuestion: 'If a prospect claims our solution exceeds their budget by 30%, how do you handle the objection without discounting?',
      candidateAnswer: 'I validate their security and ROI targets, map pain points to monthly revenue loss, and highlight value...',
      evalScore: '96%',
      statusBadge: 'Live Roleplay Round',
    },
    {
      title: 'Structural Civil Engineer',
      department: 'Civil Infrastructure',
      aiQuestion: 'What structural safety coefficients do you apply when calculating seismic shear forces under ACI 318?',
      candidateAnswer: 'I apply a response modification coefficient R=8 for special reinforced concrete shear walls with dynamic load factoring...',
      evalScore: '89%',
      statusBadge: 'Engineering Physics Round',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [roles.length]);

  const current = roles[activeRoleIndex];

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-radial-gradient">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>Universal AI Interviewer for Modern Enterprise Hiring</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            AI-powered interviews for <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-200 bg-clip-text text-transparent">every role</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From Software Engineers to Accountants, Sales Executives, and Civil Engineers — AI Interview Platform analyzes any job description, crafts adaptive interview blueprints, and conducts dynamic voice & technical interviews.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="ai"
              size="lg"
              className="w-full sm:w-auto text-sm font-semibold px-8"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              onClick={() => navigate('/register')}
            >
              Start Hiring
            </Button>

            <a href="#how-it-works" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-sm font-semibold border-slate-700 text-slate-200 hover:text-white"
                leftIcon={<Play className="w-4 h-4 text-indigo-400 fill-indigo-400" />}
              >
                See How It Works
              </Button>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="flex items-center justify-center gap-6 text-xs text-slate-400 pt-4 font-medium">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-400" /> 100% Role-Agnostic Model
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Automated Skill Scorecards
            </span>
            <span className="flex items-center gap-1.5 hidden sm:flex">
              <UserCheck className="w-4 h-4 text-violet-400" /> Integrated Coding Editor
            </span>
          </div>
        </div>

        {/* Interactive Live Preview Mockup Card */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-2 sm:p-4 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl relative">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-slate-800/80 px-4 py-3 bg-slate-900/60 rounded-t-xl mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline-block">
                  live-session // {current.title}
                </span>
              </div>
              <Badge variant="indigo" size="sm" className="font-mono">
                {current.statusBadge}
              </Badge>
            </div>

            {/* Simulated Live Interview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 sm:p-4">
              {/* Left Column: AI Avatar */}
              <div className="md:col-span-1 rounded-xl border border-slate-800 bg-slate-900/90 p-5 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 animate-ai-ring mb-4">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-sm font-bold text-white">AI Interviewer</h4>
                <p className="text-xs text-indigo-300 font-mono mt-0.5">Evaluating: {current.title}</p>
                <div className="flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] text-indigo-300 font-medium">
                  <Mic className="w-3 h-3 text-indigo-400 animate-pulse" /> Live Voice Active
                </div>
              </div>

              {/* Right Column: Dynamic Q&A Stream */}
              <div className="md:col-span-2 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* AI Question Bubble */}
                  <div className="rounded-xl bg-indigo-950/40 border border-indigo-500/30 p-4">
                    <div className="flex items-center justify-between text-xs text-indigo-300 font-semibold mb-1.5">
                      <span className="flex items-center gap-1.5"><Bot className="w-3.5 h-3.5" /> AI Question</span>
                      <span className="text-[10px] font-mono opacity-70">Turn 3 of 6</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                      "{current.aiQuestion}"
                    </p>
                  </div>

                  {/* Candidate Response Bubble */}
                  <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-1.5">
                      <span>Candidate Response (Live Voice Transcript)</span>
                      <span className="text-[10px] font-mono text-emerald-400">Match: {current.evalScore}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                      "{current.candidateAnswer}"
                    </p>
                  </div>
                </div>

                {/* Role Switcher Controls */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                  <span className="text-slate-400 text-[11px]">Click role to test adaptation:</span>
                  <div className="flex items-center gap-1.5 overflow-x-auto">
                    {roles.map((r, idx) => (
                      <button
                        key={r.title}
                        onClick={() => setActiveRoleIndex(idx)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                          activeRoleIndex === idx
                            ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                            : 'bg-slate-900 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {r.department}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
