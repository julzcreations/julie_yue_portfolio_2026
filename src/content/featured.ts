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
    title: 'ig-stats',
    subtitle: 'Multi-account Instagram MCP server with two transports',
    problem:
      'My Swirl Series content pipeline needed Claude Code to read Instagram metrics across two accounts (jellieglass for Swirlie content, julzevias for personal). I wanted the same tool surface available locally (stdio) AND in claude.ai (remote). Existing MCPs didn’t cover Instagram, so I built one.',
    approach:
      'Designed two transports for the same tool surface. Python/stdio (ig-stats-mcp): runs locally under Claude Code, smart token refresh on startup (re-auths only if token ≥ 25 days old), optional Fly.io HTTP mode with bearer auth. Cloudflare Workers (ig-stats-cf): exposes the MCP via Durable Objects for session persistence, secrets stored in Workers secrets (not .env), URL-path auth scheme returning 404 on mismatch. Same 4 read-only tools on both: ig_list_reels, ig_get_insights, ig_get_insights_bulk (parallel), ig_top_reels (metric-sorted). Multi-account routing via account param.',
    outcome:
      'Both transports running and registered. The Python server is consumed by Claude Code in my Swirl Series workflow; the CF Workers version is the deployable form for claude.ai’s custom connector. Same code shape, different runtime. The retention insights surfaced in card 01 came through these tools.',
    honestNote:
      'I designed the two-transport architecture, the tool surface, the security model, and the account routing. Claude Code implemented the TypeScript and Python under my direction. Reading the implementation is on my pre-launch interview-prep list.',
    stack: [
      'Python',
      'TypeScript',
      'Cloudflare Workers + Durable Objects',
      '@modelcontextprotocol/sdk',
      'Zod',
      'Instagram Graph API',
      'Fly.io',
    ],
  },
  {
    number: '03',
    title: 'Galls AI Shopping Drawer',
    subtitle: 'Algolia Chat integration for tactical-gear shopping · staged, held by AI-output review',
    problem:
      'Galls customers describe use cases ("duty belt for a deputy"), not SKUs. The search bar wasn’t built for intent translation, and a generic AI chat carries hallucination risk on tactical gear used in life-safety contexts.',
    approach:
      'Integrated Algolia’s InstantSearch Chat widget into a custom slide-up drawer for Galls + USPT — Varify-gated A/B test, multi-brand detection, ESM-only widget loaded via dynamic import. Built the landing UX (category pills, help links, search-to-chat handoff), product card templates with GA4 impression + click tracking, day-based conversation refresh, cross-page ATC attribution, and iOS keyboard + scroll polish. Separately prototyped a Haiku-powered pre-screening agent in front of the main shopping agent — determined the safety-label set and fallback copy — but scrapped the routing layer when DOM-streaming made it the wrong architectural shape.',
    outcome:
      'Working on staging, A/B-gated for the Galls audience. Held from production by the business after AI-output review. Production AI engineering at scale includes knowing when not to ship a feature — and on the prototyped layer, knowing when not to ship a layer.',
    honestNote:
      'This is integration craftsmanship — Algolia owns the streaming, the model, and the chat mechanics. My work was the production shell (multi-tenant, A/B-gated, instrumented, polished) and the architectural exploration around safety routing. The held-from-production decision was the right call; production AI is harder than ship-it engineering.',
    stack: [
      'Algolia InstantSearch Chat',
      'Algolia Agent Studio',
      'Haiku (prototyped pre-screening)',
      'Vanilla JS / ES6',
      'BEM CSS',
    ],
  },
  {
    number: '04',
    title: 'Galls Tooling + Integrations',
    subtitle: 'The glue work — sole frontend on Galls + USP for ~9 months across two stretches',
    problem:
      'Galls runs on an IBM mainframe backend, a dozen third-party services, and a marketing team without direct HTML access. Every new feature meant stitching three worlds — mainframe backend, SaaS integrations, non-technical marketing — without a build system or typical frontend conventions.',
    approach:
      'Tooling: 2024 Apps Script + Sheets configurator for the homepage hero (desktop/mobile image variants + overlay positioning). 2026: leading a component-system migration to BigCommerce + Next.js + Cloudflare Workers + Catalyst, plus an in-flight loyalty integration. Third-party integrations: Bazaarvoice (~140K reviews migrated), Bluecore, ParcelLab, Varify A/B variant resolution. Algolia depth: Search, Recommend, Analytics dashboard analysis, cost-driven migration of recommendations from Algolia to internal GQ APIs, Agent Studio integration. Backend coordination: shipped via GQ token injection with the backend lead across Galls + USPT + 6–7 postal brand sites.',
    outcome:
      'Solo frontend on Galls + U.S. Patriot Tactical for ~9 months across two stretches — summer through end of 2025, and Jan through end of March 2026 (the second stretch overlapped with BigCommerce team onboarding). Department ended 2025 ~$600K over revenue target; team received a company-awarded performance bonus.',
    stack: [
      'Vanilla JS',
      'BEM',
      'GQ tokens',
      'Google Apps Script',
      'Next.js 14',
      'Cloudflare Workers',
      'BigCommerce',
      'Catalyst',
      'Makeswift',
      'TypeScript',
      'Tailwind',
    ],
  },
  {
    number: '05',
    title: 'Galls Location Tracker',
    subtitle: 'Geo-aware e-commerce personalization framework',
    problem:
      'Galls ships gear to law enforcement in all 50 states. Delivery times vary. Some states restrict specific products (PFAS regulations, California Prop 65). Conversion depends on showing accurate delivery dates and state-appropriate inventory before checkout commit.',
    approach:
      'Dual-API geolocation cascade — IPWhoIs for initial IP-based detection, PositionStack for user-entered ZIP geocoding, browser geolocation as fallback. GeoLocationTracking ES6 class manages the cascade + localStorage caching. Custom userLocationUpdated event fires when state resolves; downstream consumers (est-delivery-date, shipping-restriction) listen and recompute independently.',
    outcome:
      'Powers ZIP-based keyword content, PFAS state restrictions, and EDD/EST-driven shopping across product pages. The estimated-delivery-date A/B test won and rolled out to 100% of traffic.',
    stack: [
      'Vanilla JS (ES6)',
      'IPWhoIs API',
      'PositionStack API',
      'Browser geolocation',
      'Custom event bus',
      'localStorage',
      'BEM CSS',
    ],
    links: [
      { label: 'Galls.com', href: 'https://www.galls.com', external: true },
      { label: 'U.S. Patriot Tactical', href: 'https://www.uspatriottactical.com', external: true },
    ],
  },
]
