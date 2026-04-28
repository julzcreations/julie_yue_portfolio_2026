export type ExperienceEntry = {
  title: string
  company: string
  period: string
  stack: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Frontend Web Developer',
    company: 'Galls LLC',
    period: 'Apr 2024 – present',
    stack: 'Next.js · TypeScript · Tailwind · Cloudflare Workers · BigCommerce Catalyst · Makeswift · Vanilla JS (ES6) · HTML5 · CSS3 · Algolia · GA4 · ParcelLab',
    bullets: [
      'Building reusable TypeScript / Next.js / Tailwind component patterns for cross-brand landing pages, chrome, and PDP surfaces on the new BigCommerce Catalyst storefront.',
      'Owning the frontend implementation for the first cross-brand rewards integration on the Catalyst storefront, plus a Makeswift-backed component layer designed for brand reuse during migration.',
      'Sole frontend on Galls + U.S. Patriot Tactical for ~9 months across two stretches; department ended 2025 ~$600K over revenue target with team-awarded performance bonus.',
      'A/B test win to 100% rollout: built EDD/EST delivery-date engine across PDP, cart, checkout, and order confirmation.',
      'Built location personalization framework using IP detection and user-entered ZIP codes to power localized displays, state-based keyword pages, and ecommerce personalization surfaces.',
      'Implemented accessibility fixes from UsableNet audits and debugged performance / page-quality issues using Chrome DevTools, Lighthouse, PageSpeed Insights, and Core Web Vitals reports.',
    ],
  },
  {
    title: 'Frontend Developer (Contract)',
    company: 'Lumen Tactical',
    period: 'Oct 2023 – Mar 2024',
    stack: 'Shopify · Liquid · JavaScript (ES6) · Figma',
    bullets: [
      'Migrated Longhorn Tactical from Volusion to Shopify as a full-site rebuild. Pattern was later reused for Nitecore Store, Lumen Tactical’s largest brand. Both stores live in production today.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'AssetMark',
    period: 'May 2022 – Oct 2023',
    stack: 'Ember · AJAX · JavaScript (ES6) · Bootstrap',
    bullets: [
      'Built SMS 2FA flagship feature; supported 300+ private labels and 6 enterprise clients across 5 web applications.',
      'Built advisor-facing capital market assumptions CRUD features with dashboard notifications on AssetMark’s largest application.',
      'Expanded language support to English + French for a Canadian user base.',
      'Supported testing / debugging workflows across Ember-based applications: JUnit-backed test environments, browser DevTools debugging, regression validation, accessibility-conscious enterprise UI standards.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Growth Acceleration Partners',
    period: 'Aug 2021 – May 2022',
    stack: 'JavaScript · React · Redux · WordPress · Apps Script · PHP · Git',
    bullets: [
      'Built a real-time staffing-cost dashboard for development staff and added SEO + content updates on the company WordPress site.',
    ],
  },
]

export const education = {
  degree: 'B.S. Computer Science',
  school: 'University of Texas at Dallas',
  period: '2017 – 2021',
}
