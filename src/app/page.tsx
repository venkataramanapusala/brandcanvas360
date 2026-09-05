import Link from 'next/link';
import { ArrowRight, Check, Target, TrendingUp, Users } from 'lucide-react';
import CTASection from '@/components/CTASection';

const services = [
  { title: 'Performance Marketing', description: 'Campaigns built to turn attention into measurable revenue.', icon: TrendingUp },
  { title: 'Creative Content', description: 'Distinctive stories and visuals that make your brand remembered.', icon: Target },
  { title: 'Growth Strategy', description: 'A clear, practical roadmap for your next stage of growth.', icon: Users },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative border-b border-slate-900/5">
        <div className="mx-auto grid min-h-[calc(100vh-92px)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-[#fff0eb] px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-brand-base">360° Digital Growth Partner</span>
            <h1 className="mt-8 max-w-xl font-heading text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-[5.25rem]">Turn your brand into a <span className="text-gradient">growth engine.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-500 sm:text-xl">BrandCanvas360 helps businesses attract attention, build trust and generate measurable growth through smart digital marketing, creative content and performance-driven strategies.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-base to-accent px-7 py-4 font-extrabold text-white shadow-crimson-glow transition-transform hover:-translate-y-0.5">Let&apos;s Grow Together <ArrowRight className="h-5 w-5" /></Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-extrabold text-slate-900 transition-colors hover:border-brand-base hover:text-brand-base">Explore Services</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl lg:mt-8">
            <div className="absolute -inset-10 rounded-full bg-[#ffe5d8] blur-3xl" aria-hidden="true" />
            <div className="relative rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_24px_80px_rgba(103,39,24,0.12)] sm:p-10">
              <div className="flex min-h-[265px] flex-col justify-between">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-7">
                  <img src="/brandcanvas-logo-v2.png" className="h-12 w-12 object-contain" alt="BrandCanvas360 logo" />
                  <div><p className="font-heading text-lg font-extrabold text-slate-950">BrandCanvas360</p><p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-base">Digital Growth Partner</p></div>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-5">
                  {[['360°', 'Growth Approach'], ['1:1', 'Strategy'], ['ROI', 'Focused']].map(([value, label]) => (
                    <div key={label} className="rounded-2xl bg-slate-50 px-2 py-7 text-center sm:px-4"><p className="font-heading text-2xl font-extrabold text-slate-950 sm:text-3xl">{value}</p><p className="mt-3 text-xs font-medium text-slate-500 sm:text-sm">{label}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl"><p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-base">What we do</p><h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Strategy that makes growth feel simple.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map(({ title, description, icon: Icon }) => <article key={title} className="rounded-3xl border border-slate-200 bg-[#fffaf7] p-7 transition-transform hover:-translate-y-1"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0eb] text-brand-base"><Icon className="h-6 w-6" /></div><h3 className="mt-6 font-heading text-xl font-extrabold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-500">{description}</p></article>)}
          </div>
          <div className="mt-16 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">{['Clear strategy', 'Hands-on execution', 'Growth you can measure'].map((item) => <p key={item} className="flex items-center gap-3 font-bold text-slate-700"><Check className="h-5 w-5 text-brand-base" />{item}</p>)}</div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
