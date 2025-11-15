'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl -z-0" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Logo with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden glass-effect flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-red/10 via-graphite/5 to-transparent" />
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, rotate: 0 }
                  : { opacity: 0, scale: 0.5, rotate: -180 }
              }
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src="/images/logo.png"
                  alt="Matrix Experts Logo"
                  width={400}
                  height={200}
                  className="w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
                  priority
                />
                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-primary-red/20 rounded-full blur-3xl -z-10"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="font-heading text-sm font-heading-bold text-primary-red uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-graphite">
              About Matrix Experts
            </h2>
            <p className="font-body text-lg text-graphite/70 leading-relaxed">
              A team of professionals gathered with a vision to enable business
              transformation through innovative and creative solutions designed,
              implemented, and integrated using best practices and cutting-edge
              technologies.
            </p>
            <p className="font-body text-lg text-graphite/70 leading-relaxed">
              Collectively, we bring diverse experiences, achievements, skills,
              and know-how covering all aspects of low current systems including
              security, network, communication, audio visual, automation, and
              Smart Control and monitoring solutions with knowledge and
              experiences in digital infrastructure, operation management, and
              customer experience.
            </p>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 p-6 bg-graphite rounded-xl text-white hover-lift"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary-red rounded-lg flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl uppercase tracking-wider">
                  Our Vision
                </h3>
              </div>
              <p className="font-body text-xl font-body-medium text-primary-red">
                &ldquo;Driving the future of low current solutions&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


