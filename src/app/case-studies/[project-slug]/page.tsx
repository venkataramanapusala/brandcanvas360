import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { caseStudies, getCaseStudyBySlug } from '@/lib/case-studies-data';
import { absoluteUrl, createPageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return caseStudies.map((study) => ({ 'project-slug': study.slug }));
}

export function generateMetadata({ params }: { params: { 'project-slug': string } }) {
  const study = getCaseStudyBySlug(params['project-slug']);
  if (!study) return { title: 'Case Study Not Found | BrandCanvas360' };
  return createPageMetadata({
    title: `${study.title} | BrandCanvas360`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
    type: 'article',
  });
}

export default function CaseStudyDetailPage({ params }: { params: { 'project-slug': string } }) {
  const study = getCaseStudyBySlug(params['project-slug']);
  if (!study) notFound();

  const otherStudies = caseStudies.filter((s) => s.slug !== study.slug).slice(0, 2);
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: study.title,
      description: study.summary,
      author: { '@type': 'Organization', name: 'BrandCanvas360', url: absoluteUrl('/') },
      about: { '@type': 'Organization', name: study.client, industry: study.industry },
      mainEntityOfPage: absoluteUrl(`/case-studies/${study.slug}`),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Case Studies', item: absoluteUrl('/case-studies') },
        { '@type': 'ListItem', position: 3, name: study.title, item: absoluteUrl(`/case-studies/${study.slug}`) },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-orange-300">
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies
          </Link>
          <span className="mt-6 block w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
            {study.industry} · {study.client}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {study.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">{study.summary}</p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-darkCard py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 sm:grid-cols-3 lg:px-8">
          {study.results.map((r) => (
            <div key={r.label} className="text-center">
              <p className="font-heading text-4xl font-extrabold text-gradient">{r.value}</p>
              <p className="mt-2 text-sm text-muted">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dark py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">The Challenge</span>
            <h2 className="mt-4 font-heading text-2xl font-bold text-white">Where {study.client} Started</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{study.challenge}</p>

            <span className="mt-10 block text-sm font-semibold uppercase tracking-widest text-primary">The Outcome</span>
            <h2 className="mt-4 font-heading text-2xl font-bold text-white">The Results</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{study.outcome}</p>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Strategy</span>
            <h2 className="mt-4 font-heading text-2xl font-bold text-white">How We Got There</h2>
            <ul className="mt-6 flex flex-col gap-4">
              {study.strategy.map((point) => (
                <li key={point} className="card-glass flex items-start gap-3 rounded-2xl p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-slate-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-darkCard py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            More Success Stories
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {otherStudies.map((s) => (
              <Link
                key={s.slug}
                href={`/case-studies/${s.slug}`}
                className="card-glass group flex items-center gap-5 rounded-2xl p-6 transition-colors duration-300 hover:border-primary/40"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-accent to-gold">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white">{s.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Read Case Study <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Want Results Like ${study.client}?`}
        subtitle="Let's build a strategy tailored to your business goals and budget."
      />
    </main>
  );
}
