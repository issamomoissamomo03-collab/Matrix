'use client'

import { PARTNERS, PARTNERS_COUNT } from '@/data/partners'
import PartnerLogo from './PartnerLogo'
import { useEffect } from 'react'

export default function PartnersSection() {
  useEffect(() => {
    // Basic verification
    console.info(
      `[Partners] Rendering ${PARTNERS.length} records (manifest count = ${PARTNERS_COUNT}).`
    )
  }, [])

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-graphite mb-6">
            Our Partners
          </h2>
          <p className="font-body text-lg text-graphite/70 leading-relaxed">
            Proudly collaborating with leading technology partners
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 justify-items-center">
          {PARTNERS.map((partner) => (
            <PartnerLogo key={partner.id} item={partner} />
          ))}
        </div>

        {/* Mobile Marquee */}
        <div className="md:hidden overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap">
            {PARTNERS.concat(PARTNERS).map((partner, i) => (
              <div key={`${partner.id}-${i}`} className="flex-shrink-0">
                <PartnerLogo item={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  )
}




