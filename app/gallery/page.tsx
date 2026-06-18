'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { client } from '@/lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'


const builder = imageUrlBuilder(client)
function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

const galleryQuery = `*[_type == "galleryItem"] | order(featured desc, displayOrder asc, postedDate desc) {
  _id,
  mediaType,
  "imageUrl": image.asset->url,
  "imageAspect": image.asset->metadata.dimensions.aspectRatio,
  "videoUrl": videoFile.asset->url,
  title,
  caption,
  serviceTag,
  featured,
  altText,
  postedDate,
}`

const serviceTags = [
  { label: 'All', value: 'all' },
  { label: 'House Washing', value: 'house-washing' },
  { label: 'Driveway Cleaning', value: 'driveway-cleaning' },
  { label: 'Roof Cleaning', value: 'roof-cleaning' },
  { label: 'Deck & Fence', value: 'deck-fence-cleaning' },
  { label: 'Pressure Washing', value: 'pressure-washing' },
  { label: 'Commercial', value: 'commercial-services' },
]

type GalleryItem = {
  _id: string
  mediaType: 'photo' | 'video'
  imageUrl?: string
  imageAspect?: number
  videoUrl?: string
  title?: string
  caption?: string
  serviceTag?: string
  featured?: boolean
  altText?: string
  postedDate: string
}

function VideoCard({ item }: { item: GalleryItem }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [posterUrl, setPosterUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!item.videoUrl) return
    const video = document.createElement('video')
    video.crossOrigin = 'anonymous'
    video.src = item.videoUrl
    video.currentTime = 1
    video.addEventListener('seeked', () => {
      const canvas = document.createElement('canvas')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      canvas.getContext('2d')?.drawImage(video, 0, 0)
      setPosterUrl(canvas.toDataURL('image/jpeg'))
    })
  }, [item.videoUrl])

  if (!item.videoUrl) return null

  return (
    <div className="relative w-full overflow-hidden bg-[#1C1C1C]">
      {!isPlaying ? (
        <div
          className="relative cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={item.altText || item.caption || 'Video'}
              className="w-full object-cover"
            />
          ) : (
            <div className="w-full aspect-video bg-[#272727]" />
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <svg className="w-8 h-8 text-brand-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {item.caption && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-sm font-medium">{item.caption}</p>
            </div>
          )}
        </div>
      ) : (
        <video
          className="w-full"
          src={item.videoUrl}
          controls
          autoPlay
          playsInline
        />
      )}
    </div>
  )
}

function PhotoCard({ item }: { item: GalleryItem }) {
  if (!item.imageUrl) return null
  return (
    <div className="relative w-full h-full overflow-hidden group">
      <img
        src={item.imageUrl}
        alt={item.altText || item.caption || 'Gallery photo'}
        className="w-full h-full object-cover"
      />
      {item.caption && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
          <p className="text-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.caption}
          </p>
        </div>
      )}
    </div>
  )
}

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTag, setActiveTag] = useState('all')

  useEffect(() => {
    client.fetch(galleryQuery).then((data) => {
      setItems(data)
      setIsLoading(false)
    })
  }, [])

  const filtered = activeTag === 'all'
    ? items
    : items.filter((i) => i.serviceTag === activeTag)

  // Split into 3 columns for masonry
  const columns: GalleryItem[][] = [[], [], []]
  filtered.forEach((item, i) => columns[i % 3].push(item))

  return (
    <div className="bg-black min-h-screen">

      {/* Hero */}
      <section className="relative h-[90vh] flex flex-col overflow-hidden pt-20">
        <Image
          src="/images/v-2/after.jpg"
          alt="Pat's Power Washing Services"
          fill
          className="object-cover object-bottom"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
            Our Work
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            Real Results Across THE <span className="text-brand-primary">DMV</span>
          </h2>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-black sticky top-16 z-30 py-4 border-b border-white/10">
        <div className="section ">
          <div className="flex flex-wrap justify-center gap-3 sm:flex-nowrap sm:overflow-x-auto sm:scrollbar-hide sm:justify-start">
            {serviceTags.map((tag) => (
              <button
                key={tag.value}
                onClick={() => setActiveTag(tag.value)}
                className={`px-5 py-2 h-16 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 rounded-md ${
                  activeTag === tag.value
                    ? 'bg-brand-primary text-white'
                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="bg-black py-16">
        <div className="section">
          {isLoading ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="mb-6 break-inside-avoid rounded-2xl bg-[#1C1C1C] animate-pulse"
                  style={{ height: `${[300, 400, 250, 350, 450, 300][i]}px` }}
                />
              ))}
            </div>
            // Alternate uniform grid
            // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            //   {filtered.map((item) => (
            //     <div key={item._id} className="aspect-video">
            //       {item.mediaType === 'video'
            //         ? <VideoCard item={item} />
            //         : <PhotoCard item={item} />
            //       }
            //     </div>
            //   ))}
            // </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-white/40 text-lg">No items found for this service.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {filtered.map((item) => (
                <div key={item._id} className="mb-6 break-inside-avoid">
                  {item.mediaType === 'video'
                    ? <VideoCard item={item} />
                    : <PhotoCard item={item} />
                  }
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-20">
        <div className="section text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready for a Cleaner Property?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation estimate. We serve all of Maryland, DC, and Northern Virginia.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-brand-primary font-extrabold text-lg px-10 py-4 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          >
            Get a Free Estimate
          </a>
        </div>
      </section>

    </div>
  )
}