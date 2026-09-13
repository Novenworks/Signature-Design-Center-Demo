import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProofStrip from '@/components/ProofStrip';
import Services from '@/components/Services';
import Packages2026 from '@/components/Packages2026';
import Portfolio from '@/components/Portfolio';
import ShowroomSpotlight from '@/components/ShowroomSpotlight';
import ProcessSteps from '@/components/ProcessSteps';
import Testimonials from '@/components/Testimonials';
import LocationMap from '@/components/LocationMap';
import EstimateForm from '@/components/EstimateForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* 1. Sticky Navigation & Showroom Bar */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Compact Verified Proof Strip */}
        <ProofStrip />

        {/* 4. Primary Service Architecture */}
        <Services />

        {/* 5. 2026 Verified Transparent Packages */}
        <Packages2026 />

        {/* 6. Real Project / Work Showcase */}
        <Portfolio />

        {/* 7. Showroom Experience & 40-Year Heritage */}
        <ShowroomSpotlight />

        {/* 8. Simple Truthful 4-Step Process */}
        <ProcessSteps />

        {/* 9. Traceable Reputation / Testimonial Wall */}
        <Testimonials />

        {/* 10. Local Anaheim Showroom Relevance & Map */}
        <LocationMap />

        {/* 11. Final Conversion / Consultation Request */}
        <EstimateForm />
      </main>

      {/* 12. Footer with Full Licensing & Disclosure */}
      <Footer />
    </div>
  );
}
