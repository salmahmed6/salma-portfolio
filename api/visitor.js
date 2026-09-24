const COUNT_KEY = 'portfolio:visitor:count'
const VISITORS_KEY = 'portfolio:visitor:ids'
const COOKIE_NAME = 'salma_visitor_id'

function redisConfig() {
  return {
    url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
  }
}

async function redisCommand(command) {
  const { url, token } = redisConfig()
  if (!url || !token) throw new Error('Visitor counter storage is not configured')
  const response = await fetch(url, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
  })
  if (!response.ok) throw new Error('Redis request failed: ' + response.status)
  const data = await response.json()
  return data.result
}

function readCookie(cookieHeader, name) {
  const parts = cookieHeader.split(';')
  for (const part of parts) {
    const [key, ...value] = part.trim().split('=')
    if (key === name) return value.join('=')
  }
  return null
}

function newVisitorId() {
  return globalThis.crypto?.randomUUID?.() || (Date.now() + '-' + Math.random().toString(36).slice(2))
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const cookieHeader = req.headers.cookie || ''
    let visitorId = readCookie(cookieHeader, COOKIE_NAME)
    let isNewVisitor = false

    if (!visitorId) {
      visitorId = newVisitorId()
      isNewVisitor = true
    }

    if (isNewVisitor) {
      const added = await redisCommand(['SADD', VISITORS_KEY, visitorId])
      if (Number(added) === 1) await redisCommand(['INCR', COUNT_KEY])
    }

    const rawCount = await redisCommand(['GET', COUNT_KEY])
    const count = Number(rawCount || 0)

    if (isNewVisitor) {
      res.setHeader('Set-Cookie', COOKIE_NAME + '=' + encodeURIComponent(visitorId) + '; Max-Age=31536000; Path=/; HttpOnly; SameSite=Lax; Secure')
    }

    return res.status(200).json({ count })
  } catch (error) {
    console.error('Visitor counter error:', error)
    return res.status(503).json({ error: 'Visitor counter unavailable' })
  }
}
