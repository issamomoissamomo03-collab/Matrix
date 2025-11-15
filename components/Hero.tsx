'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    camera.position.z = 30

    // Create particles
    const particleCount = 2000
    const particles = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xb30000,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    })

    const particleSystem = new THREE.Points(particles, particleMaterial)
    scene.add(particleSystem)

    // Animation
    let animationFrameId: number
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      particleSystem.rotation.y += 0.001
      particleSystem.rotation.x += 0.0005
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      particles.dispose()
      particleMaterial.dispose()
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-lightGray to-white"
    >
      {/* 3D Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Content */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-graphite mb-6 leading-tight"
          >
            Empowering Businesses with{' '}
            <span className="text-primary-red">Smart IT Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-xl md:text-2xl text-graphite/70 mb-12 space-x-4"
          >
            <span className="font-body-medium">Innovation.</span>
            <span className="font-body-medium">Integration.</span>
            <span className="font-body-medium">Impact.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#about"
              className="inline-block gradient-red text-white px-10 py-4 rounded-lg font-body text-body-medium text-lg hover:shadow-glow-red transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Discover More</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-red rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary-red rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

