import React, { useState } from 'react';
import { EVENTS } from '../data/restaurantData';
import { Flame, Calendar, Clock, ArrowRight, X } from 'lucide-react';

export default function EventsSection({ onOpenReservation }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="py-24 sm:py-32 bg-ember-black text-ember-cream relative border-t border-ember-gold/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
            <Flame className="w-4 h-4" />
            <span>SPECIAL OCCASIONS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ember-cream">
            SEASONAL EVENTS
          </h2>
          <p className="font-sans text-base text-ember-cream/75 font-light">
            Collaborative evenings, hearth tastings and long-table Sunday feasts.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((evt) => (
            <div
              key={evt.id}
              className="bg-ember-dark border border-ember-gold/20 overflow-hidden flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
              onClick={() => setSelectedEvent(evt)}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-ember-black">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-ember-black/80 backdrop-blur-md px-3 py-1 border border-ember-gold/30 text-[10px] font-sans font-semibold text-ember-gold tracking-widest uppercase flex items-center space-x-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>{evt.date}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-2xl font-normal text-ember-cream group-hover:text-ember-gold transition-colors">
                    {evt.title}
                  </h3>
                  <p className="font-serif italic text-xs text-ember-gold">
                    "{evt.tagline}"
                  </p>
                  <p className="font-sans text-xs text-ember-cream/70 font-light line-clamp-3 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEvent(evt);
                  }}
                  className="w-full py-2.5 border border-ember-gold/30 text-ember-gold hover:bg-ember-gold hover:text-ember-black font-sans text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-ember-black/90 backdrop-blur-md transition-opacity duration-300"
          />

          <div className="relative z-10 w-full max-w-2xl bg-ember-dark border border-ember-gold/30 p-8 shadow-2xl overflow-hidden my-auto space-y-6">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 bg-ember-black/80 rounded-full text-ember-cream hover:text-ember-gold border border-ember-gold/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-xs font-sans text-ember-gold tracking-[0.25em] uppercase">
                <Calendar className="w-4 h-4" />
                <span>{selectedEvent.date} · {selectedEvent.time}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-ember-cream">
                {selectedEvent.title}
              </h3>
              
              <p className="font-serif italic text-lg text-ember-gold">
                "{selectedEvent.tagline}"
              </p>

              <div className="aspect-video overflow-hidden border border-ember-gold/20 my-4">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-sans text-sm text-ember-cream/80 leading-relaxed font-light">
                {selectedEvent.description}
              </p>
            </div>

            <div className="pt-4 border-t border-ember-gold/15 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setSelectedEvent(null);
                  onOpenReservation?.();
                }}
                className="flex-1 py-3.5 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.2em] uppercase hover:bg-ember-gold-light transition-colors"
              >
                RESERVE SEATS FOR EVENT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
