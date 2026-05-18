import CTAButtons from "./ctaButtons";
import Link from "next/link";
import Image from "next/image";

export default function AboutTeaser() {
  return (
    <section className="section py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Copy */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            About Pat&apos;s Power Washing
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-brand-dark">
            Locally Owned Exterior Cleaning in the DMV
          </h2>
          <p className="mt-4 text-slate-700 text-sm md:text-base">
            Pat&apos;s Power Washing is a locally owned exterior cleaning company
            serving homeowners, landlords, and small businesses across Maryland,
            DC, and Northern Virginia. We focus on delivering consistent, high-quality
            pressure washing and soft washing with professional service from start
            to finish.
          </p>
          <p className="mt-3 text-slate-700 text-sm md:text-base">
            Every project is treated with the same level of care—clear communication
            before we arrive, careful preparation on site, and results you can see
            immediately in your siding, concrete, and outdoor living spaces.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <CTAButtons />
            <Link
              href="/about"
              className="text-sm font-medium text-brand-primary hover:opacity-80 underline underline-offset-4"
            >
              Learn more about our company →
            </Link>
          </div>
        </div>

        {/* Right: Photo instead of blue box */}
        <div className="relative overflow-hidden shadow-soft h-[235px] sm:h-[285px] md:h-[335px] lg:h-[385px] xl:h-[435px] w-full bg-white">
          <Image
            src="/images/hero.jpg"
            alt="Pat power washing a client's property"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, (max-width: 1280px) 45vw, 600px"
            quality={85}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
