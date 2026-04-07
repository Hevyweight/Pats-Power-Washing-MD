import { PortableText, PortableTextBlock } from '@portabletext/react'
import Image from 'next/image'

type Props = {
  heading?: string
  subheading?: string
  body?: PortableTextBlock[]
  image?: { url: string; alt?: string }
  city: string
}

export default function LocationMainContent({ heading, subheading, body, image, city }: Props) {
  if (!heading && !body) return null

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT — Text */}
        <div>
          {subheading && (
            <p className="text-sm font-semibold uppercase tracking-widest text-[#00B4D8] mb-3">
              {subheading}
            </p>
          )}
          {heading && (
            <h2 className="text-3xl lg:text-4xl font-bold text-[#03045E] leading-tight mb-6">
              {heading}
            </h2>
          )}
          {body && (
            <div className="prose prose-base max-w-none
              text-gray-600
              prose-p:leading-relaxed
              prose-p:mb-4
              prose-strong:text-[#03045E]
              prose-a:text-[#0077B6]
              prose-a:no-underline
              hover:prose-a:underline">
              <PortableText value={body} />
            </div>
          )}
        </div>

        {/* RIGHT — Image */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#CAF0F8]">
          {image?.url ? (
            <Image
              src={image.url}
              alt={image.alt ?? `Power washing in ${city}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="#90E0EF" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}