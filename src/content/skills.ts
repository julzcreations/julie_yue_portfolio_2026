export type SkillCategory = {
  title: string
  blurb: string
  items: string[]
  proof: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & orchestration',
    blurb: 'Multi-model pipelines, multi-provider stacks, production AI with cost ceilings.',
    items: [
      'Anthropic SDK (Opus + Sonnet + Haiku)',
      'OpenAI SDK (GPT-5)',
      'MCP server authoring',
      'Multi-model orchestration',
      'Algolia Agent Studio integration',
      'Vision analysis (ffmpeg + Haiku)',
      'Cost instrumentation (Anthropic Cost API)',
      'GitHub Actions for AI workflows',
    ],
    proof:
      'Swirl Series (three-role pipeline, ~$5/month) · IG-Stats MCP (Cloudflare Workers + Durable Objects) · Galls AI Shopping Drawer · Market Insights · Travel Journal /api/ingest',
  },
  {
    title: 'Product engineering',
    blurb: 'Frontend systems, design sensibility, ships end-to-end.',
    items: [
      'Next.js 14 / React 18 / TypeScript 5',
      'Tailwind',
      'Design systems + design tokens',
      'Figma',
      'SVG animation',
      'Responsive + mobile-first',
      'Brand voice design',
    ],
    proof: 'Swirlie · Travel Journal · this portfolio · Closet Stories',
  },
  {
    title: 'Frontend quality',
    blurb: 'Accessibility-first, performance-aware, audit-driven.',
    items: [
      'Chrome DevTools',
      'Lighthouse',
      'PageSpeed Insights',
      'Core Web Vitals',
      'UsableNet audits',
      'Semantic HTML + ARIA',
      'Responsive UI',
      'Performance profiling',
      'JUnit + regression validation',
    ],
    proof:
      'Galls + USPT a11y fixes (PDPs, cart, search drawer) · perf checks before merge · AssetMark JUnit-backed test environments + accessibility-conscious enterprise UI standards',
  },
  {
    title: 'Platform & infrastructure',
    blurb: 'Legacy environments and modern stacks. Cost-aware shipping inside real constraints.',
    items: [
      'Cloudflare Workers + Durable Objects',
      'BigCommerce · Catalyst · Makeswift',
      'Vanilla JS + BEM at scale',
      'Prisma + Neon Postgres',
      'Vercel',
      'NextAuth / Google OAuth',
      'Supabase',
      'Shopify',
      'Tailscale',
    ],
    proof:
      'Galls IBM mainframe (no build system, GQ-token injection) · BigCommerce + Next.js + Cloudflare Workers + Catalyst stack · Algolia → internal-API cost migration',
  },
  {
    title: 'Production craft',
    blurb: 'A/B testing, multi-brand scale, AI risk management, security, i18n.',
    items: [
      'A/B experimentation',
      'Production AI risk management',
      'Multi-brand platform work',
      'Data migration at scale',
      'App Store shipping',
      'SMS 2FA',
      'i18n (English / French)',
    ],
    proof:
      'EDD/EST A/B won → 100% rollout · ~140K Bazaarvoice reviews migrated · Galls AI Drawer held by AI-output review · AssetMark 2FA / i18n / 300+ private labels · Closet Stories App Store ship',
  },
]

export const keywordRows: { label: string; items: string[] }[] = [
  {
    label: 'Languages & frameworks',
    items: [
      'TypeScript',
      'JavaScript (ES6+)',
      'Next.js 14',
      'React 18',
      'HTML',
      'CSS',
      'BEM',
      'Tailwind',
      'SVG',
      'Python',
      'Expo / React Native',
      'Node.js',
      'Apps Script',
      'PHP',
    ],
  },
  {
    label: 'Platforms & infrastructure',
    items: [
      'Cloudflare Workers + Durable Objects',
      'BigCommerce',
      'Catalyst',
      'Makeswift',
      'GitHub Actions',
      'Vercel',
      'Prisma',
      'Neon',
      'Shopify',
      'Supabase',
      'Git',
      'Tailscale',
      'Hostinger',
    ],
  },
  {
    label: 'AI & e-commerce integrations',
    items: [
      'Anthropic SDK (Claude Opus / Sonnet / Haiku)',
      'OpenAI SDK (GPT-5)',
      'MCP',
      'Algolia (Search / Recommend / Analytics / Agent Studio)',
      'Bazaarvoice',
      'Bluecore',
      'Attentive',
      'Optimove',
      'GA4',
      'ParcelLab',
      'Varify (A/B variant resolution)',
      'IPWhoIs API',
      'PositionStack API',
      'Instagram Graph API',
      'Notion API',
      'Google OAuth',
      'Stripe',
    ],
  },
]
