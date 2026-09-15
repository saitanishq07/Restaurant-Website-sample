import React from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Flame, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer({ onOpenReservation }) {
  const navLinks = [
    { name: 'MENU', href: '/menu' },
    { name: 'OUR STORY', href: '/story' },
    { name: 'CHEF', href: '/chef' },
    { name: 'EXPERIENCE', href: '/experience' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <footer className="bg-ember-black text-ember-cream border-t border-ember-gold/15 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <Flame className="w-6 h-6 text-ember-gold group-hover:scale-110 transition-transform" />
              <span className="font-serif text-2xl font-semibold tracking-wider text-ember-cream">
                EMBER <span className="font-light text-ember-gold">&</span> SPICE
              </span>
            </Link>

            <p className="font-sans text-xs text-ember-cream/70 font-light leading-relaxed max-w-sm">
              "Contemporary Indian dining shaped by fire, season and memory."
            </p>

            <div className="pt-2 text-xs font-sans text-ember-cream/60 space-y-1">
              <p className="text-ember-gold font-medium">JUBILEE HILLS · HYDERABAD</p>
              <p>Road No. 36, Telangana 500033</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-sans tracking-[0.25em] text-ember-gold uppercase font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-ember-cream/70 hover:text-ember-gold transition-colors uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-sans tracking-[0.25em] text-ember-gold uppercase font-semibold">
              RESERVATIONS & HOURS
            </h4>
            <div className="space-y-2 text-xs font-sans text-ember-cream/70 font-light">
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-ember-gold shrink-0" />
                <span>{RESTAURANT_INFO.phone}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-ember-gold shrink-0" />
                <span>{RESTAURANT_INFO.email}</span>
              </p>
              <div className="pt-2 text-[11px] space-y-0.5 text-ember-cream/60">
                <p>Tue – Thu: 12:30PM – 11:00PM</p>
                <p>Fri – Sun: 12:30PM – 11:30PM</p>
                <p className="text-ember-gold/80 italic font-serif">Monday Closed</p>
              </div>
            </div>
          </div>

          {/* Social & CTA Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-sans tracking-[0.25em] text-ember-gold uppercase font-semibold">
              CONNECT
            </h4>
            <div className="flex space-x-3 text-ember-cream/70">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-ember-gold/20 hover:border-ember-gold hover:text-ember-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-ember-gold/20 hover:border-ember-gold hover:text-ember-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="w-full py-2.5 bg-ember-gold text-ember-black font-sans font-semibold text-[10px] tracking-[0.2em] uppercase hover:bg-ember-gold-light transition-colors"
              >
                RESERVE A TABLE
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal Line */}
        <div className="pt-8 border-t border-ember-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-ember-cream/50">
          <div>
            © 2026 Ember & Spice. All rights reserved.
            <span className="ml-4 space-x-3 text-ember-cream/40">
              <span className="hover:text-ember-gold cursor-pointer">Privacy</span>
              <span>·</span>
              <span className="hover:text-ember-gold cursor-pointer">Terms</span>
            </span>
          </div>

          {/* TanovaX Credit - Restrained & Discrete as requested */}
          <div className="text-[10px] tracking-widest text-ember-cream/40 font-sans uppercase">
            Designed & Developed by <span className="text-ember-cream/70">TanovaX</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
