import Link from "next/link";
import Image from "next/image";
import { BASE_URL } from "@/lib/constants";

export const metadata = {
  title: "Service Areas | Pat's Power Washing - Maryland, DC & Virginia",
  description: "Professional pressure washing services throughout Maryland, Washington DC, and Northern Virginia. Find your area and get a free quote today.",
  alternates: {
    canonical: `${BASE_URL}/service-areas`,
  }, 
};

const featuredCities = [
  {
    name: "College Park, MD",
    slug: "college-park-md",
    image: "/images/areas/college-park-md.jpg",
  },
  {
    name: "Silver Spring, MD",
    slug: "silver-spring-md",
    image: "/images/areas/silver-spring-md.jpg",
  },
  {
    name: "Greenbelt, MD",
    slug: "greenbelt-md",
    image: "/images/areas/greenbelt-md.jpg",
  },
  {
    name: "Bowie, MD",
    slug: "bowie-md",
    image: "/images/areas/bowie-md.jpg",
  },
  {
    name: "Laurel, MD",
    slug: "laurel-md",
    image: "/images/areas/laurel-md.jpg",
  },
  {
    name: "Washington, DC",
    slug: "washington-dc",
    image: "/images/areas/washington-dc.jpg",
  },
  {
    name: "Arlington, VA",
    slug: "arlington-va",
    image: "/images/areas/arlington-va.jpg",
  },
  {
    name: "Alexandria, VA",
    slug: "alexandria-va",
    image: "/images/areas/alexandria-va.jpg",
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="bg-black">

      {/* Hero */}
      <section className="relative h-[80vh] flex flex-col overflow-hidden pt-20">
        <Image
          src="/images/v-2/serviceAreas_hero.jpg"
          alt="Pat's Power Washing Service Areas"
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
            Service Areas
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            Serving <span className="text-brand-primary">Maryland, DC & Virginia</span>
          </h2>
        </div>
      </section>

      {/* Cards section */}
      <section className="bg-black py-20">
        <div className="px-4 md:px-8 lg:px-16">

          {/* Header */}
          <div className="flex items-center gap-3 mb-4 md:ml-64">
            <div className="w-10 h-px bg-brand-primary" />
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Where We Work</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 md:ml-64">
            Find Your <span className="text-brand-primary">Area</span>
          </h2>

          {/* Background container panel */}
          <div className="bg-[#1C1C1C] rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center h-250">
              {featuredCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/service-areas/${city.slug}`}
                  className="relative rounded-3xl overflow-hidden h-[500] w-full flex flex-col justify-center items-center group"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${city.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
                  <div className="relative z-10 p-6 text-center">
                    <h3 className="text-3xl font-extrabold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
                      {city.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-brand-primary text-6xl font-extrabold mb-4 mx-auto">
              Professional & Reliable
            </h2>
            <p className="text-brand-primary text-xl mb-8 max-w-xl mx-auto">
              We are available to chat via our website contact form, email or by phone! Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-xl font-bold bg-white text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200"
              >
                Get A Free Quote
              </Link>
              <a
                href="tel:12409684892"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-brand-primary transition-all duration-200"
              >
                Call 240-968-4892
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}