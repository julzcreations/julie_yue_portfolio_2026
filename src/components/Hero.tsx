'use client'

import { useEffect, useState, type MouseEvent } from 'react'

function handleScrollClick(event: MouseEvent<HTMLAnchorElement>) {
  const href = event.currentTarget.getAttribute('href')
  if (!href || !href.startsWith('#')) return
  const target = document.querySelector(href) as HTMLElement | null
  if (!target) return
  event.preventDefault()

  const start = window.scrollY
  const SCROLL_LAND_OFFSET = 72
  const targetY = target.getBoundingClientRect().top + start + SCROLL_LAND_OFFSET

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
    const eased = 1 - Math.pow(1 - progress, 3)
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
      setScrolledPast(window.scrollY > 60)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const arrowVisible = mounted && !scrolledPast

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 py-16 sm:px-8 sm:py-24">
      {/* Pastel accent blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-20 z-0 h-[32rem] w-[32rem] rounded-full bg-sky opacity-[0.18] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 z-0 h-[36rem] w-[36rem] rounded-full bg-fuchsia opacity-[0.14] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[18%] top-[50%] z-0 h-72 w-72 rounded-full bg-amber opacity-[0.10] blur-[100px]"
      />

      {/* Hero content — no paper card, sits directly on the warm gradient */}
      <div className="relative z-10 w-full max-w-[1000px] px-2 sm:px-4">
        {/* Top nav */}
        <nav className="mb-20 flex items-baseline justify-between gap-4 sm:mb-24">
          <span
            className="reveal reveal-1 font-display text-[1.05rem] font-medium tracking-tight sm:text-[1.2rem]"
            style={{ fontVariationSettings: "'opsz' 22, 'SOFT' 60" }}
          >
            Julie Yue
          </span>
          <span className="reveal reveal-1 text-[0.85rem] sm:text-[0.95rem] text-ink/75">
            Austin, TX · @julzcreations
          </span>
        </nav>

        {/* Hero content */}
        <div>
          <h1
            className="reveal reveal-2 mb-9 max-w-[26ch] font-display text-[clamp(2.4rem,6vw,4.8rem)] font-normal leading-[1.05] tracking-tight"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80, 'WONK' 0" }}
          >
            Hi. My name is{' '}
            <span
              className="bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#ec4899] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: 'text' }}
            >
              Julie Yue
            </span>
            .
            <br />
            Lately, with{' '}
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
                    animation: 'drawCircle 1.6s cubic-bezier(0.4, 0, 0.2, 1) 1.1s forwards',
                    opacity: 0.9,
                  }}
                />
              </svg>
            </span>
            .
          </h1>

          <p className="reveal reveal-3 mb-10 max-w-[58ch] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-ink/90">
            Features, integrations, and reusable UI systems across modern and legacy platforms.
          </p>

          <p className="reveal reveal-4 max-w-[60ch] border-l-2 border-sky pl-6 text-[1.05rem] font-normal leading-[1.7] text-ink">
            <span className="mr-2 inline-block text-[0.85rem] sm:text-[0.95rem] font-semibold uppercase tracking-[0.06em] text-sky">
              Currently
            </span>
            At Galls, I&apos;m giving one of our brands, Tactical Gear, a new look and new home on BigCommerce Catalyst.
          </p>
        </div>
      </div>

      {/* Floating scroll-to-work arrow — pinned to viewport bottom */}
      <div
        aria-hidden={!arrowVisible}
        className={`pointer-events-none fixed inset-x-0 bottom-2 z-30 transition-opacity duration-500 ${
          arrowVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="relative mx-auto max-w-[1080px] px-6 sm:px-12">
          <a
            href="#work"
            onClick={handleScrollClick}
            aria-label="Scroll to featured work"
            tabIndex={arrowVisible ? 0 : -1}
            className={`pointer-events-auto inline-flex flex-col items-start gap-3 text-[0.82rem] sm:text-[0.92rem] uppercase tracking-[0.25em] text-ink/85 transition-colors hover:text-sky ${
              arrowVisible ? '' : 'pointer-events-none'
            }`}
          >
            <span className="flex items-center gap-3">
              Work
              <span
                aria-hidden="true"
                className="block h-px w-10 bg-gradient-to-r from-ink/55 to-transparent"
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
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
