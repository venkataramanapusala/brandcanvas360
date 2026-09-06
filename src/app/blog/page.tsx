import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { blogPosts } from '@/lib/blog-data';
import { createPageMetadata } from '@/lib/seo';

export const metadata = {
  ...createPageMetadata({
    title: 'Digital Marketing Insights | BrandCanvas360',
    description: 'Actionable digital marketing insights on SEO, PPC, social media, content, and more from the BrandCanvas360 team.',
    path: '/blog',
  }),
  title: 'Blog | BrandCanvas360',
  description: 'Actionable digital marketing insights on SEO, PPC, social media, content, and more from the BrandCanvas360 team.',
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main>
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Blog</span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Marketing Insights <span className="text-gradient">That Drive Growth</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Actionable strategies, trends, and lessons from the team managing INR 1,000 Cr+ in annual
            marketing spend.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href={`/blog/${featured.slug}`}
            className="card-glass group grid grid-cols-1 gap-8 overflow-hidden rounded-3xl p-8 transition-colors duration-300 hover:border-primary/40 lg:grid-cols-2 lg:p-10"
          >
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-accent to-gold lg:aspect-auto">
              <span className="font-heading text-lg font-bold text-white/80">Featured Article</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                {featured.category}
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold text-white sm:text-3xl">{featured.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {featured.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {featured.readTime}</span>
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Read Article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-glass group flex flex-col rounded-2xl p-7 transition-colors duration-300 hover:border-primary/40"
              >
                <span className="w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                  {post.category}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Read Article <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want This Kind of Growth for Your Business?"
        subtitle="Stop reading about growth strategies and start implementing them with our team."
      />
    </main>
  );
}
