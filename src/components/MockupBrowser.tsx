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
    // Outer frame — like a matted picture frame around the screenshot
    <div className="rounded-md bg-paper-warm p-1 shadow-[0_3px_10px_rgba(21,18,58,0.10),0_1px_3px_rgba(21,18,58,0.06)] ring-1 ring-ink/15">
      <div className="overflow-hidden rounded-sm border border-ink/15 bg-paper">
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
    </div>
  )
}
