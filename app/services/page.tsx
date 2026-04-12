import { services } from '@/data/services';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Medical Services - Dr. Shekhar Poudel',
  description: 'Comprehensive gastroenterology and hepatology services including endoscopy, colonoscopy, ERCP, liver transplant care, and more.',
  keywords: ['gastroenterology services', 'liver disease', 'endoscopy', 'ERCP', 'hepatology'],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white dark:from-emerald-950/20 dark:via-green-900/20 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
            Our Medical Services
          </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive gastroenterology and hepatology services with state-of-the-art facilities
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 rounded-2xl hover:shadow-xl hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition border border-emerald-200/50 dark:border-emerald-700/50">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 rounded-xl flex items-center justify-center mb-6">
              <span className="text-3xl">🏥</span>
            </div>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-3">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>

            <div className="mb-6">
              <p className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</p>
              <ul className="space-y-2">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check size={20} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              href="/contact" 
              className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-green-600 dark:hover:text-green-400 font-semibold transition"
            >
              <span>Learn More</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        ))}
      </div>

      {/* Featured Services */}
      <div className="mt-20 bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 dark:from-emerald-900/40 dark:via-green-900/40 dark:to-teal-900/40 p-12 rounded-3xl border border-emerald-200/50 dark:border-emerald-700/50">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-8 text-center">
          Advanced Surgical & Therapeutic Procedures
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg">
            <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-3">Endoscopic Ultrasound (EUS)</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Advanced imaging for precise diagnosis and therapeutic interventions including EUS-guided coiling for varices.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg">
            <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-3">ERCP Procedures</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Treatment of bile and pancreatic duct disorders including stone removal and stricture management.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg">
            <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-3">Liver Transplant Care</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive pre and post-transplant management with LTSI-certified expertise.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-6">Need a Consultation?</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Book your appointment today</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+977015451000" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg">
            Call Now
          </a>
          <a href="https://wa.me/977-9765199777" target="_blank" rel="noopener noreferrer" className="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-8 py-3 rounded-lg font-semibold transition">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
