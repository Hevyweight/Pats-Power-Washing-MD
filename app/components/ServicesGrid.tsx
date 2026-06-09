import Link from "next/link";

const SERVICES = [
  { title: "House Soft Wash", blurb: "Gentle soft washing that safely removes dirt, mold, and mildew.", image: "/images/Pressure_Washing.jpg" },
  { title: "Driveways & Sidewalks", blurb: "Deep clean oil, tire marks, and buildup for a spotless entrance.", image: "/images/services/driveway.jpg" },
  { title: "Patios, Porches & Decks", blurb: "Make outdoor spaces clean, safe, and ready to enjoy.", image: "/images/services/patio.jpg" },
  { title: "Fence Cleaning", blurb: "Restore brightness and protect surfaces from premature wear.", image: "/images/services/fence.jpg" },
  { title: "Roof Soft Washing", blurb: "Low-pressure clean to remove algae and streaks without damage.", image: "/images/services/roof.jpg" },
  { title: "Storefronts & Entryways", blurb: "Light commercial cleaning for a great first impression.", image: "/images/services/storefront.jpg" },
];

export default function ServicesGrid() {
  return (
    <section className="bg-brand-light/60">
      <div className="section py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Services</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="relative rounded-3xl overflow-hidden min-h-[600px] flex flex-col justify-end group"
              style={{
                backgroundImage: `url(${s.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay - hover only */}
              <div className="absolute inset-0 bg-black/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Title - always visible */}
                <h3 className="font-bold text-white text-lg drop-shadow-lg">{s.title}</h3>
                {/* Blurb - slides up on hover */}
                <p className="mt-1 text-white/80 text-sm translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{s.blurb}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/services" className="inline-block underline text-brand-dark hover:text-brand-primary-dark transition">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}