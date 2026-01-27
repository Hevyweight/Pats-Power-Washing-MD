// app/gallery/page.tsx
'use client'

import { client } from '@/lib/sanity'
import { useState, useEffect } from 'react'

// Updated query to get videos from Sanity
const videosQuery = `*[_type == "instagramPost" && mediaType == "video"] | order(displayOrder asc, postedDate desc) {
  _id,
  "videoUrl": videoFile.asset->{url}.url,
  videoPosterFilename,
  caption,
  instagramUrl,
  postedDate,
  altText,
  featured,
  mediaType
}`

type SanityVideo = {
  _id: string
  videoUrl?: string  // Made optional to catch null values
  videoPosterFilename?: string
  caption?: string
  instagramUrl?: string
  postedDate: string
  altText?: string
  featured?: boolean
  mediaType?: string
}

// Video Card Component with play button
function VideoCard({ video }: { video: SanityVideo }) {
  const [isPlaying, setIsPlaying] = useState(false)
  
  // Check if videoUrl exists
  if (!video.videoUrl) {
    return (
      <div className="flex flex-col">
        <div className="aspect-[9/16] bg-red-500 flex items-center justify-center p-4">
          <div className="text-white text-center">
            <p className="font-bold mb-2">⚠️ Missing Video Filename</p>
            <p className="text-sm">Video ID: {video._id}</p>
            <p className="text-sm mt-2">Go to Sanity Studio and add the video filename</p>
          </div>
        </div>
        <div className="bg-gray-900 text-white px-4 py-3">
          <p className="text-sm font-medium">{video.caption || 'Missing filename'}</p>
        </div>
      </div>
    )
  }
  
  const videoSrc = video.videoUrl
  const posterSrc = video.videoPosterFilename ? `/videos/${video.videoPosterFilename}` : undefined

  if (!isPlaying) {
    return (
      <>
        <div 
          className="relative cursor-pointer aspect-[9/16] overflow-hidden bg-gray-900 group"
          onClick={() => setIsPlaying(true)}
        >
          {/* Thumbnail Image */}
          {posterSrc && (
            <img
              src={posterSrc}
              alt={video.altText || video.caption || 'Video thumbnail'}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback: if poster doesn't exist, hide this and show black bg
                e.currentTarget.style.display = 'none'
              }}
            />
          )}
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <svg className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

        </div>
        
        {/* Caption Below */}
        <div className="bg-gray-900 text-white px-4 py-3">
          <p className="text-sm font-medium">{video.caption || 'Power washing project'}</p>
        </div>
      </>
    )
  }

  // Show video player when clicked
  return (
    <>
      <div className="relative overflow-hidden bg-gray-900">
        <video
          className="w-full h-full object-cover aspect-[9/16]"
          src={videoSrc}
          poster={posterSrc}
          controls
          autoPlay
          playsInline
          preload="auto"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Caption Below */}
      <div className="bg-gray-900 text-white px-4 py-3">
        <p className="text-sm font-medium">{video.caption || 'Power washing project'}</p>
      </div>
    </>
  )
}

export default function GalleryPage() {
  const [videos, setVideos] = useState<SanityVideo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchVideos() {
      try {
        console.log('Fetching videos from Sanity...')
        const fetchedVideos = await client.fetch(videosQuery)
        console.log('Fetched videos:', fetchedVideos)
        
        if (Array.isArray(fetchedVideos)) {
          setVideos(fetchedVideos)
        } else {
          setError('Unexpected data format from Sanity')
        }
      } catch (error) {
        console.error('Error fetching videos:', error)
        setError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setIsLoading(false)
      }
    }
    fetchVideos()
  }, [])

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
     <section
        className="relative bg-linear-to-b from-brand-dark to-brand-primary-dark text-white py-20 overflow-hidden"
      >
        {/* Subtle overlay for readability (same as service hero) */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Header */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg mb-6">
            My Work Gallery
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto drop-shadow">
            See the transformations I&apos;ve delivered across Maryland, DC, and Northern Virginia
          </p>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Videos
          </h2>
          <p className="text-lg text-gray-600">
            Watch me in action delivering spotless results
          </p>
        </div>

        {/* Debug info
          {!isLoading && (
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
              <p className="text-sm text-blue-900">
                <strong>Debug:</strong> Found {videos.length} videos in Sanity
              </p>
            </div>
          )}
        */}

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded">
            <p className="text-sm text-red-900">
              <strong>Error:</strong> {error}
            </p>
          </div>
        )}

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[9/16] bg-gray-200 animate-pulse rounded-xl" />
            ))}
          </div>
        ) : videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div 
                key={video._id} 
                className="flex flex-col overflow-hidden rounded-xl bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-900 text-lg font-semibold mb-2">
              No videos found in Sanity
            </p>
            <p className="text-yellow-800 text-sm">
              Make sure you:
              <br />1. Updated your Sanity schema to the hybrid version
              <br />2. Created Instagram posts with mediaType = &#34;video&#34;
              <br />3. Added the videoFilename field
            </p>
          </div>
        )}
      </section>

      {/* Instagram CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Follow My Work on Instagram
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              See daily updates and behind-the-scenes content
            </p>
            <a 
              href="https://instagram.com/patspowerwashing" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow Me on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let me bring the same results to your property
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  )
}
