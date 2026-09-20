import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Clock, Car, Navigation, Flame } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="py-24 sm:py-32 bg-ember-black text-ember-cream relative overflow-hidden border-t border-ember-gold/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
            <MapPin className="w-4 h-4" />
            <span>THE DESTINATION</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ember-cream">
            FIND YOUR WAY TO THE TABLE.
          </h2>

          <p className="font-sans text-base text-ember-cream/75 font-light">
            Situated in the heart of Jubilee Hills, Hyderabad.
          </p>
        </div>

        {/* Location & Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Custom Styled Dark Map Preview Card */}
          <div className="lg:col-span-7 bg-ember-dark border border-ember-gold/25 p-6 sm:p-8 space-y-6 relative overflow-hidden">
            {/* Custom Stylized Map Canvas Visual */}
            <div className="relative aspect-[16/10] overflow-hidden border border-ember-gold/20 bg-[#121214] flex flex-col justify-between p-6">
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#D49E6A_1px,transparent_1px),linear-gradient(to_bottom,#D49E6A_1px,transparent_1px)] bg-[size:40px_40px]" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-sans tracking-[0.3em] text-ember-gold uppercase bg-ember-black/80 px-3 py-1 border border-ember-gold/30">
                  JUBILEE HILLS · ROAD NO. 36
                </span>
                <span className="text-xs font-serif italic text-ember-cream">Hyderabad, TG</span>
              </div>

              {/* Pin Indicator */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-2 py-8">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-ember-gold/20 border-2 border-ember-gold animate-ping absolute inset-0" />
                  <div className="w-12 h-12 rounded-full bg-ember-gold text-ember-black flex items-center justify-center shadow-2xl relative z-10">
                    <Flame className="w-6 h-6 fill-ember-black" />
                  </div>
                </div>
                <div className="bg-ember-black/90 px-4 py-2 border border-ember-gold/40 text-center shadow-xl">
                  <p className="font-serif text-lg font-semibold text-ember-gold">EMBER & SPICE</p>
                  <p className="text-[10px] font-sans text-ember-cream/70 uppercase tracking-widest">Road No. 36, Jubilee Hills</p>
                </div>
              </div>

              {/* Map Footer Info */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-sans text-ember-cream/70">
                <span>17.4312° N, 78.4071° E</span>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-ember-gold hover:underline font-semibold uppercase tracking-wider"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>OPEN IN GOOGLE MAPS</span>
                </a>
              </div>
            </div>

            {/* Nearby Landmarks & Amenities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-ember-gold font-semibold flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Nearby Landmarks</span>
                </h4>
                <ul className="text-xs text-ember-cream/70 font-sans space-y-1 list-disc list-inside">
                  {RESTAURANT_INFO.nearbyLandmarks.map((lm, idx) => (
                    <li key={idx}>{lm}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-ember-gold font-semibold flex items-center space-x-1.5">
                  <Car className="w-3.5 h-3.5" />
                  <span>Arrival & Valet</span>
                </h4>
                <p className="text-xs text-ember-cream/70 font-sans font-light leading-relaxed">
                  Complimentary valet parking available at our private entrance on Road No. 36.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.2em] uppercase hover:bg-ember-gold-light transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* Opening Hours Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-ember-dark border border-ember-gold/25 p-6 sm:p-8 space-y-6">
              <div className="flex items-center space-x-2 text-xs font-sans tracking-[0.2em] text-ember-gold uppercase font-semibold">
                <Clock className="w-4 h-4" />
                <span>OPENING HOURS</span>
              </div>

              <div className="space-y-6 text-sm font-sans">
                {RESTAURANT_INFO.hours.map((h, idx) => (
                  <div key={idx} className="pb-4 border-b border-ember-gold/15 last:border-0 last:pb-0 space-y-1">
                    <p className="font-serif text-lg text-ember-cream font-medium">
                      {h.days}
                    </p>
                    {h.text ? (
                      <p className="text-xs text-ember-gold italic font-serif">
                        {h.text}
                      </p>
                    ) : (
                      <div className="text-xs text-ember-cream/70 font-light space-y-0.5">
                        <div className="flex justify-between">
                          <span>Lunch:</span>
                          <span className="text-ember-gold">{h.lunch}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Dinner:</span>
                          <span className="text-ember-gold">{h.dinner}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 bg-ember-black border-l-2 border-ember-gold">
                <p className="text-xs italic font-serif text-ember-cream/90">
                  "{RESTAURANT_INFO.closingNote}"
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
