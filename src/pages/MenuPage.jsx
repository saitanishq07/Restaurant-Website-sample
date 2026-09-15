import React from 'react';
import MenuSection from '../components/MenuSection';
import ReservationSection from '../components/ReservationSection';
import FinalCTA from '../components/FinalCTA';
import { Flame } from 'lucide-react';

export default function MenuPage({ onOpenReservation, onAddToReservationNotes, reservationNotes, onClearNotes }) {
  return (
    <div className="pt-28 bg-ember-black text-ember-cream min-h-screen">
      {/* Page Hero Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center py-12 space-y-4">
        <div className="inline-flex items-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
          <Flame className="w-4 h-4" />
          <span>FULL CULINARY SELECTION</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-ember-cream">
          THE SEASONAL MENU
        </h1>
        <p className="font-sans text-base sm:text-lg text-ember-cream/80 max-w-xl mx-auto font-light italic">
          "Each dish is cooked over open wood charcoal, highlighting regional Indian heirlooms and seasonal extractions."
        </p>
      </div>

      <MenuSection onAddToReservationNotes={onAddToReservationNotes} reservationNotes={reservationNotes} />
      <ReservationSection reservationNotes={reservationNotes} onClearNotes={onClearNotes} />
      <FinalCTA onOpenReservation={onOpenReservation} />
    </div>
  );
}
