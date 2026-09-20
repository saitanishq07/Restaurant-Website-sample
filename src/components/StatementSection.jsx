import React from 'react';
import { motion } from 'framer-motion';

export default function StatementSection() {
  const words = ['WE', 'COOK', 'WITH', 'FIRE,', 'MEMORY', '&', 'IMAGINATION.'];

  return (
    <section className="relative py-36 sm:py-48 bg-ember-black overflow-hidden flex items-center justify-center border-y border-ember-gold/15">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000"
          alt="Ember & Spice Atmosphere"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ember-black via-transparent to-ember-black opacity-90" />
        <div className="absolute inset-0 bg-ember-glow opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className={`font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight ${
                word === 'FIRE,' || word === 'IMAGINATION.'
                  ? 'text-ember-gold italic font-normal'
                  : 'text-ember-cream'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-xs sm:text-sm font-sans tracking-[0.3em] text-ember-cream/70 uppercase"
        >
          EMBER & SPICE · JUBILEE HILLS · HYDERABAD
        </motion.p>
      </div>
    </section>
  );
}
