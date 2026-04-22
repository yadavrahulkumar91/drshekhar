'use client';

import { doctorProfile } from '@/data/doctor';
import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import ViewAllButton from '@/components/ViewAllButton';
import { getImagePath } from '@/lib/imageOptimizer';

export default function TestimonialsSection() {
  const displayedTestimonials = doctorProfile.testimonials.slice(0, 3);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const maxLength = 150;

  const shouldTruncate = (text: string) => text.length > maxLength;
  const getTruncatedText = (text: string) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

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

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-emerald-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-emerald-200 dark:border-emerald-700/50 hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition flex flex-col h-full"
            >
              {/* Profile Picture */}
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-emerald-200 dark:border-emerald-700">
                  <ExportedImage
                    src={getImagePath(testimonial.image)}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic flex-grow">
                "{
                  expandedIndex === index
                    ? testimonial.text
                    : getTruncatedText(testimonial.text)
                }"
              </p>

              {/* Read More/Less Button */}
              {shouldTruncate(testimonial.text) && (
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold text-sm mb-4 transition"
                >
                  {expandedIndex === index ? 'Read Less' : 'Read More'}
                </button>
              )}

              {/* Patient Name */}
              <p className="font-semibold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent text-center">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View All Testimonials Link */}
        <ViewAllButton href="/testimonials" text="View All Testimonials" />
      </div>
    </section>
  );
}
