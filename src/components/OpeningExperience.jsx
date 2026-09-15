import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OpeningExperience({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: Logo, 1: Tagline, 2: Fade Out

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete?.();
      return;
    }

    const timer1 = setTimeout(() => setStage(1), 700);
    const timer2 = setTimeout(() => setStage(2), 1600);
    const timer3 = setTimeout(() => {
      onComplete?.();
    }, 2100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    onComplete?.();
  };

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ember-black text-ember-cream px-6 select-none cursor-default"
        >
          {/* Subtle background ambient flame glow */}
          <div className="absolute inset-0 bg-ember-glow pointer-events-none opacity-40 animate-flame-glow" />

          <div className="relative z-10 text-center max-w-2xl">
            {stage === 0 && (
              <motion.div
                key="logo-stage"
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="space-y-3"
              >
                <div className="flex items-center justify-center space-x-2 text-ember-gold text-sm tracking-[0.3em] font-sans uppercase">
                  <span>HYDERABAD</span>
                  <span>·</span>
                  <span>INDIA</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-ember-cream">
                  EMBER <span className="text-ember-gold font-light">&</span> SPICE
                </h1>
              </motion.div>
            )}

            {stage === 1 && (
              <motion.div
                key="tagline-stage"
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="space-y-4"
              >
                <p className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-widest text-ember-cream uppercase">
                  FIRE. FLAVOR. STORIES.
                </p>
                <p className="text-xs sm:text-sm font-sans tracking-[0.25em] text-ember-gold uppercase">
                  Contemporary Indian Fine Dining
                </p>
              </motion.div>
            )}
          </div>

          {/* Quick Skip button */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-xs font-sans tracking-widest text-ember-cream/40 hover:text-ember-gold transition-colors duration-200 uppercase"
          >
            Skip Intro →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
