/**
 * Botanical decorative vector motifs for wedding styling
 */
export function BotanicalBranch({ className = "w-24 h-6 text-emerald-800/40" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M5 12C25 12 35 12 95 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Top Leaves */}
      <path
        d="M20 12C20 8 26 6 30 10C26 12 22 12 20 12Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M40 12C40 7 47 5 52 9C47 12 43 12 40 12Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M62 12C62 8 68 6 72 10C68 12 64 12 62 12Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M82 12C82 9 86 7 90 10C86 12 83 12 82 12Z"
        fill="currentColor"
        opacity="0.7"
      />

      {/* Bottom Leaves */}
      <path
        d="M30 12C30 16 36 18 40 14C36 12 32 12 30 12Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M52 12C52 17 59 19 64 15C59 12 55 12 52 12Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M72 12C72 16 78 18 82 14C78 12 74 12 72 12Z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  );
}

export function BotanicalDivider({ className = "w-full max-w-xs mx-auto text-emerald-900/40 my-4" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-emerald-800/30 to-amber-700/40"></span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-700/70 shrink-0">
        <path
          d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
          fill="currentColor"
        />
        <circle cx="12" cy="12" r="1.5" fill="#fef3c7" />
      </svg>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-emerald-800/30 to-amber-700/40"></span>
    </div>
  );
}

export function BotanicalCorner({ className = "w-16 h-16 text-emerald-800/30" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M4 56C4 28 28 4 56 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 30C16 26 12 20 18 16C22 20 22 26 20 30Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M36 18C32 14 30 8 36 6C40 10 38 16 36 18Z"
        fill="currentColor"
        opacity="0.6"
      />
      <circle cx="4" cy="56" r="2.5" fill="currentColor" opacity="0.8" />
    </svg>
  );
}
