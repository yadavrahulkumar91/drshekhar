"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { doctorProfile } from "@/data/doctor";

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
            Dr. Shekhar Poudel brings international expertise in digestive
            health and liver transplantation to Kathmandu. First Nepali
            certified by AIIMS and LTSI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/appointment"
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-lg flex items-center justify-center space-x-2 transition transform hover:scale-105 shadow-lg hover:shadow-emerald-300/50 dark:hover:shadow-emerald-900/50"
            >
              <span className="font-bold">Book Appointment</span>
              <ArrowRight size={20} />
            </Link>

            <a
              href="https://wa.me/9779765199777"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-8 py-3 rounded-lg flex items-center justify-center space-x-2 transition overflow-hidden"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
                15+
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                5000+
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Patients Treated
              </p>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
                1st
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                LTSI Certified
              </p>
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
          {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl overflow-hidden">
              <Link href="/about" >
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
              </Link>
          </div> */}
          <div className="bg-gradient-to-br from-emerald-200/40 to-teal-200/40 rounded-3xl p-8">
           <Link href="/about" >
            <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden">
              <div className="w-full aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src="/dr-shekhar-poudel_BaxEz1X.png"
                  alt="Dr. Shekhar Poudel - Gastroenterologist & Transplant Hepatologist"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {doctorProfile.name}
                </h3>
                <p className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent font-semibold">
                  {doctorProfile.specialization}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {doctorProfile.title}
                </p>
              </div>

            </div>
            </Link>
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
