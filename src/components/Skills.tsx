import { skillCategories, keywordRows } from '@/content/skills'

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-[1080px] px-6 py-24 sm:px-12"
      aria-label="Skills"
    >
      <h2
        className="mb-16 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight"
        style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 80" }}
      >
        Skills
      </h2>

      {/* Category cards */}
      <div className="grid gap-10 md:grid-cols-2">
        {skillCategories.map((cat) => (
          <article
            key={cat.title}
            className="border-l-2 border-cream/15 pl-7"
          >
            <h3
              className="mb-2 font-display text-[1.15rem] font-medium leading-snug"
              style={{ fontVariationSettings: "'opsz' 30, 'SOFT' 80" }}
            >
              {cat.title}
            </h3>
            <p className="mb-4 text-[0.92rem] leading-relaxed text-cream/75">{cat.blurb}</p>
            <ul className="mb-4 flex flex-wrap gap-x-2.5 gap-y-1.5 text-[0.82rem] text-cream/70">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-cream/20 px-2.5 py-0.5"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[0.82rem] italic leading-relaxed text-cream/55">
              <span className="font-semibold not-italic uppercase tracking-[0.12em] text-cream/65">
                Proof —{' '}
              </span>
              {cat.proof}
            </p>
          </article>
        ))}
      </div>

      {/* Keyword rows */}
      <div className="mt-16 space-y-6 border-t border-cream/15 pt-10">
        {keywordRows.map((row) => (
          <div key={row.label}>
            <h4 className="mb-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-cream/65">
              {row.label}
            </h4>
            <p className="text-[0.95rem] leading-relaxed text-cream/75">
              {row.items.join(' · ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
