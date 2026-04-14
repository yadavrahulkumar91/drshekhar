'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ViewAllButtonProps {
  href: string;
  text: string;
}

export default function ViewAllButton({ href, text }: ViewAllButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex justify-center"
    >
      <Link href={href}>
        <button className="group bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg flex items-center gap-2">
          {text}
          <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
        </button>
      </Link>
    </motion.div>
  );
}
