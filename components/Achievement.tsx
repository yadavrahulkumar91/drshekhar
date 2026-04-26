"use client";

import { motion } from "framer-motion";

export default function Achievement() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-primary mb-4">
            Achievements & Recognition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Leading Dental Care & Smile Transformations
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Highlighting Dr. Rinku Sah’s clinical milestones and the team behind U Smile Dental Clinic.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                Achievements
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dr. Rinku Sah's key professional accomplishments in dental care.
              </p>
            </motion.div>

            {[
              {
                title: "Expert Root Canal Specialist",
                description:
                  "Successfully treated over 1000 complex root canal cases with high patient satisfaction.",
              },
              {
                title: "NMC Registered Dentist",
                description:
                  "Nepal Medical Council registration number 14722, ensuring certified dental care.",
              },
              {
                title: "Cosmetic Smile Transformations",
                description:
                  "Delivered beautiful smile makeovers using veneers, bonding, and aesthetic restorations.",
              },
              {
                title: "Patient Satisfaction Award",
                description:
                  "Recognized for exceptional patient experience and compassionate care at U Smile Dental Clinic.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                Support Partners
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The clinics, organizations, and training partners that support our dental practice.
              </p>
            </motion.div>

            {[
              {
                title: "U Smile Dental Clinic",
                description:
                  "Our flagship clinic in Lalbandi-6 delivering compassionate, modern dental care.",
              },
              {
                title: "Kathmandu Dental Institute",
                description:
                  "Advanced training and clinical collaboration in modern dentistry.",
              },
              {
                title: "Smile Care Academy",
                description:
                  "Ongoing professional development in restorative and cosmetic dentistry.",
              },
              {
                title: "Global Dental Training Programs",
                description:
                  "International certifications and continuing education in dental specialties.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h4 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
