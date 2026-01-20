// lib/sanity/queries/instagram.ts
import { groq } from 'next-sanity'

// Get all Instagram posts (images and videos), ordered by display order or date
export const instagramPostsQuery = groq`
  *[_type == "instagramPost"] | order(displayOrder asc, postedDate desc) {
    _id,
    mediaType,
    image,
    videoFilename,
    videoPosterFilename,
    caption,
    instagramUrl,
    postedDate,
    altText,
    featured
  }
`

// Get only video posts
export const instagramVideosQuery = groq`
  *[_type == "instagramPost" && mediaType == "video"] | order(displayOrder asc, postedDate desc) {
    _id,
    videoFilename,
    videoPosterFilename,
    caption,
    instagramUrl,
    postedDate,
    altText,
    featured
  }
`

// Get only image posts
export const instagramImagesQuery = groq`
  *[_type == "instagramPost" && mediaType == "image"] | order(displayOrder asc, postedDate desc) {
    _id,
    image,
    caption,
    instagramUrl,
    postedDate,
    altText,
    featured
  }
`

// Get featured Instagram posts only
export const featuredInstagramPostsQuery = groq`
  *[_type == "instagramPost" && featured == true] | order(displayOrder asc, postedDate desc) {
    _id,
    mediaType,
    image,
    videoFilename,
    videoPosterFilename,
    caption,
    instagramUrl,
    postedDate,
    altText,
    featured
  }
`

// Get limited number of recent posts
export const recentInstagramPostsQuery = (limit: number = 6) => groq`
  *[_type == "instagramPost"] | order(postedDate desc) [0...${limit}] {
    _id,
    mediaType,
    image,
    videoFilename,
    videoPosterFilename,
    caption,
    instagramUrl,
    postedDate,
    altText,
    featured
  }
`