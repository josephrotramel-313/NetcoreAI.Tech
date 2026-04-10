import Link from 'next/link'
import SectionWrapper from '@/components/SectionWrapper'
import { Target, Eye, Lightbulb, Rocket, ArrowRight, CheckCircle, TrendingUp, Globe, Users } from 'lucide-react'

const missionPoints = [
  'Deploy enterprise-grade AI automation for businesses of any size',
  'Eliminate repetitive manual work that prevents business growth',
  'Make 24/7 intelligent response the default, not the exception',
  'Deliver ROI within 30 days of deployment',
]

const stats = [
  { icon: Globe, value: '$15.7T', label: 'Global automation market by 2030', color: '#00F0FF' },
  { icon: TrendingUp, value: '40%', label: 'Average productivity increase with AI tools', color: '#7A00FF' },
  { icon: Users, value: '73%', label: 'Of businesses plan to increase AI investment in 2025', color: '#00F0FF' },
  { icon: Rocket, value: '3–5×', label: 'Faster business growth for AI-first companies', color: '#7A00FF' },
]

const futurePoints = [
  {
    year: '2025',
    title: 'AI Becomes the Front Line',
    description: 'Every customer-facing interaction — calls, chats, bookings — handled first by AI. Humans focus only on relationship-building.',
  },
  {
    year: '2026',
    title: 'Predictive Lead Intelligence',
    description: 'AI systems that don\'t just respond to leads but predict which prospects are most likely to convert and engage them proactively.',
  },
  {
    year: '2027+',
    title: 'Fully Autonomous Business Operations',
    description: 'AI orchestrates entire business workflows end-to-end — from marketing and lead gen through fulfillment and reviews.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(122,0,255,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[#7A00FF] border border-[#7A00FF]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7A00FF]" />
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#EAEAEA] mb-6 leading-tight">
            Built to Automate.{' '}
            <span className="text-gradient">Designed to Scale.</span>
          </h1>
          <p className="text-[#888] text-xl max-w-2xl mx-auto leading-relaxed">
            We believe every business deserves the efficiency of Fortune 500 automation. That&apos;s why we build it.
          </p>
        </div>
      </section>

      {/* Mission */}
      <SectionWrapper id="mission" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.2)' }}
                >
                  <Target className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-[#00F0FF]">Mission</span>
              </div>
              <h2 className="text-4xl font-extrabold text-[#EAEAEA] leading-tight">
                Making AI Automation Accessible to{' '}
                <span className="text-gradient">Every Business</span>
              </h2>
              <p className="text-[#888] text-lg leading-relaxed">
                To make enterprise-grade AI automation accessible to every business — from the local HVAC company to the mid-market professional services firm — eliminating manual work and freeing humans for creative, high-value tasks.
              </p>
              <ul className="flex flex-col gap-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[#EAEAEA]/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#00F0FF] flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-3xl p-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0,240,255,0.06) 0%, rgba(122,0,255,0.06) 100%)',
                border: '1px solid rgba(0,240,255,0.12)',
              }}
            >
              <div className="relative z-10">
                <div className="text-6xl font-black text-gradient mb-4">100%</div>
                <div className="text-[#EAEAEA] text-2xl font-bold mb-3">Committed to Your Automation ROI</div>
                <p className="text-[#888] leading-relaxed">
                  We don&apos;t charge retainers for nothing. Every automation we deploy is engineered to generate measurable returns — typically within the first month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Vision */}
      <SectionWrapper id="vision" className="section-padding bg-[#111111]/30">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="flex flex-col items-center gap-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(122,0,255,0.1)', border: '1px solid rgba(122,0,255,0.2)' }}
            >
              <Eye className="w-6 h-6 text-[#7A00FF]" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#7A00FF]">Vision</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#EAEAEA]">
              A World Where Every Business Operates at{' '}
              <span className="text-gradient">Peak Efficiency</span>
            </h2>
            <p className="text-[#888] text-xl leading-relaxed max-w-3xl">
              A world where every business — from a local plumber to a mid-market enterprise — operates with the efficiency of a Fortune 500 company. Where no lead is ever missed, no question goes unanswered, and no reputation opportunity is wasted. Where humans focus entirely on what humans do best: build relationships, solve complex problems, and create value.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Automation Matters */}
      <SectionWrapper id="why-automation" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.2)' }}
              >
                <Lightbulb className="w-5 h-5 text-[#00F0FF]" />
              </div>
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#00F0FF]">The Data</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#EAEAEA] mt-4 mb-4">
              Why Automation{' '}
              <span className="text-gradient">Matters Now</span>
            </h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              The businesses winning in 2025 aren&apos;t the ones working harder. They&apos;re the ones that automated smarter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="gradient-border-card">
                <div className="bg-[#111111] rounded-[15px] p-6 h-full flex flex-col gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div className="text-4xl font-black" style={{ color }}>{value}</div>
                  <p className="text-[#888] text-sm leading-snug">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Future of AI */}
      <SectionWrapper id="future" className="section-padding bg-[#111111]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(122,0,255,0.1)', border: '1px solid rgba(122,0,255,0.2)' }}
              >
                <Rocket className="w-5 h-5 text-[#7A00FF]" />
              </div>
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#7A00FF]">Looking Ahead</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#EAEAEA] mt-4 mb-4">
              The Future of AI{' '}
              <span className="text-gradient">in Business</span>
            </h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              We&apos;re in the early innings of the AI business revolution. Here&apos;s where the next 3 years take us.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {futurePoints.map((point, index) => (
              <div
                key={point.year}
                className="gradient-border-card"
              >
                <div className="bg-[#111111] rounded-[15px] p-6 flex flex-col md:flex-row gap-6">
                  <div
                    className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-mono font-bold self-start"
                    style={{
                      background: index % 2 === 0 ? 'rgba(0,240,255,0.1)' : 'rgba(122,0,255,0.1)',
                      color: index % 2 === 0 ? '#00F0FF' : '#7A00FF',
                      border: `1px solid ${index % 2 === 0 ? 'rgba(0,240,255,0.2)' : 'rgba(122,0,255,0.2)'}`,
                    }}
                  >
                    {point.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#EAEAEA] mb-2">{point.title}</h3>
                    <p className="text-[#888] leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="section-padding">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-[#EAEAEA] mb-4">
            Be an{' '}
            <span className="text-gradient">AI-First Business</span>
          </h2>
          <p className="text-[#888] text-lg mb-8">
            The gap between AI-first and everyone else is widening fast. Join the businesses leading this shift.
          </p>
          <Link href="/contact">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl text-base text-black"
              style={{ background: 'linear-gradient(135deg, #00F0FF, #7A00FF)' }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
