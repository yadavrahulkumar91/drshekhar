'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-700 dark:via-green-700 dark:to-teal-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Care for Your <span className="text-emerald-100">Smile?</span>
          </h2>
          <p className="text-xl md:text-2xl text-emerald-50/90">
            Book your dental appointment today or contact us for expert guidance
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {/* Call Button */}
          <Link href="tel:+977015451000">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white p-6 rounded-xl font-semibold transition flex flex-col items-center gap-3 group"
            >
              <div className="bg-white/30 group-hover:bg-white/40 p-3 rounded-lg transition">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm opacity-80">Call Directly</p>
                <p className="text-lg font-bold">+977-9854077977</p>
              </div>
            </motion.button>
          </Link>

          {/* WhatsApp Button */}
          <a href="https://wa.me/9779765199777" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white p-6 rounded-xl font-semibold transition flex flex-col items-center gap-3 group"
            >
              <div className="bg-white/30 group-hover:bg-white/40 p-3 rounded-lg transition">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-sm opacity-80">Message on WhatsApp</p>
                <p className="text-lg font-bold">+977-9854077977</p>
              </div>
            </motion.button>
          </a>

          {/* Book Appointment Button */}
          <Link href="/appointment">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-emerald-600 hover:bg-emerald-50 p-6 rounded-xl font-semibold transition flex flex-col items-center gap-3 group shadow-lg"
            >
              <div className="bg-emerald-100 group-hover:bg-emerald-200 p-3 rounded-lg transition">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-sm opacity-70">Book Appointment</p>
                <p className="text-lg font-bold">Schedule Now</p>
              </div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Secondary Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-emerald-50/75 text-base md:text-lg"
        >
          Walk-ins welcome during office hours • Free initial consultation • Expert care by Dr. Rinku Sah
        </motion.p>
      </div>
    </section>
  );
}
