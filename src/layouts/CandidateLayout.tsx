import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sparkles, Lock } from 'lucide-react';

export const CandidateLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#070a0f] text-slate-100 antialiased selection:bg-indigo-500/30">
      {/* Minimal Header */}
      <header className="h-14 border-b border-slate-800/60 bg-slate-950/80 px-6 flex items-center justify-between backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-sm text-white tracking-tight">
            AI Interview Lobby
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>Encrypted Session</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};
