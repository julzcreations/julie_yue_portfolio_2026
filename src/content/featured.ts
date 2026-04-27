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
}

export const featuredCards: FeaturedCard[] = [
  {
    number: '01',
    title: 'Swirl Series Ecosystem',
    subtitle: 'Opus reasons · Sonnet writes · Haiku sees · 12 reels, ~$5/month',
    problem:
      'A coffee Instagram from a cold start. 100 views per reel, no playbook for what works. The pipeline is how I figure out what to try.',
    approach:
      'A daily GitHub Actions cron reconciles posted reels with my Notion calendar and refreshes Instagram metrics on every run. Three times a week the pipeline produces a strategic brief from past performance, three voice variations of the next script, and a 15-frame visual-arc analysis of the latest post. Idempotent, ~$5/month operating cost — a drafting assistant, not an auto-publisher.',
    outcome:
      '12 reels through. The literal scripts are starting points I deviate from. The analysis layer underneath — pattern reads, algorithm signal, strategic framing — is what compounds.',
    honestNote:
      'I designed the pipeline, chose the Opus + Sonnet + Haiku model routing, and set the cost ceiling. Python implemented by Claude Code under my design — I don’t write Python day-to-day.',
    stack: [
      'Anthropic SDK (Opus + Sonnet + Haiku)',
      'GitHub Actions',
      'Instagram Graph API',
      'Notion API',
      'Python',
      'ffmpeg',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/julzcreations/swirl-series-automation', external: true },
      { label: '@jellieglass on Instagram', href: 'https://www.instagram.com/jellieglass', external: true },
    ],
  },
  {
    number: '02',
    title: 'Galls Tooling + Integrations',
    subtitle: 'The glue work — sole frontend on Galls + USPT + 6–7 postal brands for ~9 months across two stretches',
    problem:
      'Many team members, brands, websites, third-party integrations — all on an outdated IBM systems mainframe with fragmented, outdated tooling.',
    approach:
      'I work across Galls and its sub-brands — frontend features and SDK integrations. I coordinate with leadership, designers, the backend team, and other team members to fully build out and deploy features. Some examples include Algolia recommendations and the backorder drawer; Bazaarvoice (~140K reviews); marketing tech (Bluecore, Attentive, Optimove, GA4); Varify A/B; and many more.\n\nIn 2026 I joined the BigCommerce team. Implementing one Galls brand on Next.js + Cloudflare Workers + Catalyst; two more in coordination.',
    outcome:
      'Department ended 2025 ~$600K over revenue target; team received a company-awarded performance bonus.\n\nNow on the BigCommerce team and already shipping features.',
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
    title: 'IG-Stats MCP',
    subtitle: 'Multi-account Instagram analytics on Cloudflare Workers',
    problem:
      'Once Swirl Series was running, reel ideas kept hitting me away from my desktop — in the car, outside, on my phone. I wanted to think them through with Claude immediately, with the actual Instagram numbers in front of me, not later from memory.',
    approach:
      'Built it as a TypeScript MCP server on Cloudflare Workers, running inside a Durable Object (via Cloudflare’s `agents/mcp` library) so each Claude session keeps its state across the streamable-HTTP exchange. The tools wrap Instagram’s Graph API — list reels, fetch insights, bulk-fetch in parallel, rank top reels by any metric — with multi-account routing built into every call.',
    outcome:
      'Claude pulls per-reel stats from either of my Instagram accounts (jellieglass for Swirlie, julzevias for personal). Views, likes, comments, saves, shares, reach, average watch time — analyzed on the spot.',
    honestNote:
      'I came in with the idea, the multi-account use case, and the call to ship on Cloudflare Workers after Fly.io required a payment method I wasn’t ready to add. The architecture (Durable Objects, path-based auth, `agents/mcp`) came from Claude Code; I directed the build and learned a lot of the edge-runtime patterns through it. Reading the implementation end-to-end is on my pre-launch prep list.',
    stack: [
      'Cloudflare Workers + Durable Objects',
      '@modelcontextprotocol/sdk',
      'agents/mcp',
      'TypeScript',
      'Zod',
      'Instagram Graph API',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/julzcreations/ig-stats-cf', external: true },
    ],
  },
  {
    number: '04',
    title: 'Galls AI Shopping Drawer',
    subtitle: 'GPT-5 shopping assistant via Algolia · staged, held by AI-output review',
    problem:
      'Galls customers describe use cases ("duty belt for a deputy"), not SKUs. The search bar wasn’t built for intent translation, and a generic AI chat carries hallucination risk in a life-safety customer base.',
    approach:
      'Integrated Algolia’s InstantSearch Chat widget — a GPT-5-backed shopping assistant — into a slide-up drawer on Galls. Wrote the drawer code: landing UX, product cards with GA4 tracking, session persistence, iOS keyboard handling. Prototyped a GPT-5 Nano safety classifier in front of the main agent, then scrapped it when Algolia’s DOM streaming made the routing layer awkward.',
    outcome:
      'Live on staging, A/B-gated for Galls. Held from production by the business after model-output review.',
    honestNote:
      'I integrated the widget, wrote the drawer code, and prototyped a GPT-5 Nano safety classifier — Nano was my suggestion from Algolia’s docs; GPT-5 was Galls’s choice for the production agent. Algolia owns the streaming and the chat. My work is the integration boundary, the safety-routing prototype, and the wrapper around their widget.',
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
    number: '05',
    title: 'Galls Location Tracker',
    subtitle: 'Geo-aware e-commerce personalization framework',
    problem:
      'Galls ships gear to law enforcement in all 50 states and specific military bases. Delivery times vary. Some states restrict specific products (PFAS regulations, California Prop 65). Conversion depends on showing accurate delivery dates and state-appropriate inventory before checkout commit.',
    approach:
      'Built a vanilla JS geolocation cascade. IPWhoIs catches the user’s IP on page load; PositionStack handles ZIP lookups when they enter one. Results cache in localStorage and fire a `userLocationUpdated` event so downstream features can recompute independently.\n\nOn top of this I built the entire frontend EDD/EST (estimated delivery date) calculation engine. The date displays across PDPs, mini cart, cart, checkout, and order confirmation.',
    outcome:
      'Powers many personalization features — EDD/EST-driven shopping, ZIP-based keyword pages, PFAS state restrictions, and more. The EDD A/B test won and rolled out to 100% of traffic.',
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
]
