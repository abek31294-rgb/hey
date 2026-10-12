import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F2018] text-[#FBF9F4] border-t border-white/10 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="font-serif text-2xl font-semibold text-[#FBF9F4] tracking-tight block hover:text-[#D8BC93] transition-colors"
            >
              Hye Market
            </a>
            <p className="text-xs text-[#FBF9F4]/70 leading-relaxed max-w-sm">
              Fresno&apos;s destination for hearth-baked fresh Armenian lavash, imported confectioneries, Turkish delights, fine cheeses, and Middle Eastern specialty groceries.
            </p>
            <div className="text-xs text-[#D8BC93] font-serif">
              Հայկական եւ Միջին Արեւելքի Մթերային Խանութ
            </div>
          </div>

          {/* Quick Department Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
              Specialties
            </div>
            <ul className="space-y-2 text-xs text-[#FBF9F4]/75">
              <li>
                <a href="#fresh-lavash" className="hover:text-white transition-colors">
                  Fresh Armenian Lavash
                </a>
              </li>
              <li>
                <a href="#imported-candies" className="hover:text-white transition-colors">
                  Imported Candies & Lokum
                </a>
              </li>
              <li>
                <a href="#market-catalog" className="hover:text-white transition-colors">
                  Pantry & Aleppo Spices
                </a>
              </li>
              <li>
                <a href="#market-catalog" className="hover:text-white transition-colors">
                  Armenian Cheeses & Deli
                </a>
              </li>
              <li>
                <a href="#market-heritage" className="hover:text-white transition-colors">
                  Heritage & Community
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
              Store Location
            </div>
            <div className="space-y-2 text-xs text-[#FBF9F4]/75">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>2012 W Bullard Ave, Fresno, CA 93711</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <a href="tel:5594489791" className="text-[#D8BC93] hover:underline">
                  (559) 448-9791
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://yelp.to/NCwnEcYLrB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D8BC93] hover:text-white transition-colors"
                >
                  <span>Verified Yelp Business Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FBF9F4]/50">
          <div>
            &copy; {new Date().getFullYear()} Hye Market. All rights reserved. 2012 W Bullard Ave, Fresno, CA.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Specialty Grocery</span>
            <span aria-hidden="true">·</span>
            <span>Bakery</span>
            <span aria-hidden="true">·</span>
            <span>Imported Foods</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
