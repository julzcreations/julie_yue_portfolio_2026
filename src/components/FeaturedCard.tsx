import type { FeaturedCard as FeaturedCardData } from '@/content/featured'

type Props = {
  card: FeaturedCardData
}

export default function FeaturedCard({ card }: Props) {
  return (
    <article className="border-l-2 border-ink/15 py-10 pl-8 transition-colors hover:border-sky/40">
      <header className="mb-6 flex items-baseline gap-4">
        <span className="text-xs uppercase tracking-[0.2em] text-ink/75">{card.number}</span>
        <div>
          <h3
            className="font-display text-[clamp(1.4rem,2.2vw,1.85rem)] font-medium leading-tight"
            style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 80" }}
          >
            {card.title}
          </h3>
          <p className="mt-1 text-sm text-ink/85">{card.subtitle}</p>
        </div>
      </header>

      <div className="space-y-5 text-[1rem] leading-[1.7] text-ink">
        <CardSection label="Problem" body={card.problem} />
        <CardSection label="Approach" body={card.approach} />
        <CardSection label="Outcome" body={card.outcome} />
        {card.honestNote ? (
          <p className="border-l-2 border-amber/60 pl-4 text-[0.9rem] italic text-ink/85">
            {card.honestNote}
          </p>
        ) : null}
      </div>

      <ul className="mt-7 flex flex-wrap gap-x-3 gap-y-1.5 text-[0.82rem] text-ink/85">
        {card.stack.map((item) => (
          <li key={item} className="rounded-full border border-ink/20 px-2.5 py-0.5">
            {item}
          </li>
        ))}
      </ul>

      {card.links && card.links.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.88rem]">
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
      <span className="mb-1.5 block text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-ink/85">
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
