'use client'

import { useState } from 'react'
import { featuredCards } from '@/content/featured'
import FeaturedCard from './FeaturedCard'

export default function FeaturedWork() {
  const [activeIdx, setActiveIdx] = useState(0)

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setActiveIdx((i) => (i + 1) % featuredCards.length)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setActiveIdx((i) => (i - 1 + featuredCards.length) % featuredCards.length)
    } else if (event.key === 'Home') {
      event.preventDefault()
      setActiveIdx(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      setActiveIdx(featuredCards.length - 1)
    }
  }

  const active = featuredCards[activeIdx]

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

      {/* Tab list */}
      <div
        role="tablist"
        aria-label="Featured projects"
        onKeyDown={handleKeyDown}
        className="mb-10 flex gap-1 overflow-x-auto scroll-pl-4 border-b border-ink/15 pb-px [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {featuredCards.map((card, idx) => {
          const selected = idx === activeIdx
          return (
            <button
              key={card.number}
              role="tab"
              type="button"
              id={`tab-${card.number}`}
              aria-selected={selected}
              aria-controls={`panel-${card.number}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIdx(idx)}
              className={[
                'group relative flex flex-shrink-0 items-baseline gap-2 whitespace-nowrap px-4 pb-3.5 pt-1.5 text-[0.92rem] transition-colors',
                selected ? 'font-semibold text-sky' : 'font-medium text-ink/75 hover:text-ink',
              ].join(' ')}
            >
              <span
                className={[
                  'text-[0.8rem] sm:text-[0.92rem] tracking-[0.18em]',
                  selected ? 'text-sky' : 'text-ink/75',
                ].join(' ')}
              >
                {card.number}
              </span>
              <span>{tabLabel(card.title)}</span>
              <span
                aria-hidden="true"
                className={[
                  'pointer-events-none absolute bottom-[-1px] left-2 right-2 rounded-full bg-sky transition-all duration-300',
                  selected ? 'h-[3px] opacity-100' : 'h-[2px] opacity-0',
                ].join(' ')}
              />
            </button>
          )
        })}
      </div>

      {/* Active panel — keyed so it remounts on tab switch (clean fade-in) */}
      <div
        key={active.number}
        role="tabpanel"
        id={`panel-${active.number}`}
        aria-labelledby={`tab-${active.number}`}
        className="animate-[fadeIn_0.35s_ease-out]"
      >
        <FeaturedCard card={active} />
      </div>
    </section>
  )
}

/** Compact tab label */
function tabLabel(fullTitle: string): string {
  const map: Record<string, string> = {
    'Swirl Ecosystem + IG-Stats MCP': 'Swirl + IG-Stats',
    'Galls Tooling + Integrations': 'Galls Integrations',
    'Galls AI Shopping Drawer': 'AI Drawer',
    'Galls Location Tracker + EDD/EST': 'Location + EDD',
    'Accessibility + Performance': 'A11y + Perf',
  }
  return map[fullTitle] ?? fullTitle
}
