'use client';

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            Frequently Asked <span className="text-primary">Questions</span>
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
                className="bg-white dark:bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">{item.q}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Care for Your Digestive Health?</h2>
          <p className="text-xl mb-8 opacity-90">Book your appointment today or contact us for a free consultation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+977015451000" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call Now: +977-01-5451000
            </a>
            <a href="https://wa.me/977-9765199777" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
              WhatsApp: +977-9765199777
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
