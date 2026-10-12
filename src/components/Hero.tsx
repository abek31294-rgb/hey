import React from 'react';
import { ArrowDown, MapPin, Phone, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenVisitModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVisitModal }) => {
  return (
    <section className="relative bg-[#162E23] text-[#FBF9F4] overflow-hidden">
      {/* Decorative subtle atmospheric glow */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, #D8BC93 0%, transparent 40%), radial-gradient(circle at 10% 80%, #C5A059 0%, transparent 35%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Prose & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs tracking-wider text-[#D8BC93] font-medium uppercase">
              <span>Fresno, California</span>
              <span aria-hidden="true">·</span>
              <span>2012 W Bullard Ave</span>
              <span aria-hidden="true">·</span>
              <span>Specialty Grocery & Bakery</span>
            </div>

            {/* Editorial Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FBF9F4] leading-[1.1] text-balance">
              The Living Taste of <br />
              <span className="italic font-light text-[#D8BC93]">Armenian & Middle Eastern</span> <br />
              Food Heritage.
            </h1>

            {/* Refined Sans-Serif Body */}
            <p className="text-base sm:text-lg text-[#FBF9F4]/80 max-w-xl leading-relaxed">
              Purveyors of warm, paper-thin hearth-baked lavash, rare imported confectioneries,
              aromatic Aleppo spices, and authentic Mediterranean pantry staples in the heart of
              Fresno.
            </p>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#market-catalog"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#162E23] bg-[#D8BC93] hover:bg-[#E2CEAE] transition-colors rounded shadow-sm whitespace-nowrap"
              >
                <span>Explore Market Offerings</span>
                <ArrowDown className="w-4 h-4 text-[#162E23]" />
              </a>

              <button
                onClick={onOpenVisitModal}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#FBF9F4] border border-[#D8BC93]/40 hover:border-[#D8BC93] hover:bg-white/5 transition-colors rounded whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>Visit Us on Bullard Ave</span>
              </button>
            </div>

            {/* Quiet Quick Phone Affordance */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#FBF9F4]/70">
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Questions or custom orders? Direct line:</span>
              <a
                href="tel:5594489791"
                className="text-[#D8BC93] hover:text-white font-medium underline underline-offset-4"
              >
                (559) 448-9791
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Editorial Photography (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative antique gold hairline rim */}
              <div className="absolute -inset-1.5 rounded-lg border border-[#C5A059]/30 pointer-events-none transform translate-x-2 translate-y-2 hidden sm:block" />

              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-[#0F2018] aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src="/src/assets/images/hye_market_hero_1791781962574.jpg"
                  alt="Hye Market interior featuring shelves of imported specialty goods, olive oils, and fresh bread counter"
                  className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#162E23]/90 via-transparent to-transparent opacity-80" />

                {/* Subtle In-Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#FBF9F4]/90 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="font-serif italic text-sm">Fresno&apos;s Neighborhood Market</span>
                  </div>
                  <span className="text-[#D8BC93] text-[11px] uppercase tracking-wider">Bullard & West</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Highlights Strip Below Hero */}
        <div className="mt-14 pt-8 border-t border-[#FBF9F4]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-[#FBF9F4]/90">
          <div>
            <div className="text-[#C5A059] font-serif text-lg font-medium">Fresh Lavash</div>
            <p className="text-xs text-[#FBF9F4]/70 mt-1">Baked daily with paper-thin softness & hearth blisters</p>
          </div>
          <div>
            <div className="text-[#C5A059] font-serif text-lg font-medium">Imported Candies</div>
            <p className="text-xs text-[#FBF9F4]/70 mt-1">Antep pistachio Turkish delight, halva & fine chocolates</p>
          </div>
          <div>
            <div className="text-[#C5A059] font-serif text-lg font-medium">Artisanal Pantry</div>
            <p className="text-xs text-[#FBF9F4]/70 mt-1">Aleppo pepper, pure pomegranate molasses & wild thyme</p>
          </div>
          <div>
            <div className="text-[#C5A059] font-serif text-lg font-medium">Central Valley Roots</div>
            <p className="text-xs text-[#FBF9F4]/70 mt-1">Serving Fresno’s culinary enthusiasts at 2012 W Bullard Ave</p>
          </div>
        </div>
      </div>
    </section>
  );
};
