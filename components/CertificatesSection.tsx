"use client";

import { motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";
import { X } from "lucide-react";

export default function CertificatesSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      name: "Root Canal Specialist Certification",
      path: "/certificates/root-canal-specialist-certificate.png",
    },
    {
      name: "Advanced Dental Care Certificate",
      path: "/certificates/dental-care-certificate.png",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications, marksheets, and educational achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(cert.path)}
            >
              <div className="relative bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-emerald-200 dark:border-emerald-700/50">
                <div className="relative w-full h-40 bg-white dark:bg-gray-800 rounded-md overflow-hidden">
                  <ExportedImage
                    src={cert.path}
                    alt={cert.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-gray-800/90 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-300 text-center line-clamp-2">
                  {cert.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 bg-white dark:bg-gray-800 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            </button>
            <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-lg overflow-auto">
              <ExportedImage
                src={selectedImage}
                alt="Certificate Preview"
                width={1200}
                height={1600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
