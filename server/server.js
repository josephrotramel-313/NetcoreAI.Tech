require('dotenv').config()
const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const crypto = require('crypto')

const app = express()
const httpServer = createServer(app)

// When ALLOWED_ORIGINS=* (Docker behind nginx), cors is effectively handled
// by nginx. Restrict to specific origins in production if Express is exposed directly.
const allowedOrigins: string | string[] = process.env.ALLOWED_ORIGINS === '*'
  ? '*'
  : (process.env.ALLOWED_ORIGINS
      ? process.env.ALLOWED_ORIGINS.split(',')
      : ['http://localhost:3000'])

const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: allowedOrigins !== '*',
  },
})

app.use(cors({ origin: allowedOrigins, credentials: allowedOrigins !== '*' }))
app.use(express.json())

// In-memory lead store (replace with a real database in production)
const leads = []

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', leads: leads.length, uptime: process.uptime() })
})

// Receive lead from Next.js /api/contact
app.post('/leads', (req, res) => {
  const lead = {
    ...req.body,
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
  }
  leads.push(lead)

  // Broadcast to all connected dashboard clients
  io.emit('new_lead', lead)

  console.log(`[LEAD] ${lead.name} <${lead.email}> — ${lead.service ?? 'general'}`)
  res.json({ received: true, id: lead.id })
})

// Get all leads (internal dashboard)
app.get('/leads', (req, res) => {
  res.json({ leads, count: leads.length })
})

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log(`[SOCKET] Client connected: ${socket.id}`)

  socket.emit('lead_count', { count: leads.length })

  socket.on('request_leads', () => {
    socket.emit('leads_history', leads.slice(-50))
  })

  socket.on('disconnect', () => {
    console.log(`[SOCKET] Client disconnected: ${socket.id}`)
  })
})

const PORT = process.env.PORT ?? 5001
httpServer.listen(PORT, () => {
  console.log(`[SERVER] Net Core AI backend running on port ${PORT}`)
})
