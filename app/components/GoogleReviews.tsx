// components/GoogleReviews.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Review {
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

interface GoogleReviewsProps {
  businessName: string
  averageRating: number
  totalReviews: number
  reviews: Review[]
  googleUrl?: string
}

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClasses[size]} ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldTruncate = review.text.length > 200

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Reviewer Info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          {review.profile_photo_url ? (
            <Image
              src={review.profile_photo_url}
              alt={review.author_name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 font-semibold">
              {review.author_name.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 truncate">
              {review.author_name}
            </h3>
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {review.relative_time_description}
            </span>
          </div>
          <StarRating rating={review.rating} size="sm" />
        </div>
      </div>

      {/* Review Text */}
      <div className="text-gray-700 leading-relaxed">
        {shouldTruncate && !isExpanded ? (
          <>
            {review.text.substring(0, 200)}...
            <button
              onClick={() => setIsExpanded(true)}
              className="text-blue-600 hover:text-blue-700 font-medium ml-1"
            >
              Read more
            </button>
          </>
        ) : (
          <>
            {review.text}
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(false)}
                className="text-blue-600 hover:text-blue-700 font-medium ml-1"
              >
                Show less
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default function GoogleReviews({
  businessName,
  averageRating,
  totalReviews,
  reviews,
  googleUrl,
}: GoogleReviewsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What My Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <StarRating rating={Math.round(averageRating)} size="lg" />
            <span className="text-2xl font-bold text-gray-900">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <p className="text-gray-600">
            Based on {totalReviews.toLocaleString()} Google reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <ReviewCard key={`${review.author_name}-${review.time}`} review={review} />
          ))}
        </div>

        {/* View All on Google Button */}
        {googleUrl && (
          <div className="text-center">
            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              View All Reviews on Google
            </a>
          </div>
        )}
      </div>
    </section>
  )
}