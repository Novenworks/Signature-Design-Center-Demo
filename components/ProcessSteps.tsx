import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      number: '01',
      title: 'Meet & Agree',
      subtitle: 'Free In-Home or Showroom Consultation',
      image: '/images/process-meet.png',
      description:
        'We listen to your practical goals, aesthetic preferences, and budget parameters. We review site dimensions and scope before any commitments are made.',
    },
    {
      number: '02',
      title: 'Idea & Concept',
      subtitle: '3D Elevation & Material Selection',
      image: '/images/process-concept.png',
      description:
        'Our design team develops full-color 3D computer renderings and floor plans. You visit the showroom to select countertops, cabinetry finishes, hardware, and tile.',
    },
    {
      number: '03',
      title: 'Design & Create',
      subtitle: 'Precision In-House Cabinet Fabrication',
      image: '/images/process-design.png',
      description:
        'Unlike contractors who wait months for third-party deliveries, our Anaheim cabinet fabrication facility crafts and prepares custom cabinetry directly to your exact specifications.',
    },
    {
      number: '04',
      title: 'Build & Install',
      subtitle: 'Supervised On-Site Construction',
      image: '/images/process-build.png',
      description:
        'Led on-site by Superintendent Sam, our licensed trades handle demolition, electrical, plumbing, setting, and finishing on schedule—backed by our 10-year labor warranty.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#161A1D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Truthful 4-Step Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            How Your Remodel Comes to Life
          </h2>
          <p className="text-base text-stone-300 leading-relaxed">
            No vague promises or surprise change-orders. A disciplined 4-stage remodeling roadmap refined over 40 years in Anaheim.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-stone-900/90 border border-stone-800 p-6 flex flex-col justify-between relative group hover:border-amber-500/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 rounded-full bg-stone-800/90 p-2.5 flex items-center justify-center border border-stone-700">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-10 h-10 object-contain filter invert contrast-125"
                    />
                  </div>
                  <span className="text-3xl font-serif font-bold text-stone-700 group-hover:text-amber-500/60 transition-colors">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-serif font-bold text-white">
                    {step.title}
                  </h3>
                  <div className="text-xs text-amber-400 font-medium">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-800/80">
                <span className="text-[11px] text-stone-500 flex items-center gap-1 font-medium">
                  <span>Stage {idx + 1} of 4</span>
                  {idx < 3 && <ArrowRight className="w-3 h-3 text-stone-600 ml-auto" />}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
