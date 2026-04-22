"use client";

import { motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";
import { X } from "lucide-react";

export default function CertificatesSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      name: "AIIMS DM Marksheet",
      path: "/certificates/dr_shekhar_AIIMS_DM_marksheet.png",
    },
    {
      name: "DM AIIMS Certificate",
      path: "/certificates/dr_shekhar_DM_AIIMS.png",
    },
    {
      name: "BPKIHS MBBS Certificate",
      path: "/certificates/dr_shekhar_BPKIHS_MBBS_certificate.png",
    },
    {
      name: "MBBS BPKIHS Transcript",
      path: "/certificates/dr_shekhar_MBBS_BPKIHS_transcript.png",
    },
    {
      name: "MD Internal Medicine Certificate",
      path: "/certificates/dr_shekhar_MD_Internal_medicine_PIMER_certificate.png",
    },
    {
      name: "PIMER Postgraduate Certificate",
      path: "/certificates/dr_shekhar_PIMER_postgraduate_certificate.png",
    },
    {
      name: "Fellowship in Liver Transplant",
      path: "/certificates/dr_shekhar_NMC_fellowship_in_liver_transplant.png",
    },
    {
      name: "Fellowship in Transplant Hepatology",
      path: "/certificates/dr_shekhar_fellowship_in_transplant_hepatology_max_medical.png",
    },
    {
      name: "Post Doctoral Training - LTSI",
      path: "/certificates/dr_shekhar_post_doctoral_tranining_liver_transplantation_society_of_india_certificate.png",
    },
    {
      name: "Associate Professor Appointment",
      path: "/certificates/dr_shekhar_associate_professor_appointment_kathmandu_medical_college.png",
    },
    {
      name: "3-Year Contract - Associate Professor",
      path: "/certificates/dr_shekhar_associate_professor_appointment_kathmandu_medical_college_3_year_contract.png",
    },
    {
      name: "HSEB Certificate",
      path: "/certificates/dr_shekhar_higher_secondary_education_board_certificate.png",
    },
    {
      name: "HSEB Marksheet",
      path: "/certificates/dr_shekhar_HSEB_marksheet.png",
    },
    {
      name: "SLC Marksheet",
      path: "/certificates/dr_shekhar_SLC_marksheet.png",
    },
    {
      name: "School Leaving Certificate",
      path: "/certificates/dr_shekhar_school_leaving_certificate.png",
    },
    {
      name: "NMC Certificates",
      path: "/certificates/DrShekarNMC_certificates.png",
    },
    {
      name: "BPKIHS MBBS Internship",
      path: "/certificates/dr_shekhar_BPKIHS_MBBS_internship_certificate.png",
    },
    {
      name: "Certificate of Participation",
      path: "/certificates/dr_shekhar_certificate_of_participation_kathmandu_medical_college.png",
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
