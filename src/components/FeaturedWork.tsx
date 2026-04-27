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

      {/* Personal projects footer — slim reference so smaller side projects
          aren't buried under the enterprise-leaning featured cards. */}
      <div className="mt-16 border-t border-cream/15 pt-8">
        <p className="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-cream/65">
          More personal projects
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem] text-cream/75">
          <li>
            <a
              href="https://github.com/julzcreations/travel-journal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky underline-offset-4 transition-colors hover:underline"
            >
              Travel Journal
            </a>
          </li>
          <li>
            <a
              href="https://github.com/julzcreations/julzops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky underline-offset-4 transition-colors hover:underline"
            >
              JulzOps
            </a>
          </li>
          <li>
            <a
              href="https://github.com/julzcreations/market-insights"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky underline-offset-4 transition-colors hover:underline"
            >
              Market Insights
            </a>
          </li>
          <li>
            <a
              href="https://github.com/julzcreations/closet-stories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky underline-offset-4 transition-colors hover:underline"
            >
              Closet Stories <span className="text-cream/45">(App Store)</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/julzcreations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky underline-offset-4 transition-colors hover:underline"
            >
              see all on GitHub →
            </a>
          </li>
        </ul>
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
    'Galls Tooling + Integrations': 'Galls Integrations',
    'IG-Stats MCP': 'IG-Stats MCP',
  }
  return map[fullTitle] ?? fullTitle
}
