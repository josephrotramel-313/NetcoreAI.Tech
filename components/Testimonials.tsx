'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcus D.',
    role: 'Owner, HVAC Pro Services',
    text: 'Net Core AI cut our missed calls to zero. The AI receptionist books more appointments than our front desk ever did — and it works at 2am when we\'re all asleep.',
    rating: 5,
    initials: 'MD',
    color: '#00F0FF',
  },
  {
    name: 'Jennifer L.',
    role: 'Founder, Premier Dental',
    text: 'We went from 3 booking staff to full automation in two weeks. The ROI was immediate. Our staff now focuses on patient care, not phone tag.',
    rating: 5,
    initials: 'JL',
    color: '#7A00FF',
  },
  {
    name: 'Derek T.',
    role: 'CEO, Apex Plumbing',
    text: 'The Google review agent got us from 80 to 340 reviews in 60 days. Our Google Maps ranking shot up and inbound calls tripled.',
    rating: 5,
    initials: 'DT',
    color: '#00F0FF',
  },
  {
    name: 'Sarah K.',
    role: 'Director, Cascade Wellness',
    text: 'Our FAQ bot handles 94% of inbound questions automatically. My team focuses only on high-value consultations now. Game changer.',
    rating: 5,
    initials: 'SK',
    color: '#7A00FF',
  },
  {
    name: 'Robert M.',
    role: 'Owner, Elite Auto Detailing',
    text: 'Lead response time went from 4 hours to 8 seconds. Our close rate tripled within the first month. I wish I had done this years ago.',
    rating: 5,
    initials: 'RM',
    color: '#00F0FF',
  },
  {
    name: 'Amanda C.',
    role: 'Operations, Summit Roofing',
    text: 'The entire automation stack paid for itself in the first month. We capture leads we would have lost at 11pm on a Tuesday. This is not optional anymore.',
    rating: 5,
    initials: 'AC',
    color: '#7A00FF',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  const VISIBLE = 3

  const next = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, isPaused])

  const getVisible = () => {
    return Array.from({ length: VISIBLE }, (_, i) =>
      testimonials[(currentIndex + i) % testimonials.length]
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 section-padding">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[#00F0FF] border border-[#00F0FF]/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          Client Results
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#EAEAEA] mb-4">
          What Our{' '}
          <span className="text-gradient">Clients Say</span>
        </h2>
        <p className="text-[#888] text-lg max-w-2xl mx-auto">
          Real results from real businesses that automated with Net Core AI.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Desktop: 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {getVisible().map((t, i) => (
              <motion.div
                key={`${t.name}-${currentIndex}-${i}`}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="gradient-border-card"
              >
                <div className="h-full bg-[#111111] rounded-[15px] p-6 flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#EAEAEA]/80 text-sm leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-black flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${t.color}, #7A00FF)` }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#EAEAEA]">{t.name}</div>
                      <div className="text-xs text-[#888]">{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile: 1 card */}
        <div className="md:hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="gradient-border-card"
            >
              <div className="bg-[#111111] rounded-[15px] p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[#EAEAEA]/80 text-sm leading-relaxed">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-black"
                    style={{ background: `linear-gradient(135deg, ${testimonials[currentIndex].color}, #7A00FF)` }}
                  >
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#EAEAEA]">{testimonials[currentIndex].name}</div>
                    <div className="text-xs text-[#888]">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[#00F0FF]/40 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-[#EAEAEA]" />
          </motion.button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1)
                  setCurrentIndex(i)
                }}
                className="transition-all duration-300"
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === currentIndex ? 24 : 8,
                    height: 8,
                    background: i === currentIndex
                      ? 'linear-gradient(90deg, #00F0FF, #7A00FF)'
                      : 'rgba(255,255,255,0.2)',
                  }}
                />
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[#00F0FF]/40 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-[#EAEAEA]" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}
