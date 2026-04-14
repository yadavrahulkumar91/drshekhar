'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import Image  from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-white to-emerald-50 dark:from-gray-900 dark:to-emerald-900/30 shadow-md border-b border-emerald-200/50 dark:border-emerald-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold hover:shadow-lg hover:shadow-emerald-300/50 transition">
              D
            </div>
            <span className="hidden sm:inline font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">Dr. Shekhar</span> */}
            <Image src='/Sekhar.png' alt='Dr. Shekhar Poudel' width={300} height={40} className='rounded-full' />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Home</Link>
            <Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">About</Link>
            <Link href="/services" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Services</Link>
            <Link href="/gallery" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Gallery</Link>
            <Link href="/testimonials" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Testimonials</Link>
            <Link href="/vlogs" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Vlogs</Link>
            <Link href="/blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Blogs</Link>
            <Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Contact</Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* <button 
              onClick={() => {
                console.log('Button clicked!');
                toggleTheme();
              }} 
              className="p-2 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 rounded transition cursor-pointer" 
              title="Toggle dark mode"
              type="button"
            >
              {isDark ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} className="text-slate-700" />}
            </button> */}

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-gradient-to-b from-emerald-50 to-transparent dark:from-emerald-900/20">
            <Link href="/" className="block py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition">Home</Link>
            <Link href="/about" className="block py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition">About</Link>
            <Link href="/services" className="block py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition">Services</Link>
            <Link href="/gallery" className="block py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition">Gallery</Link>
            <Link href="/testimonials" className="block py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition">Testimonials</Link>
            <Link href="/vlogs" className="block py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition">Vlogs</Link>
            <Link href="/blog" className="block py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition">Blog</Link>
            <Link href="/contact" className="block py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
