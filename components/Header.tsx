'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#specialities', label: 'Specialities' },
    { href: '#what-we-do', label: 'What We Do' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#sectors', label: 'Sectors' },
    { href: '#partners', label: 'Partners' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Matrix Experts Logo"
              width={320}
              height={80}
              className="h-16 md:h-32 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-body-medium text-graphite hover:text-primary-red transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-red group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="#contact"
              className="gradient-red text-white px-6 py-2.5 rounded-lg font-body text-body-medium hover:shadow-glow-red transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button - Logo with Animation */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red focus:ring-offset-2"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                rotate: isMobileMenuOpen ? 180 : 0,
                scale: isMobileMenuOpen ? 1.1 : [1, 1.05, 1],
              }}
              transition={{
                rotate: { duration: 0.4, ease: "easeInOut" },
                scale: {
                  duration: isMobileMenuOpen ? 0.4 : 2,
                  repeat: isMobileMenuOpen ? 0 : Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative"
            >
              <Image
                src="/images/logo.png"
                alt="Matrix Experts Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain drop-shadow-lg"
                priority
              />
              {/* Glow effect when menu is open */}
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-primary-red/20 rounded-full blur-xl -z-10"
                />
              )}
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-lightGray"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-graphite hover:text-primary-red transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center gradient-red text-white px-6 py-3 rounded-lg font-body text-body-medium mt-4"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

