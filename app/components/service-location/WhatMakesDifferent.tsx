// app/components/service-location/WhatMakesDifferent.tsx
import { PortableText, PortableTextBlock } from '@portabletext/react'

export default function WhatMakesDifferent({
  service,
  city,
  content
}: {
  service: string
  city: string
  content: PortableTextBlock[]
}) {
  return (
    <section className="bg-slate-50 py-12">
      <div className="section max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">
          What Makes {service} in {city} Different
        </h2>
        <div className="prose prose-lg max-w-none">
          <PortableText value={content} />
        </div>
      </div>
    </section>
  )
}