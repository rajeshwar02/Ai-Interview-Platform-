import React from 'react';
import { Hero } from './components/Hero';
import { RoleSelectorDemo } from './components/RoleSelectorDemo';
import { HowItWorks } from './components/HowItWorks';
import { FeaturesGrid } from './components/FeaturesGrid';
import { RecruiterBenefits } from './components/RecruiterBenefits';
import { LandingCTA } from './components/LandingCTA';

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <RoleSelectorDemo />
      <HowItWorks />
      <FeaturesGrid />
      <RecruiterBenefits />
      <LandingCTA />
    </div>
  );
};
