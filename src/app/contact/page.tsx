'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const budgetOptions = ['Under INR 1,50,000/mo', 'INR 1,50,000 - INR 4,00,000/mo', 'INR 4,00,000 - INR 8,00,000/mo', 'INR 8,00,000+/mo'];
const serviceOptions = ['SEO', 'PPC Advertising', 'Social Media Marketing', 'Content Marketing', 'Web Development', 'Email Marketing', 'Full-Funnel Strategy'];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Get In Touch</span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Let&apos;s Build Your <span className="text-gradient">Growth Plan</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            Tell us about your business and goals — we&apos;ll follow up within one business day with
            a free, no-obligation marketing audit.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-white">Contact Information</h2>
            <p className="mt-3 text-sm text-muted">
              Prefer to reach out directly? Use any of the channels below and a member of our team
              will respond promptly.
            </p>
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <a href="mailto:hello@brandcanvas360.com" className="text-sm text-muted transition-colors hover:text-primary">
                    hello@brandcanvas360.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Phone</p>
                  <a href="tel:+918309582333" className="text-sm text-muted transition-colors hover:text-primary">
                    +91 83095 82333
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Office</p>
                  <p className="text-sm text-muted">49-5-3, Nayani Square, Inner Ring Road, Payakapuram, Vijayawada-520015</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Business Hours</p>
                  <p className="text-sm text-muted">Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card-glass rounded-3xl p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 className="h-14 w-14 text-primary" />
                  <h3 className="mt-5 font-heading text-2xl font-bold text-white">Thank You!</h3>
                  <p className="mt-3 max-w-sm text-sm text-muted">
                    Your free audit request has been received. A BrandCanvas360 strategist will reach
                    out within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-200">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-200">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Acme Inc."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-200">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-slate-500">Select a service</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service} className="bg-darkCard text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="mb-2 block text-sm font-medium text-slate-200">
                      Monthly Marketing Budget
                    </label>
                    <select
                      id="budget"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-slate-500">Select a budget range</option>
                      {budgetOptions.map((budget) => (
                        <option key={budget} value={budget} className="bg-darkCard text-white">
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                      Tell Us About Your Goals
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="What are you hoping to achieve in the next 6-12 months?"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-ink-inverse shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primaryHover hover:shadow-primary/50"
                  >
                    Get My Free Audit
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-muted">
                    By submitting, you agree to be contacted by BrandCanvas360. We never share your
                    information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-darkCard py-16">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Location</p>
          <div className="mt-6 h-72 w-full overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="BrandCanvas360 Office Location"
              className="h-full w-full"
              loading="lazy"
              src="https://www.google.com/maps?q=49-5-3%2C%20Nayani%20Square%2C%20Inner%20Ring%20Road%2C%20Payakapuram%2C%20Vijayawada-520015&output=embed"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
