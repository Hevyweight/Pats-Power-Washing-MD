// app/components/location/WhyLocalNeedsCleaning.tsx
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

export default function WhyLocalNeedsCleaning({
  city,
  content
}: {
  city: string
  content: PortableTextBlock[]
}) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="section max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why {city} Properties Need Regular Cleaning
        </h2>
        <div className="prose prose-lg max-w-none">
          <PortableText value={content} />
        </div>
      </div>
    </section>
  )
}
