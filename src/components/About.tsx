export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-[1080px] px-6 py-24 sm:px-12"
      aria-label="About"
    >
      <h2
        className="mb-12 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight"
        style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 80" }}
      >
        About
      </h2>
      <div className="max-w-[58ch] space-y-6 text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-ink">
        <p>
          I&apos;m Julie. Frontend engineer based in Austin, five years in. Mostly ecommerce: features,
          integrations, and reusable UI systems across modern and legacy platforms.
        </p>
        <p>
          For about two of those years I&apos;ve been working with AI on personal projects.
          A daily content pipeline for my latte-art Instagram, an MCP server I built for myself,
          a travel journal that took a day to ship. They run lean and I read everything before
          it goes out.
        </p>
        <p>
          When I&apos;m not at my keyboard, I&apos;m probably pulling a latte, cooking
          something, watering plants, being supervised by two cats, or off traveling.
        </p>
      </div>
    </section>
  )
}
