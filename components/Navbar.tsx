"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import ExportedImage from "next-image-export-optimizer";
import { navBarItems } from "@/data/navbar";
import { getImagePath } from "@/lib/imageOptimizer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white to-emerald-50 dark:from-gray-900 dark:to-emerald-900/30 shadow-md border-b border-emerald-200/50 dark:border-emerald-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <ExportedImage
              src={getImagePath("/logo.svg")}
              alt="Dr. Shekhar Poudel"
              width={300}
              height={40}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 items-center">
            {navBarItems
              .filter((link) => !["Teleconsultation", "Appointment"].includes(link.name))
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  {link.name}
                </Link>
              ))}

            {/* Teleconsultation CTA - Live & Ready */}
            <Link
              href="/teleconsultation"
              className="relative px-5 py-2.5 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 hover:from-emerald-700 hover:via-green-700 hover:to-emerald-700 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
            >
              <span className="absolute -top-1 -right-1 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                LIVE
              </span>
              <span>Teleconsultation</span>
            </Link>

            {/* Appointment CTA - General */}
            <Link
              href="/appointment"
              className="px-5 py-2.5 bg-white dark:bg-gray-800 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 font-semibold rounded-full transition duration-300 transform hover:scale-105"
            >
              Book Appointment
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
           

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-3 bg-gradient-to-b from-emerald-50 to-transparent dark:from-emerald-900/20">
            {navBarItems
              .filter((link) => !["Teleconsultation", "Appointment"].includes(link.name))
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  {link.name}
                </Link>
              ))}

            {/* Mobile CTAs */}
            <div className="space-y-2 pt-4 border-t border-emerald-200 dark:border-emerald-700">
              {/* Teleconsultation CTA - Live & Ready */}
              <Link
                href="/services/teleconsultation"
                className="relative block w-full px-5 py-3 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 hover:from-emerald-700 hover:via-green-700 hover:to-emerald-700 text-white font-semibold rounded-full transition duration-300 text-center"
              >
                <span className="absolute -top-1 -right-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                  LIVE
                </span>
                Teleconsultation
              </Link>

              {/* Appointment CTA - General */}
              <Link
                href="/services/appointment"
                className="block w-full px-5 py-3 bg-white dark:bg-gray-800 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 font-semibold rounded-full transition duration-300 text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
