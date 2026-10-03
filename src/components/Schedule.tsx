import React, { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  venueType: 'church' | 'garden';
  venueLabel: string;
  location: string;
  desc: string;
}

/**
 * Letterpress FloralDivider
 */
function FloralDivider({ className = "w-full max-w-xs mx-auto my-4" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-[#D4AF37]/50" />
      <span className="text-[#8C6F4E]/80 text-xs font-serif select-none">✦</span>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/40 to-[#D4AF37]/50" />
    </div>
  );
}

export default function Schedule() {
  const events: TimelineEvent[] = [
    {
      id: 'row-0',
      time: '3:00 PM',
      title: 'Guest Arrival & Prelude',
      venueType: 'church',
      venueLabel: 'Church',
      location: 'Parish of Immaculate Heart of Mary, Antipolo',
      desc: 'Guests arrive and are welcomed into the open-air sanctuary as gentle acoustic prelude music fills the church. Ushers will assist with seating before the processional begins.',
    },
    {
      id: 'row-1',
      time: '3:30 PM',
      title: 'Bridal Processional',
      venueType: 'church',
      venueLabel: 'Church',
      location: 'Main Sanctuary Aisle',
      desc: 'The official processional begins with the entrance of our beloved sponsors, entourage, groom, and our radiant bride walking down the aisle.',
    },
    {
      id: 'row-2',
      time: '4:00 PM',
      title: 'Nuptial Mass & Sacred Vows',
      venueType: 'church',
      venueLabel: 'Church',
      location: 'Sanctuary Altar',
      desc: 'The holy sacrifice of the mass, lighting of candles, blessing of veil, cord, and arrhae, culminating in the exchange of lifetime marriage vows.',
    },
    {
      id: 'row-3',
      time: '5:00 PM',
      title: 'Cocktails & Garden Grazing',
      venueType: 'garden',
      venueLabel: 'Garden',
      location: 'Cafe Leonita Gardens, Jardin de Miramar',
      desc: 'Guests transition to Jardin de Miramar for refreshing welcome drinks, canapés, garden grazing, and commemorative photos as twilight settles.',
    },
    {
      id: 'row-4',
      time: '6:00 PM',
      title: 'Grand Entrance & First Dance',
      venueType: 'garden',
      venueLabel: 'Garden',
      location: 'Reception Ballroom, Cafe Leonita',
      desc: 'Welcoming the newlyweds with cheers as Richmon & Christal make their grand entrance and share their romantic first dance as husband and wife.',
    },
    {
      id: 'row-5',
      time: '7:00 PM',
      title: 'Dinner Banquet & Speeches',
      venueType: 'garden',
      venueLabel: 'Garden',
      location: 'Cafe Leonita Banquet Hall',
      desc: 'A bountiful culinary feast prepared in honor of our guests and families, accompanied by heartfelt words, blessings, and laughter from loved ones.',
    },
    {
      id: 'row-6',
      time: '8:00 PM',
      title: 'Cake Cutting & Traditions',
      venueType: 'garden',
      venueLabel: 'Garden',
      location: 'Main Reception Stage',
      desc: 'Ceremonial slicing of the wedding cake, champagne toasts, bouquet presentation, and joyful Filipino wedding celebration traditions.',
    },
    {
      id: 'row-7',
      time: '8:30 PM',
      title: 'Dancing & Celebration',
      venueType: 'garden',
      venueLabel: 'Garden',
      location: 'Dance Floor & Garden Pavilion',
      desc: 'Open bar, DJ beats, dancing, laughter, and celebrating 14 years of love under the stars!',
    },
  ];

  // Persist open row in sessionStorage; default to row-0 (arrival)
  const [openId, setOpenId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem('rc_schedule_open_id');
        return stored !== null ? stored : 'row-0';
      } catch {
        return 'row-0';
      }
    }
    return 'row-0';
  });

  const handleToggle = (id: string) => {
    setOpenId((prev) => {
      const next = prev === id ? '' : id;
      if (typeof window !== 'undefined') {
        try {
          sessionStorage.setItem('rc_schedule_open_id', next);
        } catch {
          // ignore
        }
      }
      return next;
    });
  };

  return (
    <section id="schedule" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#243329] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header: Operate cadence mb-10 sm:mb-12 */}
        <header className="text-center mb-10 sm:mb-12">
          {/* Date kicker */}
          <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#8C6F4E] font-semibold mb-2">
            Wednesday, December 2, 2026
          </p>

          {/* Plain-spoken H2 */}
          <h2 className="font-serif font-semibold text-3xl sm:text-5xl text-[#243329] tracking-tight mb-2">
            Order of the Day
          </h2>

          {/* Tabular / Mono Date & PHT Note */}
          <p className="font-mono text-xs tracking-[0.22em] uppercase text-[#8C6F4E]/90 mb-3 tabular-nums">
            12 • 02 • 2026 · All Times in PHT (GMT+8)
          </p>

          <FloralDivider className="w-full max-w-xs my-3" />

          {/* Arrival Note */}
          <p className="font-serif italic text-base sm:text-lg text-[#5B7065] max-w-xl mx-auto mb-3.5 leading-relaxed">
            Guests are warmly requested to arrive at the Church by 3:00 PM for prelude music and seating prior to the 3:30 PM processional.
          </p>

          {/* Single Attire Line with Link */}
          <div className="text-xs font-sans tracking-wide text-[#8C6F4E] flex items-center justify-center gap-1.5">
            <span>Formal Attire requested</span>
            <span className="text-[#D4AF37]">•</span>
            <a
              href="#attire-faq"
              className="underline underline-offset-4 decoration-[#D4AF37]/70 hover:text-[#243329] hover:decoration-[#D4AF37] transition-all font-medium"
            >
              View attire guide →
            </a>
          </div>
        </header>

        {/* Vertical Timeline with Continuous Left Rail */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#D4AF37]/40 space-y-4 sm:space-y-5 ml-3.5 sm:ml-6">
          {events.map((evt) => {
            const isOpen = openId === evt.id;

            return (
              <div key={evt.id} className="relative">
                {/* Rail Dot: Open is bronze filled, closed is cream w/ gold ring */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-4 w-3.5 h-3.5 rounded-full transition-all duration-300 pointer-events-none ${
                    isOpen
                      ? 'bg-[#8C6F4E] ring-4 ring-[#D4AF37]/30 scale-110'
                      : 'bg-[#FAF7F2] border-2 border-[#D4AF37]'
                  }`}
                  aria-hidden="true"
                />

                {/* Card with Single-Open Accordion Header (44px button target) */}
                <div
                  className={`rounded-xl sm:rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border border-[#D4AF37]/45 shadow-[0_4px_20px_rgba(212,175,55,0.12)]'
                      : 'bg-white border border-[#243329]/10 shadow-xs hover:border-[#D4AF37]/35'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(evt.id)}
                    aria-expanded={isOpen}
                    aria-controls={`details-${evt.id}`}
                    className="w-full min-h-[48px] px-4 sm:px-5 py-3 text-left flex items-center justify-between gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    {/* Time & Title */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      {/* Bronze bold tabular time */}
                      <span className="font-mono font-bold text-sm sm:text-base text-[#8C6F4E] tabular-nums shrink-0">
                        {evt.time}
                      </span>

                      {/* Forest serif title */}
                      <h3 className="font-serif text-base sm:text-lg md:text-xl font-medium text-[#243329] tracking-tight truncate">
                        {evt.title}
                      </h3>
                    </div>

                    {/* Venue Pill + Chevron */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      {/* Venue Pill */}
                      {evt.venueType === 'church' ? (
                        <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 rounded-full bg-[#E8EFEA] text-[#243329] border border-[#5B7065]/20">
                          {evt.venueLabel}
                        </span>
                      ) : (
                        <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 rounded-full bg-[#FDF6E7] text-[#7A5B1E] border border-[#D4AF37]/30">
                          {evt.venueLabel}
                        </span>
                      )}

                      {/* Rotating Chevron */}
                      <ChevronDown
                        className={`w-4 h-4 text-[#8C6F4E]/70 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#8C6F4E]' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  {/* Expanded Body (animated fadeIn, respect reduced motion) */}
                  {isOpen && (
                    <div
                      id={`details-${evt.id}`}
                      className="px-4 sm:px-5 pb-4 pt-1 border-t border-[#243329]/5 text-xs sm:text-sm animate-fade-in motion-reduce:animate-none"
                    >
                      <p className="text-[#5B7065] leading-relaxed mb-3 font-light">
                        {evt.desc}
                      </p>

                      <div className="pt-2 border-t border-[#D4AF37]/15 flex items-center gap-1.5 text-[11px] sm:text-xs font-sans text-[#8C6F4E]">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" aria-hidden="true" />
                        <span className="font-medium text-[#243329]/90">{evt.location}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
