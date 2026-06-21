"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn } from "react-icons/fa";

const links = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/service-areas", label: "Service Area" },
  { href: "/blog", label: "Resources" },
  { href: "/reviews", label: "Reviews" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/sitemap", label: "Sitemap" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      
      {/* Main footer */}
      <div className="section py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start text-center md:text-left md:gap-80 px-16">

          {/* Left: Logo, name, phone, CTA, socials */}
          <div className="flex flex-col items-center text-center gap-4">
            <Link href="/" aria-label="Pat's Power Washing — Home">
              <Image
                src="/images/logo.png"
                alt="Pat's Power Washing"
                width={160}
                height={160}
                className="w-52 h-auto"
                quality={90}
              />
            </Link>

            <div>
              <p className="font-bold text-3xl text-brand-primary whitespace-nowrap">Pat&apos;s Power Washing</p>
              <a href="tel:2409684892" className="text-brand-primary text-3xl font-semibold hover:text-brand-secondary transition-colors duration-200">
                240-968-4892
              </a>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg w-52 py-3 text-2xl font-bold 
                         transition-all duration-200 bg-white text-brand-primary hover:bg-brand-primary hover:text-white"
            >
              GET ESTIMATE
            </Link>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/share/1BseoaY5wm/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary hover:bg-brand-secondary transition">
                <FaFacebookF className="text-white text-3xl" />
              </a>
              <a href="https://www.linkedin.com/in/pat-dugan-5629622b6" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary hover:bg-brand-secondary transition">
                <FaLinkedinIn className="text-white text-3xl" />
              </a>
              <a href="https://www.instagram.com/patspowerwashing_dmv" target="_blank" rel="noreferrer" aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary hover:bg-brand-secondary transition">
                <FaInstagram className="text-white text-3xl" />
              </a>
              <a href="https://www.tiktok.com/@patspowerwashing_dmv" target="_blank" rel="noreferrer" aria-label="TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary hover:bg-brand-secondary transition">
                <FaTiktok className="text-white text-3xl" />
              </a>
            </div>
          </div>

          {/* Right: 2 column link grid */}
          <div className="grid md:grid-cols-2 md:gap-x-40 gap-y-8 pt-16 md:pt-32 text-3xl font-semibold whitespace-nowrap">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-brand-primary transition underline underline-offset-4 hover:no-underline">
                {l.label}
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 section py-4 text-xs text-white/50 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>© {new Date().getFullYear()} Pat&apos;s Power Washing. All rights reserved.</div>
        <a href="https://scorecentury.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          Website by <span className="font-bold text-white">Century Digital</span>
        </a>
      </div>

    </footer>
  );
}