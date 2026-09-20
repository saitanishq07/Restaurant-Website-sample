import React from 'react';
import { TIMELINE_MILESTONES } from '../data/restaurantData';
import { Flame } from 'lucide-react';

export default function StoryTimeline() {
  return (
    <section className="py-24 sm:py-32 bg-ember-black text-ember-cream relative overflow-hidden border-t border-ember-gold/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
            <Flame className="w-4 h-4" />
            <span>OUR GENESIS</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ember-cream">
            BUILT AROUND THE FIRE.
          </h2>

          <p className="font-sans text-base sm:text-lg text-ember-cream/80 font-light italic leading-relaxed">
            "Ember & Spice began with a simple idea: bring the energy of Indian cooking into a modern dining room without losing the soul of the food."
          </p>
        </div>

        {/* Timeline Desktop & Mobile Grid */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-ember-gold/20 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {TIMELINE_MILESTONES.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 p-4 md:px-12 text-left md:text-right">
                    <div className={`space-y-2 p-6 bg-ember-dark border border-ember-gold/20 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="font-serif text-3xl font-semibold text-ember-gold block">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-xl text-ember-cream font-normal">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-ember-cream/70 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Ember Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-ember-black border border-ember-gold text-ember-gold items-center justify-center shadow-lg z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-ember-gold" />
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
