import Image from "next/image";
import Link from "next/link";
import { HouseLine, RoadHorizon, SolarRoof, Waves, Building } from "@phosphor-icons/react/dist/ssr";
import { BASE_URL } from '@/lib/constants'


export const metadata = {
  title: "Services | Pat's Power Washing",
  description: "Explore our range of power washing services for homes and businesses in the DMV area.",
  alternates: {
    canonical: `${BASE_URL}/services`,
  }, 
};

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
    name: "Commercial Pressure Washing",
    slug: "commercial-pressure-washing",
    description: "Fleet washing, storefronts, parking lots, and large-scale commercial properties.",
    icon: <Building size={64} color="#5DBBFA" weight="light" />,
  },
];

const stats = [
  { value: "500+", label: "Jobs Completed" },
  { value: "5★", label: "Average Rating" },
  { value: "10+", label: "Years Experience" },
  { value: "DMV", label: "MD, DC & VA" },
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

      {/* Intro */}
      <section className="bg-black py-20">
        <div className="section">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
              Every property is different and we get that. Pat&apos;s Power Washing has 
              cleaned everything from suburban driveways to commercial storefronts across 
              the DMV, and that range of experience means we know how to handle whatever 
              your property throws at us. 
              <br /><br />
              No cookie-cutter approach, just the right method 
              for the job every time.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-black pb-20">
        <div className="px-4 md:px-8 lg:px-16">
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-4 md:ml-64">
            <div className="w-10 h-px bg-brand-primary" />
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Choose a Service</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 md:ml-64">
            What Can We <span className="text-brand-primary">Clean For You?</span>
          </h2>

          {/* Background container panel */}
          <div className="bg-[#1C1C1C] rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="relative bg-[#272727] rounded-2xl p-8 flex flex-col items-center justify-center text-center group border border-white/5 h-[320]"
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
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-[#1C1C1C] py-16">
        <div className="section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-2">{stat.value}</p>
                <p className="text-white/60 text-sm uppercase tracking-widest font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Pull Quote */}
      <section className="bg-black py-20">
        <div className="section">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed mb-6">
              &ldquo;Pat did an incredible job on our driveway and house. It looks brand new I couldn&apos;t believe the difference. Highly recommend.&rdquo;
            </p>
            <p className="text-brand-primary font-semibold uppercase tracking-widest text-sm">— Verified Google Review</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-20">
        <div className="section text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready for a Cleaner Property?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation estimate. We serve all of Maryland, DC, and Northern Virginia.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-4xl font-bold bg-white text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200"
          >
            Get A Free Quote
          </Link>
        </div>
      </section>

    </div>
  );
}