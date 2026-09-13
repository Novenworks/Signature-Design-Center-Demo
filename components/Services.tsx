import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Full Kitchen Remodeling',
      subtitle: 'Concept-to-completion culinary spaces tailored to your lifestyle',
      image: '/images/service-kitchen-bath.jpg',
      description:
        'From full layout alterations and island expansions to custom cabinetry, granite and quartz countertops, handcrafted tile backsplashes, and complete electrical and plumbing rough-ins.',
      deliverables: [
        'Custom cabinetry from our Anaheim fabrication plant',
        'Granite, quartz, and marble slab countertops',
        'Under-cabinet LED lighting & custom electrical',
        'Tile backsplashes, farm sinks, & appliance installation',
      ],
      ctaText: 'Explore Kitchen Options',
      href: '#estimate',
    },
    {
      title: 'Luxury Bathroom Renovations',
      subtitle: 'Spa-inspired retreats with precision waterproofing and fixtures',
      image: '/images/project-bath-walkin-shower.jpg',
      description:
        'Complete bathroom overhauls including walk-in frameless glass showers, freestanding soaking tubs, custom double vanities, floor-to-ceiling porcelain tile, and water-efficient luxury fixtures.',
      deliverables: [
        'Curbless & walk-in showers with frameless glass doors',
        'Custom vanity design with stone and quartz tops',
        'Floor-to-ceiling moisture-sealed tile and niches',
        'Plumbing re-routes, designer valves, and soaking tubs',
      ],
      ctaText: 'Explore Bathroom Options',
      href: '#estimate',
    },
    {
      title: 'Living Spaces & Commercial Renovations',
      subtitle: 'Open-concept living transformations & executive office design',
      image: '/images/service-residential.jpg',
      description:
        'We remove load-bearing walls for open floor plans, reface architectural fireplaces and mantels, and craft executive commercial interiors from doctor and dental suites to corporate offices.',
      deliverables: [
        'Load-bearing wall removals & open floor plans',
        'Custom fireplace mantels, stonework, & entertainment walls',
        'Luxury vinyl plank (LVP) and hardwood flooring',
        'Commercial tenant improvements for medical & professional offices',
      ],
      ctaText: 'Explore Whole-Home & Commercial',
      href: '#estimate',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Showroom-Backed Trade Craft
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Primary Remodeling Architecture
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Every project is engineered in our Anaheim showroom, rendered in 3D elevations, and executed by certified craftsmen with 40 years of local Southern California experience.
          </p>
        </div>

        {/* 3 Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden border border-stone-200 bg-[#FAF8F5] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Real Asset Image */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-semibold px-2.5 py-1 rounded bg-black/75 text-amber-400 backdrop-blur-sm">
                    {idx === 0 ? 'Kitchens' : idx === 1 ? 'Bathrooms' : 'Living & Commercial'}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-stone-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-stone-200/80 space-y-2">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <a
                  href={service.href}
                  className="w-full py-2.5 px-4 rounded border border-stone-300 hover:border-amber-600 bg-white hover:bg-amber-50 text-stone-800 hover:text-amber-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
