export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-[1080px] px-6 py-24 sm:px-12"
      aria-label="Skills"
    >
      <h2
        className="mb-8 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight"
        style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 80" }}
      >
        Skills
      </h2>
      <p className="max-w-[64ch] text-[1.05rem] leading-[1.75] text-ink/90">
        Five years across modern (Next.js 14, React 18, TypeScript, Tailwind, Cloudflare
        Workers + Durable Objects, Vercel, Prisma + Neon) and legacy (Vanilla JS + BEM at
        scale, Ember, Bootstrap, WordPress, PHP, Apps Script) stacks. AI work runs on the
        Anthropic and OpenAI SDKs with multi-model orchestration, MCP servers I author and
        integrate, and Algolia Agent Studio. Ecommerce: BigCommerce + Catalyst + Makeswift,
        Shopify, Algolia, Bazaarvoice, Bluecore, Attentive, Optimove, GA4, ParcelLab, Varify
        A/B. Quality and craft: Chrome DevTools, Lighthouse, PageSpeed, Core Web Vitals,
        UsableNet a11y audits, JUnit + regression, semantic HTML + ARIA, responsive UI.
        Mobile: Expo / React Native. Design tooling: Figma. App Store ship credit on Closet
        Stories.
      </p>
    </section>
  )
}
