import Image from 'next/image'

type Props = {
  src: string
  alt: string
  /** Optional small badge SVG (favicon) to overlay in the top-left */
  badge?: React.ReactNode
}

/**
 * Phone-frame mockup for mobile-app screenshots. Aspect 9/19.5 (iPhone-ish).
 * Frame is a soft dark border with rounded corners + a small notch at top.
 */
export default function MockupMobile({ src, alt, badge }: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[260px]">
      {/* Outer phone frame */}
      <div
        className="relative aspect-[9/19.5] rounded-[2.4rem] bg-gradient-to-br from-[#1a1530] to-[#241b3d] p-[6px] shadow-[0_18px_38px_rgba(21,18,58,0.18),0_4px_10px_rgba(21,18,58,0.10)]"
      >
        {/* Inner screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-paper-warm">
          <Image
            src={src}
            alt={alt}
            width={540}
            height={1170}
            className="h-full w-full object-cover object-top"
            sizes="260px"
          />
          {/* Subtle screen shine overlay */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent"
          />
          {/* Notch */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[6px] h-[18px] w-[88px] -translate-x-1/2 rounded-full bg-[#1a1530]"
          />
        </div>
      </div>

      {/* Favicon badge (optional) */}
      {badge ? (
        <div className="absolute -left-3 -top-3 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-ink/10 bg-paper shadow-md">
          <div className="h-9 w-9">{badge}</div>
        </div>
      ) : null}
    </div>
  )
}
