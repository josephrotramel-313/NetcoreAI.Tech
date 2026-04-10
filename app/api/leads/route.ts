import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const lead = {
      ...body,
      id: crypto.randomUUID(),
      receivedAt: new Date().toISOString(),
    }
    console.log('[LEAD RECEIVED]', JSON.stringify(lead))
    return NextResponse.json({ received: true, id: lead.id })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
