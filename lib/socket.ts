import { io, type Socket } from 'socket.io-client'

let socket: Socket | null = null

export function getSocket(): Socket {
  if (!socket) {
    // Connect to the same origin as the page — nginx proxies /socket.io/ to the
    // Express container internally. This works on any domain without hardcoding URLs.
    // For local dev without Docker, set NEXT_PUBLIC_SOCKET_URL=http://localhost:5001
    // in .env.local to connect directly to the Express server.
    const url = process.env.NEXT_PUBLIC_SOCKET_URL ?? ''
    socket = io(url, {
      path: '/socket.io/',
      transports: ['websocket', 'polling'],
      autoConnect: false,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    })
  }
  return socket
}

export function connectSocket(): Socket {
  const s = getSocket()
  if (!s.connected) s.connect()
  return s
}

export function disconnectSocket(): void {
  if (socket?.connected) {
    socket.disconnect()
  }
}
