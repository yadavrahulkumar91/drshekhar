// SEO configuration for different pages and GEO targeting
export const pageMetadata = {
  home: {
    title: 'Dr. Shekhar Poudel | Gastroenterologist & Hepatologist in Nepal',
    description: 'Leading gastroenterologist and transplant hepatologist in Kathmandu, Nepal. First DM from AIIMS, LTSI-certified. Expert in endoscopy, ERCP, and liver care.',
    keywords: [
      'gastroenterologist nepal',
      'hepatologist nepal',
      'liver specialist kathmandu',
      'endoscopy nepal',
      'gastritis treatment',
      'liver transplant',
      'GERD treatment',
      'IBS treatment',
      'Dr Shekhar Poudel',
    ],
  },
  about: {
    title: 'About Dr. Shekhar Poudel - Gastroenterologist Nepal',
    description: 'Learn about Dr. Shekhar Poudel, the first Nepali DM holder in Gastroenterology from AIIMS and first LTSI-certified Transplant Hepatologist from Nepal.',
    keywords: [
      'Dr. Shekhar Poudel',
      'gastroenterologist',
      'hepatologist',
      'AIIMS',
      'LTSI certification',
      'medical credentials',
      'experience',
    ],
  },
  services: {
    title: 'Medical Services | Gastroenterology & Hepatology in Kathmandu',
    description: 'Comprehensive gastroenterology and hepatology services including endoscopy, ERCP, liver disease management, and teleconsultation.',
    keywords: [
      'gastroenterology services',
      'hepatology services',
      'endoscopy',
      'ERCP',
      'liver treatment',
      'gastritis',
      'GERD',
      'IBS',
      'teleconsultation',
    ],
  },
  teleconsultation: {
    title: 'Teleconsultation | Online Consultation with Dr. Shekhar Poudel',
    description: 'Get online medical consultation from Dr. Shekhar Poudel for gastroenterology and hepatology issues. Safe, convenient, and confidential.',
    keywords: [
      'telemedicine',
      'online consultation',
      'video call consultation',
      'remote healthcare',
      'gastroenterology consultation',
    ],
  },
  blog: {
    title: 'Medical Blog | Health Articles by Dr. Shekhar Poudel',
    description: 'Read informative articles about gastroenterology, hepatology, and digestive health by Dr. Shekhar Poudel.',
    keywords: [
      'health blog',
      'medical articles',
      'gastroenterology',
      'hepatology',
      'digestive health',
    ],
  },
  contact: {
    title: 'Contact Us | Dr. Shekhar Poudel Clinic in Kathmandu',
    description: 'Contact information and location for Dr. Shekhar Poudel\'s clinic. Located in Lagankhel, Lalitpur, Kathmandu.',
    keywords: [
      'contact',
      'clinic location',
      'phone',
      'email',
      'appointment booking',
    ],
  },
  appointment: {
    title: 'Book Appointment | Dr. Shekhar Poudel',
    description: 'Book your appointment with Dr. Shekhar Poudel. Available for in-clinic and teleconsultation appointments.',
    keywords: [
      'book appointment',
      'appointment booking',
      'schedule consultation',
    ],
  },
  gallery: {
    title: 'Gallery | Dr. Shekhar Poudel Clinic',
    description: 'View our clinic facilities and medical equipment.',
    keywords: ['clinic gallery', 'medical facilities', 'clinic photos'],
  },
  testimonials: {
    title: 'Patient Testimonials | Dr. Shekhar Poudel',
    description: 'Read testimonials and success stories from our satisfied patients.',
    keywords: ['patient reviews', 'testimonials', 'patient success stories'],
  },
  vlogs: {
    title: 'Medical Vlogs | Dr. Shekhar Poudel on TikTok & Facebook',
    description: 'Watch educational videos and vlogs by Dr. Shekhar Poudel about gastroenterology and liver health.',
    keywords: [
      'medical videos',
      'health education',
      'vlog',
      'TikTok',
      'Facebook',
    ],
  },
};

// GEO targeting and localization
export const geoConfig = {
  defaultLocation: {
    country: 'NP',
    countryName: 'Nepal',
    region: 'Bagmati',
    city: 'Kathmandu',
    latitude: 27.7172,
    longitude: 85.3240,
  },
  serviceLocations: [
    {
      name: 'Kathmandu',
      latitude: 27.7172,
      longitude: 85.324,
      region: 'Bagmati',
    },
    {
      name: 'Lalitpur',
      latitude: 27.6447,
      longitude: 85.3119,
      region: 'Bagmati',
    },
    {
      name: 'Bhaktapur',
      latitude: 27.6735,
      longitude: 85.4386,
      region: 'Bagmati',
    },
  ],
  languages: ['en', 'ne'],
  currency: 'NPR',
};

// Structured data for social proof (AEO)
export const socialProof = {
  certifications: [
    {
      name: 'DM Gastroenterology',
      issuer: 'AIIMS New Delhi',
      year: 2015,
      credentialUrl: 'https://aiims.edu/',
    },
    {
      name: 'LTSI Certification',
      issuer: 'Liver Transplant Society of India',
      year: 2017,
      credentialUrl: 'https://ltsi.org/',
    },
    {
      name: 'MD Internal Medicine',
      issuer: 'PIMER Delhi',
      year: 2013,
      credentialUrl: 'https://pimer.ac.in/',
    },
  ],
  specializations: [
    'Gastroenterology',
    'Hepatology',
    'Transplant Hepatology',
    'Advanced Endoscopy',
  ],
  publications: [
    'Published in peer-reviewed medical journals',
    'Speaker at international conferences',
    'Clinical research contributor',
  ],
};

// Performance and technical SEO
export const performanceConfig = {
  imageOptimization: {
    formats: ['webp', 'jpg'],
    sizes: {
      thumbnail: { width: 150, height: 150 },
      small: { width: 300, height: 300 },
      medium: { width: 600, height: 400 },
      large: { width: 1200, height: 800 },
      xlarge: { width: 1920, height: 1280 },
    },
  },
  caching: {
    staticPages: 86400, // 1 day
    dynamicContent: 3600, // 1 hour
    api: 1800, // 30 minutes
  },
  compression: {
    enabled: true,
    brotli: true,
    gzip: true,
  },
};

// AEO - Answer Engine Optimization configuration
export const aeoConfig = {
  featuredSnippets: {
    enabled: true,
    format: 'paragraph', // paragraph, list, table
  },
  knowledgePanel: {
    enabled: true,
    updateFrequency: 'weekly',
  },
  voiceSearch: {
    enabled: true,
    conversationalKeywords: [
      'What is gastritis',
      'How to treat GERD',
      'Symptoms of IBS',
      'When to see a gastroenterologist',
    ],
  },
  relatedQuestions: [
    {
      question: 'What is gastritis?',
      answer: 'Gastritis is inflammation of the stomach lining that can cause discomfort and pain.',
    },
    {
      question: 'How is GERD treated?',
      answer: 'GERD can be managed through lifestyle changes, medications, and in some cases, surgical intervention.',
    },
    {
      question: 'What are the symptoms of IBS?',
      answer: 'IBS symptoms include abdominal pain, bloating, diarrhea, and constipation.',
    },
  ],
};

// Sitemap configuration
export const sitemapConfig = {
  baseUrl: 'https://drsekharpoudel.com.np',
  sitemaps: {
    main: '/sitemap.xml',
    blog: '/sitemap-blog.xml',
    services: '/sitemap-services.xml',
  },
  updateFrequency: {
    homepage: 'weekly',
    services: 'monthly',
    blog: 'weekly',
    pages: 'monthly',
  },
  priority: {
    homepage: 1.0,
    services: 0.8,
    blog: 0.8,
    pages: 0.7,
  },
};

// JSON-LD context URLs
export const jsonLdContext = {
  schema: 'https://schema.org',
  medical: 'https://schema.org/MedicalBusiness',
  local: 'https://schema.org/LocalBusiness',
  person: 'https://schema.org/Person',
  organization: 'https://schema.org/Organization',
};
