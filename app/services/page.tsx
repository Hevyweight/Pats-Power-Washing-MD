import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "House Washing",
    slug: "house-washing",
    description: "Soft wash treatments that remove dirt, mold, and algae without damaging your siding.",
    image: "/images/v-2/house-washing.jpg",
  },
  {
    name: "Driveway Cleaning",
    slug: "driveway-cleaning",
    description: "High-pressure cleaning that blasts away oil stains, tire marks, and years of buildup.",
    image: "/images/v-2/driveway-cleaning.jpg",
  },
  {
    name: "Roof Cleaning",
    slug: "roof-cleaning",
    description: "Safe low-pressure soft washing that eliminates black streaks, moss, and lichen.",
    image: "/images/v-2/roof-cleaning.jpg",
  },
  {
    name: "Deck & Fence Cleaning",
    slug: "deck-fence-cleaning",
    description: "Restore weathered wood and vinyl to like-new condition before staining or sealing.",
    image: "/images/v-2/deck-fence-cleaning.jpg",
  },
  {
    name: "Pressure Washing",
    slug: "pressure-washing",
    description: "Versatile high-pressure cleaning for patios, sidewalks, retaining walls, and more.",
    image: "/images/v-2/pressure-washing.jpg",
  },
  {
    name: "Commercial Services",
    slug: "commercial-services",
    description: "Fleet washing, storefronts, parking lots, and large-scale commercial properties.",
    image: "/images/v-2/commercial-services.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black">

      {/* Hero */}
      <section className="relative h-[80vh] flex flex-col overflow-hidden pt-20">
        <Image
          src="/images/v-2/services_hero.jpg"
          alt="Pat's Power Washing Services"
          fill
          className="object-cover object-bottom"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
            Our Services
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            Professional <span className="text-brand-primary">Exterior Cleaning</span>
          </h2>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-black py-20">
        <div className="section">

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-brand-primary" />
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">What We Do</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
            Choose Your <span className="text-brand-primary">Service</span>
          </h2>

          <div className="bg-[#1C1C1C] rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="relative rounded-3xl overflow-hidden h-[400px] w-full flex flex-col justify-end group"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-300" />
                  <div className="relative z-10 p-6">
                    <h3 className="text-2xl font-extrabold text-white mb-2 [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
                      {service.name}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-brand-primary font-semibold text-sm uppercase tracking-wider">
                      Learn More
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}