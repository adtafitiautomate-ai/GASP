import {EMAIL_RE, mailConfigured, rows, sendMail} from './_lib/mail.js'

function send(res, statusCode, body) {
  res.statusCode = statusCode
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

function required(value) {
  return typeof value === 'string' && value.trim().length > 0
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return send(res, 405, {message: 'Method not allowed'})
  }

  let body
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  } catch {
    return send(res, 400, {message: 'Invalid request body'})
  }
  body = body || {}

  // Honeypot: real visitors never fill this hidden field.
  if (required(body.website)) return send(res, 200, {ok: true})

  const {name, email, interest, message} = body
  if (!required(name) || !required(email) || !required(message) || !EMAIL_RE.test(email.trim())) {
    return send(res, 400, {message: 'Please provide your name, a valid email address and a message.'})
  }
  if (name.length > 200 || email.length > 320 || message.length > 10000) {
    return send(res, 400, {message: 'Your message is too long.'})
  }
  if (!mailConfigured()) {
    console.error('Contact form: SMTP is not configured')
    return send(res, 500, {message: 'Email is not configured yet. Please email info@gasp.co.ug directly.'})
  }

  const {text, html} = rows([
    ['Name', name.trim()],
    ['Email', email.trim()],
    ['Interest', interest || 'Not specified'],
    ['Message', message.trim()],
    ['Submitted', new Date().toISOString()],
    ['IP', req.headers['x-forwarded-for'] || ''],
  ])

  try {
    await sendMail({
      subject: `Website enquiry (${interest || 'General'}) from ${name.trim()}`,
      text,
      html,
      replyTo: {name: name.trim(), address: email.trim()},
    })
  } catch (error) {
    console.error('Contact form: sending failed', error)
    return send(res, 502, {message: 'We could not send your message. Please email info@gasp.co.ug directly.'})
  }
  return send(res, 200, {ok: true})
}
