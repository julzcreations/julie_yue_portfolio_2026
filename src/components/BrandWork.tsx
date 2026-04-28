type BrandTile = {
  name: string
  caption: string
  href?: string
  // SVG renders at the size of the wrapping <div> via viewBox
  svg: React.ReactNode
}

const tiles: BrandTile[] = [
  {
    name: 'Julzcreations',
    caption: 'this portfolio',
    href: 'https://julzcreations.com',
    svg: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#0a0e2b" />
        <text
          x="32"
          y="49"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, 'Times New Roman', serif"
          fontSize="48"
          fontWeight="700"
          fill="#fef9ed"
        >
          {'ȷ'}
        </text>
        <circle cx="32" cy="15" r="4" fill="#fcd34d" />
      </svg>
    ),
  },
  {
    name: 'Swirlie',
    caption: 'latte-art coffee shop app',
    href: 'https://swirlie.julzcreations.com',
    svg: (
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
          d="M52 36 C57 36 60 40 60 44 C60 48 57 51 52 51"
          stroke="#c67a5c"
          strokeWidth="2"
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
        <path
          d="M22 26 C22 18 27 15 25 7"
          stroke="#d4a843"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.6"
          fill="none"
        />
        <path
          d="M32 24 C32 16 28 12 31 5"
          stroke="#d4736c"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
          fill="none"
        />
        <path
          d="M40 26 C41 19 38 15 41 9"
          stroke="#7d9a7a"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.4"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: 'Travel Journal',
    caption: 'multi-user trip + expense tracker',
    href: 'https://travel-journal.julzcreations.com',
    svg: (
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
    name: 'JulzOps',
    caption: 'cozy ops dashboard',
    href: 'https://ops.julzcreations.com',
    svg: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="brand-jzg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff8fab" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill="url(#brand-jzg)" />
        <text
          x="32"
          y="46"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="40"
          fontWeight="600"
          fill="#fff0f7"
        >
          J
        </text>
        <circle cx="46" cy="20" r="3" fill="#fcd34d" />
      </svg>
    ),
  },
  {
    name: 'Market Insights',
    caption: 'AI signal sweeps with Discord alerts',
    href: 'https://insights.julzcreations.com',
    svg: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#2e1065" />
        <path
          d="M10 44 L22 32 L32 40 L52 18"
          stroke="#ff8fab"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="52" cy="18" r="5" fill="#fcd34d" />
        <circle cx="22" cy="32" r="2.6" fill="#a78bfa" />
        <circle cx="32" cy="40" r="2.6" fill="#a78bfa" />
      </svg>
    ),
  },
  {
    name: 'SubTracker',
    caption: 'subscriptions, charges, renewals',
    href: 'https://subs.julzcreations.com',
    svg: (
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
      <p className="mb-12 max-w-[58ch] text-[1.05rem] leading-relaxed text-ink/85">
        Six apps. Six brand marks. I made the apps and the icons.
      </p>

      <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
        {tiles.map((tile) => {
          const inner = (
            <>
              <div className="mb-3 flex h-[88px] w-[88px] items-center justify-center overflow-hidden rounded-2xl border border-ink/10 shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                <div className="h-[72px] w-[72px]">{tile.svg}</div>
              </div>
              <h3
                className="font-display text-[1.05rem] font-medium leading-snug"
                style={{ fontVariationSettings: "'opsz' 30, 'SOFT' 80" }}
              >
                {tile.name}
              </h3>
              <p className="mt-0.5 text-[0.85rem] sm:text-[0.92rem] leading-snug text-ink/75">
                {tile.caption}
              </p>
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
    </section>
  )
}
