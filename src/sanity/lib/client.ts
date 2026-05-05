import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '9cpfuau7',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2026-05-05',
  useCdn: true,
})
