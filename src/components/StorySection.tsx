import React from 'react';
import { Heart, Compass, BookOpen } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="market-heritage" className="py-20 bg-[#162E23] text-[#FBF9F4] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Heritage Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D8BC93]">
              <span>Fresno Cultural Fabric</span>
              <span aria-hidden="true">·</span>
              <span>Generational Tradition</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#FBF9F4] leading-tight">
              A Living Tradition in the <br />
              <span className="italic font-light text-[#D8BC93]">San Joaquin Valley.</span>
            </h2>

            <p className="text-base text-[#FBF9F4]/80 leading-relaxed">
              Fresno has been the cultural heartland of Armenian-American life for more than a century. From the vineyards and fig orchards tended by early immigrants to the bustling neighborhood bakeries and specialty markets, the flavors of the homeland have always been celebrated here.
            </p>

            <p className="text-sm text-[#FBF9F4]/75 leading-relaxed">
              At <strong className="text-[#FBF9F4]">Hye Market</strong>, &ldquo;Hye&rdquo; (the Armenian word for Armenian) is more than our name—it is our commitment to authenticity. We bridge generations by providing the foods that evoke the tables of our grandmothers: fresh daily lavash, fragrant spices from Aleppo, genuine sheep milk cheeses, and the festive imported sweets that accompany every celebration.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/10">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-serif text-[#C5A059]">
                  <Compass className="w-4 h-4" />
                  <span>Curated Import Sourcing</span>
                </div>
                <p className="text-xs text-[#FBF9F4]/65 leading-relaxed">
                  Working directly with regional distributors to bring hard-to-find Mediterranean staples to Central California.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-serif text-[#C5A059]">
                  <Heart className="w-4 h-4" />
                  <span>Community Connection</span>
                </div>
                <p className="text-xs text-[#FBF9F4]/65 leading-relaxed">
                  Serving both longtime valley families and curious home cooks discovering Middle Eastern cuisine for the first time.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Graphic / Quote Frame (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative p-8 rounded-lg bg-[#0F2018] border border-[#C5A059]/30 shadow-2xl space-y-6">
              <div className="w-8 h-8 rounded border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059]">
                <BookOpen className="w-4 h-4" />
              </div>

              <blockquote className="font-serif text-lg sm:text-xl italic text-[#D8BC93] leading-relaxed">
                &ldquo;Bread is the first greeting, and sweets are the memory left behind.&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-white/10 text-xs text-[#FBF9F4]/70 space-y-1">
                <div className="font-medium text-[#FBF9F4]">Hye Market Specialty Grocery</div>
                <div>2012 W Bullard Ave, Fresno, CA 93711</div>
                <div className="text-[#C5A059]">(559) 448-9791</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
