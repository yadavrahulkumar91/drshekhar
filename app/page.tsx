'use client';

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import VlogsSection from '@/components/VlogsSection';
import CTASection from '@/components/CTASection';
import CertificatesSection from '@/components/CertificatesSection';

import FAQSection from "@/components/FAQSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* <CertificatesSection /> */}
      {/* <AboutSection /> */}
      <TestimonialsSection />
      <VlogsSection />

      {/* FAQ Section */}
      <FAQSection />

      <CTASection />
    </>
  );
}
