export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-serif text-2xl text-cream">Signature Design Center</p>
          <p className="mt-2 text-sm">Kitchen and bathroom remodeling with an Anaheim showroom.</p>
          <p className="mt-3 text-xs text-cream/50">CSLB #924506 · Signature Kitchen Design Inc dba Signature Design Center</p>
        </div>
        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-brass">Contact</p>
          <p className="mt-2">329 N. State College Blvd</p>
          <p>Anaheim, CA 92806</p>
          <p className="mt-2"><a href="tel:+17145339595" className="text-cream">(714) 533-9595</a></p>
          <p><a href="mailto:signature-design@sbcglobal.net" className="text-cream">signature-design@sbcglobal.net</a></p>
          <p className="mt-2">Mon–Sat 9:00am–5:00pm</p>
        </div>
        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-brass">On this page</p>
          <ul className="mt-2 space-y-1">
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#showroom">Showroom</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-4 py-4 text-center text-xs text-cream/45">Speculative redesign by Novenworks for demonstration only. Signature Design Center is not represented as a Novenworks client. Marks and photography remain property of their owners.</div>
    </footer>
  );
}
