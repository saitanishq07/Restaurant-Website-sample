import React from 'react';
import { motion } from 'framer-motion';
import { INSTAGRAM_TILES, RESTAURANT_INFO } from '../data/restaurantData';
import { Instagram, Heart, Flame } from 'lucide-react';

export default function InstagramGrid() {
  return (
    <section className="py-24 sm:py-32 bg-ember-black text-ember-cream relative border-t border-ember-gold/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
            <Instagram className="w-4 h-4" />
            <span>{RESTAURANT_INFO.instagram}</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-ember-cream">
            FROM THE TABLE
          </h2>

          <p className="font-sans text-xs sm:text-sm text-ember-cream/70 font-light">
            Visual moments shared by our guests and culinary team.
          </p>
        </div>

        {/* 6-Tile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_TILES.map((tile) => (
            <motion.div
              key={tile.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square overflow-hidden bg-ember-dark border border-ember-gold/15 group cursor-pointer"
            >
              <img
                src={tile.image}
                alt={tile.caption}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 transition-transform duration-500 ease-out"
              />

              <div className="absolute inset-0 bg-ember-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-center">
                <Instagram className="w-5 h-5 text-ember-gold mx-auto" />
                <p className="text-[11px] font-sans text-ember-cream line-clamp-3 font-light leading-snug">
                  "{tile.caption}"
                </p>
                <div className="flex items-center justify-center space-x-1 text-[10px] font-sans text-ember-gold font-semibold">
                  <Heart className="w-3 h-3 fill-ember-gold" />
                  <span>{tile.likes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Link */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.25em] text-ember-gold hover:text-ember-gold-light uppercase font-semibold border-b border-ember-gold/40 pb-1"
          >
            <span>FOLLOW OUR JOURNEY →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
