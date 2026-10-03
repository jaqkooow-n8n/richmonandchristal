import React, { useState } from 'react';
import { MapPin, Navigation, Car, ExternalLink, Compass, Clock } from 'lucide-react';
import { BotanicalDivider } from './BotanicalMotif';

// Venue images
import churchImg from '../assets/images/Parish of Immaculate Heart of Mary.webp';
import receptionImg from '../assets/images/Jardin de Miramar.jpg';

export default function Venues() {
  const [activeTab, setActiveTab] = useState<'both' | 'ceremony' | 'reception'>('both');

  const venues = [
    {
      id: 'ceremony',
      name: 'Parish of Immaculate Heart of Mary',
      role: 'The Wedding Ceremony',
      time: '3:30 PM',
      address: 'Hinulugan Taktak Road, Brgy. Dela Paz, Antipolo City',
      image: churchImg,
      desc: 'Known as the "Church in the Hills," the Parish of Immaculate Heart of Mary is famed for its iconic open-air dome and arched timber beam architecture designed by Dom Martin Gomez. Set along Hinulugan Taktak Road in peaceful green surroundings, it is the sacred sanctuary where Richmon & Christal will profess their vows.',
      mapsUrl: 'https://maps.app.goo.gl/KzgwW3CiSZeUrkzR7',
      wazeUrl: 'https://waze.com/ul?q=Parish%20of%20the%20Immaculate%20Heart%20of%20Mary%20Antipolo',
      tips: [
        'Ceremony begins at 3:30 PM; please arrive by 3:00 PM for seating',
        'Ample parking is available inside the church grounds',
        'Please observe our unplugged ceremony during the vows',
      ],
    },
    {
      id: 'reception',
      name: 'Jardin de Miramar (Cafe Leonita)',
      role: 'Dinner Reception & Celebration',
      time: 'Reception Follows Ceremony (5:00 PM Cocktails • 7:00 PM Dinner)',
      address: '279 Buliran Road, Antipolo, Rizal',
      image: receptionImg,
      desc: 'Set amidst 3 hectares of enchanting botanical gardens, Jardin de Miramar’s Cafe Leonita pavilion is a haven of rustic wooden charm, fairy lights, and lush tropical greenery where our celebration, dinner, and dancing continue into the evening.',
      mapsUrl: 'https://maps.app.goo.gl/WFqPHJdiDRCi4xse8',
      wazeUrl: 'https://waze.com/ul?q=Jardin%20de%20Miramar%20Buliran%20Road%20Antipolo',
      tips: [
        'Located at 279 Buliran Road with dedicated parking attendants',
        'Approx. 15 minutes scenic drive from the church',
        'Cocktail hour begins at 5:00 PM upon arrival',
      ],
    },
  ];

  return (
    <section id="venues" className="py-24 sm:py-32 bg-[#faf8f5] text-stone-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-emerald-800 font-semibold mb-2">
            Where Lifetime Begins
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 mb-4 tracking-tight">
            Venues
          </h2>
          <BotanicalDivider />
          <p className="font-serif italic text-stone-600 text-lg font-light">
            Parish of Immaculate Heart of Mary &amp; Jardin de Miramar (Cafe Leonita) • Antipolo, Rizal
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'both'
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-stone-200/70 text-stone-600 hover:bg-stone-200'
              }`}
            >
              All Venues
            </button>
            <button
              onClick={() => setActiveTab('ceremony')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'ceremony'
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-stone-200/70 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Ceremony (3:30 PM)
            </button>
            <button
              onClick={() => setActiveTab('reception')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'reception'
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-stone-200/70 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Reception (Cafe Leonita)
            </button>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
          {venues
            .filter((v) => activeTab === 'both' || v.id === activeTab)
            .map((venue) => (
              <div
                key={venue.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-500 flex flex-col group"
              >
                {/* Image Header with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 text-amber-300 font-sans text-xs tracking-wider uppercase font-medium">
                      {venue.role}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal drop-shadow-md">
                      {venue.name}
                    </h3>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4 mb-6">
                    {/* Time & Address */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-950 font-medium bg-amber-50 p-2.5 rounded-xl border border-amber-200/60">
                        <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                        <span className="font-mono">{venue.time}</span>
                      </div>

                      <div className="flex items-start gap-2.5 text-xs text-stone-600">
                        <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span className="font-light">{venue.address}</span>
                      </div>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                      {venue.desc}
                    </p>

                    {/* Guest Tips */}
                    <div className="pt-2">
                      <h4 className="text-[11px] font-sans font-semibold text-stone-900 uppercase tracking-widest mb-2">
                        Good to Know:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-stone-600">
                        {venue.tips.map((tip, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Navigation Action Buttons with exact Google Maps links */}
                  <div className="pt-4 border-t border-stone-100 flex flex-wrap gap-2.5">
                    <a
                      href={venue.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-100 font-medium text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-102"
                    >
                      <Navigation className="w-3.5 h-3.5 text-amber-400" />
                      <span>Open in Google Maps</span>
                    </a>

                    <a
                      href={venue.wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 border border-stone-300 transition-all hover:scale-102"
                    >
                      <Car className="w-3.5 h-3.5 text-cyan-600" />
                      <span>Waze</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Route Card between Hinulugan Taktak Rd and Buliran Rd */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-amber-700/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-amber-100/80 text-amber-800 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-normal text-stone-900">
                Transit from Church to Cafe Leonita, Jardin de Miramar
              </h4>
              <p className="text-xs text-stone-600 font-light">
                Distance: ~4.5 km (~15 mins drive). Travel via Hinulugan Taktak Road toward Buliran Road.
              </p>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/WFqPHJdiDRCi4xse8"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 font-medium text-xs tracking-wider uppercase flex items-center gap-1.5 transition-colors"
          >
            <span>Reception Map Link</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
