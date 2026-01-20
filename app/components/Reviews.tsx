// app/components/Reviews.tsx
import { getGoogleReviews } from '@/lib/google-places'
import Link from 'next/link'
import Image from 'next/image'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${
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

export default async function Reviews() {
  const reviewsData = await getGoogleReviews()

  // Fallback if API fails
  if (!reviewsData) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Property Owners Across the DMV
          </h2>
          <p className="text-slate-600 mb-8">
            See what my customers have to say about my work
          </p>
          <Link
            href="/reviews"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Read Customer Reviews
          </Link>
        </div>
      </section>
    )
  }

  // Show top 3 reviews on homepage
  const topReviews = reviewsData.reviews.slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What My Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <StarRating rating={Math.round(reviewsData.averageRating)} />
            <span className="text-2xl font-bold text-gray-900">
              {reviewsData.averageRating.toFixed(1)}
            </span>
          </div>
          <p className="text-gray-600">
            Based on {reviewsData.totalReviews.toLocaleString()} Google reviews
          </p>
        </div>

        {/* Top 3 Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {topReviews.map((review) => (
            <div
              key={`${review.author_name}-${review.time}`}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Reviewer Info with Profile Image */}
              <div className="flex items-start gap-4 mb-4">
                {/* Profile Image */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  {review.profile_photo_url ? (
                    <Image
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-700 font-semibold text-lg">
                      {review.author_name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Name and Stars */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {review.author_name}
                  </h3>
                  <StarRating rating={review.rating} />
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 line-clamp-4 leading-relaxed">
                {review.text}
              </p>

              {/* Time */}
              <p className="text-sm text-gray-500 mt-3">
                {review.relative_time_description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Read All Reviews
          </Link>
        </div>
      </div>
    </section>
  )
}