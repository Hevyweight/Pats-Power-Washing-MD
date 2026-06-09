import CTAButtons from "./ctaButtons";
import Link from "next/link";
import Image from "next/image";

export default function AboutTeaser() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="flex items-stretch min-h-[600px] lg:min-h-[700px]">
        
        {/* Left: Image bleeding from edge */}
        <div className="relative w-1/2 lg:w-[45%] shrink-0">
          <Image
            src="/images/hero.jpg"
            alt="Pat power washing a client's property"
            fill
            sizes="50vw"
            quality={85}
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right: Copy */}
        <div className="flex-1 flex items-center px-8 md:px-12 lg:px-16 py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary mb-3">
              About Pat&apos;s Power Washing
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              Locally Owned Exterior Cleaning in the DMV
            </h2>
            <p className="text-slate-700 text-sm md:text-base mb-4">
              Pat&apos;s Power Washing is a locally owned exterior cleaning company
              serving homeowners, landlords, and small businesses across Maryland,
              DC, and Northern Virginia. We focus on delivering consistent, high-quality
              pressure washing and soft washing with professional service from start
              to finish.
            </p>
            <p className="text-slate-700 text-sm md:text-base mb-8">
              Every project is treated with the same level of care—clear communication
              before we arrive, careful preparation on site, and results you can see
              immediately in your siding, concrete, and outdoor living spaces.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <CTAButtons />
              <Link
                href="/about"
                className="text-sm font-medium text-brand-primary hover:opacity-80 underline underline-offset-4"
              >
                Learn more about our company →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}