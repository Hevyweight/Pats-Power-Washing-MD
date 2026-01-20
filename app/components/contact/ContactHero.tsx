// components/contact/ContactHero.tsx

export default function ContactHero() {
  return (
    <section
      className="relative bg-linear-to-b from-brand-dark to-brand-primary-dark text-white py-20 overflow-hidden"
    >
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg mb-6">
            Contact Us
          </h1>

          <p className="text-lg md:text-xl text-slate-200 drop-shadow max-w-2xl">
            Get your free quote today. Pat&apos;s Power Washing proudly serves
            College Park and the entire DMV area with fast, professional exterior
            cleaning services. Reach out and we’ll get back to you shortly.
          </p>

        </div>
      </div>
    </section>
  );
}
