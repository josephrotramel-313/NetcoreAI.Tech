import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceCard from '@/components/ServiceCard'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import { ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: 'PhoneCall',
    title: 'AI Receptionists',
    description:
      'AI voice agents that answer calls, qualify leads, and book appointments instantly. Never miss another call.',
    badge: 'Most Popular',
  },
  {
    icon: 'MessageSquare',
    title: 'Inbound FAQ + Auto Booking',
    description:
      'Turn every inbound question into a booked appointment with intelligent response systems trained on your business.',
  },
  {
    icon: 'Star',
    title: 'Google Review Agents',
    description:
      'Automatically request, manage, and respond to reviews to boost your online reputation and local ranking.',
  },
]

const aboutPoints = [
  'Deploy in days, not months',
  'No code required — fully managed',
  'Seamlessly integrates with your existing tools',
  'ROI typically realized within 30 days',
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Services Section */}
      <SectionWrapper id="services" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[#00F0FF] border border-[#00F0FF]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
              What We Build
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#EAEAEA] mb-4">
              Automation That{' '}
              <span className="text-gradient">Actually Works</span>
            </h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              Three core systems that eliminate manual work and keep your business running 24/7 — even when you&apos;re not.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <ServiceCard key={svc.title} {...svc} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper id="how-it-works" className="bg-[#111111]/30">
        <HowItWorks />
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper id="testimonials">
        <Testimonials />
      </SectionWrapper>

      {/* About Preview */}
      <SectionWrapper id="about-preview" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[#7A00FF] border border-[#7A00FF]/20 self-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A00FF]" />
                About Net Core AI
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#EAEAEA] leading-tight">
                Built to Eliminate{' '}
                <span className="text-gradient">Manual Work</span>
              </h2>
              <p className="text-[#888] text-lg leading-relaxed">
                Net Core AI helps businesses eliminate manual work by deploying intelligent
                automation systems that operate 24/7. We build custom AI stacks that capture
                leads, respond instantly, qualify prospects, and book appointments — without
                your team lifting a finger.
              </p>
              <ul className="flex flex-col gap-3">
                {aboutPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[#EAEAEA]/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#00F0FF] flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <button className="self-start flex items-center gap-2 text-[#00F0FF] font-semibold hover:gap-3 transition-all text-sm">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Right: Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '340%', label: 'Avg. Increase in Booked Appointments', color: '#00F0FF' },
                { value: '8s', label: 'Average AI Response Time', color: '#7A00FF' },
                { value: '94%', label: 'Inbound Questions Handled Automatically', color: '#00F0FF' },
                { value: '3×', label: 'Average Review Volume Increase', color: '#7A00FF' },
              ].map((stat) => (
                <div key={stat.label} className="gradient-border-card">
                  <div className="bg-[#111111] rounded-[15px] p-5 h-full flex flex-col gap-1">
                    <div
                      className="text-3xl font-extrabold"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#888] leading-snug">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper id="cta" className="section-padding">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div
            className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,240,255,0.05) 0%, rgba(122,0,255,0.08) 100%)',
              border: '1px solid rgba(0,240,255,0.15)',
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0,240,255,0.04) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[#00F0FF] border border-[#00F0FF]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                Get Started Today
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#EAEAEA]">
                Ready to Stop{' '}
                <span className="text-gradient">Missing Leads?</span>
              </h2>
              <p className="text-[#888] text-lg max-w-xl">
                Book a free 30-minute discovery call. We&apos;ll audit your current process and show you exactly where automation fits.
              </p>
              <Link href="/contact">
                <button
                  className="flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base text-black transition-all duration-200"
                  style={{ background: 'linear-gradient(135deg, #00F0FF, #7A00FF)' }}
                >
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
