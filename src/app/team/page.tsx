import { Linkedin, Twitter } from 'lucide-react';
import CTASection from '@/components/CTASection';

export const metadata = {
  title: 'Our Team | BrandCanvas360',
  description: 'Meet the strategists, media buyers, and creatives behind BrandCanvas360\u2019s client results.',
};

const team = [
  { name: 'Daniel Cortez', role: 'CEO & Co-Founder', bio: 'Former growth lead at a Y-Combinator startup, obsessed with performance marketing.' },
  { name: 'Sofia Marlow', role: 'Head of SEO', bio: '10+ years driving organic growth for e-commerce and SaaS brands.' },
  { name: 'Jonah Whitfield', role: 'Head of Paid Media', bio: 'Manages INR 85 Cr+ in annual ad spend across Google, Meta, and TikTok.' },
  { name: 'Ava Chen', role: 'Creative Director', bio: 'Leads content and design, blending brand storytelling with conversion design.' },
  { name: 'Marcus Delgado', role: 'Lead Web Developer', bio: 'Builds fast, conversion-focused websites using modern frameworks.' },
  { name: 'Isabelle Ross', role: 'Client Success Lead', bio: 'Ensures every client partnership stays transparent, proactive, and results-driven.' },
];

export default function TeamPage() {
  return (
    <main>
      <section className="relative section-top-glow overflow-hidden bg-dark py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Team</span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            The Experts Behind <span className="text-gradient">Your Growth</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            A senior team of strategists, media buyers, writers, and developers — all dedicated to
            turning your marketing budget into measurable revenue.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-dark py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="card-glass rounded-2xl p-8 text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary via-accent to-gold" />
                <h3 className="mt-5 font-heading text-lg font-bold text-white">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
                <div className="mt-5 flex items-center justify-center gap-3">
                  <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-primary hover:text-primary">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-primary hover:text-primary">
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want This Team Working on Your Growth?"
        subtitle="Let's put our strategists, media buyers, and creatives to work for your brand."
      />
    </main>
  );
}
