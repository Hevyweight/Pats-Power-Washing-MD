"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaStar, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex flex-col justify-start overflow-hidden pt-20">
      
      {/* Background Image */}
      <Image
        src="/images/v-2/hero.jpg"
        alt="Pat's Power Washing"
        fill
        className="object-cover md:object-[center_0%]"
        style={{ objectPosition: '70% 0%' }}
        priority
        quality={90}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 mt-20">
        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight max-w-8xl mb-12 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
          Pat&apos;s Power Washing
        </h1>
        {/* Sub-headline */}
        <h2 className="text-2xl md:text-6xl mt-16 font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
          Serving The <span className="text-brand-primary">DMV</span>
        </h2>
      </div>
    </section>
  );
}
