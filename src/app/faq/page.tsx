'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CTASection from '@/components/CTASection';

const faqCategories = [
  {
    category: 'Getting Started',
    items: [
      { q: 'How do I get started with BrandCanvas360?', a: 'Simply book a free strategy call through our contact page. We\u2019ll audit your current marketing, understand your goals, and recommend the right services and package for your business.' },
      { q: 'How long does onboarding take?', a: 'Most clients are fully onboarded and campaigns are live within 2-3 weeks of signing, depending on the scope of services.' },
      { q: 'Do you work with businesses in my industry?', a: 'We\u2019ve worked across e-commerce, SaaS, local services, real estate, health & wellness, and more. Our strategies adapt to your specific market.' },
    ],
  },
  {
    category: 'Services & Strategy',
    items: [
      { q: 'Can I combine multiple services?', a: 'Yes — most clients choose a combination of SEO, PPC, content, and social to build a complete full-funnel strategy.' },
      { q: 'Will I have a dedicated point of contact?', a: 'Yes, every client is assigned a dedicated account strategist who coordinates across our specialist teams.' },
      { q: 'How often will I receive reports?', a: 'Growth and Enterprise clients receive bi-weekly strategy calls and reports; Starter clients receive detailed monthly reports.' },
    ],
  },
  {
    category: 'Pricing & Contracts',
    items: [
      { q: 'Is there a minimum contract length?', a: 'No. All our plans are month-to-month, so you stay because of results, not because you\u2019re locked in.' },
      { q: 'What payment methods do you accept?', a: 'We accept ACH, wire transfer, and all major credit cards for monthly retainers.' },
      { q: 'Can I cancel at any time?', a: 'Yes, with 30 days\u2019 notice. We believe in earning your business every single month.' },
    ],
  },
];

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
};

export default function FaqPage() {
  const [openItem, setOpenItem] = useState<string | null>('Getting Started-0');

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Everything you need to know about working with BrandCanvas360. Can&apos;t find your
            answer? Reach out and we&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {faqCategories.map((category) => (
            <div key={category.category} className="mb-12 last:mb-0">
              <h2 className="mb-5 font-heading text-xl font-bold text-primary">{category.category}</h2>
              <div className="flex flex-col gap-3">
                {category.items.map((item, i) => {
                  const id = `${category.category}-${i}`;
                  const isOpen = openItem === id;
                  return (
                    <div key={id} className="card-glass overflow-hidden rounded-2xl">
                      <button
                        type="button"
                        onClick={() => setOpenItem(isOpen ? null : id)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="font-heading text-base font-semibold text-white">{item.q}</span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden px-6 pb-5">
                          <p className="text-sm leading-relaxed text-muted">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        subtitle="Our team is happy to walk you through exactly how we can help grow your business."
      />
    </main>
  );
}
