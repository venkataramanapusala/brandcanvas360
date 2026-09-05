import { Search, MousePointerClick, Share2, PenTool, Code2, Mail, type LucideIcon } from 'lucide-react';

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  desc: string;
  points: string[];
  heroText: string;
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'seo',
    icon: Search,
    title: 'Search Engine Optimization',
    shortTitle: 'SEO',
    desc: 'Climb the rankings and capture high-intent organic traffic with technical SEO, content, and link building.',
    heroText: 'Rank higher, get found first, and turn search traffic into your most predictable, lowest-cost acquisition channel.',
    points: ['Technical SEO audits', 'Keyword & content strategy', 'Authority link building', 'Local SEO & Google Business'],
    process: [
      { title: 'Technical Audit', desc: 'We crawl your site to fix indexing, speed, and structural issues holding back rankings.' },
      { title: 'Keyword Strategy', desc: 'We map high-intent keywords to content that matches how your buyers actually search.' },
      { title: 'On-Page & Content', desc: 'We optimize and publish content engineered to rank and convert.' },
      { title: 'Authority Building', desc: 'We earn quality backlinks and citations that compound your domain authority.' },
    ],
    faqs: [
      { q: 'How long until we see SEO results?', a: 'Most clients see meaningful ranking movement within 90 days, with compounding growth over 6-12 months.' },
      { q: 'Do you guarantee page-one rankings?', a: 'No ethical SEO agency can guarantee specific rankings, but we set clear, trackable KPIs and report on progress monthly.' },
    ],
  },
  {
    slug: 'ppc',
    icon: MousePointerClick,
    title: 'Pay-Per-Click Advertising',
    shortTitle: 'PPC',
    desc: 'Maximize ROAS with precision-targeted campaigns across Google, Bing, and Meta.',
    heroText: 'High-intent paid campaigns engineered for maximum ROAS — every rupee tracked, tested, and optimized.',
    points: ['Google & Bing Ads management', 'Meta & Instagram ads', 'Conversion rate optimization', 'Retargeting & remarketing'],
    process: [
      { title: 'Account Audit', desc: 'We analyze your existing spend and identify wasted budget and missed opportunities.' },
      { title: 'Campaign Build', desc: 'We build targeted campaigns aligned to your highest-value customer segments.' },
      { title: 'Creative & Copy', desc: 'We craft ad creative and copy proven to stop the scroll and drive clicks.' },
      { title: 'Optimize & Scale', desc: 'We continuously test and reallocate budget toward what converts best.' },
    ],
    faqs: [
      { q: 'What is the minimum ad budget?', a: 'We typically recommend a minimum of INR 1,50,000/month in ad spend to gather meaningful data quickly.' },
      { q: 'Which platforms do you manage?', a: 'Google Ads, Microsoft/Bing Ads, Meta (Facebook & Instagram), and LinkedIn Ads.' },
    ],
  },
  {
    slug: 'social-media-marketing',
    icon: Share2,
    title: 'Social Media Marketing',
    shortTitle: 'Social Media',
    desc: 'Grow an engaged community across every platform that matters to your audience.',
    heroText: 'Build an engaged, loyal community and turn followers into repeat, paying customers.',
    points: ['Content calendars & creative', 'Community management', 'Influencer partnerships', 'Paid social campaigns'],
    process: [
      { title: 'Audience Research', desc: 'We identify where your customers spend time and what content resonates.' },
      { title: 'Content Planning', desc: 'We build a content calendar mixing brand, education, and promotional posts.' },
      { title: 'Creative Production', desc: 'Our designers and videographers produce scroll-stopping creative.' },
      { title: 'Community & Reporting', desc: 'We manage engagement and report on growth and conversion metrics monthly.' },
    ],
    faqs: [
      { q: 'Which platforms do you support?', a: 'Instagram, Facebook, TikTok, LinkedIn, Pinterest, and X (Twitter).' },
      { q: 'Do you create the content or do we?', a: 'Our in-house creative team produces all content, with your brand feedback built into every cycle.' },
    ],
  },
  {
    slug: 'content-marketing',
    icon: PenTool,
    title: 'Content Marketing',
    shortTitle: 'Content Marketing',
    desc: 'Story-driven content that builds authority, trust, and long-term organic growth.',
    heroText: 'Content that builds authority and moves buyers down the funnel — from first read to first purchase.',
    points: ['Blog & article writing', 'Video & visual content', 'Lead-magnet creation', 'Content distribution'],
    process: [
      { title: 'Content Audit', desc: 'We assess existing content and identify gaps against buyer questions and keywords.' },
      { title: 'Editorial Calendar', desc: 'We plan a consistent publishing cadence mapped to your funnel stages.' },
      { title: 'Production', desc: 'Expert writers and designers create content that reflects your brand voice.' },
      { title: 'Distribution', desc: 'We promote every asset across email, social, and paid channels for maximum reach.' },
    ],
    faqs: [
      { q: 'Do you write in our brand voice?', a: 'Yes — every engagement starts with a brand voice & style guide workshop.' },
      { q: 'What formats do you produce?', a: 'Blog posts, guides, case studies, video scripts, infographics, and lead magnets.' },
    ],
  },
  {
    slug: 'web-development',
    icon: Code2,
    title: 'Web Development',
    shortTitle: 'Web Development',
    desc: 'Fast, modern, conversion-first websites and landing pages that turn visitors into leads.',
    heroText: 'Websites and landing pages engineered for speed, SEO, and conversion from the first pixel.',
    points: ['Custom website design', 'Landing page development', 'Conversion rate optimization', 'Site speed & performance'],
    process: [
      { title: 'Discovery & UX', desc: 'We map your customer journey and define the ideal site structure.' },
      { title: 'Design', desc: 'Our designers craft on-brand, conversion-focused layouts.' },
      { title: 'Development', desc: 'We build fast, responsive, SEO-friendly sites using modern frameworks.' },
      { title: 'Launch & Optimize', desc: 'We monitor performance and run CRO tests post-launch.' },
    ],
    faqs: [
      { q: 'How long does a website build take?', a: 'Most sites launch within 4-8 weeks depending on scope and content readiness.' },
      { q: 'Do you offer ongoing maintenance?', a: 'Yes, we offer monthly maintenance and optimization retainers post-launch.' },
    ],
  },
  {
    slug: 'email-marketing',
    icon: Mail,
    title: 'Email Marketing',
    shortTitle: 'Email Marketing',
    desc: 'Automated nurture flows and campaigns that keep leads warm and pipelines full.',
    heroText: 'Automated flows and campaigns that nurture leads and keep your pipeline consistently full.',
    points: ['Automated drip campaigns', 'List segmentation', 'A/B tested copy & design', 'Deliverability optimization'],
    process: [
      { title: 'List & Data Audit', desc: 'We clean and segment your list for maximum deliverability and relevance.' },
      { title: 'Flow Strategy', desc: 'We design welcome, nurture, and win-back flows mapped to your funnel.' },
      { title: 'Copy & Design', desc: 'We write and design emails that get opened, read, and clicked.' },
      { title: 'Test & Optimize', desc: 'We A/B test subject lines, content, and send times continuously.' },
    ],
    faqs: [
      { q: 'What email platforms do you work with?', a: 'Klaviyo, Mailchimp, HubSpot, ActiveCampaign, and most major ESPs.' },
      { q: 'Can you help grow our list too?', a: 'Yes, we build lead magnets and opt-in campaigns to grow your list alongside sending.' },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
