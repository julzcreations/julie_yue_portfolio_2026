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
      <div className="max-w-[58ch] space-y-6 text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-cream/85">
        <p>
          Product-minded frontend engineer in Austin. Five years shipping production work — the
          last two, shipping with AI. I design systems; Claude writes them under my architecture.
        </p>
        <p>
          Sole frontend on two Galls brands during the second half of 2025 — the year our
          department beat revenue target by ~$600K. On my own time I build small AI-integrated
          tools for myself. Products that feel handmade, ship fast, run lean.
        </p>
      </div>
    </section>
  )
}
