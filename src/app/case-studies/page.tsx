import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { caseStudies } from '@/lib/case-studies-data';

export const metadata = {
  title: 'Case Studies | BrandCanvas360',
  description: 'Real client results from BrandCanvas360 — see how we\u2019ve driven measurable growth across industries.',
};

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Case Studies</span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Real Results for <span className="text-gradient">Real Brands</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            We measure success in revenue, not impressions. Explore how we&apos;ve helped brands like
            yours achieve measurable, lasting growth.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="card-glass group flex flex-col overflow-hidden rounded-3xl transition-colors duration-300 hover:border-primary/40"
              >
                <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary via-accent to-gold">
                  <TrendingUp className="h-10 w-10 text-white/80" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                    {study.industry}
                  </span>
                  <h2 className="mt-4 font-heading text-lg font-bold text-white">{study.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{study.summary}</p>
                  <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                    {study.results.map((r) => (
                      <div key={r.label}>
                        <p className="font-heading text-lg font-extrabold text-gradient">{r.value}</p>
                        <p className="text-[11px] leading-tight text-muted">{r.label}</p>
                      </div>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Read Case Study <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Be Our Next Success Story?"
        subtitle="Let's build a growth strategy that turns your business into a case study worth sharing."
      />
    </main>
  );
}
