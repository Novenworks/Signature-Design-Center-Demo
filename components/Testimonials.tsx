import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sandra E.',
      city: 'Fullerton, CA',
      project: 'Kitchen Remodel & Cabinetry',
      text: 'We just finished a Kitchen Remodel with Signature Design Center, and we just love our new kitchen! I stumbled into Signature Design Center and met Fred, and I am so grateful I did. He & Rula were great to work with. Their Superintendent, Sam, made sure our project run smoothly. Everything was on schedule and Sam kept me abreast as to what was going on, and he took care of any glitches immediately. Thank you so much for my beautiful new kitchen. I love everything about it.',
    },
    {
      name: 'Sherry D.',
      city: 'Los Angeles, CA',
      project: 'Farmhouse Kitchen & Luxury Flooring',
      text: 'What an amazing experience with Signature Design Center. They completely transformed my kitchen into the kitchen of my dreams – farmhouse themed with a chimney hood, custom decorative insert over the stove, microwave drawer, beautiful shade of blue and white cabinets completed with black knobs. All the flooring in the house was replaced with luxury vinyl tile. Fred is very attentive and responsive and addressed all concerns promptly.',
    },
    {
      name: 'Eileen N.',
      city: 'Anaheim, CA',
      project: 'Kitchen & Bathroom Renovation',
      text: 'Fred and Rula have a great eye for design. They did our kitchen and bathroom and the results are spectacular! They were with the project from start to finish and if there were any glitches they made sure to correct them immediately. Highly recommend these 2 wonderful knowledgeable professionals.',
    },
    {
      name: 'Joanne M.',
      city: 'Orange County, CA',
      project: 'Whole-Home Remodel',
      text: 'Thank you Signature Design for making our dream come true! We decided to remodel our home and lucky for us Signature Design was recommended to us. As with any major construction project there were a few bumps in the road, however Fred and his team were so professional in all aspects! His customer service is second to none.',
    },
    {
      name: 'Rachael K.',
      city: 'Chino, CA',
      project: 'Cabinet Hardware & Finishes',
      text: 'Best prices (beat internet prices) on hardware for cabinets. I can highly recommend this company! Thank you again for your help Signature Design Center in Anaheim!',
    },
    {
      name: 'Yamen S.',
      city: 'Mission Viejo, CA',
      project: 'Bathroom Remodel',
      text: 'A friend of mine recommended Signature Design Center when we decided to remodel our bathroom. We are so pleased with such nice work they did. Responsible price with wonderful service. A big thanks for Fred and Sam.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Traceable Client Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Homeowner Testimonials Across Southern California
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Unfiltered feedback from clients who visited our showroom and trusted our team to transform their homes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#FAF8F5] border border-stone-200/90 p-6 flex flex-col justify-between shadow-sm hover:shadow transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-stone-300" />
                </div>

                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <div className="font-bold text-stone-900 text-sm">{r.name}</div>
                  <div className="flex items-center gap-1 text-stone-500 text-xs">
                    <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                    <span>{r.city}</span>
                  </div>
                </div>
                <div className="text-[11px] font-medium text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded">
                  {r.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
