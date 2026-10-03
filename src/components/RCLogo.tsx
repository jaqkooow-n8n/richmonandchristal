import React from 'react';

interface RCLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  variant?: 'crest' | 'minimal' | 'badge';
  withGlow?: boolean;
}

/**
 * Custom handcrafted R&C Luxury Wedding Crest Monogram Logo
 * Designed for Richmon & Christal's December 2, 2026 Wedding
 */
export default function RCLogo({
  size = 'md',
  className = '',
  variant = 'crest',
  withGlow = true,
}: RCLogoProps) {
  // Sizing map
  const pixelSize =
    typeof size === 'number'
      ? size
      : size === 'xs'
      ? 28
      : size === 'sm'
      ? 38
      : size === 'md'
      ? 52
      : size === 'lg'
      ? 68
      : 88;

  return (
    <div
      className={`inline-flex items-center justify-center relative select-none shrink-0 ${className}`}
      style={{ width: pixelSize, height: pixelSize }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Rich Antique Gold Linear Gradient */}
          <linearGradient id="rcGoldGrad" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#F9F1D8" />
            <stop offset="25%" stopColor="#E6C875" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="75%" stopColor="#B38628" />
            <stop offset="100%" stopColor="#ECCF7E" />
          </linearGradient>

          {/* Warm Champagne Glow Gradient */}
          <radialGradient id="rcGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
            <stop offset="65%" stopColor="#D4AF37" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>

          {/* Inner Disc Gradient */}
          <radialGradient id="rcDiscGrad" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#1c1917" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0c0a09" stopOpacity="0.95" />
          </radialGradient>

          {/* Drop shadow filter */}
          <filter id="rcShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Ambient Glow */}
        {withGlow && <circle cx="60" cy="60" r="58" fill="url(#rcGlowGrad)" />}

        {/* Outer Circular Seal Backdrop */}
        <circle cx="60" cy="60" r="52" fill="url(#rcDiscGrad)" />

        {/* Outer Fine Crest Ring */}
        <circle
          cx="60"
          cy="60"
          r="52"
          stroke="url(#rcGoldGrad)"
          strokeWidth="1.2"
          strokeOpacity="0.75"
        />

        {/* Dotted Accent Ring */}
        <circle
          cx="60"
          cy="60"
          r="47.5"
          stroke="url(#rcGoldGrad)"
          strokeWidth="0.8"
          strokeDasharray="1.5 2.5"
          strokeOpacity="0.6"
        />

        {/* Inner Hairline Ring */}
        <circle
          cx="60"
          cy="60"
          r="44"
          stroke="url(#rcGoldGrad)"
          strokeWidth="0.7"
          strokeOpacity="0.5"
        />

        {/* Cardinal Botanical Laurel Sprigs & Accents */}
        {variant !== 'minimal' && (
          <g stroke="url(#rcGoldGrad)" fill="url(#rcGoldGrad)" strokeWidth="0.8">
            {/* Top North Star / Diamond */}
            <path
              d="M60 10.5 L61.8 14 L60 17.5 L58.2 14 Z"
              fill="url(#rcGoldGrad)"
              opacity="0.9"
            />
            {/* Bottom South Diamond */}
            <path
              d="M60 102.5 L61.8 106 L60 109.5 L58.2 106 Z"
              fill="url(#rcGoldGrad)"
              opacity="0.9"
            />
            {/* Left West Accent */}
            <circle cx="10" cy="60" r="1.2" fill="url(#rcGoldGrad)" opacity="0.8" />
            {/* Right East Accent */}
            <circle cx="110" cy="60" r="1.2" fill="url(#rcGoldGrad)" opacity="0.8" />

            {/* Left Laurel Branch */}
            <path
              d="M17 60 C17 38 34 21 54 18"
              fill="none"
              stroke="url(#rcGoldGrad)"
              strokeWidth="0.8"
              strokeDasharray="2 3"
              opacity="0.4"
            />
            <path d="M22 46 C19 44 19 39 23 41 C24 43 24 45 22 46 Z" opacity="0.75" />
            <path d="M28 34 C25 32 26 27 30 30 C30 32 30 34 28 34 Z" opacity="0.75" />
            <path d="M38 25 C36 22 38 18 42 21 C41 23 40 25 38 25 Z" opacity="0.75" />

            {/* Right Laurel Branch */}
            <path
              d="M103 60 C103 38 86 21 66 18"
              fill="none"
              stroke="url(#rcGoldGrad)"
              strokeWidth="0.8"
              strokeDasharray="2 3"
              opacity="0.4"
            />
            <path d="M98 46 C101 44 101 39 97 41 C96 43 96 45 98 46 Z" opacity="0.75" />
            <path d="M92 34 C95 32 94 27 90 30 C90 32 90 34 92 34 Z" opacity="0.75" />
            <path d="M82 25 C84 22 82 18 78 21 C79 23 80 25 82 25 Z" opacity="0.75" />
          </g>
        )}

        {/* 
          CENTRAL MONOGRAM: "R & C"
          Hand-tuned vector serif letterforms for Richmon & Christal
        */}
        <g filter="url(#rcShadow)">
          {/* LETTER "R" (Richmon) */}
          <g fill="url(#rcGoldGrad)">
            {/* Vertical Left Stem */}
            <path d="M29 37 H39.5 V40 H36 V76 H40 V79 H29 V76 H32.5 V40 H29 Z" />
            {/* Top Serif Bracket */}
            <path d="M36 40 H49 C56.5 40 60.5 44 60.5 50.5 C60.5 57 56 61 48 61 H36 V40 Z M40 43.5 V57.5 H48 C53 57.5 56 55 56 50.5 C56 46 53 43.5 48 43.5 Z" />
            {/* Diagonal Leg with Graceful Terminal Flourish */}
            <path d="M46.5 59.5 L56.5 76 H58 V79 H48 L40.5 66 H40 V76 H36 V60 H46.5 Z M56.5 76 C57.5 76 59 77 60.5 78.5 L58 79 C57 78 56 77 55.5 76 Z" />
          </g>

          {/* CALLIGRAPHIC AMPERSAND "&" (Intertwined) */}
          <path
            d="M60.5 49 C63 45 65.5 41 62 38 C59 35.5 55.5 38 56 42 C56.5 46.5 61 51 65 55.5 C61 60 56 65 56 70 C56 75.5 60.5 78.5 65.5 77 C69.5 76 72 73 72.5 70 C73 66.5 69.5 63.5 67 65.5 C65.5 66.8 65.8 69 68 70 C66 72 63 73 61.5 71.5 C59.5 69.5 60.5 65 64 60.5 C68.5 65 73.5 70 76.5 73.5 L75 75.5 C72 71.5 67 66.5 63 62 C66.5 58 68.5 53 68 49 C67.5 43.5 63 42 61 45 C59.5 47 58.5 49.5 60.5 49 Z"
            fill="url(#rcGoldGrad)"
            opacity="0.95"
          />

          {/* LETTER "C" (Christal) */}
          <path
            d="M89 45.5 C88 43 85 39 79 39 C70 39 64.5 47 64.5 59 C64.5 71 70.5 79 80 79 C86 79 89 74.5 90.5 72 L88 70.5 C87 72.5 84.5 75.5 80 75.5 C72.5 75.5 68.5 69 68.5 59 C68.5 49 73 42.5 79 42.5 C83.5 42.5 86 45 87 47.5 Z"
            fill="url(#rcGoldGrad)"
          />
        </g>

        {/* Bottom Fine Sub-script / Wedding Year */}
        <text
          x="60"
          y="93"
          textAnchor="middle"
          fill="url(#rcGoldGrad)"
          fontSize="5.8"
          letterSpacing="0.32em"
          fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
          opacity="0.85"
        >
          12 • 02 • 26
        </text>

        {/* Small Bottom Delicate Leaf Flourish */}
        <path
          d="M52 97.5 C55 96.5 58 97.5 60 98.5 C62 97.5 65 96.5 68 97.5"
          stroke="url(#rcGoldGrad)"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="60" cy="98.5" r="0.75" fill="url(#rcGoldGrad)" opacity="0.85" />
      </svg>
    </div>
  );
}
