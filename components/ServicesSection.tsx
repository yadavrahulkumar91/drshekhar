"use client";

import { services } from "@/data/services";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import ViewAllButton from "@/components/ViewAllButton";
import { getImagePath } from "@/lib/imageOptimizer";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-emerald-950/30">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
            Specialized Dental Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive dental care with advanced treatments and personalized smile solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-green-600 dark:hover:text-green-400 font-semibold transition text-sm mt-4"
            >
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-6 rounded-xl hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition border border-emerald-200/50 dark:border-emerald-700/50"
              >
                <div className="w-28 h-20 p-0.5 bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 rounded-lg flex items-center justify-center mb-4">
                  <ExportedImage
                    width={112}
                    height={80}
                    src={getImagePath(service.image)}
                    alt={service.title}
                    className="rounded-lg object-cover"
                    priority={index === 0}
                  />
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.slice(0, 2).map((detail, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm">
                      <Check
                        size={16}
                        className="text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-600 dark:text-gray-300">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* <span>Learn More</span>
                <ArrowRight size={16} /> */}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <ViewAllButton href="/services" text="View All Services" />
    </section>
  );
}
