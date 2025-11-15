'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const benefits = [
  {
    title: 'Commitment to Value',
    description:
      'We are committed to delivering tangible value that supports your business goals.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: 'Strong Partnerships',
    description:
      'We leverage local and global vendor partnerships to bring you the best solutions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Experience & Knowledge',
    description:
      'Diversified experience and skills covering all aspects of low current systems.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    title: 'Agile Project Management',
    description:
      'We adapt to your needs with agile solutions that fit your requirements.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Understanding of Needs',
    description:
      'We listen first to understand the needs of your business and stakeholders.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Proven Track Record',
    description:
      'Our team has a history of proven achievements and success stories.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      id="why-us"
      ref={ref}
      className="py-20 lg:py-32 bg-graphite text-white relative overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-red/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-red/10 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-heading text-sm font-heading-bold text-primary-red uppercase tracking-wider">
            Why Matrix Experts
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mt-4 mb-6">
            Our Value Proposition
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative"
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary-red/50 transition-all duration-300 h-full"
                animate={{
                  scale: hovered === index ? 1.05 : 1,
                  boxShadow:
                    hovered === index
                      ? '0 20px 40px rgba(179, 0, 0, 0.3)'
                      : '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-red/20 rounded-lg text-primary-red flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-body text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="font-heading text-sm font-heading-bold text-gray-400 uppercase tracking-wider mb-8">
            Certified & Compliant
          </h3>
          <div className="flex justify-center items-center space-x-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-2xl text-white">
                  ISO
                </span>
              </div>
              <p className="font-body text-sm text-gray-300">ISO Certified</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="font-heading font-bold text-xl text-white">
                  DEFENSE
                </span>
              </div>
              <p className="font-body text-sm text-gray-300">
                Defense Certified
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}





