import Link from 'next/link'
import { Zap, Twitter, Linkedin, Github, Mail, Phone, ExternalLink } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
]

const services = [
  { label: 'AI Receptionists', href: '/products#ai-receptionists' },
  { label: 'FAQ + Auto Booking', href: '/products#faq-booking' },
  { label: 'Google Review Agents', href: '/products#review-agents' },
]

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter/X' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20">
      {/* Gradient separator */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(0,240,255,0.4) 30%, rgba(122,0,255,0.4) 70%, transparent 100%)',
        }}
      />

      <div className="glass-strong">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Logo + Description */}
            <div className="flex flex-col gap-5">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00F0FF] to-[#7A00FF] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-black" />
                </div>
                <span className="text-lg font-bold">
                  Net Core <span className="text-gradient">AI</span>
                </span>
              </Link>
              <p className="text-[#888] text-sm leading-relaxed">
                Building intelligent automation systems that help businesses capture leads, respond instantly, and scale without hiring.
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[#888] hover:text-[#00F0FF] hover:border-[#00F0FF]/30 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-[#EAEAEA] uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#888] hover:text-[#00F0FF] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-[#EAEAEA] uppercase tracking-wider">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {services.map((svc) => (
                  <li key={svc.href}>
                    <Link
                      href={svc.href}
                      className="text-sm text-[#888] hover:text-[#00F0FF] transition-colors"
                    >
                      {svc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-[#EAEAEA] uppercase tracking-wider">
                Contact
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:netcoreaisolutions@gmail.com"
                    className="flex items-center gap-2 text-sm text-[#888] hover:text-[#00F0FF] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    netcoreaisolutions@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+14694425018"
                    className="flex items-center gap-2 text-sm text-[#888] hover:text-[#00F0FF] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +1 (469) 442-5018
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="flex items-center gap-2 text-sm text-[#888] hover:text-[#00F0FF] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Book a Discovery Call
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-12 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#888]">
                © {new Date().getFullYear()} Net Core AI. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-xs text-[#888] hover:text-[#EAEAEA] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-[#888] hover:text-[#EAEAEA] transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
