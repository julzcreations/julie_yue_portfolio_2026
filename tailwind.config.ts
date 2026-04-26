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
        // Navy backdrop
        'bg-deep': '#0a0e2b',
        'bg-mid': '#1e1b4b',
        'bg-warm': '#2a1b5a',

        // Paper (light surface for case study cards / detail pages)
        paper: '#fffefc',
        'paper-warm': '#fff8e0',

        // Ink (text on paper)
        ink: '#12163a',

        // Cream (text on dark navy)
        cream: '#fef9ed',

        // Pastel accents (for blob gradients, hand-drawn marks)
        sky: '#7dd3fc',
        fuchsia: '#f0abfc',
        amber: '#fcd34d',
        emerald: '#6ee7b7',
        violet: '#c4b5fd',
        pink: '#fbcfe8',

        // Accent navy (links, hand-drawn marks)
        'accent-navy': '#1e3a8a',
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
