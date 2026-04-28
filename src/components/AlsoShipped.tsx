import Image from 'next/image'
import { gallsAlsoShipped, personalAlsoShipped } from '@/content/also-shipped'

export default function AlsoShipped() {
  return (
    <section
      id="also-shipped"
      className="relative mx-auto max-w-[1080px] px-6 py-24 sm:px-12"
      aria-label="Also shipped"
    >
      <h2
        className="mb-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight"
        style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 80" }}
      >
        Also shipped
      </h2>
      <p className="mb-12 max-w-[58ch] text-[1.05rem] leading-relaxed text-ink/85">
        Smaller side projects of mine, plus a long tail of work at Galls.
      </p>

      {/* Personal projects with screenshots */}
      <div className="mb-16">
        <h3 className="mb-6 text-[0.85rem] sm:text-[0.92rem] font-semibold uppercase tracking-[0.18em] text-ink/85">
          Personal projects
        </h3>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {personalAlsoShipped.map((item) => (
            <li key={item.title}>
              {item.image ? (
                <div className="mb-4 aspect-[16/10] overflow-hidden rounded-lg border border-ink/10 bg-paper shadow-sm">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ) : (
                <div className="mb-4 flex aspect-[16/10] items-center justify-center rounded-lg border border-dashed border-ink/15 bg-paper-warm/40">
                  <span className="text-[0.82rem] sm:text-[0.92rem] uppercase tracking-[0.18em] text-ink/55">
                    {item.badge ?? 'Restricted'}
                  </span>
                </div>
              )}
              <div className="flex items-baseline gap-3">
                <h4
                  className="font-display text-[1.05rem] font-medium"
                  style={{ fontVariationSettings: "'opsz' 30, 'SOFT' 80" }}
                >
                  {item.title}
                </h4>
                {item.badge ? (
                  <span className="rounded-full border border-ink/20 px-2 py-0.5 text-[0.8rem] sm:text-[0.85rem] uppercase tracking-[0.12em] text-ink/75">
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

      {/* Galls — text list, no public URLs to show */}
      <div className="border-t border-ink/15 pt-10">
        <h3 className="mb-5 text-[0.85rem] sm:text-[0.92rem] font-semibold uppercase tracking-[0.18em] text-ink/85">
          More at Galls
        </h3>
        <ul className="grid gap-x-8 gap-y-2.5 text-[0.95rem] leading-relaxed text-ink/90 sm:grid-cols-2">
          {gallsAlsoShipped.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink/35" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
