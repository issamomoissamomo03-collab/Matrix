'use client'

import { CLIENTS } from '@/data/clients'
import ClientLogo from './ClientLogo'
import { useEffect } from 'react'

export default function ClientsSection() {
  useEffect(() => {
    // Basic verification
    console.info(`[Clients] Rendering ${CLIENTS.length} records.`)
  }, [])

  return (
    <section className="py-20 lg:py-32 bg-lightGray relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-graphite mb-4">
            Our Clients
          </h2>
          <p className="font-body text-lg text-graphite/70 leading-relaxed">
            Trusted by leading organizations across various industries
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 justify-items-center">
          {CLIENTS.map((c) => (
            <ClientLogo key={c.id} item={c} />
          ))}
        </div>

        {/* Mobile Marquee */}
        <div className="md:hidden overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-4 animate-[marquee_18s_linear_infinite]">
            {CLIENTS.concat(CLIENTS).map((c, i) => (
              <ClientLogo key={`${c.id}-${i}`} item={c} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
