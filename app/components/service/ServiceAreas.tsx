// components/service/ServiceAreas.tsx
import Link from "next/link"

export default function ServiceAreas({
  locations
}: {
  locations: Array<{ name: string; slug: string }>
}) {
  return (
    <section className="bg-brand-light py-16">
      <div className="section max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Serving Your Area
        </h2>
        <p className="text-center text-slate-600 mb-8">
          We proudly provide house washing services throughout:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/service-areas/${loc.slug}`}
              className="bg-white hover:bg-brand-soft hover:text-brand-dark transition rounded-lg p-4 text-center font-medium shadow-sm"
            >
              {loc.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}