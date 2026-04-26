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
        className="mb-10 flex gap-1 overflow-x-auto scroll-pl-4 border-b border-cream/15 pb-px [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                'group relative flex flex-shrink-0 items-baseline gap-2 whitespace-nowrap px-4 pb-3.5 pt-1.5 text-[0.92rem] font-medium transition-colors',
                selected
                  ? 'text-cream'
                  : 'text-cream/55 hover:text-cream/90',
              ].join(' ')}
            >
              <span className="text-[0.72rem] tracking-[0.18em] text-cream/55">
                {card.number}
              </span>
              <span>{tabLabel(card.title)}</span>
              <span
                aria-hidden="true"
                className={[
                  'absolute bottom-[-1px] left-2 right-2 h-[2px] rounded-full transition-all duration-300',
                  selected ? 'bg-sky opacity-100' : 'bg-sky/0 opacity-0',
                ].join(' ')}
              />
            </button>
          )
        })}
      </div>

      {/* Active panel */}
      <div
        key={active.number}
        role="tabpanel"
        id={`panel-${active.number}`}
        aria-labelledby={`tab-${active.number}`}
        className="animate-[fadeIn_0.35s_ease-out]"
      >
        <FeaturedCard card={active} />
        <style>{`@keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }`}</style>
      </div>
    </section>
  )
}

/** Compact tab label — keeps tabs scannable without wrapping */
function tabLabel(fullTitle: string): string {
  const map: Record<string, string> = {
    'Swirl Series Ecosystem': 'Swirl Series',
    'Galls AI Shopping Drawer': 'AI Drawer',
    'Galls Location Tracker': 'Location Tracker',
    'Galls Tooling + Integrations': 'Tooling + Glue',
    'ig-stats': 'ig-stats',
  }
  return map[fullTitle] ?? fullTitle
}
