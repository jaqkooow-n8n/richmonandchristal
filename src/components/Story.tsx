import React from 'react';
import { Heart, Sparkles, Compass } from 'lucide-react';
import { BotanicalDivider, BotanicalCorner } from './BotanicalMotif';
import storyImg from '../assets/images/story_couple_forest.jpg';

interface StoryProps {
  coupleNames: { groom: string; bride: string };
}

export default function Story({ coupleNames }: StoryProps) {
  const chapters = [
    {
      period: '2012',
      title: 'High School Glances',
      text: 'Our love story began in the halls of high school in 2012, where shy glances and stolen smiles revealed a love neither of us was ready to name.',
    },
    {
      period: 'The Reconnection',
      title: 'A Twist of Fate',
      text: 'After graduation, life took us on separate paths, but fate had a beautiful way of bringing us back to each other. With a simple encounter at a jeepney terminal, our story began anew.',
    },
    {
      period: 'Through the Years',
      title: 'Choosing Each Other Every Day',
      text: 'What began as a youthful romance grew deeper through the years, carrying us through college, simple dates, challenges, and moments that taught us the beauty of choosing each other every day.',
    },
    {
      period: 'Building Dreams',
      title: 'Side by Side, Hand in Hand',
      text: 'As we stepped into a new life in the Metro, we built careers, supported our families, traveled, dreamed, and grew together, side by side and hand in hand.',
    },
    {
      period: 'December 2, 2026',
      title: 'Fourteen Years Later',
      text: "Fourteen years later, we're choosing each other for a lifetime.",
      isHighlight: true,
    },
  ];

  return (
    <section id="story" className="py-24 sm:py-32 bg-[#faf8f5] text-stone-800 relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-100/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-emerald-800 font-semibold mb-2">
            Two Hearts, One Lifetime
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 mb-4 tracking-tight">
            Our Story
          </h2>
          <BotanicalDivider />
          <p className="font-serif italic text-stone-600 text-lg sm:text-xl font-light">
            &ldquo;From high school glances to a lifetime of love — 14 years in the making.&rdquo;
          </p>
        </div>

        {/* Story Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Couple Forest Story Photo with Romantic Architectural Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative borders */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl sm:rounded-[2.5rem] border border-amber-700/20 pointer-events-none" />
              <div className="absolute -top-6 -left-6 z-20 hidden sm:block">
                <BotanicalCorner className="w-14 h-14 text-emerald-800/40" />
              </div>
              <div className="absolute -bottom-6 -right-6 z-20 hidden sm:block rotate-180">
                <BotanicalCorner className="w-14 h-14 text-emerald-800/40" />
              </div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl bg-stone-100 aspect-[4/5] group">
                <img
                  src={storyImg}
                  alt={`${coupleNames.groom} & ${coupleNames.bride} Story`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent opacity-85" />

                {/* Floating caption badge on image */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-center p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/15">
                  <p className="font-script text-3xl sm:text-4xl text-amber-200 mb-1">
                    Two Hearts, One Lifetime
                  </p>
                  <p className="font-sans text-[11px] uppercase tracking-widest text-stone-200 font-mono">
                    2012 — 2026 • 14 Years Together
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Narrative Chapters */}
          <div className="lg:col-span-6 space-y-6 relative">
            <div className="border-l-2 border-amber-700/30 pl-6 sm:pl-8 space-y-7 relative">
              {chapters.map((chap, index) => (
                <div key={index} className="relative group">
                  {/* Timeline node */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      chap.isHighlight
                        ? 'border-amber-600 bg-amber-600 shadow-md scale-110'
                        : 'border-emerald-800 bg-[#faf8f5] group-hover:scale-125 group-hover:bg-emerald-800'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        chap.isHighlight ? 'bg-stone-950' : 'bg-emerald-800 group-hover:bg-white'
                      }`}
                    />
                  </div>

                  {/* Period Tag */}
                  <span
                    className={`inline-block px-3 py-0.5 rounded-full font-sans text-[11px] font-semibold tracking-wider mb-1.5 ${
                      chap.isHighlight
                        ? 'bg-amber-600 text-stone-950 shadow-xs'
                        : 'bg-amber-100/80 text-amber-900'
                    }`}
                  >
                    {chap.period}
                  </span>

                  {/* Title & Narrative */}
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-900 mb-1.5 tracking-wide">
                    {chap.title}
                  </h3>
                  <p className="font-sans text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                    {chap.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Note of Gratitude */}
            <div className="pt-2 p-5 rounded-2xl bg-amber-50/80 border border-amber-200/60 text-stone-700 shadow-xs">
              <p className="font-serif italic text-base leading-relaxed text-amber-950">
                &ldquo;We can&apos;t wait to celebrate with you as we mark 14 years of love and begin our forever.&rdquo;
              </p>
              <p className="text-right font-script text-2xl text-amber-800 mt-1">
                — {coupleNames.groom} &amp; {coupleNames.bride}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
