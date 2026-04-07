// app/areas/[slug]/page.tsx
import { client } from '@/lib/sanity'
import { PortableText, PortableTextBlock } from '@portabletext/react'
import { Fragment } from 'react'
import LocationHero from '@/app/components/location/LocationHero'
import LocationMainContent from '@/app/components/location/LocationMainContent'
import ServicesListGrid from '@/app/components/location/ServicesListGrid'
import WhyLocalNeedsCleaning from '@/app/components/location/WhyLocalNeedsCleaning'
import NeighborhoodsGrid from '@/app/components/location/NeighborhoodsGrid'
import LocalExpertise from '@/app/components/location/LocalExpertise'
import SimpleProcess from '@/app/components/location/SimpleProcess'
import LocationCTA from '@/app/components/location/LocationCTA'
import LocationFAQ from '@/app/components/location/LocationFAQ'

interface LocationPageData {
  city: string
  state: string
  heroSubtitle: string
  heroImage?: string
  mainContent: {
    heading?: string
    subheading?: string
    body?: PortableTextBlock[]
    image?: {
      url: string
      alt?: string
    }
  }
  componentOrder: string[]
  servicesOffered: Array<{
    name: string
    slug: string
    description: string
  }>
  whyNeedsCleaning?: PortableTextBlock[]
  neighborhoods?: string[]
  localExpertise?: PortableTextBlock[]
  faq?: Array<{
    question: string
    answer: string
  }>
}

export default async function LocationPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  
  const page = await client.fetch<LocationPageData>(`
    *[_type == "locationPage" && slug.current == $slug][0] {
      city,
      state,
      heroSubtitle,
      "heroImage": heroImage.asset->url,
      mainContent {
        heading,
        subheading,
        body,
        "image": image {
          alt,
          "url": asset->url,
        }
      },
      componentOrder,
      servicesOffered,
      whyNeedsCleaning,
      neighborhoods,
      localExpertise,
      faq
    }
  `, { slug })

  if (!page) {
    return <div>Page not found</div>
  }

  const neighborhoods = Array.isArray(page.neighborhoods) ? page.neighborhoods : []

  // Component mapping
  const components: Record<string, React.ReactNode> = {
    services: page.servicesOffered?.length > 0 ? (
      <ServicesListGrid services={page.servicesOffered} city={page.city} />
    ) : null,
    
    whyClean: page.whyNeedsCleaning ? (
      <WhyLocalNeedsCleaning city={page.city} content={page.whyNeedsCleaning} />
    ) : null,
    
    neighborhoods: neighborhoods.length > 0 ? (
      <NeighborhoodsGrid city={page.city} neighborhoods={neighborhoods} />
    ) : null,
    
    expertise: page.localExpertise ? (
      <LocalExpertise city={page.city} content={page.localExpertise} />
    ) : null,
    
    process: <SimpleProcess city={page.city} />,
  }

  return (
    <>
      {/* FIXED: Always first */}
      <LocationHero
        city={page.city}
        state={page.state}
        subtitle={page.heroSubtitle}
        backgroundImage={page.heroImage}
      />

      <LocationMainContent
        heading={page.mainContent?.heading}
        subheading={page.mainContent?.subheading}
        body={page.mainContent?.body}
        image={page.mainContent?.image}
        city={page.city}
      />

      {/* DYNAMIC: Render in chosen order */}
      {page.componentOrder?.map((key: string) => 
        components[key] ? (
          <Fragment key={key}>{components[key]}</Fragment>
        ) : null
      )}

      {/* FIXED: Always last */}
      <LocationCTA city={page.city} state={page.state} />

      {page.faq && page.faq.length > 0 && (
        <LocationFAQ city={page.city} faqs={page.faq} />
      )}
    </>
  )
}

export async function generateStaticParams() {
  const pages = await client.fetch<Array<{slug: string}>>(`
    *[_type == "locationPage"] { "slug": slug.current }
  `)
  
  return pages.map((page) => ({
    slug: page.slug
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  
  const page = await client.fetch<{city: string; state: string; metaDescription?: string}>(`
    *[_type == "locationPage" && slug.current == $slug][0] {
      city,
      state,
      metaDescription
    }
  `, { slug })

  return {
    title: `${page.city}, ${page.state} | Pat's Power Washing`,
    description: page.metaDescription || `Professional pressure washing services in ${page.city}, ${page.state}.`,
  }
}
