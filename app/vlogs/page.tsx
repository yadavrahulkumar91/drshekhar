import { vlogs } from '@/data/vlog';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Vlogs & Videos | U Smile Dental Clinic',
  description: 'Watch our latest videos about dental care, oral hygiene tips, and smile transformation stories.',
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
            Follow our latest updates, dental tips, and smile stories on TikTok and Facebook
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
                <div
                  key={vlog.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-800 to-gray-900"
                >
                  {/* Video Container */}
                  <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                    {vlog.embedUrl ? (
                      <iframe
                        src={vlog.embedUrl}
                        width="100%"
                        height="100%"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">
                        Video unavailable
                      </div>
                    )}
                  </div>

                  {/* Info Section */}
                  <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="inline-block px-3 py-1 bg-pink-500/80 rounded-full text-xs font-semibold mb-2 text-white">
                      TikTok
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition">
                      {vlog.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3">{vlog.description}</p>
                    <a
                      href={vlog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition text-sm font-semibold"
                    >
                      <span>View on TikTok</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
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
                <div
                  key={vlog.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-600 to-blue-800"
                >
                  {/* Video Container */}
                  <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                    {vlog.embedUrl ? (
                      <iframe
                        src={vlog.embedUrl}
                        width="100%"
                        height="100%"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400">
                        Video unavailable
                      </div>
                    )}
                  </div>

                  {/* Info Section */}
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-800">
                    <div className="inline-block px-3 py-1 bg-blue-500/80 rounded-full text-xs font-semibold mb-2 text-white">
                      Facebook
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition">
                      {vlog.title}
                    </h3>
                    <p className="text-sm text-blue-100 mb-3">{vlog.description}</p>
                    <a
                      href={vlog.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition text-sm font-semibold"
                    >
                      <span>View on Facebook</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Follow Us For More Videos</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Subscribe to our social media channels for daily dental tips, patient stories, and clinic updates
            </p>
            <div className="flex justify-center space-x-4 flex-wrap gap-4">
              <a
                href="https://www.tiktok.com/@usmiledentalclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition font-semibold inline-flex items-center space-x-2"
              >
                <span>Follow on TikTok</span>
                <ExternalLink size={18} />
              </a>
              <a
                href="https://www.facebook.com/usmiledentalclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold inline-flex items-center space-x-2"
              >
                <span>Follow on Facebook</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
