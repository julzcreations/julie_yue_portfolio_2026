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
  /** Drop a screenshot in `public/work/<filename>` and reference here. */
  image?: { src: string; alt: string }
}

export const personalAlsoShipped: PersonalItem[] = [
  {
    title: 'Travel Journal',
    blurb:
      'Multi-user trip log + expense tracker. Built in a day with Claude Code under my architecture. Sign in with Google to use.',
    link: { label: 'travel-journal.julzcreations.com', href: 'https://travel-journal.julzcreations.com' },
    image: { src: '/work/travel-journal-miami.jpg', alt: 'Travel Journal Miami 2026 trip dashboard with day cards and expenses tab' },
  },
  {
    title: 'Swirlie',
    blurb:
      'Latte-art practice app for my coffee Instagram. Pattern selector + tracing overlay over your live pour. Hand-drawn coffee-shop brand.',
    link: { label: 'swirlie.julzcreations.com', href: 'https://swirlie.julzcreations.com' },
    image: { src: '/work/swirlie-pour.jpg', alt: 'Swirlie "Choose your pour" screen with Heart, Rosetta, Tulip, Swan options' },
  },
  {
    title: 'SubTracker',
    blurb:
      'Subscription overview app. Monthly + annual spend, category breakdown, expiring soon. Built for me; lives at subs.julzcreations.com.',
    link: { label: 'subs.julzcreations.com', href: 'https://subs.julzcreations.com' },
    image: { src: '/work/subtracker-dash.jpg', alt: 'SubTracker dashboard showing monthly spend, active count, expiring soon, and category breakdown' },
  },
  {
    title: 'Closet Stories',
    blurb:
      'Wardrobe tracker shipped to the App Store (v1.0.0). Expo + Supabase. Maintenance mode.',
    badge: 'App Store',
    image: { src: '/work/closet-stories-wardrobe.jpg', alt: 'Closet Stories My Wardrobe view with category filters and grid of clothing items' },
  },
  {
    title: 'JulzOps',
    blurb:
      'Cozy ops dashboard for my automations — "is anything broken? how much am I spending?" Next.js + Prisma + Neon. Single-user, restricted access.',
    link: { label: 'ops.julzcreations.com', href: 'https://ops.julzcreations.com' },
  },
  {
    title: 'Market Insights',
    blurb:
      'Daily Claude + web_search signal sweeps → Neon → Discord alerts when something groundbreaking shows up. Hourly GH Actions cron. Single-user, restricted access.',
    link: { label: 'insights.julzcreations.com', href: 'https://insights.julzcreations.com' },
  },
]
