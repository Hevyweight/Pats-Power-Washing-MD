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
      className="group flex flex-col bg-[#1C1C1C] overflow-hidden border border-white/5 transition-colors duration-300"
    >
      {/* Featured Image */}
      {post.featuredImage ? (
        <div className="aspect-video overflow-hidden bg-[#272727]">
          <Image
            src={urlFor(post.featuredImage).width(800).height(450).url()}
            alt={post.featuredImage.alt || post.title}
            width={800}
            height={450}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="aspect-video bg-[#272727] flex items-center justify-center">
          <p className="text-white/20 text-sm uppercase tracking-widest">No Image</p>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">

        {/* Post Type Badge */}
        <div className="mb-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary">
            {postTypeLabels[post._type as keyof typeof postTypeLabels]}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-white mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors duration-200">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-white/50 text-sm leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-white/30 pt-4 mt-4 border-t border-white/10">
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
          <div className="ml-auto">
            <svg className="w-4 h-4 text-brand-primary transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

      </div>
    </Link>
  )
}