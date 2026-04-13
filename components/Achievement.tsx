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
            Achievements & Contributions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Leading Gastroenterology and Liver Care in Nepal
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Highlighting Dr. Shekhar Poudel’s clinical milestones and the
            institutions that support his pioneering work.
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
                Dr. Shekhar Poudel's professional accomplishments and leadership
                roles.
              </p>
            </motion.div>

            {[
              {
                title: "Vice President of Nepal Epilepsy Society",
                description:
                  "Leading role in advancing epilepsy care and research in Nepal through organizational leadership.",
              },
              {
                title: "Vice President of Nepalese Society of Neurosurgeons",
                description:
                  "Contributing to the advancement of neurosurgery standards and practices in Nepal.",
              },
              {
                title: "Chairperson, Neuro Spine Chapter of NESON",
                description:
                  "Leading the neuro spine division of the Nepalese Society of Neurosurgeons.",
              },
              {
                title: "Editor-in-Chief, Nepal Journal of Neuroscience (NJN)",
                description:
                  "Overseeing publication and dissemination of neuroscience research in Nepal.",
              },
              {
                title: "WFNS Peripheral Nerve Committee Member from Asia",
                description:
                  "Representing Asia on the World Federation of Neurosurgical Societies peripheral nerve committee.",
              },
              {
                title: "Awards by Students and Colleagues",
                description:
                  "Recognition and appreciation received from students and professional peers.",
              },
              {
                title: "Travel Fellowships and Grants",
                description:
                  "International travel support for academic and professional development.",
              },
              {
                title: "Recognition by Organizations",
                description:
                  "Professional acknowledgments from medical and academic institutions.",
              },
              {
                title: "Academic Awards",
                description:
                  "Scholarly recognitions for contributions to medical education and research.",
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
                Contributors
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                These institutions and teams support Dr. Poudel's work in
                gastroenterology, liver care, and advanced endoscopy.
              </p>
            </motion.div>

            {[
              {
                title: "National Gastro Liver Center",
                description:
                  "Clinical leadership and patient care coordination in digestive health services.",
              },
              {
                title: "Norvic International Hospital",
                description:
                  "Advanced endoscopy and liver transplant support for complex procedures.",
              },
              {
                title: "AIIMS New Delhi",
                description:
                  "Premier training in gastroenterology and hepatology at India's top medical institute.",
              },
              {
                title: "Max Super Specialty Hospital",
                description:
                  "Transplant hepatology fellowship and certification in advanced liver care.",
              },
              {
                title: "Liver Transplant Society of India",
                description:
                  "Transplant certification and standards for liver transplant excellence.",
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
