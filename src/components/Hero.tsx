'use client'

import { useEffect, useState, type MouseEvent } from 'react'

function handleScrollClick(event: MouseEvent<HTMLAnchorElement>) {
  const href = event.currentTarget.getAttribute('href')
  if (!href || !href.startsWith('#')) return
  const target = document.querySelector(href) as HTMLElement | null
  if (!target) return
  event.preventDefault()

  const start = window.scrollY
  // Section has py-24 (96px) top padding before its heading — skip past most
  // of it so the "Featured work" h2 lands ~24px below the viewport top.
  const SCROLL_LAND_OFFSET = 72
  const targetY =
    target.getBoundingClientRect().top + start + SCROLL_LAND_OFFSET

  // Respect reduced-motion preference — jump instantly
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo({ top: targetY, behavior: 'instant' })
    return
  }

  const distance = targetY - start
  const duration = 700
  const startTime = performance.now()

  function step(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    // Ease-out cubic — snappy start, smooth deceleration into target
    const eased = 1 - Math.pow(1 - progress, 3)
    // 'instant' bypasses CSS scroll-behavior:smooth so each frame applies immediately
    window.scrollTo({ top: start + distance * eased, behavior: 'instant' })
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [scrolledPast, setScrolledPast] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    function onScroll() {
      // Hide as soon as the user starts scrolling — small threshold absorbs
      // touchpad jitter without letting the arrow overlap section content.
      setScrolledPast(window.scrollY > 60)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const arrowVisible = mounted && !scrolledPast

  return (
    <section className="relative">
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
                  d="M 32 58 C 22 32, 60 11, 102 12 C 148 14, 174 36, 164 68 C 156 100, 112 112, 76 106 C 44 100, 16 86, 28 54"
                  fill="none"
                  stroke="var(--amber)"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="rotate(-3 90 60)"
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

        </div>
      </div>

      {/* Floating scroll-to-work arrow — pinned to viewport bottom, aligned with the content column */}
      <div
        aria-hidden={!arrowVisible}
        className={`pointer-events-none fixed inset-x-0 bottom-6 z-30 transition-opacity duration-500 ${
          arrowVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative mx-auto max-w-[1080px] px-6 sm:px-12">
          <a
            href="#work"
            onClick={handleScrollClick}
            aria-label="Scroll to featured work"
            tabIndex={arrowVisible ? 0 : -1}
            className={`pointer-events-auto inline-flex flex-col items-start gap-3 text-[0.78rem] uppercase tracking-[0.25em] text-cream/70 transition-colors hover:text-sky ${
              arrowVisible ? '' : 'pointer-events-none'
            }`}
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
          className="h-12 w-7 origin-center animate-[scrollFloat_2.6s_ease-in-out_infinite]"
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
          <style>{`@keyframes scrollFloat {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
            50% { transform: translateY(-6px) scale(1.05); opacity: 1; }
          }`}</style>
        </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
