import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const currentImg = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ember-black/95 backdrop-blur-2xl p-4 sm:p-8 select-none transition-opacity duration-300">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-30 p-3 bg-ember-dark/80 hover:bg-ember-gold text-ember-cream hover:text-ember-black rounded-full border border-ember-gold/30 transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-ember-dark/80 hover:bg-ember-gold text-ember-cream hover:text-ember-black rounded-full border border-ember-gold/30 transition-colors"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 bg-ember-dark/80 hover:bg-ember-gold text-ember-cream hover:text-ember-black rounded-full border border-ember-gold/30 transition-colors"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Lightbox Image View */}
      <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center text-center space-y-4">
        <div className="relative overflow-hidden border border-ember-gold/30 shadow-2xl bg-ember-black">
          <img
            src={currentImg.image}
            alt={currentImg.title}
            className="max-h-[70vh] w-auto max-w-full object-contain mx-auto transition-all duration-300"
          />
        </div>

        <div className="space-y-1 max-w-xl">
          <span className="text-[10px] font-sans tracking-[0.3em] text-ember-gold uppercase font-semibold">
            {currentImg.category} · {currentIndex + 1} OF {images.length}
          </span>
          <h3 className="font-serif text-2xl font-normal text-ember-cream">
            {currentImg.title}
          </h3>
          {currentImg.caption && (
            <p className="font-sans text-xs text-ember-cream/70 font-light italic">
              "{currentImg.caption}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
