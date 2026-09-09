const people = [
  { src: "/images/fred.jpg", name: "Fred Jarrah", role: "Owner — named on the company site" },
  { src: "/images/sam.jpg", name: "Sam", role: "Superintendent — named in published client notes" },
  { src: "/images/jorge.jpg", name: "Jorge", role: "Team member shown on the first-party site" },
  { src: "/images/ernie.jpg", name: "Ernie", role: "Team member shown on the first-party site" },
];
export default function Team() {
  return (
    <section className="border-y border-espresso/10 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs uppercase tracking-[0.2em] text-brass">People</p>
        <h2 className="mt-2 font-serif text-3xl text-espresso md:text-4xl">The faces already on their website</h2>
        <p className="mt-3 max-w-2xl text-sm text-stone">Titles stay conservative. We did not invent a staff count or a “master craftsman” hierarchy.</p>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {people.map((p) => (
            <figure key={p.name}>
              <img src={p.src} alt={p.name} className="aspect-[4/5] w-full rounded-xl object-cover object-top" />
              <figcaption className="mt-3"><p className="font-medium text-espresso">{p.name}</p><p className="text-xs text-stone">{p.role}</p></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
