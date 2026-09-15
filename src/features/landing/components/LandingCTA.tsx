import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export const LandingCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#090d14] relative border-t border-slate-800/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/80 via-slate-950 to-purple-950/80 p-8 sm:p-14 text-center overflow-hidden shadow-2xl shadow-indigo-500/10 backdrop-blur-xl">
          {/* Subtle glow circle */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
              <Sparkles className="w-3.5 h-3.5" /> Ready to Upgrade Your Hiring Pipeline?
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Start interviewing candidates with AI today.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Create your first job blueprint in less than 2 minutes. Free trial with up to 10 automated interviews included.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                variant="ai"
                size="lg"
                className="w-full sm:w-auto px-8 font-semibold text-sm"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={() => navigate('/register')}
              >
                Start Hiring Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-sm font-semibold border-slate-700"
                onClick={() => navigate('/login')}
              >
                Sign In to Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
