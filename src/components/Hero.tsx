export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Pastel accent blobs (Variant A — restrained, only 3) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-20 z-0 h-[32rem] w-[32rem] rounded-full bg-sky opacity-[0.22] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 z-0 h-[36rem] w-[36rem] rounded-full bg-fuchsia opacity-[0.14] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-[50%] z-0 h-72 w-72 rounded-full bg-amber opacity-[0.12] blur-[100px]"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1080px] flex-col px-6 pb-20 pt-12 sm:px-12">
        {/* Top nav */}
        <nav className="mb-32 flex items-baseline justify-between">
          <span
            className="reveal reveal-1 font-display text-lg font-medium tracking-tight"
            style={{ fontVariationSettings: "'opsz' 20, 'SOFT' 50" }}
          >
            Julie Yue
          </span>
          <span className="reveal reveal-1 text-sm text-cream/55">
            Austin, TX · @julzcreations
          </span>
        </nav>

        {/* Hero content */}
        <div className="flex flex-1 flex-col justify-center">
          <h1
            className="reveal reveal-2 mb-9 max-w-[18ch] font-display text-[clamp(2.6rem,6.5vw,5.2rem)] font-normal leading-[1.05] tracking-tight"
            style={{
              fontVariationSettings: "'opsz' 144, 'SOFT' 80, 'WONK' 0",
            }}
          >
            Engineer who ships with{' '}
            <span className="relative inline-block px-[0.1em]">
              AI
              <svg
                className="absolute -left-[0.25em] -top-[0.3em] h-[calc(100%+0.6em)] w-[calc(100%+0.5em)]"
                viewBox="0 0 180 120"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 35 60 Q 18 25, 55 15 Q 110 8, 150 22 Q 172 35, 168 68 Q 162 95, 120 104 Q 65 110, 32 82 Q 18 65, 38 58"
                  fill="none"
                  stroke="var(--amber)"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: 600,
                    strokeDashoffset: 600,
                    animation:
                      'drawCircle 1.6s cubic-bezier(0.4, 0, 0.2, 1) 1.1s forwards',
                    opacity: 0.9,
                  }}
                />
                <style>{`@keyframes drawCircle { to { stroke-dashoffset: 0; } }`}</style>
              </svg>
            </span>
            ,
            <br />
            not around it.
          </h1>

          <p className="reveal reveal-3 mb-12 max-w-[58ch] text-[clamp(1.1rem,1.5vw,1.3rem)] leading-relaxed text-cream/85">
            Product-minded frontend engineer who directs AI agents to ship systems I design.
          </p>

          <p className="reveal reveal-4 max-w-[60ch] border-l-2 border-sky pl-6 text-[1.1rem] font-normal leading-[1.7] text-cream/90">
            <span className="mr-2 inline-block text-[0.85rem] font-semibold uppercase tracking-[0.06em] text-sky">
              Currently —
            </span>
            On the BigCommerce team at Galls — building out a component system and shipping a loyalty integration; running a daily AI content pipeline at home.
          </p>

          <a
            href="#work"
            aria-label="Scroll to featured work"
            className="reveal reveal-5 mt-20 inline-flex flex-col items-start gap-3 text-[0.78rem] uppercase tracking-[0.25em] text-cream/70 transition-colors hover:text-sky"
          >
            <span className="flex items-center gap-3">
              Work
              <span
                aria-hidden="true"
                className="block h-px w-10 bg-gradient-to-r from-cream/55 to-transparent"
              />
            </span>
            <svg
              aria-hidden="true"
              viewBox="0 0 32 56"
              className="h-12 w-7 origin-center animate-[scrollPulse_3s_ease-in-out_infinite]"
            >
              <path
                d="M 16 4 Q 14 22, 16 42"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                opacity="0.65"
              />
              <path
                d="M 9 35 Q 16 46, 23 35"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.85"
              />
              <style>{`@keyframes scrollPulse {
                0%, 100% { transform: scale(1); opacity: 0.6; }
                50% { transform: scale(1.08); opacity: 1; }
              }`}</style>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
