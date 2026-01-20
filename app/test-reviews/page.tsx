// app/test-reviews/page.tsx
// Temporary debug page - DELETE after testing

import { getGoogleReviews } from '@/lib/google-places'

export default async function TestReviewsPage() {
  // Get environment variables
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  // Try to fetch reviews
  let reviewsData = null
  let error = null
  let rawResponse = null

  try {
    // Make the raw API call to see what happens
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,url&key=${apiKey}`,
      { cache: 'no-store' }
    )
    
    rawResponse = await response.json()
    console.log('Raw API Response:', rawResponse)

    // Also try the helper function
    reviewsData = await getGoogleReviews()
  } catch (e) {
    error = e instanceof Error ? e.message : 'Unknown error'
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-8">Google Reviews Debug Page</h1>

        {/* Environment Variables Check */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold mb-4">1. Environment Variables</h2>
          <div className="space-y-2 font-mono text-sm">
            <div>
              <strong>API Key:</strong>{' '}
              {apiKey ? (
                <span className="text-green-600">
                  ✓ Set ({apiKey.substring(0, 20)}...)
                </span>
              ) : (
                <span className="text-red-600">✗ Missing</span>
              )}
            </div>
            <div>
              <strong>Place ID:</strong>{' '}
              {placeId ? (
                <span className="text-green-600">✓ Set ({placeId})</span>
              ) : (
                <span className="text-red-600">✗ Missing</span>
              )}
            </div>
          </div>
        </div>

        {/* Raw API Response */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold mb-4">2. Raw API Response</h2>
          {rawResponse ? (
            <div className="space-y-4">
              <div>
                <strong>Status:</strong>{' '}
                <span
                  className={
                    rawResponse.status === 'OK'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  {rawResponse.status}
                </span>
              </div>
              {rawResponse.error_message && (
                <div className="text-red-600">
                  <strong>Error:</strong> {rawResponse.error_message}
                </div>
              )}
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-600 hover:text-blue-700">
                  View Full Response (JSON)
                </summary>
                <pre className="mt-2 p-4 bg-gray-100 rounded overflow-auto text-xs">
                  {JSON.stringify(rawResponse, null, 2)}
                </pre>
              </details>
            </div>
          ) : (
            <div className="text-red-600">No response received</div>
          )}
        </div>

        {/* Helper Function Result */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold mb-4">3. Helper Function Result</h2>
          {error ? (
            <div className="text-red-600">
              <strong>Error:</strong> {error}
            </div>
          ) : reviewsData ? (
            <div className="space-y-4">
              <div className="text-green-600">✓ Successfully fetched data</div>
              <div>
                <strong>Business Name:</strong> {reviewsData.businessName}
              </div>
              <div>
                <strong>Average Rating:</strong> {reviewsData.averageRating}
              </div>
              <div>
                <strong>Total Reviews:</strong> {reviewsData.totalReviews}
              </div>
              <div>
                <strong>Reviews Returned:</strong> {reviewsData.reviews.length}
              </div>
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-600 hover:text-blue-700">
                  View Reviews Data
                </summary>
                <pre className="mt-2 p-4 bg-gray-100 rounded overflow-auto text-xs">
                  {JSON.stringify(reviewsData, null, 2)}
                </pre>
              </details>
            </div>
          ) : (
            <div className="text-yellow-600">No data returned (null)</div>
          )}
        </div>

        {/* Common Issues */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Common Issues</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>REQUEST_DENIED:</strong> API key restrictions are too strict
              or Places API not enabled
            </li>
            <li>
              <strong>INVALID_REQUEST:</strong> Place ID is incorrect
            </li>
            <li>
              <strong>ZERO_RESULTS:</strong> Business not found with that Place ID
            </li>
            <li>
              <strong>OVER_QUERY_LIMIT:</strong> Exceeded API quota (rare with
              free tier)
            </li>
          </ul>
        </div>

        {/* Test Direct Link */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold mb-4">4. Test Direct API Call</h2>
          <p className="text-sm text-gray-600 mb-4">
            Copy this URL and paste it in your browser to test directly:
          </p>
          <div className="bg-gray-100 p-4 rounded overflow-auto text-xs break-all">
            {apiKey && placeId ? (
              <a
                href={`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                {`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey.substring(0, 20)}...`}
              </a>
            ) : (
              <span className="text-red-600">
                Missing API key or Place ID
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}