"use client";
import { motion } from "framer-motion";
export default function FAQSection() {


  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Questions
          </span>
        </motion.h2>

        <div className="space-y-6">
          {[
            {
              q: "How can I book an appointment with Dr. Rinku Sah?",
              a: "You can book an appointment through WhatsApp (+977-9854077977), phone (+977-9854077977), or using our online booking form. Walk-ins are also welcome during office hours.",
            },
            {
              q: "What should I expect during my first visit?",
              a: "Your first visit includes a dental consultation, examination, and personalized treatment planning. Please bring any previous dental records and a list of medications.",
            },
            {
              q: "Do you offer teleconsultation services?",
              a: "Yes, teleconsultations are available for dental advice and follow-up care. Contact us to arrange a video consultation.",
            },
            {
              q: "What insurance do you accept?",
              a: "We work with major insurance providers. Please contact our clinic for specific insurance information.",
            },
            {
              q: "How long does a root canal appointment take?",
              a: "Typically 45-60 minutes depending on the case. You should plan to be at the clinic for the full visit including preparation and follow-up instructions.",
            },
            {
              q: "Do you offer cosmetic dentistry treatments?",
              a: "Yes, Dr. Sah provides cosmetic dental services including veneers, bonding, and smile makeovers to enhance your smile.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-lg bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                {item.q}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
