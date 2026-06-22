// app/services/[service]/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import LocationServicesGrid from '@/app/components/location/ServicesGrid'
import ServiceBlock from '@/app/components/location/ServiceBlock'
import { HouseLine, RoadHorizon, SolarRoof, Waves, Building } from '@phosphor-icons/react/dist/ssr'
import { BASE_URL } from '@/lib/constants'

const serviceData: Record<string, {
  name: string
  heroHeadline: string
  heroSub: string
  intro: string
  blockHeading: string
  blockBody: string
  blockReverse: boolean
  icon: React.ReactNode
  tag: string
  objectPosition: string
}> = {
  'house-washing': {
    name: 'House Washing',
    heroHeadline: 'House Washing',
    heroSub: 'Soft Wash Treatments for Your Home',
    intro: 'Your home\'s exterior takes a beating from Maryland\'s humidity, pollen seasons, and constant moisture. Dirt, mold, mildew, and algae don\'t just look bad. They eat away at your siding over time. Our soft wash treatments use low pressure and professional-grade cleaning solutions to safely remove buildup without damaging your paint, siding, or trim.',
    blockHeading: 'Safe for Every Surface Type',
    blockBody: 'Whether your home has vinyl siding, brick, stucco, wood, or fiber cement. We use the right pressure and solution for your specific material. No guessing, no damage. Just a clean house that stays cleaner longer than a standard pressure wash.',
    blockReverse: false,
    icon: <HouseLine size={300} color="white" weight="light" />,
    tag: 'house-washing',
    objectPosition: 'center 62%',
  },
  'driveway-cleaning': {
    name: 'Driveway Cleaning',
    heroHeadline: 'Driveway Cleaning',
    heroSub: 'High-Pressure Surface Cleaning',
    intro: 'Oil stains, tire marks, rust, and years of ground-in grime can make even a well-kept property look neglected. Our high-pressure driveway cleaning service removes what regular washing can\'t. Restoring your concrete, asphalt, or paver surface to like-new condition in a single visit.',
    blockHeading: 'Built for Every Surface',
    blockBody: 'Concrete, asphalt, pavers, brick. Each surface needs a different approach. We adjust our pressure and technique based on what we\'re cleaning so you get maximum results without cracking, etching, or damage. Most driveways are done in under two hours.',
    blockReverse: false,
    icon: <RoadHorizon size={300} color="white" weight="light" />,
    tag: 'driveway-cleaning',
    objectPosition: 'center 84%',
  },
  'roof-cleaning': {
    name: 'Roof Cleaning',
    heroHeadline: 'Roof Cleaning',
    heroSub: 'Low-Pressure Soft Wash Treatments',
    intro: 'Those black streaks on your roof aren\'t just dirt it\'s Gloeocapsa Magma, a bacteria that feeds on your shingles and shortens your roof\'s lifespan. Our non-pressure soft wash treatment neutralizes the growth at the source, removing streaks, moss, and lichen without voiding your roof warranty or damaging fragile shingles.',
    blockHeading: 'Protect Your Roof Investment',
    blockBody: 'A clean roof lasts longer. Algae and moss trap moisture against your shingles, accelerating wear and leading to costly repairs. Our treatments don\'t just clean they slow regrowth so your roof stays cleaner for years, not weeks.',
    blockReverse: false,
    icon: <SolarRoof size={300} color="white" weight="light" />,
    tag: 'roof-cleaning',
    objectPosition: 'center 54%',
  },
  'deck-fence-cleaning': {
    name: 'Deck & Fence Cleaning',
    heroHeadline: 'Deck & Fence Cleaning',
    heroSub: 'Restore Your Deck, Fence & Outdoor Surfaces',
    intro: 'Decks and fences take constant abuse from sun, rain, and humidity. Over time, wood grays out, vinyl turns green, and mold works its way into every crack. Our cleaning process strips away years of buildup and prepares your surfaces for staining, sealing,  or just leaves them looking dramatically better on their own.',
    blockHeading: 'Ready for Stain or Seal',
    blockBody: 'If you\'re planning to stain or seal your deck this season, a professional clean is the essential first step. Stain applied over dirty wood won\'t bond properly and will peel within months. We prep the surface right so whatever you apply on top lasts.',
    blockReverse: false,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-72 h-72" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 28h56" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M4 40h56" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 16v36" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 16v36" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M36 16v36" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M48 16v36" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 16l6-8 6 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 16l6-8 6 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'deck-fence-cleaning',
    objectPosition: 'center 80%',
  },
  'pressure-washing': {
    name: 'Pressure Washing',
    heroHeadline: 'Pressure Washing',
    heroSub: 'Versatile Cleaning for Any Surface',
    intro: 'From patios and sidewalks to retaining walls and pool decks, our pressure washing service handles it all. We bring commercial-grade equipment and the experience to know exactly how much pressure each surface needs, so you get a deep clean without the risk of damage.',
    blockHeading: 'The Right Pressure for Every Job',
    blockBody: 'Not every surface needs the same treatment. Too much pressure on the wrong surface causes permanent damage. Too little and you\'re just moving dirt around. We\'ve cleaned thousands of surfaces across the DMV and know exactly what each one needs.',
    blockReverse: false,
    icon: <Waves size={300} color="white" weight="light" />,
    tag: 'pressure-washing',
    objectPosition: 'center 80%',
  },
  'commercial-pressure-washing': {
    name: 'Commercial Pressure Washing',
    heroHeadline: 'Commercial Pressure Washing',
    heroSub: 'Large-Scale Exterior Cleaning for the DMV',
    intro: 'First impressions matter for your business. A dirty storefront, grimy parking lot, or stained building exterior sends the wrong message to customers before they ever walk in the door. Our commercial cleaning services handle properties of any size, from single storefronts to full office parks and retail centers.',
    blockHeading: 'Built for Business Properties',
    blockBody: 'We work around your schedule to minimize disruption to your business. Early mornings, evenings, or weekends whatever works for you. We\'re fully insured for commercial work and experienced with the specific challenges of high-traffic commercial surfaces.',
    blockReverse: false,
    icon: <Building size={300} color="white" weight="light" />,
    tag: 'commercial-pressure-washing',
    objectPosition: 'center 80%',
  },
}

type GalleryItem = {
  _id: string
  mediaType: 'photo' | 'video'
  imageUrl?: string
  videoUrl?: string
  caption?: string
  altText?: string
}

export default async function ServicePage({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<React.ReactElement> {
  const { slug } = await params
  const service = serviceData[slug]

if (!service) notFound()

const galleryItems = await client.fetch<GalleryItem[]>(`
  *[_type == "galleryItem" && serviceTag == $tag] | order(featured desc, displayOrder asc) [0...6] {
    _id,
    mediaType,
    "imageUrl": image.asset->url,
    "videoUrl": videoFile.asset->url,
    caption,
    altText,
  }
`, { tag: service!.tag } as any)

  return (
    <div className="bg-black min-h-screen">

      {/* Hero */}
      <section className="relative h-[90vh] flex flex-col overflow-hidden pt-20">
        <Image
          src={`/images/services/${slug}.jpg`}
          alt={service.name}
          fill
          className="object-cover md:object-[center_80%]"
          style={{ objectPosition: service.objectPosition }}
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
            {service.heroHeadline}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            <span className="text-brand-primary">{service.heroSub}</span>
          </h2>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-black py-20">
        <div className="section">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
              {service.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Service Block */}
      <ServiceBlock
        heading={service.blockHeading}
        body={service.blockBody}
        icon={service.icon}
        reverse={service.blockReverse}
      />

      {/* Gallery Strip */}
      {galleryItems.length > 0 && (
        <section className="bg-black py-20">
          <div className="section">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-brand-primary" />
              <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Our Work</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
              {service.name} <span className="text-brand-primary">Results</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryItems.map((item) => (
                <div key={item._id} className="aspect-video overflow-hidden">
                  {item.mediaType === 'photo' && item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.altText || item.caption || service.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-xl font-bold bg-white text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Services Grid */}
      <LocationServicesGrid city="the DMV" />

      {/* CTA */}
      <section className="bg-brand-primary py-20">
        <div className="section text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready for Professional {service.name}?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation estimate. We serve all of Maryland, DC, and Northern Virginia.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-2xl font-bold bg-white text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = serviceData[slug]
  if (!service) return {}
  return {
    title: `${service.name} | Pat's Power Washing`,
    description: service.intro.slice(0, 160),
    alternates: {
      canonical: `${BASE_URL}/services/${slug}`,
    },
  }
}