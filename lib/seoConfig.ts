// SEO configuration for different pages and GEO targeting
export const pageMetadata = {
  home: {
    title: 'U Smile Dental Clinic | Root Canal Specialist in Lalbandi',
    description: 'U Smile Dental Clinic delivers expert root canal, implant, and cosmetic dental care in Lalbandi-6, Sarlahi with compassionate treatment by Dr. Rinku Sah.',
    keywords: [
      'dental clinic sarlahi',
      'root canal specialist',
      'dentist lalbandi',
      'cosmetic dentistry',
      'dental implants',
      'teeth whitening',
      'U Smile Dental Clinic',
    ],
  },
  about: {
    title: 'About U Smile Dental Clinic - Lalbandi Dental Care',
    description: 'Learn about U Smile Dental Clinic and Dr. Rinku Sah, a root canal specialist providing modern dental care for families in Sarlahi.',
    keywords: [
      'U Smile Dental Clinic',
      'root canal specialist',
      'dentist in sarlahi',
      'dental clinic',
      'dr rinku sah',
      'dental experience',
    ],
  },
  services: {
    title: 'Dental Services | Root Canal, Implants & Teeth Whitening',
    description: 'Comprehensive dental services at U Smile Dental Clinic including root canals, implants, crowns, teeth whitening, and preventive care.',
    keywords: [
      'dental services',
      'root canal treatment',
      'dental implants',
      'teeth whitening',
      'dental crowns',
      'preventive dentistry',
      'cosmetic dentistry',
    ],
  },
  teleconsultation: {
    title: 'Teleconsultation | Online Dental Consultation at U Smile Dental Clinic',
    description: 'Book a dental teleconsultation with U Smile Dental Clinic for expert advice on root canal care, tooth pain, and oral health.',
    keywords: [
      'dental teleconsultation',
      'online dentist consultation',
      'root canal advice',
      'oral health consultation',
    ],
  },
  blog: {
    title: 'Dental Blog | Oral Health Tips from U Smile Dental Clinic',
    description: 'Read oral health guides, dental care tips, and patient education articles from U Smile Dental Clinic.',
    keywords: [
      'dental blog',
      'oral health tips',
      'dental care',
      'tooth pain relief',
      'root canal care',
    ],
  },
  contact: {
    title: 'Contact U Smile Dental Clinic | Lalbandi-6, Sarlahi',
    description: 'Contact U Smile Dental Clinic in Lalbandi-6, Sarlahi for appointments, dental emergencies, and patient inquiries.',
    keywords: [
      'contact dental clinic',
      'dental clinic address',
      'phone',
      'email',
      'book appointment',
    ],
  },
  appointment: {
    title: 'Book Appointment | U Smile Dental Clinic',
    description: 'Schedule your dental appointment with U Smile Dental Clinic for root canal care, cosmetic dentistry, or routine checkups.',
    keywords: [
      'book dental appointment',
      'dental appointment',
      'schedule dentist',
    ],
  },
  gallery: {
    title: 'Gallery | U Smile Dental Clinic',
    description: 'View our clinic facilities and patient smile transformations at U Smile Dental Clinic.',
    keywords: ['dental gallery', 'clinic photos', 'smile transformations'],
  },
  testimonials: {
    title: 'Patient Testimonials | U Smile Dental Clinic',
    description: 'Read patient stories and reviews from people who trusted U Smile Dental Clinic for dental care and root canal treatment.',
    keywords: ['dental testimonials', 'patient reviews', 'dental success stories'],
  },
  vlogs: {
    title: 'Dental Vlogs | Oral Health Videos from U Smile Dental Clinic',
    description: 'Watch dental wellness videos and oral care guides from U Smile Dental Clinic.',
    keywords: [
      'dental videos',
      'oral health vlog',
      'tooth care tips',
      'dental education',
    ],
  },
};

// GEO targeting and localization
export const geoConfig = {
  defaultLocation: {
    country: 'NP',
    countryName: 'Nepal',
    region: 'Province No. 2',
    city: 'Sarlahi',
    latitude: 26.9150,
    longitude: 85.5330,
  },
  serviceLocations: [
    {
      name: 'Sarlahi',
      latitude: 26.9150,
      longitude: 85.5330,
      region: 'Province No. 2',
    },
    {
      name: 'Janakpur',
      latitude: 26.7167,
      longitude: 85.9167,
      region: 'Province No. 2',
    },
    {
      name: 'Birgunj',
      latitude: 27.0000,
      longitude: 84.8667,
      region: 'Province No. 2',
    },
  ],
  languages: ['en', 'ne'],
  currency: 'NPR',
};

// Structured data for social proof (AEO)
export const socialProof = {
  certifications: [
    {
      name: 'BDS',
      issuer: 'Nepal Medical Council',
      year: 2018,
      credentialUrl: 'https://www.nmc.org.np/',
    },
    {
      name: 'NMC Registered Dentist',
      issuer: 'Nepal Medical Council',
      year: 2020,
      credentialUrl: 'https://www.nmc.org.np/',
    },
    {
      name: 'Advanced Endodontics Training',
      issuer: 'Dental Academy',
      year: 2022,
      credentialUrl: 'https://www.dentalacademy.com/',
    },
  ],
  specializations: [
    'Endodontics',
    'Cosmetic Dentistry',
    'Dental Implants',
    'Preventive Dentistry',
  ],
  publications: [
    'Patient education guides',
    'Oral health awareness content',
    'Clinical dental care insights',
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
      'What causes tooth pain?',
      'How do I know if I need a root canal?',
      'Best teeth whitening options',
      'How to prevent cavities',
    ],
  },
  relatedQuestions: [
    {
      question: 'What is a root canal?',
      answer: 'A root canal is a procedure that removes infected tissue from inside a tooth to relieve pain and save the natural tooth.',
    },
    {
      question: 'How often should I visit the dentist?',
      answer: 'Most patients should visit the dentist every six months for a checkup and cleaning, or sooner if they have pain or a dental issue.',
    },
    {
      question: 'What are the benefits of dental implants?',
      answer: 'Dental implants restore missing teeth, preserve jawbone structure, and improve chewing and smile appearance.',
    },
  ],
};

// Sitemap configuration
export const sitemapConfig = {
  baseUrl: 'https://usmiledentalclinic.com',
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
