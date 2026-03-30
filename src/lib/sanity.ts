import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
})

export async function getBookPage() {
  return client.fetch(`*[_type == "bookPage"][0]`)
}

export function urlFor(source: any) {
  if (!source?.asset?._ref) return ''
  const ref = source.asset._ref
  const [, id, dimensionsExt] = ref.split('-')
  const [dimensions, ext] = dimensionsExt.split('.')
  return `https://cdn.sanity.io/images/${import.meta.env.PUBLIC_SANITY_PROJECT_ID}/production/${id}-${dimensions}.${ext}`
}
