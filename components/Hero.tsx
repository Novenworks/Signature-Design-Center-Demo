export default function Hero({ onEstimate }: { onEstimate: () => void }) {
  return (
    <section id="top" className="relative min-h-[78vh] overflow-hidden">
      <img src="/images/kitchen-custom-cabinets.jpg" alt="Custom wood kitchen with granite island, built-in appliances, and desk alcove" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/88 via-espresso/70 to-espresso/35" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:justify-center md:px-6 md:pb-20 md:pt-24">
        <p className="mb-3 text-xs uppercase tracking-[0.22em] text-brass">Anaheim showroom · Kitchen & bath remodeling</p>
        <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] text-cream sm:text-5xl md:text-6xl">See the remodel before you commit to the project</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">Signature Design Center is a family-owned kitchen and bath studio on N. State College Blvd. Walk the showroom, review a design, and get a free in-home estimate before construction starts.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={onEstimate} className="rounded-full bg-brass px-6 py-3 text-sm font-semibold text-espresso">Request an Estimate</button>
          <a href="#work" className="rounded-full border border-cream/40 px-6 py-3 text-sm font-medium text-cream">View Our Work</a>
        </div>
      </div>
    </section>
  );
}
