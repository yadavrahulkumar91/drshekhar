import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, MapPin, Users } from 'lucide-react';
import HospitalAppointmentBooking from '@/components/HospitalAppointmentBooking';

export const metadata: Metadata = {
  title: 'Book Appointment - U Smile Dental Clinic',
  description:
    'Book an in-person consultation with Dr. Rinku Sah at U Smile Dental Clinic. No login required.',
  keywords: [
    'dental appointment',
    'in-person consultation',
    'dental clinic',
    'root canal specialist',
    'dentist appointment',
  ],
};

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white dark:from-emerald-950/20 dark:via-green-900/20 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/services"
            className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-green-600 dark:hover:text-green-400 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-6 leading-tight">
            Book Hospital Appointment
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Schedule an in-person consultation with Dr. Rinku Sah at U Smile Dental Clinic in Lalbandi-6, Sarlahi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Hospital 1 Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 dark:bg-emerald-500 rounded-full mb-4">
              <MapPin size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              U Smile Dental Clinic
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Dedicated dental clinic offering root canal, cosmetic, and family dentistry services.
            </p>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <strong>Hours:</strong>
                <br />
                Sunday-Friday: 8:00 AM - 7:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>

          {/* Hospital 2 Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 dark:bg-emerald-500 rounded-full mb-4">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              In-Clinic Dental Care
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comfortable dental treatments in a patient-friendly environment with a focus on oral health.
            </p>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <strong>Hours:</strong>
                <br />
                Sunday-Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Features List */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Why Book In-Person?
            </h2>

            <div className="space-y-4">
              {[
                'Comprehensive dental examination and diagnosis',
                'Direct face-to-face consultation with Dr. Rinku Sah',
                'Advanced dental treatments available on-site',
                'Immediate access to oral health records and dental imaging',
                'Expert root canal and smile care',
                'Professional dental support and guidance',
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle size={24} className="text-emerald-600 dark:text-emerald-400 mt-1" />
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 dark:from-emerald-900/40 dark:via-green-900/40 dark:to-teal-900/40 p-8 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Appointment Details
            </h3>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Duration:</p>
                <p>10 minutes per consultation slot</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Availability:</p>
                <p className="text-sm">
                  Select a hospital first to view available time slots for your preferred date.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">What to Bring:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Valid ID or insurance card</li>
                  <li>Medical history documents</li>
                  <li>Current medications list</li>
                  <li>Recent test reports (if available)</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Arrival Time:</p>
                <p className="text-sm">Please arrive 10-15 minutes early for check-in and formalities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Book Your Appointment
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Select your preferred hospital, date, and time slot below
          </p>

          <HospitalAppointmentBooking />
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'Which hospital should I choose?',
                answer:
                  'Our clinic provides personalized dental care and comfortable in-person appointments. Choose the service that best fits your needs and schedule.',
              },
              {
                question: 'What is the consultation fee?',
                answer:
                  'Please contact the respective hospital directly for fee information. Standard consultation charges apply.',
              },
              {
                question: 'Can I reschedule my appointment?',
                answer:
                  'Yes, you can reschedule by contacting the hospital at least 24 hours before your appointment.',
              },
              {
                question: 'What if I am late for my appointment?',
                answer:
                  'Please call the hospital immediately if you will be late. Late arrivals may affect your appointment time.',
              },
              {
                question: 'Do I need to bring any documents?',
                answer:
                  'Bring a valid ID, insurance card, medical history, current medications list, and recent test reports if available.',
              },
              {
                question: 'How long is the consultation?',
                answer:
                  'Each consultation slot is 10 minutes. However, the doctor may extend if additional examination is needed.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
