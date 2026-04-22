'use client';

import { doctorProfile } from '@/data/doctor';
import { motion } from 'framer-motion';
import { Star, Quote, Heart, Award } from 'lucide-react';
import ExportedImage from 'next-image-export-optimizer';

export default function TestimonialsPage() {
  const testimonials = doctorProfile.testimonials;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white dark:from-emerald-950/20 dark:via-green-900/20 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart size={40} className="text-emerald-600 dark:text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
              Patient Testimonials
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover what our patients say about their experience with Dr. Shekhar Poudel and our comprehensive gastroenterology care
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-gradient-to-br from-white to-emerald-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl text-center border border-emerald-200/50 dark:border-emerald-700/50">
            <Award size={32} className="text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">{testimonials.length}+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Happy Patients</div>
          </div>
          <div className="bg-gradient-to-br from-white to-emerald-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl text-center border border-emerald-200/50 dark:border-emerald-700/50">
            <Star size={32} className="text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">5.0</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Average Rating</div>
          </div>
          <div className="bg-gradient-to-br from-white to-emerald-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl text-center border border-emerald-200/50 dark:border-emerald-700/50">
            <Heart size={32} className="text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-white to-emerald-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 rounded-xl text-center border border-emerald-200/50 dark:border-emerald-700/50">
            <Quote size={32} className="text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-emerald-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-xl border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-xl hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <Quote size={32} className="text-emerald-400" />
              </div>

              {/* Profile Picture */}
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-emerald-200 dark:border-emerald-700">
                  <ExportedImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + testimonial.name;
                    }}
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center italic leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>

              {/* Patient Name */}
              <div className="text-center">
                <p className="font-semibold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent text-lg">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Patient</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 dark:from-emerald-900/40 dark:via-green-900/40 dark:to-teal-900/40 p-12 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-4">
            Join Our Satisfied Patients
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the same exceptional care that has helped hundreds of patients achieve better health outcomes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+977015451000"
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="https://wa.me/9779765199777"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-8 py-3 rounded-lg font-semibold transition"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}