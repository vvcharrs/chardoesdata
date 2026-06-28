import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { createMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`
  },
  description: site.description,
  keywords: [
    'data journalism',
    'fashion',
    'beauty',
    'retail',
    'luxury',
    'consumer behaviour',
    'culture',
    'visual journalism'
  ],
  authors: [{ name: site.creator }],
  creator: site.creator,
  publisher: site.name,
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg'
  },
  manifest: '/manifest.webmanifest',
  alternates: createMetadata().alternates,
  openGraph: createMetadata().openGraph,
  twitter: createMetadata().twitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  category: 'publication'
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  colorScheme: 'light dark'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only z-50 bg-tamarind px-4 py-3 text-sm font-bold text-porcelain focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </body>
    </html>
  );
}
