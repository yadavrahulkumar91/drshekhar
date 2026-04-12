'use client';

import Image from 'next/image';
import { doctorProfile } from '@/data/doctor';
import { motion } from 'framer-motion';
import { Award, BookOpen, Stethoscope } from 'lucide-react';

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
                  <Image
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

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {doctorProfile.achievements.slice(0, 3).map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700/50"
                >
                  <Award size={24} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">{achievement.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Qualifications Summary */}
            <div className="grid grid-cols-2 gap-4 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40 p-6 rounded-xl border border-emerald-200/50 dark:border-emerald-700/50">
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">{doctorProfile.qualifications.length}</div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Qualifications</p>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">{doctorProfile.experience.length}</div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Positions Held</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
