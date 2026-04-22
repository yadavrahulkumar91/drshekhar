// SEO Meta Tags Helper Component
// Use this component to standardize meta tags across all pages

import { pageMetadata } from '@/lib/seoConfig';

export type PageType = keyof typeof pageMetadata;

interface MetaTagsHelperProps {
  page: PageType;
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string[];
  canonicalUrl?: string;
}

export function getPageMetadata(props: MetaTagsHelperProps) {
  const baseMetadata = pageMetadata[props.page];

  return {
    title: props.customTitle || baseMetadata.title,
    description: props.customDescription || baseMetadata.description,
    keywords: props.customKeywords || baseMetadata.keywords,
    openGraph: {
      title: props.customTitle || baseMetadata.title,
      description: props.customDescription || baseMetadata.description,
      type: 'website' as const,
      url: props.canonicalUrl,
      locale: 'en_NP',
      siteName: 'Dr. Shekhar Poudel',
      images: [
        {
          url: 'https://drsekharpoudel.com.np/og-image.jpg',
          width: 1200,
          height: 630,
          alt: props.customTitle || baseMetadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: props.customTitle || baseMetadata.title,
      description: props.customDescription || baseMetadata.description,
      images: ['https://drsekharpoudel.com.np/og-image.jpg'],
    },
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    viewport: 'width=device-width, initial-scale=1.0',
    alternates: {
      canonical: props.canonicalUrl || 'https://drsekharpoudel.com.np',
    },
  };
}

// Usage example in a page:
/*
import { getPageMetadata } from '@/components/MetaTagsHelper';

export const metadata = getPageMetadata({
  page: 'services',
  canonicalUrl: 'https://drsekharpoudel.com.np/services',
});
*/
