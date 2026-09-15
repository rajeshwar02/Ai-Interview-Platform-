import React from 'react';
import { Sparkles } from 'lucide-react';

export const LoadingScreen: React.FC<{ message?: string }> = ({ message = 'Loading AI Workspace...' }) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#090d14] text-slate-100 p-4">
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 animate-ping absolute" />
        <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-xl shadow-indigo-600/40 relative z-10">
          <Sparkles className="w-7 h-7 text-white animate-pulse" />
        </div>
      </div>
      <p className="text-sm font-semibold text-slate-300 tracking-wide font-mono animate-pulse">{message}</p>
    </div>
  );
};
