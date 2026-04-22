# SEO, GEO & AEO Implementation Guide

## Overview
This document outlines all SEO (Search Engine Optimization), GEO (Geographic Optimization), and AEO (Answer Engine Optimization) implementations for Dr. Shekhar Poudel's website.

---

## 1. SEO Implementation

### 1.1 Technical SEO

#### Robots.txt
- **Location**: `/public/robots.txt`
- **Features**:
  - Allows all crawlers to index main content
  - Blocks admin, private, and internal API endpoints
  - Specifies crawl delays for search engines
  - Special rules for Google (Googlebot), Bing, and blocks for bad bots
  - Points to all sitemap files

#### Sitemaps
- **Main Sitemap** (`/public/sitemap.xml`): Contains all main pages
  - Homepage (Priority: 1.0)
  - About page (Priority: 0.9)
  - Services and service details (Priority: 0.8-0.9)
  - Blog (Priority: 0.8)
  - Contact, Appointment, Gallery, Testimonials, Vlogs (Priority: 0.7-0.8)

- **Blog Sitemap** (`/public/sitemap-blog.xml`): All blog posts
- **Services Sitemap** (`/public/sitemap-services.xml`): All medical services

- **Sitemap Index** (`/public/sitemap-index.xml`): Master index for all sitemaps

#### Meta Tags
- Comprehensive meta tags including:
  - Title (60-70 characters)
  - Description (150-160 characters)
  - Keywords
  - Viewport for mobile responsiveness
  - Robots meta directives
  - Canonical URLs

### 1.2 Content SEO

#### Keyword Targeting
- **Primary Keywords**:
  - gastroenterologist nepal
  - hepatologist nepal
  - liver specialist kathmandu
  - endoscopy nepal
  - GERD/IBS/Gastritis treatment

- **Long-tail Keywords**:
  - "How to treat gastritis in Nepal"
  - "Best gastroenterologist in Kathmandu"
  - "Liver transplant specialist Nepal"

#### Content Structure
- H1 tags for main page title
- H2/H3 tags for subheadings
- Proper heading hierarchy
- Internal linking to related pages
- Image alt text optimization

---

## 2. GEO Implementation

### 2.1 Geographic Targeting

#### Local Business Schema
- Implemented comprehensive MedicalBusiness schema with:
  - Business name, address, phone, email
  - Geographic coordinates (Latitude: 27.7172, Longitude: 85.324)
  - Service areas: Kathmandu, Lalitpur, Bhaktapur
  - Region: Bagmati, Nepal

#### Location-Based Keywords
- Primary location: Kathmandu, Nepal (27.7172, 85.324)
- Secondary locations: Lalitpur, Bhaktapur
- Local keywords integrated throughout content

#### Multi-Language Support
- Supported languages: English (en), Nepali (ne)
- Metadata configured for local optimization
- Currency: NPR (Nepali Rupee)

### 2.2 GEO-Specific Metadata
- `areaServed` targeting cities in Bagmati region
- Geographic bounding box coordinates
- Local business hours and contact information
- Address in proper schema.org PostalAddress format

---

## 3. AEO Implementation

### 3.1 Answer Engine Optimization

#### Featured Snippet Optimization
- Content structured for paragraph snippets
- Bulleted lists for question-based queries
- Tables for comparison content
- List items formatted for featured snippets

#### Voice Search Optimization
- Conversational keywords implemented
- Natural language processing considerations
- Question-based content structure
- Long-tail conversational phrases

#### Structured Q&A
- FAQ Schema with common medical questions:
  - "What is gastritis and how is it treated?"
  - "How can I book an appointment?"
  - Clinical and procedural questions

### 3.2 Knowledge Panel Optimization
- Organization schema with:
  - Complete business information
  - Social media profiles (Facebook, Instagram, TikTok)
  - Company logo and images
  - Services and specialties
  - Awards and certifications

---

## 4. Schema Markup Implementation

### 4.1 JSON-LD Schemas Implemented

1. **LocalBusinessSchema** - Main business information
2. **DoctorPersonSchema** - Dr. Shekhar Poudel's profile
3. **OrganizationSchema** - Business organization details
4. **FAQSchema** - Common questions and answers
5. **BreadcrumbSchema** - Navigation hierarchy
6. **MedicalProcedureSchema** - Procedures like endoscopy
7. **ServiceSchema** - Medical services offered
8. **AppointmentSchema** - Booking information
9. **ReviewSchema** - Patient testimonials and ratings
10. **VideoSchema** - Educational vlogs
11. **EventSchema** - Medical seminars/camps
12. **ArticleSchema** - Blog posts (MedicalScholarlyArticle)

### 4.2 Schema Files
- **`lib/seo.ts`**: Core schema definitions
- **`lib/structuredData.ts`**: Schema builders and helpers

---

## 5. SEO Configuration Files

### 5.1 seoConfig.ts
Centralized configuration for:
- Page metadata (title, description, keywords)
- Geo-targeting configuration
- Localization settings
- Performance optimization settings
- Sitemap configuration
- AEO settings

### 5.2 structuredData.ts
Helper functions for:
- Breadcrumb generation
- FAQ schema building
- Review/rating aggregation
- Article schema creation
- Service schema generation
- Contact page schema

---

## 6. Page-Specific Optimizations

### 6.1 Homepage
- Priority: 1.0
- Update frequency: Weekly
- Optimized for main keywords
- Features all core services
- Schema: Local Business + Organization

### 6.2 Services Pages
- Individual pages for each service
- Service-specific keywords
- Medical procedure details
- Appointment CTA
- Schema: ServiceSchema + MedicalBusiness

### 6.3 Blog Pages
- Individual blog posts
- Long-form content (1500+ words recommended)
- Internal linking to services
- Author byline (Dr. Shekhar Poudel)
- Schema: MedicalScholarlyArticle

### 6.4 Appointment Page
- Booking form optimization
- Contact information highlighted
- Multiple contact methods
- Schema: AppointmentSchema

### 6.5 About Page
- Complete biography
- Credentials and certifications
- Awards and achievements
- Professional journey
- Schema: PersonSchema + Credentials

---

## 7. Performance & Technical SEO

### 7.1 Image Optimization
- Multiple format support (WebP, JPG)
- Responsive image sizes
- Alt text for all images
- Lazy loading implementation

### 7.2 Caching Strategy
- Static pages: 86,400 seconds (1 day)
- Dynamic content: 3,600 seconds (1 hour)
- API responses: 1,800 seconds (30 minutes)

### 7.3 Compression
- Brotli compression enabled
- Gzip fallback
- Image compression
- CSS/JS minification

---

## 8. Implementation Checklist

### Core SEO
- [x] robots.txt configured
- [x] Sitemaps created (main, blog, services, index)
- [x] Meta tags implementation
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Twitter Card tags

### Schema & Structured Data
- [x] Local Business schema
- [x] Person schema
- [x] Organization schema
- [x] FAQ schema
- [x] Breadcrumb schema
- [x] Service schema
- [x] Article schema
- [x] Video schema
- [x] Event schema
- [x] Review/Rating schema

### GEO Optimization
- [x] Location-based keywords
- [x] Service area targeting
- [x] Geographic coordinates
- [x] Multi-location support
- [x] Language configuration

### AEO Optimization
- [x] Featured snippet optimization
- [x] Voice search keywords
- [x] Q&A structure
- [x] Knowledge panel markup
- [x] Conversational content

---

## 9. Monitoring & Maintenance

### 9.1 Tools to Use
- Google Search Console
- Google Analytics 4
- Google Business Profile
- Bing Webmaster Tools
- Schema.org Validator
- Rich Results Test

### 9.2 Regular Maintenance
- Update sitemaps when adding new pages
- Monitor search console for crawl errors
- Check for broken links
- Update lastmod dates in sitemaps
- Review rankings for target keywords
- Monitor CTR and position changes

### 9.3 Content Updates
- Update blog content regularly
- Refresh service descriptions
- Add new testimonials
- Update business information
- Add new educational content

---

## 10. Integration Instructions

### 10.1 Adding Structured Data to Pages

```typescript
import { generateMetaTags, localBusinessSchema } from '@/lib/seo';
import { injectStructuredData } from '@/lib/structuredData';

// In your page component
export const metadata = generateMetaTags({
  title: 'Page Title',
  description: 'Page description',
  keywords: ['keyword1', 'keyword2'],
});

// In the head
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={injectStructuredData(localBusinessSchema)}
/>
```

### 10.2 Using Breadcrumbs

```typescript
import { generateBreadcrumbs } from '@/lib/structuredData';
import { buildBreadcrumbSchema } from '@/lib/seo';

const breadcrumbs = generateBreadcrumbs(pathname);
```

### 10.3 Building Service Schema

```typescript
import { generateServiceSchema } from '@/lib/seo';

const schema = generateServiceSchema({
  name: 'Gastritis Treatment',
  description: 'Professional treatment for gastritis...',
  price: '$$',
});
```

---

## 11. Recommended Next Steps

1. **Verify with Search Console**
   - Submit sitemap.xml
   - Check indexing status
   - Review mobile usability

2. **Implement Analytics**
   - Setup Google Analytics 4
   - Create conversion goals
   - Monitor user behavior

3. **Local SEO**
   - Claim Google Business Profile
   - Add business information
   - Upload photos and services
   - Respond to reviews

4. **Link Building**
   - Guest posts on medical blogs
   - Local business directories
   - Medical association listings
   - Educational content partnerships

5. **Content Expansion**
   - Increase blog content
   - Create pillar pages
   - Video content for vlogs
   - Infographics

---

## File Structure Summary

```
public/
├── robots.txt ...................... Crawlers configuration
├── sitemap.xml ..................... Main sitemap
├── sitemap-blog.xml ................ Blog sitemap
├── sitemap-services.xml ............ Services sitemap
└── sitemap-index.xml ............... Sitemap index

lib/
├── seo.ts .......................... Core SEO utilities
├── seoConfig.ts .................... Configuration file
└── structuredData.ts ............... Schema builders
```

---

**Last Updated**: April 22, 2026
**Maintained By**: Development Team
**Contact**: contact@drsekharpoudel.com.np
