import {
  BarChart3,
  Code2,
  Mail,
  MessageCircle,
  MousePointerClick,
  Palette,
  PenTool,
  Search,
  Share2,
  type LucideIcon,
} from 'lucide-react';

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

const serviceCatalog: Service[] = [
  {
    slug: 'branding-design',
    icon: Palette,
    title: 'Branding & Design',
    shortTitle: 'Branding & Design',
    desc: 'Build a distinctive brand system and creative direction that earns attention and trust.',
    heroText: 'Turn what makes your business different into a clear, memorable brand your ideal customers recognize and choose.',
    points: ['Brand strategy & positioning', 'Visual identity systems', 'Campaign creative direction', 'Brand guidelines & templates'],
    process: [
      { title: 'Brand Discovery', desc: 'We uncover your market position, customer motivations, and strongest points of difference.' },
      { title: 'Strategy', desc: 'We define the messaging, personality, and positioning that give your brand a focused point of view.' },
      { title: 'Identity Design', desc: 'We create a cohesive visual system built to work across every customer touchpoint.' },
      { title: 'Launch Toolkit', desc: 'We deliver practical guidelines and templates your team can use consistently from day one.' },
    ],
    faqs: [
      { q: 'Can you refresh an existing brand?', a: 'Yes. We can evolve an established identity while preserving the recognition and equity you have already built.' },
      { q: 'What will we receive at the end?', a: 'You receive your brand strategy, identity assets, usage guidelines, and agreed campaign or social templates.' },
    ],
  },
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
    slug: 'performance-marketing',
    icon: MousePointerClick,
    title: 'Performance Marketing',
    shortTitle: 'Performance Marketing',
    desc: 'Scale profitable customer acquisition with a measurable, full-funnel media strategy.',
    heroText: 'Make every marketing rupee accountable with performance programs built to acquire, convert, and scale profitably.',
    points: ['Full-funnel paid media strategy', 'Channel mix & budget planning', 'Conversion rate optimization', 'Customer acquisition & ROAS tracking'],
    process: [
      { title: 'Growth Audit', desc: 'We assess your acquisition funnel, economics, and current channel performance.' },
      { title: 'Media Plan', desc: 'We build a channel mix and budget model tied to your commercial goals.' },
      { title: 'Launch & Learn', desc: 'We activate campaigns, creative tests, and landing-page experiments quickly.' },
      { title: 'Optimize & Scale', desc: 'We continuously test and reallocate budget toward what converts best.' },
    ],
    faqs: [
      { q: 'How is performance marketing different from PPC?', a: 'PPC focuses on paid search campaigns. Performance marketing connects paid media, creative, conversion rate optimization, and attribution across the full acquisition funnel.' },
      { q: 'Which metrics do you optimize for?', a: 'We align reporting with your goals, typically cost per lead or acquisition, conversion rate, revenue, ROAS, and customer lifetime value.' },
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
  {
    slug: 'whatsapp-automation',
    icon: MessageCircle,
    title: 'WhatsApp Automation',
    shortTitle: 'WhatsApp Automation',
    desc: 'Convert and retain more customers with timely, personalized conversations at scale.',
    heroText: 'Meet customers where they are with automated WhatsApp journeys that feel useful, personal, and ready to convert.',
    points: ['WhatsApp Business API setup', 'Lead capture & qualification flows', 'Abandoned-cart & reactivation journeys', 'CRM and campaign integrations'],
    process: [
      { title: 'Journey Mapping', desc: 'We map the high-value moments where a WhatsApp message can move customers forward.' },
      { title: 'Flow Design', desc: 'We write and design compliant conversation flows around your brand voice and customer needs.' },
      { title: 'Integration', desc: 'We connect WhatsApp with your CRM, store, and lead sources for a continuous customer experience.' },
      { title: 'Optimize', desc: 'We measure replies, conversions, and opt-outs to improve every automation over time.' },
    ],
    faqs: [
      { q: 'Can WhatsApp integrate with our CRM?', a: 'Yes. We can connect approved WhatsApp platforms to leading CRMs, ecommerce systems, and lead-capture tools.' },
      { q: 'Will the messages comply with WhatsApp policies?', a: 'Yes. We build opt-in and template-based messaging flows around WhatsApp Business policies and customer consent.' },
    ],
  },
  {
    slug: 'analytics-reporting',
    icon: BarChart3,
    title: 'Analytics & Reporting',
    shortTitle: 'Analytics & Reporting',
    desc: 'Turn disconnected marketing data into clear reporting that drives smarter decisions.',
    heroText: 'Know which channels create real business growth with reliable measurement, decision-ready dashboards, and useful insights.',
    points: ['GA4 & conversion tracking', 'Marketing dashboard setup', 'Attribution & funnel analysis', 'Monthly insight reporting'],
    process: [
      { title: 'Measurement Audit', desc: 'We identify tracking gaps, inconsistent definitions, and reporting blind spots.' },
      { title: 'Tracking Setup', desc: 'We configure clean conversion events and connect the platforms that matter to your funnel.' },
      { title: 'Dashboard Build', desc: 'We create simple dashboards that bring acquisition, conversion, and revenue signals together.' },
      { title: 'Insights & Action', desc: 'We translate the data into priorities your team can act on each month.' },
    ],
    faqs: [
      { q: 'Can you work with our existing reporting tools?', a: 'Yes. We work with GA4, ad platforms, CRM data, Looker Studio, and other widely used reporting tools.' },
      { q: 'What will our dashboard show?', a: 'It is tailored to your goals, usually covering channel performance, spend, leads, conversion rates, revenue, and return on investment.' },
    ],
  },
];

const serviceOrder = [
  'branding-design',
  'web-development',
  'seo',
  'performance-marketing',
  'social-media-marketing',
  'content-marketing',
  'email-marketing',
  'whatsapp-automation',
  'analytics-reporting',
];

export const services = serviceOrder.map((slug) =>
  serviceCatalog.find((service) => service.slug === slug)!
);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
