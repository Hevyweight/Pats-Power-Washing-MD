"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const serviceLinks = [
  { href: "/services#house-washing", label: "House Washing / Siding" },
  { href: "/services#driveway", label: "Driveways & Sidewalks" },
  { href: "/services#patio", label: "Patios, Porches & Decks" },
  { href: "/services#fence", label: "Fence Cleaning" },
  { href: "/services#roof", label: "Roof Soft Washing" },
  { href: "/services#storefront", label: "Storefronts & Entryways" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-slate-100">
      {/* Primary row */}
      <div className="section h-16 md:h-20 flex items-center justify-between">
        {/* Left: logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Pat’s Power Washing — Home">
          <Image
            src="/logo-light.avif"         // make sure this exists in /public
            alt="Pat’s Power Washing logo"
            width={160}
            height={160}
            className="h-12 w-auto md:h-16 lg:h-20"
            priority
          />
          <span className="hidden sm:inline font-semibold tracking-tight text-brand-dark leading-none">
            Pat’s Power Washing
          </span>
        </Link>

        {/* Center: desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* Services with dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className="inline-flex items-center gap-1 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-1.5 py-0.5"
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
          <Link href="/about" className="hover:text-brand-primary">
            About
          </Link>
          <Link href="/gallery" className="hover:text-brand-primary">
            Gallery
          </Link>
          <Link href="/reviews" className="hover:text-brand-primary">
            Reviews
          </Link>
          <Link href="/contact" className="hover:text-brand-primary">
            Contact
          </Link>
        </nav>

        {/* Right: desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:12409684892"
            className="rounded-xl px-4 py-2 bg-brand-primary text-white font-medium shadow hover:opacity-95"
          >
            Call: 240-968-4892
          </a>
          <Link
            href="/contact"
            className="rounded-xl px-4 py-2 bg-brand-secondary text-white font-medium shadow hover:opacity-95"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
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

      {/* Mobile panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="section py-3 flex flex-col gap-2">
            <details className="[&_summary]:py-2">
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

            <Link href="/about" onClick={() => setMenuOpen(false)} className="py-2">
              About
            </Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)} className="py-2">
              Gallery
            </Link>
            <Link href="/reviews" onClick={() => setMenuOpen(false)} className="py-2">
              Reviews
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-2">
              Contact
            </Link>

            <div className="h-px bg-slate-200 my-2" />

            <a
              href="tel:12409684892"
              className="rounded-xl px-4 py-2 bg-brand-primary text-white text-center shadow"
            >
              Call: 240-968-4892
            </a>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-2 bg-brand-secondary text-white text-center shadow"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
