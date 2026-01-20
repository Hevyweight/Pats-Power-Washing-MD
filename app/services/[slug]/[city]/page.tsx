// app/services/[service]/[city]/page.tsx
import { client } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import type { PortableTextBlock } from '@portabletext/types'

import ServiceLocationHero from '@/app/components/service-location/ServiceLocationHero'
import LocalServiceIntro from '@/app/components/service-location/LocalServiceIntro'
import WhatMakesDifferent from '@/app/components/service-location/WhatMakesDifferent'
import LocalBenefits from '@/app/components/service-location/LocalBenefits'
import StreamlinedProcess from '@/app/components/service-location/StreamlinedProcess'
import ServingNeighborhoods from '@/app/components/service-location/ServingNeighborhoods'
import WhyChooseUsLocal from '@/app/components/service-location/WhyChooseUsLocal'
import ServiceLocationFAQ from '@/app/components/service-location/ServiceLocationFAQ'
import ServiceLocationCTA from '@/app/components/service-location/ServiceLocationCTA'

interface ServiceLocationPageData {
  service: string
  city: string
  state: string
  heroSubtitle: string
  heroImage?: string
  mainContent: PortableTextBlock[]
  whatMakesDifferent: PortableTextBlock[]
  benefits: Array<{ icon: string; title: string; description: string }>
  process: Array<{ title: string; description: string }>
  neighborhoods: string[]
  whyChooseUs: PortableTextBlock[]
  faq: Array<{ question: string; answer: string }>
}

export default async function ServiceLocationPage({
  params,
}: {
  params: { service: string; city: string }
}) {
  const { service, city } = params
  const slug = `${service}-${city}`

  const page = await client.fetch<ServiceLocationPageData>(
    `
      *[_type == "serviceLocationPage" && slug.current == $slug][0]{
        service,
        city,
        state,
        heroSubtitle,
        "heroImage": heroImage.asset->url,
        mainContent,
        whatMakesDifferent,
        benefits,
        process,
        neighborhoods,
        whyChooseUs,
        faq
      }
    `,
    { slug }
  )

  if (!page) return notFound()

  return (
    <>
      <ServiceLocationHero
        service={page.service}
        city={page.city}
        state={page.state}
        subtitle={page.heroSubtitle}
        backgroundImage={page.heroImage}
      />

      <LocalServiceIntro service={page.service} city={page.city} content={page.mainContent} />

      <WhatMakesDifferent service={page.service} city={page.city} content={page.whatMakesDifferent} />

      <LocalBenefits city={page.city} benefits={page.benefits} />

      <StreamlinedProcess service={page.service} city={page.city} steps={page.process} />

      <ServingNeighborhoods service={page.service} city={page.city} neighborhoods={page.neighborhoods} />

      <WhyChooseUsLocal city={page.city} content={page.whyChooseUs} />

      <ServiceLocationFAQ service={page.service} city={page.city} faqs={page.faq} />

      <ServiceLocationCTA service={page.service} city={page.city} state={page.state} />
    </>
  )
}

export async function generateStaticParams() {
  const pages = await client.fetch<Array<{ slug: string }>>(
    `*[_type == "serviceLocationPage"]{ "slug": slug.current }`
  )

  return pages.map((p) => {
    const parts = p.slug.split('-')
    // ex: "pressure-washing-college-park-md"
    const service = parts.slice(0, -3).join('-') // pressure-washing
    const city = parts.slice(-3).join('-') // college-park-md

    return { service, city }
  })
}
