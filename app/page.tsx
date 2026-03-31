"use client";

import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LeadModalProvider } from "@/components/LeadModalProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <LanguageProvider>
      <LeadModalProvider>
        <Navbar />
        <main className="overflow-hidden">
          <Hero />
          <Stats />
          <Services />
          <Process />
          <Portfolio />
          <TechStack />
          <Testimonials />
          <CTABanner />
        </main>
        <Footer />
      </LeadModalProvider>
    </LanguageProvider>
  );
}
