// app/components/Navigation.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const aboutLinks = [
  { href: "/about", label: "About Us" },
  { href: "/service-areas", label: "Service Areas" },
];

const serviceLinks = [
  { href: "/services/house-washing", label: "House Washing" },
  { href: "/services/driveway-cleaning", label: "Driveway Cleaning" },
  { href: "/services/roof-cleaning", label: "Roof Cleaning" },
  { href: "/services/deck-fence-cleaning", label: "Deck & Fence Cleaning" },
  { href: "/services/pressure-washing", label: "Pressure Washing" },
  { href: "/services/commercial-pressure-washing", label: "Commercial Services" },
];

const resourceLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
  <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out ${
    scrolled
      ? "bg-brand-secondary-dark shadow-lg"
      : "bg-transparent"
  }`}>
      {/* Primary row */}
      <div className="w-full px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between gap-4">
        {/* Left: logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Pat's Power Washing — Home">
          <Image
            src="/images/logo.png"
            alt="Pat's Power Washing logo"
            width={160}
            height={160}
            className="h-12 w-auto md:h-16 lg:h-20"
            sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, 80px"
            quality={90}
            priority
          />
          <span className="hidden lg:inline text-lg font-bold tracking-tight text-white leading-none whitespace-nowrap">
            Pat&#39;s Power Washing
          </span>
        </Link>

        {/* Right: nav + CTAs grouped together */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-lg font-bold">
         {/* About dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setAboutOpen((v) => !v)}
              onBlur={() => setTimeout(() => setAboutOpen(false), 150)}
              className="inline-flex items-center gap-1 text-white/90 hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-1.5 py-0.5 whitespace-nowrap"
              aria-haspopup="menu"
              aria-expanded={aboutOpen}
            >
              About
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {aboutOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white shadow">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/about"
                      className="block px-3 py-2 hover:bg-brand-light/60"
                      onClick={() => setAboutOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service-areas/"
                      className="block px-3 py-2 hover:bg-brand-light/60"
                      onClick={() => setAboutOpen(false)}
                    >
                      Service Areas
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div> 

          {/* Services with dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className="inline-flex items-center gap-1 text-white/90 hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-1.5 py-0.5 whitespace-nowrap"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              Services
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white shadow">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/services"
                      className="block px-3 py-2 font-medium hover:bg-brand-light/60"
                      onClick={() => setServicesOpen(false)}
                    >
                      All Services
                    </Link>
                  </li>
                  {serviceLinks.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block px-3 py-2 hover:bg-brand-light/60"
                        onClick={() => setServicesOpen(false)}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Plain links */}
          <Link href="/gallery" className="text-white/90 hover:text-white/70 whitespace-nowrap">
            Gallery
          </Link>
          <Link href="/reviews" className="text-white/90 hover:text-white/70 whitespace-nowrap">
            Reviews
          </Link>

          {/* Resources with dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              onBlur={() => setTimeout(() => setResourcesOpen(false), 150)}
              className="inline-flex items-center gap-1 text-white/90 hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-1.5 py-0.5 whitespace-nowrap"
              aria-haspopup="menu"
              aria-expanded={resourcesOpen}
            >
              Resources
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {resourcesOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white shadow">
                <ul className="py-2">
                  {resourceLinks.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="block px-3 py-2 hover:bg-brand-light/60"
                        onClick={() => setResourcesOpen(false)}
                      >
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-white/90 hover:text-white/70 whitespace-nowrap">
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}

          <a href="tel:12409684892" className={`rounded-lg px-7 py-3 text-base font-bold whitespace-nowrap transition-all duration-200 ${
            scrolled
              ? "bg-white text-brand-secondary-dark"
              : "border-2 border-white text-white/90 hover:bg-white/10"
          }`}>
            240-968-4892
          </a>

          <Link href="/contact" className={`rounded-lg px-7 py-3 text-base font-bold whitespace-nowrap transition-all duration-200 ${
            scrolled
              ? "bg-brand-dark text-white"
              : "bg-white text-brand-dark hover:bg-white/90"
          }`}>
            Get A Free Quote
          </Link>
        </div>

        {/* Mobile: Get Quote + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/contact"
            className="rounded-xl px-3 py-2 bg-brand-secondary-dark text-white text-sm font-medium shadow hover:opacity-95"
          >
            240-968-4892
          </Link>
          <Link
            href="/contact"
            className="rounded-xl px-3 py-2 bg-brand-secondary-dark text-white text-sm font-medium shadow hover:opacity-95"
          >
            Get A Free Quote
          </Link>
          <button
            className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/30 text-white hover:bg-white/10"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-brand-secondary-dark">
          <div className="section py-3 flex flex-col gap-2">
            <details className="[&_summary]:py-3">
              <summary className="cursor-pointer select-none text-white">About</summary>
              <ul className="ml-3 mt-1 mb-2 border-l border-slate-200">
                {aboutLinks.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 pl-3"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <details className="[&_summary]:py-3">
              <summary className="cursor-pointer select-none text-white">Services</summary>
              <ul className="ml-3 mt-1 mb-2 border-l border-slate-200">
                <li>
                  <Link
                    href="/services"
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 pl-3 font-medium"
                  >
                    All Services
                  </Link>
                </li>
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 pl-3"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <Link href="/gallery" onClick={() => setMenuOpen(false)} className="py-2">
              Gallery
            </Link>
            <Link href="/reviews" onClick={() => setMenuOpen(false)} className="py-2">
              Reviews
            </Link>
            <details className="[&_summary]:py-3">
              <summary className="cursor-pointer select-none text-white">Resources</summary>
              <ul className="ml-3 mt-1 mb-2 border-l border-slate-200">
                {resourceLinks.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 pl-3"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            <Link  href="/contact" onClick={() => setMenuOpen(false)} className="py-2 text-white">
              Contact
            </Link>
            {/*
            <div className="h-px bg-slate-200 my-2" />

            <a
              href="tel:12409684892"
              className="rounded-xl px-4 py-2 bg-brand-primary-dark text-white text-center shadow"
            >
              Call: 240-968-4892
            </a>
            */}
          </div>
        </div>
      )}
    </header>
  );
}
