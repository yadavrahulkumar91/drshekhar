'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Music } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend or Firebase
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white dark:from-emerald-950/20 dark:via-green-900/20 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions? We're here to help. Contact us today for
            consultation or appointment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-8 rounded-xl hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition border border-emerald-200 dark:border-emerald-700/50">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 rounded-full flex items-center justify-center mb-6">
              <Phone
                className="text-emerald-600 dark:text-emerald-400"
                size={28}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Phone
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Call us for immediate assistance
            </p>
            <div className="space-y-2">
              <a
                href="tel:+977015451000"
                className="block text-emerald-600 dark:text-emerald-400 font-semibold hover:text-green-600 dark:hover:text-green-400"
              >
                +977-01-5451000
              </a>
              <p className="text-sm text-gray-500">
                (Sunday-Friday: 8 AM - 10 AM, 3 PM - 6 PM)
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-8 rounded-xl hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition border border-emerald-200 dark:border-emerald-700/50">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 rounded-full flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-emerald-600 dark:text-emerald-400" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              WhatsApp
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Quick messages and appointment booking
            </p>
            <a
              href="https://wa.me/9779765199777"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:text-green-600 dark:hover:text-green-400"
            >
              +977-9765199777
            </a>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-8 rounded-xl hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition border border-emerald-200 dark:border-emerald-700/50">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 rounded-full flex items-center justify-center mb-6">
              <MapPin
                className="text-emerald-600 dark:text-emerald-400"
                size={28}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Location
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              National Gastro Liver Center (NGLC)
              <br />
              <span className="font-semibold">M89C+2JG Karmachari Sanchaykosh Bhawan, Hospital Rd, Lalitpur 44700</span>
              <br />
              Nepal
            </p>
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-emerald-200 dark:border-emerald-700/50">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
                  placeholder="+977-XXXXXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 resize-none"
                  placeholder="Tell us about your concern..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-6">
                Visit Our Clinic
              </h2>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 h-96 rounded-xl overflow-hidden border border-emerald-200 dark:border-emerald-700/50">
                <iframe 
                  src="https://maps.google.com/maps?q=National+Gastro+Liver+Center,+M89C+2JG+Karmachari+Sanchaykosh+Bhawan,+Hospital+Rd,+Lalitpur+44700,+Nepal&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  title="National Gastro Liver Center Location"
                ></iframe>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40 p-6 rounded-xl border border-emerald-200 dark:border-emerald-700/50">
              <h3 className="font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-4 text-center">
                Follow Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-6">
                Stay connected and get the latest updates on health tips and medical news
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://facebook.com/drshekhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110"
                  title="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com/drshekhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110 overflow-hidden"
                  title="Follow us on Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@dr.shekhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110 overflow-hidden"
                  title="Follow us on TikTok"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@drshekhar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110 overflow-hidden"
                  title="Subscribe to our YouTube channel"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40 p-6 rounded-xl border border-emerald-200 dark:border-emerald-700/50">
              <h3 className="font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-4">
                Office Hours
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>
                  <span className="font-semibold">Sunday - Friday:</span> 8 AM -
                  10 AM, 3 PM - 6 PM
                </p>
                <p>
                  <span className="font-semibold">Saturday:</span> 9 AM - 12 PM
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Appointments can be booked 1 week in advance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
