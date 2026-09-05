import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, ArrowLeft } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { blogPosts, getPostBySlug } from '@/lib/blog-data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ 'blog-slug': post.slug }));
}

export function generateMetadata({ params }: { params: { 'blog-slug': string } }) {
  const post = getPostBySlug(params['blog-slug']);
  if (!post) return { title: 'Article Not Found | BrandCanvas360' };
  return { title: `${post.title} | BrandCanvas360`, description: post.excerpt };
}

export default function BlogDetailPage({ params }: { params: { 'blog-slug': string } }) {
  const post = getPostBySlug(params['blog-slug']);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main>
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-24">
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-orange-300">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="mt-6 block w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
            {post.category}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-5 text-sm text-muted">
            <span>By {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="aspect-video w-full rounded-3xl bg-gradient-to-br from-primary via-accent to-gold" />
          <div className="prose prose-invert mt-10 max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="mb-5 text-base leading-relaxed text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-darkCard py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            More Articles
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card-glass group rounded-2xl p-6 transition-colors duration-300 hover:border-primary/40"
              >
                <span className="w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                  {p.category}
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-white">{p.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Read Article <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
