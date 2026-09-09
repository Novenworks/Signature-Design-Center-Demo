"use client";
import { FormEvent, useState } from "react";
import { X } from "lucide-react";
export default function EstimateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  if (!open) return null;
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nProject: ${data.get("project")}`);
    window.location.href = `mailto:signature-design@sbcglobal.net?subject=${encodeURIComponent("Estimate request from website")}&body=${body}`;
    setSent(true);
  }
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-espresso/60 p-4 sm:items-center">
      <div className="w-full max-w-md rounded-2xl bg-cream p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl text-espresso">Request an estimate</h2>
            <p className="mt-1 text-sm text-stone">This opens your email to signature-design@sbcglobal.net. Nothing is stored on this demo.</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close"><X className="h-5 w-5" /></button>
        </div>
        {sent ? (
          <p className="mt-6 text-sm text-espresso">If your mail app did not open, call <a className="underline" href="tel:+17145339595">(714) 533-9595</a> or email signature-design@sbcglobal.net.</p>
        ) : (
          <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
            <input required name="name" placeholder="Name" className="w-full rounded-lg border border-espresso/15 bg-white px-3 py-2 text-sm" />
            <input required name="phone" placeholder="Phone" className="w-full rounded-lg border border-espresso/15 bg-white px-3 py-2 text-sm" />
            <input name="email" type="email" placeholder="Email" className="w-full rounded-lg border border-espresso/15 bg-white px-3 py-2 text-sm" />
            <select name="project" className="w-full rounded-lg border border-espresso/15 bg-white px-3 py-2 text-sm" defaultValue="Kitchen remodel">
              <option>Kitchen remodel</option><option>Bathroom remodel</option><option>Kitchen and bath</option><option>Showroom visit</option><option>Other remodeling</option>
            </select>
            <button type="submit" className="w-full rounded-full bg-espresso py-3 text-sm font-medium text-cream">Open email to the shop</button>
          </form>
        )}
      </div>
    </div>
  );
}
