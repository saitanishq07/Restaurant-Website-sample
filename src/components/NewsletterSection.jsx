import React, { useState } from 'react';
import { Flame, CheckCircle2 } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="py-20 bg-ember-dark text-ember-cream relative overflow-hidden border-t border-ember-gold/15">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        
        <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
          <Flame className="w-4 h-4" />
          <span>INSIDER DISPATCHES</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-ember-cream">
          A SEAT AT OUR TABLE.
        </h2>

        <p className="font-sans text-xs sm:text-sm text-ember-cream/80 font-light max-w-lg mx-auto">
          "Be the first to hear about seasonal menus, chef collaborations and special evenings."
        </p>

        {subscribed ? (
          <div className="p-4 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-sans text-xs flex items-center justify-center space-x-2 max-w-md mx-auto">
            <CheckCircle2 className="w-4 h-4" />
            <span>Welcome to Ember & Spice Dispatches. Check your inbox soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-ember-black border border-ember-gold/30 text-ember-cream px-4 py-3.5 text-xs font-sans focus:outline-none focus:border-ember-gold placeholder:text-ember-cream/40"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-ember-gold-light transition-colors whitespace-nowrap"
            >
              JOIN US
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
