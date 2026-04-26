import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { Metadata } from "next";
import { Search, Calendar, Clock } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

export const metadata: Metadata = {
  title: "Dental Blog - U Smile Dental Clinic",
  description:
    "Read dental articles and oral health tips from U Smile Dental Clinic and Dr. Rinku Sah.",
  keywords: [
    "dental blog",
    "oral health",
    "root canal",
    "cosmetic dentistry",
    "dental care",
  ],
};

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const otherPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white dark:from-emerald-950/20 dark:via-green-900/20 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-4">
            Dental Blog & Articles
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert insights on dental health, root canal care, and smile wellness.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-8">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition border border-emerald-200/50 dark:border-emerald-700/50"
              >
                <div className="relative h-48 bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-800 dark:to-teal-800 overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <ImageWithFallback
                    src={post.image}
                    fallbackSrc={post.fallbackImage ?? post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-2">
                    {post.category}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{post.readTime} min</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-8">
            All Articles ({blogPosts.length})
          </h2>
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50 transition border-l-4 border-transparent hover:border-emerald-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{post.readTime} min read</span>
                      </span>
                      <span>By {post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 dark:from-emerald-900/20 dark:via-green-900/20 dark:to-emerald-900/20 text-gray-900 dark:text-white p-12 rounded-3xl text-center border border-emerald-200/50 dark:border-emerald-700/50">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
            Stay Updated with Health Tips
          </h2>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            Subscribe to our newsletter for latest medical articles and health
            tips
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
