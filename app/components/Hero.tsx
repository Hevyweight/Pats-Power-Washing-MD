"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaStar, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      
      {/* Background Image */}
      <Image
        src="/images/Hero_Placeholder2.png"
        alt="Pat's Power Washing"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 py-32">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/20 mb-6">
          <FaMapMarkerAlt className="text-brand-secondary" />
          <span className="font-semibold uppercase tracking-[0.2em]">Serving the DMV Area</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl mb-6 drop-shadow-xl">
          DMV&apos;s Premier Exterior Cleaning
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-10">
          Professional results. Owner operated. Trusted by homeowners, property managers, and HOAs across Maryland, DC, and Virginia.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            href="/contact"
            className="bg-brand-secondary-dark hover:opacity-90 px-10 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg"
          >
            Get A Free Quote
          </Link>
          
          <a
            href="tel:2409684892"
            className="bg-white/10 hover:bg-white/20 border border-white/30 px-10 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all"
          >
            <FaPhone />
            240-968-4892
          </a>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-slate-200 border-t border-white/20 pt-8 w-full max-w-3xl">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>50+ Five Star Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-brand-secondary" />
            <span>Fully Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-brand-secondary" />
            <span>MD · DC · VA</span>
          </div>
          <div className="flex items-center gap-2">
            <span>👤</span>
            <span>Owner On Every Job</span>
          </div>
        </div>
      </div>
    </section>
  );
}
