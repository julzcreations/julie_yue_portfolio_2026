export type FeaturedCard = {
  number: string
  title: string
  subtitle: string
  problem: string
  approach: string
  outcome: string
  honestNote?: string
  stack: string[]
  links?: { label: string; href: string; external?: boolean }[]
  /**
   * Optional hero image. Drop a JPEG/PNG into `public/work/<filename>` and
   * reference it as `{ src: '/work/<filename>.jpg', alt: '<short alt>' }`.
   * Default aspect 16:9. Set `narrow: true` for a wider, shorter strip
   * (good for atmospheric / hero photos).
   */
  image?: { src: string; alt: string; narrow?: boolean }
}

export const featuredCards: FeaturedCard[] = [
  {
    number: '01',
    title: 'Swirl Series + IG-Stats MCP',
    subtitle: 'A daily Claude pipeline for my coffee Instagram, plus the MCP server I wrote so I can think about reels from my phone. Costs me about $5 a month.',
    problem:
      'Cold-started a coffee Instagram. 100 views a reel and no real idea what was working. I wanted a way to figure out what to try next without spending hours guessing. And once the pipeline was running, I kept getting reel ideas away from my desk. I wanted to talk through them with Claude right then, on my phone, with the actual numbers in front of me.',
    approach:
      'Two pieces. The pipeline is a daily GitHub Actions cron. Three times a week it pulls a strategic brief from past performance, drafts three voice variations of the next script, and runs a 15-frame visual analysis of the latest post. About $5 a month. It’s a drafting assistant, not an auto-poster.\n\nThe MCP server is a TypeScript Worker on Cloudflare with Durable Objects, so each Claude session keeps its state across the streamable-HTTP exchange. The tools wrap Instagram’s Graph API: list reels, pull insights, bulk-fetch in parallel, rank top reels by whichever metric I want. Multi-account routing is baked in, so I can switch from my coffee account (jellieglass) to my main one (julzevias) in the same conversation.',
    outcome:
      '12 reels in. The scripts the pipeline drafts are starting points I deviate from — the part that actually compounds is the analysis underneath. Pattern reads, algorithm signal, strategic framing. And now when an idea hits, I can pull stats from either account right there instead of trying to remember a number from last week.',
    honestNote:
      'I designed both pieces, picked the Opus + Sonnet + Haiku model split, and called the host (Cloudflare Workers, after Fly.io wanted a payment method I wasn’t ready to add). I set the cost ceiling and review every output. Claude Code wrote most of the implementation under my direction. I don’t write Python day-to-day; my main stack is TypeScript.',
    stack: [
      'Anthropic SDK (Opus + Sonnet + Haiku)',
      'Cloudflare Workers + Durable Objects',
      '@modelcontextprotocol/sdk',
      'agents/mcp',
      'GitHub Actions',
      'Instagram Graph API',
      'Notion API',
      'TypeScript',
      'Python',
      'Zod',
      'ffmpeg',
    ],
    links: [
      { label: 'Swirl Series on GitHub', href: 'https://github.com/julzcreations/swirl-series-automation', external: true },
      { label: 'IG-Stats MCP on GitHub', href: 'https://github.com/julzcreations/ig-stats-cf', external: true },
      { label: '@jellieglass on Instagram', href: 'https://www.instagram.com/jellieglass', external: true },
    ],
    image: {
      src: '/work/swirl-series-latte.jpg',
      alt: 'Latte with a heart pattern, soft natural light',
      narrow: true,
    },
  },
  {
    number: '02',
    title: 'Galls Tooling + Integrations',
    subtitle: 'The glue work. Sole frontend on Galls + USPT + 6–7 postal brands for ~9 months across two stretches.',
    problem:
      'Many team members, brands, websites, and third-party integrations, all on an outdated IBM systems mainframe with fragmented, outdated tooling.',
    approach:
      'I work across Galls and its sub-brands on frontend features and SDK integrations. I coordinate with leadership, designers, the backend team, and other team members to build out and deploy features end to end. Examples: Algolia recommendations and the backorder drawer; Bazaarvoice (~140K reviews migrated); marketing tech (Bluecore, Attentive, Optimove, GA4); Varify A/B variant resolution; ParcelLab tracking and order confirmation.\n\nIn 2026 I joined the BigCommerce team. Implementing one Galls brand on Next.js + Cloudflare Workers + Catalyst, with two more in coordination.',
    outcome:
      'Department ended 2025 ~$600K over revenue target; team received a company-awarded performance bonus. Now on the BigCommerce team and already shipping features.',
    stack: [
      'Algolia',
      'Next.js 14',
      'Cloudflare Workers',
      'Catalyst (BigCommerce)',
      'Makeswift',
      'TypeScript',
      'Bazaarvoice',
      'Marketing tech (Bluecore, Attentive, Optimove, GA4)',
      'Varify A/B',
      'Vanilla JS / ES6 (no-build)',
    ],
  },
  {
    number: '03',
    title: 'Galls AI Shopping Drawer',
    subtitle: 'GPT-5 shopping assistant via Algolia. Staged, held by AI-output review.',
    problem:
      'Galls customers describe use cases ("duty belt for a deputy"), not SKUs. The search bar wasn’t built for intent translation, and a generic AI chat carries hallucination risk in a life-safety customer base.',
    approach:
      'Integrated Algolia’s InstantSearch Chat widget (a GPT-5-backed shopping assistant) into a slide-up drawer on Galls. Wrote the drawer code: landing UX, product cards with GA4 tracking, session persistence, iOS keyboard handling. Prototyped a GPT-5 Nano safety classifier in front of the main agent, then scrapped it when Algolia’s DOM streaming made the routing layer awkward.',
    outcome:
      'Live on staging, A/B-gated for Galls. Held from production by the business after model-output review.',
    honestNote:
      'I integrated the widget, wrote the drawer code, and prototyped a GPT-5 Nano safety classifier. Nano was my suggestion from Algolia’s docs; GPT-5 was Galls’s call for the production agent. Algolia owns the streaming and the chat. My work is the integration boundary, the safety-routing prototype, and the wrapper around their widget.',
    stack: [
      'Algolia InstantSearch Chat',
      'Algolia Agent Studio',
      'GPT-5',
      'GPT-5 Nano (prototyped pre-screening)',
      'Varify A/B',
      'GA4',
      'Vanilla JS / ES6 (no-build)',
    ],
  },
  {
    number: '04',
    title: 'Galls Location Tracker + EDD/EST',
    subtitle: 'Geo-aware ecommerce personalization framework, end-to-end delivery-date engine on top.',
    problem:
      'Galls ships gear to law enforcement in all 50 states and specific military bases. Delivery times vary. Some states restrict specific products (PFAS regulations, California Prop 65). Conversion depends on showing accurate delivery dates and state-appropriate inventory before checkout commit.',
    approach:
      'Built a vanilla JS geolocation cascade. IPWhoIs catches the user’s IP on page load; PositionStack handles ZIP lookups when they enter one. Results cache in localStorage and fire a `userLocationUpdated` event so downstream features can recompute independently.\n\nOn top of this I built the entire frontend EDD/EST (estimated delivery date) calculation engine. The date displays across PDPs, mini cart, cart, checkout, and order confirmation.',
    outcome:
      'Powers many personalization features: EDD/EST-driven shopping, ZIP-based keyword pages, PFAS state restrictions, and more. The EDD A/B test won and rolled out to 100% of traffic.',
    stack: [
      'Vanilla JS (ES6)',
      'IPWhoIs API',
      'PositionStack API',
      'CustomEvent',
      'localStorage',
      'BEM CSS',
    ],
    links: [
      { label: 'Galls.com', href: 'https://www.galls.com', external: true },
      { label: 'U.S. Patriot Tactical', href: 'https://www.uspatriottactical.com', external: true },
    ],
  },
  {
    number: '05',
    title: 'Accessibility + Performance',
    subtitle: 'UsableNet audit fixes, Lighthouse, Core Web Vitals across two Galls brands.',
    problem:
      'Galls runs on top of an outdated IBM mainframe. Customers include first responders on mobile, ADA-conscious B2B buyers, and enterprise-IT laptops with locked-down browsers. Accessibility and performance regressions show up constantly and don’t always surface in backend metrics.',
    approach:
      'UsableNet a11y reports become actionable tickets: focus order, semantic landmarks, color contrast, ARIA on the search drawer and cart components. Performance work runs through Chrome DevTools, Lighthouse, PageSpeed Insights, and Core Web Vitals reports across PDPs, the cart, and the home page. Image weight, lazy-loading, render-blocking JS, layout shifts.',
    outcome:
      'Every shipped feature gets an a11y + perf check before merge. Improvements stick because they’re audited per release rather than as one-time fixes.',
    stack: [
      'Chrome DevTools',
      'Lighthouse',
      'PageSpeed Insights',
      'Core Web Vitals',
      'UsableNet audits',
      'Semantic HTML',
      'ARIA',
      'Responsive UI',
      'Image lazy-loading',
      'JUnit + regression validation (AssetMark)',
    ],
  },
]
