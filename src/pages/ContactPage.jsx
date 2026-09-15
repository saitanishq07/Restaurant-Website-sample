import React from 'react';
import ContactSection from '../components/ContactSection';
import LocationSection from '../components/LocationSection';
import ReservationSection from '../components/ReservationSection';
import FinalCTA from '../components/FinalCTA';
import { Flame } from 'lucide-react';

export default function ContactPage({ onOpenReservation, reservationNotes, onClearNotes }) {
  return (
    <div className="pt-28 bg-ember-black text-ember-cream min-h-screen">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center py-12 space-y-4">
        <div className="inline-flex items-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
          <Flame className="w-4 h-4" />
          <span>RESERVATIONS & LOCATION</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-ember-cream">
          CONTACT & TABLE REQUESTS
        </h1>
        <p className="font-sans text-base sm:text-lg text-ember-cream/80 max-w-xl mx-auto font-light italic">
          "Jubilee Hills, Hyderabad. We look forward to welcoming you."
        </p>
      </div>

      <ReservationSection reservationNotes={reservationNotes} onClearNotes={onClearNotes} />
      <LocationSection />
      <ContactSection />
      <FinalCTA onOpenReservation={onOpenReservation} />
    </div>
  );
}
