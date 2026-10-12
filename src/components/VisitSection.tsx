import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink, Copy, Check, Clock, Navigation } from 'lucide-react';

export const VisitSection: React.FC = () => {
  const [addressCopied, setAddressCopied] = useState(false);

  const fullAddress = '2012 W Bullard Ave, Fresno, CA 93711';
  const phoneNumber = '(559) 448-9791';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress).then(() => {
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2500);
    });
  };

  return (
    <section id="visit-store" className="py-20 bg-[#FBF9F4] text-[#162E23] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Location & Contact Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
              <span>Visit Fresno Store</span>
              <span aria-hidden="true">·</span>
              <span>San Joaquin Valley</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#162E23] leading-tight">
              Plan Your Visit to <br />
              <span className="italic font-normal text-[#234737]">Hye Market on Bullard Ave.</span>
            </h2>

            <p className="text-base text-[#162E23]/80 leading-relaxed">
              We welcome you to explore our aisles in person. Whether you are picking up warm Armenian lavash for the evening dinner table, selecting imported Turkish delights for a special gift, or stocking up on Mediterranean pantry staples, our shelves are ready.
            </p>

            {/* Direct Cards */}
            <div className="space-y-4 pt-2">
              {/* Address Card */}
              <div className="p-5 rounded-lg bg-[#F4EFE6] border border-[#162E23]/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#162E23]">
                    <MapPin className="w-4 h-4 text-[#C5A059]" />
                    <span>Market Address</span>
                  </div>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-[11px] text-[#162E23]/70 hover:text-[#162E23]"
                  >
                    {addressCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-700" />
                        <span className="text-green-700 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="font-serif text-lg font-medium text-[#162E23]">
                  2012 W Bullard Ave
                </div>
                <div className="text-xs text-[#162E23]/70">
                  Fresno, CA 93711 (Near West Bullard & N West Ave)
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-lg bg-[#F4EFE6] border border-[#162E23]/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#162E23]">
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Direct Telephone Line</span>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="tel:5594489791"
                    className="font-serif text-2xl font-semibold text-[#162E23] hover:text-[#234737] transition-colors"
                  >
                    {phoneNumber}
                  </a>
                  <a
                    href="tel:5594489791"
                    className="px-3 py-1.5 text-xs font-semibold bg-[#162E23] text-[#FBF9F4] rounded hover:bg-[#234737] transition-colors"
                  >
                    Call Now
                  </a>
                </div>
                <p className="text-[11px] text-[#162E23]/65">
                  Call ahead for current day hours, holiday hours, and fresh morning lavash availability.
                </p>
              </div>

              {/* Verified Reference Card */}
              <div className="p-5 rounded-lg bg-[#F4EFE6] border border-[#162E23]/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#162E23]">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>Store Hours & Inquiries</span>
                </div>
                <p className="text-xs text-[#162E23]/75 leading-relaxed">
                  Store hours may adjust seasonally and around cultural holidays. Please call (559) 448-9791 directly before your trip to confirm today&apos;s operating hours and bakery batch times.
                </p>
                <div className="pt-1">
                  <a
                    href="https://yelp.to/NCwnEcYLrB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#162E23] hover:text-[#234737] underline decoration-[#C5A059] underline-offset-4"
                  >
                    <span>View Hye Market on Yelp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#162E23] text-[#FBF9F4] p-6 sm:p-8 rounded-lg shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#FBF9F4]">
                    Fresno Market Map
                  </h3>
                  <p className="text-xs text-[#D8BC93]">Bullard Avenue Specialty Center</p>
                </div>
                <Navigation className="w-5 h-5 text-[#C5A059]" />
              </div>

              {/* Map Illustration Frame */}
              <div className="relative aspect-[16/10] bg-[#0F2018] rounded border border-white/10 overflow-hidden flex flex-col justify-center items-center text-center p-6 space-y-3">
                {/* Background grid lines */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #D8BC93 1px, transparent 1px), linear-gradient(to bottom, #D8BC93 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                <div className="w-12 h-12 rounded-full bg-[#162E23] border border-[#C5A059] flex items-center justify-center text-[#C5A059] shadow-lg relative z-10">
                  <MapPin className="w-6 h-6" />
                </div>

                <div className="relative z-10 space-y-1">
                  <div className="font-serif text-lg font-medium text-[#FBF9F4]">Hye Market</div>
                  <div className="text-xs text-[#D8BC93]">2012 W Bullard Ave · Fresno, CA</div>
                  <div className="text-[11px] text-white/50">Convenient parking lot on site</div>
                </div>

                <a
                  href="https://maps.google.com/?q=2012+W+Bullard+Ave,+Fresno,+CA+93711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#162E23] bg-[#D8BC93] hover:bg-[#E2CEAE] rounded transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Directions Advice */}
              <div className="text-xs text-[#FBF9F4]/75 space-y-2 pt-2">
                <div className="font-semibold text-[#D8BC93] uppercase tracking-wider text-[11px]">
                  Directions & Parking:
                </div>
                <p>
                  Located on the south side of West Bullard Avenue between North Marks Avenue and North West Avenue. Ample free plaza parking is available directly in front of the market entrance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
