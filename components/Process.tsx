const steps = [
  { n: "01", title: "Meet & agree", copy: "Walk the showroom or schedule a free in-home estimate. Confirm the rooms, constraints, and what “done” looks like." },
  { n: "02", title: "Idea & concept", copy: "Cabinets, stone, tile, and layout options get narrowed in person so you are not choosing from a PDF in the dark." },
  { n: "03", title: "Design & create", copy: "Elevation views, floor plans, and computer-generated design — the first-party process the company already publishes." },
  { n: "04", title: "Build & install", copy: "Construction through finish. The same studio that designed the room stays attached through install." },
];
export default function Process() {
  return (
    <section id="process" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-20">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-brass">Process</p>
        <h2 className="mt-2 font-serif text-3xl text-espresso md:text-4xl">Four steps, published by the business</h2>
        <p className="mt-3 text-stone">These labels come from the current first-party site. We did not invent a six-week guarantee or a financing product around them.</p>
        <img src="/images/travertine-flooring.jpg" alt="Curved travertine and mosaic flooring detail" className="mt-8 h-64 w-full rounded-2xl object-cover" />
      </div>
      <ol className="space-y-5">
        {steps.map((s) => (
          <li key={s.n} className="rounded-2xl border border-espresso/10 bg-white p-5">
            <p className="text-xs tracking-[0.2em] text-brass">{s.n}</p>
            <h3 className="mt-1 font-serif text-2xl text-espresso">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">{s.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
