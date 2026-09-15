import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';

export default function FinalCTA({ onOpenReservation }) {
  return (
    <section className="relative py-32 sm:py-44 bg-ember-black text-ember-cream overflow-hidden border-t border-ember-gold/20">
      {/* Dark Restaurant / Flame Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=90&w=2000"
          alt="Ember & Spice Table Set"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ember-black via-transparent to-ember-black opacity-90" />
        <div className="absolute inset-0 bg-ember-glow opacity-40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-ember-gold/20 border border-ember-gold/40 text-ember-gold text-xs font-sans tracking-[0.3em] uppercase">
          <Flame className="w-4 h-4" />
          <span>JOIN US IN HYDERABAD</span>
        </div>

        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-ember-cream leading-[0.95]">
          THE TABLE <br />
          <span className="italic text-ember-gold">IS SET.</span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-ember-cream/80 font-light max-w-lg mx-auto italic">
          Experience contemporary Indian dining reimagined through fire and regional tradition.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-10 py-4 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-ember-gold-light transition-all duration-300 shadow-2xl shadow-ember-gold/20 flex items-center justify-center space-x-2"
          >
            <span>RESERVE A TABLE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            to="/menu"
            className="w-full sm:w-auto px-10 py-4 border border-ember-cream/30 text-ember-cream hover:border-ember-gold hover:text-ember-gold font-sans font-medium text-xs tracking-[0.25em] uppercase transition-all duration-300 bg-ember-black/60 backdrop-blur-sm"
          >
            EXPLORE MENU →
          </Link>
        </div>
      </div>
    </section>
  );
}
