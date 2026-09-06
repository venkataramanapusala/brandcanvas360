import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Frequently Asked Questions | BrandCanvas360',
  description: 'Answers to common questions about BrandCanvas360 digital marketing services, pricing, reporting, and client partnerships.',
  path: '/faq',
});

export default function FaqLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}