// lib/sanity/queries/blog.ts
import { groq } from 'next-sanity'

// Get all blog posts from all types
export const allBlogPostsQuery = groq`
  *[
    _type in ["blogPostHowTo", "blogPostBestTop", "blogPostCompleteGuide", "blogPostComparison"] 
    && isDraft != true
  ] | order(publishedAt desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    featuredImage,
    author,
    readTime,
    publishedAt
  }
`

// Get single blog post by slug (checks all types)
export const blogPostBySlugQuery = (slug: string) => groq`
  *[
    _type in ["blogPostHowTo", "blogPostBestTop", "blogPostCompleteGuide", "blogPostComparison"]
    && slug.current == "${slug}" 
    && isDraft != true
  ][0] {
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    featuredImage,
    author,
    readTime,
    publishedAt,
    
    // Common fields
    parentKeyword,
    childKeywords,
    introduction,
    localFactors,
    faq,
    conclusion,
    
    // HOW-TO specific
    _type == "blogPostHowTo" => {
      whatYoullNeed,
      stepByStepGuide,
      commonMistakes,
      whenToCallPro,
      checklist
    },
    
    // BEST & TOP specific
    _type == "blogPostBestTop" => {
      criteriaSection,
      topItems,
      buyingGuide
    },
    
    // COMPLETE GUIDE specific
    _type == "blogPostCompleteGuide" => {
      whatYoullNeed,
      fundamentals,
      stepByStepGuide,
      advancedTechniques,
      specificSituations,
      comparisonTable,
      commonMistakes,
      whenToCallPro,
      checklist
    },
    
    // COMPARISON specific
    _type == "blogPostComparison" => {
      quickOverview,
      comparisonTable,
      optionA,
      optionB,
      keyDifferences,
      decisionFramework
    },
    
    // Related posts
    relatedPosts[]-> {
      _id,
      _type,
      title,
      "slug": slug.current,
      excerpt,
      featuredImage,
      readTime,
      publishedAt
    }
  }
`

// Get recent blog posts (all types)
export const recentBlogPostsQuery = (limit: number = 6) => groq`
  *[
    _type in ["blogPostHowTo", "blogPostBestTop", "blogPostCompleteGuide", "blogPostComparison"] 
    && isDraft != true
  ] | order(publishedAt desc) [0...${limit}] {
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    featuredImage,
    author,
    readTime,
    publishedAt
  }
`

// Get posts by type
export const blogPostsByTypeQuery = (type: string) => groq`
  *[_type == "${type}" && isDraft != true] | order(publishedAt desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    featuredImage,
    author,
    readTime,
    publishedAt
  }
`