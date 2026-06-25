import Link from "next/link";

const sections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "House Washing", href: "/services/house-washing" },
      { label: "Driveway Cleaning", href: "/services/driveway-cleaning" },
      { label: "Roof Cleaning", href: "/services/roof-cleaning" },
      { label: "Deck & Fence Cleaning", href: "/services/deck-fence-cleaning" },
      { label: "Pressure Washing", href: "/services/pressure-washing" },
      { label: "Commercial Pressure Washing", href: "/services/commercial-pressure-washing" },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { label: "College Park, MD", href: "/service-areas/college-park-md" },
      { label: "Silver Spring, MD", href: "/service-areas/silver-spring-md" },
      { label: "Greenbelt, MD", href: "/service-areas/greenbelt-md" },
      { label: "Bowie, MD", href: "/service-areas/bowie-md" },
      { label: "Laurel, MD", href: "/service-areas/laurel-md" },
      { label: "Washington DC", href: "/service-areas/washington-dc" },
      { label: "Arlington, VA", href: "/service-areas/arlington-va" },
      { label: "Alexandria, VA", href: "/service-areas/alexandria-va" },
    ],
  },
  {
    title: "Blog",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "How Often Should You Pressure Wash Your House?", href: "/blog/how-often-should-you-pressure-wash-your-house" },
      { label: "Best Time to Pressure Wash", href: "/blog/best-time-pressure-wash" },
      { label: "Does Pressure Washing Damage Paint?", href: "/blog/does-pressure-wash-damage-paint" },
      { label: "Power Washing vs Pressure Washing", href: "/blog/power-washing-vs-pressure-washing" },
      { label: "How to Power Wash", href: "/blog/how-to-power-wash" },
      { label: "Pressure Washer Rental Guide", href: "/blog/pressure-washer-rental" },
    ],
  },
];

export default function Sitemap() {
  return (
    <div className="bg-black min-h-screen pt-40 pb-20">
      <div className="section">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-brand-primary" />
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Navigation</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-16">
          Site<span className="text-brand-primary">map</span>
        </h1>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4 pb-2 border-b border-white/10">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-brand-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}