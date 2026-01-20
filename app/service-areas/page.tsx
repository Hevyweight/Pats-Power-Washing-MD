// app/areas/page.tsx
import Link from "next/link"
import Image from "next/image"
import { FaMapMarkerAlt, FaPhone, FaCheckCircle } from "react-icons/fa"

export const metadata = {
  title: "Service Areas | Pat's Power Washing - Maryland, DC & Virginia",
  description: "Professional pressure washing services throughout Maryland, Washington DC, and Northern Virginia. Find your area and get a free quote today.",
}

const serviceAreas = {
  maryland: {
    name: "Maryland",
    slug: "maryland",
    counties: [
      { name: "Montgomery County", cities: ["College Park", "Silver Spring", "Bethesda", "Rockville"] },
      { name: "Prince George's County", cities: ["Greenbelt", "Bowie", "Laurel", "Hyattsville"] },
      { name: "Howard County", cities: ["Columbia", "Ellicott City"] },
      { name: "Anne Arundel County", cities: ["Annapolis", "Glen Burnie"] },
    ]
  },
  dc: {
    name: "Washington, DC",
    slug: "washington-dc",
    neighborhoods: ["Northwest DC", "Northeast DC", "Southeast DC", "Southwest DC"]
  },
  virginia: {
    name: "Northern Virginia",
    slug: "virginia",
    counties: [
      { name: "Arlington County", cities: ["Arlington"] },
      { name: "Fairfax County", cities: ["Alexandria", "Fairfax", "Reston", "McLean"] },
      { name: "Loudoun County", cities: ["Leesburg", "Ashburn"] },
    ]
  },
  pennsylvania: {
    name: "Pennsylvania",
    slug: "pennsylvania",
    counties: [
      { name: "Philadelphia County", cities: ["Philadelphia"] },
      { name: "Delaware County", cities: ["Chester", "Media"] },
      { name: "Montgomery County", cities: ["Norristown", "King of Prussia"] },
      { name: "Bucks County", cities: ["Doylestown", "Levittown"] },
    ]
  },
  delaware: {
    name: "Delaware",
    slug: "delaware",
    counties: [
      { name: "New Castle County", cities: ["Wilmington", "Newark"] },
      { name: "Kent County", cities: ["Dover"] },
      { name: "Sussex County", cities: ["Rehoboth Beach", "Lewes"] },
    ]
  }
}

const featuredCities = [
  {
    name: "College Park, MD",
    slug: "college-park-md",
    image: "/images/areas/college_park.webp",
    description: "Home to UMD, we serve students, families, and businesses throughout College Park.",
    highlights: ["University Area", "Berwyn", "Lakeland", "Hollywood"]
  },
  {
    name: "Silver Spring, MD",
    slug: "silver-spring-md",
    image: "/images/areas/silver_spring.webp",
    description: "From downtown to the suburbs, keeping Silver Spring homes and businesses spotless.",
    highlights: ["Downtown", "Four Corners", "Woodside", "East Silver Spring"]
  },
  {
    name: "Greenbelt, MD",
    slug: "greenbelt-md",
    image: "/images/areas/greenbelt.webp",
    description: "Serving historic Greenbelt and surrounding communities with professional care.",
    highlights: ["Old Greenbelt", "Greenbelt East", "Greenbelt West"]
  },
  {
    name: "Bowie, MD",
    slug: "bowie-md",
    image: "/images/areas/bowie.webp",
    description: "Maryland's largest city gets top-tier pressure washing service.",
    highlights: ["Belair", "Whitehall", "Collington", "Fairwood"]
  },
  {
    name: "Laurel, MD",
    slug: "laurel-md",
    image: "/images/areas/laurel.webp",
    description: "Between Baltimore and DC, Laurel properties shine with our service.",
    highlights: ["West Laurel", "North Laurel", "South Laurel"]
  },
  {
    name: "Washington, DC",
    slug: "washington-dc",
    image: "/images/areas/washington_dc.webp",
    description: "The nation's capital deserves pristine properties — we deliver.",
    highlights: ["All Quadrants", "Residential", "Commercial"]
  },
  {
    name: "Arlington, VA",
    slug: "arlington-va",
    image: "/images/areas/arlington.webp",
    description: "Northern Virginia's urban center gets professional pressure washing.",
    highlights: ["Ballston", "Clarendon", "Rosslyn", "Crystal City"]
  },
  {
    name: "Alexandria, VA",
    slug: "alexandria-va",
    image: "/images/areas/alexandria.webp",
    description: "Historic homes and modern properties all benefit from expert cleaning.",
    highlights: ["Old Town", "Del Ray", "West End"]
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-b from-brand-dark to-brand-primary-dark text-white py-20">
        <div className="section max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
            <FaMapMarkerAlt />
            <span>Serving the DMV Area</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professional Pressure Washing<br />Throughout Maryland, DC & Virginia
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
            From College Park to Alexandria, we bring professional pressure washing services 
            to your neighborhood. Fast response, reliable service, guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-brand-secondary-dark hover:opacity-90 px-8 py-4 rounded-xl font-semibold text-lg"
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="section py-12 border-b">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-brand-primary-dark mb-2">8+</div>
            <div className="text-slate-600">Cities Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-primary-dark mb-2">3</div>
            <div className="text-slate-600">States Covered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-primary-dark mb-2">500+</div>
            <div className="text-slate-600">Properties Cleaned</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-primary-dark mb-2">24hr</div>
            <div className="text-slate-600">Quote Response</div>
          </div>
        </div>
      </section>

      {/* Featured Cities Grid */}
      <section className="section py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Service Areas</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Click any area to see specific services, pricing, and local information
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCities.map((city) => (
            <Link
              key={city.slug}
              href={`/areas/${city.slug}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-slate-200">
                {/* Replace with real images */}
                <div className="absolute inset-0 bg-linear-to-br from-brand-primary to-brand-secondary opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={city.image}
                    alt={city.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary-dark transition">
                  {city.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {city.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {city.highlights.slice(0, 3).map((area) => (
                    <span
                      key={area}
                      className="text-xs bg-brand-light text-brand-dark px-2 py-1 rounded"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-brand-primary-dark font-semibold text-sm flex items-center gap-2">
                  View Service Area
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Full Coverage Map */}
      <section className="bg-slate-50 py-16">
        <div className="section">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Coverage Area</h2>
            <p className="text-xl text-slate-600">
              We proudly serve all of these areas and their surrounding communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Maryland */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-primary-dark text-white rounded-lg flex items-center justify-center font-bold text-xl">
                  MD
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Maryland</h3>
                  <Link href="/areas/maryland" className="text-brand-primary-dark text-sm hover:underline">
                    View Maryland →
                  </Link>
                </div>
              </div>
              
              {serviceAreas.maryland.counties.map((county) => (
                <div key={county.name} className="mb-6">
                  <h4 className="font-semibold text-slate-700 mb-2">{county.name}</h4>
                  <ul className="space-y-2">
                    {county.cities.map((city) => (
                      <li key={city} className="flex items-start gap-2 text-sm text-slate-600">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{city}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* DC */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-primary-dark text-white rounded-lg flex items-center justify-center font-bold text-xl">
                  DC
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Washington, DC</h3>
                  <Link href="/areas/washington-dc" className="text-brand-primary-dark text-sm hover:underline">
                    View DC →
                  </Link>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-slate-700 mb-2">All Quadrants</h4>
                <ul className="space-y-2">
                  {serviceAreas.dc.neighborhoods.map((area) => (
                    <li key={area} className="flex items-start gap-2 text-sm text-slate-600">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-light rounded-lg p-4 text-sm">
                <p className="text-slate-700">
                  Serving residential and commercial properties throughout the District
                </p>
              </div>
            </div>

            {/* Virginia */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-primary-dark text-white rounded-lg flex items-center justify-center font-bold text-xl">
                  VA
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Northern Virginia</h3>
                  <Link href="/areas/virginia" className="text-brand-primary-dark text-sm hover:underline">
                    View Virginia →
                  </Link>
                </div>
              </div>
              
              {serviceAreas.virginia.counties.map((county) => (
                <div key={county.name} className="mb-6">
                  <h4 className="font-semibold text-slate-700 mb-2">{county.name}</h4>
                  <ul className="space-y-2">
                    {county.cities.map((city) => (
                      <li key={city} className="flex items-start gap-2 text-sm text-slate-600">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{city}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Pennsylvania */}
            <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-primary-dark text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    PA
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Pennsylvania</h3>
                    <Link href="/areas/pennsylvania" className="text-brand-primary-dark text-sm hover:underline">
                    View Pennsylvania →
                    </Link>
                </div>
                </div>
                
                {serviceAreas.pennsylvania.counties.map((county) => (
                <div key={county.name} className="mb-6">
                    <h4 className="font-semibold text-slate-700 mb-2">{county.name}</h4>
                    <ul className="space-y-2">
                    {county.cities.map((city) => (
                        <li key={city} className="flex items-start gap-2 text-sm text-slate-600">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{city}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>

            {/* Delaware */}
            <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-primary-dark text-white rounded-lg flex items-center justify-center font-bold text-xl">
                    DE
                </div>
                <div>
                    <h3 className="text-2xl font-bold">Delaware</h3>
                    <Link href="/areas/delaware" className="text-brand-primary-dark text-sm hover:underline">
                    View Delaware →
                    </Link>
                </div>
                </div>
                
                {serviceAreas.delaware.counties.map((county) => (
                <div key={county.name} className="mb-6">
                    <h4 className="font-semibold text-slate-700 mb-2">{county.name}</h4>
                    <ul className="space-y-2">
                    {county.cities.map((city) => (
                        <li key={city} className="flex items-start gap-2 text-sm text-slate-600">
                        <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{city}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Cover the DMV */}
      <section className="section py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why We Serve the Entire DMV Area
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="w-12 h-12 bg-brand-secondary-dark/10 text-brand-secondary-dark rounded-lg flex items-center justify-center text-2xl mb-4">
                🌦️
              </div>
              <h3 className="text-xl font-bold mb-3">We Know the Climate</h3>
              <p className="text-slate-600">
                The DMV&#39;s humid subtropical climate creates unique challenges. High humidity, 
                seasonal pollen, and temperature swings mean mold, mildew, and grime build up 
                faster here than in drier regions. We&#39;ve adapted our techniques specifically 
                for these conditions.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="w-12 h-12 bg-brand-secondary-dark/10 text-brand-secondary-dark rounded-lg flex items-center justify-center text-2xl mb-4">
                🏘️
              </div>
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="text-slate-600">
                From historic row homes in DC to modern developments in Fairfax, each area 
                has different architectural styles and cleaning needs. Our team understands 
                the specific requirements of properties throughout the region.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="w-12 h-12 bg-brand-secondary-dark/10 text-brand-secondary-dark rounded-lg flex items-center justify-center text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Response Times</h3>
              <p className="text-slate-600">
                Centrally located to serve the entire DMV, we can typically schedule service 
                within 3-5 business days. Emergency and same-week appointments available for 
                urgent situations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="w-12 h-12 bg-brand-secondary-dark/10 text-brand-secondary-dark rounded-lg flex items-center justify-center text-2xl mb-4">
                ✅
              </div>
              <h3 className="text-xl font-bold mb-3">Consistent Quality</h3>
              <p className="text-slate-600">
                Whether you&#39;re in College Park or Alexandria, you get the same professional 
                service, modern equipment, eco-friendly products, and satisfaction guarantee. 
                No corners cut, no matter the location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-primary-dark to-brand-secondary-dark text-white py-16">
        <div className="section max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-100 mb-8">
            Get a free quote for your area in under 60 seconds. No obligations, no pressure.
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
              Call: 240-968-4892
            </a>
          </div>

          <p className="text-sm text-slate-300 mt-6">
            Serving Maryland • Washington, DC • Northern Virginia
          </p>
        </div>
      </section>

      {/* Don't See Your Area? */}
      <section className="section py-12 text-center">
        <div className="max-w-2xl mx-auto bg-slate-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Don&#39;t See Your Area Listed?</h3>
          <p className="text-slate-600 mb-6">
            We&#39;re constantly expanding our service area. If you&#39;re near the DMV region, 
            there&#39;s a good chance we can help. Give us a call or request a quote to find out.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-brand-primary-dark text-white hover:opacity-90 px-6 py-3 rounded-xl font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
