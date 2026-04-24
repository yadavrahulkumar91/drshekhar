'use client';

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import VlogsSection from '@/components/VlogsSection';
import CTASection from '@/components/CTASection';
import CertificatesSection from '@/components/CertificatesSection';
import { motion } from 'framer-motion';

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
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            Frequently Asked <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Questions</span>
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                q: 'How can I book an appointment with Dr. Shekhar Poudel?',
                a: 'You can book an appointment through WhatsApp (+977-9765199777), phone (+977-01-5451000), or using our online booking form. Walk-ins are also welcome during office hours.'
              },
              {
                q: 'What should I expect during my first visit?',
                a: 'Your first visit includes a comprehensive consultation, medical history review, and necessary diagnostic tests. Please bring any previous medical records and a list of medications.'
              },
              {
                q: 'Do you offer telemedicine consultations?',
                a: 'Yes, teleconsultations are available for follow-up cases. Contact us to arrange a video consultation.'
              },
              {
                q: 'What insurance do you accept?',
                a: 'We work with major insurance providers. Please contact our clinic for specific insurance information.'
              },
              {
                q: 'How long does endoscopy take?',
                a: 'Typically 15-30 minutes. You should plan to be at the facility for 2-3 hours including pre and post-procedure care.'
              },
              {
                q: 'Is ERCP procedure available?',
                a: 'Yes, Dr. Poudel performs advanced ERCP procedures for treating bile and pancreatic duct conditions.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">{item.q}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
