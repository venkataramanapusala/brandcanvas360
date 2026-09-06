import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { services, getServiceBySlug } from '@/lib/services-data';
import { absoluteUrl, createPageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return services.map((service) => ({ 'service-slug': service.slug }));
}

export function generateMetadata({ params }: { params: { 'service-slug': string } }) {
  const service = getServiceBySlug(params['service-slug']);
  if (!service) return { title: 'Service Not Found | BrandCanvas360' };
  return createPageMetadata({
    title: `${service.title} | BrandCanvas360`,
    description: service.desc,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: { params: { 'service-slug': string } }) {
  const service = getServiceBySlug(params['service-slug']);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.desc,
      serviceType: service.title,
      provider: { '@type': 'ProfessionalService', name: 'BrandCanvas360', url: absoluteUrl('/') },
      areaServed: { '@type': 'City', name: 'Vijayawada' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
        { '@type': 'ListItem', position: 3, name: service.title, item: absoluteUrl(`/services/${service.slug}`) },
      ],
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <service.icon className="h-7 w-7" />
          </div>
          <span className="mt-5 block text-sm font-semibold uppercase tracking-widest text-primary">
            {service.shortTitle}
          </span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">{service.heroText}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-ink-inverse shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primaryHover"
          >
            Get a Free {service.shortTitle} Audit <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="border-t border-white/10 bg-darkCard py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">What&apos;s Included</span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Everything You Need to Grow
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {service.points.map((point) => (
              <div key={point} className="card-glass flex items-start gap-4 rounded-2xl p-6">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <p className="text-base text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Process</span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              How We Deliver Results
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <div key={step.title} className="relative">
                <span className="font-heading text-5xl font-extrabold text-white/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-darkCard py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Common Questions About {service.shortTitle}
            </h2>
          </div>
          <div className="mt-12 flex flex-col gap-4">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="card-glass rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-heading text-base font-bold text-white">{faq.q}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Explore Other Services
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-glass group rounded-2xl p-6 transition-colors duration-300 hover:border-primary/40"
              >
                <s.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-heading text-base font-bold text-white">{s.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Grow With ${service.shortTitle}?`}
        subtitle="Get a free, no-obligation strategy session tailored to your business."
      />
    </main>
  );
}
