export interface MetaTags {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  ogLocale?: string;
}

export const generateMetaTags = (meta: MetaTags) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'drsekharpoudel.com.np';
  const baseUrl = `https://${domain}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords?.join(', '),
    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    alternates: {
      canonical: meta.canonicalUrl || baseUrl,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: meta.ogType || 'website',
      url: meta.canonicalUrl || baseUrl,
      locale: meta.ogLocale || 'en_NP',
      siteName: 'Dr. Shekhar Poudel - Gastroenterologist Nepal',
      images: [
        {
          url: meta.ogImage || `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: meta.title,
          type: 'image/jpeg',
        },
        {
          url: meta.ogImage || `${baseUrl}/og-image-square.jpg`,
          width: 800,
          height: 800,
          alt: meta.title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage || `${baseUrl}/og-image.jpg`],
      creator: '@DrShekarPoudel',
    },
  };
};

// Local Business Schema for GEO targeting (Nepal)
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': 'https://drsekharpoudel.com.np',
  name: 'Dr. Shekhar Poudel - Gastroenterology & Hepatology Clinic',
  alternateName: 'National Gastro Liver Center',
  description: 'Leading gastroenterologist and transplant hepatologist in Kathmandu, Nepal. First DM holder in Gastroenterology from AIIMS and LTSI-certified Transplant Hepatologist.',
  url: 'https://drsekharpoudel.com.np',
  telephone: '+977-1-5451000',
  email: 'contact@drsekharpoudel.com.np',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lagankhel, Lalitpur',
    addressLocality: 'Kathmandu',
    addressRegion: 'Bagmati',
    postalCode: '44600',
    addressCountry: 'NP',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Kathmandu',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Bagmati',
        containedInPlace: {
          '@type': 'Country',
          name: 'Nepal',
          geo: {
            '@type': 'GeoShape',
            box: '26.1646 80.6418 28.7039 88.2017',
          },
        },
      },
    },
    {
      '@type': 'City',
      name: 'Lalitpur',
    },
    {
      '@type': 'City',
      name: 'Bhaktapur',
    },
  ],
  medicalSpecialty: [
    {
      '@type': 'MedicalSpecialty',
      name: 'Gastroenterology',
    },
    {
      '@type': 'MedicalSpecialty',
      name: 'Hepatology',
    },
  ],
  knowsAbout: [
    'Endoscopy',
    'ERCP',
    'Liver Transplant',
    'Gastritis',
    'GERD',
    'IBS',
    'Liver Disease',
    'Hepatitis',
    'Cirrhosis',
  ],
  priceRange: '$$',
  image: 'https://drsekharpoudel.com.np/dr-shekhar-poudel_BaxEz1X.png',
  sameAs: [
    'https://facebook.com/drshekhar',
    'https://instagram.com/drshekhar',
    'https://tiktok.com/@dr.shekharpoudel',
    'https://youtube.com/channel/drshekhar',
  ],
};

// Doctor Person Schema
export const doctorPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Shekhar Poudel',
  alternateName: 'Shekhar Poudel',
  description: 'Gastroenterologist and Transplant Hepatologist in Nepal',
  image: 'https://drsekharpoudel.com.np/dr-shekhar-poudel_BaxEz1X.png',
  url: 'https://drsekharpoudel.com.np',
  sameAs: [
    'https://facebook.com/drshekhar',
    'https://instagram.com/drshekhar',
    'https://tiktok.com/@dr.shekharpoudel',
  ],
  jobTitle: 'Gastroenterologist, Transplant Hepatologist',
  worksFor: {
    '@type': 'Organization',
    name: 'National Gastro Liver Center',
  },
  award: [
    'First DM holder in Gastroenterology from AIIMS',
    'LTSI-certified Transplant Hepatologist',
  ],
};

// JSON-LD Schema Markup
export const doctorSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dr. Shekhar Poudel',
  description: 'Gastroenterologist & Transplant Hepatologist in Kathmandu, Nepal',
  url: 'https://drsekharpoudel.com.np',
  telephone: '+977-01-5451000',
  email: 'contact@drsekharpoudel.com.np',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lagankhel, Lalitpur',
    addressLocality: 'Kathmandu',
    addressRegion: 'Kathmandu',
    postalCode: '44600',
    addressCountry: 'NP',
  },
  medicalSpecialty: ['Gastroenterology', 'Hepatology'],
  priceRange: '$$',
  areaServed: 'NP',
  knowsAbout: [
    'Gastritis',
    'Acid Reflux',
    'IBS',
    'Liver Disease',
    'Endoscopy',
    'Liver Transplant',
  ],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dr. Shekhar Poudel - Medical Practice',
  url: 'https://drsekharpoudel.com.np',
  logo: 'https://drsekharpoudel.com.np/logo.png',
  description: 'Professional Gastroenterology and Hepatology Services in Kathmandu',
  sameAs: [
    'https://facebook.com/drshekhar',
    'https://instagram.com/drshekhar',
    'https://tiktok.com/@dr.shekharpoudel',
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is gastritis and how is it treated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gastritis is inflammation of the stomach lining. Treatment involves medication, lifestyle changes, and dietary modifications based on the underlying cause.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I book an appointment with Dr. Shekhar Poudel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book an appointment through WhatsApp, phone, or our online booking form. Contact: +977-9765199777',
      },
    },
  ],
};

// Breadcrumb Schema for better navigation in search results
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

// Medical Procedure Schema
export const medicalProcedureSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalProcedure',
  name: 'Endoscopy',
  description: 'A minimally invasive procedure used to examine the digestive tract',
  performer: {
    '@type': 'Person',
    name: 'Dr. Shekhar Poudel',
  },
};

// Service Schema
export const generateServiceSchema = (service: { name: string; description: string; price?: string }) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'Dr. Shekhar Poudel',
    },
    areaServed: {
      '@type': 'City',
      name: 'Kathmandu',
    },
    ...(service.price && { priceRange: service.price }),
  };
};

// Appointment Booking Schema
export const appointmentSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dr. Shekhar Poudel Appointment Booking',
  url: 'https://drsekharpoudel.com.np/appointment',
  telephone: '+977-01-5451000',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Appointment Booking',
    telephone: '+977-01-5451000',
    availableLanguage: ['en', 'ne'],
  },
};

// Reviews and Ratings Schema (can be updated with actual reviews)
export const generateReviewSchema = (reviews: Array<{ author: string; rating: number; comment: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Dr. Shekhar Poudel',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : '5',
      reviewCount: reviews.length,
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
      },
      reviewBody: review.comment,
    })),
  };
};

// Video Schema for vlogs/educational content
export const generateVideoSchema = (video: { title: string; description: string; thumbnailUrl: string; uploadDate: string; duration: string; url: string }) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    url: video.url,
  };
};

// Event Schema (for health camps or seminars)
export const generateEventSchema = (event: { name: string; description: string; startDate: string; endDate?: string; location: string }) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    ...(event.endDate && { endDate: event.endDate }),
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kathmandu',
        addressCountry: 'NP',
      },
    },
  };
};

// Article Schema for blog posts
export const generateArticleSchema = (article: { headline: string; description: string; image: string; datePublished: string; author: string; content: string }) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalScholarlyArticle',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    articleBody: article.content,
  };
};
