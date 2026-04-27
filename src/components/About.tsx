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
          E-commerce frontend at Galls and its sub-brands. Off-hours, small AI-integrated
          tools — products that feel handmade, ship fast, run lean.
        </p>
        <p>
          When I&apos;m not at my keyboard, I&apos;m probably pulling a latte, cooking
          something, watering plants, being supervised by two cats, or off traveling.
        </p>
      </div>
    </section>
  )
}
