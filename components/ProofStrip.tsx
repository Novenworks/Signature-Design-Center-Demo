import React from 'react';
import { ShieldCheck, Award, Wrench, CheckCircle } from 'lucide-react';

export default function ProofStrip() {
  return (
    <section className="bg-[#1A1F24] border-y border-stone-800 py-6 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Key Value Proof Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">40 Years</div>
                <div className="text-xs text-stone-400">Family Owned &amp; Run</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">10-Year Warranty</div>
                <div className="text-xs text-stone-400">On All Craft Labor</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">CSLB #924506</div>
                <div className="text-xs text-stone-400">Licensed &amp; Insured</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">In-House Plant</div>
                <div className="text-xs text-stone-400">Cabinet Fabrication</div>
              </div>
            </div>
          </div>

          {/* Real Brand Partner Badges */}
          <div className="flex items-center gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-stone-800 w-full lg:w-auto justify-center lg:justify-end">
            <span className="text-xs font-semibold tracking-wider uppercase text-stone-500">
              Trusted Sourcing:
            </span>
            <div className="flex items-center gap-4 bg-stone-900/60 px-4 py-2 rounded border border-stone-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/partner-silestone.png"
                alt="Silestone Quartz Surfaces"
                className="h-6 w-auto object-contain filter invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              />
              <div className="h-4 w-px bg-stone-700" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/partner-ultracraft.png"
                alt="UltraCraft Cabinetry"
                className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
