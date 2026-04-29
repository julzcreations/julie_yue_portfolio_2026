'use client'

import Image from 'next/image'
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
      <div className="relative z-10 w-full max-w-[1200px] px-2 sm:px-4">
        {/* Top nav */}
        <nav className="mb-16 flex items-baseline justify-between gap-4 sm:mb-20">
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

        {/* Two-column hero: text left, headshot right (stacks on mobile) */}
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left column — text */}
          <div className="flex-1">
            <h1
              className="reveal reveal-2 mb-9 max-w-[20ch] font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-normal leading-[1.05] tracking-tight"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80, 'WONK' 0" }}
            >
              Hi, I&apos;m{' '}
              <span
                className="font-serif bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#ec4899] bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: 'text', fontWeight: 600 }}
              >
                Julie Yue
              </span>
              .
            </h1>

            <p className="reveal reveal-3 mb-10 max-w-[58ch] text-[clamp(1.05rem,1.3vw,1.2rem)] leading-relaxed text-ink/90">
              I&apos;m a frontend engineer who designs and ships thoughtful UI systems—bringing strong visual taste and a growing focus on AI-powered, human-centered experiences.
            </p>

            <p className="reveal reveal-4 max-w-[58ch] border-l-2 border-sky pl-6 text-[1.05rem] font-normal leading-[1.7] text-ink">
              <span className="mr-2 inline-block text-[0.85rem] sm:text-[0.95rem] font-semibold uppercase tracking-[0.06em] text-sky">
                Currently
              </span>
              At Galls, I&apos;m giving one of our brands, Tactical Gear, a new look and new home on BigCommerce Catalyst.
            </p>
          </div>

          {/* Right column — headshot */}
          <div className="reveal reveal-2 w-full max-w-[320px] flex-shrink-0 self-center sm:max-w-[380px] lg:w-[380px] lg:self-center">
            <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper">
              <Image
                src="/work/julie_yue_headshot.png"
                alt="Julie Yue"
                width={760}
                height={760}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 380px, 90vw"
                priority
              />
            </div>
          </div>
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
