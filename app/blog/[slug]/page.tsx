import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';

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
        <div className="prose dark:prose-invert max-w-none mb-12 text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>{post.content}</p>
        </div>

        {/* Share */}
        <div className="border-t border-b border-emerald-200 dark:border-emerald-700/50 py-6 mb-12">
          <p className="font-semibold text-gray-900 dark:text-white mb-4">Share this article:</p>
          <div className="flex gap-4">
            <a href={`https://twitter.com/intent/tweet?text=${post.title}&url=${process.env.NEXT_PUBLIC_DOMAIN}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:text-green-600 dark:hover:text-green-400">
              Twitter
            </a>
            <a href={`https://facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_DOMAIN}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:text-green-600 dark:hover:text-green-400">
              Facebook
            </a>
            <a href={`https://wa.me/?text=${post.title}%20${process.env.NEXT_PUBLIC_DOMAIN}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:text-green-600 dark:hover:text-green-400">
              WhatsApp
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
