'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950 dark:via-green-900 dark:to-teal-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-6 leading-tight">
            Expert Gastroenterology & Hepatology Care
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Dr. Shekhar Poudel brings international expertise in digestive health and liver transplantation to Kathmandu. First Nepali certified by AIIMS and LTSI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link href="/contact" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-lg flex items-center justify-center space-x-2 transition transform hover:scale-105 shadow-lg hover:shadow-emerald-300/50 dark:hover:shadow-emerald-900/50">
              <span>Book Appointment</span>
              <ArrowRight size={20} />
            </Link>
            
            <a href="https://wa.me/977-9765199777" target="_blank" rel="noopener noreferrer" className="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-8 py-3 rounded-lg flex items-center justify-center space-x-2 transition">
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">15+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">5000+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Patients Treated</p>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">1st</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">LTSI Certified</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-96 md:h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl overflow-hidden">
            <div className="w-full h-80 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <Image
                src="/dr-shekhar-poudel_BaxEz1X.jpg"
                alt="Dr. Shekhar Poudel - Gastroenterologist & Transplant Hepatologist"
                width={400}
                height={500}
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 dark:text-gray-200 font-semibold">Dr. Shekhar Poudel</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Gastroenterologist & Transplant Hepatologist</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating CTA */}
      <a 
        href="tel:+977015451000"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 transition transform hover:scale-110 z-40 hover:shadow-emerald-300/50"
      >
        <Phone size={24} />
      </a>
    </section>
  );
}
