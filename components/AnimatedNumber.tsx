'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedNumberProps {
  value: string // e.g., "99%", "100+", "150+"
  duration?: number // animation duration in ms
  className?: string
}

export default function AnimatedNumber({ value, duration = 2000, className = '' }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [displayValue, setDisplayValue] = useState(0)
  const animationStarted = useRef(false)

  // Parse value to extract number and suffix
  const parseValue = (val: string) => {
    const match = val.match(/(\d+)([%+]?)/)
    if (!match) return { number: 0, suffix: '' }
    return {
      number: parseInt(match[1], 10),
      suffix: match[2] || '',
    }
  }

  const { number: targetValue, suffix } = parseValue(value)

  useEffect(() => {
    // ابدأ الأنيميشن فقط إذا كان العنصر مرئياً ولم يبدأ التنفيذ بعد
    if (!isInView || animationStarted.current) {
      return
    }

    animationStarted.current = true
    const startTime = Date.now()
    let animationFrameId: number | null = null

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      const currentValue = Math.floor(targetValue * easeOut)
      setDisplayValue(currentValue)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        // تأكد من الوصول للقيمة النهائية بالضبط
        setDisplayValue(targetValue)
      }
    }

    // ابدأ الأنيميشن بعد تأخير صغير للتأكد من أن العنصر مرئي
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isInView, targetValue, duration])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {displayValue}
      {suffix && <span>{suffix}</span>}
    </motion.span>
  )
}

