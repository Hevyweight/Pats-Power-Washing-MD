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

          {/* Location / service area */}
          <div className="space-y-2 translate-y-2 text-sm">
            <h3 className="text-base font-semibold">Service Area</h3>

            <div className="mt-1 text-slate-200/90 leading-relaxed space-y-2">
              {/* Maryland */}
              <div>
                <div className="font-medium text-slate-100">Maryland</div>
                <div className="pl-3 mt-0.5 space-y-0.5 text-xs text-slate-300/90">
                  <div>Montgomery County</div>
                  <div>Prince George&apos;s County</div>
                  <div>Howard County</div>
                  <div>Anne Arundel County</div>
                </div>
              </div>

              {/* DC */}
              <div>
                <div className="font-medium text-slate-100">Washington, DC</div>
                <div className="pl-3 mt-0.5 text-xs text-slate-300/90">
                  <div>District-wide</div>
                </div>
              </div>

              {/* Northern Virginia */}
              <div>
                <div className="font-medium text-slate-100">Northern Virginia</div>
                <div className="pl-3 mt-0.5 space-y-0.5 text-xs text-slate-300/90">
                  <div>Arlington County</div>
                  <div>Fairfax County</div>
                  <div>Alexandria</div>
                  <div>Loudoun County</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services & links */}
          <div className="space-y-2 translate-y-2 pb-12 text-sm">
            <h3 className="text-base font-semibold">Services &amp; Links</h3>

            <div className="mt-1 text-slate-200/90 leading-relaxed space-y-1.5">
              {/* Services */}
              <Link
                href="/services#house-soft-wash"
                className="block hover:text-brand-soft transition"
              >
                House Soft Wash
              </Link>

              <Link
                href="/services#concrete-driveways"
                className="block hover:text-brand-soft transition"
              >
                Concrete &amp; Driveway Cleaning
              </Link>

              <Link
                href="/services#patios-walkways"
                className="block hover:text-brand-soft transition"
              >
                Patios, Walkways &amp; Steps
              </Link>

              <Link
                href="/services#decks-fences"
                className="block hover:text-brand-soft transition"
              >
                Decks &amp; Fences
              </Link>

              <Link
                href="/services#storefronts"
                className="block hover:text-brand-soft transition"
              >
                Storefronts &amp; Commercial
              </Link>

              {/* Small visual separator */}
              <div className="h-px w-10 bg-white/20 my-3" />

              <h3 className="text-base text-white font-semibold">Quick Links</h3>

              {/* Company pages */}
              <Link
                href="/about"
                className="block hover:text-brand-soft transition"
              >
                About Pat&apos;s Power Washing
              </Link>

              <Link
                href="/gallery"
                className="block hover:text-brand-soft transition"
              >
                Before &amp; After Gallery
              </Link>

              <Link
                href="/contact"
                className="block hover:text-brand-soft transition"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-3 text-sm">
            <h3 className="text-base font-semibold">Get Updates &amp; Offers</h3>
            <p className="text-slate-200/80">
              Join our list to get seasonal reminders and occasional promos on
              house washes, driveways, and more.
            </p>
            <form
              className="mt-2 space-y-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder:text-slate-300/60 focus:outline-none focus:ring-1 focus:ring-brand-soft"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder:text-slate-300/60 focus:outline-none focus:ring-1 focus:ring-brand-soft"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-brand-soft px-3 py-2 text-center text-sm font-semibold text-brand-dark hover:opacity-90 transition"
              >
                Get Updates
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="section py-4 text-xs text-slate-300 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          © {new Date().getFullYear()} Pat&apos;s Power Washing. All rights reserved.
        </div>
        <div className="opacity-80">
          Serving Maryland, DC &amp; Northern Virginia.
        </div>
      </div>
    </footer>
  );
}
