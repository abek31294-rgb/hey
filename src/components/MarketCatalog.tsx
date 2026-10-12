import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Filter, Utensils, Sparkles, MapPin } from 'lucide-react';
import { MarketItem } from '../types';

interface MarketCatalogProps {
  items: MarketItem[];
  onAddToList: (item: MarketItem) => void;
  isItemInList: (id: string) => boolean;
}

type CategoryFilter = 'all' | 'bakery' | 'candies' | 'pantry' | 'deli' | 'beverages';

export const MarketCatalog: React.FC<MarketCatalogProps> = ({
  items,
  onAddToList,
  isItemInList,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.armenianName && item.armenianName.includes(searchQuery)) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  return (
    <section id="market-catalog" className="py-20 bg-[#F4EFE6] border-t border-[#162E23]/10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
            <span>Specialty Department</span>
            <span aria-hidden="true">·</span>
            <span>Armenian & Middle Eastern Provisions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#162E23]">
            Curated Market Provisions
          </h2>

          <p className="text-sm sm:text-base text-[#162E23]/75 leading-relaxed">
            Every shelf at Hye Market is stocked with ingredients that anchor Mediterranean and Middle Eastern home cooking. Build your visit list before stopping by our Bullard Avenue market.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#162E23]/10 pb-6">
          {/* Functional Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EAE3D2] rounded-lg">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#162E23] text-[#FBF9F4] shadow-sm'
                  : 'text-[#162E23]/70 hover:text-[#162E23]'
              }`}
            >
              All Provisions ({items.length})
            </button>
            <button
              onClick={() => setSelectedCategory('bakery')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'bakery'
                  ? 'bg-[#162E23] text-[#FBF9F4] shadow-sm'
                  : 'text-[#162E23]/70 hover:text-[#162E23]'
              }`}
            >
              Bakery & Lavash
            </button>
            <button
              onClick={() => setSelectedCategory('candies')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'candies'
                  ? 'bg-[#162E23] text-[#FBF9F4] shadow-sm'
                  : 'text-[#162E23]/70 hover:text-[#162E23]'
              }`}
            >
              Imported Candies
            </button>
            <button
              onClick={() => setSelectedCategory('pantry')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'pantry'
                  ? 'bg-[#162E23] text-[#FBF9F4] shadow-sm'
                  : 'text-[#162E23]/70 hover:text-[#162E23]'
              }`}
            >
              Pantry & Spices
            </button>
            <button
              onClick={() => setSelectedCategory('deli')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'deli'
                  ? 'bg-[#162E23] text-[#FBF9F4] shadow-sm'
                  : 'text-[#162E23]/70 hover:text-[#162E23]'
              }`}
            >
              Deli & Cheeses
            </button>
            <button
              onClick={() => setSelectedCategory('beverages')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'beverages'
                  ? 'bg-[#162E23] text-[#FBF9F4] shadow-sm'
                  : 'text-[#162E23]/70 hover:text-[#162E23]'
              }`}
            >
              Coffee & Tea
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#162E23]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search lavash, lokum, za'atar..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#FBF9F4] border border-[#162E23]/15 rounded-md text-[#162E23] placeholder-[#162E23]/40 focus:outline-none focus:ring-1 focus:ring-[#162E23]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#162E23]/40 hover:text-[#162E23]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 3-Column Product Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-serif text-lg text-[#162E23]">No items match your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-medium text-[#C5A059] underline hover:text-[#162E23]"
            >
              Reset filters and view all provisions
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const inList = isItemInList(item.id);
              return (
                <div
                  key={item.id}
                  className="group bg-[#FBF9F4] rounded-lg border border-[#162E23]/10 overflow-hidden flex flex-col justify-between hover:border-[#C5A059]/60 hover:shadow-md transition-all duration-300"
                >
                  {/* Card Visual / Lead with imagery */}
                  <div>
                    {item.image ? (
                      <div className="relative aspect-[4/3] bg-[#EAE3D2] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="absolute top-3 left-3 text-[11px] font-medium text-[#FBF9F4] bg-[#162E23]/80 backdrop-blur-xs px-2 py-0.5 rounded">
                          {item.origin}
                        </div>
                      </div>
                    ) : (
                      /* Styled CSS/SVG Fallback Container */
                      <div className="aspect-[16/9] bg-gradient-to-br from-[#EAE3D2] to-[#D8BC93]/30 p-5 flex flex-col justify-between border-b border-[#162E23]/10">
                        <div className="flex items-center justify-between text-xs text-[#162E23]/70">
                          <span className="uppercase tracking-wider text-[10px] font-semibold text-[#162E23]/90">
                            {item.origin}
                          </span>
                          {item.armenianName && (
                            <span className="font-serif text-[#C5A059] font-medium text-base">
                              {item.armenianName}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#162E23]/60">
                          <Utensils className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>Specialty Market Provision</span>
                        </div>
                      </div>
                    )}

                    {/* Card Content & Unboxed Metadata */}
                    <div className="p-5 space-y-3">
                      {/* Unboxed category & packaging note */}
                      <div className="flex items-center gap-1.5 text-[11px] text-[#162E23]/60">
                        <span className="uppercase tracking-wide font-semibold text-[#C5A059]">
                          {item.category}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{item.packagingNote}</span>
                      </div>

                      {/* Title & Armenian Name */}
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-[#162E23] group-hover:text-[#234737] transition-colors leading-snug">
                          {item.name}
                        </h3>
                        {item.armenianName && (
                          <div className="text-xs text-[#C5A059] font-serif mt-0.5">
                            {item.armenianName}
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#162E23]/75 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <ul className="pt-1 space-y-1 text-[11px] text-[#162E23]/65">
                        {item.highlights.slice(0, 2).map((hl, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#C5A059] font-bold" aria-hidden="true">•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-[#162E23]/10 flex items-center justify-between gap-3">
                      <span className="text-[11px] text-[#162E23]/50 italic">
                        Available in-store
                      </span>

                      <button
                        onClick={() => onAddToList(item)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                          inList
                            ? 'bg-[#234737] text-white'
                            : 'bg-[#162E23] text-[#FBF9F4] hover:bg-[#234737]'
                        }`}
                      >
                        {inList ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#D8BC93]" />
                            <span>In Visit List</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-[#D8BC93]" />
                            <span>Add to List</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Market Note */}
        <div className="mt-12 p-6 bg-[#EAE3D2]/70 rounded-lg border border-[#D8BC93]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
            <div className="text-xs text-[#162E23]/80">
              <span className="font-semibold text-[#162E23]">Looking for a specific item or seasonal specialty?</span>
              <p>Hye Market stocks rotating imported items throughout the year. Call our Bullard Ave store at (559) 448-9791.</p>
            </div>
          </div>
          <a
            href="tel:5594489791"
            className="px-4 py-2 text-xs font-semibold text-[#162E23] bg-[#FBF9F4] hover:bg-white border border-[#162E23]/20 rounded whitespace-nowrap shrink-0 transition-colors"
          >
            Call (559) 448-9791
          </a>
        </div>
      </div>
    </section>
  );
};
