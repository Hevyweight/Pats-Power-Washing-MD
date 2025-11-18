import CTAButtons from "./ctaButtons";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="section py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
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

        <div className="rounded-xl2 bg-brand-soft/40 p-6">
          <div className="text-sm text-slate-700">
            <div className="font-semibold text-brand-dark">
              See real before &amp; after results
            </div>
            <p className="mt-2 mb-3 text-slate-700">
              We regularly share project videos, reels, and transformations so you
              can see our process and the quality of our work.
            </p>
            <div className="space-y-1">
              <a
                className="block text-brand-primary underline underline-offset-4"
                href="https://instagram.com/patspowerwashing_dmv"
                target="_blank"
                rel="noreferrer"
              >
                @patspowerwashing_dmv
              </a>
              <a
                className="block text-brand-primary underline underline-offset-4"
                href="https://instagram.com/pat_dugan37"
                target="_blank"
                rel="noreferrer"
              >
                @pat_dugan37
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
