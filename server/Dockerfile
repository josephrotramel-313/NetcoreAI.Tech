# ── Stage 1: install production deps ─────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# ── Stage 2: production runtime ──────────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 express

COPY --from=deps /app/node_modules ./node_modules
COPY --chown=express:nodejs . .

USER express

EXPOSE 5001

CMD ["node", "server.js"]
