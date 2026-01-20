// app/components/blog/BlogCard.tsx
/* eslint-disable  @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'

type BlogPost = {
  _id: string
  _type: string
  title: string
  slug: string
  excerpt: string
  featuredImage?: any
  author: string
  readTime: string
  publishedAt: string
}

const postTypeIcons = {
  blogPostHowTo: '💡',
  blogPostBestTop: '⭐',
  blogPostCompleteGuide: '📖',
  blogPostComparison: '⚖️',
}

const postTypeLabels = {
  blogPostHowTo: 'How-To Guide',
  blogPostBestTop: 'Best & Top List',
  blogPostCompleteGuide: 'Complete Guide',
  blogPostComparison: 'Comparison',
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* Featured Image */}
      {post.featuredImage && (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <Image
            src={urlFor(post.featuredImage).width(800).height(450).url()}
            alt={post.featuredImage.alt || post.title}
            width={800}
            height={450}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Post Type Badge */}
        <div className="mb-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
            <span>{postTypeIcons[post._type as keyof typeof postTypeIcons]}</span>
            <span>{postTypeLabels[post._type as keyof typeof postTypeLabels]}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
          </div>
        </div>
      </div>
    </Link>
  )
}