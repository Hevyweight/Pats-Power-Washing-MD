// app/components/ctaButtons.tsx
"use client";
import Link from "next/link";

export default function CTAButtons({ stacked = false }: { stacked?: boolean }) {
  return (
    <div className={`flex ${stacked ? "flex-col gap-3" : "flex-row gap-3"}`}>
      <a
        href="tel:12409684892"
        className="inline-flex items-center justify-center rounded-xl2 px-5 py-3 bg-brand-primary-dark text-white font-semibold shadow-soft hover:opacity-95"
      >
        Call Now: 240-968-4892
      </a>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-xl2 px-5 py-3 bg-brand-secondary-dark text-white font-semibold shadow-soft hover:opacity-95"
      >
        Get a Free Quote
      </Link>
    </div>
  );
}
