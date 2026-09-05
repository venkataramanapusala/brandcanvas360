import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Vijayawada | BrandCanvas360',
  description:
    'BrandCanvas360 is a digital marketing agency in Vijayawada helping ambitious brands grow through SEO, Google Ads, social media, content, and conversion-focused web strategies.',
  keywords: [
    'best digital marketing agency in Vijayawada',
    'digital marketing agency Vijayawada',
    'SEO agency Vijayawada',
    'Google Ads agency Vijayawada',
    'social media marketing Vijayawada',
    'BrandCanvas360',
  ],
  openGraph: {
    title: 'Best Digital Marketing Agency in Vijayawada | BrandCanvas360',
    description:
      'SEO, paid media, social media, content, and web strategies built for measurable growth in Vijayawada and beyond.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'BrandCanvas360',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} bg-surface-base font-sans text-ink-secondary antialiased`}
      >
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-SC5C3F4WB8"
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SC5C3F4WB8');
              `}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'BrandCanvas360',
              description: 'Digital marketing agency in Vijayawada providing SEO, paid media, social media, content, and web development services.',
              email: 'hello@brandcanvas360.com',
              telephone: '+91 83095 82333',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '49-5-3, Nayani Square, Inner Ring Road, Payakapuram',
                addressLocality: 'Vijayawada',
                postalCode: '520015',
                addressCountry: 'IN',
              },
              areaServed: {
                '@type': 'City',
                name: 'Vijayawada',
              },
              knowsAbout: ['SEO', 'Google Ads', 'Social Media Marketing', 'Content Marketing', 'Web Development'],
            }),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
