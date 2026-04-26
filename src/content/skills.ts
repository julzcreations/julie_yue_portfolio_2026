export type SkillCategory = {
  title: string
  blurb: string
  items: string[]
  proof: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & orchestration',
    blurb: 'Multi-model pipelines, prompt engineering, production AI with cost ceilings.',
    items: [
      'Anthropic SDK (Opus + Sonnet)',
      'Multi-model orchestration',
      'Cost instrumentation',
      'Vision analysis (ffmpeg + Claude)',
      'Prompt engineering validated against real A/B data',
      'MCP (built two transports)',
      'Algolia Agent Studio integration',
      'GitHub Actions for AI workflows',
    ],
    proof:
      'Swirl Series ($2/run ceiling, $0.065 typical) · Galls AI Shopping Drawer · ig-stats-mcp + ig-stats-cf · Market Insights · Travel Journal /api/ingest',
  },
  {
    title: 'Product engineering',
    blurb: 'Frontend + full-stack, design sensibility, ships end-to-end.',
    items: [
      'Next.js 14 / React 18 / TypeScript 5',
      'Tailwind',
      'SVG animation',
      'Responsive + mobile-first',
      'Design systems + design tokens',
      'Figma',
      'Brand voice design',
    ],
    proof: 'Swirlie · Travel Journal · this portfolio · Closet Stories',
  },
  {
    title: 'Platform & infrastructure',
    blurb: 'Legacy environments and modern stacks. Cost optimization. Production shipping inside constraints.',
    items: [
      'Vanilla JS + BEM at scale',
      'Shopify · BigCommerce · Catalyst · Makeswift',
      'Cloudflare Workers',
      'Prisma + Neon Postgres',
      'Supabase',
      'NextAuth / Google OAuth',
      'Vercel',
      'Tailscale',
    ],
    proof:
      'Galls IBM mainframe (no build system, GQ-token injection) · BigCommerce + Next.js + Cloudflare Workers (Makeswift cross-site migration) · Algolia → GQ migration',
  },
  {
    title: 'Production craft',
    blurb: 'A/B testing, multi-brand scale, security, i18n, risk management.',
    items: [
      'A/B experimentation',
      'Multi-brand platform work',
      'Data migration at scale',
      'SMS 2FA',
      'i18n (English/French)',
      'Production AI risk management',
      'App Store shipping',
    ],
    proof:
      'ESD/EDD A/B won → 100% rollout · ~140K Bazaarvoice reviews migrated · AssetMark 2FA/i18n/300+ private labels · Galls AI Drawer accuracy review hold · Closet Stories App Store ship',
  },
]

export const keywordRows: { label: string; items: string[] }[] = [
  {
    label: 'Languages & frameworks',
    items: [
      'TypeScript',
      'Next.js 14',
      'React 18',
      'Python',
      'HTML',
      'CSS',
      'Tailwind',
      'SVG',
      'Expo / React Native',
      'Node.js',
    ],
  },
  {
    label: 'Platforms & infrastructure',
    items: [
      'Vercel',
      'Cloudflare Workers',
      'GitHub Actions',
      'Prisma',
      'BigCommerce',
      'Catalyst',
      'Makeswift',
      'Shopify',
      'Neon',
      'Supabase',
      'Tailscale',
      'Hostinger',
      'Git',
    ],
  },
  {
    label: 'AI & e-commerce integrations',
    items: [
      'Anthropic SDK (Claude Opus / Sonnet)',
      'Claude Agent SDK',
      'MCP',
      'Algolia (Search / Recommend / Analytics / Agent Studio)',
      'Bazaarvoice',
      'Bluecore',
      'ParcelLab',
      'Varify (A/B variant resolution)',
      'Smile.io',
      'Stripe',
      'Instagram Graph API',
      'Notion API',
      'Google OAuth',
    ],
  },
]
