import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  service: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    // EXPRESS_INTERNAL_URL is preferred in Docker (http://server:5001 on internal network).
    // Falls back to NEXT_PUBLIC_EXPRESS_URL for local dev, then hardcoded default.
    const expressUrl =
      process.env.EXPRESS_INTERNAL_URL ??
      process.env.NEXT_PUBLIC_EXPRESS_URL ??
      'http://localhost:5001'

    try {
      const expressRes = await fetch(`${expressUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: 'website_contact_form',
          timestamp: new Date().toISOString(),
        }),
      })

      if (!expressRes.ok) {
        console.error('[CONTACT] Express backend returned non-OK:', expressRes.status)
      }
    } catch (forwardErr) {
      // Graceful degradation: log but don't fail the user
      console.error('[CONTACT] Failed to forward to Express backend:', forwardErr)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: err.errors },
        { status: 400 }
      )
    }
    console.error('[CONTACT] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
