'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const sectors = [
  {
    name: 'Oil & Gas',
    description: 'Improving operational efficiency',
    stat: '99%',
    statLabel: 'Uptime',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    name: 'Education',
    description: 'Enabling student innovation',
    stat: '100+',
    statLabel: 'Institutions',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    name: 'Logistics',
    description: 'Optimizing supply chains',
    stat: '150+',
    statLabel: 'Projects',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    description: 'Impacting healthy lives',
    stat: '30+',
    statLabel: 'Partners',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Hospitality',
    description: 'Enhancing guest experiences',
    stat: '50+',
    statLabel: 'Venues',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    name: 'Retail',
    description: 'Transforming customer experiences',
    stat: '75+',
    statLabel: 'Stores',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
  {
    name: 'Tech',
    description: 'Driving digital innovation',
    stat: '40+',
    statLabel: 'Companies',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    name: 'Construction',
    description: 'Building smart infrastructure',
    stat: '60+',
    statLabel: 'Projects',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
]

export default function Sectors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="sectors"
      ref={ref}
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-heading text-sm font-heading-bold text-primary-red uppercase tracking-wider">
            Sectors We Serve
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-graphite mt-4 mb-6">
            Expertise Across Key Sectors
          </h2>
          <p className="font-body text-lg text-graphite/70 leading-relaxed">
            We empower leaders across vital industries including oil and gas,
            education, logistics, health, hospitality, retail, telecom, tech,
            and more.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.name}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative group"
            >
              <motion.div
                className="bg-lightGray rounded-xl p-6 text-center hover-lift h-full flex flex-col items-center justify-center transition-all duration-300"
                animate={{
                  scale: hovered === index ? 1.05 : 1,
                }}
              >
                <motion.div
                  className="text-primary-red mb-4 transition-colors duration-300"
                  animate={{
                    color: hovered === index ? '#B30000' : '#B30000',
                    scale: hovered === index ? 1.1 : 1,
                  }}
                >
                  {sector.icon}
                </motion.div>
                <div className="text-4xl font-heading font-bold text-primary-red mb-2">
                  {sector.stat}
                </div>
                <p className="font-body text-sm text-graphite/60 mb-2">
                  {sector.statLabel}
                </p>
                <h3 className="font-heading font-bold text-lg text-graphite mb-2">
                  {sector.name}
                </h3>
                <p className="font-body text-sm text-graphite/70">
                  {sector.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}





