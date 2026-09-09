import type { Metadata } from "next";
export const metadata: Metadata = { title: "Outreach brief — Signature Design Center", robots: { index: false, follow: false } };
const assets = [
  { href: "/outreach/before-original-desktop.png", label: "BEFORE original desktop" },
  { href: "/outreach/after-desktop.png", label: "AFTER desktop" },
  { href: "/outreach/after-mobile.png", label: "AFTER mobile" },
  { href: "/outreach/after-scroll.gif", label: "AFTER scroll GIF" },
  { href: "/outreach/after-scroll.mp4", label: "AFTER scroll MP4" },
];
export default function OutreachPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 text-espresso">
      <p className="text-xs uppercase tracking-[0.2em] text-brass">Operator only · noindex</p>
      <h1 className="mt-2 font-serif text-4xl">Signature Design Center</h1>
      <p className="mt-2 text-stone">Speculative Novenworks redesign. The business is not a client.</p>
      <section className="mt-8 space-y-2 text-sm">
        <p><strong>Original:</strong> https://ocremodel.com/</p>
        <p><strong>GitHub:</strong> https://github.com/Novenworks/Signature-Design-Center-Demo</p>
        <p><strong>Phone:</strong> (714) 533-9595</p>
        <p><strong>CSLB:</strong> #924506</p>
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-2xl">Captures</h2>
        <ul className="mt-3 space-y-2 text-sm">{assets.map((a) => <li key={a.href}><a className="underline" href={a.href}>{a.label}</a></li>)}</ul>
        <div className="mt-6 space-y-6">{assets.map((a) => (
          <figure key={a.href} className="overflow-hidden rounded-xl border">
            <figcaption className="bg-paper px-3 py-2 text-xs">{a.label}</figcaption>
            {a.href.endsWith(".mp4") ? <video src={a.href} controls className="w-full" /> : <img src={a.href} alt={a.label} className="w-full" />}
          </figure>
        ))}</div>
      </section>
      <section className="mt-10 text-sm space-y-3">
        <h2 className="font-serif text-2xl">What not to say</h2>
        <p>Do not insult the current site or a designer. Do not claim Novenworks was hired. Do not invent ROI/SEO numbers. Do not treat The Home Mag prices or (714) 462-2980 as first-party. Do not collapse 1986 and the 2005 BBB date into one fake licensed-years stat.</p>
      </section>
    </main>
  );
}
