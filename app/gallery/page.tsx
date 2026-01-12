// app/gallery/page.tsx
// No CMS integration here plus is we get to keep the video poster for a preview and better ui
'use client'

import { client } from '@/lib/sanity'
import { instagramPostsQuery } from '@/lib/sanity/queries/instagram'
import InstagramFeed from '@/app/components/instagram/InstagramFeed'
import { useState, useEffect } from 'react'
import type { InstagramPost as FeedInstagramPost } from '@/app/components/instagram/InstagramFeed'

type MediaItem = {
  type: "video" | "image";
  src: string;
  poster?: string;
  caption: string;
  aspect?: "9/16" | "16/9";
};

const media: MediaItem[] = [
  {
    type: "video",
    src: "/videos/back_steps.mp4",
    poster: "/videos/back_steps-poster.jpg",
    caption: "Back steps cleaning — Bowie, MD",
    aspect: "9/16",
  },
  {
    type: "video",
    src: "/videos/sidewalk.mp4",
    poster: "/videos/sidewalk-poster.jpg",
    caption: "Sidewalk and walkway cleaning — Arlington, VA",
    aspect: "9/16",
  },
  {
    type: "video",
    src: "/videos/wood_steps.mp4",
    poster: "/videos/wood_steps-poster.jpg",
    caption: "Wood steps soft wash — Silver Spring, MD",
    aspect: "9/16",
  },
  {
    type: "video",
    src: "/videos/storefront-portrait.mp4",
    poster: "/videos/storefront-portrait-poster.jpg",
    caption: "Storefront entryway cleaning — Washington, DC",
    aspect: "9/16",
  },
];

// Video Card Component with play button
function VideoCard({ item }: { item: MediaItem }) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (!isPlaying) {
    return (
      <>
        <div 
          className="relative cursor-pointer aspect-[9/16] overflow-hidden bg-gray-900 group"
          onClick={() => setIsPlaying(true)}
        >
          {/* Thumbnail Image */}
          <img
            src={item.poster || item.src}
            alt={item.caption}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback: if poster doesn't exist, hide this and show black bg
              e.currentTarget.style.display = 'none'
            }}
          />
          
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
          <p className="text-sm font-medium">{item.caption}</p>
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
          src={item.src}
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
        <p className="text-sm font-medium">{item.caption}</p>
      </div>
    </>
  )
}

export default function GalleryPage() {
  const [instagramPosts, setInstagramPosts] = useState<FeedInstagramPost[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const posts = await client.fetch(instagramPostsQuery)
      if (Array.isArray(posts)) {
        setInstagramPosts(
          posts.map((post) => ({
            ...post,
            postedDate: post.postedDate ?? '',
          }))
        )
      }
    }
    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My Work Gallery
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See the transformations I&#39;ve delivered across Maryland, DC, and Northern Virginia
          </p>
        </div>
      </section>

      {/* Video Gallery Section */}
      {media.length > 0 && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Videos
            </h2>
            <p className="text-lg text-gray-600">
              Watch me in action delivering spotless results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {media.map((item, index) => (
              <div key={index} className="flex flex-col overflow-hidden rounded-xl bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300">
                {item.type === "video" ? (
                  <VideoCard item={item} />
                ) : (
                  <>
                    <div className="relative overflow-hidden">
                      <img
                        className="w-full h-full object-cover aspect-[9/16] group-hover:scale-105 transition-transform duration-300"
                        src={item.src}
                        alt={item.caption}
                      />
                    </div>
                    <div className="bg-gray-900 text-white px-4 py-3">
                      <p className="text-sm font-medium">{item.caption}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Instagram Photo Gallery Section */}
      {instagramPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Recent Projects
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                My latest transformations from around the DMV area
              </p>
            </div>

            <InstagramFeed 
              posts={instagramPosts}
              maxPosts={12}
              columns={3}
              showCaption={true}
              className="mb-8"
            />

            {/* Follow CTA */}
            <div className="text-center mt-12">
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
      )}

      {/* Empty State (if no content) */}
      {instagramPosts.length === 0 && media.length === 0 && (
        <section className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Gallery Coming Soon
            </h2>
            <p className="text-gray-600">
              I&#39;m building out my gallery. Check back soon to see my amazing transformations!
            </p>
          </div>
        </section>
      )}

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
  );
}
