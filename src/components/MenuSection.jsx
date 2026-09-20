import React, { useState } from 'react';
import { ArrowUpRight, Flame, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';
import DishModal from './DishModal';

export default function MenuSection({ onAddToReservationNotes, reservationNotes = [] }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedDish, setSelectedDish] = useState(null);

  const filteredDishes = MENU_ITEMS.filter((dish) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'VEGETARIAN') return dish.isVegetarian;
    return dish.category === activeCategory;
  });

  const isDishInNotes = (dishId) => {
    return reservationNotes.some((item) => item.id === dishId);
  };

  return (
    <section id="menu" className="py-24 sm:py-32 bg-ember-black text-ember-cream relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
            <Flame className="w-4 h-4" />
            <span>CURATED GASTRONOMY</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ember-cream">
            THE MENU
          </h2>
          
          <p className="font-sans text-base sm:text-lg text-ember-cream/80 font-light italic">
            "A journey through India's regions, interpreted through a contemporary lens."
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 mb-14 pb-2 border-b border-ember-gold/15">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 text-xs font-sans tracking-[0.2em] font-medium whitespace-nowrap uppercase transition-colors duration-300 ${
                  isActive ? 'text-ember-gold font-semibold' : 'text-ember-cream/60 hover:text-ember-cream'
                }`}
              >
                {cat.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-ember-gold" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              onClick={() => setSelectedDish(dish)}
              className="group cursor-pointer bg-ember-dark border border-ember-gold/15 hover:border-ember-gold/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-ember-black">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ember-dark via-transparent to-transparent opacity-80" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                  {dish.isChefSpecial && (
                    <span className="bg-ember-gold text-ember-black px-2.5 py-0.5 text-[9px] font-sans font-bold tracking-widest uppercase flex items-center space-x-1 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      <span>CHEF SPECIAL</span>
                    </span>
                  )}
                  {dish.isVegetarian && (
                    <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 text-[9px] font-sans font-semibold tracking-wider uppercase">
                      VEG
                    </span>
                  )}
                </div>

                {/* Desktop Hover Arrow */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-ember-black/70 rounded-full border border-ember-gold/40 text-ember-gold">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-ember-cream group-hover:text-ember-gold transition-colors duration-300 group-hover:translate-x-1">
                      {dish.name}
                    </h3>
                    <span className="font-serif text-xl font-semibold text-ember-gold whitespace-nowrap">
                      ₹{dish.price}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-ember-cream/70 line-clamp-2 font-light leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-ember-gold/10 flex items-center justify-between text-[11px] font-sans text-ember-cream/50">
                  <span className="uppercase tracking-widest font-medium text-ember-gold/70">
                    {dish.category}
                  </span>
                  <span className="group-hover:text-ember-gold transition-colors">
                    VIEW DETAILS →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <DishModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
          onAddToReservationNotes={onAddToReservationNotes}
          isAddedToNotes={isDishInNotes(selectedDish.id)}
        />
      )}
    </section>
  );
}
