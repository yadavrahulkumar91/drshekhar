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

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-primary mb-4">Achievements & Contributions</p>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Leading Gastroenterology and Liver Care in Nepal
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Highlighting Dr. Shekhar Poudel’s clinical milestones and the institutions that support his pioneering work.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">Achievements</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dr. Shekhar Poudel's professional accomplishments and leadership roles.
                </p>
              </motion.div>

              {[
                {
                  title: 'Vice President of Nepal Epilepsy Society',
                  description: 'Leading role in advancing epilepsy care and research in Nepal through organizational leadership.'
                },
                {
                  title: 'Vice President of Nepalese Society of Neurosurgeons',
                  description: 'Contributing to the advancement of neurosurgery standards and practices in Nepal.'
                },
                {
                  title: 'Chairperson, Neuro Spine Chapter of NESON',
                  description: 'Leading the neuro spine division of the Nepalese Society of Neurosurgeons.'
                },
                {
                  title: 'Editor-in-Chief, Nepal Journal of Neuroscience (NJN)',
                  description: 'Overseeing publication and dissemination of neuroscience research in Nepal.'
                },
                {
                  title: 'WFNS Peripheral Nerve Committee Member from Asia',
                  description: 'Representing Asia on the World Federation of Neurosurgical Societies peripheral nerve committee.'
                },
                {
                  title: 'Awards by Students and Colleagues',
                  description: 'Recognition and appreciation received from students and professional peers.'
                },
                {
                  title: 'Travel Fellowships and Grants',
                  description: 'International travel support for academic and professional development.'
                },
                {
                  title: 'Recognition by Organizations',
                  description: 'Professional acknowledgments from medical and academic institutions.'
                },
                {
                  title: 'Academic Awards',
                  description: 'Scholarly recognitions for contributions to medical education and research.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">Contributors</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  These institutions and teams support Dr. Poudel's work in gastroenterology, liver care, and advanced endoscopy.
                </p>
              </motion.div>

              {[
                {
                  title: 'National Gastro Liver Center',
                  description: 'Clinical leadership and patient care coordination in digestive health services.'
                },
                {
                  title: 'Norvic International Hospital',
                  description: 'Advanced endoscopy and liver transplant support for complex procedures.'
                },
                {
                  title: 'AIIMS New Delhi',
                  description: 'Premier training in gastroenterology and hepatology at India\'s top medical institute.'
                },
                {
                  title: 'Max Super Specialty Hospital',
                  description: 'Transplant hepatology fellowship and certification in advanced liver care.'
                },
                {
                  title: 'Liver Transplant Society of India',
                  description: 'Transplant certification and standards for liver transplant excellence.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Care for Your Digestive Health?</h2>
          <p className="text-xl mb-8 opacity-90">Book your appointment today or contact us for a free consultation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+977015451000" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call Now: +977-01-5451000
            </a>
            <a href="https://wa.me/9779765199777" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
              WhatsApp: +977-9765199777
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
