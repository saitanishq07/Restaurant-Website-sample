import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero({ onOpenReservation }) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Subtle image scaling without aggressive parallax
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const textY = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ember-black text-ember-cream pt-20"
    >
      {/* Background Image with Cinematic Scale & Overlay */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=90&w=2000"
          alt="Ember & Spice Culinary Art"
          className="w-full h-full object-cover object-center filter brightness-50 contrast-110"
        />
        {/* Dark Editorial Vignette & Ember Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-ember-black via-ember-black/60 to-ember-black/40" />
        <div className="absolute inset-0 bg-ember-glow opacity-60 mix-blend-screen" />
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-8 py-16"
      >
        {/* Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center space-x-3 px-4 py-1.5 border border-ember-gold/30 bg-ember-dark/70 backdrop-blur-md rounded-full text-xs font-sans tracking-[0.3em] text-ember-gold uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 text-ember-gold" />
          <span>HYDERABAD · INDIA</span>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="space-y-2"
        >
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-ember-cream leading-[0.95]">
            FIRE. <br className="sm:hidden" />
            <span className="italic font-normal text-ember-gold">FLAVOR.</span> <br />
            STORIES.
          </h1>
        </motion.div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl text-base sm:text-xl font-sans font-light tracking-wide text-ember-cream/90 leading-relaxed italic"
        >
          "Contemporary Indian cuisine shaped by fire, season and memory."
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-ember-gold-light transition-all duration-300 shadow-lg shadow-ember-gold/10"
          >
            RESERVE A TABLE
          </button>
          
          <Link
            to="/menu"
            className="w-full sm:w-auto px-8 py-4 border border-ember-cream/30 text-ember-cream hover:border-ember-gold hover:text-ember-gold font-sans font-medium text-xs tracking-[0.25em] uppercase transition-all duration-300 bg-ember-black/40 backdrop-blur-sm"
          >
            EXPLORE THE MENU
          </Link>
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-ember-cream/60 hover:text-ember-gold transition-colors"
      >
        <span className="text-[10px] font-sans tracking-[0.3em] uppercase">SCROLL TO DISCOVER</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-ember-gold" />
      </motion.div>
    </section>
  );
}
