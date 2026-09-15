import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { RecruiterLayout } from '../layouts/RecruiterLayout';
import { CandidateLayout } from '../layouts/CandidateLayout';
import { LandingPage } from '../features/landing/LandingPage';
import { LoginPage } from '../features/auth/LoginPage';
import { RegisterPage } from '../features/auth/RegisterPage';
import { ProtectedRoute } from './ProtectedRoute';

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
          { path: 'interviews/:interviewId', element: <InterviewsPlaceholder /> },
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
