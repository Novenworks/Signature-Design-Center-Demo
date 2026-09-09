const pieces = [
  { src: "/images/kitchen-custom-cabinets.jpg", title: "Custom kitchen", note: "Wood cabinetry, granite island, built-in appliances" },
  { src: "/images/signature-design-1.jpg", title: "Anaheim showroom", note: "Tile, stone, and bath displays on State College" },
  { src: "/images/bathroom-remodel.jpg", title: "Shower remodel", note: "Full-height tile, niche, dual heads" },
  { src: "/images/bathroom-vanity.jpg", title: "Vanity work", note: "First-party project photography from the company archive" },
  { src: "/images/travertine-flooring.jpg", title: "Stone flooring", note: "Travertine field with mosaic inlay" },
  { src: "/images/granite-marble.jpg", title: "Countertop material", note: "Slab photography from the first-party archive" },
];
export default function Work() {
  return (
    <section id="work" className="bg-espresso py-16 text-cream md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-brass">Real work</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">Photography from the business, not a catalog</h2>
        <p className="mt-3 max-w-2xl text-sm text-cream/70">These images come from Signature Design Center’s own site archive. Captions describe what is in the frame — no invented project names or budgets.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((p) => (
            <figure key={p.title} className="overflow-hidden rounded-xl bg-walnut/40">
              <img src={p.src} alt={p.title} className="h-56 w-full object-cover" />
              <figcaption className="p-4"><p className="font-medium">{p.title}</p><p className="mt-1 text-sm text-cream/65">{p.note}</p></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
