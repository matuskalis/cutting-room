import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity image source type
interface SanityImageSource {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Query helpers
export async function getTeamMembers() {
  return sanityClient.fetch(`*[_type == "teamMember"] | order(order asc)`)
}

export async function getServices() {
  return sanityClient.fetch(`*[_type == "service"] | order(order asc)`)
}

export async function getCaseStudies(featured?: boolean) {
  const filter = featured ? `&& featured == true` : ''
  return sanityClient.fetch(`*[_type == "caseStudy" ${filter}] | order(publishedAt desc)`)
}

export async function getBlogPosts(limit?: number) {
  const limitStr = limit ? `[0...${limit}]` : ''
  return sanityClient.fetch(`*[_type == "blogPost"] | order(publishedAt desc) ${limitStr}`)
}

export async function getBlogPost(slug: string) {
  return sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      ...,
      author->
    }`,
    { slug }
  )
}

export async function getTechnologies(category?: string) {
  const filter = category ? `&& category == "${category}"` : ''
  return sanityClient.fetch(`*[_type == "technology" ${filter}]`)
}
