import Image from 'next/image'

type Props = {
  src: string
  alt: string
  /** Optional URL to display in the address bar */
  url?: string
}

/**
 * Browser-window frame for web app / desktop screenshots.
 * Three traffic-light dots + an optional URL bar.
 */
export default function MockupBrowser({ src, alt, url }: Props) {
  return (
    <div className="overflow-hidden rounded-lg border border-ink/10 bg-paper shadow-[0_10px_28px_rgba(21,18,58,0.10),0_2px_6px_rgba(21,18,58,0.05)]">
      {/* Chrome */}
      <div className="flex items-center gap-2 border-b border-ink/10 bg-paper-warm/50 px-3 py-2">
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#fda4af]" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#fde68a]" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#bbf7d0]" />
        {url ? (
          <span className="ml-3 truncate rounded-md bg-paper px-2 py-0.5 text-[0.72rem] sm:text-[0.78rem] text-ink/55">
            {url}
          </span>
        ) : null}
      </div>
      {/* Screen */}
      <div className="aspect-[16/10] bg-paper-warm/30">
        <Image
          src={src}
          alt={alt}
          width={1280}
          height={800}
          className="h-full w-full object-cover object-top"
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
        />
      </div>
    </div>
  )
}
