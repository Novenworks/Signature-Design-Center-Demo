"use client";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

export default function Navbar({ onEstimate }: { onEstimate: () => void }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#showroom", label: "Showroom" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-espresso/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brass text-brass font-serif text-xl">S</span>
          <span className="leading-tight">
            <span className="block font-serif text-lg leading-none text-espresso md:text-xl">Signature Design Center</span>
            <span className="block text-[11px] tracking-[0.16em] uppercase text-stone">Anaheim Showroom</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-espresso/80 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-espresso">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:+17145339595" className="hidden items-center gap-2 text-sm font-medium text-espresso sm:flex">
            <Phone className="h-4 w-4 text-brass" />(714) 533-9595
          </a>
          <button type="button" onClick={onEstimate} className="hidden rounded-full bg-espresso px-4 py-2 text-sm font-medium text-cream md:inline-flex">Request an Estimate</button>
          <button type="button" className="rounded-md p-2 lg:hidden" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-espresso/10 bg-cream px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-espresso">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">{l.label}</a>
            ))}
            <a href="tel:+17145339595" className="py-1 font-medium">Call (714) 533-9595</a>
            <button type="button" onClick={() => { setOpen(false); onEstimate(); }} className="rounded-full bg-espresso px-4 py-3 text-cream">Request an Estimate</button>
          </div>
        </div>
      )}
    </header>
  );
}
