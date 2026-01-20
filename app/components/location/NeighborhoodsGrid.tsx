// app/components/location/NeighborhoodsGrid.tsx
import { FaMapMarkerAlt } from "react-icons/fa"

export default function NeighborhoodsGrid({
  city,
  neighborhoods
}: {
  city: string
  neighborhoods: string[]
}) {
  return (
    <section className="section py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Neighborhoods We Serve in {city}
      </h2>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
        Whether you&#39;re in {neighborhoods[0]}, {neighborhoods[1]}, or anywhere in {city}, 
        we provide the same professional service and satisfaction guarantee.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {neighborhoods.map((neighborhood) => (
          <div
            key={neighborhood}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 text-center"
          >
            <FaMapMarkerAlt className="text-brand-primary-dark mx-auto mb-2 text-xl" />
            <div className="font-medium text-slate-700">{neighborhood}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-slate-600 mb-4">
          Don&#39;t see your neighborhood? We likely serve it!
        </p>

        <a
          href="/contact"
          className="inline-block text-brand-primary-dark font-semibold hover:underline"
        >
          Contact us to confirm →
        </a>
      </div>
    </section>
  )
}
