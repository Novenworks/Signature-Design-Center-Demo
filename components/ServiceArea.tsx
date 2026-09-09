export default function ServiceArea() {
  return (
    <section className="bg-paper py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-walnut">Orange County & Los Angeles</p>
        <h2 className="mt-2 font-serif text-3xl text-espresso md:text-4xl">Based in Anaheim. Working across OC and LA.</h2>
        <p className="mt-3 max-w-2xl text-espresso/75">First-party copy says the family business has been serving customers throughout Orange County and Los Angeles. Published notes mention Fullerton, Anaheim, Orange County, Los Angeles, Chino, Mission Viejo, and Rowland Heights.</p>
        <ul className="mt-8 flex flex-wrap gap-2 text-sm">
          {["Anaheim","Fullerton","Orange County","Los Angeles","Mission Viejo","Rowland Heights","Chino"].map((c) => (
            <li key={c} className="rounded-full border border-espresso/15 bg-cream px-3 py-1 text-espresso">{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
