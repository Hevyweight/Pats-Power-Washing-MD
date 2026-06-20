import Link from "next/link";
import Image from "next/image";

export default function Aboutus() {
  return (
    <section className="bg-black overflow-hidden py-8">
      <div className="flex flex-col md:flex-row items-stretch min-h-[800px]">

        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[500px] shrink-0">
          <Image
            src="/images/v-2/about.jpg"
            alt="Pat power washing a client's property"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            className="object-cover object-center rounded-r-4xl"
          />
        </div>

        {/* Right: Copy */}
        <div className="flex-1 flex items-center py-12 md:-ml-24 md:my-12 z-10">
          <div className="bg-brand-gray rounded-l-3xl p-8 md:p-12 shadow-2xl min-h-[700px] flex flex-col justify-center">

            {/* Eyebrow */}
            <div className="flex items-center gap-1 mb-4">
              <div className="w-20 h-px bg-brand-primary" />
              <p className="text-lg font-semibold uppercase tracking-widest text-white italic">
                About Us
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-6xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              The <span className="text-brand-primary">Story</span> Behind Pat&apos;s Power Washing!
            </h2>

            {/* Subheading */}
            <p className="text-white font-semibold text-lg mb-3">
              Locally Owned. DMV Trusted.
            </p>

            {/* Body */}
            <p className="text-white/70 text-sm md:text-base mb-8 leading-relaxed">
              Pat&apos;s Power Washing is a locally owned exterior cleaning company
              serving homeowners, landlords, and small businesses across Maryland,
              DC, and Northern Virginia. We focus on delivering consistent, high-quality
              pressure washing and soft washing with professional service from start to finish.
              Every project is treated with the same level of care — clear communication
              before we arrive, careful preparation on site, and results you can see immediately.
              We focus on delivering consistent, high-quality
              pressure washing and soft washing with professional service from start to finish.
              Every project is treated with the same level of care — clear communication
              before we arrive, careful preparation on site, and results you can see immediately.
              We focus on delivering consistent, high-quality
              pressure washing and soft washing with professional service from start to finish.
              Every project is treated with the same level of care — clear communication
              before we arrive, careful preparation on site, and results you can see immediately.
            </p>

            {/* Read More */}
            <div className="flex justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 rounded-lg w-80 pl-8 pr-3 py-3 text-3xl font-bold
                 whitespace-nowrap transition-all duration-200 bg-white text-brand-primary 
                 hover:bg-brand-primary hover:text-white"
              >
                Read More
                <span className="bg-brand-primary rounded-md p-2">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}