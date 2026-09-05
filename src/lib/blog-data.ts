export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'seo-trends-2026',
    title: '7 SEO Trends That Will Define Rankings in 2026',
    excerpt: 'From AI-generated search summaries to E-E-A-T signals, here\u2019s what actually moves the needle this year.',
    category: 'SEO',
    author: 'Sofia Marlow',
    date: 'Jul 12, 2026',
    readTime: '6 min read',
    content: [
      'Search is evolving faster than ever, and brands that treat SEO as a "set it and forget it" channel are losing ground daily.',
      'The biggest shift we\u2019re seeing is the rise of AI-generated search summaries, which means your content needs to be structured for extraction, not just readability.',
      'E-E-A-T (Experience, Expertise, Authoritativeness, Trust) signals are now table stakes. Publishing author bios, citing sources, and demonstrating first-hand experience are no longer optional.',
      'Technical performance still matters — Core Web Vitals continue to influence rankings, especially on mobile.',
      'The brands winning in 2026 are the ones combining technical excellence with genuinely useful, experience-backed content.',
    ],
  },
  {
    slug: 'ppc-budget-mistakes',
    title: '5 PPC Budget Mistakes That Are Costing You Conversions',
    excerpt: 'Most brands are leaving money on the table with these common paid media budgeting errors.',
    category: 'PPC',
    author: 'Jonah Whitfield',
    date: 'Jun 28, 2026',
    readTime: '5 min read',
    content: [
      'Too many brands set their PPC budget once and never revisit it — a mistake that compounds over time.',
      'Mistake #1: Spreading budget evenly across campaigns instead of doubling down on what converts.',
      'Mistake #2: Ignoring dayparting data and running ads at times with historically low conversion rates.',
      'Mistake #3: Failing to exclude poor-performing placements and audiences.',
      'Fixing just these three issues typically recovers 15-30% of wasted spend within the first month.',
    ],
  },
  {
    slug: 'social-media-engagement',
    title: 'How to Build a Social Following That Actually Buys',
    excerpt: 'Vanity metrics don\u2019t pay the bills. Here\u2019s how to build an audience that converts.',
    category: 'Social Media',
    author: 'Ava Chen',
    date: 'Jun 14, 2026',
    readTime: '7 min read',
    content: [
      'Follower count means nothing if your audience never converts. The goal is engaged, buying followers — not just big numbers.',
      'Start with a content mix: 40% educational, 30% brand storytelling, 30% promotional.',
      'Community management matters more than posting frequency — respond, engage, and build relationships in your comments.',
      'Track conversion-focused metrics like link clicks and DMs, not just likes and follows.',
    ],
  },
  {
    slug: 'content-marketing-roi',
    title: 'How to Measure the Real ROI of Content Marketing',
    excerpt: 'Content marketing ROI is measurable — if you\u2019re tracking the right metrics from the start.',
    category: 'Content Marketing',
    author: 'Ava Chen',
    date: 'May 30, 2026',
    readTime: '6 min read',
    content: [
      'Content marketing often gets deprioritized because its ROI feels harder to measure than paid ads — but that\u2019s a myth.',
      'Start by tagging content-driven conversions in your analytics with UTM parameters and attribution models.',
      'Track assisted conversions, not just last-click — content often plays a role earlier in the funnel.',
      'Calculate content ROI using: (Revenue Attributed - Content Cost) / Content Cost.',
    ],
  },
  {
    slug: 'website-conversion-rate',
    title: 'The Website Changes That Boosted Our Client\u2019s Conversion Rate by 42%',
    excerpt: 'A breakdown of the exact CRO changes that made the biggest impact.',
    category: 'Web Development',
    author: 'Marcus Delgado',
    date: 'May 18, 2026',
    readTime: '5 min read',
    content: [
      'Small, data-backed changes often outperform full website redesigns when it comes to conversion rate.',
      'We started with heatmap analysis to identify where users were dropping off before converting.',
      'Simplifying the primary CTA and reducing form fields from 8 to 4 alone increased conversions by 18%.',
      'Adding social proof (reviews, client logos) above the fold contributed another significant lift.',
    ],
  },
  {
    slug: 'email-automation-flows',
    title: 'The 4 Email Flows Every E-Commerce Brand Needs',
    excerpt: 'These automated flows run 24/7 and consistently outperform one-off email blasts.',
    category: 'Email Marketing',
    author: 'Isabelle Ross',
    date: 'Apr 22, 2026',
    readTime: '4 min read',
    content: [
      'Automated email flows consistently outperform one-off campaigns because they\u2019re triggered by real customer behavior.',
      'Flow #1: Welcome series — introduces new subscribers to your brand and drives the first purchase.',
      'Flow #2: Abandoned cart — recovers lost revenue from shoppers who didn\u2019t complete checkout.',
      'Flow #3: Post-purchase — nurtures repeat purchases and requests reviews.',
      'Flow #4: Win-back — re-engages customers who haven\u2019t purchased in 60+ days.',
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
