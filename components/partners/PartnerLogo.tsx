'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { PartnerItem } from '@/data/partners'

export default function PartnerLogo({ item }: { item: PartnerItem }) {
  const [err, setErr] = useState(false)
  const canShow = !!item.domain && !err
  const src = item.domain ? `https://logo.clearbit.com/${item.domain}?size=256` : ''

  const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div
      className="
        flex h-24 w-44 md:h-28 md:w-52 items-center justify-center
        rounded-xl border border-zinc-200 bg-white shadow-sm px-3
        transition hover:shadow-md hover:scale-[1.02]
      "
      title={item.name}
      aria-label={`${item.name} logo`}
    >
      {children}
    </div>
  )

  if (!canShow) {
    return (
      <Card>
        <span
          className="
            text-zinc-800 font-medium text-center leading-tight
            [font-size:clamp(12px,1.8vw,16px)]
            whitespace-normal break-words [text-wrap:balance]
          "
          dir="auto"
        >
          {item.name}
        </span>
      </Card>
    )
  }

  const img = (
    <Image
      src={src}
      alt={`${item.name} logo`}
      width={260}
      height={120}
      sizes="(max-width:768px) 50vw, 240px"
      className="
        max-h-[80px] w-auto object-contain
        grayscale opacity-80 transition
        hover:grayscale-0 hover:opacity-100
      "
      onError={() => setErr(true)}
      priority={false}
    />
  )

  return item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${item.name} website`}
    >
      <Card>{img}</Card>
    </a>
  ) : (
    <Card>{img}</Card>
  )
}
