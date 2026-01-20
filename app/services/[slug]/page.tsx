// app/services/[slug]/page.tsx
import { Fragment } from 'react'
import { client } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import type { PortableTextBlock } from '@portabletext/types'
import { PortableText } from '@portabletext/react'

import ServiceHero from '@/app/components/service/ServiceHero'
import BenefitsGrid from '@/app/components/service/BenefitsGrid'
import ProcessSteps from '@/app/components/service/ProcessSteps'
import BeforeAfterGallery from '@/app/components/service/BeforeAfterGallery'
import ServiceAreas from '@/app/components/service/ServiceAreas'
import FAQAccordion from '@/app/components/blog/FAQAccordion'
import InlineCTA from '@/app/components/blog/InlineCTA'

interface ServicePageData {
  title: string
  subtitle: string
  heroImage?: string
  whatIsIt: PortableTextBlock[]
  benefits: Array<{
    icon: string
    title: string
    description: string
  }>
  process: Array<{
    title: string
    description: string
  }>
  beforeAfterImages?: Array<{
    before: string
    after: string
    caption: string
  }>
  serviceAreas: Array<{
    name: string
    slug: string
  }>
  faq?: Array<{
    question: string
    answer: string
  }>
  componentOrder?: string[]
}

const componentMap = {
  benefits: (page: ServicePageData) =>
    page.benefits?.length ? <BenefitsGrid benefits={page.benefits} /> : null,
  process: (page: ServicePageData) =>
    page.process?.length ? <ProcessSteps steps={page.process} /> : null,
  gallery: (page: ServicePageData) =>
    page.beforeAfterImages?.length ? <BeforeAfterGallery images={page.beforeAfterImages} /> : null,
  areas: (page: ServicePageData) => <ServiceAreas locations={page.serviceAreas} />,
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!slug) notFound()

  const page = await client.fetch<ServicePageData>(
    `
      *[_type == "page" && pageType == "service" && slug.current == $slug][0]{
        title,
        subtitle,
        "heroImage": heroImage.asset->url,
        whatIsIt,
        benefits,
        process,
        beforeAfterImages[]{
          "before": before.asset->url,
          "after": after.asset->url,
          caption
        },
        serviceAreas,
        faq,
        componentOrder
      }
    `,
    { slug }
  )

  if (!page) notFound()

  const order = Array.isArray(page.componentOrder) && page.componentOrder.length
    ? page.componentOrder
    : ['benefits', 'process', 'gallery', 'areas']

  return (
    <>
      <ServiceHero
        title={page.title}
        subtitle={page.subtitle}
        backgroundImage={page.heroImage ?? ''}
      />

     <section className="section py-14 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
          What Is {page.title}?
        </h2>

        <div className="prose prose-lg prose-invert max-w-none leading-relaxed text-black">
          <PortableText value={page.whatIsIt} />
        </div>
      </section>

      {order.map((key) => {
        const render = componentMap[key as keyof typeof componentMap]
        if (!render) return null
        const element = render(page)
        return element ? <Fragment key={key}>{element}</Fragment> : null
      })}

      <InlineCTA />

      {page.faq?.length ? (
        <section className="section py-12 max-w-4xl">
          <FAQAccordion faqs={page.faq} />
        </section>
      ) : null}
    </>
  )
}

export async function generateStaticParams() {
  const pages = await client.fetch<Array<{ slug: string }>>(
    `*[_type == "page" && pageType == "service"]{ "slug": slug.current }`
  )

  return pages.map((page) => ({
    slug: page.slug,
  }))
}
