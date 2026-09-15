import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, Mail, MessageSquare, MapPin, CheckCircle2, Flame, Send } from 'lucide-react';

export default function ContactSection() {
  const [activeAction, setActiveAction] = useState(null);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleActionClick = (type) => {
    setActiveAction(type);
  };

  const handleSendInquiry = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setActiveAction(null);
      setInquiryName('');
      setInquiryMessage('');
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-ember-black text-ember-cream relative overflow-hidden border-t border-ember-gold/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2 text-ember-gold text-xs tracking-[0.3em] font-sans uppercase">
            <Flame className="w-4 h-4" />
            <span>DIRECT INQUIRIES</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-ember-cream leading-tight">
            COME HUNGRY. <br />
            <span className="italic text-ember-gold">LEAVE WITH A STORY.</span>
          </h2>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Call Card */}
          <div className="p-8 bg-ember-dark border border-ember-gold/20 flex flex-col justify-between items-center text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-ember-gold/15 border border-ember-gold/40 flex items-center justify-center text-ember-gold">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-sans tracking-[0.3em] text-ember-gold uppercase font-semibold block mb-1">
                TELEPHONE
              </span>
              <p className="font-serif text-2xl text-ember-cream font-normal">
                {RESTAURANT_INFO.phone}
              </p>
            </div>
            <button
              onClick={() => handleActionClick('CALL')}
              className="w-full py-3 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.2em] uppercase hover:bg-ember-gold-light transition-colors"
            >
              CALL DIRECTLY
            </button>
          </div>

          {/* Email Card */}
          <div className="p-8 bg-ember-dark border border-ember-gold/20 flex flex-col justify-between items-center text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-ember-gold/15 border border-ember-gold/40 flex items-center justify-center text-ember-gold">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-sans tracking-[0.3em] text-ember-gold uppercase font-semibold block mb-1">
                EMAIL RESERVATIONS
              </span>
              <p className="font-serif text-xl sm:text-2xl text-ember-cream font-normal">
                {RESTAURANT_INFO.email}
              </p>
            </div>
            <button
              onClick={() => handleActionClick('EMAIL')}
              className="w-full py-3 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.2em] uppercase hover:bg-ember-gold-light transition-colors"
            >
              SEND EMAIL
            </button>
          </div>

          {/* WhatsApp Card */}
          <div className="p-8 bg-ember-dark border border-ember-gold/20 flex flex-col justify-between items-center text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-ember-gold/15 border border-ember-gold/40 flex items-center justify-center text-ember-gold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-sans tracking-[0.3em] text-ember-gold uppercase font-semibold block mb-1">
                WHATSAPP CONCIERGE
              </span>
              <p className="font-serif text-2xl text-ember-cream font-normal">
                {RESTAURANT_INFO.whatsapp}
              </p>
            </div>
            <button
              onClick={() => handleActionClick('WHATSAPP')}
              className="w-full py-3 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.2em] uppercase hover:bg-ember-gold-light transition-colors"
            >
              CHAT ON WHATSAPP
            </button>
          </div>
        </div>

      </div>

      {/* Action Dialog Modal */}
      <AnimatePresence>
        {activeAction && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveAction(null)}
              className="fixed inset-0 bg-ember-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-md bg-ember-dark border border-ember-gold/40 p-8 shadow-2xl space-y-4 text-center"
            >
              {isSent ? (
                <div className="space-y-3 py-6">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="font-serif text-2xl text-ember-cream">
                    Message Dispatched
                  </h3>
                  <p className="text-xs font-sans text-ember-cream/70">
                    Our host concierge will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendInquiry} className="space-y-4">
                  <span className="text-[10px] font-sans tracking-[0.3em] text-ember-gold uppercase font-semibold">
                    {activeAction} CONCIERGE DEMO
                  </span>
                  
                  <h3 className="font-serif text-2xl text-ember-cream">
                    Contact Ember & Spice Host
                  </h3>

                  <input
                    type="text"
                    placeholder="Your Name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    required
                    className="w-full bg-ember-black border border-ember-gold/20 text-ember-cream p-3 text-xs font-sans focus:outline-none focus:border-ember-gold"
                  />

                  <textarea
                    placeholder={`Type your ${activeAction.toLowerCase()} request...`}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    required
                    rows={3}
                    className="w-full bg-ember-black border border-ember-gold/20 text-ember-cream p-3 text-xs font-sans focus:outline-none focus:border-ember-gold resize-none"
                  />

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveAction(null)}
                      className="flex-1 py-3 border border-ember-gold/20 text-ember-cream/70 text-xs font-sans uppercase"
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-ember-gold text-ember-black font-sans font-semibold text-xs uppercase"
                    >
                      SEND NOW
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
