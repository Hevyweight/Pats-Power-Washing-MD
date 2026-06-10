// app/components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-8">
      {/* Top */}
      <div className="section py-10 border-b border-white/10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 items-start">
          {/* Logo + contact + socials */}
          <div className="space-y-4">
            <Link href="/" aria-label="Pat's Power Washing — Home">
              <Image
                src="/images/logo.png"
                alt="Pat's Power Washing"
                width={140}
                height={140}
                className="pb-4 w-[140px] h-auto"
                sizes="140px"
                quality={90}
              />
            </Link>

            <div className="space-y-1 text-sm">
              <div className="font-semibold text-base">240-968-4892</div>

              <a
                href="mailto:pdugan1@patspowerwashing.com"
                className="font-medium text-brand-soft hover:text-white transition"
              >
                pdugan1@patspowerwashing.com
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/patspowerwashing_dmv?igsh=c3J1ZHE2Y3p5NTJ5&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm text-white hover:text-[#E4405F]" />
              </a>

              <a
                href="https://www.facebook.com/share/1BseoaY5wm/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-sm text-white hover:text-[#1877F2]" />
              </a>

              <a
                href="https://www.tiktok.com/@patspowerwashing_dmv?_r=1&_t=ZP-928tcXDDHlm"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
                aria-label="TikTok"
              >
                <FaTiktok className="text-sm text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/pat-dugan-5629622b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-sm text-white hover:text-[#0A66C2]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-2 translate-y-2 text-sm">
            <h3 className="text-base font-semibold">Services</h3>
            <div className="mt-1 text-slate-200/90 leading-relaxed space-y-1.5">
              <Link href="/services/house-washing" className="block hover:text-brand-soft transition">
                House Washing
              </Link>
              <Link href="/services/driveway-cleaning" className="block hover:text-brand-soft transition">
                Driveway Cleaning
              </Link>
              <Link href="/services/roof-cleaning" className="block hover:text-brand-soft transition">
                Roof Cleaning
              </Link>
              <Link href="/services/pressure-washing" className="block hover:text-brand-soft transition">
                Pressure Washing
              </Link>
              <Link href="/services/commercial-pressure-washing" className="block hover:text-brand-soft transition">
                Commercial Services
              </Link>
              <Link href="/services" className="block hover:text-brand-soft transition font-medium mt-2">
                View All Services →
              </Link>
            </div>
          </div>

          {/* Service Areas */}
          <div className="space-y-2 translate-y-2 text-sm">
            <h3 className="text-base font-semibold">Service Areas</h3>
            <div className="mt-1 text-slate-200/90 leading-relaxed space-y-1.5">
              <Link href="/service-areas/maryland" className="block hover:text-brand-soft transition">
                Maryland
              </Link>
              <Link href="/service-areas/washington-dc" className="block hover:text-brand-soft transition">
                Washington DC
              </Link>
              <Link href="/service-areas/virginia" className="block hover:text-brand-soft transition">
                Virginia
              </Link>
              <Link href="/service-areas/delaware" className="block hover:text-brand-soft transition">
                Delaware
              </Link>
              <Link href="/service-areas/pennsylvania" className="block hover:text-brand-soft transition">
                Pennsylvania
              </Link>
              
              <div className="h-px w-10 bg-white/20 my-3" />
              
              <Link href="/service-areas/college-park-md" className="block hover:text-brand-soft transition text-xs">
                College Park, MD
              </Link>
              <Link href="/service-areas/silver-spring-md" className="block hover:text-brand-soft transition text-xs">
                Silver Spring, MD
              </Link>
              <Link href="/service-areas/silver-spring-md" className="block hover:text-brand-soft transition text-xs">
                Greenbelt, MD
              </Link>
              <Link href="/service-areas/bowie-md" className="block hover:text-brand-soft transition text-xs">
                Bowie, MD
              </Link>
              <Link href="/service-areas/laurel-md" className="block hover:text-brand-soft transition text-xs">
                Laurel, MD
              </Link>
              <Link href="/service-areas/laurel-md" className="block hover:text-brand-soft transition text-xs">
                Arlington, VA
              </Link>
              <Link href="/service-areas/alexandria-va" className="block hover:text-brand-soft transition text-xs">
                Alexandria, VA
              </Link>
              <Link href="/service-areas" className="block hover:text-brand-soft transition font-medium mt-2">
                View All Service Areas →
              </Link>
            </div>
          </div>

          {/* Quick Links + Resources */}
          <div className="space-y-2 translate-y-2 text-sm">
            <h3 className="text-base font-semibold">Company</h3>
            <div className="mt-1 text-slate-200/90 leading-relaxed space-y-1.5">
              <Link href="/about" className="block hover:text-brand-soft transition">
                About Us
              </Link>
              <Link href="/gallery" className="block hover:text-brand-soft transition">
                Gallery
              </Link>
              <Link href="/reviews" className="block hover:text-brand-soft transition">
                Reviews
              </Link>
              <Link href="/contact" className="block hover:text-brand-soft transition">
                Contact
              </Link>
              
              <div className="h-px w-10 bg-white/20 my-3" />
              
              <h3 className="text-base font-semibold text-white">Resources</h3>
              <Link href="/blog" className="block hover:text-brand-soft transition">
                Blog
              </Link>
              <Link href="/faqs" className="block hover:text-brand-soft transition">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="section py-4 text-xs text-slate-300 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          © {new Date().getFullYear()} Pat&apos;s Power Washing. All rights reserved.
        </div>
        <a
          href="https://scorecentury.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          Website by <span className="font-bold text-white brightness-200">Century Digital</span>
        </a>
      </div>
    </footer>
  );
}
