import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

interface RSVPProps {
  coupleNames: { groom: string; bride: string };
}

/**
 * Letterpress FloralDivider
 */
function FloralDivider({ className = "w-full max-w-xs mx-auto my-3" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-[#D4AF37]/50" />
      <span className="text-[#8C6F4E]/80 text-xs font-serif select-none">✦</span>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/40 to-[#D4AF37]/50" />
    </div>
  );
}

export default function RSVP({ coupleNames }: RSVPProps) {
  // Official clean Google Form link with ?usp=sf_link
  const googleFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSf2a65-IL-e4TmRfUo3nel7wUAX3zh51hxklNyCRFtyDMxmjw/viewform?usp=sf_link';

  return (
    <section id="rsvp" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#243329] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header Block (mb-12: kicker → H2 → divider → emotional anchor) */}
        <header className="text-center mb-12">
          <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#8C6F4E] font-semibold mb-2">
            Kindly Respond
          </p>

          <h2 className="font-serif font-semibold text-3xl sm:text-5xl text-[#243329] tracking-tight mb-2">
            RSVP
          </h2>

          <FloralDivider className="w-full max-w-xs mx-auto my-3" />

          <p className="font-serif italic text-base sm:text-lg text-[#5B7065] max-w-lg mx-auto">
            We eagerly anticipate celebrating our covenant of love together with our closest family and friends.
          </p>
        </header>

        {/* Single White Action Card (Anxiety-engineered conversion card) */}
        <div className="bg-white border border-[#243329]/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xs text-center">
          {/* Medallion: cream fill + forest/10 ring, bronze heart with bronze/20 fill */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF7F2] border border-[#243329]/10 flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-xs">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(140, 111, 78, 0.2)"
              stroke="#8C6F4E"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>

          {/* Card Title */}
          <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-[#243329] tracking-tight mb-2">
            Confirm Your Attendance
          </h3>

          {/* Reassurance Explainer (~30 sec) */}
          <p className="text-xs sm:text-sm text-[#5B7065] max-w-md mx-auto mb-6 sm:mb-8 leading-relaxed font-light">
            Takes ~30 seconds to complete. Your response reserves your seat and helps us prepare an unforgettable celebration.
          </p>

          {/* Preview Box: cream fill, forest/10 border */}
          <div className="bg-[#FAF7F2] border border-[#243329]/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8 text-left">
            <div className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#8C6F4E] mb-3 text-center sm:text-left">
              The form asks only 3 things:
            </div>

            <div className="space-y-3">
              {/* Question 1 */}
              <div className="flex items-start gap-3">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#8C6F4E] leading-none shrink-0 w-4 text-center">
                  1
                </span>
                <p className="text-xs sm:text-sm text-[#5B7065] leading-relaxed">
                  <strong className="font-semibold text-[#243329]">Full Name(s)</strong> — one response per party or household as named on your invitation
                </p>
              </div>

              {/* Question 2 */}
              <div className="flex items-start gap-3">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#8C6F4E] leading-none shrink-0 w-4 text-center">
                  2
                </span>
                <p className="text-xs sm:text-sm text-[#5B7065] leading-relaxed">
                  <strong className="font-semibold text-[#243329]">Your Attendance</strong> — whether you will Joyfully Attend or Regretfully Decline
                </p>
              </div>

              {/* Question 3 */}
              <div className="flex items-start gap-3">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#8C6F4E] leading-none shrink-0 w-4 text-center">
                  3
                </span>
                <p className="text-xs sm:text-sm text-[#5B7065] leading-relaxed">
                  <strong className="font-semibold text-[#243329]">Mobile Number</strong> — for reception updates, table arrangements &amp; gentle reminders
                </p>
              </div>
            </div>

            {/* In-box deadline / editable reassurance */}
            <p className="mt-4 pt-3 border-t border-[#243329]/10 text-[11px] text-[#5B7065] font-serif italic text-center">
              Responses remain editable anytime until our deadline on October 31, 2026.
            </p>
          </div>

          {/* Deadline Pill: cream fill, bronze text + gold calendar icon */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/35 text-[#8C6F4E] font-sans text-xs tracking-wider font-semibold shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
              <span>RSVP Deadline: October 31, 2026</span>
            </span>
          </div>

          {/* Primary CTA Button: sage solid → fern hover, white tracked-uppercase text, shadow-md→lg */}
          <div className="flex justify-center">
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] px-8 sm:px-10 py-3.5 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#5B7065] hover:bg-[#475a50] text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B7065]"
            >
              <span>RSVP NOW</span>
              <ExternalLink className="w-4 h-4 text-[#FAF7F2]" aria-hidden="true" />
            </a>
          </div>

          {/* Leave-site Note & Editable Reassurance */}
          <p className="mt-3.5 text-xs text-[#5B7065] max-w-md mx-auto leading-relaxed font-light">
            Opens the official response form in a new tab · Editable anytime until October 31
          </p>

          {/* Ruled Footer Notes (top-ruled forest/10) */}
          <footer className="mt-8 pt-6 border-t border-[#243329]/10 space-y-2.5 text-xs text-[#5B7065] leading-relaxed text-center sm:text-left">
            <p>
              <strong className="font-semibold text-[#243329]">Strictly by Invitation:</strong> Due to venue capacity and reserved banquet seating, we can only accommodate guests formally named on the invitation.
            </p>
            <p>
              <strong className="font-semibold text-[#243329]">Need Assistance?</strong> If you have trouble opening the link or need to adjust your response, please contact {coupleNames.groom} or {coupleNames.bride} directly.
            </p>
            <p className="text-[11px] pt-1 text-[#8C6F4E] font-medium">
              📷 <strong className="text-[#243329]">Unplugged Ceremony:</strong> We kindly ask for phones and cameras to be put away during the sacred Nuptial Mass. At the reception, share every joyous moment with <span className="font-mono text-[#8C6F4E]">#RichInLoveWithChristal</span>
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}
