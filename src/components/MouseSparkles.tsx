'use client'

import { useEffect, useRef, useState } from 'react'

type Sparkle = { id: number; x: number; y: number; size: number; dx: number }

const SPAWN_THROTTLE_MS = 65
const SPARKLE_LIFE_MS = 900
const MAX_ACTIVE = 14

export default function MouseSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const lastSpawn = useRef(0)
  const idRef = useRef(0)

  useEffect(() => {
    // Skip on reduced-motion preference and touch-only devices
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return

    function onMove(e: MouseEvent) {
      const now = performance.now()
      if (now - lastSpawn.current < SPAWN_THROTTLE_MS) return
      lastSpawn.current = now

      const id = idRef.current++
      const sparkle: Sparkle = {
        id,
        x: e.clientX,
        y: e.clientY,
        // Newest sparkles spawn larger (near the cursor); animation shrinks them as they trail.
        size: 4 + Math.random() * 5,
        dx: (Math.random() - 0.5) * 26,
      }
      setSparkles((prev) => [...prev.slice(-(MAX_ACTIVE - 1)), sparkle])

      window.setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id))
      }, SPARKLE_LIFE_MS)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            ['--sparkle-dx' as string]: `${s.dx}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
