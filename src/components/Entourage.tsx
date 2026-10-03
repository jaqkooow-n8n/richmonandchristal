import React from 'react';
import RCLogo from './RCLogo';

/**
 * Botanical Vine Ornament for Folio Header
 */
function BotanicalVine({ className = "w-32 sm:w-40 h-5 text-[#8C6F4E]/50" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M5 10C30 10 70 10 95 10" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M20 10C20 6 26 5 30 8C26 10 22 10 20 10Z" fill="currentColor" opacity="0.75" />
      <path d="M40 10C40 5 46 4 50 7C46 10 42 10 40 10Z" fill="currentColor" opacity="0.85" />
      <path d="M60 10C60 6 66 5 70 8C66 10 62 10 60 10Z" fill="currentColor" opacity="0.75" />
      <path d="M80 10C80 6 85 5 88 8C85 10 82 10 80 10Z" fill="currentColor" opacity="0.7" />
      <path d="M30 10C30 14 36 15 40 12C36 10 32 10 30 10Z" fill="currentColor" opacity="0.75" />
      <path d="M50 10C50 15 56 16 60 13C56 10 52 10 50 10Z" fill="currentColor" opacity="0.85" />
      <path d="M70 10C70 14 76 15 80 12C76 10 72 10 70 10Z" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

/**
 * FloralDivider under H2 with center diamond motif
 */
function FloralDivider({ className = "w-full max-w-xs mx-auto my-5" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-[#D4AF37]/50" />
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#8C6F4E]/80 shrink-0">
        <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="#FAF7F2" />
      </svg>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/40 to-[#D4AF37]/50" />
    </div>
  );
}

/**
 * Major letterpress divider (✦ at 40% width)
 */
function MajorDivider() {
  return (
    <div className="w-full max-w-[40%] mx-auto my-10 sm:my-12 flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-[#D4AF37]/40" />
      <span className="text-[#8C6F4E]/80 text-xs sm:text-sm font-serif select-none">✦</span>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/35 to-[#D4AF37]/40" />
    </div>
  );
}

/**
 * Minor letterpress divider (· at 30% width)
 */
function MinorDivider() {
  return (
    <div className="w-full max-w-[30%] mx-auto my-8 sm:my-10 flex items-center justify-center gap-2.5" aria-hidden="true">
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-[#D4AF37]/30" />
      <span className="text-[#8C6F4E]/60 text-xs font-serif select-none">·</span>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/25 to-[#D4AF37]/30" />
    </div>
  );
}

/**
 * Corner letterpress stationery bracket
 */
function StationeryCorner({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const rot =
    position === 'top-left'
      ? ''
      : position === 'top-right'
      ? 'rotate-90'
      : position === 'bottom-right'
      ? 'rotate-180'
      : '-rotate-90';

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#D4AF37]/40 ${rot} select-none pointer-events-none`}
    >
      <path d="M2 14 V4 C2 2.89543 2.89543 2 4 2 H14" stroke="currentColor" strokeWidth="1" />
      <circle cx="4" cy="4" r="1.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export default function Entourage() {
  const tocItems = [
    { label: 'Parents', href: '#entourage-parents' },
    { label: 'Sponsors', href: '#entourage-sponsors' },
    { label: 'Best Man', href: '#entourage-honors' },
    { label: 'Secondary', href: '#entourage-secondary' },
    { label: 'Bearers', href: '#entourage-bearers' },
    { label: 'Flower Party', href: '#entourage-flower-party' },
  ];

  return (
    <section
      id="entourage"
      className="py-24 sm:py-32 bg-[#F5F1EA]/50 text-[#243329] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Navigation: Mini-TOC Pill Row */}
        <nav aria-label="Entourage sections" className="mb-10 sm:mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {tocItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="min-h-[44px] px-4 sm:px-5 py-2.5 inline-flex items-center justify-center rounded-full bg-[#FAF7F2] hover:bg-white text-[#8C6F4E] hover:text-[#243329] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 shadow-[0_2px_8px_rgba(212,175,55,0.08)] hover:shadow-md transition-all font-sans text-[11px] uppercase tracking-[0.25em] font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* The Printed Keepsake Folio Card */}
        <div className="bg-[#FAF7F2] border border-[#D4AF37]/35 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-[0_16px_50px_rgba(36,51,41,0.05),0_2px_10px_rgba(212,175,55,0.08)]">
          {/* Inner Hairline Stationery Frame */}
          <div className="border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl px-5 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20 relative">
            {/* Stationery Corner Accents */}
            <div className="absolute top-2.5 left-2.5">
              <StationeryCorner position="top-left" />
            </div>
            <div className="absolute top-2.5 right-2.5">
              <StationeryCorner position="top-right" />
            </div>
            <div className="absolute bottom-2.5 left-2.5">
              <StationeryCorner position="bottom-left" />
            </div>
            <div className="absolute bottom-2.5 right-2.5">
              <StationeryCorner position="bottom-right" />
            </div>

            {/* Header: Crest Header + BotanicalVine + One H2 only + FloralDivider */}
            <header className="text-center mb-10 sm:mb-14 flex flex-col items-center">
              <RCLogo size={72} className="mb-3.5 drop-shadow-[0_4px_16px_rgba(212,175,55,0.25)]" />
              <BotanicalVine className="w-36 h-5 text-[#8C6F4E]/45 mb-4" />
              <h2 className="font-serif font-semibold text-3xl sm:text-5xl text-[#243329] tracking-tight">
                The Wedding Entourage
              </h2>
              <FloralDivider className="w-full max-w-xs my-4" />
              <p className="font-serif italic text-base sm:text-lg text-[#5B7065] max-w-lg">
                The cherished family and lifelong companions standing with Richmon &amp; Christal as witnesses to this sacred covenant
              </p>
            </header>

            {/* Folio Groups */}
            <div className="space-y-0">
              {/* GROUP 1: PARENTS */}
              <section id="entourage-parents" className="scroll-mt-28 mb-10 sm:mb-12 text-center">
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] font-medium mb-1">
                  To Guide Our Path
                </p>
                <p className="font-serif italic text-base sm:text-lg text-[#5B7065] mb-6">
                  The Parents Who Blessed Our Journey
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-2xl mx-auto">
                  {/* Groom's Parents */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-2 font-medium">
                      Parents of the Groom
                    </span>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Mr. Raul L. Lorenzo
                      </div>
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Mrs. Cecilia C. Lorenzo
                      </div>
                    </div>
                  </div>

                  {/* Bride's Parents */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-2 font-medium">
                      Parents of the Bride
                    </span>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Mr. Charlito L. Pancho
                      </div>
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Mrs. Annabelle L. Pancho
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* DIVIDER 1: Major (✦ at 40%) */}
              <MajorDivider />

              {/* GROUP 2: PRINCIPAL SPONSORS */}
              <section id="entourage-sponsors" className="scroll-mt-28 mb-10 sm:mb-12 text-center">
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] font-medium mb-1">
                  To Counsel &amp; Bless
                </p>
                <p className="font-serif italic text-base sm:text-lg text-[#5B7065] mb-6">
                  Our Esteemed Witnesses &amp; Mentors in Faith
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-2xl mx-auto">
                  {/* Ninongs */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-2 font-medium">
                      Ninongs of Honor
                    </span>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Mr. Julius G. Doguiles
                      </div>
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Mr. Christopher B. Madrigal
                      </div>
                    </div>
                  </div>

                  {/* Ninangs */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-2 font-medium">
                      Ninangs of Honor
                    </span>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Mrs. Rosalyn C. Doguiles
                      </div>
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Mrs. Dinah C. Navarro
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* DIVIDER 2: Minor (· at 30%) */}
              <MinorDivider />

              {/* GROUP 3: BRIDAL PARTY / HONORS */}
              <section id="entourage-honors" className="scroll-mt-28 mb-10 sm:mb-12 text-center">
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] font-medium mb-1">
                  To Stand Beside Us
                </p>
                <p className="font-serif italic text-base sm:text-lg text-[#5B7065] mb-6">
                  Our Closest Confidants &amp; Companions
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-2xl mx-auto">
                  {/* Best Man */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-2 font-medium">
                      Best Man
                    </span>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Emil Rigon
                      </div>
                    </div>
                  </div>

                  {/* Maids of Honor */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-2 font-medium">
                      Maids of Honor
                    </span>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Thea Angelica Rivera
                      </div>
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Honeylou Claire Padilla
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* DIVIDER 3: Major (✦ at 40%) */}
              <MajorDivider />

              {/* GROUP 4: SECONDARY SPONSORS */}
              <section id="entourage-secondary" className="scroll-mt-28 mb-10 sm:mb-12 text-center">
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] font-medium mb-1">
                  To Bind Our Souls
                </p>
                <p className="font-serif italic text-base sm:text-lg text-[#5B7065] mb-6">
                  Tokens of Divine Light, Purity &amp; Eternal Unity
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-3xl mx-auto">
                  {/* Candle Sponsors */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-1 font-medium">
                      Candle Sponsors
                    </span>
                    <p className="font-serif italic text-sm text-[#5B7065] mb-2">
                      To Light Our Path
                    </p>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Mark Ian Antolin
                      </div>
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Honey Thea Carreon
                      </div>
                    </div>
                  </div>

                  {/* Veil Sponsors */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-1 font-medium">
                      Veil Sponsors
                    </span>
                    <p className="font-serif italic text-sm text-[#5B7065] mb-2">
                      Clothed as One
                    </p>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Warren Sintos
                      </div>
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Jean Alesi Javier
                      </div>
                    </div>
                  </div>

                  {/* Cord Sponsors */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-1 font-medium">
                      Cord Sponsors
                    </span>
                    <p className="font-serif italic text-sm text-[#5B7065] mb-2">
                      Bound in Unity
                    </p>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Jay-R Rigon
                      </div>
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Kyle Kweengle Rodriguez
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* DIVIDER 4: Minor (· at 30%) */}
              <MinorDivider />

              {/* GROUP 5: BEARERS */}
              <section id="entourage-bearers" className="scroll-mt-28 mb-10 sm:mb-12 text-center">
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] font-medium mb-1">
                  To Carry Our Treasures
                </p>
                <p className="font-serif italic text-base sm:text-lg text-[#5B7065] mb-6">
                  Emblems of Faith, Prosperity &amp; Eternal Devotion
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-3xl mx-auto">
                  {/* Ring Bearer */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-1 font-medium">
                      Ring Bearer
                    </span>
                    <p className="font-serif italic text-sm text-[#5B7065] mb-2">
                      Token of Fidelity
                    </p>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Richter Lorenzo
                      </div>
                    </div>
                  </div>

                  {/* Coin Bearer */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-1 font-medium">
                      Coin (Arrhae) Bearer
                    </span>
                    <p className="font-serif italic text-sm text-[#5B7065] mb-2">
                      Pledge of Mutual Care
                    </p>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Elcid Tapaoan
                      </div>
                    </div>
                  </div>

                  {/* Bible Bearer */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-1 font-medium">
                      Bible Bearer
                    </span>
                    <p className="font-serif italic text-sm text-[#5B7065] mb-2">
                      Word of Divine Grace
                    </p>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Alvin Tapaoan
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* DIVIDER 5: Major (✦ at 40%) */}
              <MajorDivider />

              {/* GROUP 6: FLOWER PARTY */}
              <section id="entourage-flower-party" className="scroll-mt-28 mb-4 text-center">
                <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] font-medium mb-1">
                  To Scatter Joy
                </p>
                <p className="font-serif italic text-base sm:text-lg text-[#5B7065] mb-6">
                  Bestowing Petals of Joy &amp; Sweet Celebration
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-2xl mx-auto">
                  {/* Flower Men */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-2 font-medium">
                      Flower Men
                    </span>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Prince Khealson Estabillo
                      </div>
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Blake Nylier Pancho
                      </div>
                    </div>
                  </div>

                  {/* Flower Ladies */}
                  <div className="text-center">
                    <span className="block font-sans text-[11px] tracking-[0.25em] uppercase text-[#8C6F4E] mb-2 font-medium">
                      Flower Ladies
                    </span>
                    <div className="space-y-1">
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Maria Theresa Lorenzo
                      </div>
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Aiesha Reilyn Pancho
                      </div>
                      <div className="font-serif text-xl sm:text-2xl text-[#243329] tracking-tight leading-snug">
                        Princess Shonavelle Leiryn Pancho
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
