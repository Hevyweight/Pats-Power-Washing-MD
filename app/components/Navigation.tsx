// app/components/Navigation.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-100">
      {/* Primary row */}
      <div className="section h-16 md:h-20 flex items-center justify-between gap-4">
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
          <span className="hidden lg:inline font-semibold tracking-tight text-brand-dark leading-none whitespace-nowrap">
            Pat&#39;s Power Washing
          </span>
        </Link>

        {/* Center: desktop nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
         {/* About dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setAboutOpen((v) => !v)}
              onBlur={() => setTimeout(() => setAboutOpen(false), 150)}
              className="inline-flex items-center gap-1 hover:text-brand-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-1.5 py-0.5 whitespace-nowrap"
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
              className="inline-flex items-center gap-1 hover:text-brand-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-1.5 py-0.5 whitespace-nowrap"
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
          <Link href="/gallery" className="hover:text-brand-primary-dark whitespace-nowrap">
            Gallery
          </Link>
          <Link href="/reviews" className="hover:text-brand-primary-dark whitespace-nowrap">
            Reviews
          </Link>

          {/* Resources with dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              onBlur={() => setTimeout(() => setResourcesOpen(false), 150)}
              className="inline-flex items-center gap-1 hover:text-brand-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-1.5 py-0.5 whitespace-nowrap text-sm"
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

          <Link href="/contact" className="hover:text-brand-primary-dark whitespace-nowrap text-sm">
            Contact
          </Link>
        </nav>

        {/* Right: desktop CTAs */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
          <a
            href="tel:12409684892"
            className="rounded-xl px-3 lg:px-4 py-2 bg-brand-primary-dark text-white text-sm font-medium shadow hover:opacity-95 whitespace-nowrap"
          >
            240-968-4892
          </a>
          <Link
            href="/contact"
            className="rounded-xl px-3 lg:px-4 py-2 bg-brand-secondary-dark text-white text-sm font-medium shadow hover:opacity-95 whitespace-nowrap"
          >
            Get A Free Quote
          </Link>
        </div>

        {/* Mobile: Get Quote + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/contact"
            className="rounded-xl px-3 py-2 bg-brand-secondary-dark text-white text-sm font-medium shadow hover:opacity-95"
          >
            Get A Free Quote
          </Link>
          <button
            className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
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
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="section py-3 flex flex-col gap-2">
            <details className="[&_summary]:py-3">
              <summary className="cursor-pointer select-none">About</summary>
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
              <summary className="cursor-pointer select-none">Services</summary>
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
              <summary className="cursor-pointer select-none">Resources</summary>
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
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-2">
              Contact
            </Link>

            <div className="h-px bg-slate-200 my-2" />

            <a
              href="tel:12409684892"
              className="rounded-xl px-4 py-2 bg-brand-primary-dark text-white text-center shadow"
            >
              Call: 240-968-4892
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
