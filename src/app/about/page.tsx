import { Target, Eye, HeartHandshake, Award, Users2, TrendingUp } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'About Us | BrandCanvas360',
  description: 'Meet BrandCanvas360 — a performance-driven digital marketing agency dedicated to your growth.',
};

const values = [
  { icon: Target, title: 'Results First', desc: 'Every strategy is built around measurable outcomes — leads, sales, and revenue.' },
  { icon: Eye, title: 'Radical Transparency', desc: 'Real-time dashboards and honest reporting. No smoke, no vanity metrics.' },
  { icon: HeartHandshake, title: 'True Partnership', desc: 'We act as an extension of your team, not an outside vendor sending invoices.' },
  { icon: Award, title: 'Craft & Quality', desc: 'Senior specialists — not junior account managers — run every campaign.' },
];

const milestones = [
  { year: '2016', text: 'BrandCanvas360 founded by two performance marketers in a co-working space.' },
  { year: '2018', text: 'Crossed 100 active client partnerships across e-commerce, SaaS, and local service brands.' },
  { year: '2021', text: 'Launched dedicated content and web development pods to offer true full-funnel service.' },
  { year: '2024', text: 'Managing INR 1,000 Cr+ in annual ad spend with a 96% client retention rate.' },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">About BrandCanvas360</span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            The Growth Partner Behind <span className="text-gradient">350+ Scaling Brands</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            We started BrandCanvas360 with one belief: marketing should be judged by revenue, not
            impressions. Today we&apos;re a full-service digital marketing agency helping ambitious
            brands turn traffic into loyal, paying customers.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-darkCard py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Story</span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Built by Marketers Who Got Tired of Guesswork
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              BrandCanvas360 was founded on a simple idea: agencies should be held to the same
              standard as an in-house growth team. That means clear KPIs, honest reporting, and
              strategies rooted in data — not trends.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Today, our team of SEO strategists, paid media buyers, content writers, and developers
              works as a single unit to move every client toward one goal: sustainable, compounding
              growth.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { icon: Users2, value: '65+', label: 'Team Members' },
                { icon: TrendingUp, value: '350+', label: 'Brands Scaled' },
                { icon: Award, value: '12', label: 'Industry Awards' },
              ].map((stat) => (
                <div key={stat.label}>
                  <stat.icon className="h-6 w-6 text-primary" />
                  <p className="mt-3 font-heading text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="card-glass flex gap-5 rounded-2xl p-6">
                <span className="font-heading text-lg font-extrabold text-primary">{m.year}</span>
                <p className="text-sm leading-relaxed text-slate-300">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Values</span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              What Guides Every Campaign We Run
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="card-glass rounded-2xl p-7 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With a Team That Delivers?"
        subtitle="Let's talk about your goals and show you exactly how we'd approach your growth."
      />
    </main>
  );
}
