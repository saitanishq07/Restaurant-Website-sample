import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EXPERIENCES } from '../data/restaurantData';
import { ArrowRight, Flame } from 'lucide-react';

export default function ExperiencesSection({ onOpenReservation }) {
  return (
    <section className="py-24 sm:py-32 bg-ember-black text-ember-cream relative border-t border-ember-gold/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
            <Flame className="w-4 h-4" />
            <span>TAILORED HOSPITALITY</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ember-cream">
            DINING EXPERIENCES
          </h2>
          <p className="font-sans text-base text-ember-cream/75 font-light">
            Three distinct journeys designed around atmosphere, privacy and culinary artistry.
          </p>
        </div>

        {/* Asymmetric Layout */}
        <div className="space-y-24">
          
          {/* Experience 1: À La Carte (Large Left Image, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden border border-ember-gold/20 group"
            >
              <img
                src={EXPERIENCES[0].image}
                alt={EXPERIENCES[0].title}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ember-black/80 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="text-[10px] font-sans tracking-[0.3em] text-ember-gold uppercase font-semibold">
                EXPERIENCE 01
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-ember-cream">
                {EXPERIENCES[0].title}
              </h3>
              <p className="font-serif italic text-lg text-ember-gold">
                "{EXPERIENCES[0].subtitle}"
              </p>
              <p className="font-sans text-sm text-ember-cream/70 font-light leading-relaxed">
                {EXPERIENCES[0].description}
              </p>
              
              <ul className="space-y-2 pt-2 border-t border-ember-gold/15">
                {EXPERIENCES[0].features.map((feat, idx) => (
                  <li key={idx} className="text-xs font-sans text-ember-cream/80 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-ember-gold rounded-full" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  to="/menu"
                  className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.2em] text-ember-gold hover:text-ember-gold-light uppercase font-semibold group"
                >
                  <span>EXPLORE À LA CARTE MENU</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Experience 2: Chef's Table (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 lg:order-1 order-2 space-y-6"
            >
              <span className="text-[10px] font-sans tracking-[0.3em] text-ember-gold uppercase font-semibold">
                EXPERIENCE 02
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-ember-cream">
                {EXPERIENCES[1].title}
              </h3>
              <p className="font-serif italic text-lg text-ember-gold">
                "{EXPERIENCES[1].subtitle}"
              </p>
              <p className="font-sans text-sm text-ember-cream/70 font-light leading-relaxed">
                {EXPERIENCES[1].description}
              </p>
              
              <ul className="space-y-2 pt-2 border-t border-ember-gold/15">
                {EXPERIENCES[1].features.map((feat, idx) => (
                  <li key={idx} className="text-xs font-sans text-ember-cream/80 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-ember-gold rounded-full" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={onOpenReservation}
                  className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.2em] text-ember-gold hover:text-ember-gold-light uppercase font-semibold group"
                >
                  <span>RESERVE CHEF'S TABLE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 lg:order-2 order-1 relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden border border-ember-gold/20 group"
            >
              <img
                src={EXPERIENCES[1].image}
                alt={EXPERIENCES[1].title}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ember-black/80 via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Experience 3: Private Dining (Full Width Portrait Composition) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden border border-ember-gold/20 group"
            >
              <img
                src={EXPERIENCES[2].image}
                alt={EXPERIENCES[2].title}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ember-black/80 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="text-[10px] font-sans tracking-[0.3em] text-ember-gold uppercase font-semibold">
                EXPERIENCE 03
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-ember-cream">
                {EXPERIENCES[2].title}
              </h3>
              <p className="font-serif italic text-lg text-ember-gold">
                "{EXPERIENCES[2].subtitle}"
              </p>
              <p className="font-sans text-sm text-ember-cream/70 font-light leading-relaxed">
                {EXPERIENCES[2].description}
              </p>
              
              <ul className="space-y-2 pt-2 border-t border-ember-gold/15">
                {EXPERIENCES[2].features.map((feat, idx) => (
                  <li key={idx} className="text-xs font-sans text-ember-cream/80 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-ember-gold rounded-full" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={onOpenReservation}
                  className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.2em] text-ember-gold hover:text-ember-gold-light uppercase font-semibold group"
                >
                  <span>INQUIRE FOR PRIVATE SUITE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
