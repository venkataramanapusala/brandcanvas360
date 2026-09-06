import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata = {
  ...createPageMetadata({
    title: 'Terms of Service | BrandCanvas360',
    description: 'Terms governing the use of the BrandCanvas360 website.',
    path: '/terms-of-service',
  }),
  title: 'Terms of Service | BrandCanvas360',
  description: 'Terms governing the use of the BrandCanvas360 website.',
};

export default function TermsOfServicePage() {
  return (
    <main>
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">BrandCanvas360</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Terms of Service</h1>
          <p className="mt-6 text-base text-slate-300">Last updated: September 6, 2026</p>
        </div>
      </section>
      <section className="bg-dark py-16 sm:py-20">
        <article className="mx-auto max-w-4xl space-y-8 px-6 text-slate-300 lg:px-8">
          <p>By using this website, you agree to use it lawfully and not interfere with its operation or security.</p>
          <div><h2 className="font-heading text-2xl font-bold text-white">Information on this site</h2><p className="mt-3">Website content is provided for general information and does not create a client relationship. Service scope, pricing, deliverables, and timelines are agreed in writing for each engagement.</p></div>
          <div><h2 className="font-heading text-2xl font-bold text-white">Contact</h2><p className="mt-3">Questions about these terms can be sent to <a className="text-primary hover:text-primaryHover" href="mailto:hello@brandcanvas360.com">hello@brandcanvas360.com</a>.</p></div>
          <Link href="/contact" className="inline-flex font-semibold text-primary hover:text-primaryHover">Contact BrandCanvas360</Link>
        </article>
      </section>
    </main>
  );
}