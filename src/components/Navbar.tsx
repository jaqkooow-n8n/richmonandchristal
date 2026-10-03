import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles } from 'lucide-react';
import RCLogo from './RCLogo';

interface NavbarProps {
  coupleNames: { groom: string; bride: string };
}

export default function Navbar({ coupleNames }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Venues', href: '#venues' },
    { name: 'Entourage', href: '#entourage' },
    { name: 'Attire & FAQ', href: '#attire-faq' },
    { name: 'RSVP', href: '#rsvp', isHighlight: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-stone-900/90 backdrop-blur-md py-3 shadow-[0_4px_24px_rgba(0,0,0,0.3)] border-b border-amber-500/20'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-stone-100 hover:text-amber-300 transition-colors group"
        >
          <RCLogo size="sm" className="group-hover:scale-105 transition-transform drop-shadow-md" />
          <span className="font-serif text-lg tracking-wider hidden sm:inline text-stone-100 font-light group-hover:text-amber-200 transition-colors">
            {coupleNames.groom} &amp; {coupleNames.bride}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] font-sans transition-all duration-300 ${
                link.isHighlight
                  ? 'px-4 py-2 rounded-full bg-amber-600/90 hover:bg-amber-500 text-stone-950 font-semibold shadow-md hover:scale-105 active:scale-95'
                  : 'text-stone-200 hover:text-amber-300 hover:-translate-y-0.5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="#rsvp"
            className="px-3 py-1.5 rounded-full bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium text-[11px] uppercase tracking-wider shadow"
          >
            RSVP
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-200 hover:text-amber-300 hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900/95 border-b border-amber-500/20 backdrop-blur-xl px-6 py-6 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm uppercase tracking-[0.22em] font-sans transition-colors ${
                  link.isHighlight
                    ? 'inline-block px-6 py-2.5 rounded-full bg-amber-600 text-stone-950 font-semibold mx-auto mt-2'
                    : 'text-stone-300 hover:text-amber-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
