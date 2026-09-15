import React from 'react';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import StatementSection from '../components/StatementSection';
import MenuSection from '../components/MenuSection';
import ChefSection from '../components/ChefSection';
import ChefsTableSection from '../components/ChefsTableSection';
import ExperiencesSection from '../components/ExperiencesSection';
import ReservationSection from '../components/ReservationSection';
import PrivateDiningSection from '../components/PrivateDiningSection';
import EventsSection from '../components/EventsSection';
import StoryTimeline from '../components/StoryTimeline';
import GallerySection from '../components/GallerySection';
import InstagramGrid from '../components/InstagramGrid';
import TestimonialsSection from '../components/TestimonialsSection';
import LocationSection from '../components/LocationSection';
import ContactSection from '../components/ContactSection';
import NewsletterSection from '../components/NewsletterSection';
import FinalCTA from '../components/FinalCTA';

export default function HomePage({ onOpenReservation, onAddToReservationNotes, reservationNotes, onClearNotes }) {
  return (
    <main className="min-h-screen bg-ember-black text-ember-cream">
      <Hero onOpenReservation={onOpenReservation} />
      <IntroSection />
      <StatementSection />
      <MenuSection onAddToReservationNotes={onAddToReservationNotes} reservationNotes={reservationNotes} />
      <ChefSection />
      <ChefsTableSection onOpenReservation={onOpenReservation} />
      <ExperiencesSection onOpenReservation={onOpenReservation} />
      <ReservationSection reservationNotes={reservationNotes} onClearNotes={onClearNotes} />
      <PrivateDiningSection onOpenReservation={onOpenReservation} />
      <EventsSection onOpenReservation={onOpenReservation} />
      <StoryTimeline />
      <GallerySection />
      <InstagramGrid />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <NewsletterSection />
      <FinalCTA onOpenReservation={onOpenReservation} />
    </main>
  );
}
