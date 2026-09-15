import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import { Card } from '../../../components/ui/card';

export const RecruiterBenefits: React.FC = () => {
  const stats = [
    { value: '85%', label: 'Reduction in Screening Time' },
    { value: '3.4x', label: 'More Qualified Candidates Advanced' },
    { value: '100%', label: 'Standardized Rubric Evaluation' },
    { value: '24/7', label: 'Automated Candidate Scheduling' },
  ];

  return (
    <section id="recruiter-benefits" className="py-20 bg-[#090d14] border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
              <Zap className="w-3.5 h-3.5" /> RECRUITER IMPACT
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Transform your hiring team into a <span className="text-emerald-400">supercharged engine</span>.
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Stop drowning in resume stacks and screening phone calls. Let AI handle initial depth evaluations so your recruiters focus exclusively on closing top talent.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Eliminate scheduling bottlenecks — candidates interview on their own time</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Consistent, unbiased scorecards backed by verifiable audio & text evidence</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Side-by-side candidate comparison across technical, behavioral, and communication metrics</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <Card key={s.label} className="border-slate-800 bg-slate-950/80 p-6 text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-2 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <p className="text-xs text-slate-400 font-medium">{s.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
