import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact BrandCanvas360 | Digital Marketing Agency in Vijayawada',
  description: 'Contact BrandCanvas360 for a free digital marketing audit and growth strategy tailored to your business.',
  path: '/contact',
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}