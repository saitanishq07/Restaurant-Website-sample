import React from 'react';
import IntroSection from '../components/IntroSection';
import StatementSection from '../components/StatementSection';
import StoryTimeline from '../components/StoryTimeline';
import FinalCTA from '../components/FinalCTA';
import { Flame } from 'lucide-react';

export default function StoryPage({ onOpenReservation }) {
  return (
    <div className="pt-28 bg-ember-black text-ember-cream min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center py-12 space-y-4">
        <div className="inline-flex items-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
          <Flame className="w-4 h-4" />
          <span>HERITAGE & CRAFT</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-ember-cream">
          OUR STORY
        </h1>
        <p className="font-sans text-base sm:text-lg text-ember-cream/80 max-w-xl mx-auto font-light italic">
          "How passion for open embers and regional Indian ingredients gave birth to Ember & Spice."
        </p>
      </div>

      <IntroSection />
      <StatementSection />
      <StoryTimeline />
      <FinalCTA onOpenReservation={onOpenReservation} />
    </div>
  );
}
