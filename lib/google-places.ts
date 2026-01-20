// lib/google-places.ts
// Server-side function to fetch Google reviews

interface GoogleReview {
  author_name: string
  author_url?: string
  profile_photo_url?: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

interface PlaceDetailsResponse {
  result: {
    name: string
    rating: number
    user_ratings_total: number
    reviews: GoogleReview[]
    url?: string
  }
  status: string
}

export async function getGoogleReviews() {
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY
  const PLACE_ID = process.env.GOOGLE_PLACE_ID // You'll need to find this

  if (!API_KEY || !PLACE_ID) {
    console.error('Missing Google Places API credentials')
    return null
  }

  try {
    // First, get place details with reviews
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews,url&key=${API_KEY}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    )

    const data: PlaceDetailsResponse = await response.json()

    if (data.status !== 'OK') {
      console.error('Google Places API error:', data.status)
      return null
    }

    return {
      businessName: data.result.name,
      averageRating: data.result.rating,
      totalReviews: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
      googleUrl: data.result.url,
    }
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return null
  }
}