# Complete Firebase Setup Guide for Dr. Shekhar Poudel Medical Website

## 📋 Table of Contents
1. [Firebase Project Setup](#firebase-setup)
2. [Authentication Configuration](#authentication)
3. [Firestore Database](#firestore)
4. [Hosting Configuration](#hosting)
5. [Environment Variables](#environment)
6. [Deployment](#deployment)

---

## 🔥 Firebase Setup

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a new project"
3. Enter project name: `dr-shekhar-poudel`
4. Select region: `asia-northeast1` (Tokyo) or nearest to Nepal
5. Click "Create project"

### Step 2: Get Firebase Credentials

1. In your Firebase project, go to **Project Settings** (gear icon)
2. Click "Service accounts" tab
3. Click "Generate new private key"
4. Copy the credentials (keep safe!)
5. Go back to "General" tab

Your config will look like:
```json
{
  "apiKey": "AIzaSy...",
  "authDomain": "dr-shekhar-poudel.firebaseapp.com",
  "projectId": "dr-shekhar-poudel",
  "storageBucket": "dr-shekhar-poudel.appspot.com",
  "messagingSenderId": "123456789",
  "appId": "1:123456789:web:abc123..."
}
```

---

## 🔐 Authentication Configuration

### Enable Email/Password Authentication

1. In Firebase Console, go to **Authentication**
2. Click "Get started"
3. Click "Email/Password" provider
4. Enable it
5. Save

### Enable Google Sign-In (Optional)

1. In Authentication → Sign-in method
2. Click "Google"
3. Enable it
4. Add email and project name
5. Save

### Add Authorized Domains

1. Go to **Authentication** → **Settings**
2. Scroll to "Authorized domains"
3. Add:
   - `localhost:3000` (development)
   - `drsekharpoudel.com.np` (production)
   - `[your-firebase-project].web.app` (Firebase hosting domain)

---

## 🗄️ Firestore Database Setup

### Step 1: Create Database

1. Go to **Firestore Database**
2. Click "Create database"
3. Choose location closest to Nepal (asia-northeast1)
4. Start in **Test mode** (for development)
5. Click "Create"

### Step 2: Create Collections & Schema

```
Project: dr-shekhar-poudel
├── appointments (Collection)
│   └── Document:
│       ├── patientName: string
│       ├── email: string
│       ├── phone: string
│       ├── appointmentDate: timestamp
│       ├── appointmentTime: string
│       ├── reason: string
│       ├── message: string
│       ├── status: string (pending, confirmed, completed, cancelled)
│       ├── createdAt: timestamp
│       └── userId: string

├── messages (Collection)
│   └── Document:
│       ├── name: string
│       ├── email: string
│       ├── phone: string
│       ├── message: string
│       ├── subject: string
│       ├── createdAt: timestamp
│       ├── read: boolean
│       └── replied: boolean

├── testimonials (Collection)
│   └── Document:
│       ├── name: string
│       ├── text: string
│       ├── rating: number
│       ├── image: string
│       ├── verified: boolean
│       └── createdAt: timestamp

└── settings (Collection)
    ├── contact (Document)
    │   ├── email: string
    │   ├── phone: string
    │   ├── mobile: string
    │   ├── officeHours: string
    │   └── address: string
    └── seo (Document)
        ├── description: string
        └── keywords: array
```

### Step 3: Set Security Rules (Production)

Go to **Firestore** → **Rules** and update:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Public read for testimonials and messages (after verification)
    match /testimonials/{document=**} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth.uid == resource.data.authorId;
    }
    
    // Anyone can create appointments
    match /appointments/{document=**} {
      allow create: if request.auth != null || (request.resource.data.email != null && request.resource.data.phone != null);
      allow read: if request.auth != null && request.auth.uid == resource.data.userId;
    }
    
    // Public read settings
    match /settings/{document=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.admin == true;
    }
    
    // Messages - create allowed, read only for authenticated
    match /messages/{document=**} {
      allow create: if true;
      allow read, update: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

---

## 🌐 Hosting Configuration

### Step 1: Initialize Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting
```

When prompted:
- Select your project
- Public directory: `out` (for static export)
- Single-page app: `No` (static site)
- GitHub actions: `Yes` (optional, for auto-deploy)

### Step 2: Configure firebase.json

Create/update `firebase.json`:

```json
{
  "hosting": {
    "site": "dr-shekhar-poudel",
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "headers": [
      {
        "source": "**/*.html",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=3600"
          }
        ]
      },
      {
        "source": "**/*.{js,css}",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**/*.{png,jpg,jpeg,gif,svg,webp}",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=604800"
          }
        ]
      }
    ],
    "redirects": [
      {
        "source": "/sitemap.xml",
        "destination": "/sitemap.xml"
      }
    ]
  }
}
```

---

## 🔑 Environment Variables Setup

### Step 1: Create .env.local

Create `.env.local` in project root:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=dr-shekhar-poudel.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=dr-shekhar-poudel
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=dr-shekhar-poudel.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123...

# Site Configuration
NEXT_PUBLIC_DOMAIN=drsekharpoudel.com.np
NEXT_PUBLIC_SITE_NAME=Dr. Shekhar Poudel

# Optional: Email notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@drsekharpoudel.com.np

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Step 2: Add to Firebase Console

In Firebase Console → **Settings** → **Environment variables**:
- Add all public keys (NEXT_PUBLIC_*)
- Keep secrets safe

---

## 🚀 Deployment Steps

### Step 1: Local Build & Test

```bash
# Install dependencies
pnpm install

# Build for static export
EXPORT_STATIC=true pnpm build

# Test locally (if needed)
npx http-server out
```

### Step 2: Deploy to Firebase Hosting

```bash
# Build the project
EXPORT_STATIC=true pnpm build

# Deploy
firebase deploy --only hosting

# View logs
firebase hosting:list
```

### Step 3: Connect Custom Domain

1. In Firebase Console → **Hosting**
2. Click "Add custom domain"
3. Enter `drsekharpoudel.com.np`
4. Verify domain ownership (copy TXT record)
5. Add DNS records provided by Firebase:

**Example DNS Records** (may vary):

| Type | Name | Value |
|------|------|-------|
| A | @ | 199.36.158.100 |
| AAAA | @ | 2607:f8b0:4004:809::200e |
| TXT | @ | firebase-admissiontoken=abc123... |

Add these in your domain registrar's DNS panel.

4. Click "Continue" in Firebase console
5. Wait for SSL certificate (usually 5-30 minutes)
6. Domain is live!

---

## 📊 Firestore Data Models

### Appointments Collection

```typescript
interface Appointment {
  id: string;
  patientName: string;
  email: string;
  phone: string;
  appointmentDate: Timestamp;
  appointmentTime: string; // "09:00", "14:30"
  reason: string; // "general-checkup", "follow-up", etc.
  message: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  userId?: string; // if authenticated
  notes?: string;
}
```

### Messages Collection

```typescript
interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: Timestamp;
  read: boolean;
  replied: boolean;
  replyMessage?: string;
}
```

---

## 🔄 GitHub Actions Auto-Deploy (Optional)

Create `.github/workflows/firebase-deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build project
        env:
          EXPORT_STATIC: 'true'
        run: pnpm build
      
      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: 'dr-shekhar-poudel'
```

Add GitHub Secrets:
- `FIREBASE_SERVICE_ACCOUNT`: Service account JSON
- `GITHUB_TOKEN`: Auto-generated

---

## 📧 Email Notifications Setup (Optional)

### Using Gmail SMTP

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Create "App Password" for Gmail
4. Copy password and add to `.env.local`:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Create API Route for Emails

Create `app/api/send-email/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { to, subject, html } = await request.json();

    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

---

## ✅ Deployment Checklist

- [ ] Firebase project created
- [ ] Authentication configured
- [ ] Firestore database set up
- [ ] Environment variables added
- [ ] `.env.local` file created
- [ ] `firebase.json` configured
- [ ] Build successful: `EXPORT_STATIC=true pnpm build`
- [ ] Firebase CLI installed
- [ ] Deployed: `firebase deploy --only hosting`
- [ ] Custom domain connected
- [ ] DNS records verified
- [ ] SSL working (green lock)
- [ ] Performance tested
- [ ] Email notifications working
- [ ] Analytics implemented
- [ ] Backup strategy in place

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next out dist
pnpm install
EXPORT_STATIC=true pnpm build
```

### Firebase Deployment Fails
```bash
# Verify login
firebase login --reauth

# Check config
firebase projects:list

# Test deployment
firebase deploy --only hosting --debug
```

### Domain Not Resolving
1. Verify DNS records are added
2. Wait up to 1 hour for propagation
3. Check with: `nslookup drsekharpoudel.com.np`
4. Verify in Firebase console → Hosting → Custom domain

### Slow Performance
1. Enable compression in `firebase.json`
2. Optimize images: use WebP format
3. Enable caching headers
4. Run Lighthouse audit
5. Check Firestore indexes

---

## 📞 Support

- Firebase Support: https://firebase.google.com/support
- Next.js Docs: https://nextjs.org/docs
- Domain Registrar Support
- This document

---

**Last Updated**: January 2024
**Next Review**: Q2 2024
**Deployment Status**: Ready for Production
