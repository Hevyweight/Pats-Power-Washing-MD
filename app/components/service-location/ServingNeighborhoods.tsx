// app/components/service-location/ServingNeighborhoods.tsx
import { FaMapMarkerAlt } from "react-icons/fa"

export default function ServingNeighborhoods({
  service,
  city,
  neighborhoods
}: {
  service: string
  city: string
  neighborhoods: string[]
}) {
  return (
    <section className="section py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {service} Throughout {city}
        </h2>
        <p className="text-center text-slate-600 mb-8">
          We provide professional {service.toLowerCase()} services in all {city} neighborhoods
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {neighborhoods.map((neighborhood) => (
            <div
              key={neighborhood}
              className="bg-slate-50 rounded-lg p-3 text-center text-sm hover:bg-brand-light transition"
            >
              <FaMapMarkerAlt className="text-brand-primary-dark mx-auto mb-1" />
              <div className="font-medium text-slate-700">{neighborhood}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}