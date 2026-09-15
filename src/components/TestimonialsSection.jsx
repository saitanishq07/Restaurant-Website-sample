import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/restaurantData';
import { Quote, Flame } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-ember-black text-ember-cream relative overflow-hidden border-t border-ember-gold/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
            <Flame className="w-4 h-4" />
            <span>CRITICAL PRAISE</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ember-cream">
            GUEST REFLECTIONS
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 bg-ember-dark border border-ember-gold/20 relative flex flex-col justify-between space-y-6"
            >
              <Quote className="w-8 h-8 text-ember-gold/20" />

              <blockquote className="font-serif text-lg sm:text-xl italic text-ember-cream font-normal leading-relaxed">
                "{t.quote}"
              </blockquote>

              <div className="pt-4 border-t border-ember-gold/15 space-y-0.5">
                <p className="font-sans text-xs font-semibold tracking-wider text-ember-gold uppercase">
                  {t.author}
                </p>
                <p className="text-[10px] font-sans text-ember-cream/60 uppercase tracking-widest">
                  {t.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
