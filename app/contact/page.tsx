'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

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
          Have questions? We're here to help. Contact us today for consultation or appointment.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Contact Methods */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-8 rounded-xl hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition border border-emerald-200 dark:border-emerald-700/50">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 rounded-full flex items-center justify-center mb-6">
            <Phone className="text-emerald-600 dark:text-emerald-400" size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Phone</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Call us for immediate assistance
          </p>
          <div className="space-y-2">
            <a href="tel:+977015451000" className="block text-emerald-600 dark:text-emerald-400 font-semibold hover:text-green-600 dark:hover:text-green-400">
              +977-01-5451000
            </a>
            <p className="text-sm text-gray-500">(Sunday-Friday: 8 AM - 10 AM, 3 PM - 6 PM)</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-8 rounded-xl hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition border border-emerald-200 dark:border-emerald-700/50">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 rounded-full flex items-center justify-center mb-6">
            <MessageCircle className="text-emerald-600 dark:text-emerald-400" size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">WhatsApp</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Quick messages and appointment booking
          </p>
          <a 
            href="https://wa.me/977-9765199777" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:text-green-600 dark:hover:text-green-400"
          >
            +977-9765199777
          </a>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-8 rounded-xl hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition border border-emerald-200 dark:border-emerald-700/50">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 rounded-full flex items-center justify-center mb-6">
            <MapPin className="text-emerald-600 dark:text-emerald-400" size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Location</h3>
          <p className="text-gray-600 dark:text-gray-300">
            National Gastro Liver Center (NGLC)<br />
            <span className="font-semibold">Lagankhel, Lalitpur</span><br />
            Kathmandu, Nepal
          </p>
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-emerald-200 dark:border-emerald-700/50">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Name</label>
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
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Email</label>
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
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Phone</label>
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
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Message</label>
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
            <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-6">Visit Our Clinic</h2>
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 h-96 rounded-xl flex items-center justify-center border border-emerald-200 dark:border-emerald-700/50">
              <div className="text-center">
                <MapPin size={48} className="text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300">
                  Google Maps Embed Placeholder
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Replace with actual Google Maps embed
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40 p-6 rounded-xl border border-emerald-200 dark:border-emerald-700/50">
            <h3 className="font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-4">Office Hours</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p><span className="font-semibold">Sunday - Friday:</span> 8 AM - 10 AM, 3 PM - 6 PM</p>
              <p><span className="font-semibold">Saturday:</span> 9 AM - 12 PM</p>
              <p className="text-sm text-gray-500 mt-4">Appointments can be booked 1 week in advance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
