'use client'

import { motion } from 'framer-motion'
import { Radar, Zap, Target, CalendarCheck } from 'lucide-react'

const steps = [
  {
    icon: Radar,
    step: '01',
    title: 'Capture Leads',
    description: 'Intelligent systems capture every inbound inquiry across all channels automatically — calls, forms, messages.',
  },
  {
    icon: Zap,
    step: '02',
    title: 'AI Responds Instantly',
    description: 'Your AI agent responds within seconds — personalized, accurate, and always on. Never miss another opportunity.',
  },
  {
    icon: Target,
    step: '03',
    title: 'Qualify & Convert',
    description: 'Machine learning qualifies intent and guides prospects toward conversion with intelligent follow-up sequences.',
  },
  {
    icon: CalendarCheck,
    step: '04',
    title: 'Auto Book Appointments',
    description: 'Qualified leads are automatically scheduled into your calendar without any human intervention needed.',
  },
]

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 section-padding">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[#7A00FF] border border-[#7A00FF]/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7A00FF]" />
          The Process
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#EAEAEA] mb-4">
          How It{' '}
          <span className="text-gradient">Works</span>
        </h2>
        <p className="text-[#888] text-lg max-w-2xl mx-auto">
          From first contact to booked appointment — automated end-to-end in minutes, not days.
        </p>
      </div>

      {/* Steps */}
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #00F0FF 20%, #7A00FF 80%, transparent 100%)',
            opacity: 0.3,
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, step, title, description }, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center gap-4"
            >
              {/* Step circle */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,240,255,0.1) 0%, rgba(122,0,255,0.1) 100%)',
                    border: '1px solid rgba(0,240,255,0.3)',
                  }}
                >
                  <Icon className="w-7 h-7 text-[#00F0FF]" />
                </motion.div>
                {/* Step number badge */}
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold z-20"
                  style={{
                    background: 'linear-gradient(135deg, #00F0FF, #7A00FF)',
                    color: '#000',
                  }}
                >
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono font-semibold text-[#00F0FF]/60 tracking-widest">
                  STEP {step}
                </span>
                <h3 className="text-lg font-bold text-[#EAEAEA]">{title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
