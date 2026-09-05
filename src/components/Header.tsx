'use client';

import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5" aria-label="BrandCanvas360 home">
      <img src="/brandcanvas-logo-v2.png" className="brand-logo-mark" alt="BrandCanvas360 logo" />
      <img src="/brandcanvas-title.png" className="brand-logo-title" alt="BrandCanvas360 Digital Marketing Agency" />
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative z-50 border-b border-slate-900/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          <Link href="/services" className="text-sm font-bold text-slate-900 transition-colors hover:text-brand-base">Services</Link>
          <Link href="/about" className="text-sm font-bold text-slate-900 transition-colors hover:text-brand-base">Why Us</Link>
          <Link href="/contact" className="text-sm font-bold text-slate-900 transition-colors hover:text-brand-base">Contact</Link>
        </nav>
        <Link href="/contact" className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-base to-accent px-7 py-3.5 text-sm font-extrabold text-white shadow-crimson-glow transition-transform hover:-translate-y-0.5 md:inline-flex">
          Get a Free Strategy <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <button type="button" onClick={() => setIsOpen(true)} className="rounded-xl p-2 text-slate-900 md:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <div className={`fixed inset-0 bg-slate-900/30 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={closeMenu} />
      <aside className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white p-6 shadow-2xl transition-transform md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <Logo />
          <button type="button" onClick={closeMenu} className="rounded-xl p-2 text-slate-900" aria-label="Close menu"><X className="h-6 w-6" /></button>
        </div>
        <nav className="mt-12 flex flex-col gap-6" aria-label="Mobile navigation">
          <Link href="/services" onClick={closeMenu} className="text-lg font-bold text-slate-900">Services</Link>
          <Link href="/about" onClick={closeMenu} className="text-lg font-bold text-slate-900">Why Us</Link>
          <Link href="/contact" onClick={closeMenu} className="text-lg font-bold text-slate-900">Contact</Link>
        </nav>
        <Link href="/contact" onClick={closeMenu} className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-base to-accent px-6 py-4 font-extrabold text-white">Get a Free Strategy <ArrowRight className="h-4 w-4" /></Link>
      </aside>
    </header>
  );
}
