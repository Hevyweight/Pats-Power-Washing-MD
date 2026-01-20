// app/components/location/LocationHero.tsx
import Link from "next/link"

export default function LocationHero({
  city,
  state,
  subtitle,
  backgroundImage
}: {
  city: string
  state: string
  subtitle: string
  backgroundImage?: string
}) {
  return (
    <section 
      className="relative bg-brand-dark text-white py-20"
      style={{
        backgroundImage: backgroundImage 
          ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundImage})`
          : 'linear-gradient(135deg, #005A8C 0%, #006B85 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="section max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
          📍 Serving {city}, {state}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Professional Pressure Washing in {city}, {state}
        </h1>
        <p className="text-xl text-slate-200 mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="bg-brand-secondary-dark px-8 py-3 rounded-xl font-semibold hover:opacity-90"
          >
            Get Free Quote
          </Link>
          
          <a
            href="tel:2409684892"
            className="bg-white/10 border border-white/30 px-8 py-3 rounded-xl font-semibold hover:bg-white/20"
          >
            Call: 240-968-4892
          </a>
        </div>
      </div>
    </section>
  )
}
