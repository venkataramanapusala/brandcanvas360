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
    <section className="relative overflow-hidden bg-[#fffaf7] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#ffe5d8,transparent_55%)]" />
      <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-[#f6d8ce] bg-white px-6 py-14 text-center shadow-[0_24px_80px_rgba(103,39,24,0.1)] sm:px-10 lg:px-16">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-500 sm:text-lg">{subtitle}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-extrabold text-ink-inverse shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/50"
          >
            {primaryLabel}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+918309582333"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-4 text-base font-semibold text-slate-900 transition-colors duration-300 hover:border-brand-base hover:text-brand-base"
          >
            Call +91 83095 82333
          </a>
        </div>
      </div>
    </section>
  );
}
