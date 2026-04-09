import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || '1l06au3n'
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export async function getBookPage() {
  try {
    return await client.fetch(`*[_type == "bookPage"][0]`)
  } catch (e) {
    return null
  }
}