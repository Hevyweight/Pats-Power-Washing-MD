"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';

interface Review {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface PlaceDetails {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: Review[];
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [placeDetails, setPlaceDetails] = useState<PlaceDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

      if (!placeId) {
        throw new Error("Missing Place ID configuration");
      }

      const response = await fetch(
        `/api/google-reviews?placeId=${placeId}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch reviews");
      }

      const data = await response.json();
      
      if (data.result) {
        setPlaceDetails({
          name: data.result.name,
          rating: data.result.rating,
          user_ratings_total: data.result.user_ratings_total,
          reviews: data.result.reviews || [],
        });
        setReviews(data.result.reviews || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load reviews");
      console.error("Error fetching reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? 'text-[var(--primary)]' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[var(--bodyTextColor)]">Loading reviews...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center max-w-md">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-[var(--bodyTextColor)] mb-2">
            Unable to load reviews at this time.
          </p>
          <p className="text-sm text-gray-500">
            Please check back later or visit our Google Business page directly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Overall Rating Summary */}
      {placeDetails && (
        <div className="mb-12 text-center">
          <div className="inline-flex flex-col items-center gap-3 p-8 bg-white rounded-2xl shadow-md">
            <div className="flex items-center gap-3">
              <div className="text-5xl font-black text-[var(--headerColor)]">
                {placeDetails.rating.toFixed(1)}
              </div>
              <div className="flex flex-col items-start">
                {renderStars(Math.round(placeDetails.rating))}
                <p className="text-sm text-[var(--bodyTextColor)] mt-1">
                  {placeDetails.user_ratings_total.toLocaleString()} reviews
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Based on Google Reviews
            </p>
          </div>
        </div>
      )}

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {reviews.slice(0, 6).map((review, index) => (
          <div
            key={`${review.author_name}-${index}`}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            {/* Review Header */}
            <div className="flex items-start gap-4 mb-4">
              {/* Profile Photo */}
              {review.profile_photo_url ? (
                <Image
                  src={review.profile_photo_url}
                  alt={`${review.author_name}'s profile`}
                  width={48}
                  height={48}
                  className="rounded-full flex-shrink-0"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold flex-shrink-0">
                  {review.author_name.charAt(0).toUpperCase()}
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                {/* Author Name */}
                <h3 className="font-bold text-[var(--headerColor)] truncate">
                  {review.author_name}
                </h3>
                
                {/* Rating and Time */}
                <div className="flex items-center gap-2 mt-1">
                  {renderStars(review.rating)}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {review.relative_time_description}
                </p>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-sm text-[var(--bodyTextColor)] leading-relaxed line-clamp-5">
              {review.text}
            </p>

            {/* Google Icon */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Google Review</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google Logo Attribution (Required by Google) */}
      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <span>Reviews powered by</span>
        <svg className="w-16 h-6" viewBox="0 0 272 92" fill="none">
          <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
          <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
          <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
          <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
          <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
          <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
        </svg>
      </div>
    </div>
  );
}