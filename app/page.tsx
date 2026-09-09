"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Showroom from "@/components/Showroom";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import EstimateModal from "@/components/EstimateModal";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar onEstimate={() => setOpen(true)} />
      <main>
        <Hero onEstimate={() => setOpen(true)} />
        <TrustStrip />
        <Services />
        <Work />
        <Showroom onEstimate={() => setOpen(true)} />
        <Process />
        <Team />
        <Testimonials />
        <ServiceArea />
        <FinalCta onEstimate={() => setOpen(true)} />
      </main>
      <Footer />
      <EstimateModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
