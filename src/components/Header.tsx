'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

type DropdownItem = { label: string; href: string; desc?: string };
type MenuItem = { label: string; href?: string; dropdown?: DropdownItem[] };

const menuItems: MenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    dropdown: [
      { label: 'SEO Optimization', href: '/services/seo', desc: 'Rank #1 on Google' },
      { label: 'PPC Advertising', href: '/services/ppc', desc: 'Paid media that converts' },
      { label: 'Social Media', href: '/services/social-media-marketing', desc: 'Build your audience' },
      { label: 'Content Marketing', href: '/services/content-marketing', desc: 'Stories that sell' },
      { label: 'Web Development', href: '/services/web-development', desc: 'Convert-first websites' },
      { label: 'Email Marketing', href: '/services/email-marketing', desc: 'Nurture & automate' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Resources',
    dropdown: [
      { label: 'Blog', href: '/blog', desc: 'Tips & strategies' },
      { label: 'Our Team', href: '/team', desc: 'Meet the experts' },
      { label: 'FAQ', href: '/faq', desc: 'Common questions' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3.5 sm:gap-4" aria-label="BrandCanvas360 home">
      <img src="/brandcanvas-logo-v2.png" className="brand-logo-mark" alt="" aria-hidden="true" />
      <img src="/brandcanvas-title.png" className="brand-logo-title" alt="BrandCanvas360 Digital Marketing Agency" />
    </Link>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleAccordion = (label: string) => {
    setOpenAccordion((current) => (current === label ? null : label));
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'border-b border-slate-200 bg-white/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-3 lg:px-8 xl:gap-4 xl:py-4 2xl:gap-6">
        <Logo />

        <nav className="hidden 2xl:flex 2xl:items-center 2xl:gap-6">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-primary"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full w-72 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block rounded-xl px-4 py-2.5 transition-colors duration-300 hover:bg-white/5"
                    >
                      <span className="block text-sm font-semibold text-slate-900">{sub.label}</span>
                      {sub.desc && <span className="block text-xs text-muted">{sub.desc}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? '/'}
                className="whitespace-nowrap text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-primary"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden shrink-0 2xl:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2.5 text-sm font-extrabold leading-none text-ink-inverse shadow-crimson-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primaryHover focus:outline-none focus:ring-4 focus:ring-primary/30 2xl:px-5 2xl:py-3"
          >
            Get Free Audit
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-900 2xl:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-300 2xl:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-surface-base shadow-2xl transition-transform duration-300 ease-in-out 2xl:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <Logo />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-900"
            aria-label="Close menu"
          >
            <X className="h-7 w-7" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="flex flex-col gap-1">
            {menuItems.map((item) =>
              item.dropdown ? (
                <li key={item.label} className="border-b border-white/5 py-1">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.label)}
                    className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-slate-900"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        openAccordion === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      openAccordion === item.label ? 'grid-rows-[1fr] pb-3 opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="flex flex-col gap-1 overflow-hidden pl-4">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:bg-white/5 hover:text-primary"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.label} className="border-b border-white/5 py-1">
                  <Link
                    href={item.href ?? '/'}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-base font-medium text-slate-900"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="border-t border-white/10 px-6 py-6">
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-ink-inverse transition-colors duration-300 hover:bg-primaryHover"
          >
            Get Free Audit
          </Link>
        </div>
      </div>
    </header>
  );
}
