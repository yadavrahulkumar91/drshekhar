import { services } from '@/data/services';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Phone } from 'lucide-react';

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
              href={`/services/${service.id}`} 
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
          <a href="tel:+977015451000" className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg flex items-center justify-center space-x-2">
            <Phone size={20} />
            <span>Call Now</span>
          </a>
          <a href="https://wa.me/9779765199777" target="_blank" rel="noopener noreferrer" className="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center space-x-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
