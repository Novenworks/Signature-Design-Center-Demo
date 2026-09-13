import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from 'lucide-react';

export default function LocationMap() {
  const cities = [
    'Anaheim',
    'Anaheim Hills',
    'Fullerton',
    'Brea',
    'Yorba Linda',
    'Placentia',
    'Orange',
    'Villa Park',
    'Tustin',
    'Irvine',
    'Newport Beach',
    'Huntington Beach',
  ];

  return (
    <section id="location" className="py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Showroom Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Physical Anaheim Showroom</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Visit Our Anaheim Showroom
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Experience countertop slabs, custom cabinetry displays, and hardware options in person. Walk-ins are always welcome during business hours, or reserve a dedicated consultation time.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-stone-800 text-sm">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Showroom Address</div>
                  <div className="text-stone-600">
                    329 N. State College Blvd, Anaheim, CA 92806
                  </div>
                  <div className="text-xs text-stone-500 mt-0.5">
                    Conveniently located near the 91 &amp; 57 Freeways
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-stone-800 text-sm">
                <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Phone Lines</div>
                  <div>
                    <a href="tel:7144622980" className="text-stone-900 font-semibold hover:text-amber-700">
                      (714) 462-2980
                    </a>{' '}
                    <span className="text-xs text-stone-500">(Primary Line)</span>
                  </div>
                  <div>
                    <a href="tel:7145339595" className="text-stone-600 hover:text-amber-700 text-xs">
                      (714) 533-9595 (Showroom Line)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-stone-800 text-sm">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Showroom Hours</div>
                  <div className="text-stone-600">Monday – Saturday: 9:00 AM – 5:00 PM</div>
                  <div className="text-stone-500 text-xs">Sunday: Closed</div>
                </div>
              </div>
            </div>

            {/* Service Area Cities */}
            <div className="pt-4 border-t border-stone-200">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                Proudly Serving North Orange County &amp; Beyond:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cities.map((city, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] font-medium bg-white px-2.5 py-1 rounded border border-stone-200 text-stone-700"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{city}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Map Embed Container */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden shadow-md border border-stone-300 bg-white p-2">
              <div className="h-96 w-full rounded-xl overflow-hidden relative">
                <iframe
                  title="Signature Design Center Location Map"
                  src="https://maps.google.com/maps?q=329%20N%20State%20College%20Blvd,%20Anaheim,%20CA%2092806&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex items-center justify-between flex-wrap gap-3 bg-stone-50 rounded-b-xl border-t border-stone-200 text-xs">
                <span className="text-stone-600 font-medium">
                  Showroom parking available in front of center
                </span>
                <a
                  href="https://maps.google.com/?q=329+N+State+College+Blvd,+Anaheim,+CA+92806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-amber-700 hover:text-amber-800"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
