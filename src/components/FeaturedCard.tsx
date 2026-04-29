import Image from 'next/image'
import type { FeaturedCard as FeaturedCardData } from '@/content/featured'

type Props = {
  card: FeaturedCardData
}

export default function FeaturedCard({ card }: Props) {
  return (
    <article className="border-l-2 border-ink/15 py-10 pl-8 transition-colors hover:border-sky/40">
      {card.image ? (
        <div
          className={`mb-7 overflow-hidden rounded-lg border border-ink/15 bg-paper ${
            card.image.narrow ? 'aspect-[6/1]' : 'aspect-[16/9]'
          }`}
        >
          <Image
            src={card.image.src}
            alt={card.image.alt}
            width={1600}
            height={card.image.narrow ? 267 : 900}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 920px, 92vw"
            priority={card.number === '01'}
          />
        </div>
      ) : null}

      <header className="mb-5 flex items-baseline gap-4">
        <span className="text-[0.85rem] sm:text-[0.92rem] uppercase tracking-[0.2em] text-ink/75">
          {card.number}
        </span>
        <div>
          <h3
            className="font-display text-[clamp(1.4rem,2.2vw,1.85rem)] font-medium leading-tight"
            style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 80" }}
          >
            {card.title}
          </h3>
          <p className="mt-1 text-[0.92rem] sm:text-[1rem] text-ink/85">{card.subtitle}</p>
        </div>
      </header>

      {/* Stack pills — always visible */}
      <ul className="mb-4 flex flex-wrap gap-x-3 gap-y-1.5 text-[0.85rem] sm:text-[0.92rem] text-ink/85">
        {card.stack.map((item) => (
          <li key={item} className="rounded-full border border-ink/20 px-2.5 py-0.5">
            {item}
          </li>
        ))}
      </ul>

      {/* Long-form story — collapsed by default. <details> + grid-rows trick for a smooth animation. */}
      <details className="group mt-3">
        <summary className="cursor-pointer list-none text-[0.85rem] sm:text-[0.92rem] font-semibold uppercase tracking-[0.15em] text-sky transition-colors hover:underline">
          <span className="group-open:hidden">Read the story ↓</span>
          <span className="hidden group-open:inline">Hide the story ↑</span>
        </summary>
        {/* Outer wrapper animates grid-template-rows: 0fr → 1fr */}
        <div className="details-anim">
          <div className="min-h-0 overflow-hidden">
            <div className="mt-5 space-y-5 text-[1rem] leading-[1.7] text-ink">
              <CardSection label="Problem" body={card.problem} />
              <CardSection label="Approach" body={card.approach} />
              <CardSection label="Outcome" body={card.outcome} />
              {card.honestNote ? (
                <p className="border-l-2 border-amber/60 pl-4 text-[0.9rem] sm:text-[1rem] italic text-ink/85">
                  {card.honestNote}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </details>

      {card.links && card.links.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.88rem] sm:text-[0.95rem]">
          {card.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-sky underline-offset-4 transition-colors hover:underline"
              >
                {link.label} →
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

function CardSection({ label, body }: { label: string; body: string }) {
  const paragraphs = body.split('\n\n').filter((p) => p.trim().length > 0)
  return (
    <div>
      <span className="mb-1.5 block text-[0.82rem] sm:text-[0.92rem] font-semibold uppercase tracking-[0.15em] text-ink/85">
        {label}
      </span>
      {paragraphs.map((para, i) => (
        <p key={i} className={i > 0 ? 'mt-4' : undefined}>
          {para}
        </p>
      ))}
    </div>
  )
}
