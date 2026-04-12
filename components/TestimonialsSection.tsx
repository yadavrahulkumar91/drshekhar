'use client';

import { doctorProfile } from '@/data/doctor';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-950/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
            Patient Testimonials
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            What our patients say about their experience with Dr. Shekhar Poudel
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {doctorProfile.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-emerald-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-700/50 hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "{testimonial.text}"
              </p>

              <p className="font-semibold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
