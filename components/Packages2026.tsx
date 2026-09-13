import React from 'react';
import { Tag, ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Packages2026() {
  return (
    <section id="packages" className="py-20 bg-[#161B1F] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>Verified 2026 Transparent Remodel Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Clear, All-Inclusive Project Pricing
          </h2>
          <p className="text-base text-stone-300 leading-relaxed">
            Signature Design Center publishes transparent, all-inclusive packages through TheHomeMag Orange County. No surprise change-orders, all materials specified, and fully backed by our 10-year labor warranty.
          </p>
        </div>

        {/* 2 Main Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Kitchen Package Card */}
          <div className="rounded-2xl bg-stone-900/90 border-2 border-amber-500/60 p-8 shadow-xl relative flex flex-col justify-between hover:border-amber-400 transition-colors">
            <div className="absolute -top-3.5 right-6 px-3.5 py-0.5 rounded-full bg-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wide">
              Featured 2026 Offer
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 border-b border-stone-800 pb-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Full Kitchen Remodel
                  </h3>
                  <div className="text-xs text-amber-400 font-medium mt-0.5">
                    Standard 10&apos; × 12&apos; Layout Complete Package
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                    $25,990
                  </div>
                  <div className="text-[11px] text-stone-400">All-Inclusive Materials &amp; Labor</div>
                </div>
              </div>

              <div className="py-6 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Included in this Package:
                </div>
                <ul className="space-y-2.5 text-sm text-stone-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>American-made cabinetry</strong> with soft-close hinges &amp; full extension slides</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Quartz or granite countertops</strong> in client-selected slab finishes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>16-gauge stainless steel undermount sink</strong> &amp; designer hardware</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Complete professional installation with <strong>10-Year Labor Warranty</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 flex flex-col gap-2">
              <a
                href="#estimate"
                className="w-full py-3.5 px-6 rounded-lg bg-[#C59A46] hover:bg-[#B18037] text-white font-semibold text-center text-sm shadow transition-colors flex items-center justify-center gap-2"
              >
                <span>Claim $25,990 Kitchen Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-stone-400 text-center">
                Includes free in-home consultation &amp; 3D computer elevations
              </span>
            </div>
          </div>

          {/* Bathroom Package Card */}
          <div className="rounded-2xl bg-stone-900/90 border-2 border-stone-700 p-8 shadow-xl relative flex flex-col justify-between hover:border-amber-500/60 transition-colors">
            <div className="absolute -top-3.5 right-6 px-3.5 py-0.5 rounded-full bg-stone-700 text-white font-bold text-xs uppercase tracking-wide">
              Complete Bath Overhaul
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 border-b border-stone-800 pb-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Full Bathroom Remodel
                  </h3>
                  <div className="text-xs text-amber-400 font-medium mt-0.5">
                    Standard 5&apos; × 9&apos; Master or Guest Bath
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                    $14,999
                  </div>
                  <div className="text-[11px] text-stone-400">All-Inclusive Materials &amp; Labor</div>
                </div>
              </div>

              <div className="py-6 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Included in this Package:
                </div>
                <ul className="space-y-2.5 text-sm text-stone-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Walk-in shower or bathtub</strong> (homeowner&apos;s choice)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Premium floor-to-ceiling tile</strong> with waterproof backing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Vanity cabinet up to 36&quot;</strong>, stone countertop, undermount sink &amp; toilet</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Frameless sliding glass shower door</strong> (3 designer finishes to choose)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 flex flex-col gap-2">
              <a
                href="#estimate"
                className="w-full py-3.5 px-6 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-semibold text-center text-sm border border-stone-600 transition-colors flex items-center justify-center gap-2"
              >
                <span>Claim $14,999 Bathroom Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-stone-400 text-center">
                All valves, fixtures &amp; installation covered with 10-year warranty
              </span>
            </div>
          </div>
        </div>

        {/* Value Safeguards & Verified Policy Strip */}
        <div className="mt-12 p-6 rounded-xl bg-stone-900/60 border border-stone-800 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">10% Price-Beat Guarantee</div>
              <div className="text-xs text-stone-400 mt-0.5">
                We guarantee to beat any licensed California contractor&apos;s comparable estimate by 10%.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">10-Year Labor Warranty</div>
              <div className="text-xs text-stone-400 mt-0.5">
                All plumbing, electrical, tile setting, and cabinet installation backed for a full decade.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">10% Community Discount</div>
              <div className="text-xs text-stone-400 mt-0.5">
                Qualifying seniors, active/veteran military, and first responders receive an extra 10% off.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
