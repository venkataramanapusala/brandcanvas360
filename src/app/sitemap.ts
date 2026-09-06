import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { caseStudies } from '@/lib/case-studies-data';
import { absoluteUrl } from '@/lib/seo';
import { services } from '@/lib/services-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: '/', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/contact', priority: 0.9 },
    { path: '/about', priority: 0.8 },
    { path: '/case-studies', priority: 0.8 },
    { path: '/pricing', priority: 0.8 },
    { path: '/blog', priority: 0.8 },
    { path: '/faq', priority: 0.7 },
    { path: '/team', priority: 0.6 },
    { path: '/privacy-policy', priority: 0.3 },
    { path: '/terms-of-service', priority: 0.3 },
  ];

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: absoluteUrl(path),
      changeFrequency: 'monthly' as const,
      priority,
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...caseStudies.map((study) => ({
      url: absoluteUrl(`/case-studies/${study.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}