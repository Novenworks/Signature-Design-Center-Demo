const services = [
  { title: "Kitchen remodeling", copy: "Cabinets, countertops, backsplash, lighting, plumbing, and appliances designed as one room — not a pile of product quotes.", img: "/images/kitchen-custom-cabinets.jpg", alt: "Finished custom kitchen with wood cabinetry and granite island" },
  { title: "Bathroom remodeling", copy: "Showers, tubs, tile, vanities, and fixtures planned so the room works day-to-day, not just in a rendering.", img: "/images/bathroom-remodel.jpg", alt: "Tiled shower with niche and dual shower heads" },
  { title: "Showroom design visits", copy: "See cabinet doors, stone, and tile in the Anaheim showroom before you lock selections. Free in-home estimates.", img: "/images/signature-design-1.jpg", alt: "Signature Design Center showroom with tile boards and bath displays" },
];
export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-brass">What we take on</p>
      <h2 className="mt-2 max-w-2xl font-serif text-3xl text-espresso md:text-4xl">Kitchens and bathrooms you can walk through before you buy</h2>
      <p className="mt-3 max-w-2xl text-stone">The work is residential remodeling with a physical showroom behind it. Commercial interiors are available when the job fits.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="overflow-hidden rounded-2xl border border-espresso/10 bg-white">
            <img src={s.img} alt={s.alt} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-serif text-2xl text-espresso">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{s.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
