import Image from 'next/image'
import { earlierProjects } from '@/content/earlier-work'

export default function EarlierWork() {
  return (
    <section
      id="earlier-work"
      className="relative mx-auto max-w-[1080px] px-6 py-24 sm:px-12"
      aria-label="Earlier work"
    >
      <div className="mb-12 flex items-baseline gap-4">
        <h2
          className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight"
          style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 80" }}
        >
          Earlier work
        </h2>
        <span className="text-[0.85rem] sm:text-[0.95rem] uppercase italic tracking-[0.2em] text-ink/75">
          2021 – 2023
        </span>
      </div>
      <p className="mb-12 max-w-[58ch] text-[1.05rem] leading-relaxed text-ink/85">
        Toy projects from when I was learning. Kept up as a path-of-progress
        signal — most are still online if you want to poke around.
      </p>

      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {earlierProjects.map((p) => (
          <li key={p.name}>
            <div className="mb-3 aspect-[4/3] overflow-hidden rounded-md border border-ink/10 bg-paper-warm/40">
              <Image
                src={p.image}
                alt={`${p.name} — preview`}
                width={800}
                height={600}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <h3
              className="font-display text-[1rem] font-medium"
              style={{ fontVariationSettings: "'opsz' 28, 'SOFT' 80" }}
            >
              {p.name}
            </h3>
            <p className="mt-1 text-[0.9rem] sm:text-[0.95rem] leading-snug text-ink/80">
              {p.blurb}
            </p>
            <p className="mt-1.5 text-[0.8rem] sm:text-[0.85rem] italic text-ink/65">
              {p.technologies.join(' · ')}
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[0.85rem] sm:text-[0.92rem]">
              {p.liveSite ? (
                <li>
                  <a
                    href={p.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky underline-offset-4 transition-colors hover:underline"
                  >
                    Live →
                  </a>
                </li>
              ) : null}
              {p.github ? (
                <li>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky underline-offset-4 transition-colors hover:underline"
                  >
                    GitHub →
                  </a>
                </li>
              ) : null}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
