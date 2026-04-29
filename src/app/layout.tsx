import type { Metadata } from 'next'
import { Fraunces, Zen_Kaku_Gothic_New, Lora } from 'next/font/google'
import MouseSparkles from '@/components/MouseSparkles'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
})

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  variable: '--font-zen-kaku',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Julie Yue — engineer who ships with AI',
  description:
    'Product-minded frontend engineer. Five years shipping production work — the last two, shipping with AI.',
  metadataBase: new URL('https://julzcreations.com'),
  openGraph: {
    title: 'Julie Yue — engineer who ships with AI',
    description:
      'Product-minded frontend engineer. Five years shipping production work — the last two, shipping with AI.',
    url: 'https://julzcreations.com',
    siteName: 'Julie Yue',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${zenKaku.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        <MouseSparkles />
        {children}
      </body>
    </html>
  )
}
