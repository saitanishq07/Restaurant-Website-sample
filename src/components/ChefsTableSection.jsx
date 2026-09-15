import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Calendar, Users, Wine, Utensils } from 'lucide-react';

export default function ChefsTableSection({ onOpenReservation }) {
  const highlights = [
    { icon: Utensils, text: '7-Course Tasting Menu' },
    { icon: Sparkles, text: 'Seasonal Ingredients' },
    { icon: Wine, text: 'Wine Pairing Option' },
    { icon: Users, text: 'Limited Seating (8 Guests Max)' },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-ember-black text-ember-cream overflow-hidden border-t border-ember-gold/15">
      {/* Background Image with Dark Hearth Backdrop */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=2000"
          alt="The Chef's Table Experience"
          className="w-full h-full object-cover filter brightness-[0.35] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ember-black via-ember-black/80 to-ember-black/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl space-y-8">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-ember-gold/20 border border-ember-gold/40 text-ember-gold text-xs font-sans tracking-[0.25em] uppercase">
            <Flame className="w-3.5 h-3.5" />
            <span>EXCLUSIVE CULINARY PERFORMANCE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-ember-cream leading-[1.05]">
            THE CHEF'S <br />
            <span className="italic text-ember-gold">TABLE</span>
          </h2>

          <p className="font-sans text-base sm:text-xl text-ember-cream/90 font-light leading-relaxed">
            "An intimate tasting experience created personally by Chef Arjun Rao."
          </p>

          <p className="font-sans text-xs sm:text-sm text-ember-cream/70 font-light leading-relaxed">
            Seated directly around our live flame hearth, guests experience an uninterrupted 7-course multi-sensory progression of flame-kissed dishes, rare estate spices, and bespoke sommelier pairings.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {highlights.map((h, i) => {
              const IconComp = h.icon;
              return (
                <div key={i} className="flex items-center space-x-3 p-3 bg-ember-dark/80 border border-ember-gold/20 backdrop-blur-md">
                  <IconComp className="w-4 h-4 text-ember-gold shrink-0" />
                  <span className="text-xs font-sans text-ember-cream tracking-wide font-medium">{h.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-4 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-ember-gold-light transition-all duration-300 shadow-xl shadow-ember-gold/10"
            >
              ENQUIRE ABOUT CHEF'S TABLE
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
