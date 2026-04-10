'use client'

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Animated gradient mesh */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 20% 20%, rgba(0,240,255,0.4) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(122,0,255,0.4) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 60% 20%, rgba(0,240,255,0.2) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 10s ease infinite',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.07]"
        style={{
          background: 'radial-gradient(ellipse at center top, #00F0FF 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
