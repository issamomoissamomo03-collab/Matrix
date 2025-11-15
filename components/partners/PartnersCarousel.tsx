'use client'

import { useEffect, useState } from 'react'
import { PARTNERS, PARTNERS_COUNT } from '@/data/partners'
import PartnerLogo from './PartnerLogo'

export default function PartnersCarousel() {
  const [index, setIndex] = useState(0)
  const perView = 4 // عدد العناصر المعروضة
  const total = PARTNERS.length

  // تلقائي
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 3500)
    return () => clearInterval(id)
  }, [total])

  useEffect(() => {
    // Verification
    console.info(`[Partners] Rendering ${PARTNERS.length} records (manifest count = ${PARTNERS_COUNT}).`)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  // مجموعة العناصر الحالية
  const items = Array.from({ length: perView }, (_, k) => PARTNERS[(index + k) % total])

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-graphite mb-4">
            Our Partners
          </h2>
          <p className="font-body text-lg text-graphite/70 leading-relaxed">
            Proudly collaborating with leading technology partners
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-6">
          {/* Previous Button */}
          <button
            onClick={prev}
            aria-label="Previous partners"
            className="
              hidden md:flex
              w-12 h-12 rounded-full
              bg-white border border-gray-200 shadow-sm
              hover:bg-gray-50 hover:shadow-md
              transition-all duration-300
              items-center justify-center
              text-2xl text-graphite
              flex-shrink-0
            "
          >
            ‹
          </button>

          {/* Carousel Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-items-center">
            {items.map((p) => (
              <PartnerLogo key={p.id} item={p} />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            aria-label="Next partners"
            className="
              hidden md:flex
              w-12 h-12 rounded-full
              bg-white border border-gray-200 shadow-sm
              hover:bg-gray-50 hover:shadow-md
              transition-all duration-300
              items-center justify-center
              text-2xl text-graphite
              flex-shrink-0
            "
          >
            ›
          </button>
        </div>

        {/* Mobile Indicators */}
        <div className="md:hidden flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(total / perView) }, (_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i * perView)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${Math.floor(index / perView) === i ? 'bg-primary-red w-6' : 'bg-gray-300'}
              `}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Desktop Indicators */}
        <div className="hidden md:flex justify-center mt-8 gap-2">
          {PARTNERS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === i ? 'bg-primary-red' : 'bg-gray-300'}
              `}
              aria-label={`Go to partner ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}




