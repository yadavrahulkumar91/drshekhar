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
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'usmiledentalclinic.com';
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
      siteName: 'U Smile Dental Clinic',
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
  '@id': 'https://usmiledentalclinic.com',
  name: 'U Smile Dental Clinic',
  alternateName: 'U Smile Dental Clinic Lalbandi',
  description: 'Professional dental care clinic in Lalbandi-6, Sarlahi offering root canal therapy, implants, cosmetic dentistry, and preventive oral health services.',
  url: 'https://usmiledentalclinic.com',
  telephone: '+977-9765199777',
  email: 'info@usmiledentalclinic.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lalbandi-6',
    addressLocality: 'Sarlahi',
    addressRegion: 'Province No. 2',
    postalCode: '',
    addressCountry: 'NP',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Sarlahi',
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Province No. 2',
        containedInPlace: {
          '@type': 'Country',
          name: 'Nepal',
          geo: {
            '@type': 'GeoShape',
            box: '26.5 85.0 27.0 86.0',
          },
        },
      },
    },
    {
      '@type': 'City',
      name: 'Janakpur',
    },
    {
      '@type': 'City',
      name: 'Birgunj',
    },
  ],
  medicalSpecialty: [
    {
      '@type': 'MedicalSpecialty',
      name: 'Dentistry',
    },
    {
      '@type': 'MedicalSpecialty',
      name: 'Endodontics',
    },
  ],
  knowsAbout: [
    'Root Canal Treatment',
    'Dental Implants',
    'Teeth Whitening',
    'Cosmetic Dentistry',
    'Preventive Dentistry',
    'Oral Hygiene',
    'Dental Crowns',
    'Tooth Pain',
  ],
  priceRange: 'NPR',
  image: 'https://usmiledentalclinic.com/doctor-profile.png',
  sameAs: [
    'https://facebook.com/usmiledentalclinic',
    'https://instagram.com/usmiledentalclinic',
    'https://youtube.com/@usmiledentalclinic',
  ],
};

// Doctor Person Schema
export const doctorPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Rinku Sah',
  alternateName: 'Dr Rinku Sah',
  description: 'Root canal specialist and experienced dentist at U Smile Dental Clinic in Lalbandi, Sarlahi',
  image: 'https://usmiledentalclinic.com/doctor-profile.png',
  url: 'https://usmiledentalclinic.com',
  sameAs: [
    'https://facebook.com/usmiledentalclinic',
    'https://instagram.com/usmiledentalclinic',
    'https://youtube.com/@usmiledentalclinic',
  ],
  jobTitle: 'Dentist, Root Canal Specialist',
  worksFor: {
    '@type': 'Organization',
    name: 'U Smile Dental Clinic',
  },
  award: [
    'NMC Registered Dentist No: 14722',
    'Experienced Root Canal Specialist',
  ],
};

// JSON-LD Schema Markup
export const doctorSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'U Smile Dental Clinic',
  description: 'Dental clinic in Lalbandi-6, Sarlahi offering root canal therapy, implants, teeth whitening, and preventive dental care.',
  url: 'https://usmiledentalclinic.com',
  telephone: '+977-9765199777',
  email: 'info@usmiledentalclinic.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lalbandi-6',
    addressLocality: 'Sarlahi',
    addressRegion: 'Province No. 2',
    postalCode: '',
    addressCountry: 'NP',
  },
  medicalSpecialty: ['Dentistry', 'Endodontics'],
  priceRange: 'NPR',
  areaServed: ['Sarlahi', 'Janakpur', 'Birgunj'],
  knowsAbout: [
    'Root Canal Treatment',
    'Dental Implants',
    'Cosmetic Dentistry',
    'Teeth Whitening',
    'Preventive Dentistry',
  ],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'U Smile Dental Clinic',
  url: 'https://usmiledentalclinic.com',
  logo: 'https://usmiledentalclinic.com/logo.png',
  description: 'Dental clinic specializing in root canal care, cosmetic dentistry, and patient-first services in Lalbandi, Sarlahi.',
  sameAs: [
    'https://facebook.com/usmiledentalclinic',
    'https://instagram.com/usmiledentalclinic',
    'https://youtube.com/@usmiledentalclinic',
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a root canal treatment and when is it needed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A root canal treats infected or damaged tooth pulp. It saves the tooth, reduces pain, and prevents further infection by cleaning and sealing the nerve chamber.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I book an appointment at U Smile Dental Clinic?',
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
  name: 'Root Canal Treatment',
  description: 'A dental procedure that removes infected tooth pulp, cleans the root canal, and seals the tooth to preserve oral health.',
  performer: {
    '@type': 'Person',
    name: 'Dr. Rinku Sah',
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
      name: 'U Smile Dental Clinic',
    },
    areaServed: {
      '@type': 'City',
      name: 'Sarlahi',
    },
    ...(service.price && { priceRange: service.price }),
  };
};

// Appointment Booking Schema
export const appointmentSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'U Smile Dental Clinic Appointment Booking',
  url: 'https://usmiledentalclinic.com/appointment',
  telephone: '+977-9765199777',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Appointment Booking',
    telephone: '+977-9765199777',
    availableLanguage: ['en', 'ne'],
  },
};

// Reviews and Ratings Schema (can be updated with actual reviews)
export const generateReviewSchema = (reviews: Array<{ author: string; rating: number; comment: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'U Smile Dental Clinic',
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
