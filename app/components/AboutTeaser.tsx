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
        <div className="relative rounded-2xl overflow-hidden shadow-soft">
          <Image
            src="/contact.jpg" // <-- drop your actual image path here
            alt="Pat power washing a client's property"
            width={900}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
