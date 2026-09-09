export default function Showroom({ onEstimate }: { onEstimate: () => void }) {
  return (
    <section id="showroom" className="grid md:grid-cols-2">
      <img src="/images/signature-design-1.jpg" alt="Interior of the Anaheim showroom with tile sample boards and bath vignettes" className="h-72 w-full object-cover md:h-full" />
      <div className="flex flex-col justify-center bg-paper px-6 py-14 md:px-12">
        <p className="text-xs uppercase tracking-[0.2em] text-walnut">Why this shop is different</p>
        <h2 className="mt-2 font-serif text-3xl text-espresso md:text-4xl">A showroom you can actually visit</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-espresso/80">High-ticket kitchens fail when selections happen only on a laptop. Signature Design Center keeps a working showroom at 329 N. State College Blvd so homeowners can stand in front of tile, cabinets, and stone before they sign.</p>
        <p className="mt-3 text-[15px] leading-relaxed text-espresso/80">First-party copy describes a family business that started as a small Anaheim kitchen shop, now with a showroom and cabinet fabrication behind the design conversation.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={onEstimate} className="rounded-full bg-espresso px-5 py-3 text-sm font-medium text-cream">Request an Estimate</button>
          <a href="https://maps.google.com/?q=329+N+State+College+Blvd+Anaheim+CA+92806" className="rounded-full border border-espresso/30 px-5 py-3 text-sm text-espresso">Get directions</a>
        </div>
      </div>
    </section>
  );
}
