import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';
import { createPageMetadata } from '@/lib/seo';

export const metadata = {
  ...createPageMetadata({
    title: 'Digital Marketing Pricing | BrandCanvas360',
    description: 'Transparent, flexible digital marketing packages designed to scale with your business, with no long-term lock-in.',
    path: '/pricing',
  }),
  title: 'Pricing | BrandCanvas360',
  description: 'Transparent, flexible digital marketing packages designed to scale with your business — no long-term lock-in.',
};

const plans = [
  {
    name: 'Starter',
    price: 'INR 45,000',
    period: '/mo',
    desc: 'For small businesses ready to build a consistent digital presence.',
    features: [
      'SEO foundation & on-page optimization',
      'Social media management (2 platforms)',
      'Monthly performance reporting',
      'Email support',
      'Single-channel ad management',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: 'INR 95,000',
    period: '/mo',
    desc: 'For scaling brands that need full-funnel marketing execution.',
    features: [
      'Everything in Starter, plus:',
      'Multi-channel PPC management',
      'Content marketing (4 assets/mo)',
      'Social media management (4 platforms)',
      'Bi-weekly strategy calls',
      'Dedicated account strategist',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For established brands needing a fully dedicated growth team.',
    features: [
      'Everything in Growth, plus:',
      'Full web development support',
      'Advanced marketing automation',
      'Weekly strategy & reporting calls',
      'Dedicated pod (strategist, media buyer, writer)',
      'Priority support & SLA',
    ],
    highlighted: false,
  },
];

const faqs = [
  { q: 'Is there a long-term contract?', a: 'No — all plans are month-to-month. We earn your business through results, not lock-in contracts.' },
  { q: 'Does pricing include ad spend?', a: 'No, management fees are separate from your ad spend budget, which is paid directly to platforms like Google and Meta.' },
  { q: 'Can I switch plans later?', a: 'Absolutely. As your business grows, you can upgrade or customize your plan at any time.' },
  { q: 'What if I only need one service?', a: 'We offer à la carte pricing for single services like SEO-only or PPC-only engagements — just reach out for a custom quote.' },
];

export default function PricingPage() {
  return (
    <main>
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Pricing</span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Simple, Transparent <span className="text-gradient">Growth Packages</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            No hidden fees, no long-term lock-in — just flexible packages built to scale with your
            business and deliver measurable ROI.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  plan.highlighted
                    ? 'border-2 border-primary bg-gradient-to-b from-primary/15 to-darkCard glow-primary'
                    : 'card-glass'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink-inverse">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted">{plan.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-primary text-ink-inverse shadow-lg shadow-primary/30 hover:bg-primaryHover'
                      : 'border border-white/15 text-white hover:border-primary hover:text-primary'
                  }`}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <ul className="mt-8 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-darkCard py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Pricing Questions, Answered
          </h2>
          <div className="mt-12 flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-glass rounded-2xl p-6">
                <p className="font-heading text-base font-bold text-white">{faq.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Plan Fits?"
        subtitle="Talk to our team and we'll recommend the right package for your goals and budget."
      />
    </main>
  );
}
