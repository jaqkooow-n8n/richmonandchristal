import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { BotanicalBranch } from './BotanicalMotif';
import RCLogo from './RCLogo';

interface FooterProps {
  coupleNames: { groom: string; bride: string };
}

export default function Footer({ coupleNames }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-16 sm:py-20 relative overflow-hidden border-t border-amber-500/20">
      {/* Decorative top branch */}
      <div className="flex justify-center mb-6">
        <BotanicalBranch className="w-36 h-8 text-amber-300/40" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        {/* Monogram */}
        <div className="flex justify-center mb-2">
          <RCLogo size="md" className="drop-shadow-lg hover:scale-105 transition-transform" />
        </div>

        {/* Closing Title */}
        <p className="font-serif italic text-2xl sm:text-3xl text-amber-100 font-light max-w-lg mx-auto">
          &ldquo;We can&apos;t wait to celebrate with you.&rdquo;
        </p>

        {/* Couple Names */}
        <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-wide">
          {coupleNames.groom} <span className="font-script text-amber-300 text-4xl sm:text-5xl">&amp;</span> {coupleNames.bride}
        </h3>

        {/* Date Display */}
        <p className="font-mono text-sm tracking-[0.3em] uppercase text-amber-300">
          12 | 02 | 2026
        </p>

        {/* Wedding Hashtag */}
        <div>
          <span className="inline-block px-5 py-2 rounded-full bg-stone-800/80 border border-amber-500/30 text-amber-300 font-mono text-xs tracking-wider shadow-sm">
            #RichInLoveWithChristal
          </span>
        </div>

        {/* Location note */}
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-stone-400">
          Parish of Immaculate Heart of Mary &bull; Jardin de Miramar (Cafe Leonita) &bull; Antipolo City, Rizal
        </p>

        {/* Back to top button */}
        <div className="pt-6">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-800 hover:bg-stone-700 text-amber-200 text-xs uppercase tracking-widest font-sans transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Return to Top</span>
          </button>
        </div>

        <p className="text-[11px] text-stone-500 pt-6">
          Richmon C. Lorenzo &amp; Christal Joy L. Pancho &bull; December 2, 2026 &bull; All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
