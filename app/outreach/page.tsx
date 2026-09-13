import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Download,
  Copy,
  FileCode,
  FileImage,
  Video,
  Eye,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Operator Outreach Dossier | Signature Design Center',
  description: 'Confidential Novenworks operator-only brief, outreach assets, talking points, and email sequences.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function OutreachPage() {
  const assets = [
    {
      name: 'before-original-desktop.png',
      label: 'Original Website Desktop Capture',
      desc: 'Full-page desktop screenshot of live original ocremodel.com.',
      type: 'PNG Image',
      href: '/outreach/before-original-desktop.png',
      icon: FileImage,
    },
    {
      name: 'after-desktop.png',
      label: 'Redesign Desktop Capture (1440px)',
      desc: 'Full-page 1440px desktop capture of the new Next.js experience.',
      type: 'PNG Image',
      href: '/outreach/after-desktop.png',
      icon: FileImage,
    },
    {
      name: 'after-mobile.png',
      label: 'Redesign Mobile Capture (390px)',
      desc: 'Mobile viewport capture formatted for modern smartphone screens.',
      type: 'PNG Image',
      href: '/outreach/after-mobile.png',
      icon: FileImage,
    },
    {
      name: 'after-scroll.gif',
      label: 'Homepage Scroll Animation (GIF)',
      desc: 'Smooth scrolling preview showcasing full sales flow below hero.',
      type: 'Animated GIF',
      href: '/outreach/after-scroll.gif',
      icon: Video,
    },
    {
      name: 'after-scroll.mp4',
      label: 'Homepage Scroll Video (MP4)',
      desc: 'High-definition video walkthrough of the complete redesign.',
      type: 'MP4 Video',
      href: '/outreach/after-scroll.mp4',
      icon: Video,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F1215] text-stone-200 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Banner */}
        <div className="border-b border-stone-800 pb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Confidential • Operator-Only Route</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Signature Design Center — Outreach Brief &amp; Assets
            </h1>
            <p className="text-sm text-stone-400 mt-1">
              Speculative redesign pitch dossier, verified business facts, asset downloads, and cold outreach scripts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>View Deployed Demo</span>
            </Link>
            <a
              href="https://github.com/Novenworks/Signature-Design-Center-Demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md border border-stone-700 hover:border-stone-500 text-stone-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>

        {/* Business Snapshot Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-stone-900/90 border border-stone-800">
            <div className="text-xs text-stone-400 uppercase tracking-wider font-semibold">Prospect</div>
            <div className="text-lg font-bold text-white mt-1">Signature Design Center</div>
            <div className="text-xs text-stone-400 mt-1">Anaheim, CA (Serving OC &amp; LA)</div>
          </div>

          <div className="p-5 rounded-xl bg-stone-900/90 border border-stone-800">
            <div className="text-xs text-stone-400 uppercase tracking-wider font-semibold">Phone Lines</div>
            <div className="text-base font-bold text-amber-400 mt-1">(714) 462-2980</div>
            <div className="text-xs text-stone-400 mt-0.5">(714) 533-9595 (Showroom Direct)</div>
          </div>

          <div className="p-5 rounded-xl bg-stone-900/90 border border-stone-800">
            <div className="text-xs text-stone-400 uppercase tracking-wider font-semibold">Showroom Address</div>
            <div className="text-xs text-stone-300 mt-1 font-medium">329 N. State College Blvd</div>
            <div className="text-xs text-stone-400">Anaheim, CA 92806</div>
          </div>

          <div className="p-5 rounded-xl bg-stone-900/90 border border-stone-800">
            <div className="text-xs text-stone-400 uppercase tracking-wider font-semibold">Licensing &amp; Heritage</div>
            <div className="text-sm font-bold text-emerald-400 mt-1">CSLB #924506</div>
            <div className="text-xs text-stone-400">40 Years in Business (Est. 1986)</div>
          </div>
        </div>

        {/* Required Outreach Deliverables & Download Center */}
        <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-4">
            <div>
              <h2 className="text-xl font-serif font-bold text-white">
                Standard Outreach Deliverables (Hard Gate Passed)
              </h2>
              <p className="text-xs text-stone-400">
                All 5 required assets generated, validated, and stored in <code className="text-amber-400">public/outreach/</code>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assets.map((asset, idx) => {
              const Icon = asset.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-stone-950 border border-stone-800 flex flex-col justify-between space-y-4 hover:border-stone-700 transition-colors"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-stone-800 text-stone-300">
                        {asset.type}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{asset.label}</h3>
                      <p className="text-xs text-stone-400 mt-0.5">{asset.desc}</p>
                      <div className="text-[11px] text-stone-500 font-mono mt-1">{asset.name}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-stone-900">
                    <a
                      href={asset.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                    </a>
                    <a
                      href={asset.href}
                      download={asset.name}
                      className="py-2 px-3 rounded bg-[#C59A46] hover:bg-[#B18037] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shrink-0"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Audit & Transformation: Original Site vs. Redesign */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Original Site Observations */}
          <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-4">
            <h3 className="text-lg font-serif font-bold text-rose-400 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-400" />
              <span>4 Real Original-Site Friction Points</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-300">
              <li className="p-3 rounded-lg bg-stone-950 border border-stone-800/80">
                <strong>2019-Era WordPress Slider Presentation:</strong> The live site relies on Revolution Slider and older page-builder layouts from 2015–2019, diluting the impression of a high-ticket, premier kitchen and bath showroom.
              </li>
              <li className="p-3 rounded-lg bg-stone-950 border border-stone-800/80">
                <strong>Disconnected Active Offers:</strong> Third-party circulars (TheHomeMag) show active 2026 packages ($25,990 kitchen &amp; $14,999 bathroom), yet the homepage makes zero mention of these transparent entry prices.
              </li>
              <li className="p-3 rounded-lg bg-stone-950 border border-stone-800/80">
                <strong>Under-Communicated Showroom &amp; Plant:</strong> Their Anaheim showroom and custom cabinet fabrication plant are massive differentiators against trunk-based contractors, but are buried beneath generic copy.
              </li>
              <li className="p-3 rounded-lg bg-stone-950 border border-stone-800/80">
                <strong>Friction-Heavy Conversion Paths:</strong> The site buries consultation requests in an unstyled contact form at the very bottom of an overloaded single-page design.
              </li>
            </ul>
          </div>

          {/* Redesign Concrete Improvements */}
          <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-4">
            <h3 className="text-lg font-serif font-bold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>4 Concrete Redesign Improvements</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-300">
              <li className="p-3 rounded-lg bg-stone-950 border border-stone-800/80">
                <strong>High-Ticket Showroom First Impression:</strong> Replaces chaotic sliders with a grounded luxury aesthetic, authentic Anaheim photography, and clear positioning: <em>&ldquo;See the Remodel Before You Commit to the Project.&rdquo;</em>
              </li>
              <li className="p-3 rounded-lg bg-stone-950 border border-stone-800/80">
                <strong>Transparent 2026 Package Section:</strong> Prominently packages the verified $25,990 kitchen and $14,999 bath offers with 10-year labor warranty badges and price-beat guarantees.
              </li>
              <li className="p-3 rounded-lg bg-stone-950 border border-stone-800/80">
                <strong>Fred Jarrah &amp; 40-Year Heritage Spotlight:</strong> Celebrates Fred Jarrah’s ACE certification, UCLA lecturing background, and 40 years of local Anaheim craftsmanship.
              </li>
              <li className="p-3 rounded-lg bg-stone-950 border border-stone-800/80">
                <strong>High-Converting Dual-Path Actions:</strong> Sticky tap-to-call direct to (714) 462-2980 / (714) 533-9595 and an interactive consultation request form with zero friction.
              </li>
            </ul>
          </div>
        </div>

        {/* Cold Outreach Talking Points & Personalization Hooks */}
        <div className="p-6 sm:p-8 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-6">
          <h3 className="text-xl font-serif font-bold text-white">
            Operator Pitch Strategy &amp; Cold Sequence
          </h3>

          {/* 3 Strongest Talking Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Talking Point 1</div>
              <div className="font-bold text-white text-sm mt-1">Showroom &amp; Plant Asymmetry</div>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                You run a physical Anaheim showroom and fabrication plant that trunk contractors can&apos;t touch, but your current site makes you look like a 2019 catalog rather than an industry leader.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Talking Point 2</div>
              <div className="font-bold text-white text-sm mt-1">Active 2026 Package Visibility</div>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Homeowners who see your 2026 HomeMag packages ($25k kitchen / $15k bath) arrive on your website and find zero mention of them, causing confusion and drop-offs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Talking Point 3</div>
              <div className="font-bold text-white text-sm mt-1">Fred Jarrah&apos;s Proven Authority</div>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Fred&apos;s background lecturing at UCLA and ACE certification is the ultimate trust builder for a $50k+ luxury remodel—we put it front and center.
              </p>
            </div>
          </div>

          {/* Email Subject Lines */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              3 Tested Cold Email Subject Lines:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded bg-stone-950 border border-stone-800 text-stone-200">
                1. quick observation on Signature Design Center&apos;s site
              </div>
              <div className="p-2.5 rounded bg-stone-950 border border-stone-800 text-stone-200">
                2. your Anaheim showroom vs. your 2019 homepage
              </div>
              <div className="p-2.5 rounded bg-stone-950 border border-stone-800 text-stone-200">
                3. built a working demo for Signature Design Center
              </div>
            </div>
          </div>

          {/* Cold Email Script */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              Cold Email Sequence (Ready to Send):
            </div>
            <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 text-xs sm:text-sm text-stone-300 space-y-3 font-mono leading-relaxed">
              <p>Hi Fred,</p>
              <p>
                I was researching top-tier kitchen &amp; bath remodelers in North Orange County and came across Signature Design Center.
              </p>
              <p>
                Having a physical showroom on State College Blvd and your own cabinet plant in Anaheim is a huge advantage that 95% of contractors don&apos;t have. But looking at your current website, the 2019 presentation doesn&apos;t reflect the caliber of work you do—or the active 2026 packages you publish in TheHomeMag.
              </p>
              <p>
                Rather than send a generic pitch, we built a live, working speculative redesign for Signature Design Center to show you what a modern, showroom-backed digital experience looks like:
              </p>
              <p className="text-amber-400 font-bold">
                👉 [Insert Deployed Vercel URL Here]
              </p>
              <p>
                It showcases your actual completed kitchens and baths, brings your $25,990 kitchen and $14,999 bath packages front and center, and highlights your 40-year Anaheim heritage.
              </p>
              <p>
                Take a look—if you like the direction, I&apos;d love to pass the assets over to your team or discuss getting it live.
              </p>
              <p>Best regards,<br />[Your Name]<br />Novenworks</p>
            </div>
          </div>

          {/* Short Follow-Up Script */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold text-stone-400 uppercase tracking-wider">
              3-Day Follow-Up Script:
            </div>
            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-xs sm:text-sm text-stone-300 space-y-2 font-mono leading-relaxed">
              <p>Hi Fred,</p>
              <p>
                Following up on the speculative redesign demo we built for Signature Design Center: [Insert Deployed Vercel URL].
              </p>
              <p>
                Did you have two minutes to click through the showroom and package sections? Happy to jump on a quick 5-minute call if you&apos;d like to walk through it together.
              </p>
              <p>Best,<br />[Your Name]</p>
            </div>
          </div>
        </div>

        {/* Guardrails: What NOT to Say */}
        <div className="p-6 sm:p-8 rounded-2xl bg-rose-950/20 border border-rose-900/50 space-y-4">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
            <ShieldAlert className="w-5 h-5 text-rose-400" />
            <span>Outreach Guardrails — What NOT to Say</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-300">
            <div className="p-3.5 rounded-lg bg-stone-950/80 border border-rose-900/30">
              <strong className="text-rose-300">Do NOT say &ldquo;your website sucks&rdquo; or insult their work.</strong>
              <p className="text-stone-400 mt-1">
                The angle is that their physical operation and craftsmanship have outgrown their 2019-era web presence, creating an opportunity to align the site with their current strength.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-stone-950/80 border border-rose-900/30">
              <strong className="text-rose-300">Do NOT fabricate ROI, traffic, or lead numbers.</strong>
              <p className="text-stone-400 mt-1">
                Never invent metrics like &ldquo;you are losing 43 leads per week&rdquo; or make false SEO guarantees. Ground everything in verified facts and presentation clarity.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-stone-950/80 border border-rose-900/30">
              <strong className="text-rose-300">Do NOT imply Novenworks was hired or owns their media.</strong>
              <p className="text-stone-400 mt-1">
                Clearly state that this is a speculative redesign. All project photography, logos, and business marks remain the property of Signature Design Center.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-stone-950/80 border border-rose-900/30">
              <strong className="text-rose-300">Do NOT claim an agency failed them.</strong>
              <p className="text-stone-400 mt-1">
                The original site has no active agency credit; it appears maintained in-house on WordPress. Avoid attacking third parties that may not exist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
