import Link from "next/link";

const SERVICES = [
  { title: "Roof Washing", image: "/images/v-2/roof_wash.jpg", href: "/services/roof-cleaning" },
  { title: "Power Washing", image:   "/images/v-2/power_wash.jpg", href: "/services/pressure-washing" },
  { title: "Soft Washing", image:    "/images/v-2/soft_wash.jpg", href: "/services/house-washing" },
];

export default function ServicesGrid() {
  return (
    <section className="bg-black">
      <div className="section py-24 ">

        {/* Header row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-10 px-4 md:px-0">
          <div className="md:text-left">

            {/* Eyebrow */}
            <div className="flex items-center gap-1 mb-3">
              <div className="w-20 h-px bg-brand-primary" />
              <p className="text-lg font-semibold uppercase tracking-widest text-white italic">
                Our Services
              </p>
            </div>
            
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight juistify-center">
              Power Washing &amp; <br />
              Soft Washing <span className="text-brand-primary">Services</span>
            </h2>
          </div>

          {/* CTA */}
          <Link
            href="/quote"
            className="rounded-lg  px-8 py-3 self-center md:self-start text-2xl font-bold whitespace-nowrap transition-all duration-200 bg-white text-brand-primary hover:bg-brand-primary hover:text-brand-gray"
          >
            GET ESTIMATE
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="relative rounded-3xl overflow-hidden h-[640px] flex flex-col justify-center items-center group"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${s.image})` }}
              />

              {/* Gradient overlay — always visible, deepens on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />

              {/* Title */}
              <div className="relative z-10 p-6 text-center">
                <h3 className="text-3xl font-extrabold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
                  {s.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="text-brand-primary hover:text-brand-secondary font-semibold transition-colors underline"
          >
            View all services →
          </Link>
        </div>

      </div>
    </section>
  );
}