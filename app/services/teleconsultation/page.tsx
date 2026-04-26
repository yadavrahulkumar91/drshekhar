import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Shield, Users } from 'lucide-react';
import TeleconsultationBooking from '@/components/TeleconsultationBooking';

export const metadata: Metadata = {
  title: 'Teleconsultation - U Smile Dental Clinic',
  description:
    'Book a virtual teleconsultation with Dr. Rinku Sah. No login required. Get expert dental advice from home.',
  keywords: [
    'teleconsultation',
    'online dental consultation',
    'virtual appointment',
    'dental care',
    'root canal specialist',
  ],
};

export default function TeleconsultationPage() {
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
            Teleconsultation with Dr. Rinku Sah
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Get expert dental consultation from the comfort of your home. No need to login, just book your appointment and consult online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Benefits Card 1 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 dark:bg-emerald-500 rounded-full mb-4">
              <Clock size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Convenient Scheduling
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Choose your preferred date and time. Available time slots to fit your schedule.
            </p>
          </div>

          {/* Benefits Card 2 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 dark:bg-emerald-500 rounded-full mb-4">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Expert Consultation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Consult with Dr. Rinku Sah, a skilled root canal specialist and dental care expert.
            </p>
          </div>

          {/* Benefits Card 3 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 hover:shadow-lg transition">
            <div className="flex items-center justify-center w-12 h-12 bg-emerald-600 dark:bg-emerald-500 rounded-full mb-4">
              <Shield size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              No Login Required
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Simple and easy booking process. Just enter your details and select your preferred time.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Features List */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Why Choose Teleconsultation?
            </h2>

            <div className="space-y-4">
              {[
                'Virtual consultation from your home',
                'No travel time or expenses',
                'Direct communication with Dr. Rinku Sah',
                'Email confirmation with appointment details',
                'Expert advice on dental and root canal concerns',
                'Prescription and recommendations via email',
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
              Consultation Details
            </h3>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Duration:</p>
                <p>10 minutes per consultation slot</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Available Time Slots:</p>
                <p className="text-sm mt-2">
                  <strong>Sunday:</strong> 8:00 AM - 9:50 AM, 3:00 PM - 6:00 PM
                  <br />
                  <strong>Monday:</strong> 8:00 AM - 10:00 AM, 3:00 PM - 6:00 PM
                  <br />
                  <strong>Tuesday:</strong> 8:00 AM - 9:50 AM, 2:30 PM - 6:00 PM
                  <br />
                  <strong>Wednesday:</strong> 8:10 AM - 9:50 AM, 2:30 PM - 6:00 PM
                  <br />
                  <strong>Thursday:</strong> 8:00 AM - 9:50 AM, 2:30 PM - 6:00 PM
                  <br />
                  <strong>Friday:</strong> 8:00 AM - 9:50 AM, 2:30 PM - 6:00 PM
                  <br />
                  <strong>Saturday:</strong> 8:00 AM - 12:00 PM (Extended Morning Shift)
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Communication:</p>
                <p>Video call link will be sent to your email before the appointment</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">What to Have Ready:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Medical history (if applicable)</li>
                  <li>Current medications list</li>
                  <li>Recent test reports (if available)</li>
                  <li>A quiet, well-lit space with good internet connection</li>
                </ul>
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
            Fill in your details and select your preferred date and time
          </p>

          <TeleconsultationBooking />
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'How do I join the video call?',
                answer:
                  'A video call link will be sent to your registered email address 24 hours before the appointment. Simply click the link at the scheduled time.',
              },
              {
                question: 'What if I need to reschedule?',
                answer:
                  'Please contact us as soon as possible at the phone number provided in your confirmation email. We will try to accommodate your preferred time.',
              },
              {
                question: 'Is the consultation confidential?',
                answer:
                  'Yes, all consultations are completely confidential and follow medical privacy standards. Your information is securely handled.',
              },
              {
                question: 'Do I need any special equipment?',
                answer:
                  'You only need a smartphone, tablet, or computer with a working camera and microphone, plus a stable internet connection.',
              },
              {
                question: 'Will I receive a prescription?',
                answer:
                  'Yes, if needed, prescriptions and recommendations will be sent to your email within 24 hours of the consultation.',
              },
              {
                question: 'Can I cancel my appointment?',
                answer:
                  'Yes, you can cancel your appointment. Please notify us at least 24 hours in advance for a full refund or credit.',
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
