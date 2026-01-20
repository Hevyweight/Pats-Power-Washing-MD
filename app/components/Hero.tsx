import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-b from-brand-dark to-brand-primary-dark text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="section grid lg:grid-cols-2 gap-10 py-12 md:py-16 items-center relative z-10">
        {/* Left: Copy */}
        <div className="space-y-5 max-w-xl mx-auto text-center lg:text-left lg:ml-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20">
            <FaMapMarkerAlt className="text-brand-secondary-dark" />
            <span className="font-semibold uppercase tracking-[0.2em]">Serving the DMV Area</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Transform Your Property&apos;s Curb Appeal
          </h1>
          
          <p className="text-base md:text-lg text-slate-200 drop-shadow">
            Pat&apos;s Power Washing provides professional exterior cleaning services
            for homes and small businesses across Maryland, DC, and Northern Virginia.
            From house washing to driveways, patios, and storefronts, we use
            commercial-grade equipment and proven techniques to rejuvenate your
            property safely and effectively.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
              <FaPhone />
              240-968-4892
            </a>
          </div>
        </div>

        {/* Right: iPhone (portrait) image */}
        <div className="flex justify-center lg:ml-12 lg:sm:ml-24 lg:sm:translate-x-16">
          <div className="w-64 sm:w-80 md:max-w-md lg:max-w-lg lg:mr-2 xl:mr-6 md:mr-12">
            <div
              className="relative overflow-hidden bg-black/40 shadow-2xl border border-white/20 rounded-2xl"
              style={{ aspectRatio: "9 / 16", maxHeight: "34rem" }}
            >
              <Image
                className="object-cover"
                src="/images/hero.jpg"
                alt="Power washing back steps before and after"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 448px, 660px"
                quality={80}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}