import React, { useState } from 'react';
import {
  Code,
  Calculator,
  TrendingUp,
  Users,
  Building2,
  Stethoscope,
  CheckCircle,
  Sliders,
  Sparkles,
} from 'lucide-react';
import { Card } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';

export const RoleSelectorDemo: React.FC = () => {
  const [selectedRoleId, setSelectedRoleId] = useState('tech');

  const demoRoles = [
    {
      id: 'tech',
      icon: Code,
      title: 'Software Developer',
      industry: 'Technology',
      rounds: ['System Design', 'Monaco Code Workspace', 'Concurrency & DBs'],
      sampleQuestion: 'How do you prevent memory leaks when establishing long-lived WebSocket subscriptions in React single-page apps?',
      evaluationBreakdown: [
        { name: 'Technical Architecture', weight: 40 },
        { name: 'Code Quality & Tests', weight: 30 },
        { name: 'Problem Solving', weight: 15 },
        { name: 'Communication', weight: 15 },
      ],
      specialFeature: 'Includes live Monaco Code Editor with automated test cases',
    },
    {
      id: 'finance',
      icon: Calculator,
      title: 'Financial Accountant',
      industry: 'Corporate Finance',
      rounds: ['US GAAP Standards', 'Audit Case Study', 'Ethics & Compliance'],
      sampleQuestion: 'Under ASC 606 revenue recognition rules, how do you handle bundled software license and maintenance obligation contracts?',
      evaluationBreakdown: [
        { name: 'GAAP & Tax Compliance', weight: 45 },
        { name: 'Audit & Reconciliation', weight: 25 },
        { name: 'Numerical Precision', weight: 15 },
        { name: 'Ethical Judgement', weight: 15 },
      ],
      specialFeature: 'Includes ledger variance analysis and statutory compliance scenarios',
    },
    {
      id: 'sales',
      icon: TrendingUp,
      title: 'Sales Executive',
      industry: 'Enterprise B2B',
      rounds: ['MEDDPICC Qualification', 'Live Objection Handling', 'Executive Pitch'],
      sampleQuestion: 'If a prospective VP of Engineering objects that migration downtime is too risky, how do you reframe the discussion?',
      evaluationBreakdown: [
        { name: 'Objection Handling', weight: 35 },
        { name: 'Discovery & Need Mapping', weight: 25 },
        { name: 'Executive Presence', weight: 25 },
        { name: 'Methodology Rigor', weight: 15 },
      ],
      specialFeature: 'Includes dynamic AI roleplay with real-time pushback simulation',
    },
    {
      id: 'hr',
      icon: Users,
      title: 'HR Manager / HRBP',
      industry: 'Human Resources',
      rounds: ['Workforce Planning', 'Conflict De-escalation', 'Labor Regulations'],
      sampleQuestion: 'How do you handle a sensitive employee dispute involving alleged managerial bias while maintaining legal compliance?',
      evaluationBreakdown: [
        { name: 'Conflict Resolution & EQ', weight: 35 },
        { name: 'Labor Law & Compliance', weight: 30 },
        { name: 'Strategic Alignment', weight: 20 },
        { name: 'Communication', weight: 15 },
      ],
      specialFeature: 'Evaluates emotional intelligence, mediation tactics, and labor law boundaries',
    },
    {
      id: 'civil',
      icon: Building2,
      title: 'Civil Engineer',
      industry: 'Infrastructure',
      rounds: ['Structural Load Analysis', 'ACI / AISC Building Codes', 'Site Safety'],
      sampleQuestion: 'What stress tensor formulas do you apply to determine shear capacity in reinforced concrete beams subject to dynamic wind load?',
      evaluationBreakdown: [
        { name: 'Structural Calculations', weight: 40 },
        { name: 'Building Code Adherence', weight: 25 },
        { name: 'Risk & Field Safety', weight: 20 },
        { name: 'Project Coordination', weight: 15 },
      ],
      specialFeature: 'Assesses engineering physics, building codes, and structural safety calculations',
    },
    {
      id: 'health',
      icon: Stethoscope,
      title: 'Healthcare Manager',
      industry: 'Medical & Clinical',
      rounds: ['Clinical Workflow', 'HIPAA Regulation', 'Patient Triage Protocols'],
      sampleQuestion: 'What operational protocols do you enforce to safeguard electronic protected health information (ePHI) during emergency transfers?',
      evaluationBreakdown: [
        { name: 'HIPAA & Regulatory Compliance', weight: 40 },
        { name: 'Triage & Protocol Execution', weight: 30 },
        { name: 'Crisis Communication', weight: 20 },
        { name: 'Patient Advocacy', weight: 10 },
      ],
      specialFeature: 'Evaluates HIPAA regulatory compliance and clinical triage procedures',
    },
  ];

  const currentRole = demoRoles.find((r) => r.id === selectedRoleId) || demoRoles[0];

  return (
    <section id="any-role" className="py-20 bg-[#090d14] relative border-t border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="indigo" size="md" className="font-mono">
            UNIVERSAL ROLE MODEL
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for <span className="text-indigo-400">every profession</span> and industry.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Never locked to software engineering. The platform ingests any job description and constructs custom round structures, evaluation rubrics, and dynamic AI interview questions tailored to that specific field.
          </p>
        </div>

        {/* Role Selector Tabs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {demoRoles.map((r) => {
            const Icon = r.icon;
            const isSelected = selectedRoleId === r.id;
            return (
              <button
                key={r.id}
                onClick={() => setSelectedRoleId(r.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all ${
                  isSelected
                    ? 'border-indigo-500 bg-indigo-600/15 text-white shadow-lg shadow-indigo-500/10'
                    : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-6 h-6 mb-2 ${isSelected ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span className="text-xs font-semibold">{r.title}</span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">{r.industry}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Role Breakdown Card */}
        <Card className="border-slate-800 bg-slate-950/90 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: AI Question Generation & Round Structure */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{currentRole.title}</h3>
                  <p className="text-xs text-indigo-400 font-mono">{currentRole.industry} Blueprint</p>
                </div>
              </div>

              {/* Sample AI Generated Question */}
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-5 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-indigo-300">
                  <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> Dynamic AI Question Sample</span>
                  <span className="text-[10px] font-mono text-slate-400">Adaptive Difficulty</span>
                </div>
                <p className="text-sm text-slate-100 italic leading-relaxed">
                  "{currentRole.sampleQuestion}"
                </p>
              </div>

              {/* Special capability callout */}
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 p-3 rounded-lg font-medium">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>{currentRole.specialFeature}</span>
              </div>
            </div>

            {/* Right: Evaluation Criteria Weights */}
            <div className="space-y-4 bg-slate-900/60 p-6 rounded-xl border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                AI Evaluation Rubric Weights
              </h4>
              <div className="space-y-3">
                {currentRole.evaluationBreakdown.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="text-indigo-400 font-mono font-semibold">{item.weight}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${item.weight}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
