import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { doctorSchema, organizationSchema } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN || 'drsekharpoudel.com.np'}`),
  title: 'Dr. Shekhar Poudel - Best Gastroenterologist in Kathmandu',
  description: 'Expert gastroenterology and hepatology services in Kathmandu. Dr. Shekhar Poudel is the first LTSI-certified transplant hepatologist from Nepal.',
  keywords: [
    'gastroenterologist kathmandu',
    'best gastroenterologist nepal',
    'liver specialist nepal',
    'gastritis doctor',
    'hepatologist kathmandu',
    'liver disease treatment',
    'endoscopy kathmandu',
    'transplant hepatologist'
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
        <style dangerouslySetInnerHTML={{
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
          `
        }} />
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
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
