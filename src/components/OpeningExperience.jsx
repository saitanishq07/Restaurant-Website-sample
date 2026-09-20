import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OpeningExperience({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: Logo, 1: Tagline, 2: Done

  useEffect(() => {
    // Check prefers-reduced-motion
    try {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        onComplete?.();
        return;
      }
    } catch (e) {
      // Ignore matchMedia errors
    }

    const t1 = setTimeout(() => setStage(1), 500);
    const t2 = setTimeout(() => setStage(2), 1200);
    const t3 = setTimeout(() => {
      onComplete?.();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const handleDismiss = () => {
    setStage(2);
    onComplete?.();
  };

  if (stage >= 2) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
        onClick={handleDismiss}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ember-black text-ember-cream px-6 select-none cursor-pointer"
      >
        {/* Ambient flame glow */}
        <div className="absolute inset-0 bg-ember-glow pointer-events-none opacity-40 animate-flame-glow" />

        <div className="relative z-10 text-center max-w-2xl pointer-events-none">
          {stage === 0 && (
            <motion.div
              key="logo-stage"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs sm:text-sm tracking-[0.3em] font-sans uppercase">
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
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
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

        <span className="absolute bottom-8 text-[11px] font-sans tracking-widest text-ember-cream/40 uppercase pointer-events-none">
          Click anywhere to skip
        </span>
      </motion.div>
    </AnimatePresence>
  );
}
