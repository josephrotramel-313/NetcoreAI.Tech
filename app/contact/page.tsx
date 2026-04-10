import ContactForm from '@/components/ContactForm'
import { Mail, MessageSquare, CalendarDays, MessageCircle, Clock, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-10 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(0,240,255,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-[#00F0FF] border border-[#00F0FF]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            Let&apos;s Talk
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#EAEAEA] mb-6 leading-tight">
            Start Your{' '}
            <span className="text-gradient">Automation Journey</span>
          </h1>
          <p className="text-[#888] text-xl max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute discovery call. We&apos;ll audit your current process and show you exactly where AI automation fits.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left: Contact Options */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-[#EAEAEA] mb-2">Multiple Ways to Reach Us</h2>
                <p className="text-[#888]">
                  Choose the method that works best for you. We respond within 2 business hours.
                </p>
              </div>

              {/* Contact Action Cards */}
              <div className="flex flex-col gap-4">

                {/* Email */}
                <a
                  href="mailto:hello@netcoreai.tech"
                  className="group flex items-center gap-4 p-5 rounded-2xl glass hover:border-[#00F0FF]/30 transition-all duration-200"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                    style={{ background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.2)' }}
                  >
                    <Mail className="w-5 h-5 text-[#00F0FF]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#EAEAEA] group-hover:text-[#00F0FF] transition-colors">
                      Send an Email
                    </div>
                    <div className="text-xs text-[#888]">hello@netcoreai.tech</div>
                  </div>
                  <div className="ml-auto text-[#888] group-hover:text-[#00F0FF] transition-colors">→</div>
                </a>

                {/* SMS */}
                <a
                  href="tel:+15550000000"
                  className="group flex items-center gap-4 p-5 rounded-2xl glass hover:border-[#7A00FF]/30 transition-all duration-200"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                    style={{ background: 'rgba(122,0,255,0.1)', border: '1px solid rgba(122,0,255,0.2)' }}
                  >
                    <Phone className="w-5 h-5 text-[#7A00FF]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#EAEAEA] group-hover:text-[#7A00FF] transition-colors">
                      Call or Text
                    </div>
                    <div className="text-xs text-[#888]">+1 (555) 000-0000</div>
                  </div>
                  <div className="ml-auto text-[#888] group-hover:text-[#7A00FF] transition-colors">→</div>
                </a>

                {/* SMS Link */}
                <a
                  href="sms:+15550000000"
                  className="group flex items-center gap-4 p-5 rounded-2xl glass hover:border-[#00F0FF]/30 transition-all duration-200"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                    style={{ background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.15)' }}
                  >
                    <MessageSquare className="w-5 h-5 text-[#00F0FF]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#EAEAEA] group-hover:text-[#00F0FF] transition-colors">
                      Send an SMS
                    </div>
                    <div className="text-xs text-[#888]">Text us directly from your phone</div>
                  </div>
                  <div className="ml-auto text-[#888] group-hover:text-[#00F0FF] transition-colors">→</div>
                </a>

                {/* Calendly */}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,240,255,0.08), rgba(122,0,255,0.08))',
                    border: '1px solid rgba(0,240,255,0.2)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                    style={{ background: 'rgba(0,240,255,0.15)', border: '1px solid rgba(0,240,255,0.3)' }}
                  >
                    <CalendarDays className="w-5 h-5 text-[#00F0FF]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#EAEAEA]">Book a Discovery Call</div>
                    <div className="text-xs text-[#888]">Free 30-min strategy session</div>
                  </div>
                  <div className="ml-auto text-[#00F0FF]">→</div>
                </a>
              </div>

              {/* Office Hours */}
              <div
                className="p-5 rounded-2xl flex items-start gap-4"
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <Clock className="w-5 h-5 text-[#888] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#EAEAEA] mb-1">Availability</div>
                  <div className="text-sm text-[#888] leading-relaxed">
                    <span className="text-[#00F0FF] font-medium">AI Systems:</span> Available 24/7 — always on
                    <br />
                    <span className="text-[#7A00FF] font-medium">Human Team:</span> Mon–Fri, 9am–6pm EST
                  </div>
                </div>
              </div>

              {/* Live Chat Placeholder */}
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: 'rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping opacity-75" />
                  </div>
                  <MessageCircle className="w-4 h-4 text-[#888]" />
                  <span className="text-sm font-semibold text-[#EAEAEA]">Live Chat</span>
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                    style={{ background: 'rgba(0,240,255,0.1)', color: '#00F0FF' }}
                  >
                    Coming Soon
                  </span>
                </div>
                <p className="text-xs text-[#888] leading-relaxed">
                  Real-time chat support powered by AI will be available here soon. Subscribe to our newsletter to be notified when it launches.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div
                className="rounded-3xl p-8 md:p-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,240,255,0.04) 0%, rgba(122,0,255,0.04) 100%)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <h2 className="text-2xl font-bold text-[#EAEAEA] mb-2">Send Us a Message</h2>
                <p className="text-[#888] text-sm mb-8">
                  Tell us about your business and what you&apos;re looking to automate. We&apos;ll get back to you within 2 business hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
