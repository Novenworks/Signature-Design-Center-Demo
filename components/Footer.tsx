import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#14181C] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & Heritage */}
          <div className="space-y-4">
            <div className="bg-white p-2.5 rounded inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/signature-logo.jpg"
                alt="Signature Design Center"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Serving Orange County and Los Angeles since 1986. We combine a physical Anaheim design showroom with our own cabinet fabrication plant and 3D computer design to turn home visions into enduring reality.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-stone-400">
              <span className="flex items-center gap-2 text-amber-400 font-semibold">
                <Award className="w-4 h-4" />
                <span>40 Years of Craftsmanship (Est. 1986)</span>
              </span>
              <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>CSLB General Contractor Lic #924506</span>
              </span>
            </div>
          </div>

          {/* Col 2: Services & Work */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-serif font-bold tracking-wide">
              Services & Expertise
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <Link href="#services" className="hover:text-amber-400 transition-colors">
                  Full Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-amber-400 transition-colors">
                  Luxury Bathroom Renovations
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-amber-400 transition-colors">
                  Custom Cabinetry & Fabrication
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-amber-400 transition-colors">
                  Granite & Quartz Countertops
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-amber-400 transition-colors">
                  Whole-Home Living Room Upgrades
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-amber-400 transition-colors">
                  Commercial & Executive Offices
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: 2026 Transparent Offers */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-serif font-bold tracking-wide">
              2026 Featured Packages
            </h3>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="p-3 rounded bg-stone-900/80 border border-stone-800">
                <div className="text-amber-400 font-bold text-sm">$25,990 Kitchen Remodel</div>
                <p className="mt-1 text-stone-400">10&apos; x 12&apos; package with American-made cabinets, quartz/granite, &amp; stainless sink.</p>
              </div>
              <div className="p-3 rounded bg-stone-900/80 border border-stone-800">
                <div className="text-amber-400 font-bold text-sm">$14,999 Bathroom Remodel</div>
                <p className="mt-1 text-stone-400">5&apos; x 9&apos; package with walk-in shower/tub, floor-to-ceiling tile, vanity &amp; frameless door.</p>
              </div>
              <p className="text-[11px] text-stone-500">
                Backed by our 10-Year Labor Warranty and 10% Competitor Price-Beat Guarantee.
              </p>
            </div>
          </div>

          {/* Col 4: Anaheim Showroom Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-serif font-bold tracking-wide">
              Anaheim Showroom
            </h3>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>329 N. State College Blvd<br />Anaheim, CA 92806</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:7144622980" className="hover:text-white font-semibold text-stone-200">
                    (714) 462-2980 <span className="text-xs text-amber-400 font-normal">(Primary)</span>
                  </a>
                  <a href="tel:7145339595" className="hover:text-white text-xs text-stone-400">
                    (714) 533-9595 (Showroom Line)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:signature-design@sbcglobal.net" className="hover:text-white">
                  signature-design@sbcglobal.net
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:00 AM – 5:00 PM<br /><span className="text-stone-500">Sunday: Closed</span></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Speculative Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Signature Design Center. All rights reserved. | <strong>California Contractor&apos;s License: #924506</strong>
          </div>

          {/* Novenworks Speculative Redesign Disclosure */}
          <div className="text-center md:text-right max-w-xl text-[11px] text-stone-400 bg-stone-900/50 p-2.5 rounded border border-stone-800">
            <strong>Speculative Novenworks Redesign:</strong> Signature Design Center is not represented as a client. All trademarks, photography, and marks remain property of their owners.
          </div>
        </div>
      </div>
    </footer>
  );
}
