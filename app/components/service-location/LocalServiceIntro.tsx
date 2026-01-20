// app/components/service-location/LocalServiceIntro.tsx
import { PortableText, PortableTextBlock } from '@portabletext/react'

export default function LocalServiceIntro({
  service,
  city,
  content
}: {
  service: string
  city: string
  content: PortableTextBlock[]
}) {
  return (
    <section className="section py-12 max-w-4xl">
      <div className="prose prose-lg max-w-none">
        <PortableText value={content} />
      </div>
    </section>
  )
}