import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || '9cpfuau7',
  dataset: process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2026-05-05',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

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

  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return send(res, 500, {message: 'Sanity write token is not configured'})
  }

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const form = payload?.form || {}
    const reference = payload?.reference

    if (!required(reference) || !required(form.companyName) || !required(form.organisationEmail) || !required(form.contactName) || !required(form.contactEmail) || !required(form.tier) || !required(form.signatoryName)) {
      return send(res, 400, {message: 'Missing required membership application fields'})
    }

    const document = await client.create({
      _type: 'membershipApplication',
      reference,
      status: 'New',
      submittedAt: new Date().toISOString(),
      organisation: {
        companyName: form.companyName,
        registrationNumber: form.registrationNumber,
        tin: form.tin,
        incorporationDate: form.incorporationDate || undefined,
        nemaNumber: form.nemaNumber,
        street: form.street,
        district: form.district,
        poBox: form.poBox,
        organisationEmail: form.organisationEmail,
        website: form.website || undefined,
        description: form.description,
      },
      operations: {
        category: form.category,
        annualTonnage: form.annualTonnage,
        plasticTypes: Array.isArray(form.plasticTypes) ? form.plasticTypes : [],
        contactName: form.contactName,
        contactTitle: form.contactTitle,
        contactPhone: form.contactPhone,
        contactEmail: form.contactEmail,
      },
      membership: {
        tier: form.tier,
        paymentMethod: form.paymentMethod,
      },
      declaration: {
        confirmAccuracy: Boolean(form.confirmAccuracy),
        confirmRules: Boolean(form.confirmRules),
        confirmRenewal: Boolean(form.confirmRenewal),
        signatoryName: form.signatoryName,
        signatoryTitle: form.signatoryTitle,
        applicationDate: form.applicationDate || undefined,
        capacity: form.capacity,
      },
    })

    return send(res, 200, {id: document._id, reference})
  } catch (error) {
    console.error('Membership application submission failed', error)
    return send(res, 500, {message: 'Could not submit membership application'})
  }
}
