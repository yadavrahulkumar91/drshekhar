'use client';

import ExportedImage from 'next-image-export-optimizer';
import { doctorProfile } from '@/data/doctor';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-white dark:from-emerald-950/20 dark:via-green-900/20 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-3xl p-8">
              <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden">
                <div className="w-full aspect-square rounded-xl overflow-hidden relative">
                  <ExportedImage
                    src="/dr-shekhar-poudel_BaxEz1X.jpg"
                    alt="Dr. Shekhar Poudel - Gastroenterologist & Transplant Hepatologist"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{doctorProfile.name}</h3>
                  <p className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent font-semibold">{doctorProfile.specialization}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{doctorProfile.title}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-6">
              Meet Dr. Shekhar Poudel
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {doctorProfile.bio}
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
