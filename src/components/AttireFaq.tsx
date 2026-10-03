import React, { useState } from 'react';
import { Shirt, HelpCircle, ChevronDown, Sparkles, Gift, Camera, Car, Users, Clock, Hash, Heart } from 'lucide-react';
import { BotanicalDivider } from './BotanicalMotif';

export default function AttireFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Exact wedding palette from the couple
  const colorPalette = [
    { name: 'Beige', hex: '#E6D8BC', desc: 'Soft classic neutral' },
    { name: 'Warm Sand', hex: '#D8C4A0', desc: 'Natural golden tone' },
    { name: 'Taupe', hex: '#B79A72', desc: 'Refined earthy balance' },
    { name: 'Deep Tan', hex: '#8C6F4E', desc: 'Rich warm contrast' },
  ];

  const faqs = [
    {
      q: 'What time should we arrive?',
      a: 'The ceremony begins at 3:30 PM. We encourage everyone to arrive early by 3:00 PM, especially those travelling from outside Antipolo.',
      icon: Clock,
    },
    {
      q: 'Is the dress code strictly formal?',
      a: 'Yes. Please refer to our Dress Code section below for the wedding palette and attire guide.',
      icon: Shirt,
    },
    {
      q: 'Can I bring a plus-one?',
      a: "We're having an intimate celebration with a limited guest list, we kindly ask that only the guests named on the invitation attend. We're so grateful to celebrate this special day with you!",
      icon: Users,
    },
    {
      q: 'Are children invited?',
      a: 'We love your little ones, but this is an adults-only event with a limited number of kids invited.',
      icon: Heart,
    },
    {
      q: 'Is parking available?',
      a: 'Yes! Ample parking is available inside the venue.',
      icon: Car,
    },
    {
      q: 'What should I give as a wedding gift?',
      a: 'Your presence is already a gift to us. For those who wish to bless us further, a monetary gift toward our future together would be sincerely appreciated.',
      icon: Gift,
    },
    {
      q: 'How do I RSVP?',
      a: 'Please RSVP through our online RSVP form on this website. Simply click "RSVP NOW" and provide the requested details. Kindly submit your response by October 31, 2026 so we can finalize our arrangements.',
      icon: HelpCircle,
    },
    {
      q: 'Is the ceremony unplugged?',
      a: 'Yes. We kindly request that our ceremony be unplugged. Please keep phones and cameras away during the ceremony and allow our professional photo and video team to capture these special moments. Most importantly, be present and enjoy the moment with us.',
      icon: Camera,
    },
    {
      q: 'What is your wedding hashtag?',
      a: "We'd love to see your photos and memories from our special day! Feel free to use our hashtag when sharing your wedding-day moments on social media: #RichInLoveWithChristal",
      icon: Hash,
    },
  ];

  return (
    <section id="attire-faq" className="py-24 sm:py-32 bg-[#faf8f5] text-stone-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-amber-900 font-semibold mb-2">
            Good to Know
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 mb-4 tracking-tight">
            Dress Code &amp; FAQs
          </h2>
          <BotanicalDivider />
          <p className="font-serif italic text-stone-600 text-lg font-light">
            Strictly Formal • Beige &amp; Neutral Palette
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Attire Guide Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-stone-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                  <Shirt className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-amber-800">
                    Attire Guide
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-stone-900">
                    Strictly Formal
                  </h3>
                </div>
              </div>

              {/* Principal Sponsors Instructions */}
              <div className="mb-5 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 space-y-2">
                <span className="inline-block text-[11px] font-sans font-semibold uppercase tracking-wider text-amber-900 mb-1">
                  Principal Sponsors
                </span>
                <div className="text-xs sm:text-sm text-stone-700 space-y-1">
                  <p>
                    <strong className="text-stone-900">Ninong:</strong> A black suit and pants with a beige necktie.
                  </p>
                  <p>
                    <strong className="text-stone-900">Ninang:</strong> A floor-length gown in a beige color.
                  </p>
                </div>
              </div>

              {/* Guests Instructions */}
              <div className="mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                <span className="inline-block text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-800 mb-1">
                  Guests
                </span>
                <div className="text-xs sm:text-sm text-stone-700 space-y-1">
                  <p>
                    <strong className="text-stone-900">Gentlemen:</strong> A suit and tie or a long-sleeve polo paired with slacks and leather shoes.
                  </p>
                  <p>
                    <strong className="text-stone-900">Ladies:</strong> A floor-length gown in this color palette, paired with chunky heels.
                  </p>
                </div>
              </div>

              {/* Wedding Palette Swatches */}
              <div className="pt-4 border-t border-stone-100">
                <h4 className="text-xs font-sans font-semibold text-stone-900 uppercase tracking-wider mb-3">
                  Wedding Palette:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {colorPalette.map((color) => (
                    <div key={color.name} className="flex flex-col items-center p-2 rounded-xl bg-stone-50 border border-stone-100 group">
                      <div
                        className="w-12 h-12 rounded-full border-2 border-white shadow-md transition-transform group-hover:scale-110"
                        style={{ backgroundColor: color.hex }}
                        title={`${color.name} (${color.hex})`}
                      />
                      <span className="text-xs text-stone-800 text-center font-medium mt-2">
                        {color.name}
                      </span>
                      <span className="text-[10px] text-stone-500 font-mono">
                        {color.hex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Column */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-6 flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 text-amber-700" />
              <span>Good to Know</span>
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const Icon = faq.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-white border border-stone-200/80 shadow-xs overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-serif text-lg sm:text-xl font-normal text-stone-900">
                          {faq.q}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-amber-600' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t border-stone-100 bg-stone-50/30">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
