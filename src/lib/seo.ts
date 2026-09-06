import type { Metadata } from 'next';

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://brandcanvas360.com');

export const siteName = 'BrandCanvas360';

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
};

export function createPageMetadata({
  title,
  description,
  path,
  type = 'website',
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type,
      locale: 'en_IN',
      siteName,
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'BrandCanvas360 digital marketing agency',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: ['/opengraph-image'],
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}