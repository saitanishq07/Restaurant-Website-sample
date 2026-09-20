import React from 'react';
import { CheckCircle2, Calendar, Clock, Users, Flame } from 'lucide-react';

export default function ReservationModal({ bookingData, onClose }) {
  if (!bookingData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ember-black/90 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Window */}
      <div className="relative z-10 w-full max-w-xl bg-ember-dark border border-ember-gold/40 p-8 sm:p-10 shadow-2xl overflow-hidden my-auto text-center space-y-6">
        {/* Top Flame Icon & Status */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-16 h-16 rounded-full bg-ember-gold/15 border border-ember-gold/40 flex items-center justify-center text-ember-gold">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-[10px] font-sans tracking-[0.3em] text-ember-gold uppercase font-semibold">
            REQUEST RECEIVED
          </span>

          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-ember-cream">
            YOUR TABLE AWAITS.
          </h3>
          
          <p className="text-xs font-sans tracking-[0.2em] text-ember-cream/70 uppercase">
            EMBER & SPICE · HYDERABAD
          </p>
        </div>

        {/* Booking Summary Card */}
        <div className="bg-ember-black/60 p-6 border border-ember-gold/15 text-left space-y-4 text-xs font-sans">
          <div className="flex items-center justify-between pb-3 border-b border-ember-gold/10">
            <span className="text-ember-cream/60">Booking Reference</span>
            <span className="font-mono text-ember-gold font-semibold">{bookingData.refNumber}</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-ember-gold" />
              <span className="text-ember-cream/90">{bookingData.date || 'Today'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-ember-gold" />
              <span className="text-ember-cream/90">{bookingData.time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-ember-gold" />
              <span className="text-ember-cream/90">{bookingData.guests} Guests</span>
            </div>
            <div className="flex items-center space-x-2">
              <Flame className="w-4 h-4 text-ember-gold" />
              <span className="text-ember-cream/90">{bookingData.occasion || 'Standard Dining'}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-ember-gold/10 space-y-1">
            <div className="flex justify-between text-ember-cream/70">
              <span>Guest Name:</span>
              <span className="text-ember-cream font-medium">{bookingData.name}</span>
            </div>
            <div className="flex justify-between text-ember-cream/70">
              <span>Contact Email:</span>
              <span className="text-ember-cream font-medium">{bookingData.email}</span>
            </div>
            {bookingData.specialRequests && (
              <div className="pt-2 text-ember-cream/70">
                <span className="text-ember-gold block mb-0.5">Reservation Notes:</span>
                <p className="italic text-ember-cream/90 bg-ember-dark p-2 border-l-2 border-ember-gold">
                  "{bookingData.specialRequests}"
                </p>
              </div>
            )}
          </div>
        </div>

        <p className="text-[11px] text-ember-cream/60 font-sans leading-relaxed italic">
          This is a portfolio demonstration confirmation. In a live environment, our host team sends an instant SMS & email invitation.
        </p>

        <button
          onClick={onClose}
          className="w-full py-3.5 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.2em] uppercase hover:bg-ember-gold-light transition-colors"
        >
          CLOSE CONFIRMATION
        </button>
      </div>
    </div>
  );
}
