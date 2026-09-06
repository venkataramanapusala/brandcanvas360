'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { services } from '@/lib/services-data';

const footerColumns = [
  {
    title: 'Services',
    links: services.map((service) => ({ label: service.title, href: `/services/${service.slug}` })),
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
  const [subscriptionSubmitted, setSubscriptionSubmitted] = useState(false);

  const handleSubscriptionSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get('email');
    window.location.href = `mailto:hello@brandcanvas360.com?subject=${encodeURIComponent(
      'Growth tips newsletter subscription'
    )}&body=${encodeURIComponent(`Please add this email to the newsletter: ${email}`)}`;
    setSubscriptionSubmitted(true);
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3" aria-label="BrandCanvas360 home">
              <img src="/brandcanvas-logo-v2.png" className="h-12 w-12 shrink-0" alt="" aria-hidden="true" />
              <img
                src="/brandcanvas-title.png"
                className="h-auto w-52 max-w-[70vw]"
                alt="BrandCanvas360 Digital Marketing Agency"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-600">
              We help ambitious brands turn digital marketing into their strongest growth channel — with
              data-driven SEO, paid media, content, and web strategies built to convert.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-600">
              <a href="mailto:hello@brandcanvas360.com" className="flex items-center gap-3 transition-colors hover:text-red-700">
                <Mail className="h-4 w-4 text-primary" /> hello@brandcanvas360.com
              </a>
              <a href="tel:+918309582333" className="flex items-center gap-3 transition-colors hover:text-red-700">
                <Phone className="h-4 w-4 text-primary" /> +91 83095 82333
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" /> 49-5-3, Nayani Square, Inner Ring Road, Payakapuram, Vijayawada-520015
              </span>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-900">
                {column.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors duration-300 hover:text-red-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-900">
              Get Growth Tips
            </h3>
            <p className="mt-5 text-sm text-slate-600">
              Join 10,000+ marketers getting weekly strategies straight to their inbox.
            </p>
            <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubscriptionSubmit}>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition-colors focus:border-primary"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-ink-inverse transition-colors duration-300 hover:bg-primaryHover"
              >
                Subscribe
              </button>
            </form>
            {subscriptionSubmitted && (
              <p className="mt-3 text-sm text-slate-600">
                Your email app should now be open. Send the message to complete your subscription.
              </p>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} BrandCanvas360. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <Link href="/privacy-policy" className="transition-colors hover:text-red-700">Privacy Policy</Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-red-700">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
