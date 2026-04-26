// This component injects structured data (JSON-LD) into the page head for SEO purposes
// import { Script } from 'next/document';

interface StructuredDataProps {
  data: Record<string, any>;
  type?: 'ld+json' | 'json';
}

// Server-side structured data injection helper
export function injectStructuredData(data: Record<string, any>) {
  return {
    __html: JSON.stringify(data),
  };
}

// Helper to generate multiple schema scripts
export function generateSchemaScripts(schemas: Array<Record<string, any>>) {
  return schemas.map((schema, index) => ({
    id: `schema-${index}`,
    type: 'application/ld+json',
    content: schema,
  }));
}

// Breadcrumb generation helper for dynamic pages
export function generateBreadcrumbs(pathname: string) {
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index, arr) => {
      const url = '/' + arr.slice(0, index + 1).join('/');
      const name = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { name, url };
    });

  return [{ name: 'Home', url: '/' }, ...segments];
}

// FAQ Schema builder
export function buildFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Review/Rating Schema builder
export function buildReviewSchema(
  businessName: string,
  reviews: Array<{
    author: string;
    rating: number;
    comment: string;
    date: string;
  }>
) {
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : '5';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating,
      reviewCount: reviews.length,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: review.author },
      datePublished: review.date,
      reviewRating: { '@type': 'Rating', ratingValue: review.rating },
      reviewBody: review.comment,
    })),
  };
}

// Article Schema builder for blog posts
export function buildArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  content: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'U Smile Dental Clinic',
      logo: {
        '@type': 'ImageObject',
        url: 'https://usmiledentalclinic.com/logo.png',
      },
    },
    mainEntity: {
      '@type': 'MedicalWebPage',
      url: article.url,
      name: article.title,
    },
  };
}

// Service Schema builder
export function buildServiceSchema(service: {
  name: string;
  description: string;
  image?: string;
  provider: string;
  areaServed: string[];
  price?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: service.name,
    description: service.description,
    ...(service.image && { image: service.image }),
    provider: {
      '@type': 'MedicalBusiness',
      name: service.provider,
    },
    areaServed: service.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    ...(service.price && { priceRange: service.price }),
  };
}

// Contact Page Schema
export function buildContactSchema(contact: {
  businessName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  country: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: contact.businessName,
    telephone: contact.phone,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address,
      addressLocality: contact.city,
      addressCountry: contact.country,
    },
  };
}

export default StructuredDataProps;
