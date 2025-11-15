'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

interface Speciality {
  id: string
  title: string
  description: string
  image: string
  icon: string
  items: string[]
}

const specialities: Speciality[] = [
  {
    id: 'security',
    title: 'Security',
    description: 'Comprehensive security solutions',
    image: '/images/security-shield.jpg',
    icon: '🛡️',
    items: [
      'CCTV',
      'Access Control',
      'Biometric Solutions',
      'Facility Safety and Protection',
    ],
  },
  {
    id: 'networking',
    title: 'Networking',
    description: 'Robust network infrastructure',
    image: '/images/networking-grid.jpg',
    icon: '🌐',
    items: [
      'Network Design',
      'Server Rooms & Data Centers',
      'Cabling and Wiring',
      'WiFi & Wireless Solutions',
    ],
  },
  {
    id: 'smart-solutions',
    title: 'Video, Audio & Smart Solutions',
    description: 'Advanced smart solutions',
    image: '/images/ai-landscape.jpg',
    icon: '🎬',
    items: [
      'IPTV',
      'Video Conferencing',
      'Public Addressing',
      'Automation',
      'IP Telephony Systems',
      'Intercom and Paging',
    ],
  },
  {
    id: 'support',
    title: 'Support & Sustainability',
    description: 'Continuous support and sustainability',
    image: '/images/support-lifebuoy.jpg',
    icon: '🔄',
    items: [
      'Preventive & Corrective Maintenance',
      'Annual Maintenance Contracts',
      'ESG Compliance Support',
    ],
  },
  {
    id: 'digital-it',
    title: 'Digital & IT Services',
    description: 'Complete digital transformation',
    image: '/images/digital-cube.jpg',
    icon: '💻',
    items: [
      'Managed IT Services',
      'Front End Design & Development',
      'Network & IT Infrastructure',
      'System & Network Administration',
      'Services through Outsourcing',
    ],
  },
]

export default function Specialities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [flipped, setFlipped] = useState<string | null>(null)

  return (
    <section
      id="specialities"
      ref={ref}
      className="py-20 lg:py-32 bg-lightGray relative overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-heading text-sm font-heading-bold text-primary-red uppercase tracking-wider">
            Our Specialities
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-graphite mt-4 mb-6">
            A Full Spectrum of Expertise
          </h2>
          <p className="font-body text-lg text-graphite/70 leading-relaxed">
            We strongly believe that it is never what you chose, it is how to
            implement and utilize that solution to the best interest of your
            business and stakeholders.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialities.map((speciality, index) => (
            <motion.div
              key={speciality.id}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flip-card-container"
              style={{ perspective: '1000px', height: '400px' }}
              onClick={() =>
                setFlipped(flipped === speciality.id ? null : speciality.id)
              }
            >
              <motion.div
                className="flip-card relative w-full h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transform:
                    flipped === speciality.id
                      ? 'rotateY(180deg)'
                      : 'rotateY(0deg)',
                }}
                animate={{
                  rotateY: flipped === speciality.id ? 180 : 0,
                }}
                transition={{ duration: 0.6 }}
              >
                {/* Front */}
                <div
                  className="flip-card-front absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <div className="relative h-3/5 w-full">
                    <Image
                      src={speciality.image}
                      alt={speciality.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-4xl mb-2">{speciality.icon}</div>
                      <h3 className="font-heading font-bold text-2xl text-white">
                        {speciality.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between h-2/5">
                    <p className="font-body text-graphite/70 text-sm">
                      {speciality.description}
                    </p>
                    <span className="font-body text-body-medium text-primary-red mt-4">
                      Click for details →
                    </span>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="flip-card-back absolute inset-0 w-full h-full rounded-xl bg-graphite text-white p-6 overflow-y-auto"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <h3 className="font-heading font-bold text-2xl text-primary-red mb-4">
                    {speciality.title}
                  </h3>
                  <ul className="space-y-3">
                    {speciality.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center font-body text-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-3 text-primary-red flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}





