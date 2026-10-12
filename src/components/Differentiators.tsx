import React, { useState } from 'react';
import { Plus, Check, Info, Sparkles, Flame, Heart } from 'lucide-react';
import { MarketItem } from '../types';

interface DifferentiatorsProps {
  onAddToList: (item: MarketItem) => void;
  isItemInList: (id: string) => boolean;
  lavashItem: MarketItem;
  candyItem: MarketItem;
}

export const Differentiators: React.FC<DifferentiatorsProps> = ({
  onAddToList,
  isItemInList,
  lavashItem,
  candyItem,
}) => {
  const [activeLavashTab, setActiveLavashTab] = useState<'tradition' | 'pairing' | 'care'>('tradition');
  const [activeCandyTab, setActiveCandyTab] = useState<'delight' | 'halva' | 'tradition'>('delight');

  return (
    <section className="py-20 bg-[#FBF9F4] text-[#162E23]">
      <div className="max-w-6xl mx-auto px-6 space-y-28">
        {/* ======================================================== */}
        {/* PILLAR 1: FRESH ARMENIAN LAVASH                         */}
        {/* ======================================================== */}
        <div id="fresh-lavash" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column (6 cols) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden border border-[#D8BC93]/40 shadow-xl aspect-[4/3] bg-[#F4EFE6]">
                  <img
                    src="/src/assets/images/fresh_armenian_lavash_1791781975233.jpg"
                    alt="Freshly baked Armenian lavash flatbread resting in rustic linen cloth basket with warm golden flour"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162E23]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-serif italic text-sm text-[#FBF9F4]">Hearth-Baked Daily</span>
                    <span className="text-[#D8BC93] tracking-wider uppercase text-[11px]">Fresno Specialty</span>
                  </div>
                </div>

                {/* Quiet callout card */}
                <div className="mt-4 p-4 bg-[#F4EFE6] rounded border border-[#D8BC93]/50 flex items-start gap-3">
                  <Flame className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#162E23]/80 leading-relaxed">
                    <strong className="text-[#162E23] font-semibold">Morning Bakery Tip:</strong> Fresh lavash stacks arrive early. For special gatherings or multiple bundles, give the store a quick call at (559) 448-9791.
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Column (6 cols) */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              {/* Unboxed metadata */}
              <div className="flex items-center gap-2 text-xs tracking-wider text-[#C5A059] font-semibold uppercase">
                <span>Signature Bakery</span>
                <span aria-hidden="true">·</span>
                <span>Armenian Heritage</span>
                <span aria-hidden="true">·</span>
                <span>Baked Daily</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#162E23] leading-tight">
                Authentic Armenian Lavash, <br />
                <span className="italic font-normal text-[#234737]">Fresh from the Oven.</span>
              </h2>

              <p className="text-base text-[#162E23]/80 leading-relaxed">
                Known throughout Fresno and the Central Valley, Hye Market is the destination for genuine Armenian lavash. In Armenian households, lavash is not merely bread—it is the hearth of hospitality, blessed at weddings, and served at every feast.
              </p>

              {/* Functional Interactive Tab Selector */}
              <div className="border-b border-[#162E23]/10 flex items-center gap-6 pt-2">
                <button
                  onClick={() => setActiveLavashTab('tradition')}
                  className={`pb-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
                    activeLavashTab === 'tradition'
                      ? 'border-[#162E23] text-[#162E23]'
                      : 'border-transparent text-[#162E23]/50 hover:text-[#162E23]'
                  }`}
                >
                  The Heritage
                </button>
                <button
                  onClick={() => setActiveLavashTab('pairing')}
                  className={`pb-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
                    activeLavashTab === 'pairing'
                      ? 'border-[#162E23] text-[#162E23]'
                      : 'border-transparent text-[#162E23]/50 hover:text-[#162E23]'
                  }`}
                >
                  Table Pairings
                </button>
                <button
                  onClick={() => setActiveLavashTab('care')}
                  className={`pb-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
                    activeLavashTab === 'care'
                      ? 'border-[#162E23] text-[#162E23]'
                      : 'border-transparent text-[#162E23]/50 hover:text-[#162E23]'
                  }`}
                >
                  Care & Rehydrating
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="text-sm text-[#162E23]/80 space-y-3 min-h-[100px]">
                {activeLavashTab === 'tradition' && (
                  <p className="leading-relaxed">
                    Crafted with simple, wholesome ingredients—flour, water, and salt—rolled paper-thin and baked against hot oven surfaces to create signature blistered air pockets. Pliable enough to roll tightly, and naturally long-lasting.
                  </p>
                )}
                {activeLavashTab === 'pairing' && (
                  <p className="leading-relaxed">
                    Enjoy with thinly sliced basturma beef, cured soujouk, braided string cheese, fresh tarragon and radishes. Or wrap around hot luleh and shish kebabs to catch all the savory juices.
                  </p>
                )}
                {activeLavashTab === 'care' && (
                  <p className="leading-relaxed">
                    If dried, authentic lavash can keep for months. To soften, simply mist gently with water, cover with a clean kitchen linen for 15 minutes, and it returns to soft, pliable perfection.
                  </p>
                )}
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onAddToList(lavashItem)}
                  className={`inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap shadow-sm ${
                    isItemInList(lavashItem.id)
                      ? 'bg-[#234737] text-white'
                      : 'bg-[#162E23] text-[#FBF9F4] hover:bg-[#234737]'
                  }`}
                >
                  {isItemInList(lavashItem.id) ? (
                    <>
                      <Check className="w-4 h-4 text-[#D8BC93]" />
                      <span>Added to Market List</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-[#D8BC93]" />
                      <span>Add Fresh Lavash to List</span>
                    </>
                  )}
                </button>

                <span className="text-xs text-[#162E23]/60 italic">Available daily on Bullard Ave</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PILLAR 2: IMPORTED CANDIES & CONFECTIONS                 */}
        {/* ======================================================== */}
        <div id="imported-candies" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Narrative Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Unboxed metadata */}
              <div className="flex items-center gap-2 text-xs tracking-wider text-[#C5A059] font-semibold uppercase">
                <span>Direct Imports</span>
                <span aria-hidden="true">·</span>
                <span>Confectionery Hall</span>
                <span aria-hidden="true">·</span>
                <span>Handcrafted Sweets</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#162E23] leading-tight">
                Imported Candies, <br />
                <span className="italic font-normal text-[#234737]">Turkish Delight & Halva.</span>
              </h2>

              <p className="text-base text-[#162E23]/80 leading-relaxed">
                Step into Hye Market’s confectionery aisle and discover a world of authentic Middle Eastern, Armenian, and European confections. From fragrant lokum dusted with powdered sugar to rich tahini halva studded with whole Antep pistachios, these are sweets made with generational technique.
              </p>

              {/* Functional Interactive Tab Selector */}
              <div className="border-b border-[#162E23]/10 flex items-center gap-6 pt-2">
                <button
                  onClick={() => setActiveCandyTab('delight')}
                  className={`pb-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
                    activeCandyTab === 'delight'
                      ? 'border-[#162E23] text-[#162E23]'
                      : 'border-transparent text-[#162E23]/50 hover:text-[#162E23]'
                  }`}
                >
                  Lokum & Delights
                </button>
                <button
                  onClick={() => setActiveCandyTab('halva')}
                  className={`pb-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
                    activeCandyTab === 'halva'
                      ? 'border-[#162E23] text-[#162E23]'
                      : 'border-transparent text-[#162E23]/50 hover:text-[#162E23]'
                  }`}
                >
                  Artisanal Halva
                </button>
                <button
                  onClick={() => setActiveCandyTab('tradition')}
                  className={`pb-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 whitespace-nowrap ${
                    activeCandyTab === 'tradition'
                      ? 'border-[#162E23] text-[#162E23]'
                      : 'border-transparent text-[#162E23]/50 hover:text-[#162E23]'
                  }`}
                >
                  Hospitality Custom
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="text-sm text-[#162E23]/80 space-y-3 min-h-[100px]">
                {activeCandyTab === 'delight' && (
                  <p className="leading-relaxed">
                    Sourced from historic regional confectioners. Hand-stirred in copper cauldrons with real fruit juices, mastic, rosewater, and overflowing with whole roasted pistachios and walnuts. Soft, elastic bite without gelatin.
                  </p>
                )}
                {activeCandyTab === 'halva' && (
                  <p className="leading-relaxed">
                    Stone-milled Ethiopian sesame paste slow-folded into delicate, fibrous caramelized layers. Available plain, cocoa-marbled, or pistachio-loaded, delivering rich natural calcium and nutty sweetness.
                  </p>
                )}
                {activeCandyTab === 'tradition' && (
                  <p className="leading-relaxed">
                    In Mediterranean culture, a tray of wrapped sweets and Turkish delight is presented alongside demi-tasse coffee whenever a guest crosses the threshold. Keep a box ready in your home pantry for family and friends.
                  </p>
                )}
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onAddToList(candyItem)}
                  className={`inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider rounded transition-colors whitespace-nowrap shadow-sm ${
                    isItemInList(candyItem.id)
                      ? 'bg-[#234737] text-white'
                      : 'bg-[#162E23] text-[#FBF9F4] hover:bg-[#234737]'
                  }`}
                >
                  {isItemInList(candyItem.id) ? (
                    <>
                      <Check className="w-4 h-4 text-[#D8BC93]" />
                      <span>Added to Market List</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-[#D8BC93]" />
                      <span>Add Confections to List</span>
                    </>
                  )}
                </button>

                <span className="text-xs text-[#162E23]/60 italic">Sold packaged & by weight</span>
              </div>
            </div>

            {/* Visual Column (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden border border-[#D8BC93]/40 shadow-xl aspect-[4/3] bg-[#F4EFE6]">
                  <img
                    src="/src/assets/images/imported_candies_1791781986527.jpg"
                    alt="Imported Middle Eastern Turkish delight confections with pistachios and wrapped European fine chocolates"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162E23]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-serif italic text-sm text-[#FBF9F4]">Pistachio Lokum & Specialties</span>
                    <span className="text-[#D8BC93] tracking-wider uppercase text-[11px]">Direct Import</span>
                  </div>
                </div>

                {/* Sweet pairing tip */}
                <div className="mt-4 p-4 bg-[#F4EFE6] rounded border border-[#D8BC93]/50 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#162E23]/80 leading-relaxed">
                    <strong className="text-[#162E23] font-semibold">Special Gift Boxes:</strong> Hye Market carries decorative confections and holiday assortments ideal for Easter, Christmas, weddings, and family gatherings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
