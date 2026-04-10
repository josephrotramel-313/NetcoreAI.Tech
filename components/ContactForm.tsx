'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[\+]?[\d\s\-\(\)]{7,}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be under 1000 characters'),
  service: z
    .enum(['ai-receptionist', 'faq-booking', 'review-agent', 'other', ''])
    .optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const serviceOptions = [
  { value: '', label: 'Select a service (optional)' },
  { value: 'ai-receptionist', label: 'AI Receptionist' },
  { value: 'faq-booking', label: 'Inbound FAQ + Auto Booking' },
  { value: 'review-agent', label: 'Google Review Agent' },
  { value: 'other', label: 'Other / Not Sure' },
]

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Failed to send')
      }

      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const inputClass =
    'w-full px-4 py-3 bg-[#0A0A0A] border border-white/10 rounded-xl text-[#EAEAEA] text-sm placeholder:text-[#888] focus:outline-none focus:border-[#00F0FF]/50 focus:ring-1 focus:ring-[#00F0FF]/30 transition-all duration-200'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[#EAEAEA]/80">Full Name *</label>
        <input
          {...register('name')}
          type="text"
          placeholder="John Smith"
          className={inputClass}
          disabled={status === 'submitting'}
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" />
            {errors.name.message}
          </motion.p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[#EAEAEA]/80">Email Address *</label>
        <input
          {...register('email')}
          type="email"
          placeholder="john@yourcompany.com"
          className={inputClass}
          disabled={status === 'submitting'}
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" />
            {errors.email.message}
          </motion.p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[#EAEAEA]/80">
          Phone Number <span className="text-[#888]">(optional)</span>
        </label>
        <input
          {...register('phone')}
          type="tel"
          placeholder="+1 (469) 442-5018"
          className={inputClass}
          disabled={status === 'submitting'}
        />
        {errors.phone && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" />
            {errors.phone.message}
          </motion.p>
        )}
      </div>

      {/* Service */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[#EAEAEA]/80">Interested Service</label>
        <select
          {...register('service')}
          className={`${inputClass} cursor-pointer`}
          disabled={status === 'submitting'}
        >
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#111111]">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[#EAEAEA]/80">Message *</label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Tell us about your business and what you're looking to automate..."
          className={`${inputClass} resize-none`}
          disabled={status === 'submitting'}
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-xs flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" />
            {errors.message.message}
          </motion.p>
        )}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === 'submitting' || status === 'success'}
        whileHover={
          status === 'idle'
            ? { scale: 1.02, boxShadow: '0 0 25px rgba(0,240,255,0.5)' }
            : {}
        }
        whileTap={status === 'idle' ? { scale: 0.98 } : {}}
        className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 disabled:cursor-not-allowed"
        style={{
          background:
            status === 'success'
              ? 'linear-gradient(135deg, #22c55e, #16a34a)'
              : status === 'error'
              ? 'rgba(239,68,68,0.8)'
              : 'linear-gradient(135deg, #00F0FF, #7A00FF)',
          color: '#000',
        }}
      >
        {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin text-black" />}
        {status === 'success' && <CheckCircle className="w-4 h-4 text-white" />}
        {status === 'error' && <AlertCircle className="w-4 h-4 text-white" />}
        {status === 'idle' && <Send className="w-4 h-4" />}
        <span className={status !== 'idle' ? 'text-white' : ''}>
          {status === 'submitting' && 'Sending...'}
          {status === 'success' && "Message Sent! We'll be in touch soon."}
          {status === 'error' && 'Failed to send. Please try again.'}
          {status === 'idle' && 'Send Message'}
        </span>
      </motion.button>

      <p className="text-xs text-center text-[#888]">
        We respond within 2 business hours. No spam, ever.
      </p>
    </form>
  )
}
