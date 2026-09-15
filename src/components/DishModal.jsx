import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Flame, Check, Utensils } from 'lucide-react';

export default function DishModal({ dish, onClose, onAddToReservationNotes, isAddedToNotes }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!dish) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ember-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl bg-ember-dark border border-ember-gold/30 shadow-2xl overflow-hidden my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-ember-black/70 hover:bg-ember-gold text-ember-cream hover:text-ember-black transition-colors rounded-full border border-ember-gold/20"
            aria-label="Close Dish Details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Image Column */}
            <div className="md:col-span-6 relative aspect-square md:aspect-auto min-h-[280px] md:min-h-[420px] overflow-hidden bg-ember-black">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ember-dark via-transparent to-transparent md:hidden" />
              
              {dish.isChefSpecial && (
                <div className="absolute top-4 left-4 bg-ember-gold text-ember-black px-3 py-1 text-[10px] font-sans font-semibold tracking-widest uppercase flex items-center space-x-1.5 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>CHEF SPECIAL</span>
                </div>
              )}
            </div>

            {/* Content Column */}
            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-xs font-sans tracking-[0.2em] text-ember-gold uppercase">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{dish.category}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ember-cream leading-tight">
                    {dish.name}
                  </h3>
                  <span className="font-serif text-2xl font-semibold text-ember-gold whitespace-nowrap">
                    ₹{dish.price}
                  </span>
                </div>

                <p className="font-sans text-sm text-ember-cream/80 leading-relaxed font-light">
                  {dish.description}
                </p>

                {/* Dietary Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {dish.isVegetarian && (
                    <span className="px-2.5 py-0.5 border border-emerald-500/40 text-emerald-400 bg-emerald-950/30 text-[10px] font-sans tracking-wider uppercase">
                      Vegetarian
                    </span>
                  )}
                  {dish.isVegan && (
                    <span className="px-2.5 py-0.5 border border-teal-500/40 text-teal-300 bg-teal-950/30 text-[10px] font-sans tracking-wider uppercase">
                      Vegan
                    </span>
                  )}
                  {dish.isGlutenFree && (
                    <span className="px-2.5 py-0.5 border border-amber-500/40 text-amber-300 bg-amber-950/30 text-[10px] font-sans tracking-wider uppercase">
                      Gluten-Free
                    </span>
                  )}
                </div>

                {/* Flavor Profile / Ingredients */}
                <div className="pt-4 border-t border-ember-gold/15 space-y-3">
                  {dish.ingredients && (
                    <div>
                      <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-ember-gold font-semibold mb-2">
                        Key Ingredients
                      </h4>
                      <ul className="text-xs text-ember-cream/70 font-sans space-y-1 list-disc list-inside">
                        {dish.ingredients.map((ing, idx) => (
                          <li key={idx}>{ing}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {dish.flavorNotes && (
                    <div className="bg-ember-black/50 p-3 border-l-2 border-ember-gold">
                      <span className="text-[10px] uppercase font-sans tracking-widest text-ember-gold block mb-0.5">
                        Flavor Profile
                      </span>
                      <p className="text-xs italic text-ember-cream/90 font-serif">
                        "{dish.flavorNotes}"
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button: Add to Reservation Notes */}
              <div className="pt-4 border-t border-ember-gold/15">
                <button
                  onClick={() => onAddToReservationNotes?.(dish)}
                  className={`w-full py-3.5 px-4 font-sans font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isAddedToNotes
                      ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/40'
                      : 'bg-ember-gold text-ember-black hover:bg-ember-gold-light'
                  }`}
                >
                  {isAddedToNotes ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>ADDED TO RESERVATION NOTES</span>
                    </>
                  ) : (
                    <>
                      <Utensils className="w-4 h-4" />
                      <span>ADD TO RESERVATION NOTES</span>
                    </>
                  )}
                </button>
                <p className="text-[10px] text-center text-ember-cream/50 font-sans mt-2">
                  This will pre-fill your table reservation request with your preferred dish interest.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
