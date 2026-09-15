import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame, ChevronRight, Phone, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'MENU', href: '/menu' },
    { name: 'OUR STORY', href: '/story' },
    { name: 'CHEF', href: '/chef' },
    { name: 'EXPERIENCE', href: '/experience' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    navigate(href);
  };

  const handleReserveClick = () => {
    setMobileMenuOpen(false);
    if (onOpenReservation) {
      onOpenReservation();
    } else {
      navigate('/contact#reserve');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-ember-black/90 backdrop-blur-md border-b border-ember-gold/10 shadow-2xl'
            : 'py-6 bg-gradient-to-b from-ember-black/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-2 text-ember-cream focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-gold rounded-sm"
          >
            <Flame className="w-5 h-5 text-ember-gold group-hover:scale-110 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-ember-cream group-hover:text-ember-gold transition-colors duration-300">
                EMBER <span className="font-light text-ember-gold">&</span> SPICE
              </span>
              <span className="text-[9px] font-sans tracking-[0.25em] text-ember-gold/70 uppercase -mt-1">
                HYDERABAD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-xs font-sans font-medium tracking-[0.2em] transition-colors duration-300 py-1 ${
                    isActive ? 'text-ember-gold' : 'text-ember-cream/80 hover:text-ember-cream'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-ember-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={handleReserveClick}
              className="relative group overflow-hidden px-6 py-2.5 border border-ember-gold/40 text-ember-cream hover:text-ember-black transition-colors duration-300 text-xs font-sans tracking-[0.2em] font-semibold uppercase rounded-none"
            >
              <span className="absolute inset-0 bg-ember-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center space-x-2">
                <span>RESERVE A TABLE</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ember-cream hover:text-ember-gold transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-ember-black/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28"
          >
            {/* Background Flame Watermark */}
            <div className="absolute right-[-10%] bottom-[-10%] opacity-5 pointer-events-none text-ember-gold">
              <Flame className="w-96 h-96" />
            </div>

            <div className="space-y-6">
              <div className="text-xs tracking-[0.3em] text-ember-gold font-sans uppercase mb-4">
                NAVIGATION
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 + 0.1 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`group w-full flex items-center justify-between text-left py-2 font-serif text-3xl sm:text-4xl transition-colors ${
                        location.pathname === link.href ? 'text-ember-gold' : 'text-ember-cream hover:text-ember-gold'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-5 h-5 text-ember-gold/40 group-hover:text-ember-gold group-hover:translate-x-1 transition-all" />
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 pt-6 border-t border-ember-gold/15"
            >
              <button
                onClick={handleReserveClick}
                className="w-full py-4 bg-ember-gold text-ember-black font-sans font-semibold text-xs tracking-[0.25em] uppercase hover:bg-ember-gold-light transition-colors"
              >
                RESERVE A TABLE
              </button>

              <div className="flex flex-col space-y-2 text-xs text-ember-cream/70 font-sans">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-ember-gold" />
                  <span>{RESTAURANT_INFO.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-ember-gold" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
