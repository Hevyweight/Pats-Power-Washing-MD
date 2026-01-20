// app/components/service-location/WhyChooseUsLocal.tsx
import { PortableText, PortableTextBlock } from '@portabletext/react'

export default function WhyChooseUsLocal({
  city,
  content
}: {
  city: string
  content: PortableTextBlock[]
}) {
  return (
    <section className="section py-16 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8">
        Why Choose Us in {city}
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-brand-light rounded-xl p-6">
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="text-xl font-bold mb-2">Fast Response</h3>
          <p className="text-slate-600">
            Quick turnaround for {city} properties. Typically 3-5 business days.
          </p>
        </div>

        <div className="bg-brand-light rounded-xl p-6">
          <div className="text-4xl mb-3">🏆</div>
          <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
          <p className="text-slate-600">
            Deep knowledge of {city} property types and local conditions.
          </p>
        </div>

        <div className="bg-brand-light rounded-xl p-6">
          <div className="text-4xl mb-3">✅</div>
          <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
          <p className="text-slate-600">
            Licensed and insured to work on all {city} properties.
          </p>
        </div>

        <div className="bg-brand-light rounded-xl p-6">
          <div className="text-4xl mb-3">💯</div>
          <h3 className="text-xl font-bold mb-2">100% Guarantee</h3>
          <p className="text-slate-600">
            Complete satisfaction guaranteed on all {city} jobs.
          </p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <PortableText value={content} />
      </div>
    </section>
  )
}