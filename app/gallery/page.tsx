'use client';

import { motion } from 'framer-motion';
import { Camera, Heart, Stethoscope, Microscope } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';

const galleryItems = [
  {
    id: 1,
    title: 'Endoscopy Suite',
    description: 'State-of-the-art endoscopy equipment for advanced diagnostic procedures',
    image: '/endoscopy.webp',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/50/medical-1209781_640.jpg',
    category: 'Equipment',
  },
  {
    id: 2,
    title: 'GERD Management',
    description: 'Comprehensive treatment for gastroesophageal reflux disease',
    image: '/gerd.webp',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/12/34/abdomen-1209783_640.jpg',
    category: 'Treatment',
  },
  {
    id: 3,
    title: 'Liver Disease Care',
    description: 'Specialized hepatology treatments and liver disease management',
    image: '/liver_disease.webp',
    fallbackImage: 'https://cdn.pixabay.com/photo/2017/07/19/11/41/liver-2519045_640.jpg',
    category: 'Specialty',
  },
  {
    id: 4,
    title: 'Inflammatory Bowel Disease',
    description: 'Advanced laboratory facilities for comprehensive testing',
    image: '/ibd.webp',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/10/06/03/24/intestine-1717444_640.jpg',
    category: 'Treatment',
  },
  {
    id: 5,
    title: 'Gastritis Treatment',
    description: 'Expert care for gastric inflammation and stomach conditions',
    image: '/gastritis.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/12/33/stomach-1209785_640.jpg',
    category: 'Treatment',
  },
  {
    id: 6,
    title: 'Liver Transplant Care',
    description: 'Advanced hepatology with transplant expertise and support',
    image: '/liver_transplant.webp',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/10/49/surgery-1209782_640.jpg',
    category: 'Specialty',
  },
  {
    id: 7,
    title: 'EUS Equipment',
    description: 'Advanced Endoscopic Ultrasound technology for precise diagnosis',
    image: '/eus.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/11/21/14/53/ultrasound-1747156_640.jpg',
    category: 'Equipment',
  },
  {
    id: 8,
    title: 'FMT Therapy',
    description: 'Fecal Microbiota Transplantation for gut health restoration',
    image: '/fmt.jpg',
    fallbackImage: 'https://cdn.pixabay.com/photo/2016/02/19/11/42/laboratory-1209779_640.jpg',
    category: 'Treatment',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white dark:from-emerald-950/20 dark:via-green-900/20 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="w-20 h-20 bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Camera size={40} className="text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art medical facility and meet our dedicated healthcare team
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-white to-emerald-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition-all duration-300 border border-emerald-200/50 dark:border-emerald-700/50"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-800 dark:to-teal-800 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <ImageWithFallback
                  src={item.image}
                  fallbackSrc={item.fallbackImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <span className="text-xs bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 dark:from-emerald-900/40 dark:via-green-900/40 dark:to-teal-900/40 p-8 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-4">
            Experience Our Facility
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to see our advanced medical equipment and caring environment in person?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+977015451000"
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg"
            >
              Schedule a Visit
            </a>
            <a
              href="/contact"
              className="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}