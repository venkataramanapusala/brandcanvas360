import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection({
  title = 'Ready to Turn Clicks Into Customers?',
  subtitle = 'Get a free, no-obligation marketing audit and see exactly how BrandCanvas360 can grow your revenue.',
  primaryLabel = 'Get My Free Audit',
  primaryHref = '/contact',
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-dark py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">{subtitle}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-ink-inverse shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primaryHover hover:shadow-primary/50"
          >
            {primaryLabel}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+918309582333"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            Call +91 83095 82333
          </a>
        </div>
      </div>
    </section>
  );
}
