'use client';

import { vlogs } from '@/data/vlog';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import ViewAllButton from '@/components/ViewAllButton';
import { useEffect, useRef, useState } from 'react';

export default function VlogsSection() {
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const [tiktokScriptLoaded, setTiktokScriptLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const displayedVlogs = vlogs.slice(0, 3);
  const tiktoks = displayedVlogs.filter(v => v.platform === 'tiktok');

  // Load TikTok script only once when needed
  useEffect(() => {
    if (tiktoks.length === 0 || tiktokScriptLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !tiktokScriptLoaded) {
            // Load TikTok embed script
            const script = document.createElement('script');
            script.src = 'https://www.tiktok.com/embed.js';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            setTiktokScriptLoaded(true);
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [tiktoks.length, tiktokScriptLoaded]);

  // Lazy load individual videos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videoId = Number(entry.target.getAttribute('data-video-id'));
            if (videoId && !loadedVideos.has(videoId)) {
              setLoadedVideos((prev) => new Set(prev).add(videoId));
              // Process TikTok embeds if script is loaded
              if ((window as any).tiktok?.embed?.lib?.render) {
                (window as any).tiktok.embed.lib.render(entry.target);
              }
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    sectionRef.current?.querySelectorAll('[data-video-id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loadedVideos]);

  const VideoCard = ({ vlog }: { vlog: (typeof vlogs)[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl overflow-hidden border transition hover:shadow-lg h-full flex flex-col ${
        vlog.platform === "tiktok"
          ? "bg-gradient-to-br from-gray-800 to-gray-900 border-pink-500/30 hover:shadow-pink-500/20"
          : "bg-gradient-to-br from-blue-600 to-blue-800 border-blue-400/30 hover:shadow-blue-500/20"
      }`}
    >
      {/* Video Container */}
      <div
        className="relative w-full bg-black/50 flex-grow flex items-center justify-center min-h-[300px]"
        data-video-id={vlog.id}
      >
        {loadedVideos.has(vlog.id) ? (
          vlog.embedUrl ? (
            // vlog.platform === "tiktok" ? (
            //   <blockquote
            //     className="tiktok-embed w-full h-full"
            //     cite={vlog.url}
            //     data-unique-id={vlog.id}
            //     data-video-id={`${vlog.id}`}
            //   >
            //     <section></section>
            //   </blockquote>
            // ) : 
            // (
              <iframe
                width="100%"
                height="100%"
                src={vlog.embedUrl}
                title={vlog.title}
                className="w-full h-full"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            // )
          ) : (
            <div className="text-center text-gray-300 p-4">
              <p className="mb-2">Video unavailable</p>
            </div>
          )
        ) : (
          <div className="text-center text-gray-400 p-4 w-full h-full flex flex-col items-center justify-center">
            <div className="animate-pulse mb-2">▶</div>
            <p className="text-sm">Loading video...</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex-shrink-0">
        <h3 className="text-white font-semibold mb-2 line-clamp-2 text-sm">
          {vlog.title}
        </h3>
        <p
          className={`text-xs mb-4 line-clamp-2 ${
            vlog.platform === "tiktok" ? "text-pink-100" : "text-blue-100"
          }`}
        >
          {vlog.description}
        </p>

        {/* View Button */}
        <Link href={vlog.url} target="_blank">
          <button
            className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition text-sm ${
              vlog.platform === "tiktok"
                ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white"
                : "bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white"
            }`}
          >
            View on {vlog.platform === "tiktok" ? "TikTok" : "Facebook"}
            <ExternalLink size={16} />
          </button>
        </Link>
      </div>
    </motion.div>
  );

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
            Health Awareness Videos
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Learn about digestive and liver health from our expert videos
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {displayedVlogs.map((vlog, index) => (
            <motion.div
              key={vlog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VideoCard vlog={vlog} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <ViewAllButton href="/vlogs" text="View All Videos" />
      </div>
    </section>
  );
}
