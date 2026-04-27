export type ExperienceEntry = {
  title: string
  company: string
  period: string
  stack: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Galls LLC',
    period: 'Feb 2026 – present',
    stack: 'Next.js · TypeScript · Cloudflare Workers · BigCommerce · Catalyst · Makeswift · Tailwind',
    bullets: [
      'Leading a component-system migration across 4 BigCommerce sites — PDPs, static pages, home pages — on a shared Catalyst codebase.',
      'Integrating an in-flight loyalty program (AI-assisted frontend integration), with custom-checkout spec doc handed off to a peer dev.',
      'Coordinating with the BigCommerce team’s lead developer on the legacy-platform sites, design lead, and engineering manager on rollout sequencing.',
    ],
  },
  {
    title: 'Frontend Web Developer',
    company: 'Galls LLC',
    period: 'Apr 2024 – Feb 2026',
    stack: 'Vanilla JS · BEM CSS · GQ tokens · Algolia · Bazaarvoice · Bluecore · ParcelLab · Google Apps Script',
    bullets: [
      'Sole frontend on Galls + U.S. Patriot Tactical for ~9 months across two stretches (H2 2025, Jan–Mar 2026); department ended 2025 ~$600K over revenue target with team-awarded performance bonus.',
      'Built location-aware personalization framework (IPWhoIs + PositionStack dual-API) powering ZIP-based content, PFAS state restrictions, and EDD/EST-driven shopping. ESD/EDD A/B test won → 100% rollout.',
      'Shipped Algolia Agent Studio AI shopping drawer (built and staged; rollout held by business pending accuracy review). AI-per-PDP recommendations UI in production.',
      'Migrated ~140K Bazaarvoice reviews from Turnto across Galls + USPT. Built Apps Script + Sheets configurator for the homepage hero. Designed cost-driven migration of recommendations from Algolia to internal GQ APIs.',
    ],
  },
  {
    title: 'Frontend Developer (Contract)',
    company: 'Lumen Tactical',
    period: 'Oct 2023 – Mar 2024',
    stack: 'Shopify · Liquid · JavaScript · HTML · CSS · Figma',
    bullets: [
      'Migrated Longhorn Tactical from Volusion to Shopify as a full-site rebuild — built the pattern (product structure, theme architecture, deployment flow) later reused by Lumen to migrate Nitecore Store, their largest brand.',
      'A year after the contract ended, Lumen reached out: revenue was growing and the team was happier with the newer framework — cleaner data, easier tooling. Both stores live in production today.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'AssetMark',
    period: 'May 2022 – Oct 2023',
    stack: 'Ember · AJAX · JavaScript · Bootstrap · Git',
    bullets: [
      'Built 2FA via SMS verification across enterprise financial applications.',
      'Expanded language support to English + French for a Canadian user base; supported 300+ private labels and 6 enterprise clients.',
      'Automated the generation of 50+ settings for custom advisor reports.',
      'Built API-driven UI features supporting real-time data updates for advisor workflows.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Growth Acceleration Partners',
    period: 'Aug 2021 – May 2022',
    stack: 'JavaScript · React · Redux · WordPress · Git',
    bullets: [
      'Built a real-time staffing-cost dashboard for development staff across geographies.',
      'Created features and connected APIs for an employee profile dashboard.',
      'Implemented SEO + content updates on the company WordPress site.',
    ],
  },
]

export const education = {
  degree: 'B.S. Computer Science',
  school: 'University of Texas at Dallas',
  period: '2017 – 2021',
}
