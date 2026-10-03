import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Schedule from './components/Schedule';
import Venues from './components/Venues';
import Entourage from './components/Entourage';
import AttireFaq from './components/AttireFaq';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

export default function App() {
  const [coupleNames, setCoupleNames] = useState<{ groom: string; bride: string }>(() => {
    try {
      const saved = localStorage.getItem('wedding_couple_names');
      return saved ? JSON.parse(saved) : { groom: 'Richmon', bride: 'Christal' };
    } catch {
      return { groom: 'Richmon', bride: 'Christal' };
    }
  });

  const handleUpdateNames = (newNames: { groom: string; bride: string }) => {
    setCoupleNames(newNames);
    localStorage.setItem('wedding_couple_names', JSON.stringify(newNames));
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 selection:bg-emerald-100 selection:text-emerald-950 font-sans antialiased overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar coupleNames={coupleNames} />

      {/* Hero Section with fixed & customized Top Pre-Nup Image */}
      <Hero coupleNames={coupleNames} onUpdateNames={handleUpdateNames} />

      {/* Love Story & Forest Highlights */}
      <Story coupleNames={coupleNames} />

      {/* Wedding Day Schedule & Program */}
      <Schedule />

      {/* Ceremony & Reception Venues */}
      <Venues />

      {/* Entourage & Wedding Party */}
      <Entourage />

      {/* Attire Guide & FAQs */}
      <AttireFaq />

      {/* RSVP Confirmation & Guestbook */}
      <RSVP coupleNames={coupleNames} />

      {/* Footer */}
      <Footer coupleNames={coupleNames} />
    </div>
  );
}
