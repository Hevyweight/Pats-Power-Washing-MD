// components/instagram/InstagramFeed.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { urlFor } from '@/lib/sanity'

export interface InstagramPost {
  _id: string
  image?: SanityImageSource | null
  caption?: string
  instagramUrl?: string
  postedDate: string
  altText?: string
  featured?: boolean
}

interface InstagramFeedProps {
  posts: InstagramPost[]
  maxPosts?: number
  columns?: 3 | 4 | 6
  showCaption?: boolean
  className?: string
}

export default function InstagramFeed({ 
  posts, 
  maxPosts = 6,
  columns = 3,
  showCaption = true,
  className = ''
}: InstagramFeedProps) {
  const displayPosts = posts.slice(0, maxPosts)
  
  const gridCols = {
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
  }

  return (
    <div className={`w-full ${className}`}>
      <div className={`grid ${gridCols[columns]} gap-4`}>
        {displayPosts.map((post) => (
          <InstagramPostCard 
            key={post._id} 
            post={post}
            showCaption={showCaption}
          />
        ))}
      </div>
    </div>
  )
}

function InstagramPostCard({
  post,
  showCaption,
}: {
  post: InstagramPost
  showCaption: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  if (!post.image) return null

  const imageUrl = urlFor(post.image).width(600).height(600).fit('crop').url()

  const content = (
    <>
      <Image
        src={imageUrl}
        alt={post.altText || post.caption?.substring(0, 100) || 'Instagram post'}
        fill
        className={`object-cover transition-transform duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Instagram icon overlay */}
      <div
        className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </div>

      {/* Caption overlay (optional) */}
      {showCaption && post.caption && (
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-white text-sm line-clamp-3">{post.caption}</p>
        </div>
      )}
    </>
  )

  if (post.instagramUrl) {
    return (
      <Link
        href={post.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group cursor-pointer block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </Link>
    )
  }

  return (
    <div
      className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </div>
  )
}
