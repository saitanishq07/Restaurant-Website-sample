import React, { useState, useEffect } from 'react';

export default function OpeningExperience({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: Logo, 1: Tagline, 2: Fade Out
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 600);
    const t2 = setTimeout(() => {
      setFadingOut(true);
    }, 1400);

    const t3 = setTimeout(() => {
      onComplete?.();
    }, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setFadingOut(true);
    setTimeout(() => {
      onComplete?.();
    }, 300);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ember-black text-ember-cream px-6 select-none cursor-pointer transition-opacity duration-500 ease-out ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient flame glow */}
      <div className="absolute inset-0 bg-ember-glow pointer-events-none opacity-40 animate-pulse-slow" />

      <div className="relative z-10 text-center max-w-2xl pointer-events-none">
        {stage === 0 && (
          <div className="space-y-3 animate-fade-in">
            <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs sm:text-sm tracking-[0.3em] font-sans uppercase">
              <span>HYDERABAD</span>
              <span>·</span>
              <span>INDIA</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-ember-cream">
              EMBER <span className="text-ember-gold font-light">&</span> SPICE
            </h1>
          </div>
        )}

        {stage >= 1 && (
          <div className="space-y-3 animate-fade-in">
            <p className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-widest text-ember-cream uppercase">
              FIRE. FLAVOR. STORIES.
            </p>
            <p className="text-xs sm:text-sm font-sans tracking-[0.25em] text-ember-gold uppercase">
              Contemporary Indian Fine Dining
            </p>
          </div>
        )}
      </div>

      <span className="absolute bottom-8 text-[11px] font-sans tracking-widest text-ember-cream/40 uppercase pointer-events-none">
        Click anywhere to skip
      </span>
    </div>
  );
}
