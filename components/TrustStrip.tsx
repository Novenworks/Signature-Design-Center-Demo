const items = [
  { label: "Showroom", value: "Anaheim, on State College" },
  { label: "License", value: "CSLB #924506 · B General Building" },
  { label: "Family-owned", value: "Since 1986" },
  { label: "BBB", value: "A+ listed profile" },
];
export default function TrustStrip() {
  return (
    <section className="border-y border-espresso/10 bg-espresso text-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-6 md:grid-cols-4 md:px-6">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-[11px] uppercase tracking-[0.18em] text-brass">{item.label}</p>
            <p className="mt-1 text-sm font-medium leading-snug">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
