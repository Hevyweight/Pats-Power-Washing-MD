// app/components/location/ServicesListGrid.tsx
import Link from "next/link"
import { FaHome, FaCar, FaBuilding, FaTree, FaSun } from "react-icons/fa"

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'house-washing': FaHome,
  'driveway-cleaning': FaCar,
  'roof-cleaning': FaSun,
  'deck-cleaning': FaTree,
  'commercial': FaBuilding,
}

export default function ServicesListGrid({
  services,
  city
}: {
  services: Array<{
    name: string
    slug: string
    description: string
  }>
  city: string
}) {
  return (
    <section className="section py-16">
      <h2 className="text-3xl font-bold text-center mb-4">
        Services We Offer in {city}
      </h2>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
        Professional pressure washing solutions for every property type in {city}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = serviceIcons[service.slug] || FaHome
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center text-brand-primary-dark">
                  <Icon className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary-dark transition">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">
                    {service.description}
                  </p>
                  <span className="text-brand-primary-dark text-sm font-semibold">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
