import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-zen-kaku)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      colors: {
        // Warm cream backdrop (was cold navy)
        'bg-deep': '#fef3ec',
        'bg-mid': '#fde8dc',
        'bg-warm': '#fef0e6',

        // Paper (slightly lighter than backdrop so cards still read as "page")
        paper: '#fffdf7',
        'paper-warm': '#fef9ee',

        // Ink — warm aubergine (text on cream)
        ink: '#3a2a4a',

        // Cream token now serves text-on-cream-backdrop role
        // (remapped to aubergine so all existing `text-cream/*` utilities read correctly)
        cream: '#3a2a4a',

        // Pastel accents — warm-rotated set (peach / coral / butter / sage / lavender / rose)
        sky: '#2a1f4a',      // dark plum-indigo — links, borders, tab indicator (bluer + darker for visibility)
        fuchsia: '#fda4af',  // coral
        amber: '#f59e0b',    // saturated golden-orange (still visible on cream)
        emerald: '#bbf7d0',  // sage
        violet: '#ddd6fe',   // lavender
        pink: '#fbcfe8',

        // Heading + frame accent — deep mauve (replaces accent-navy)
        'accent-navy': '#7a3b5c',
      },
      keyframes: {
        reveal: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        drawCircle: {
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        reveal: 'reveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
}

export default config
