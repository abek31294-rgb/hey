import React, { useState } from 'react';
import { X, MapPin, Phone, ExternalLink, Copy, Check, Clock } from 'lucide-react';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const fullAddress = '2012 W Bullard Ave, Fresno, CA 93711';

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative bg-[#FBF9F4] text-[#162E23] rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#162E23]/15">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1 text-[#162E23]/50 hover:text-[#162E23] rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-1 pr-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
              Specialty Market Location
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#162E23]">
              Visit Hye Market
            </h3>
            <p className="text-xs text-[#162E23]/70">
              Specializing in fresh lavash, imported confectioneries, and Mediterranean pantry goods.
            </p>
          </div>

          {/* Body Cards */}
          <div className="mt-6 space-y-4">
            {/* Address */}
            <div className="p-4 bg-[#F4EFE6] rounded-lg border border-[#162E23]/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-[#162E23]/70">
                <span className="flex items-center gap-1.5 font-semibold text-[#162E23]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Store Address</span>
                </span>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-[11px] text-[#162E23]/70 hover:text-[#162E23]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-green-700" />
                      <span className="text-green-700 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-serif text-base font-semibold text-[#162E23]">
                2012 W Bullard Ave
              </div>
              <div className="text-xs text-[#162E23]/70">
                Fresno, CA 93711 (Corner of Bullard Ave & West Ave)
              </div>
              <div className="pt-1">
                <a
                  href="https://maps.google.com/?q=2012+W+Bullard+Ave,+Fresno,+CA+93711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#162E23] hover:underline"
                >
                  <span>Open Route in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Direct Phone */}
            <div className="p-4 bg-[#F4EFE6] rounded-lg border border-[#162E23]/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-[#162E23] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Direct Telephone</span>
                </div>
                <div className="font-serif text-xl font-bold text-[#162E23] mt-0.5">
                  (559) 448-9791
                </div>
              </div>
              <a
                href="tel:5594489791"
                className="px-4 py-2 text-xs font-semibold bg-[#162E23] text-[#FBF9F4] rounded hover:bg-[#234737] transition-colors"
              >
                Call Store
              </a>
            </div>

            {/* Daily Fresh Lavash Notice */}
            <div className="p-3.5 bg-[#EAE3D2]/60 rounded-lg text-xs text-[#162E23]/80 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#162E23]">Lavash & Special Orders:</strong> Fresh bread arrives in morning batches. Call ahead at (559) 448-9791 to confirm batch availability for family gatherings or catering.
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-6 pt-4 border-t border-[#162E23]/10 flex items-center justify-between">
            <a
              href="https://yelp.to/NCwnEcYLrB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#162E23]/70 hover:text-[#162E23] underline"
            >
              <span>Verified Yelp Listing</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#162E23] hover:bg-[#162E23]/10 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
