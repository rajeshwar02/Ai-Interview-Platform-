import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Video,
  FileBarChart,
  Settings,
  Sparkles,
  PlusCircle,
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/button';

export const RecruiterSidebar: React.FC = () => {
  const navItems = [
    { label: 'Dashboard', path: '/app/dashboard', icon: LayoutDashboard },
    { label: 'Jobs', path: '/app/jobs', icon: Briefcase },
    { label: 'Candidates', path: '/app/candidates', icon: Users },
    { label: 'Interviews', path: '/app/interviews', icon: Video },
    { label: 'Candidate Comparison', path: '/app/reports/cand-1', icon: FileBarChart },
    { label: 'Settings', path: '/app/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 shrink-0 border-r border-slate-800/80 bg-slate-950/90 flex flex-col justify-between h-screen sticky top-0 z-30">
      <div className="p-5">
        {/* Brand */}
        <NavLink to="/app/dashboard" className="flex items-center gap-2.5 mb-8 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-white tracking-tight leading-none">
              Interview<span className="text-indigo-400">AI</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Recruiter Portal</span>
          </div>
        </NavLink>

        {/* Quick Action */}
        <div className="mb-6">
          <NavLink to="/app/jobs/new">
            <Button variant="ai" className="w-full justify-start text-xs font-semibold" leftIcon={<PlusCircle className="w-4 h-4" />}>
              Create New Job
            </Button>
          </NavLink>
        </div>

        {/* Nav Links */}
        <nav className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">Main Navigation</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all',
                    isActive
                      ? 'bg-indigo-600/15 text-indigo-300 font-semibold border border-indigo-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/80'
                  )
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Recruiter Workspace Info */}
      <div className="p-4 border-t border-slate-900 bg-slate-950/40">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80"
            alt="Company logo"
            className="w-8 h-8 rounded-lg object-cover border border-slate-800"
          />
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold text-white truncate">Acme Enterprise</span>
            <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> AI Agent Active
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
