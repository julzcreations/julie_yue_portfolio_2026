import { experience, education } from '@/content/experience'

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-[1080px] px-6 py-24 sm:px-12"
      aria-label="Experience"
    >
      <h2
        className="mb-16 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight"
        style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 80" }}
      >
        Experience
      </h2>

      <ol className="space-y-12">
        {experience.map((entry) => (
          <li
            key={`${entry.company}-${entry.period}`}
            className="border-l-2 border-ink/15 pl-8"
          >
            <header className="mb-3">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3
                  className="font-display text-[1.2rem] font-medium leading-snug"
                  style={{ fontVariationSettings: "'opsz' 40, 'SOFT' 80" }}
                >
                  {entry.title}
                </h3>
                <span className="text-ink/75">·</span>
                <span className="text-[0.95rem] text-ink">{entry.company}</span>
              </div>
              <p className="mt-1 text-[0.88rem] tracking-wide text-ink/80">{entry.period}</p>
              <p className="mt-1 text-[0.82rem] italic text-ink/75">{entry.stack}</p>
            </header>
            <ul className="space-y-2.5 text-[0.95rem] leading-relaxed text-ink/90">
              {entry.bullets.map((bullet, idx) => (
                <li key={idx} className="flex gap-3">
                  <span
                    className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink/30"
                    aria-hidden
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-16 border-l-2 border-ink/15 pl-8">
        <h3
          className="mb-2 text-[0.82rem] font-semibold uppercase tracking-[0.18em] text-ink/85"
        >
          Education
        </h3>
        <p className="text-[1rem] text-ink">
          {education.degree} · {education.school}
          <span className="text-ink/80"> · {education.period}</span>
        </p>
      </div>
    </section>
  )
}
