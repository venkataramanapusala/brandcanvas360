import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const footerColumns = [
  {
    title: 'Services',
    links: [
      { label: 'SEO Optimization', href: '/services/seo' },
      { label: 'PPC Advertising', href: '/services/ppc' },
      { label: 'Social Media Marketing', href: '/services/social-media-marketing' },
      { label: 'Content Marketing', href: '/services/content-marketing' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Email Marketing', href: '/services/email-marketing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Our Team', href: '/team' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-surface-deep/80">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5" aria-label="BrandCanvas360 home">
              <span className="font-heading text-2xl font-bold leading-none tracking-tight">
                <span className="text-white">BrandCanvas</span>
                <sup className="ml-0.5 text-xs font-bold text-primary">360</sup>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              We help ambitious brands turn digital marketing into their strongest growth channel — with
              data-driven SEO, paid media, content, and web strategies built to convert.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-300">
              <a href="mailto:hello@brandcanvas360.com" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> hello@brandcanvas360.com
              </a>
              <a href="tel:+918309582333" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> +91 83095 82333
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" /> 49-5-3, Nayani Square, Inner Ring Road, Payakapuram, Vijayawada-520015
              </span>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-ink-inverse"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-300 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Get Growth Tips
            </h3>
            <p className="mt-5 text-sm text-muted">
              Join 10,000+ marketers getting weekly strategies straight to their inbox.
            </p>
            <form className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-ink-inverse transition-colors duration-300 hover:bg-primaryHover"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} BrandCanvas360. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted">
            <Link href="/faq" className="transition-colors hover:text-primary">Privacy Policy</Link>
            <Link href="/faq" className="transition-colors hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
