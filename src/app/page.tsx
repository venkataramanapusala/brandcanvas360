import { Play, ArrowRight, TrendingUp, Users, Target, Search, MousePointerClick, Share2, PenTool, Code2, Mail, Star, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

const trustLogos = ['NexaTech', 'Orbit Foods', 'Summit Capital', 'PulseFit', 'Vantage Realty', 'Lumen Retail'];

const services = [
  { icon: Search, title: 'SEO Optimization', desc: 'Rank higher, get found first, and capture organic demand that compounds every month.', href: '/services/seo' },
  { icon: MousePointerClick, title: 'PPC Advertising', desc: 'High-intent paid campaigns across Google & Meta engineered for maximum ROAS.', href: '/services/ppc' },
  { icon: Share2, title: 'Social Media Marketing', desc: 'Build an engaged community and turn followers into loyal, paying customers.', href: '/services/social-media-marketing' },
  { icon: PenTool, title: 'Content Marketing', desc: 'Story-driven content that builds authority and moves buyers down the funnel.', href: '/services/content-marketing' },
  { icon: Code2, title: 'Web Development', desc: 'Fast, conversion-first websites and landing pages that turn visits into leads.', href: '/services/web-development' },
  { icon: Mail, title: 'Email Marketing', desc: 'Automated nurture flows and campaigns that keep your pipeline full.', href: '/services/email-marketing' },
];

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
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/[0.08] px-4 py-2 text-sm font-medium text-amber-200">
              Top-Rated Digital Marketing Agency
            </span>

            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              We Drive <span className="text-gradient">Measurable Growth</span> for Scaling Brands
            </h1>

            <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
              BrandCanvas360 crafts custom SEO, paid media, and content strategies tailored to your
              business goals — turning clicks into customers and data into decisions that compound
              growth quarter after quarter.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-ink-inverse shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primaryHover hover:shadow-primary/50"
              >
                Get Your Free Audit
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="#campaign-dashboard"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition-colors duration-300 hover:border-primary hover:text-primary"
              >
                <Play className="h-5 w-5" fill="currentColor" />
                Explore Results
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-dark bg-gradient-to-br from-primary to-accent" />
                ))}
              </div>
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">350+ brands</span> trust us with their growth
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="hero-command-visual relative aspect-[4/5] w-full scroll-mt-40 overflow-hidden rounded-[2rem] border border-borderStrong bg-surface-card shadow-crimson-glow sm:aspect-square">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgb(255_209_102_/_0.34),transparent_24%),radial-gradient(circle_at_78%_22%,rgb(255_107_74_/_0.30),transparent_30%),linear-gradient(135deg,rgb(255_209_102_/_0.20),rgb(129_32_14_/_0.34)_52%,rgb(36_4_3_/_0.62))]" />
              <div className="absolute inset-x-4 top-6 flex items-center justify-between rounded-2xl border border-white/12 bg-surface-overlay/45 px-4 py-3 backdrop-blur-md sm:inset-x-8 sm:top-8">
                <div>
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-primary sm:text-[0.62rem] sm:tracking-[0.28em]">Live Funnel</p>
                  <p className="mt-1 font-heading text-base font-extrabold text-ink-primary sm:text-lg">Growth Control Room</p>
                </div>
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-success" />
                  <span className="h-2.5 w-2.5 rounded-full bg-warning" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                </div>
              </div>

              <div className="absolute left-1/2 top-[45%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/35 sm:top-[52%] sm:h-72 sm:w-72">
                <div className="hero-orbit absolute inset-4 rounded-full border border-white/12">
                  <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_26px_rgb(255_209_102_/_0.75)]" />
                </div>
                <div className="hero-orbit-reverse absolute inset-12 rounded-full border border-accent/25">
                  <span className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-info shadow-[0_0_24px_rgb(103_232_249_/_0.60)]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-[1.5rem] border border-borderSubtle bg-surface-overlay/80 p-4 text-center shadow-crimson-soft backdrop-blur-md sm:rounded-[1.75rem] sm:p-6">
                    <TrendingUp className="mx-auto h-8 w-8 text-primary sm:h-10 sm:w-10" />
                    <p className="mt-2 font-heading text-2xl font-extrabold text-ink-primary sm:mt-3 sm:text-3xl">10x</p>
                    <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-ink-muted sm:text-xs sm:tracking-[0.24em]">ROI Lift</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 left-4 right-4 grid grid-cols-3 gap-2 sm:bottom-8 sm:left-8 sm:right-8 sm:gap-3">
                {[
                  ['Reach', '2.4M', 'h-12 sm:h-16'],
                  ['Clicks', '148K', 'h-16 sm:h-24'],
                  ['Leads', '12.4K', 'h-14 sm:h-20'],
                ].map(([label, value, height]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-surface-overlay/55 p-2 backdrop-blur-md sm:p-3">
                    <div className="flex h-20 items-end gap-1 sm:h-28 sm:gap-1.5" aria-hidden="true">
                      <span className="hero-bar h-8 flex-1 rounded-full bg-accent/55 sm:h-10" />
                      <span className={`hero-bar flex-1 rounded-full bg-primary ${height}`} />
                      <span className="hero-bar h-10 flex-1 rounded-full bg-info/70 sm:h-14" />
                    </div>
                    <p className="mt-2 text-[0.52rem] font-bold uppercase tracking-widest text-ink-muted sm:mt-3 sm:text-[0.62rem]">{label}</p>
                    <p className="font-heading text-sm font-extrabold text-ink-primary sm:text-lg">{value}</p>
                  </div>
                ))}
              </div>

              <div className="absolute left-4 top-28 rounded-2xl border border-white/10 bg-primary px-3 py-2 text-ink-inverse shadow-crimson-glow sm:left-6 sm:top-28 sm:px-4 sm:py-3">
                <p className="text-[0.62rem] font-extrabold uppercase tracking-widest sm:text-xs">ROAS</p>
                <p className="font-heading text-xl font-extrabold sm:text-2xl">8.4x</p>
              </div>
              <div className="absolute right-4 top-36 rounded-2xl border border-white/10 bg-surface-overlay/70 px-3 py-2 backdrop-blur-md sm:right-6 sm:top-36 sm:px-4 sm:py-3">
                <p className="text-[0.62rem] font-bold text-ink-muted sm:text-xs">Pipeline</p>
                <p className="font-heading text-lg font-extrabold text-ink-primary sm:text-xl">INR 10 Cr</p>
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-borderStrong bg-surface-overlay px-5 py-3 shadow-crimson-soft sm:left-auto sm:right-6 sm:translate-x-0 sm:px-6 sm:py-4">
              <p className="text-sm font-bold text-ink-muted">Average Client Result</p>
              <p className="font-heading text-xl font-extrabold text-ink-primary sm:text-2xl">10x ROI Increase</p>
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
      <section id="campaign-dashboard" className="relative overflow-hidden bg-surface-base py-20 sm:py-28">
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
                href={service.href}
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
