# Dr. Shekhar Poudel Medical Website

Professional medical website for Dr. Shekhar Poudel, Gastroenterologist & Transplant Hepatologist in Kathmandu, Nepal.

## 🚀 Features

- ✅ Responsive design (mobile-first)
- ✅ 25 SEO-optimized blog posts
- ✅ Dynamic blog pages with MDX content
- ✅ Light/Dark mode toggle
- ✅ Firebase Authentication
- ✅ Contact form
- ✅ Appointment booking
- ✅ Testimonials section
- ✅ Service catalog
- ✅ Doctor profile
- ✅ FAQ section
- ✅ JSON-LD schema markup
- ✅ Open Graph + Twitter cards
- ✅ Sitemap & Robots.txt

## 📋 Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Backend/Auth**: Firebase (Firestore, Authentication)
- **Hosting**: Firebase Hosting
- **Icons**: Lucide React, React Icons
- **Email**: (Optional) EmailJS or Firebase Functions

## 📁 Project Structure

```
drshekhar/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── blog/
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/        # Dynamic blog posts
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/             # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── AboutSection.tsx
│   └── TestimonialsSection.tsx
├── data/                  # Static data
│   ├── doctor.ts         # Doctor profile
│   ├── services.ts       # Services list
│   └── blog.ts           # 25 blog posts
├── lib/                  # Utilities & helpers
│   ├── firebase.ts       # Firebase config
│   └── seo.ts            # SEO utilities & schemas
├── public/              # Static files
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

## 🛠️ Installation

1. **Clone/Setup**:
```bash
cd drshekhar
pnpm install
```

2. **Create Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project
   - Enable Authentication (Email/Password, Google)
   - Create Firestore database
   - Enable Hosting

3. **Configure Environment Variables**:
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_DOMAIN=drsekharpoudel.com.np
```

## 🚀 Development

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit: `http://localhost:3000`

## 📱 Build for Static Export (Firebase Hosting)

```bash
# Build as static site
EXPORT_STATIC=true pnpm build

# This generates 'out/' directory with static files
```

## 🌐 Domain Setup

1. **Register Domain**: `drsekharpoudel.com.np`
   - Use services like:
     - [Vercel Domains](https://vercel.com/domains)
     - [Google Domains](https://domains.google)
     - Local domain registrars in Nepal

2. **Point DNS to Firebase Hosting**:
   - In Firebase Console:
     - Go to Hosting → Custom Domain
     - Add `drsekharpoudel.com.np`
     - Firebase provides DNS records
     - Add DNS records to registrar

3. **SSL Certificate**: 
   - Firebase automatically provides free SSL

## 🔥 Firebase Setup Steps

### 1. Authentication

```typescript
// Users can authenticate via:
// - Email/Password
// - Google Sign-In
// - Phone (optional)
```

### 2. Firestore (for appointments/messages)

Create collections:
```
/appointments
  - docId: auto
  - doctorName: string
  - patientName: string
  - email: string
  - phone: string
  - date: timestamp
  - time: string
  - message: string
  - status: string (pending, confirmed, completed)

/messages
  - docId: auto
  - name: string
  - email: string
  - phone: string
  - message: string
  - createdAt: timestamp
  - read: boolean
```

### 3. Security Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read for blog
    match /blog/{document=**} {
      allow read: if true;
    }
    
    // Allow authenticated write for appointments
    match /appointments/{document=**} {
      allow create: if request.auth != null;
      allow read, update: if request.auth != null && resource.data.userId == request.auth.uid;
    }
    
    // Allow anyone to create messages
    match /messages/{document=**} {
      allow create: if true;
      allow read: if request.auth != null;
    }
  }
}
```

## 📡 API Integration

### Contact Form Handler (Next.js API Route)

Create `app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();
    
    await addDoc(collection(db, 'messages'), {
      name,
      email,
      phone,
      message,
      createdAt: serverTimestamp(),
      read: false,
    });
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change primary color from green to another:

```typescript
colors: {
  primary: '#10b981', // Change to your color
}
```

### Doctor Profile
Edit `data/doctor.ts` to update:
- Doctor name, title, qualifications
- Experience details
- Achievements
- Contact information

### Blog Posts
Edit `data/blog.ts` to:
- Add/remove posts
- Update content
- Customize categories
- Change keywords

## 📊 SEO Optimization

### Included

- ✅ Meta titles & descriptions
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ JSON-LD structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Schema markup (Doctor, Organization, BlogPosting, FAQ)
- ✅ Mobile-friendly responsive design
- ✅ Fast loading (image optimization)
- ✅ Proper heading hierarchy
- ✅ Clean semantic HTML

### Target Keywords

- Best Gastroenterologist in Kathmandu
- Gastritis doctor in Nepal
- Gastro doctor Kathmandu
- Liver specialist Nepal
- Endoscopy in Kathmandu
- ERCP procedure Nepal
- Hepatologist Kathmandu

## 🚀 Deployment to Firebase Hosting

### Prerequisites

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login
```

### Deploy Steps

1. **Build the project**:
```bash
pnpm build
```

2. **Initialize Firebase** (if not done):
```bash
firebase init hosting
# Select your project
# Source directory: out
```

3. **Deploy**:
```bash
firebase deploy --only hosting
```

4. **View logs**:
```bash
firebase hosting:log
```

### Auto-deploy with GitHub (Optional)

1. Connect GitHub repo to Firebase
2. Set branch to deploy (e.g., `main`)
3. Every push auto-deploys

## 📧 Email Notifications

### Option 1: Firebase Emailing (Cloud Functions)

```typescript
// functions/src/index.ts
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendAppointmentConfirmation = functions.firestore
  .document("appointments/{docId}")
  .onCreate(async (snap, context) => {
    const appointment = snap.data();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: appointment.email,
      subject: `Appointment Confirmation - Dr. Shekhar Poudel`,
      html: `<h1>Your appointment is confirmed</h1>...`,
    };
    
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Email error:", error);
    }
  });
```

### Option 2: EmailJS (Client-side)

```bash
pnpm install @emailjs/browser
```

```typescript
import emailjs from '@emailjs/browser';

emailjs.init("YOUR_PUBLIC_KEY");

const sendEmail = async (formData) => {
  await emailjs.send("service_id", "template_id", formData);
};
```

## 📱 Mobile Optimization

- ✅ Responsive Tailwind design
- ✅ Touch-friendly buttons
- ✅ Fast loading on 3G
- ✅ Optimized images
- ✅ Minimal JavaScript

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Color contrast (WCAG AA)
- ✅ Keyboard navigation
- ✅ Alt text for images

## 🔒 Security

- ✅ HTTPS only (Firebase)
- ✅ Firebase Authentication
- ✅ Firestore Security Rules
- ✅ No sensitive data in frontend
- ✅ Environment variables for secrets

## 📈 Analytics (Optional)

Add Google Analytics to `app/layout.tsx`:

```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script dangerouslySetInnerHTML={{...}} />
```

## 🛡️ Performance Targets

- Lighthouse Score: 90+
- First Contentful Paint: <2s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Time to Interactive: <3.5s

## 📞 Support Contacts

- Phone: +977-01-5451000
- Mobile: +977-9765199777
- WhatsApp: +977-9765199777
- Location: Lagankhel, Lalitpur, Kathmandu

## 📝 License

Private use for Dr. Shekhar Poudel's Medical Practice

## 🔄 Updates & Maintenance

### Regular Tasks

- Update blog posts monthly
- Monitor Firebase analytics
- Check SEO rankings
- Update testimonials
- Backup Firestore data
- Monitor 404 errors

### Annual Tasks

- Update credentials/certifications
- Review and update SEO strategy
- Update privacy policy
- Security audit
- Performance optimization

## 🤝 Contributing

For updates or fixes, contact the development team.

---

**Last Updated**: January 2024
**Next Review**: Q2 2024
