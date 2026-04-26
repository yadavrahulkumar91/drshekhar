import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { doctorSchema, organizationSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN || 'usmiledental.com.np'}`),
  title: 'U Smile Dental Clinic | Root Canal Specialist in Sarlahi',
  description: 'U Smile Dental Clinic provides root canal treatment, cosmetic dentistry, and complete dental care in Lalbandi-6, Sarlahi.',
  keywords: [
    'dental clinic sarlahi',
    'root canal specialist',
    'cosmetic dentistry',
    'dental implants',
    'teeth whitening',
    'preventive dentistry',
    'dental care nepal',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to critical third-party origins - saves ~310ms per origin */}
        <link
          rel="preconnect"
          href="https://www.tiktok.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://p16-common-sign.tiktokcdn.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://mon.tiktokv.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://p16-sign-sg.tiktokcdn.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for other third-party resources */}
        <link
          rel="dns-prefetch"
          href="https://sf16-website-login.neutral.ttwstatic.com"
        />
        <link rel="dns-prefetch" href="https://v19.tiktokcdn.com" />
        <meta
          name="google-site-verification"
          content="m4nExK0i3MY3tgvf53bDlJp6GzK84769yERca-AHbgg"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            html.dark {
              color-scheme: dark;
              background-color: #111827;
              color: #f3f4f6;
            }
            html.dark body {
              background-color: #111827;
              color: #f3f4f6;
            }
            /* Font-display swap to avoid font loading delays - saves ~10ms */
            @font-face {
              font-display: swap;
            }
          `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const savedTheme = localStorage.getItem('app-theme');
              const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const isDark = savedTheme ? savedTheme === 'dark' : systemDark;
              if (isDark) document.documentElement.classList.add('dark');
              else document.documentElement.classList.remove('dark');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
