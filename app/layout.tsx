import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Net Core AI | AI Automation Agency',
  description:
    'Net Core AI builds intelligent automation systems that capture leads, respond instantly, and convert 24/7. AI Receptionists, FAQ Booking, Google Review Agents.',
  keywords: [
    'AI automation',
    'AI receptionist',
    'lead generation',
    'business automation',
    'Net Core AI',
    'AI agency',
  ],
  authors: [{ name: 'Net Core AI' }],
  metadataBase: new URL('https://netcoreai.tech'),
  openGraph: {
    title: 'Net Core AI | AI Automation Agency',
    description: 'Automate Your Business. Scale Without Hiring.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Net Core AI | AI Automation Agency',
    description: 'Automate Your Business. Scale Without Hiring.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-[#0A0A0A] text-[#EAEAEA] overflow-x-hidden">
        <AnimatedBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
