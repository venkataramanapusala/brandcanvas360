import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { services } from '@/lib/services-data';
import { createPageMetadata } from '@/lib/seo';

export const metadata = {
  ...createPageMetadata({
    title: 'Digital Marketing Services | BrandCanvas360',
    description: 'Explore BrandCanvas360 digital marketing services: SEO, PPC, social media, content, web development, email marketing, and analytics.',
    path: '/services',
  }),
  title: 'Services | BrandCanvas360',
  description: 'Explore BrandCanvas360\u2019s full-funnel digital marketing services — SEO, PPC, social, content, web development, and email marketing.',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Full-Funnel Marketing <span className="text-gradient">Built to Convert</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            From first click to closed deal, our specialists manage every stage of your customer
            journey with data-backed strategy and hands-on execution.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="card-glass flex flex-col rounded-2xl p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-heading text-xl font-bold text-white">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.desc}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-orange-300"
                >
                  Explore {service.title} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
