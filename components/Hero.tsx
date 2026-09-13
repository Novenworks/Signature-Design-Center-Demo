import React from 'react';
import { ShieldCheck, Award, Eye, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#111417] text-white overflow-hidden">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-kitchen-luxury.jpg"
          alt="Luxury custom kitchen remodel by Signature Design Center"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1316] via-[#0F1316]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111417] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl space-y-6">
          {/* Verified Showroom Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Anaheim Showroom &amp; In-House Cabinet Plant • Est. 1986</span>
          </div>

          {/* Core Positioned Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
            See the Remodel Before You Commit to the Project
          </h1>

          {/* Supporting Copy Grounded in Truth */}
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-normal">
            For 40 years, Orange County homeowners have trusted Signature Design Center to eliminate remodeling guesswork. Explore full-scale kitchens and baths in our Anaheim showroom, review custom 3D elevations and floor plans, and build with verified CSLB general contractor license #924506.
          </p>

          {/* Trust Value Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-stone-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Full 3D computer design &amp; elevations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>10-Year warranty on all installation labor</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Dedicated Anaheim cabinet fabrication plant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>10% Competitor price-beat guarantee</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#estimate"
              className="px-7 py-4 rounded-md bg-[#C59A46] hover:bg-[#B18037] text-white font-semibold text-base shadow-lg hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Request an Estimate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="px-7 py-4 rounded-md border border-stone-600 bg-stone-900/60 hover:bg-stone-800 text-stone-200 font-semibold text-base transition-colors flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>View Completed Work</span>
            </a>
          </div>

          {/* Compact Proof Metrics Strip */}
          <div className="pt-8 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-stone-300">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-serif text-white">40 Years</div>
              <div className="text-xs text-stone-400 mt-0.5">Serving OC &amp; LA (1986)</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-serif text-amber-400">A+ Rating</div>
              <div className="text-xs text-stone-400 mt-0.5">Better Business Bureau</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-serif text-white">10-Year</div>
              <div className="text-xs text-stone-400 mt-0.5">Labor Warranty</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-serif text-emerald-400">#924506</div>
              <div className="text-xs text-stone-400 mt-0.5">CSLB Class B License</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
