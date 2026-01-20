// components/service/ServiceHero.tsx

import Link from "next/link";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function ServiceHero({
  title,
  subtitle,
  backgroundImage
}: {
  title: string;
  subtitle: string;
  backgroundImage: string;
}) {
  return (
   <section
      className="
        relative 
        bg-linear-to-b 
        from-brand-dark 
        to-brand-primary-dark 
        text-white 
        py-14 md:py-20 
        overflow-hidden
      "
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="section relative z-10 text-center" />

      <div className="section relative z-10 max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 mb-6">
          <FaMapMarkerAlt className="text-brand-secondary-dark" />
          <span className="uppercase tracking-[0.15em] font-semibold">
            Serving the DMV Area
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-slate-200 max-w-3xl mx-auto drop-shadow mb-8">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-brand-secondary-dark hover:opacity-90 px-8 py-4 rounded-xl font-semibold text-lg text-center"
          >
            Get Free Quote
          </Link>

          <a
            href="tel:2409684892"
            className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
          >
            <FaPhone /> 240-968-4892
          </a>
        </div>
      </div>
    </section>
  );
}
