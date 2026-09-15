import React from 'react';
import { Sparkles, Shield, Lock, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                Interview<span className="text-indigo-400">AI</span> Platform
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Universal AI-powered interview platform designed for modern talent acquisition teams across every industry — from Software Engineers to Financial Accountants, Sales Executives, and Civil Engineers.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> SOC2 Type II Certified
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-indigo-400" /> GDPR & EEOC Compliant
              </span>
            </div>
          </div>

          {/* Nav Columns */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">AI Job Analyzer</a></li>
              <li><a href="#any-role" className="hover:text-white transition-colors">Role Adaptation</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Coding Workspace</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Candidate Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-white transition-colors cursor-pointer">Engineering & Tech</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Finance & Accounting</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Enterprise B2B Sales</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Human Resources & HRBP</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Civil Infrastructure</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="hover:text-white transition-colors cursor-pointer">About Us</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Security Portal</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">API Documentation</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AI Interview Platform Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5" />
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
