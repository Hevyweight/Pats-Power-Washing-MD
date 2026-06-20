// app/components/location/ServicesGrid.tsx
'use client'

import Link from 'next/link'
import { HouseLine, RoadHorizon, SolarRoof, Waves, Building } from '@phosphor-icons/react/dist/ssr'

const services = [
  {
    name: "House Washing",
    slug: "house-washing",
    description: "Soft wash treatments that remove dirt, mold, and algae without damaging your siding.",
    icon: <HouseLine size={64} color="#5DBBFA" weight="light" />,
  },
  {
    name: "Driveway Cleaning",
    slug: "driveway-cleaning",
    description: "High-pressure cleaning that blasts away oil stains, tire marks, and years of buildup.",
    icon: <RoadHorizon size={64} color="#5DBBFA" weight="light" />,
  },
  {
    name: "Roof Cleaning",
    slug: "roof-cleaning",
    description: "Safe low-pressure soft washing that eliminates black streaks, moss, and lichen.",
    icon: <SolarRoof size={64} color="#5DBBFA" weight="light" />,
  },
  {
    name: "Deck & Fence Cleaning",
    slug: "deck-fence-cleaning",
    description: "Restore weathered wood and vinyl to like-new condition before staining or sealing.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 28h56" stroke="#5DBBFA" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M4 40h56" stroke="#5DBBFA" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 16v36" stroke="#5DBBFA" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 16v36" stroke="#5DBBFA" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M36 16v36" stroke="#5DBBFA" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M48 16v36" stroke="#5DBBFA" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 16l6-8 6 8" stroke="#5DBBFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 16l6-8 6 8" stroke="#5DBBFA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Pressure Washing",
    slug: "pressure-washing",
    description: "Versatile high-pressure cleaning for patios, sidewalks, retaining walls, and more.",
    icon: <Waves size={64} color="#5DBBFA" weight="light" />,
  },
  {
    name: "Commercial Services",
    slug: "commercial-services",
    description: "Fleet washing, storefronts, parking lots, and large-scale commercial properties.",
    icon: <Building size={64} color="#5DBBFA" weight="light" />,
  },
]

export default function ServicesGrid({ city }: { city: string }) {
  return (
    <section className="bg-black py-20">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="flex items-center gap-3 mb-4 md:ml-64">
          <div className="w-10 h-px bg-brand-primary" />
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">What We Offer</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 md:ml-64">
          Our Services in <span className="text-brand-primary">{city}</span>
        </h2>
        <div className="bg-[#1C1C1C] rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="relative bg-[#272727] rounded-2xl p-8 flex flex-col items-center justify-center text-center group border border-white/5 h-[280px]"
              >
                <div className="absolute top-4 right-4 w-8 h-8 rounded-md bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-300">
                  <svg className="w-4 h-4 text-brand-primary group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                {service.icon}
                <div className="mt-6">
                  <h3 className="text-xl font-extrabold text-white mb-2">{service.name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button outside the dark panel */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-3xl 
                       font-bold bg-white text-brand-primary hover:bg-brand-primary 
                       hover:text-white transition-all duration-200"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}