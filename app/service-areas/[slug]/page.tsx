// app/service-areas/[slug]/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from '@/lib/sanity'
import { PortableTextBlock, PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import LocationServicesGrid from '@/app/components/location/ServicesGrid'
import { BASE_URL } from '@/lib/constants'




const services = [
  { name: 'House Washing', slug: 'house-washing', description: 'Soft wash treatments that remove dirt, mold, and algae without damaging your siding.' },
  { name: 'Driveway Cleaning', slug: 'driveway-cleaning', description: 'High-pressure cleaning that blasts away oil stains, tire marks, and years of buildup.' },
  { name: 'Roof Cleaning', slug: 'roof-cleaning', description: 'Safe low-pressure soft washing that eliminates black streaks, moss, and lichen.' },
  { name: 'Deck & Fence Cleaning', slug: 'deck-fence-cleaning', description: 'Restore weathered wood and vinyl to like-new condition before staining or sealing.' },
  { name: 'Pressure Washing', slug: 'pressure-washing', description: 'Versatile high-pressure cleaning for patios, sidewalks, retaining walls, and more.' },
  { name: 'Commercial Services', slug: 'commercial-services', description: 'Fleet washing, storefronts, parking lots, and large-scale commercial properties.' },
]

interface LocationPageData {
  city: string
  state: string
  heroImage?: string
  neighborhoods?: string[]
  localIntro?: PortableTextBlock[]
  servicesOffered?: Array<{
    name: string
    slug: string
    description: string
  }>
  metaDescription?: string
}

const objectPositions: Record<string, string> = {
  'college-park-md': 'center 20%',
  'silver-spring-md': 'center 50%',
  'greenbelt-md': 'center 40%',
  'bowie-md': 'center 70%',
  'laurel-md': 'center 50%',
  'arlington-va': 'center 80%',
  'alexandria-va': 'center 60%',
  'washington-dc': 'center 70%',
  'maryland': 'center 50%',
  'virginia': 'center 50%',
  'delaware': 'center 50%',
  'pennsylvania': 'center 50%',
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-white/70 text-lg leading-relaxed mb-4">{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-extrabold text-white mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-white mb-3">{children}</h3>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="text-white font-bold">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-white/80">{children}</em>
    ),
  },
} as any

export default async function LocationPage({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<React.ReactElement> {
  const { slug } = await params

  const page = await client.fetch<LocationPageData>(`
  *[_type == "locationPage" && slug.current == $slug][0] {
    city,
    state,
    neighborhoods,
    localIntro,
    servicesOffered,
    metaDescription
  }
`, { slug })

  if (!page) {
    notFound()
  }

  const displayServices = page.servicesOffered?.length
    ? page.servicesOffered
    : services

  const neighborhoods = Array.isArray(page.neighborhoods) ? page.neighborhoods : []

  return (
    <div className="bg-black min-h-screen">

      {/* Hero */}
      <section className="relative h-[90vh] flex flex-col overflow-hidden pt-20">
        <Image
          src={`/images/locations/${slug}.jpg`}
          alt={`Power washing in ${page.city}, ${page.state}`}
          fill
          className="object-cover object-center"
          style={{ objectPosition: objectPositions[slug] || 'center' }}
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full mb-24 xl:mb-48">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
            {page.city}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            Professional <span className="text-brand-primary">Power Washing</span> in {page.state}
          </h2>
        </div>
      </section>

      {/* Block 1 — Neighborhoods */}
      {neighborhoods.length > 0 && (
        <section className="bg-black py-20">
          <div className="section">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-brand-primary" />
              <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                Where We Work
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
              Neighborhoods We Serve in <span className="text-brand-primary">{page.city}</span>
            </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {neighborhoods.map((hood) => (
                  <div
                    key={hood}
                    className="bg-[#1C1C1C] border border-white/5 px-8 py-4 flex items-center gap-3 rounded-lg"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                    <p className="text-white/70 text-sm font-medium">{hood}</p>
                  </div>
                ))}
              </div>
          </div>
        </section>
      )}


      {/* Block 2 — Local Intro */}
      {page.localIntro && (
        <section className="bg-[#1C1C1C] py-20">
          <div className="section">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-brand-primary" />
                <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                  Serving {page.city}
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                Power Washing in <span className="text-brand-primary">{page.city}, {page.state}</span>
              </h2>
              <PortableText
                value={page.localIntro}
                components={portableTextComponents}
              />
            </div>
          </div>
        </section>
      )}

      {/* Block 3 — Services */}
      <LocationServicesGrid city={page.city} />

      {/* Reviews Widget */}
      <section className="bg-black pt-4 pb-20">
        <div className="section">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-brand-primary" />
            <p className="text-sm font-semibold uppercase tracking-widest text-white">Real Results</p>
            <div className="w-16 h-px bg-brand-primary" />
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              What the DMV Is <span className="text-brand-primary">Saying</span>
            </h2>
          </div>
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-2bb2ce54-87dd-4611-bccd-0ddd3ac9d171" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Block 4 — CTA */}
      <section className="bg-brand-primary py-20">
        <div className="section text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready for a Cleaner Property in {page.city}?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation estimate. We serve {page.city} and the surrounding {page.state} area.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-3xl font-bold bg-white text-brand-primary hover:bg-black hover:text-white transition-all duration-200"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

    </div>
  )
}

export async function generateStaticParams() {
  const pages = await client.fetch<Array<{ slug: string }>>(`
    *[_type == "locationPage"] { "slug": slug.current }
  `)
  return pages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log('slug:', slug)
  console.log('image path:', `/images/areas/${slug}.jpg`)
  const page = await client.fetch<{ city: string; state: string; metaDescription?: string }>(`
    *[_type == "locationPage" && slug.current == $slug][0] {
      city,
      state,
      metaDescription
    }
  `, { slug })

  return {
    title: `Power Washing in ${page.city}, ${page.state} | Pat's Power Washing`,
    description: page.metaDescription || `Professional power washing services in ${page.city}, ${page.state}. House washing, driveway cleaning, roof cleaning and more.`,
    alternates: {
      canonical: `${BASE_URL}/service-areas/${slug}`,
    },
  }
}

function notFound() {
  throw new Error('Function not implemented.')
}
