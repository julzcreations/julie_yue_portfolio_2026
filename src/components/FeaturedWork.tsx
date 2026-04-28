import { featuredCards } from '@/content/featured'
import FeaturedCard from './FeaturedCard'

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative mx-auto max-w-[1080px] px-6 py-24 sm:px-12"
      aria-label="Featured work"
    >
      <h2
        className="mb-12 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight"
        style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 80" }}
      >
        Featured work
      </h2>

      <ol className="space-y-16">
        {featuredCards.map((card) => (
          <li key={card.number}>
            <FeaturedCard card={card} />
          </li>
        ))}
      </ol>
    </section>
  )
}
