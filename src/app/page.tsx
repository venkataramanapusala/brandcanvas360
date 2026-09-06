import { Play, ArrowRight, TrendingUp, Users, Target, MousePointerClick, Star, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { services } from '@/lib/services-data';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Best Digital Marketing Agency in Vijayawada | BrandCanvas360',
  description:
    'BrandCanvas360 helps businesses grow through SEO, paid media, social media, content, and conversion-focused web strategies.',
  path: '/',
});

const trustLogos = ['NexaTech', 'Orbit Foods', 'Summit Capital', 'PulseFit', 'Vantage Realty', 'Lumen Retail'];

const stats = [
  { value: '350+', label: 'Brands Scaled' },
  { value: 'INR 1,000 Cr+', label: 'Ad Spend Managed' },
  { value: '4.9/5', label: 'Client Satisfaction' },
  { value: '11x', label: 'Avg. ROI Increase' },
];

const process = [
  { step: '01', title: 'Discover', desc: 'We audit your brand, market, and competitors to uncover real growth opportunities.' },
  { step: '02', title: 'Strategize', desc: 'A custom roadmap mapped to your goals, budget, and timeline — no cookie-cutter plans.' },
  { step: '03', title: 'Execute', desc: 'Our specialists launch campaigns, content, and creative built to convert from day one.' },
  { step: '04', title: 'Optimize', desc: 'Continuous testing and reporting so every rupee you spend works harder over time.' },
];

const campaignMetrics = [
  { label: 'ROAS', value: '8.4x', trend: '+22%', tone: 'text-success', icon: TrendingUp },
  { label: 'Leads', value: '12,480', trend: '+18%', tone: 'text-info', icon: Users },
  { label: 'CTR', value: '6.8%', trend: '+9%', tone: 'text-warning', icon: MousePointerClick },
  { label: 'CPA', value: 'INR 2.6K', trend: '-14%', tone: 'text-success', icon: Target },
];

const testimonials = [
  {
    quote: 'BrandCanvas360 rebuilt our entire funnel and tripled qualified leads in 90 days. Their reporting is the clearest we\u2019ve ever seen.',
    name: 'Alicia Reyes',
    role: 'CMO, NexaTech',
  },
  {
    quote: 'We finally have a marketing partner that thinks like an owner. Revenue is up 68% year over year since we started working together.',
    name: 'Marcus Bell',
    role: 'Founder, PulseFit',
  },
  {
    quote: 'The SEO team got us to page one for our top 20 keywords in under six months. Traffic and bookings have never been higher.',
    name: 'Priya Nair',
    role: 'Director of Growth, Vantage Realty',
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative section-top-glow overflow-hidden bg-dark">
        <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-12 px-6 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-11 2xl:gap-20 2xl:px-0 2xl:pb-32 2xl:pt-24">
          <div className="text-left">
            <span className="inline-flex animate-fade-in-up items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-400 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-amber-400" aria-hidden="true" />
              360° Digital Growth Partner
            </span>

            <h1 className="mt-3 max-w-3xl animate-fade-in-up font-heading text-5xl font-extrabold leading-tight tracking-tight text-white [animation-delay:100ms] md:text-6xl 2xl:text-8xl">
              Turn your brand into a <span className="text-gradient">growth engine.</span>
            </h1>

            <p className="mt-6 max-w-xl animate-fade-in-up text-base text-slate-300 [animation-delay:200ms] sm:text-lg">
              BrandCanvas360 helps businesses attract attention, build trust and generate measurable
              growth through smart digital marketing, creative content and performance-driven strategies.
            </p>

            <div className="mt-8 flex animate-fade-in-up flex-col gap-4 [animation-delay:300ms] sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 font-medium text-gray-900 shadow-lg shadow-primary/30 transition-all duration-200 hover:scale-105 hover:bg-white focus:outline-none focus:ring-4 focus:ring-primary/40"
              >
                Let&apos;s Grow Together
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                <Play className="h-5 w-5" fill="currentColor" />
                Explore Services
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="hero-avatars flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="hero-avatar h-10 w-10 rounded-full border-2 border-primary" />
                ))}
              </div>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">350+ brands</span> trust us with their growth
              </p>
            </div>
          </div>

          <div className="hero-control-wrap relative">
            <div className="hero-command-visual relative w-full scroll-mt-40 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgb(212_175_55_/_0.2),transparent_35%),linear-gradient(145deg,rgb(255_255_255_/_0.08),transparent_55%)]" />
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-400">Live Funnel</p>
                  <p className="mt-1 font-heading text-lg font-extrabold text-white">Growth Control Room</p>
                </div>
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="hero-status-dot h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="hero-status-dot h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="hero-status-dot h-2.5 w-2.5 rounded-full bg-amber-200" />
                </div>
              </div>

              <div className="relative mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-white/60">Revenue influenced</p>
                      <p className="mt-2 font-heading text-4xl font-extrabold text-white">INR 10 Cr</p>
                    </div>
                    <div className="rounded-xl bg-amber-400/10 p-3 text-amber-400">
                      <TrendingUp className="h-7 w-7" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mt-5 flex h-10 items-end gap-1.5" aria-hidden="true">
                    {[35, 52, 43, 65, 58, 82, 74, 100].map((height) => (
                      <span key={height} className="flex-1 rounded-full bg-amber-400/70" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
                {[
                  ['ROAS', '8.4x'],
                  ['Qualified leads', '12.4K'],
                  ['Conversion rate', '6.8%'],
                  ['Growth', '+22%'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                    <p className="text-xs font-medium text-white/60">{label}</p>
                    <p className="mt-2 font-heading text-2xl font-extrabold text-amber-400">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-5 w-fit rounded-2xl border border-amber-500/30 bg-black/40 px-5 py-3 text-white shadow-crimson-soft backdrop-blur-md sm:mr-6 sm:mt-6 sm:px-6 sm:py-4">
              <p className="text-sm font-bold text-amber-200/80">Average Client Result</p>
              <p className="font-heading text-xl font-extrabold text-white sm:text-2xl">10x ROI Increase</p>
            </div>
          </div>
        </div>

        {/* Trust marquee */}
        <div className="relative z-10 border-t border-white/10 bg-white/[0.02] py-8">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-muted">
            Trusted by growth-focused brands
          </p>
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee gap-16 pr-16">
              {[...trustLogos, ...trustLogos].map((name, i) => (
                <span key={i} className="whitespace-nowrap font-heading text-xl font-bold text-slate-500">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-darkCard py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-gradient sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Campaign dashboard theme example */}
      <section className="relative overflow-hidden bg-surface-base py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgb(255_209_102_/_0.18),transparent_34%),radial-gradient(circle_at_82%_12%,rgb(255_107_74_/_0.16),transparent_30%),linear-gradient(180deg,rgb(59_8_4_/_0.48),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Crimson Growth System</span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-ink-primary sm:text-4xl">
              Ad Campaign Performance Dashboard
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-secondary">
              A high-contrast, conversion-focused UI theme built around the deep crimson brand base with champagne CTAs, warm typography, and elevated analytics surfaces.
            </p>
          </div>

          <div className="rounded-[2rem] border border-borderSubtle bg-surface-deep p-4 shadow-crimson-soft sm:p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-3xl border border-borderSubtle bg-surface-card p-6 shadow-crimson-glow sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Live Media Mix</p>
                    <h3 className="mt-3 font-heading text-2xl font-extrabold text-ink-primary sm:text-3xl">
                      Summer Demand Gen Sprint
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-muted">
                      Paid search, social retargeting, and creator placements optimized for qualified pipeline growth.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-ink-inverse shadow-crimson-glow transition-all duration-300 hover:bg-primaryHover focus:outline-none focus:ring-4 focus:ring-primary/35"
                  >
                    Optimize Campaign
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {campaignMetrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-borderSubtle bg-surface-raised/70 p-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-ink-muted">{metric.label}</span>
                        <metric.icon className={`h-5 w-5 ${metric.tone}`} aria-hidden="true" />
                      </div>
                      <p className="mt-4 font-heading text-3xl font-extrabold text-ink-primary">{metric.value}</p>
                      <p className={`mt-2 text-sm font-bold ${metric.tone}`}>{metric.trend} vs last period</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-borderSubtle bg-surface-overlay/55 p-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <p className="font-heading text-lg font-bold text-ink-primary">Spend Allocation</p>
                    <span className="rounded-full border border-borderStrong bg-primary/10 px-3 py-1 text-xs font-bold text-primary">INR 70L active</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      ['Search', '52%', 'bg-primary'],
                      ['Paid Social', '31%', 'bg-accent'],
                      ['Creator', '17%', 'bg-info'],
                    ].map(([label, value, bar]) => (
                      <div key={label}>
                        <div className="mb-2 flex justify-between text-sm font-semibold text-ink-secondary">
                          <span>{label}</span>
                          <span>{value}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <div className={`h-full rounded-full ${bar}`} style={{ width: value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <form className="rounded-3xl border border-borderSubtle bg-surface-card p-6 sm:p-8" aria-label="Campaign forecast form">
                <p className="font-heading text-xl font-extrabold text-ink-primary">Forecast Next Push</p>
                <p className="mt-2 text-sm leading-6 text-ink-muted">
                  Model budget, audience, and target outcomes before launch.
                </p>

                <div className="mt-6 space-y-5">
                  <label className="block">
                    <span className="text-sm font-bold text-ink-secondary">Monthly Budget</span>
                    <input
                      type="text"
                      defaultValue="INR 35,00,000"
                      className="mt-2 w-full rounded-2xl border border-borderSubtle bg-surface-overlay px-4 py-3 text-ink-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/20"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-bold text-ink-secondary">Primary Channel</span>
                    <select className="mt-2 w-full rounded-2xl border border-borderSubtle bg-surface-overlay px-4 py-3 text-ink-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/20">
                      <option>Paid Search</option>
                      <option>Paid Social</option>
                      <option>Creator Partnerships</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-sm font-bold text-ink-secondary">Target CPA</span>
                    <input
                      type="text"
                      defaultValue="INR 3,000"
                      className="mt-2 w-full rounded-2xl border border-borderSubtle bg-surface-overlay px-4 py-3 text-ink-primary outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/20"
                    />
                  </label>
                </div>

                <div className="mt-8 rounded-2xl border border-borderStrong bg-primary/10 p-5">
                  <p className="text-sm font-bold text-primary">Projected pipeline</p>
                  <p className="mt-2 font-heading text-3xl font-extrabold text-ink-primary">INR 10.4 Cr</p>
                  <p className="mt-2 text-sm text-ink-muted">Based on current win rate and 18-day sales velocity.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-dark py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">What We Do</span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Full-Funnel Marketing Services Built to Convert
            </h2>
            <p className="mt-4 text-base text-slate-300">
              From first click to closed deal, we manage every stage of your customer journey with
              data-backed strategy and hands-on execution.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className="group card-glass relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-ink-inverse">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/10 bg-darkCard py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Process</span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A Proven Path From Strategy to Scale
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative">
                <span className="font-heading text-5xl font-extrabold text-white/10">{item.step}</span>
                <h3 className="mt-2 font-heading text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-dark py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why BrandCanvas360</span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Marketing That&apos;s Judged by Revenue, Not Vanity Metrics
            </h2>
            <p className="mt-5 text-base text-slate-300">
              We&apos;re not a vendor — we&apos;re an extension of your team, obsessed with the numbers that
              actually matter to your business.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {[
                'Dedicated strategist & transparent monthly reporting',
                'Custom strategy — never a one-size-fits-all template',
                'Data-driven decisions backed by real-time analytics',
                'Flexible, no-lock-in contracts built on results',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-slate-300 sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-ink-inverse transition-colors duration-300 hover:bg-primaryHover"
            >
              More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Target, label: 'Goal-Driven Strategy' },
              { icon: Users, label: 'Dedicated Experts' },
              { icon: TrendingUp, label: 'Scalable Growth' },
              { icon: Star, label: '4.9/5 Client Rating' },
            ].map((item) => (
              <div key={item.label} className="card-glass flex flex-col items-center gap-4 rounded-2xl p-8 text-center">
                <item.icon className="h-8 w-8 text-primary" />
                <p className="font-heading text-sm font-semibold text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-white/10 bg-darkCard py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Client Results</span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Don&apos;t Take Our Word For It
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card-glass rounded-2xl p-8">
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4" fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-200">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
