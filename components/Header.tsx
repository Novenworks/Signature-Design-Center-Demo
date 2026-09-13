'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Menu, X, ShieldCheck, Award } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
      {/* Top Bar: Showroom & Verified Proof */}
      <div className="bg-[#181C20] text-stone-200 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>40 Years in Business (Est. 1986)</span>
            </span>
            <span className="hidden sm:inline text-stone-500">•</span>
            <span className="hidden sm:flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Showroom: 329 N. State College Blvd, Anaheim, CA</span>
            </span>
            <span className="hidden md:inline text-stone-500">•</span>
            <span className="hidden md:flex items-center gap-1 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mon–Sat 9:00am–5:00pm</span>
            </span>
            <span className="hidden lg:inline text-stone-500">•</span>
            <span className="hidden lg:flex items-center gap-1 text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>CSLB Lic #924506</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:7144622980"
              className="flex items-center gap-1.5 font-bold text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>(714) 462-2980</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 py-2 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/signature-logo.jpg"
            alt="Signature Design Center"
            className="h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
          <div className="hidden sm:flex flex-col border-l border-stone-300 pl-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-stone-600">
              Kitchen & Bath Showroom
            </span>
            <span className="text-[11px] text-stone-500">
              Anaheim & North Orange County
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          <Link href="#services" className="hover:text-amber-600 transition-colors">
            Services
          </Link>
          <Link href="#packages" className="hover:text-amber-600 transition-colors">
            2026 Offers
          </Link>
          <Link href="#work" className="hover:text-amber-600 transition-colors">
            Real Work
          </Link>
          <Link href="#showroom" className="hover:text-amber-600 transition-colors">
            Anaheim Showroom
          </Link>
          <Link href="#process" className="hover:text-amber-600 transition-colors">
            Our Process
          </Link>
          <Link href="#testimonials" className="hover:text-amber-600 transition-colors">
            Reviews
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:7144622980"
            className="px-4 py-2.5 rounded-md border border-stone-300 text-stone-800 text-sm font-semibold hover:bg-stone-100 transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-600" />
            <span>Call Now</span>
          </a>
          <a
            href="#estimate"
            className="px-5 py-2.5 rounded-md bg-[#C59A46] hover:bg-[#B18037] text-white text-sm font-semibold shadow-sm hover:shadow transition-all"
          >
            Request Free Estimate
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:7144622980"
            aria-label="Call Signature Design Center"
            className="p-2.5 text-stone-700 rounded-md border border-stone-200 sm:hidden"
          >
            <Phone className="w-5 h-5 text-amber-600" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-stone-700 hover:text-stone-900 rounded-md focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid gap-2 text-base font-medium text-stone-800">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-50"
            >
              Services
            </Link>
            <Link
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-50"
            >
              2026 Remodel Packages
            </Link>
            <Link
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-50"
            >
              Real Work & Portfolio
            </Link>
            <Link
              href="#showroom"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-50"
            >
              Anaheim Showroom & Heritage
            </Link>
            <Link
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-50"
            >
              Our 4-Step Process
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-50"
            >
              Client Reviews
            </Link>
            <Link
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded hover:bg-stone-50"
            >
              Showroom Map & Hours
            </Link>
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2">
            <a
              href="tel:7144622980"
              className="w-full py-3 text-center rounded-md border border-stone-300 font-semibold text-stone-800 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call (714) 462-2980</span>
            </a>
            <a
              href="#estimate"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center rounded-md bg-[#C59A46] text-white font-semibold shadow"
            >
              Request Free Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
