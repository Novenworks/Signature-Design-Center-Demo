const quotes = [
  { name: "Sandra E.", place: "Fullerton, CA", text: "Kitchen remodel. Met Fred and Rula. Superintendent Sam kept the project moving." },
  { name: "Sherry D.", place: "Los Angeles, CA", text: "Kitchen transformation, farmhouse theme. Fair prices and a skilled staff." },
  { name: "Yamen S.", place: "Mission Viejo, CA", text: "Bathroom remodel. Pleasant service — thanks to Fred and Sam." },
  { name: "Debra R.", place: "Rowland Heights, CA", text: "Bathroom renovation. Top quality. Thanks to Fred, Elmer, and the team." },
];
export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <p className="text-xs uppercase tracking-[0.2em] text-brass">From the first-party site</p>
      <h2 className="mt-2 font-serif text-3xl text-espresso md:text-4xl">What published clients actually wrote</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {quotes.map((q) => (
          <blockquote key={q.name} className="rounded-2xl border border-espresso/10 bg-white p-6">
            <p className="text-[15px] leading-relaxed text-espresso/85">“{q.text}”</p>
            <footer className="mt-4 text-sm text-stone">{q.name} · {q.place}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
