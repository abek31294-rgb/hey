import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  totalListItems: number;
  onOpenList: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  totalListItems,
  onOpenList,
  onOpenContact,
}) => {
  const [showTopNotice, setShowTopNotice] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Slim Dismissible Announcement Banner (<= 40px) */}
      {showTopNotice && (
        <aside
          aria-label="Fresh bakery announcement"
          className="bg-[#162E23] text-[#FBF9F4] text-xs py-2 px-4 transition-all"
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 truncate">
              <span className="text-[#C5A059] font-medium tracking-wide uppercase text-[11px]">Daily Bakery</span>
              <span className="text-white/40 hidden sm:inline" aria-hidden="true">/</span>
              <span className="truncate text-white/90">
                Fresh Armenian Lavash baked daily · Call{' '}
                <a
                  href="tel:5594489791"
                  className="text-[#D8BC93] underline hover:text-white transition-colors"
                >
                  (559) 448-9791
                </a>{' '}
                for morning batch availability
              </span>
            </div>
            <button
              onClick={() => setShowTopNotice(false)}
              aria-label="Dismiss announcement banner"
              className="text-white/60 hover:text-white text-xs shrink-0 p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      )}

      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FBF9F4]/95 backdrop-blur-md border-b border-[#162E23]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element in display serif) */}
          <a
            href="#"
            className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-[#162E23] whitespace-nowrap shrink-0 hover:text-[#234737] transition-colors"
          >
            Hye Market
          </a>

          {/* Zone 2: 4-5 Concise Single-Line Text Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#162E23]/80">
            <a
              href="#fresh-lavash"
              className="hover:text-[#162E23] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#C5A059] underline-offset-8"
            >
              Fresh Lavash
            </a>
            <a
              href="#imported-candies"
              className="hover:text-[#162E23] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#C5A059] underline-offset-8"
            >
              Imported Candies
            </a>
            <a
              href="#market-catalog"
              className="hover:text-[#162E23] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#C5A059] underline-offset-8"
            >
              Provisions
            </a>
            <a
              href="#visit-store"
              className="hover:text-[#162E23] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#C5A059] underline-offset-8"
            >
              Visit & Contact
            </a>
            <a
              href="#market-heritage"
              className="hover:text-[#162E23] transition-colors whitespace-nowrap shrink-0 hover:underline decoration-[#C5A059] underline-offset-8"
            >
              Heritage
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenList}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-[#FBF9F4] bg-[#162E23] hover:bg-[#234737] rounded transition-colors whitespace-nowrap shrink-0 shadow-sm"
              aria-label={`Open Market Shopping List with ${totalListItems} items`}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#D8BC93]" />
              <span>Market List</span>
              {totalListItems > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-[#C5A059] text-[#162E23] text-[11px] font-bold rounded-sm tabular-nums">
                  {totalListItems}
                </span>
              )}
            </button>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#162E23] hover:text-[#234737]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#162E23]/10 bg-[#FBF9F4] px-6 py-4 space-y-3">
            <a
              href="#fresh-lavash"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#162E23] py-1"
            >
              Fresh Lavash
            </a>
            <a
              href="#imported-candies"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#162E23] py-1"
            >
              Imported Candies
            </a>
            <a
              href="#market-catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#162E23] py-1"
            >
              Provisions Catalog
            </a>
            <a
              href="#visit-store"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#162E23] py-1"
            >
              Visit & Location
            </a>
            <a
              href="#market-heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#162E23] py-1"
            >
              Heritage & Story
            </a>
            <div className="pt-2 border-t border-[#162E23]/10 flex items-center justify-between">
              <a
                href="tel:5594489791"
                className="inline-flex items-center gap-1.5 text-xs text-[#162E23] font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>(559) 448-9791</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="text-xs text-[#C5A059] font-semibold underline"
              >
                Directions
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
