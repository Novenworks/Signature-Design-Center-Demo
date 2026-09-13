'use client';

import React, { useState } from 'react';
import { Phone, CheckCircle, Send, ShieldCheck, Clock, Calendar } from 'lucide-react';

export default function EstimateForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Kitchen Remodel',
    timeline: 'Within 1-3 Months',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <section id="estimate" className="py-20 bg-[#161B1F] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Col: Direct Phone & Showroom Confidence */}
            <div className="lg:col-span-5 bg-[#121619] p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-stone-800 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                  Free In-Home Estimate
                </span>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                  Plan Your Remodel with Total Clarity
                </h3>

                <p className="text-sm text-stone-300 leading-relaxed">
                  Connect directly with our Anaheim design team. We provide complimentary in-home measurements, 3D computer design, and transparent itemized estimates.
                </p>

                <div className="space-y-4 pt-2 text-xs text-stone-300">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>CSLB License #924506 • 40 Years in Business</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>10-Year Warranty on All Craft Labor</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Showroom Walkthroughs Mon–Sat 9am–5pm</span>
                  </div>
                </div>
              </div>

              {/* Direct Telephone Access */}
              <div className="mt-8 pt-6 border-t border-stone-800/80">
                <div className="text-xs text-stone-400 mb-2">Prefer to speak right now?</div>
                <a
                  href="tel:7144622980"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#C59A46] hover:bg-[#B18037] text-white font-bold text-sm shadow transition-colors w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (714) 462-2980</span>
                </a>
              </div>
            </div>

            {/* Right Col: Interactive Consultation Request Form */}
            <div className="lg:col-span-7 p-8 sm:p-10">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-white">
                    Estimate Request Prepared!
                  </h4>
                  <p className="text-sm text-stone-300 max-w-sm leading-relaxed">
                    Thank you, {formData.name}. Our Anaheim showroom team will review your {formData.service.toLowerCase()} project details.
                  </p>
                  <div className="pt-2">
                    <a
                      href="tel:7144622980"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call (714) 462-2980 to confirm your appointment window</span>
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-stone-500 underline hover:text-stone-400 pt-4"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h4 className="text-xl font-serif font-bold text-white mb-1">
                      Request Your Free Consultation
                    </h4>
                    <p className="text-xs text-stone-400">
                      Fill out this quick form or call us directly at (714) 462-2980.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-3.5 py-2.5 rounded-md bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(714) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-md bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-md bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1">
                        Primary Project
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                      >
                        <option>Kitchen Remodel ($25,990 Package)</option>
                        <option>Bathroom Remodel ($14,999 Package)</option>
                        <option>Full Custom Kitchen Design</option>
                        <option>Luxury Master Bathroom Suite</option>
                        <option>Whole-Home / Living Room Alteration</option>
                        <option>Commercial / Office Remodel</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                    >
                      <option>Ready to start immediately</option>
                      <option>Within 1-3 Months</option>
                      <option>Within 3-6 Months</option>
                      <option>Exploring ideas &amp; budget</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      Project Notes / Specific Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us about your kitchen or bathroom vision, approximate dimensions, or preferred visit times..."
                      className="w-full px-3.5 py-2.5 rounded-md bg-stone-950 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-md bg-[#C59A46] hover:bg-[#B18037] text-white font-semibold text-sm shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Free Estimate Request</span>
                  </button>

                  <p className="text-[11px] text-stone-500 text-center">
                    Your information is kept confidential. We will never share or sell your details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
