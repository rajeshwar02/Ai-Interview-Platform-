import React from 'react';
import { Search, Bell, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/button';

export interface RecruiterHeaderProps {
  title?: string;
  subtitle?: string;
}

export const RecruiterHeader: React.FC<RecruiterHeaderProps> = ({ title, subtitle }) => {
  const { user, logout } = useAuthStore();

  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-6 backdrop-blur-md">
      <div>
        {title && <h1 className="text-lg font-bold text-white tracking-tight">{title}</h1>}
        {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        {/* Quick Search */}
        <div className="relative hidden md:block w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search jobs, candidates..."
            className="h-9 w-full rounded-lg border border-slate-800 bg-slate-900/90 pl-9 pr-3 text-xs text-slate-200 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500 ring-2 ring-slate-950" />
        </button>

        {/* User Info & Logout */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-800">
          <img
            src={user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
            alt="User avatar"
            className="w-8 h-8 rounded-full border border-indigo-500/40 object-cover"
          />
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-semibold text-white">{user?.name || 'Sarah Jenkins'}</span>
            <span className="text-[10px] text-slate-400">{user?.role || 'Senior Recruiter'}</span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => logout()}
            className="text-slate-400 hover:text-rose-400 ml-1"
            title="Log out"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
