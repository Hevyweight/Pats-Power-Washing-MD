// app/components/location/LocalExpertise.tsx
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

export default function LocalExpertise({
  city,
  content
}: {
  city: string
  content: PortableTextBlock[]
}) {
  return (
    <section className="section py-16 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Local Expertise in {city}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-brand-light rounded-xl p-6">
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="text-xl font-bold mb-2">Fast Response</h3>
          <p className="text-slate-600">
            Typically schedule service in {city} within 3-5 business days. 
            Same-week appointments often available.
          </p>
        </div>

        <div className="bg-brand-light rounded-xl p-6">
          <div className="text-4xl mb-3">🏘️</div>
          <h3 className="text-xl font-bold mb-2">Know the Area</h3>
          <p className="text-slate-600">
            Familiar with {city}&apos;s property types, common issues, and 
            the best cleaning methods for local conditions.
          </p>
        </div>

        <div className="bg-brand-light rounded-xl p-6">
          <div className="text-4xl mb-3">✅</div>
          <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
          <p className="text-slate-600">
            Licensed and insured to work on properties throughout {city} 
            and the surrounding area.
          </p>
        </div>

        <div className="bg-brand-light rounded-xl p-6">
          <div className="text-4xl mb-3">💯</div>
          <h3 className="text-xl font-bold mb-2">Guaranteed Results</h3>
          <p className="text-slate-600">
            100% satisfaction guarantee on all work completed in {city}. 
            If you&apos;re not happy, we make it right.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <PortableText value={content} />
      </div>
    </section>
  )
}
