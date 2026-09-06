'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/lib/services-data';

const budgetOptions = ['Under INR 1,50,000/mo', 'INR 1,50,000 - INR 4,00,000/mo', 'INR 4,00,000 - INR 8,00,000/mo', 'INR 8,00,000+/mo'];
const serviceOptions = [...services.map((service) => service.title), 'Full-Funnel Strategy'];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formTilt, setFormTilt] = useState('rotateX(0deg) rotateY(0deg)');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fields = [
      ['Name', formData.get('name')],
      ['Email', formData.get('email')],
      ['Phone', formData.get('phone')],
      ['Company', formData.get('company')],
      ['Service', formData.get('service')],
      ['Budget', formData.get('budget')],
      ['Goals', formData.get('message')],
    ]
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`)
      .join('\n');

    window.location.href = `mailto:hello@brandcanvas360.com?subject=${encodeURIComponent(
      'Free marketing audit request'
    )}&body=${encodeURIComponent(fields)}`;
    setSubmitted(true);
  };

  const handleFormPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5;
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -5;
    setFormTilt(`rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`);
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
          <div className="contact-info-panel lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-white">Contact Information</h2>
            <p className="mt-3 text-sm text-muted">
              Prefer to reach out directly? Use any of the channels below and a member of our team
              will respond promptly.
            </p>
            <div className="mt-8 flex flex-col gap-6">
              <div className="contact-info-item flex items-start gap-4">
                <div className="contact-info-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <a href="mailto:hello@brandcanvas360.com" className="text-sm text-muted transition-colors hover:text-primary">
                    hello@brandcanvas360.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item flex items-start gap-4">
                <div className="contact-info-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Phone</p>
                  <a href="tel:+918309582333" className="text-sm text-muted transition-colors hover:text-primary">
                    +91 83095 82333
                  </a>
                </div>
              </div>
              <div className="contact-info-item flex items-start gap-4">
                <div className="contact-info-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Office</p>
                  <p className="text-sm text-muted">49-5-3, Nayani Square, Inner Ring Road, Payakapuram, Vijayawada-520015</p>
                </div>
              </div>
              <div className="contact-info-item flex items-start gap-4">
                <div className="contact-info-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Business Hours</p>
                  <p className="text-sm text-muted">Mon - Fri, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-perspective lg:col-span-3">
            <div
              className="contact-form-card rounded-3xl p-8 sm:p-10"
              onPointerMove={handleFormPointerMove}
              onPointerLeave={() => setFormTilt('rotateX(0deg) rotateY(0deg)')}
              style={{ transform: formTilt }}
            >
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <CheckCircle2 className="h-14 w-14 text-primary" />
                  <h3 className="mt-5 font-heading text-2xl font-bold text-white">Thank You!</h3>
                  <p className="mt-3 max-w-sm text-sm text-muted">
                    Your email app should now be open with your request. Send the email to have a
                    BrandCanvas360 strategist follow up within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-fields flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="contact-form-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="contact-form-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary"
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
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="contact-form-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-200">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Acme Inc."
                        className="contact-form-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-200">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="contact-form-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
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
                      name="budget"
                      className="contact-form-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-primary"
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
                      name="message"
                      rows={4}
                      placeholder="What are you hoping to achieve in the next 6-12 months?"
                      className="contact-form-input w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-primary"
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
