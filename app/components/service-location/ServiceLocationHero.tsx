// app/components/service-location/ServiceLocationHero.tsx
import Link from "next/link"

export default function ServiceLocationHero({
  service,
  city,
  state,
  subtitle,
  backgroundImage
}: {
  service: string
  city: string
  state: string
  subtitle: string
  backgroundImage?: string
}) {
  return (
    <section 
      className="relative bg-brand-dark text-white py-16"
      style={{
        backgroundImage: backgroundImage 
          ? `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${backgroundImage})`
          : 'linear-gradient(135deg, #005A8C 0%, #006B85 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="section max-w-4xl">
        {/* Breadcrumbs */}
        <div className="text-sm text-slate-300 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          {' / '}
          <Link href="/services" className="hover:text-white">Services</Link>
          {' / '}
          <Link href={`/areas/${city.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white">{city}</Link>
          {' / '}
          <span className="text-slate-400">{service}</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {service} in {city}, {state}
        </h1>
        <p className="text-xl text-slate-200 mb-8 max-w-2xl">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact"
            className="bg-brand-secondary-dark px-8 py-3 rounded-xl font-semibold hover:opacity-90 text-center"
          >
            Get Free Quote
          </Link>

          <a
            href="tel:2409684892"
            className="bg-white/10 border border-white/30 px-8 py-3 rounded-xl font-semibold hover:bg-white/20 text-center"
          >
            Call: 240-968-4892
          </a>
        </div>
      </div>
    </section>
  )
}
