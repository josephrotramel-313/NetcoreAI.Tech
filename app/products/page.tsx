import Link from 'next/link'
import SectionWrapper from '@/components/SectionWrapper'
import { PhoneCall, MessageSquare, Star, CheckCircle, TrendingUp, ArrowRight, AlertCircle } from 'lucide-react'

const products = [
  {
    id: 'ai-receptionists',
    icon: PhoneCall,
    badge: 'Most Popular',
    title: 'AI Receptionists',
    tagline: 'Your phone never stops ringing. Neither do we.',
    problem: {
      heading: 'The Problem',
      text: 'Every missed call is a lost customer. Traditional answering services are slow, expensive, and inconsistent. Your best leads are calling your competitor when you don\'t pick up.',
      stats: [
        '78% of customers buy from the first business that calls back',
        'Average business misses 62% of inbound calls',
        'Hiring a receptionist costs $35,000–$45,000/year',
      ],
    },
    solution: {
      heading: 'The Solution',
      bullets: [
        'Answers 100% of calls — on the first ring, 24/7/365',
        'Trained on your business: services, pricing, FAQs, objections',
        'Qualifies callers and books directly into your calendar',
        'Natural voice conversation — callers don\'t know it\'s AI',
        'Escalates urgent calls to live team members instantly',
      ],
    },
    outcome: {
      heading: 'The Outcome',
      value: '340%',
      label: 'Average increase in booked appointments',
      secondary: 'Zero missed calls. Ever.',
    },
    color: '#00F0FF',
  },
  {
    id: 'faq-booking',
    icon: MessageSquare,
    badge: 'High ROI',
    title: 'Inbound FAQ + Auto Booking',
    tagline: 'Every question answered. Every appointment booked.',
    problem: {
      heading: 'The Problem',
      text: 'Your team spends 60% of their day answering the same 10 questions. Every repetitive task is time stolen from high-value work. And slow response times kill conversions.',
      stats: [
        '60% of team time lost to repetitive questions',
        '78% of consumers buy from the business that responds first',
        'Response time > 5 minutes drops lead conversion by 400%',
      ],
    },
    solution: {
      heading: 'The Solution',
      bullets: [
        'AI knows your entire business — services, pricing, policies',
        'Responds in under 8 seconds across SMS, chat, and email',
        'Processes bookings and sends confirmation automatically',
        'Handles edge cases and escalates complex issues intelligently',
        'Learns continuously from your business updates',
      ],
    },
    outcome: {
      heading: 'The Outcome',
      value: '94%',
      label: 'Of inbound questions handled automatically',
      secondary: '4-hour response → 8-second response.',
    },
    color: '#7A00FF',
  },
  {
    id: 'review-agents',
    icon: Star,
    badge: 'Local SEO',
    title: 'Google Review Agents',
    tagline: 'More reviews. Better reputation. Higher ranking.',
    problem: {
      heading: 'The Problem',
      text: 'Businesses with fewer than 4.0 stars lose 80% of potential customers before first contact. Most businesses never ask for reviews — and when they do, it\'s awkward and inconsistent.',
      stats: [
        '93% of consumers read online reviews before buying',
        'Businesses with 4.5+ stars get 3× more calls',
        'Only 6% of customers leave reviews without prompting',
      ],
    },
    solution: {
      heading: 'The Solution',
      bullets: [
        'Automated post-service review requests via SMS and email',
        'Personalized messages timed perfectly for maximum conversion',
        'AI-drafted responses to all reviews — positive and negative',
        'Negative review early-warning system with smart triage',
        'Dashboard showing review volume, rating trend, and competitive position',
      ],
    },
    outcome: {
      heading: 'The Outcome',
      value: '3×',
      label: 'Average review volume increase in 60 days',
      secondary: '+0.6 star average rating improvement.',
    },
    color: '#00F0FF',
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,240,255,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[#00F0FF] border border-[#00F0FF]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
            Our Products
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#EAEAEA] mb-6 leading-tight">
            AI Systems That{' '}
            <span className="text-gradient">Run Your Business</span>
          </h1>
          <p className="text-[#888] text-xl max-w-2xl mx-auto leading-relaxed">
            Three flagship automation products built for businesses that are serious about growth.
            Each one deployed, managed, and optimized by our team.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, index) => {
        const Icon = product.icon
        const isEven = index % 2 === 0

        return (
          <SectionWrapper key={product.id} id={product.id} className="section-padding">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                style={{ direction: !isEven ? 'rtl' : 'ltr' }}
              >
                {/* Content */}
                <div style={{ direction: 'ltr' }} className="flex flex-col gap-8">
                  {/* Header */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${product.color}20, ${product.color}08)`,
                          border: `1px solid ${product.color}30`,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: product.color }} />
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: `${product.color}15`,
                          border: `1px solid ${product.color}30`,
                          color: product.color,
                        }}
                      >
                        {product.badge}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#EAEAEA] leading-tight">
                      {product.title}
                    </h2>
                    <p className="text-[#888] text-lg italic">{product.tagline}</p>
                  </div>

                  {/* Problem */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-orange-400" />
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
                        {product.problem.heading}
                      </h3>
                    </div>
                    <p className="text-[#888] leading-relaxed">{product.problem.text}</p>
                    <ul className="flex flex-col gap-2 mt-1">
                      {product.problem.stats.map((stat) => (
                        <li key={stat} className="flex items-start gap-2 text-sm text-[#888]/70">
                          <span className="text-orange-400 mt-0.5">•</span>
                          {stat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#00F0FF]" />
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#00F0FF]">
                        {product.solution.heading}
                      </h3>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {product.solution.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-[#EAEAEA]/80">
                          <CheckCircle className="w-4 h-4 text-[#00F0FF] flex-shrink-0 mt-0.5" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <button
                      className="self-start flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-black transition-all"
                      style={{ background: `linear-gradient(135deg, ${product.color}, #7A00FF)` }}
                    >
                      Get Started with {product.title}
                      <ArrowRight className="w-4 h-4 text-white" />
                    </button>
                  </Link>
                </div>

                {/* Outcome Card */}
                <div style={{ direction: 'ltr' }}>
                  <div
                    className="rounded-3xl p-10 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${product.color}08 0%, rgba(122,0,255,0.06) 100%)`,
                      border: `1px solid ${product.color}20`,
                    }}
                  >
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 20% 20%, ${product.color}10 0%, transparent 60%)`,
                      }}
                    />
                    <div className="relative z-10 flex flex-col gap-6">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" style={{ color: product.color }} />
                        <span
                          className="text-sm font-semibold uppercase tracking-wider"
                          style={{ color: product.color }}
                        >
                          {product.outcome.heading}
                        </span>
                      </div>

                      <div>
                        <div
                          className="text-8xl font-black leading-none mb-2"
                          style={{ color: product.color }}
                        >
                          {product.outcome.value}
                        </div>
                        <div className="text-[#EAEAEA] text-xl font-semibold mb-1">
                          {product.outcome.label}
                        </div>
                        <div className="text-[#888] text-lg">{product.outcome.secondary}</div>
                      </div>

                      <div
                        className="p-4 rounded-xl text-sm text-[#888] leading-relaxed"
                        style={{
                          background: 'rgba(0,0,0,0.3)',
                          border: '1px solid rgba(255,255,255,0.05)',
                        }}
                      >
                        Average results across Net Core AI clients in the first 60 days of deployment.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            {index < products.length - 1 && (
              <div
                className="max-w-7xl mx-auto px-4 md:px-8 mt-20"
              >
                <div
                  className="h-px w-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
                  }}
                />
              </div>
            )}
          </SectionWrapper>
        )
      })}

      {/* CTA */}
      <SectionWrapper className="section-padding">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div
            className="rounded-3xl p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,240,255,0.05) 0%, rgba(122,0,255,0.08) 100%)',
              border: '1px solid rgba(0,240,255,0.15)',
            }}
          >
            <h2 className="text-4xl font-extrabold text-[#EAEAEA] mb-4">
              Ready to Build Your{' '}
              <span className="text-gradient">Automation Stack?</span>
            </h2>
            <p className="text-[#888] text-lg mb-8">
              Book a free discovery call. We&apos;ll recommend the right combination for your business.
            </p>
            <Link href="/contact">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base text-black"
                style={{ background: 'linear-gradient(135deg, #00F0FF, #7A00FF)' }}
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
