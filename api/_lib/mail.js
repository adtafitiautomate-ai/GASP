import nodemailer from 'nodemailer'

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function mailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
}

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'})[c])
}

export function rows(pairs) {
  const text = pairs.map(([k, v]) => `${k}: ${v ?? ''}`).join('\n')
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${pairs
    .map(([k, v]) => `<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(k)}</td><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`)
    .join('')}</table>`
  return {text, html}
}

// Environment is read per request so Vercel env changes apply on the next call.
export async function sendMail({subject, text, html, replyTo}) {
  const port = Number(process.env.SMTP_PORT || 587)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: {user: process.env.SMTP_USER, pass: process.env.SMTP_PASS},
  })
  const to = (process.env.MAIL_TO || 'info@gasp.co.ug').split(',').map((s) => s.trim()).filter(Boolean)
  await transporter.sendMail({
    from: {name: process.env.MAIL_FROM_NAME || 'GASP Website', address: process.env.SMTP_USER},
    to,
    replyTo,
    subject,
    text,
    html,
  })
}
