import React from 'react';
import { MapPin, Check, Award, Layers, Users, Sparkles } from 'lucide-react';

export default function ShowroomSpotlight() {
  return (
    <section id="showroom" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Imagery Mosaic */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-showroom-kitchen.jpg"
                alt="Signature Design Center Anaheim Showroom Kitchen Display"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-stone-700 text-white">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Anaheim Showroom Experience</span>
                </div>
                <div className="text-[11px] text-stone-300">
                  329 N. State College Blvd, Anaheim, CA 92806
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-stone-200 shadow-sm h-48 bg-stone-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-craftsmanship.png"
                  alt="Award Winning Interior Design & Cabinet Plant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-stone-200 shadow-sm h-48 bg-stone-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/showroom-interior.png"
                  alt="Showroom Material Displays and Finishes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Copy & Leadership Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>40-Year Anaheim Heritage (Founded 1986)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
              Why an Anaheim Showroom Changes the Entire Remodeling Journey
            </h2>

            <p className="text-stone-600 text-base leading-relaxed">
              Most contractors operate out of a pickup truck with paper catalogs and sample swatches. Signature Design Center began in 1986 as a tiny kitchen shop in Anaheim with three employees. Today, we welcome homeowners into our full-scale Anaheim showroom and run our own dedicated cabinet fabrication facility.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-amber-100/70 text-amber-800 shrink-0 mt-0.5">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Touch Real Slabs &amp; Test Soft-Close Joinery
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Compare full countertop slabs, inspect dovetail drawer boxes, test pull-out pantries, and view frameless glass enclosures before construction begins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-amber-100/70 text-amber-800 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    3D Computer Elevations &amp; Floor Plans
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Our on-staff certified interior designers translate your vision into precise 3D architectural computer renderings so you can visualize clearances and lighting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-amber-100/70 text-amber-800 shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    Design Leadership by Fred Jarrah (ACE Certified)
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Founder Fred Jarrah has trained hundreds of remodelers across California, having lectured at UCLA and taught in accredited interior design programs.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#estimate"
                className="px-6 py-3.5 rounded-md bg-[#C59A46] hover:bg-[#B18037] text-white font-semibold text-sm shadow transition-colors"
              >
                Schedule a Showroom Walkthrough
              </a>
              <a
                href="tel:7144622980"
                className="px-6 py-3.5 rounded-md border border-stone-300 hover:bg-stone-50 text-stone-800 font-semibold text-sm transition-colors"
              >
                Call (714) 462-2980
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
