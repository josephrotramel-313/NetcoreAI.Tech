'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Activity, BarChart3, Clock } from 'lucide-react'

const stats = [
  { icon: Activity, label: '24/7 Active' },
  { icon: BarChart3, label: '100+ Automations' },
  { icon: Clock, label: '3min Avg Response' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[#00F0FF] border border-[#00F0FF]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                AI Automation Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#EAEAEA]">
                Automate Your Business. hello from VsCode{' '}
                <span className="text-gradient">
                  Scale Without Hiring.
                </span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-lg md:text-xl text-[#888] leading-relaxed max-w-xl"
            >
              Net Core AI builds intelligent systems that capture, respond, and convert leads 24/7.
              Stop missing opportunities. Start scaling on autopilot.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(0,240,255,0.6), 0 0 60px rgba(0,240,255,0.2)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-4 bg-[#00F0FF] text-black font-bold rounded-xl text-base transition-all duration-200"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <Link href="/products">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 0 20px rgba(255,255,255,0.05)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-4 glass text-[#EAEAEA] font-semibold rounded-xl text-base hover:border-white/20 transition-all duration-200"
                >
                  See Products
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-wrap gap-3 mt-2"
            >
              {stats.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 glass rounded-lg text-xs font-medium text-[#EAEAEA]/70"
                >
                  <Icon className="w-3.5 h-3.5 text-[#00F0FF]" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Animated Orb Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-center justify-center h-[400px] lg:h-[500px]"
          >
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[340px] h-[340px] rounded-full"
              style={{
                border: '1px solid rgba(0,240,255,0.15)',
                borderTopColor: 'rgba(0,240,255,0.6)',
              }}
            />

            {/* Second rotating ring (reverse) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[260px] h-[260px] rounded-full"
              style={{
                border: '1px solid rgba(122,0,255,0.15)',
                borderTopColor: 'rgba(122,0,255,0.5)',
                borderRightColor: 'rgba(122,0,255,0.3)',
              }}
            />

            {/* Third rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[180px] h-[180px] rounded-full"
              style={{
                border: '1px dashed rgba(0,240,255,0.2)',
              }}
            />

            {/* Core glowing orb */}
            <div
              className="absolute w-[200px] h-[200px] rounded-full animate-float"
              style={{
                background:
                  'radial-gradient(circle at 35% 35%, rgba(0,240,255,0.8) 0%, rgba(122,0,255,0.6) 50%, transparent 75%)',
                filter: 'blur(20px)',
                animation: 'float 6s ease-in-out infinite, pulseGlow 2s ease-in-out infinite',
              }}
            />

            {/* Inner solid orb */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[100px] h-[100px] rounded-full"
              style={{
                background: 'radial-gradient(circle at 40% 40%, #00F0FF 0%, #7A00FF 70%)',
                boxShadow: '0 0 40px rgba(0,240,255,0.6), 0 0 80px rgba(122,0,255,0.4)',
              }}
            />

            {/* Floating dot accents */}
            {(
              [
                { top: '10%', left: '10%', right: undefined, bottom: undefined, color: '#00F0FF', size: 6 },
                { top: '20%', left: undefined, right: '8%', bottom: undefined, color: '#7A00FF', size: 8 },
                { top: undefined, left: '12%', right: undefined, bottom: '15%', color: '#00F0FF', size: 4 },
                { top: undefined, left: undefined, right: '15%', bottom: '10%', color: '#7A00FF', size: 6 },
              ] as const
            ).map((dot, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: dot.size,
                  height: dot.size,
                  background: dot.color,
                  boxShadow: `0 0 10px ${dot.color}`,
                  top: dot.top,
                  left: dot.left,
                  right: dot.right,
                  bottom: dot.bottom,
                }}
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  )
}
