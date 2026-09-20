import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Flame, Loader2, Sparkles } from 'lucide-react';
import ReservationModal from './ReservationModal';

export default function ReservationSection({ reservationNotes = [], onClearNotes }) {
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('7:30 PM');
  const [guests, setGuests] = useState('2');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('Date Night');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const timeOptions = [
    '12:30 PM', '1:00 PM', '1:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  const guestOptions = ['2', '3', '4', '5', '6', '7+'];
  const occasionOptions = ['None', 'Anniversary', 'Birthday', 'Business Dinner', 'Date Night', 'Celebration'];

  useEffect(() => {
    if (reservationNotes && reservationNotes.length > 0) {
      const dishNames = reservationNotes.map((d) => d.name).join(', ');
      setSpecialRequests((prev) => {
        if (prev.includes('Interested dishes:')) return prev;
        return prev ? `${prev} (Interested dishes: ${dishNames})` : `Interested dishes from menu: ${dishNames}`;
      });
    }
  }, [reservationNotes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsChecking(true);

    setTimeout(() => {
      setIsChecking(false);
      const refNumber = `ES-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedBooking({
        refNumber,
        date,
        time,
        guests,
        name,
        phone,
        email,
        occasion,
        specialRequests,
      });
    }, 1200);
  };

  const handleCloseModal = () => {
    setConfirmedBooking(null);
    onClearNotes?.();
  };

  return (
    <section id="reserve" className="py-24 sm:py-32 bg-ember-black text-ember-cream relative overflow-hidden border-t border-ember-gold/15">
      {/* Background Subtle Flame Glow */}
      <div className="absolute inset-0 bg-ember-glow opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
            <Flame className="w-4 h-4" />
            <span>TABLE RESERVATIONS</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ember-cream">
            YOUR TABLE AWAITS.
          </h2>

          <p className="font-sans text-sm sm:text-base text-ember-cream/80 font-light max-w-lg mx-auto">
            Reserve your experience at Ember & Spice. For parties larger than 8, please inquire about Private Dining.
          </p>
        </div>

        {/* Reservation Form Card */}
        <div className="bg-ember-dark border border-ember-gold/25 p-6 sm:p-10 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Party Size & Time */}
            <div className="space-y-4">
              <label className="text-xs font-sans tracking-[0.2em] text-ember-gold uppercase font-semibold flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>1. SELECT GUESTS & DATE</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date Input */}
                <div>
                  <label className="block text-[11px] font-sans text-ember-cream/70 mb-1">Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full bg-ember-black border border-ember-gold/20 text-ember-cream px-4 py-3 text-sm font-sans focus:outline-none focus:border-ember-gold"
                    />
                  </div>
                </div>

                {/* Guest Selector */}
                <div>
                  <label className="block text-[11px] font-sans text-ember-cream/70 mb-1">Guests</label>
                  <div className="flex gap-2">
                    {guestOptions.map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setGuests(num)}
                        className={`flex-1 py-3 text-xs font-sans font-semibold transition-all ${
                          guests === num
                            ? 'bg-ember-gold text-ember-black border border-ember-gold'
                            : 'bg-ember-black text-ember-cream/70 border border-ember-gold/20 hover:border-ember-gold/50'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Time Selection */}
            <div className="space-y-4">
              <label className="text-xs font-sans tracking-[0.2em] text-ember-gold uppercase font-semibold flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>2. SELECT DINING TIME</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {timeOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTime(t)}
                    className={`py-3 px-2 text-xs font-sans font-medium transition-all ${
                      time === t
                        ? 'bg-ember-gold text-ember-black font-semibold border border-ember-gold'
                        : 'bg-ember-black text-ember-cream/80 border border-ember-gold/20 hover:border-ember-gold/50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Contact Info & Special Notes */}
            <div className="space-y-4 pt-4 border-t border-ember-gold/15">
              <label className="text-xs font-sans tracking-[0.2em] text-ember-gold uppercase font-semibold block">
                3. GUEST DETAILS & REQUESTS
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-sans text-ember-cream/70 mb-1">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Ananya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-ember-black border border-ember-gold/20 text-ember-cream px-4 py-3 text-xs font-sans focus:outline-none focus:border-ember-gold"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans text-ember-cream/70 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full bg-ember-black border border-ember-gold/20 text-ember-cream px-4 py-3 text-xs font-sans focus:outline-none focus:border-ember-gold"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans text-ember-cream/70 mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="ananya@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-ember-black border border-ember-gold/20 text-ember-cream px-4 py-3 text-xs font-sans focus:outline-none focus:border-ember-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans text-ember-cream/70 mb-1">Special Occasion</label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-ember-black border border-ember-gold/20 text-ember-cream px-4 py-3 text-xs font-sans focus:outline-none focus:border-ember-gold"
                  >
                    {occasionOptions.map((occ) => (
                      <option key={occ} value={occ} className="bg-ember-black text-ember-cream">
                        {occ}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-sans text-ember-cream/70 mb-1">Special Requests / Notes</label>
                  <input
                    type="text"
                    placeholder="Dietary preferences, quiet corner, etc."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-ember-black border border-ember-gold/20 text-ember-cream px-4 py-3 text-xs font-sans focus:outline-none focus:border-ember-gold"
                  />
                </div>
              </div>
            </div>

            {/* Selected Dish Notes Indicator */}
            {reservationNotes.length > 0 && (
              <div className="p-3 bg-ember-black border border-ember-gold/30 flex items-center justify-between text-xs">
                <span className="text-ember-gold flex items-center space-x-1.5 font-sans">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{reservationNotes.length} Dish(es) appended to reservation notes</span>
                </span>
                <button
                  type="button"
                  onClick={onClearNotes}
                  className="text-ember-cream/50 hover:text-ember-cream underline"
                >
                  Clear
                </button>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isChecking}
                className="w-full py-4 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-ember-gold-light transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isChecking ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>CHECKING TABLE AVAILABILITY...</span>
                  </>
                ) : (
                  <span>CHECK AVAILABILITY</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <ReservationModal bookingData={confirmedBooking} onClose={handleCloseModal} />
      )}
    </section>
  );
}
