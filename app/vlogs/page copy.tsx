import { vlogs } from '@/data/vlog';
import { Play, ThumbsUp, Share2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Vlogs & Videos | Dr. Shekhar Poudel',
  description: 'Watch our latest TikTok and Facebook videos about gastroenterology, liver health, and digestive wellness.',
};

export default function VlogsPage() {
  const tiktoks = vlogs.filter(v => v.platform === 'tiktok');
  const facebooks = vlogs.filter(v => v.platform === 'facebook');

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
            Vlogs & Videos
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Follow our latest updates, health tips, and patient stories on TikTok and Facebook
          </p>
        </div>

        {/* TikTok Section */}
        {tiktoks.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <h2 className="text-3xl font-bold dark:text-white">TikTok Videos</h2>
              <span className="text-pink-500 font-bold">♪</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tiktoks.map((vlog) => (
                <Link
                  key={vlog.id}
                  href={vlog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-80 bg-gradient-to-br from-gray-800 to-gray-900"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 text-white">
                    {/* Top Content */}
                    <div>
                      <div className="inline-block px-3 py-1 bg-pink-500/80 rounded-full text-xs font-semibold mb-3">
                        TikTok
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition">
                        {vlog.title}
                      </h3>
                      <p className="text-sm text-gray-300">{vlog.description}</p>
                    </div>
                    
                    {/* Play Button - Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-pink-500 rounded-full p-4 group-hover:bg-pink-600 group-hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <Play size={40} className="fill-white text-white ml-1" />
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="flex space-x-4 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp size={16} />
                        <span>Like</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 size={16} />
                        <span>Share</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Facebook Section */}
        {facebooks.length > 0 && (
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <h2 className="text-3xl font-bold dark:text-white">Facebook Videos</h2>
              <span className="text-blue-600 font-bold">f</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facebooks.map((vlog) => (
                <Link
                  key={vlog.id}
                  href={vlog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-80 bg-gradient-to-br from-blue-600 to-blue-800"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 text-white">
                    {/* Top Content */}
                    <div>
                      <div className="inline-block px-3 py-1 bg-blue-500/80 rounded-full text-xs font-semibold mb-3">
                        Facebook
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition">
                        {vlog.title}
                      </h3>
                      <p className="text-sm text-blue-100">{vlog.description}</p>
                    </div>

                    {/* Play Button - Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-blue-400 rounded-full p-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <Play size={40} className="fill-white text-white ml-1" />
                      </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="flex space-x-4 text-xs text-blue-200">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp size={16} />
                        <span>Like</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 size={16} />
                        <span>Share</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Follow Us For Daily Updates</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Subscribe to our social media channels for health tips, patient stories, and latest updates
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.tiktok.com/@dr.shekharpoudel"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition font-semibold"
              >
                Follow on TikTok
              </a>
              <a
                href="https://www.facebook.com/dr.shekharpoudel"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
