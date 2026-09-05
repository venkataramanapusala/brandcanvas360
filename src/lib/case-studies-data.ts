export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  results: { label: string; value: string }[];
  challenge: string;
  strategy: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'nexatech-seo-growth',
    client: 'NexaTech',
    industry: 'B2B SaaS',
    title: 'Tripling Organic Leads for a B2B SaaS Platform',
    summary: 'A full SEO and content overhaul that took NexaTech from page 3 to top 3 rankings on core keywords.',
    results: [
      { label: 'Organic Traffic', value: '+218%' },
      { label: 'Qualified Leads', value: '3.1x' },
      { label: 'Keyword Rankings (Top 3)', value: '47' },
    ],
    challenge: 'NexaTech had strong product-market fit but almost no organic visibility, relying entirely on expensive paid acquisition.',
    strategy: [
      'Conducted a full technical SEO audit and resolved 120+ indexing and crawl issues.',
      'Built a keyword-mapped content hub targeting high-intent, bottom-of-funnel search terms.',
      'Executed a digital PR and link-building campaign to boost domain authority.',
    ],
    outcome: 'Within 9 months, NexaTech reduced paid acquisition costs by 34% while tripling qualified organic leads, creating a durable, compounding growth channel.',
  },
  {
    slug: 'pulsefit-paid-media',
    client: 'PulseFit',
    industry: 'Health & Fitness',
    title: 'Scaling PulseFit From INR 16L to INR 1.5 Cr in Monthly Ad Spend Profitably',
    summary: 'A full-funnel paid media strategy that let PulseFit scale spend 9x while improving ROAS.',
    results: [
      { label: 'Monthly Ad Spend', value: '9x Scale' },
      { label: 'ROAS', value: '4.6x' },
      { label: 'Cost Per Acquisition', value: '-38%' },
    ],
    challenge: 'PulseFit had a winning campaign but hit a scaling ceiling — every attempt to increase budget tanked performance.',
    strategy: [
      'Rebuilt campaign structure around a full-funnel approach: awareness, consideration, and conversion audiences.',
      'Introduced creative testing at scale, rotating 15+ ad variants weekly.',
      'Layered in retargeting and lookalike audiences based on high-LTV customer segments.',
    ],
    outcome: 'PulseFit now profitably spends 9x their original monthly budget with a stronger ROAS than when they started, unlocking national expansion.',
  },
  {
    slug: 'vantage-realty-local-seo',
    client: 'Vantage Realty',
    industry: 'Real Estate',
    title: 'Dominating Local Search for a Regional Real Estate Brokerage',
    summary: 'A local SEO and Google Business optimization strategy that made Vantage the top result in their market.',
    results: [
      { label: 'Local Pack Rankings', value: '#1' },
      { label: 'Website Inquiries', value: '+156%' },
      { label: 'Booked Consultations', value: '+92%' },
    ],
    challenge: 'Vantage Realty was invisible in local search results, losing consistently to national real estate portals.',
    strategy: [
      'Optimized and actively managed Google Business Profiles across all agent locations.',
      'Built location-specific landing pages targeting neighborhood-level search intent.',
      'Launched a review generation system that grew verified reviews from 40 to 310+.',
    ],
    outcome: 'Vantage Realty now ranks #1 in the local map pack for their top target neighborhoods and has become the go-to brokerage in their market.',
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
