'use client';

import React, { useState } from 'react';
import { Eye, MapPin, Sparkles } from 'lucide-react';

type Category = 'all' | 'kitchen' | 'bathroom' | 'living';

interface Project {
  id: string;
  title: string;
  category: 'kitchen' | 'bathroom' | 'living';
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 'k1',
    title: 'Custom Farmhouse Kitchen Suite',
    category: 'kitchen',
    categoryLabel: 'Kitchen',
    location: 'Fullerton, CA',
    image: '/images/project-kitchen-farmhouse.jpg',
    description: 'Custom decorative chimney hood, farmhouse basin, and contrasting two-tone cabinetry fabricated in Anaheim.',
  },
  {
    id: 'b1',
    title: 'Curbless Frameless Glass Master Shower',
    category: 'bathroom',
    categoryLabel: 'Bathroom',
    location: 'Anaheim Hills, CA',
    image: '/images/project-bath-walkin-shower.jpg',
    description: 'Floor-to-ceiling porcelain tile with integrated shampoo niche, brushed brass fixtures, and frameless sliding door.',
  },
  {
    id: 'k2',
    title: 'Modern White Shaker Island Kitchen',
    category: 'kitchen',
    categoryLabel: 'Kitchen',
    location: 'Brea, CA',
    image: '/images/project-kitchen-modern-white.jpg',
    description: 'Full layout alteration with quartz countertop waterfall edge, undermount stainless sink, and custom pantry storage.',
  },
  {
    id: 'l1',
    title: 'Open-Concept Great Room & Flooring',
    category: 'living',
    categoryLabel: 'Living Space',
    location: 'Yorba Linda, CA',
    image: '/images/project-living-room-open.jpg',
    description: 'Wall removal to merge kitchen and family living areas, finished with premium waterproof luxury vinyl plank.',
  },
  {
    id: 'b2',
    title: 'Contemporary Double Vanity Master Bath',
    category: 'bathroom',
    categoryLabel: 'Bathroom',
    location: 'Orange, CA',
    image: '/images/project-bath-double-vanity.jpg',
    description: 'Dual undermount rectangular sinks, matching framed mirrors, soft-close cabinet drawers, and quartz surface.',
  },
  {
    id: 'k3',
    title: 'Transitional Quartz Island & Cabinetry',
    category: 'kitchen',
    categoryLabel: 'Kitchen',
    location: 'Anaheim, CA',
    image: '/images/project-kitchen-island.jpg',
    description: 'Extended breakfast bar seating with full cabinetry rework, pull-out spice racks, and dimmable task lighting.',
  },
  {
    id: 'b3',
    title: 'Spa-Inspired Porcelain Tile Retreat',
    category: 'bathroom',
    categoryLabel: 'Bathroom',
    location: 'Mission Viejo, CA',
    image: '/images/project-bath-spa-tile.jpg',
    description: 'Clean horizontal and vertical tile alignments with pressure-balanced diverter valves and comfort-height vanity.',
  },
  {
    id: 'l2',
    title: 'Architectural Stacked-Stone Fireplace',
    category: 'living',
    categoryLabel: 'Living Space',
    location: 'Placentia, CA',
    image: '/images/project-living-fireplace.jpg',
    description: 'Full living room centerpiece renovation with hearth stone, recessed television pre-wire, and custom wood mantel.',
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Category>('all');

  const filteredProjects =
    activeTab === 'all'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="work" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Real Work &amp; Verified Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Completed Remodels Across Orange County
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Every photo shown below is an authentic, completed project performed by Signature Design Center. No stock photography, no generic 3D renders masquerading as finished builds.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all ${
              activeTab === 'all'
                ? 'bg-[#181C20] text-white shadow'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            All Work ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('kitchen')}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all ${
              activeTab === 'kitchen'
                ? 'bg-[#181C20] text-white shadow'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            Kitchens (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('bathroom')}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all ${
              activeTab === 'bathroom'
                ? 'bg-[#181C20] text-white shadow'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            Bathrooms (3)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('living')}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all ${
              activeTab === 'living'
                ? 'bg-[#181C20] text-white shadow'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            Living Spaces &amp; Fireplaces (2)
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/75 text-amber-400 text-[11px] font-semibold backdrop-blur-sm">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-white font-medium bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-bold text-stone-900 text-base leading-snug group-hover:text-amber-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href="#estimate"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Request Similar Remodel</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Showroom */}
        <div className="mt-12 text-center">
          <p className="text-sm text-stone-600 mb-4">
            Want to see these finishes and cabinetry styles in person?
          </p>
          <a
            href="#showroom"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#181C20] hover:bg-stone-800 text-white font-semibold text-sm transition-colors"
          >
            <Eye className="w-4 h-4 text-amber-400" />
            <span>Tour Our Anaheim Showroom Displays</span>
          </a>
        </div>
      </div>
    </section>
  );
}
