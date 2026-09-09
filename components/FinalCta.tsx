export default function FinalCta({ onEstimate }: { onEstimate: () => void }) {
  return (
    <section id="contact" className="relative overflow-hidden">
      <img src="/images/kitchen-custom-cabinets.jpg" alt="" className="absolute inset-0 h-full w-full object-cover object-bottom" />
      <div className="absolute inset-0 bg-espresso/80" />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center md:py-24">
        <h2 className="font-serif text-3xl text-cream md:text-5xl">Visit the showroom or request an estimate</h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/80">329 N. State College Blvd, Anaheim, CA 92806 · Mon–Sat 9am–5pm</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={onEstimate} className="rounded-full bg-brass px-6 py-3 text-sm font-semibold text-espresso">Request an Estimate</button>
          <a href="tel:+17145339595" className="rounded-full border border-cream/40 px-6 py-3 text-sm text-cream">Call (714) 533-9595</a>
        </div>
      </div>
    </section>
  );
}
