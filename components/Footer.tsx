'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-emerald-950 text-white pt-16 pb-6 border-t border-emerald-700/50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <h3 className="font-bold text-lg bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-4">Dr. Shekhar Poudel</h3>
          <p className="text-gray-300 text-sm">Gastroenterologist & Transplant Hepatologist in Kathmandu, Nepal</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-emerald-400 transition">About</Link></li>
            <li><Link href="/services" className="hover:text-emerald-400 transition">Services</Link></li>
            <li><Link href="/blog" className="hover:text-emerald-400 transition">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/services#gastritis" className="hover:text-emerald-400 transition">Gastritis Treatment</Link></li>
            <li><Link href="/services#liver" className="hover:text-emerald-400 transition">Liver Care</Link></li>
            <li><Link href="/services#endoscopy" className="hover:text-emerald-400 transition">Endoscopy</Link></li>
            <li><Link href="/services#consultation" className="hover:text-emerald-400 transition">Consultation</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-emerald-400" />
              <a href="tel:+977015451000" className="hover:text-emerald-400 transition">+977-01-5451000</a>
            </div>
            <div className="flex items-center space-x-2">
              <Send size={16} className="text-emerald-400" />
              <a href="https://wa.me/9779765199777" className="hover:text-emerald-400 transition">WhatsApp</a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-emerald-400" />
              <a 
                href="https://maps.google.com/maps?q=National+Gastro+Liver+Center,+M89C+2JG+Karmachari+Sanchaykosh+Bhawan,+Hospital+Rd,+Lalitpur+44700,+Nepal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
              >
                Kathmandu, Nepal
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="max-w-7xl mx-auto px-4 mb-8 pb-8 border-t border-emerald-700/30 pt-8">
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
            <Facebook size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
            <Instagram size={24} />
          </a>
          <a href="https://tiktok.com/@dr.shekharpoudel" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm border-t border-emerald-700/30 pt-6">
        <p>&copy; 2026 Dr. Shekhar Poudel. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
}
