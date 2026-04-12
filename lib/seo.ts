export interface MetaTags {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const generateMetaTags = (meta: MetaTags) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'drsekharpoudel.com.np';
  const baseUrl = `https://${domain}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords?.join(', '),
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: meta.ogType || 'website',
      url: meta.canonicalUrl || baseUrl,
      images: [
        {
          url: meta.ogImage || `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      siteName: 'Dr. Shekhar Poudel',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage || `${baseUrl}/og-image.jpg`],
    },
  };
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
