'use client'

import { motion } from 'framer-motion'
import { PhoneCall, MessageSquare, Star, Bot, Settings, TrendingUp, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  PhoneCall,
  MessageSquare,
  Star,
  Bot,
  Settings,
  TrendingUp,
}

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  index: number
  badge?: string
}

export default function ServiceCard({ icon, title, description, index, badge }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Bot

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="gradient-border-card"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative h-full bg-[#111111] rounded-[15px] p-6 md:p-8 flex flex-col gap-4 overflow-hidden group"
      >
        {/* Background glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[15px]"
          style={{
            background: 'radial-gradient(ellipse at 0% 0%, rgba(0,240,255,0.07) 0%, transparent 60%)',
          }}
        />

        {/* Icon */}
        <div className="relative z-10">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(0,240,255,0.15) 0%, rgba(122,0,255,0.15) 100%)',
              border: '1px solid rgba(0,240,255,0.2)',
            }}
          >
            <Icon className="w-5 h-5 text-[#00F0FF]" />
          </motion.div>
        </div>

        {/* Badge */}
        {badge && (
          <span className="relative z-10 inline-flex self-start px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
            style={{
              background: 'rgba(0,240,255,0.1)',
              border: '1px solid rgba(0,240,255,0.2)',
              color: '#00F0FF',
            }}
          >
            {badge}
          </span>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#EAEAEA]">{title}</h3>
          <p className="text-[#888] leading-relaxed text-sm md:text-base">{description}</p>
        </div>

        {/* Hover arrow */}
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="relative z-10 mt-auto pt-2"
        >
          <span className="text-[#00F0FF] text-sm font-medium flex items-center gap-1">
            Learn more →
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
