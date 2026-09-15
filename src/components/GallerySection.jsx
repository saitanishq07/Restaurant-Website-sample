import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { Flame, Maximize2 } from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['ALL', 'FOOD', 'INTERIORS', 'CHEF', 'EXPERIENCE'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'ALL') return true;
    return item.category === activeCategory;
  });

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-ember-black text-ember-cream relative border-t border-ember-gold/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
            <Flame className="w-4 h-4" />
            <span>VISUAL STORYTELLING</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ember-cream">
            GALLERY
          </h2>

          <p className="font-sans text-base text-ember-cream/75 font-light">
            An editorial glimpse into our hearth, dishes, architecture and atmosphere.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-sans tracking-[0.2em] uppercase font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-ember-gold text-ember-black font-semibold'
                  : 'bg-ember-dark text-ember-cream/70 hover:text-ember-cream border border-ember-gold/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(index)}
                className="group relative cursor-pointer overflow-hidden border border-ember-gold/20 bg-ember-dark break-inside-avoid"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ember-black/90 via-ember-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-[9px] font-sans tracking-[0.3em] text-ember-gold uppercase font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-ember-cream">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center space-x-1.5 text-xs text-ember-gold font-sans uppercase tracking-widest font-medium">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>VIEW FULLSCREEN</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
