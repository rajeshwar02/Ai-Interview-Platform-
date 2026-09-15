import React from 'react';
import { createBrowserRouter, RouterProvider, useParams, useNavigate } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { RecruiterLayout } from '../layouts/RecruiterLayout';
import { CandidateLayout } from '../layouts/CandidateLayout';
import { LandingPage } from '../features/landing/LandingPage';
import { LoginPage } from '../features/auth/LoginPage';
import { RegisterPage } from '../features/auth/RegisterPage';
import { ProtectedRoute } from './ProtectedRoute';
import { CopilotPage } from '../features/copilot/CopilotPage';

// Placeholder views for subsequent phases
const DashboardPlaceholder = () => (
  <div className="p-8 border border-slate-800 rounded-2xl bg-slate-900/40 text-center space-y-3">
    <h2 className="text-2xl font-bold text-white">Recruiter Dashboard</h2>
    <p className="text-sm text-slate-400">Phase 2: Dashboard metrics, active jobs, and pipeline charts</p>
  </div>
);

const JobsPlaceholder = () => (
  <div className="p-8 border border-slate-800 rounded-2xl bg-slate-900/40 text-center space-y-3">
    <h2 className="text-2xl font-bold text-white">Jobs Management</h2>
    <p className="text-sm text-slate-400">Phase 2: Job listing, filtering, search, and status controls</p>
  </div>
);

const CandidatesPlaceholder = () => (
  <div className="p-8 border border-slate-800 rounded-2xl bg-slate-900/40 text-center space-y-3">
    <h2 className="text-2xl font-bold text-white">Candidates Directory</h2>
    <p className="text-sm text-slate-400">Phase 3: Candidates list, invitation generator, and comparison matrix</p>
  </div>
);

const InterviewsPlaceholder = () => (
  <div className="p-8 border border-slate-800 rounded-2xl bg-slate-900/40 text-center space-y-3">
    <h2 className="text-2xl font-bold text-white">Interviews Management</h2>
    <p className="text-sm text-slate-400">Phase 3: Scheduled and completed AI interviews</p>
  </div>
);

const InterviewDetailPlaceholder = () => {
  const { interviewId } = useParams<{ interviewId: string }>();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="p-8 border border-slate-800 rounded-2xl bg-slate-900/40 text-center space-y-3">
        <h2 className="text-2xl font-bold text-white">Interview Details</h2>
        <p className="text-sm text-slate-400">Phase 3: Interview transcript, scoring breakdown, and candidate evaluation</p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate(`/app/interviews/${interviewId}/copilot`)}
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 border border-indigo-400/30 transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>
          AI Interview Copilot
        </button>
      </div>
    </div>
  );
};

const ReportPlaceholder = () => (
  <div className="p-8 border border-slate-800 rounded-2xl bg-slate-900/40 text-center space-y-3">
    <h2 className="text-2xl font-bold text-white">Candidate Scorecard Report</h2>
    <p className="text-sm text-slate-400">Phase 3: Category breakdown, transcripts, and AI hiring recommendation</p>
  </div>
);

const CandidateRoomPlaceholder = () => (
  <div className="min-h-screen flex items-center justify-center p-8 text-center space-y-3">
    <div className="max-w-md space-y-4">
      <h2 className="text-2xl font-bold text-white">AI Interview Room</h2>
      <p className="text-sm text-slate-400">Phase 4: Dynamic voice avatar, transcript timeline, and question progression</p>
    </div>
  </div>
);

export const router = createBrowserRouter([
  // Public Routes (Landing, Auth)
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },

  // Recruiter Protected Portal Routes
  {
    path: '/app',
    element: <ProtectedRoute />,
    children: [
      {
        element: <RecruiterLayout />,
        children: [
          { path: 'dashboard', element: <DashboardPlaceholder /> },
          { path: 'jobs', element: <JobsPlaceholder /> },
          { path: 'jobs/new', element: <JobsPlaceholder /> },
          { path: 'jobs/:jobId', element: <JobsPlaceholder /> },
          { path: 'jobs/:jobId/analyze', element: <JobsPlaceholder /> },
          { path: 'jobs/:jobId/interview-config', element: <JobsPlaceholder /> },
          { path: 'candidates', element: <CandidatesPlaceholder /> },
          { path: 'candidates/:candidateId', element: <CandidatesPlaceholder /> },
          { path: 'interviews', element: <InterviewsPlaceholder /> },
          { path: 'interviews/:interviewId', element: <InterviewDetailPlaceholder /> },
          { path: 'interviews/:interviewId/copilot', element: <CopilotPage /> },
          { path: 'reports/:reportId', element: <ReportPlaceholder /> },
          { path: 'settings', element: <DashboardPlaceholder /> },
        ],
      },
    ],
  },

  // Candidate Interview Entrance & Room Routes
  {
    path: '/interview',
    element: <CandidateLayout />,
    children: [
      { path: ':token', element: <CandidateRoomPlaceholder /> },
      { path: ':token/verify', element: <CandidateRoomPlaceholder /> },
      { path: ':token/instructions', element: <CandidateRoomPlaceholder /> },
      { path: ':token/system-check', element: <CandidateRoomPlaceholder /> },
      { path: ':token/room', element: <CandidateRoomPlaceholder /> },
      { path: ':token/coding', element: <CandidateRoomPlaceholder /> },
      { path: ':token/completed', element: <CandidateRoomPlaceholder /> },
    ],
  },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
