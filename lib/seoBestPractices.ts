// SEO Best Practices and Implementation Examples
// Copy and adapt these examples for new pages

import {
  generateMetaTags,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateServiceSchema,
  buildReviewSchema,
} from '@/lib/seo';
import { injectStructuredData, generateBreadcrumbs } from '@/lib/structuredData';

/**
 * EXAMPLE 1: Blog Page Implementation
 * Use this template when creating a new blog post page
 */
export const blogPageExample = {
  // In your page.tsx
  metadata: generateMetaTags({
    title: 'How to Preserve Your Natural Tooth: Root Canal FAQs',
    description:
      'A practical guide to root canal treatment, benefits, and aftercare from U Smile Dental Clinic in Lalbandi-6.',
    keywords: [
      'root canal FAQs',
      'tooth preservation',
      'dental health',
      'oral care tips',
      'endodontic treatment',
    ],
    canonicalUrl: 'https://usmiledentalclinic.com/blog/root-canal-faqs',
  }),

  // Schema markup to include in JSX
  schema: generateArticleSchema({
    headline: 'How to Preserve Your Natural Tooth: Root Canal FAQs',
    description:
      'A practical guide to root canal treatment, benefits, and aftercare from U Smile Dental Clinic.',
    image: 'https://usmiledentalclinic.com/blog-image.jpg',
    datePublished: '2024-01-15',
    author: 'U Smile Dental Clinic',
    content: 'Full article content here...',
  }),
};

/**
 * EXAMPLE 2: Service Page Implementation
 * Use this template when creating a service detail page
 */
export const servicePageExample = {
  metadata: generateMetaTags({
    title: 'Root Canal Treatment in Sarlahi | U Smile Dental Clinic',
    description:
      'Advanced root canal treatment to relieve tooth pain and preserve natural teeth at U Smile Dental Clinic.',
    keywords: [
      'root canal treatment',
      'tooth pain relief',
      'endodontic care',
      'dental clinic sarlahi',
      'root canal specialist',
    ],
    canonicalUrl: 'https://usmiledentalclinic.com/services/root-canal-treatment',
  }),

  schema: generateServiceSchema({
    name: 'Root Canal Treatment',
    description: 'Advanced root canal therapy to treat infected or damaged tooth pulp and preserve your natural tooth.',
    price: 'NPR',
  }),
};

/**
 * EXAMPLE 3: Landing Page with Breadcrumbs
 * Use this for category or parent pages
 */
export const landingPageExample = {
  metadata: generateMetaTags({
    title: 'Dental Services | Root Canal, Implants & Cosmetic Dentistry',
    description:
      'Complete dental services at U Smile Dental Clinic including root canal care, implants, crowns, and teeth whitening.',
    keywords: [
      'dental services',
      'cosmetic dentistry',
      'dental implants',
      'root canal',
      'dental clinic sarlahi',
    ],
    canonicalUrl: 'https://usmiledentalclinic.com/services',
  }),

  // Generate breadcrumbs programmatically
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ],

  // Include breadcrumb schema
  breadcrumbSchema: generateBreadcrumbSchema([
    { name: 'Home', url: 'https://usmiledentalclinic.com' },
    { name: 'Services', url: 'https://usmiledentalclinic.com/services' },
  ]),
};

/**
 * EXAMPLE 4: Testimonials/Reviews Page
 * Aggregate reviews for better SEO impact
 */
export const testimonialPageExample = {
  metadata: generateMetaTags({
    title: 'Patient Testimonials & Reviews | U Smile Dental Clinic',
    description:
      'Read patient stories and testimonials from those who trusted U Smile Dental Clinic for dental care and root canal treatment.',
    keywords: [
      'dental patient reviews',
      'dental testimonials',
      'patient success stories',
      'dentist reviews',
    ],
    canonicalUrl: 'https://usmiledentalclinic.com/testimonials',
  }),

  // Review schema for aggregated ratings
  reviewSchema: buildReviewSchema('U Smile Dental Clinic', [
    {
      author: 'Patient Name 1',
      rating: 5,
      comment: 'Excellent service and professional care...',
      date: '2024-01-15',
    },
    {
      author: 'Patient Name 2',
      rating: 5,
      comment: 'Highly recommended...',
      date: '2024-01-10',
    },
  ]),
};

/**
 * BEST PRACTICES FOR SEO
 */

export const seoChecklist = {
  // 1. TITLE TAGS
  titleGuidelines: {
    length: '50-60 characters',
    format: 'Primary Keyword - Brand Name or Secondary Keyword',
    example: 'Root Canal Treatment in Sarlahi | U Smile Dental Clinic',
    include: [
      'Primary keyword',
      'Location (for local SEO)',
      'Brand name',
      'Action word if applicable',
    ],
    avoid: [
      'Keyword stuffing',
      'All caps',
      'Special characters',
      'Numbers in sequence',
    ],
  },

  // 2. META DESCRIPTIONS
  descriptionGuidelines: {
    length: '150-160 characters',
    format: 'Brief summary with CTA',
    example:
      'Expert dental care in Sarlahi. Specialized root canal, implant, and cosmetic dental services. Book appointment today.',
    include: ['Primary keyword', 'Unique value proposition', 'CTA', 'Local indicator'],
    avoid: ['Duplicate descriptions', 'Excessive keywords', 'Misleading content'],
  },

  // 3. HEADING STRUCTURE
  headingStructure: {
    h1: 'Only one per page - main topic',
    h2: 'Major sections - break down main topic',
    h3: 'Subsections - detailed points',
    example: {
      h1: 'Comprehensive Gastritis Treatment in Kathmandu',
      h2: [
        'Symptoms of Gastritis',
        'Diagnosis Process',
        'Treatment Options',
        'Prevention Tips',
      ],
      h3: ['Under each H2 as needed for clarity'],
    },
  },

  // 4. INTERNAL LINKING
  internalLinking: {
    guidelines: [
      'Link to related services',
      'Use descriptive anchor text',
      'Avoid keyword stuffing in links',
      'Link to high-authority pages',
      'Use relevant contextual links',
    ],
    example: {
      text: 'Learn more about [GERD treatment](/services/acid-reflux-gerd)',
      avoid: '[click here](/services/acid-reflux-gerd)',
    },
  },

  // 5. EXTERNAL LINKING
  externalLinking: {
    guidelines: [
      'Link to authoritative sources',
      'Use nofollow for sponsored/untrusted sites',
      'Link to medical journals and research',
      'Avoid excessive external links on same page',
    ],
    examples: [
      'Medical research institutions',
      'Government health websites',
      'Peer-reviewed medical journals',
      'Professional medical associations',
    ],
  },

  // 6. IMAGE OPTIMIZATION
  imageOptimization: {
    format: 'Use WebP with JPG fallback',
    sizes: {
      thumbnail: '150x150px',
      featured: '600x400px',
      hero: '1200x630px',
    },
    altText: {
      guidelines: [
        'Describe image content accurately',
        'Include primary keyword if natural',
        'Keep under 125 characters',
        'Be specific, not vague',
      ],
      example: {
      good: 'Dr. Rinku Sah performing root canal treatment',
        bad: ['image', 'picture'],
      },
    },
  },

  // 7. CONTENT STRUCTURE
  contentStructure: {
    minLength: '1000-2000 words for in-depth content',
    density: '1-2% keyword density',
    paragraphLength: '2-4 sentences per paragraph',
    formatting: [
      'Use bold for important terms',
      'Use lists for easy scanning',
      'Use short paragraphs',
      'Break up with subheadings',
    ],
  },

  // 8. MOBILE OPTIMIZATION
  mobileOptimization: [
    'Responsive design',
    'Touch-friendly buttons',
    'Fast loading times',
    'Readable font sizes',
    'No intrusive popups',
  ],

  // 9. PAGE SPEED
  pageSpeedOptimization: [
    'Compress images',
    'Minify CSS/JS',
    'Enable browser caching',
    'Use CDN',
    'Lazy load images',
    'Target <3 second load time',
  ],

  // 10. SCHEMA MARKUP
  schemaMarkup: {
    required: [
      'LocalBusinessSchema',
      'BreadcrumbSchema',
      'FAQSchema',
      'ArticleSchema (for blog)',
      'ReviewSchema (for testimonials)',
    ],
    optional: [
      'VideoSchema (for vlogs)',
      'EventSchema (for seminars)',
      'ServiceSchema (for services)',
    ],
  },
};

/**
 * PAGE-SPECIFIC OPTIMIZATION TEMPLATES
 */

export const pageOptimizationTemplates = {
  // Template for service pages
  servicePage: {
    sections: [
      'Unique H1 with service name + location',
      'Meta description with primary keyword + CTA',
      'Hero image with descriptive alt text',
      'Service overview (150-200 words)',
      'Key benefits section (bulleted list)',
      'Detailed explanation (500-800 words)',
      'Procedure/process breakdown',
      'FAQs relevant to service',
      'CTA for appointment',
      'Related services (internal links)',
    ],
    schema: ['ServiceSchema', 'BreadcrumbSchema', 'FAQSchema'],
  },

  // Template for blog posts
  blogPost: {
    sections: [
      'Compelling H1 with target keyword',
      'Meta description with hook + keyword',
      'Intro paragraph with topic overview',
      'Table of contents (for long posts)',
      'Multiple H2 sections (3-5)',
      'Rich media (images, videos)',
      'Statistics and research citations',
      'Practical examples',
      'Conclusion with summary',
      'CTA to related services',
      'Author bio',
    ],
    schema: ['ArticleSchema', 'BreadcrumbSchema', 'FAQSchema'],
    wordCount: '1500-2500 words',
  },

  // Template for category pages
  categoryPage: {
    sections: [
      'Clear H1 describing category',
      'Brief overview of category',
      'Filtering/sorting options',
      'Grid/list of subcategories or items',
      `Each item with:
        - Title (keyword-rich)
        - Description (100-150 chars)
        - Image
        - Link to detail page`,
      'CTA buttons',
    ],
    schema: ['BreadcrumbSchema', 'LocalBusinessSchema'],
  },
};

/**
 * SEO MONITORING METRICS
 */

export const seoMetrics = {
  // Metrics to track in Google Search Console
  searchConsole: [
    'Total clicks',
    'Impressions',
    'Average CTR',
    'Average position',
    'Coverage issues',
    'Core Web Vitals',
    'Mobile usability',
  ],

  // Metrics to track in Google Analytics
  analytics: [
    'Organic traffic',
    'Bounce rate',
    'Average session duration',
    'Conversion rate',
    'Pages per session',
    'Goal completions',
  ],

  // Ranking metrics
  rankings: [
    'Primary keyword positions',
    'Long-tail keyword positions',
    'Local pack visibility',
    'Featured snippet presence',
  ],
};
