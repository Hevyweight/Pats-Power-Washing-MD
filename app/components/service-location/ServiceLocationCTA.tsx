// app/components/service-location/ServiceLocationCTA.tsx
import Link from "next/link"
import { FaPhone } from "react-icons/fa"

export default function ServiceLocationCTA({
  service,
  city,
  state
}: {
  service: string
  city: string
  state: string
}) {
  return (
    <section className="bg-gradient-to-r from-brand-primary-dark to-brand-secondary-dark text-white py-16">
      <div className="section max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for Professional {service} in {city}?
        </h2>
        <p className="text-xl text-slate-100 mb-8">
          Join satisfied {city} property owners. Get your free quote today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="bg-white text-brand-dark hover:opacity-90 px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center"
          >
            Get Free Quote
          </Link>

          <a
            href="tel:2409684892"
            className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
          >
            <FaPhone />
            240-968-4892
          </a>
        </div>

        <p className="text-sm text-slate-300 mt-6">
          Professional {service.toLowerCase()} services throughout {city}, {state}
        </p>
      </div>
    </section>
  )
}
