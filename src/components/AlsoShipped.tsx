import { gallsAlsoShipped, personalAlsoShipped } from '@/content/also-shipped'

export default function AlsoShipped() {
  return (
    <section
      id="also-shipped"
      className="relative mx-auto max-w-[1080px] px-6 py-24 sm:px-12"
      aria-label="Also shipped"
    >
      <h2
        className="mb-16 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight"
        style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 80" }}
      >
        Also shipped
      </h2>

      <div className="grid gap-16 md:grid-cols-[1fr_1fr]">
        <div>
          <h3 className="mb-5 text-[0.82rem] sm:text-[0.92rem] font-semibold uppercase tracking-[0.18em] text-ink/75">
            At Galls
          </h3>
          <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-ink/90">
            {gallsAlsoShipped.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink/30" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[0.82rem] sm:text-[0.92rem] font-semibold uppercase tracking-[0.18em] text-ink/75">
            Personal projects
          </h3>
          <ul className="space-y-7">
            {personalAlsoShipped.map((item) => (
              <li key={item.title}>
                <div className="flex items-baseline gap-3">
                  <h4
                    className="font-display text-[1.05rem] font-medium"
                    style={{ fontVariationSettings: "'opsz' 30, 'SOFT' 80" }}
                  >
                    {item.title}
                  </h4>
                  {item.badge ? (
                    <span className="rounded-full border border-ink/20 px-2 py-0.5 text-[0.8rem] sm:text-[0.92rem] uppercase tracking-[0.12em] text-ink/75">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink/85">{item.blurb}</p>
                {item.link ? (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-[0.85rem] sm:text-[0.95rem] text-sky underline-offset-4 transition-colors hover:underline"
                  >
                    {item.link.label} →
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
