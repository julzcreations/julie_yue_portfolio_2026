'use client'

import { useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

/**
 * Expand/collapse for the long-form story under each Featured card.
 * React-state driven with CSS transitions on grid-template-rows + opacity.
 * Both directions animate consistently — `<details>` had a UA-stylesheet
 * issue where close + reopen snapped instantly after the first open.
 */
export default function ExpandableStory({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        className="cursor-pointer text-[0.85rem] sm:text-[0.92rem] font-semibold uppercase tracking-[0.15em] text-sky transition-colors hover:underline"
      >
        {isOpen ? 'Hide the story ↑' : 'Read the story ↓'}
      </button>
      <div
        className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-[600ms] ease-out"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="min-h-0">{children}</div>
      </div>
    </div>
  )
}
