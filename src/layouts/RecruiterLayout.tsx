import React from 'react';
import { Outlet } from 'react-router-dom';
import { RecruiterSidebar } from '../components/common/RecruiterSidebar';
import { RecruiterHeader } from '../components/common/RecruiterHeader';

export const RecruiterLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#090d14] text-slate-100 antialiased">
      <RecruiterSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <RecruiterHeader title="Recruiter Dashboard" subtitle="Manage active job postings, AI interviews, and candidate evaluations" />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
