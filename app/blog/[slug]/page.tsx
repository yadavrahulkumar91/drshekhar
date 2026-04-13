import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, Twitter, Facebook, MessageCircle } from 'lucide-react';

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) return { title: 'Not Found' };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white dark:from-emerald-950/20 dark:via-green-900/20 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/blog" className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-green-600 dark:hover:text-green-400 transition">
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1 rounded-full">{post.category}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 h-96 bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-800 dark:to-teal-800 rounded-2xl flex items-center justify-center border border-emerald-200 dark:border-emerald-700/50">
          <div className="text-center">
            <span className="text-6xl">📑</span>
            <p className="text-gray-600 dark:text-gray-300 mt-4">Featured Image</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-none mb-12 text-gray-600 dark:text-gray-300">
          <div className="space-y-6">
            {post.content.split('\n').filter(line => line.trim() !== '').map((line, index) => {
              const trimmedLine = line.trim();

              // Check if it's a main heading (ends with ?, short and looks like a question, or is "Understanding" something)
              const isMainHeading = trimmedLine.endsWith('?') ||
                                   (trimmedLine.length < 50 && trimmedLine.includes('?')) ||
                                   trimmedLine.startsWith('Understanding') ||
                                   trimmedLine === 'Gastritis is inflammation of the stomach lining caused by various factors. This comprehensive guide covers everything you need to know about this common condition.';

              // Check if it's a sub-heading (short line, not a main heading, not starting with bullet points)
              const isSubHeading = !isMainHeading &&
                                  trimmedLine.length < 40 &&
                                  !trimmedLine.startsWith('-') &&
                                  !trimmedLine.startsWith('•') &&
                                  !/^\d+\./.test(trimmedLine) &&
                                  trimmedLine !== '';

              if (isMainHeading) {
                return (
                  <h2 key={index} className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-4 mt-8">
                    {trimmedLine}
                  </h2>
                );
              } else if (isSubHeading) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
                    {trimmedLine}
                  </h3>
                );
              } else {
                // Regular content - check if it's a bullet point
                const isBulletPoint = trimmedLine.startsWith('-') || trimmedLine.startsWith('•') || /^\d+\./.test(trimmedLine);
                if (isBulletPoint) {
                  return (
                    <div key={index} className="flex items-start space-x-3 ml-4">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                      <p className="leading-relaxed">{trimmedLine.replace(/^[-•]\s*/, '').replace(/^\d+\.\s*/, '')}</p>
                    </div>
                  );
                } else {
                  // Regular paragraph
                  return (
                    <p key={index} className="leading-relaxed mb-4">
                      {trimmedLine}
                    </p>
                  );
                }
              }
            })}
          </div>
        </div>

        {/* Share */}
        <div className="border-t border-b border-emerald-200 dark:border-emerald-700/50 py-6 mb-12">
          <p className="font-semibold text-gray-900 dark:text-white mb-4">Share this article:</p>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${post.title}&url=${process.env.NEXT_PUBLIC_DOMAIN}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300 overflow-hidden"
              title="Share on Twitter"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href={`https://facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_DOMAIN}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              title="Share on Facebook"
            >
              <Facebook size={18} className="text-white" />
            </a>
            <a
              href={`https://wa.me/9779765199777?text=${encodeURIComponent(post.title + ' ' + process.env.NEXT_PUBLIC_DOMAIN)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300 overflow-hidden"
              title="Share on WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Author Info */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-6 rounded-xl mb-12 border border-emerald-200 dark:border-emerald-700/50">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 flex items-center justify-center text-3xl">
              👨‍⚕️
            </div>
            <div>
              <h3 className="font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">{post.author}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Specialist in Gastroenterology and Hepatology
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="bg-white dark:bg-gray-800 rounded-lg p-6 transition border border-emerald-200/50">
                  <p className="text-emerald-600 text-sm font-semibold mb-2">{relatedPost.category}</p>
                  <h3 className="font-bold text-gray-900 mb-3">{relatedPost.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{relatedPost.description}</p>
                  <span className="text-emerald-600 font-semibold text-sm">Read More</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
