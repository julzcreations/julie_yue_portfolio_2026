export const gallsAlsoShipped: string[] = [
  'Bazaarvoice review migration (~140K reviews across Galls + USPT)',
  'Bluecore personalization + email',
  'ParcelLab tracking + order confirmation + order history dashboard',
  'Algolia → GQ cost-optimization migration for product recommendations',
  'Algolia backorder alternatives component',
  'AI-per-PDP recommendations UI',
  'Sponsored Ads feature (schema + GQ dashboard + frontend)',
  'Cart drawer A/B (Amazon-mini-cart → shopping experience)',
  'USPT desktop navigation redesign',
  'GT America font deployment',
  'PDP closeout banner + search bar refinements',
  'Postal brand feature work across 6–7 sites',
]

export type PersonalItem = {
  title: string
  blurb: string
  link?: { label: string; href: string }
  badge?: string
}

export const personalAlsoShipped: PersonalItem[] = [
  {
    title: 'Travel Journal',
    blurb:
      'Multi-user trip log + expense tracker. Built in a day with Claude Code under my architecture. Live.',
    link: { label: 'travel-journal.julzcreations.com', href: 'https://travel-journal.julzcreations.com' },
  },
  {
    title: 'JulzOps',
    blurb:
      'Cozy ops dashboard for my automations — "is anything broken? how much am I spending?" Next.js + Prisma + Neon.',
    link: { label: 'ops.julzcreations.com', href: 'https://ops.julzcreations.com' },
  },
  {
    title: 'Market Insights',
    blurb:
      'Daily Claude + web_search signal sweeps → Neon → Discord alerts when something groundbreaking shows up. Hourly GH Actions cron.',
    link: { label: 'insights.julzcreations.com', href: 'https://insights.julzcreations.com' },
  },
  {
    title: 'Closet Stories',
    blurb:
      'Wardrobe tracker shipped to the App Store (v1.0.0). Expo + Supabase. Maintenance mode.',
    badge: 'App Store',
  },
]
