import { createClient } from '@sanity/client'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || '1l06au3n'
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2024-01-01',
})

export async function getBookPage() {
  try {
    return await client.fetch(`*[_type == "bookPage"][0]`)
  } catch (e) {
    return null
  }
}

export function urlFor(source: any) {
  if (!source?.asset?._ref) return ''
  const ref = source.asset._ref
  const parts = ref.replace('image-', '').split('-')
  const ext = parts.pop()
  const dimensions = parts.pop()
  const id = parts.join('-')
  return `https://cdn.sanity.io/images/${projectId}/production/${id}-${dimensions}.${ext}`
}