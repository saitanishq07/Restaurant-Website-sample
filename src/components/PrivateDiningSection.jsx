import React from 'react';
import { Flame } from 'lucide-react';

export default function PrivateDiningSection({ onOpenReservation }) {
  const occasions = [
    { title: 'Celebrations', text: 'Milestone birthdays, family reunions, and festive honors.' },
    { title: 'Corporate Dinners', text: 'Executive hosting with quiet ambient privacy.' },
    { title: 'Anniversaries', text: 'Romance crafted around custom wine flights and candlelit hearth light.' },
    { title: 'Intimate Gatherings', text: 'Tailored tasting progressions for up to 18 guests.' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-ember-black text-ember-cream relative overflow-hidden border-t border-ember-gold/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
              <Flame className="w-4 h-4" />
              <span>BESPOKE GATHERINGS</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ember-cream leading-[1.08]">
              PRIVATE MOMENTS. <br />
              <span className="italic text-ember-gold">MEMORABLE TABLES.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-ember-cream/80 font-light leading-relaxed">
              Our Private Dining Suite offers complete sanctuary in Jubilee Hills. Featuring a dedicated butler, private entrance, acoustic tuning, and custom menus designed with Chef Arjun.
            </p>

            {/* Occasions List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {occasions.map((occ, idx) => (
                <div key={idx} className="p-4 bg-ember-dark border border-ember-gold/15 space-y-1">
                  <h4 className="font-serif text-lg text-ember-gold font-normal">
                    {occ.title}
                  </h4>
                  <p className="text-xs font-sans text-ember-cream/70 font-light">
                    {occ.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="px-8 py-4 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-ember-gold-light transition-all duration-300"
              >
                ENQUIRE FOR PRIVATE DINING
              </button>
            </div>
          </div>

          {/* Immersive Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 aspect-[4/5] overflow-hidden border border-ember-gold/20 group">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200"
                alt="Ember & Spice Private Dining Suite"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ember-black/80 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 w-full h-full border border-ember-gold/20 pointer-events-none hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
}
