// app/reviews/page.tsx
import { getGoogleReviews } from '@/lib/google-places'
import GoogleReviews from '../components/GoogleReviews'
import Link from 'next/link'

export const metadata = {
  title: "Customer Reviews | Pat's Power Washing",
  description: "Read what property owners across Maryland, DC, and Northern Virginia say about Pat's Power Washing services.",
}

export default async function ReviewsPage() {
  const reviewsData = await getGoogleReviews()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-linear-to-b from-brand-dark to-brand-primary-dark text-white py-20 overflow-hidden"
      >
        {/* Subtle overlay just like the ServiceHero */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg mb-6">
              Customer Reviews
            </h1>

            <p className="text-lg md:text-xl text-slate-200 drop-shadow">
              Property owners across the DMV trust Pat&apos;s Power Washing for 
              professional exterior cleaning and consistent results. Here&apos;s what 
              some of my recent clients have to say.
            </p>

          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      {reviewsData ? (
        <GoogleReviews
          businessName={reviewsData.businessName}
          averageRating={reviewsData.averageRating}
          totalReviews={reviewsData.totalReviews}
          reviews={reviewsData.reviews}
          googleUrl={reviewsData.googleUrl}
        />
      ) : (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Reviews Temporarily Unavailable
              </h2>
              <p className="text-gray-700 mb-6">
                I&apos;m currently setting up my Google Business Profile. Check back soon to see what my customers are saying!
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Me Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Property Owners Choose Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Owner-Operated
              </h3>
              <p className="text-gray-600">
                You work directly with me, not a crew. I personally handle every job.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                On-Time Service
              </h3>
              <p className="text-gray-600">
                I respect your time. Scheduled appointments are honored and jobs completed on schedule.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                Professional results every time. If you&apos;re not satisfied, I&apos;ll make it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of satisfied customers across the DMV area
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}