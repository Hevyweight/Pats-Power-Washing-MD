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
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);

  return (
  <header className={`fixed top-0 left-0 right-0 z-50 h-24 transition-all duration-200 ease-in-out ${
    scrolled
      ? "bg-brand-primary shadow-lg"
      : "bg-transparent"
  }`}>
      {/* Primary row */}
      <div className="w-full px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between gap-4">
        {/* Left: logo */}
        <Link href="/" className="hidden md:flex items-center gap-2 shrink-0" aria-label="Pat's Power Washing — Home">
         <Image
            src="/images/logo.png"
            alt="Pat's Power Washing logo"
            width={200}
            height={200}
            className="h-22 w-auto md:h-26 lg:h-36 pt-6"
            quality={90}
            priority
          />
        </Link>

        {/* Right: nav + CTAs grouped together */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-2xl font-bold">
          {/* Home button */}
          <Link href="/" className="text-white hover:text-white/70 whitespace-nowrap">
            Home
          </Link>

         {/* About dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setTimeout(() => setAboutOpen(false), 200)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-white hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-1.5 py-0.5 whitespace-nowrap"
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
              <div className="absolute left-0 w-48 rounded-xl border border-slate-200 bg-white shadow">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/about"
                      className="block px-3 py-2 text-black text-black hover:bg-brand-light/60"
                      onClick={() => setAboutOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/service-areas/"
                      className="block px-3 py-2 text-black text-black hover:bg-brand-light/60"
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
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setTimeout(() => setServicesOpen(false), 200)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-white hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-1.5 py-0.5 whitespace-nowrap"
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
              <div className="absolute left-0  w-64 rounded-xl border border-slate-200 bg-white shadow">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-black hover:bg-brand-light/60"
                      onClick={() => setServicesOpen(false)}
                    >
                      All Services
                    </Link>
                  </li>
                  {serviceLinks.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block px-3 py-2 text-black hover:bg-brand-light/60"
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
          <Link href="/gallery" className="text-white hover:text-white/70 whitespace-nowrap">
            Gallery
          </Link>
          <Link href="/reviews" className="text-white hover:text-white/70 whitespace-nowrap">
            Reviews
          </Link>

          {/* Resources with dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setTimeout(() => setResourcesOpen(false), 300)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-white hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-1.5 py-0.5 whitespace-nowrap"
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
              <div className="absolute left-0  w-48 rounded-xl border border-slate-200 bg-white shadow">
                <ul className="py-2">
                  {resourceLinks.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="block px-3 py-2 text-black hover:bg-brand-light/60"
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

          <Link href="/contact" className="text-white hover:text-white/70 whitespace-nowrap">
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <Link
          href="/contact"
          className="rounded-lg px-7 py-3 text-2xl font-bold whitespace-nowrap transition-all 
                     duration-200 bg-white text-brand-primary hover:bg-brand-primary
                    hover:text-brand-gray"
        >
          GET ESTIMATE
        </Link>
        </div>

        {/* Mobile: Get Quote + Hamburger */}
        <div className="md:hidden flex items-center justify-between w-full">

          {/* Logo left */}
          <Link href="/" aria-label="Pat's Power Washing — Home">
            <Image
              src="/images/logo.png"
              alt="Pat's Power Washing logo"
              width={200}
              height={200}
              className="h-28 w-auto pt-4"
              quality={90}
              priority
            />
          </Link>

          {/* Right: phone + hamburger */}
          <div className="flex items-center gap-4  pt-4">

            {/* Phone button */}
            <a
              href="tel:12409684892"
              aria-label="Call Pat's Power Washing"
              className="inline-flex items-center justify-center h-12 w-12 bg-brand-primary rounded-md transition-colors hover:bg-brand-primary/90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </a>

            {/* Hamburger button */}
            <button
              className="inline-flex items-center justify-center h-12 w-12 bg-brand-primary rounded-md transition-colors hover:bg-brand-primary/90"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            
          </div>
        </div>
      </div>

      {/* Mobile panel — fullscreen overlay */}
      <div className={`md:hidden fixed inset-0 z-50 w-screen overflow-hidden pointer-events-none transition-all  ${menuOpen ? "visible" : "invisible delay-300"}`}>
         <div className={`absolute inset-0 bg-brand-primary flex flex-col px-8 py-6 overflow-y-auto transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full"}`}>
          {/* Close button top right */}
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white hover:bg-white/10 rounded-md p-2"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="mt-4 mb-8">
            <Image src="/images/logo.png" alt="Pat's Power Washing" width={120} height={120} className="h-40 w-auto mx-auto" />
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-1">
            <Link href="/" onClick={() => setMenuOpen(false)} className="py-4 text-white text-xl font-bold border-b border-white/20">Home</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="py-4 text-white text-xl font-bold border-b border-white/20">Services</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="py-4 text-white text-xl font-bold border-b border-white/20">About</Link>
            <Link href="/reviews" onClick={() => setMenuOpen(false)} className="py-4 text-white text-xl font-bold border-b border-white/20">Reviews</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)} className="py-4 text-white text-xl font-bold border-b border-white/20">Gallery</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-4 text-white text-xl font-bold border-b border-white/20">Contact</Link>
          </nav>

          {/* GET ESTIMATE at bottom */}
          <Link
              href="/contact"
              className="rounded-lg px-8 py-4 m-8 text-2xl font-bold bg-white text-brand-primary
                       hover:bg-brand-primary hover:text-brand-gray text-center"
            >
            GET ESTIMATE
          </Link>
        </div>
      </div>
      
    </header>
  );
}
