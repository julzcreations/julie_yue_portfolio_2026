import MockupMobile from './MockupMobile'

type AppTile = {
  name: string
  caption: string
  href?: string
  image: { src: string; alt: string }
  badge: React.ReactNode
}

const tiles: AppTile[] = [
  {
    name: 'Swirlie',
    caption: 'Latte-art practice app',
    href: 'https://swirlie.julzcreations.com',
    image: { src: '/work/swirlie-pour.jpg', alt: 'Swirlie pattern selector' },
    badge: (
      <svg viewBox="0 0 68 78" aria-hidden="true">
        <rect width="68" height="78" rx="8" fill="#3d2c24" />
        <path
          d="M12 30 C11 29 9 30 9 32 L11 56 C11 60 15 62 20 62 L44 62 C48 62 52 60 52 56 L54 32 C54 30 53 29 52 30 Z"
          stroke="#f5efe6"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M32 54 C28 50 22 46 22 41 C22 38 24 37 27 37 C29 37 31 38.5 32 41 C33 38.5 35 37 37 37 C40 37 42 38 42 41 C42 46 36 50 32 54Z"
          stroke="#b58183"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="rgba(181,129,131,0.15)"
        />
      </svg>
    ),
  },
  {
    name: 'Travel Journal',
    caption: 'Multi-user trip + expense tracker',
    href: 'https://travel-journal.julzcreations.com',
    image: { src: '/work/travel-journal-miami.jpg', alt: 'Travel Journal Miami trip dashboard' },
    badge: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#fef9ed" />
        <path
          d="M6 38 Q14 30 22 38 T38 38 T54 38 T62 38"
          stroke="#6366f1"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M6 48 Q14 40 22 48 T38 48 T54 48 T62 48"
          stroke="#7dd3fc"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="48" cy="20" r="6" fill="#fcd34d" />
      </svg>
    ),
  },
  {
    name: 'SubTracker',
    caption: 'Subscriptions, charges, renewals',
    href: 'https://subs.julzcreations.com',
    image: { src: '/work/subtracker-dash.jpg', alt: 'SubTracker dashboard' },
    badge: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#fff0f7" />
        <path
          d="M32 8 A 22 22 0 1 1 14 18"
          stroke="#a78bfa"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M14 8 L14 20 L26 20"
          stroke="#a78bfa"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <text
          x="32"
          y="42"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="26"
          fontWeight="700"
          fill="#ff6b8a"
        >
          $
        </text>
      </svg>
    ),
  },
  {
    name: 'Closet Stories',
    caption: 'Wardrobe tracker · App Store',
    image: { src: '/work/closet-stories-wardrobe.jpg', alt: 'Closet Stories My Wardrobe' },
    badge: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#f3ebe0" />
        <path
          d="M32 14 a6 6 0 1 1 -3 11"
          stroke="#5a4734"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M32 24 L14 44 L50 44 Z"
          stroke="#5a4734"
          strokeWidth="3"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M14 44 L50 44" stroke="#5a4734" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function BrandWork() {
  return (
    <section
      id="brand-work"
      className="relative mx-auto max-w-[1080px] px-6 py-24 sm:px-12"
      aria-label="Things I designed"
    >
      <h2
        className="mb-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight"
        style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 80" }}
      >
        Things I designed
      </h2>
      <p className="mb-16 max-w-[58ch] text-[1.05rem] leading-relaxed text-ink/85">
        Personal apps I built end-to-end — code, brand mark, app icon. Tap a tile to visit the live one.
      </p>

      <ul className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => {
          const inner = (
            <>
              <MockupMobile src={tile.image.src} alt={tile.image.alt} badge={tile.badge} />
              <div className="mt-5 text-center">
                <h3
                  className="font-display text-[1.05rem] font-medium leading-snug"
                  style={{ fontVariationSettings: "'opsz' 30, 'SOFT' 80" }}
                >
                  {tile.name}
                </h3>
                <p className="mt-0.5 text-[0.85rem] sm:text-[0.92rem] leading-snug text-ink/75">
                  {tile.caption}
                </p>
              </div>
            </>
          )
          return (
            <li key={tile.name}>
              {tile.href ? (
                <a
                  href={tile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  {inner}
                </a>
              ) : (
                <div className="group">{inner}</div>
              )}
            </li>
          )
        })}
      </ul>

      <p className="mt-12 text-center text-[0.85rem] sm:text-[0.95rem] italic text-ink/65">
        Also designed:{' '}
        <a
          href="https://ops.julzcreations.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky underline-offset-4 transition-colors hover:underline"
        >
          JulzOps
        </a>{' '}
        and{' '}
        <a
          href="https://insights.julzcreations.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky underline-offset-4 transition-colors hover:underline"
        >
          Market Insights
        </a>{' '}
        (single-user dashboards), and this portfolio.
      </p>
    </section>
  )
}
