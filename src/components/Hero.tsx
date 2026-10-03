import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Heart, ChevronDown, Download } from 'lucide-react';
import { BotanicalBranch } from './BotanicalMotif';
import RCLogo from './RCLogo';

// Pre-nup hero image
import heroPreNupImg from '../assets/images/Hero_Richmon&Christal.png';

interface HeroProps {
  coupleNames?: { groom: string; bride: string };
  onUpdateNames?: (names: { groom: string; bride: string }) => void;
}

export default function Hero({
  coupleNames = { groom: 'Richmon', bride: 'Christal' },
  onUpdateNames,
}: HeroProps) {
  // Vertical focal position (25% centers couple's faces naturally)
  const [verticalFocus] = useState<number>(25);
  const [overlayDarkness] = useState<number>(38);
  const [enableKenBurns] = useState<boolean>(true);

  const [isEditingNames, setIsEditingNames] = useState<boolean>(false);
  const [groomName, setGroomName] = useState(coupleNames.groom);
  const [brideName, setBrideName] = useState(coupleNames.bride);

  // Wedding Date: Wednesday, December 2, 2026, 3:30 PM GMT+8 (Philippine Time)
  const weddingDate = new Date('2026-12-02T15:30:00+08:00').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [weddingDate]);

  const handleSaveNames = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUpdateNames) {
      onUpdateNames({ groom: groomName.trim() || 'Richmon', bride: brideName.trim() || 'Christal' });
    }
    setIsEditingNames(false);
  };

  const currentHeroImage = heroPreNupImg;

  // Function to download an iCal event
  const downloadICal = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Richmon and Christal Wedding//PH
BEGIN:VEVENT
UID:wedding-${Date.now()}@richmonandchristal.wedding
DTSTAMP:20261003T000000Z
DTSTART:20261202T073000Z
DTEND:20261202T160000Z
SUMMARY:${coupleNames.groom} & ${coupleNames.bride}'s Wedding
DESCRIPTION:Richmon C. Lorenzo & Christal Joy L. Pancho Wedding. Ceremony at Parish of Immaculate Heart of Mary followed by Reception at Jardin de Miramar (Cafe Leonita) in Antipolo. #RichInLoveWithChristal
LOCATION:Parish of Immaculate Heart of Mary, Hinulugan Taktak Road, Brgy. Dela Paz, Antipolo City
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${coupleNames.groom}-and-${coupleNames.bride}-Wedding-12-02-2026.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="hero" className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-stone-900">
      {/* 
        HERO TOP IMAGE CONTAINER
        Fix applied:
        - object-cover with customizable vertical focus position (default: 22% from top)
        - Couple's faces and expressions are prominently displayed without head cut-off
        - Optional smooth Ken Burns slow ambient zoom animation
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <img
          src={currentHeroImage}
          alt={`${coupleNames.groom} & ${coupleNames.bride} Wedding Pre-Nup`}
          style={{
            objectPosition: `center ${verticalFocus}%`,
          }}
          className={`w-full h-full object-cover transition-all duration-700 ${
            enableKenBurns ? 'animate-ken-burns' : ''
          }`}
          onError={(e) => {
            // Fallback in case of missing asset
            const target = e.currentTarget;
            if (target.src !== heroPreNupImg) {
              target.src = heroPreNupImg;
            }
          }}
        />

        {/* Top Scrim Gradient (Ensures Navbar & Top Icons are clearly legible) */}
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/75 via-black/35 to-transparent z-10" />

        {/* Center Vignette & Adjustable Dimming Layer */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            backgroundColor: `rgba(18, 16, 14, ${overlayDarkness / 100})`,
          }}
        />

        {/* Radial Depth Gradient to focus viewer's eyes on the couple */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.45)_100%)] z-10 pointer-events-none" />

        {/* Bottom Seamless Fade to the Wedding Page Light Beige Palette (#faf8f5) */}
        <div className="absolute inset-x-0 bottom-0 h-44 sm:h-56 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/75 to-transparent z-10" />
      </div>

      {/* Edit Names Modal */}
      {isEditingNames && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md p-6 bg-stone-900 border border-amber-500/40 rounded-2xl text-stone-100 shadow-2xl">
            <h3 className="font-serif text-2xl font-normal text-amber-100 mb-2">Edit Couple's Names</h3>
            <p className="text-xs text-stone-400 mb-5">
              Personalize the names displayed on the hero banner and throughout the wedding website.
            </p>
            <form onSubmit={handleSaveNames} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Groom's Name</label>
                <input
                  type="text"
                  value={groomName}
                  onChange={(e) => setGroomName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                  placeholder="e.g. John"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">Bride's Name</label>
                <input
                  type="text"
                  value={brideName}
                  onChange={(e) => setBrideName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-400"
                  placeholder="e.g. Maria"
                  required
                />
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditingNames(false)}
                  className="flex-1 py-2.5 rounded-xl border border-stone-700 text-stone-300 hover:bg-stone-800 transition-colors text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold transition-colors text-xs shadow-lg"
                >
                  Save Names
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Hero Content Block */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-20 sm:pt-28 sm:pb-24 text-center flex flex-col items-center justify-center">
        {/* Monogram Badge & Botanical Flourish */}
        <div className="flex flex-col items-center mb-3 sm:mb-4">
          <RCLogo size="lg" className="mb-3 hover:scale-105 transition-transform drop-shadow-[0_4px_20px_rgba(212,175,55,0.45)]" />
          <BotanicalBranch className="w-28 sm:w-36 h-6 text-amber-200/70" />
        </div>

        {/* Invitation Lead-in */}
        <p className="font-sans text-xs sm:text-sm font-light tracking-[0.28em] uppercase text-amber-100/90 mb-3 sm:mb-4 drop-shadow-md">
          Together With Their Families
        </p>

        {/* Couple's Names with Romantic Serif Typography */}
        <div className="group relative inline-block mb-2 sm:mb-3">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-wide text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
            <span className="text-gold-gradient font-serif italic pr-1">{coupleNames.groom}</span>
            <span className="text-amber-200/80 font-script text-4xl sm:text-6xl md:text-7xl mx-2 sm:mx-3">&amp;</span>
            <span className="text-white font-serif">{coupleNames.bride}</span>
          </h1>

          {/* Quick inline edit pencil to customize couple names */}
          <button
            onClick={() => setIsEditingNames(true)}
            className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-7 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-amber-300 hover:text-white border border-amber-400/40 shadow-lg text-[10px]"
            title="Edit Names"
          >
            ✏️
          </button>
        </div>

        {/* Full Formal Names */}
        <p className="font-serif tracking-widest text-xs sm:text-sm uppercase text-amber-200/90 mb-3 font-light">
          Richmon C. Lorenzo &amp; Christal Joy L. Pancho
        </p>

        {/* Hashtag & RSVP Deadline Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-300/30 text-amber-200 font-mono text-[11px] sm:text-xs tracking-wider">
            #RichInLoveWithChristal
          </span>
          <span className="px-3 py-1 rounded-full bg-stone-900/60 border border-white/15 text-stone-200 text-[11px] sm:text-xs tracking-wide">
            RSVP Deadline: Oct 31, 2026
          </span>
        </div>

        {/* Date and Venue Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-stone-100 font-sans tracking-wider mb-8 sm:mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
            <Calendar className="w-4 h-4 text-amber-300 shrink-0" />
            <span className="font-medium tracking-wide">Wednesday, December 2, 2026 · 3:30 PM</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/15 shadow-md">
            <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
            <span className="font-medium tracking-wide">Antipolo City, Rizal, Philippines</span>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="w-full max-w-md mx-auto mb-9 sm:mb-11 p-4 sm:p-5 rounded-2xl bg-black/40 border border-amber-200/25 backdrop-blur-md shadow-2xl">
          <div className="text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-amber-200/80 mb-3 text-center">
            Counting Down To The Vows
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
            <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {timeLeft.days}
              </span>
              <span className="text-[9px] sm:text-[10px] text-stone-300 uppercase tracking-widest mt-0.5">Days</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {timeLeft.hours}
              </span>
              <span className="text-[9px] sm:text-[10px] text-stone-300 uppercase tracking-widest mt-0.5">Hours</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {timeLeft.minutes}
              </span>
              <span className="text-[9px] sm:text-[10px] text-stone-300 uppercase tracking-widest mt-0.5">Mins</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/10">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-amber-300 tracking-tight">
                {timeLeft.seconds}
              </span>
              <span className="text-[9px] sm:text-[10px] text-stone-300 uppercase tracking-widest mt-0.5">Secs</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#rsvp"
            className="px-7 py-3 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-400 text-stone-950 font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(217,119,6,0.35)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-stone-950 text-stone-950" />
            <span>RSVP To Celebrate</span>
          </a>

          <a
            href="#venues"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-stone-100 border border-white/25 backdrop-blur-md font-medium text-xs sm:text-sm tracking-wider uppercase transition-all hover:scale-105 active:scale-95"
          >
            Venue Details
          </a>

          <button
            onClick={downloadICal}
            className="px-5 py-3 rounded-full bg-black/40 hover:bg-black/60 text-amber-200 border border-amber-300/30 backdrop-blur-md text-xs sm:text-sm font-medium tracking-wide flex items-center gap-1.5 transition-all hover:scale-105"
            title="Add event to Google Calendar / Apple Calendar"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Save To Calendar</span>
            <span className="inline sm:hidden">Calendar</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#story"
          className="mt-12 sm:mt-16 inline-flex flex-col items-center text-stone-300/70 hover:text-amber-200 transition-colors group"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-sans mb-1 group-hover:tracking-[0.35em] transition-all">
            Discover Our Story
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-300" />
        </a>
      </div>
    </div>
  );
}
