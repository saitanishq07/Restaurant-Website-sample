import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OpeningExperience from './components/OpeningExperience';

// Pages
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import StoryPage from './pages/StoryPage';
import ChefPage from './pages/ChefPage';
import ExperiencePage from './pages/ExperiencePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

// Scroll to Top on Route Change Component
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [showOpening, setShowOpening] = useState(() => {
    try {
      return !sessionStorage.getItem('hasSeenEmberOpening');
    } catch (e) {
      return true;
    }
  });

  const [reservationNotes, setReservationNotes] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (showOpening) {
      // Unconditional safety timer to dismiss opening within 1.6s
      const timer = setTimeout(() => {
        handleOpeningComplete();
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [showOpening]);

  const handleOpeningComplete = () => {
    try {
      sessionStorage.setItem('hasSeenEmberOpening', 'true');
    } catch (e) {
      // Ignore storage errors
    }
    setShowOpening(false);
  };

  const handleOpenReservation = () => {
    if (location.pathname !== '/' && location.pathname !== '/contact') {
      navigate('/contact#reserve');
    } else {
      const reserveEl = document.getElementById('reserve');
      if (reserveEl) {
        reserveEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/contact#reserve');
      }
    }
  };

  const handleAddToReservationNotes = (dish) => {
    setReservationNotes((prev) => {
      if (prev.some((item) => item.id === dish.id)) {
        return prev;
      }
      return [...prev, dish];
    });
  };

  const handleClearNotes = () => {
    setReservationNotes([]);
  };

  return (
    <div className="bg-ember-black text-ember-cream min-h-screen selection:bg-ember-gold selection:text-ember-black font-sans relative">
      <ScrollToTop />

      {/* Cinematic Opening Experience */}
      {showOpening && <OpeningExperience onComplete={handleOpeningComplete} />}

      {/* Fixed Sticky Navbar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Page Router */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onOpenReservation={handleOpenReservation}
              onAddToReservationNotes={handleAddToReservationNotes}
              reservationNotes={reservationNotes}
              onClearNotes={handleClearNotes}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <MenuPage
              onOpenReservation={handleOpenReservation}
              onAddToReservationNotes={handleAddToReservationNotes}
              reservationNotes={reservationNotes}
              onClearNotes={handleClearNotes}
            />
          }
        />
        <Route path="/story" element={<StoryPage onOpenReservation={handleOpenReservation} />} />
        <Route path="/chef" element={<ChefPage onOpenReservation={handleOpenReservation} />} />
        <Route path="/experience" element={<ExperiencePage onOpenReservation={handleOpenReservation} />} />
        <Route path="/gallery" element={<GalleryPage onOpenReservation={handleOpenReservation} />} />
        <Route
          path="/contact"
          element={
            <ContactPage
              onOpenReservation={handleOpenReservation}
              reservationNotes={reservationNotes}
              onClearNotes={handleClearNotes}
            />
          }
        />
      </Routes>

      {/* Main Brand Footer */}
      <Footer onOpenReservation={handleOpenReservation} />
    </div>
  );
}
