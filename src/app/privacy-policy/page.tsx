import Link from 'next/link';
import { createPageMetadata } from '@/lib/seo';

export const metadata = {
  ...createPageMetadata({
    title: 'Privacy Policy | BrandCanvas360',
    description: 'How BrandCanvas360 handles personal information submitted through this website.',
    path: '/privacy-policy',
  }),
  title: 'Privacy Policy | BrandCanvas360',
  description: 'How BrandCanvas360 handles personal information submitted through this website.',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">BrandCanvas360</p>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Privacy Policy</h1>
          <p className="mt-6 text-base text-slate-300">Last updated: September 6, 2026</p>
        </div>
      </section>
      <section className="bg-dark py-16 sm:py-20">
        <article className="mx-auto max-w-4xl space-y-8 px-6 text-slate-300 lg:px-8">
          <p>We collect the information you choose to provide when contacting us, such as your name, email address, phone number, company details, and marketing goals.</p>
          <div><h2 className="font-heading text-2xl font-bold text-white">How we use your information</h2><p className="mt-3">We use this information to respond to enquiries, provide requested services, and communicate about BrandCanvas360. We do not sell personal information.</p></div>
          <div><h2 className="font-heading text-2xl font-bold text-white">Contact</h2><p className="mt-3">For privacy questions or requests, email <a className="text-primary hover:text-primaryHover" href="mailto:hello@brandcanvas360.com">hello@brandcanvas360.com</a>.</p></div>
          <Link href="/contact" className="inline-flex font-semibold text-primary hover:text-primaryHover">Contact BrandCanvas360</Link>
        </article>
      </section>
    </main>
  );
}