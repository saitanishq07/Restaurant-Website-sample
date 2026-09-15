import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';

export default function IntroSection() {
  return (
    <section className="py-24 sm:py-32 bg-ember-black text-ember-cream relative overflow-hidden border-t border-ember-gold/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="flex items-center space-x-3 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
              <Flame className="w-4 h-4 text-ember-gold" />
              <span>THE EMBERS & PHILOSOPHY</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ember-cream leading-[1.1]">
              INDIA, <br />
              <span className="italic text-ember-gold">REIMAGINED.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-ember-cream/80 leading-relaxed font-light">
              At Ember & Spice, familiar Indian flavors meet modern technique. Our menu follows the seasons, celebrates regional ingredients and brings the drama of fire to the table.
            </p>

            <div className="pt-4 flex items-center space-x-8 border-t border-ember-gold/15">
              <div>
                <p className="font-serif text-3xl font-medium text-ember-gold">600°F</p>
                <p className="text-xs text-ember-cream-muted uppercase tracking-wider font-sans mt-1">Hearth Embers</p>
              </div>
              <div className="h-10 w-[1px] bg-ember-gold/20" />
              <div>
                <p className="font-serif text-3xl font-medium text-ember-gold">14</p>
                <p className="text-xs text-ember-cream-muted uppercase tracking-wider font-sans mt-1">Regional Spices</p>
              </div>
              <div className="h-10 w-[1px] bg-ember-gold/20" />
              <div>
                <p className="font-serif text-3xl font-medium text-ember-gold">7</p>
                <p className="text-xs text-ember-cream-muted uppercase tracking-wider font-sans mt-1">Course Tasting</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/story"
                className="inline-flex items-center space-x-3 text-xs font-sans tracking-[0.25em] text-ember-gold hover:text-ember-gold-light uppercase group font-semibold"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Editorial Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 aspect-[4/5] overflow-hidden border border-ember-gold/20 group">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200"
                alt="Open flame hearth at Ember & Spice"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ember-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-ember-black/80 backdrop-blur-md border border-ember-gold/15">
                <p className="font-serif italic text-sm text-ember-cream">
                  "Fire is not merely a cooking medium; it is an ingredient with its own memory and character."
                </p>
                <p className="text-[10px] font-sans tracking-widest text-ember-gold uppercase mt-2">
                  — Chef Arjun Rao
                </p>
              </div>
            </div>

            {/* Decorative fine gold frame line offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-ember-gold/20 pointer-events-none -z-0 hidden sm:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
