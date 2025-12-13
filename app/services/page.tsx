import Image from "next/image";

export const metadata = {
  title: "Services | Pat’s Power Washing",
};

export default function ServicesPage() {
  return (
    <div className="section py-12 space-y-12">
      {/* Intro */}
      <header>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">
          Exterior Cleaning Services
        </h1>
        <p className="mt-4 text-slate-700 max-w-2xl">
          Pat&apos;s Power Washing provides professional pressure washing and
          soft washing services for homes, rentals, and small businesses across
          Maryland, DC, and Northern Virginia. We focus on safe cleaning
          methods, clear communication, and results you can see immediately.
        </p>
      </header>

      {/* House washing */}
      <section id="house-washing" className="border-t border-slate-200 pt-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Text left */}
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark">
              House Washing &amp; Siding Cleaning
            </h2>
            <p className="mt-3 text-slate-700 max-w-2xl">
              Remove dirt, algae, mildew, and organic buildup from your home&apos;s
              exterior with our soft-wash house washing service. We adjust
              pressure and detergents based on your siding material to clean
              effectively without causing damage.
            </p>
            <p className="mt-2 text-slate-700">
              <span className="font-semibold">Why it matters:</span> Clean
              siding improves curb appeal, helps prevent long-term staining, and
              protects the value of your home.
            </p>
            <p className="mt-1 text-slate-700">
              <span className="font-semibold">What to expect:</span> A quick
              quote based on your home size, a scheduled appointment that fits
              your calendar, and a thorough rinse and cleanup before we leave.
            </p>
            <p className="mt-3 text-brand-primary font-medium">
              Ready to refresh your siding? Request a free house wash quote
              today.
            </p>
          </div>

          {/* Image right */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
            <Image
              src="/images/services/house-wash.jpg" // TODO: update to your real image
              alt="House soft washing in progress"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Driveways & sidewalks */}
      <section id="driveway" className="border-t border-slate-200 pt-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Text left */}
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark">
              Driveway &amp; Sidewalk Pressure Washing
            </h2>
            <p className="mt-3 text-slate-700 max-w-2xl">
              High-traffic concrete areas collect oil, tire marks, dirt, and
              organic stains. Our driveway and sidewalk cleaning lifts those
              stains and brightens the surface, giving your property a cleaner,
              more inviting look from the street.
            </p>
            <p className="mt-2 text-slate-700">
              <span className="font-semibold">Why it matters:</span> Clean
              concrete improves curb appeal, reduces slippery buildup, and
              creates a better first impression for guests or customers.
            </p>
            <p className="mt-1 text-slate-700">
              <span className="font-semibold">What to expect:</span> We
              pre-treat stained areas, use professional surface cleaners, and
              thoroughly rinse for an even, streak-free finish.
            </p>
            <p className="mt-3 text-brand-primary font-medium">
              Ask about package pricing when you bundle driveway cleaning with
              house washing.
            </p>
          </div>

          {/* Image right */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
            <Image
              src="/images/services/driveway-cleaning.jpg"
              alt="Pressure washing a concrete driveway"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Patios, porches, decks */}
      <section id="patio" className="border-t border-slate-200 pt-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark">
              Patios, Porches &amp; Deck Cleaning
            </h2>
            <p className="mt-3 text-slate-700 max-w-2xl">
              We clean concrete, pavers, stone, wood, and composite outdoor
              living areas to remove dirt, algae, and weathering. The result is
              a brighter, more enjoyable space for relaxing and hosting.
            </p>
            <p className="mt-2 text-slate-700">
              <span className="font-semibold">Why it matters:</span> Regular
              cleaning helps prevent slippery buildup and extends the life of
              your outdoor surfaces.
            </p>
            <p className="mt-1 text-slate-700">
              <span className="font-semibold">What to expect:</span> We select
              the right pressure and cleaning solution for each surface, protect
              nearby landscaping, and rinse thoroughly.
            </p>
            <p className="mt-3 text-brand-primary font-medium">
              Planning a gathering or event? Schedule your patio or deck
              cleaning in advance.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
            <Image
              src="/images/services/patio-deck.jpg"
              alt="Clean patio and deck area"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Fence cleaning */}
      <section id="fence" className="border-t border-slate-200 pt-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark">
              Fence Cleaning
            </h2>
            <p className="mt-3 text-slate-700 max-w-2xl">
              Weather, moisture, and organic growth can leave wood or vinyl
              fencing looking tired. Our fence cleaning service removes algae,
              mildew, and surface grime to restore a fresher, more uniform
              appearance.
            </p>
            <p className="mt-2 text-slate-700">
              <span className="font-semibold">Why it matters:</span> A clean
              fence frames your property, improves curb appeal, and can help
              prepare surfaces for staining or painting.
            </p>
            <p className="mt-1 text-slate-700">
              <span className="font-semibold">What to expect:</span> We use
              controlled pressure and appropriate detergents to clean thoroughly
              while respecting the condition of the material.
            </p>
            <p className="mt-3 text-brand-primary font-medium">
              Include fence cleaning as an add-on to your house or driveway
              service for a complete refresh.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
            <Image
              src="/images/services/fence-cleaning.jpg"
              alt="Fence cleaning results"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Roof soft washing */}
      <section id="roof" className="border-t border-slate-200 pt-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark">
              Roof Soft Washing
            </h2>
            <p className="mt-3 text-slate-700 max-w-2xl">
              Dark streaks and organic growth on shingles are more than just
              cosmetic. Our roof soft washing uses low pressure and specialized
              solutions to safely remove algae and buildup without damaging your
              roofing materials.
            </p>
            <p className="mt-2 text-slate-700">
              <span className="font-semibold">Why it matters:</span> A clean
              roof boosts curb appeal and can help extend the life of your
              shingles when maintained properly.
            </p>
            <p className="mt-1 text-slate-700">
              <span className="font-semibold">What to expect:</span> An
              inspection of roof condition, a gentle, controlled soft-wash
              application, and a thorough rinse where appropriate.
            </p>
            <p className="mt-3 text-brand-primary font-medium">
              Ask if your roof is a good candidate for soft washing during your
              quote.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
            <Image
              src="/images/services/roof-softwash.jpg"
              alt="Roof soft washing service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Storefronts & entryways */}
      <section id="storefront" className="border-t border-slate-200 pt-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark">
              Storefront &amp; Light Commercial Cleaning
            </h2>
            <p className="mt-3 text-slate-700 max-w-2xl">
              Make a strong first impression with clean sidewalks, entryways,
              and facades. We provide pressure washing for small retail fronts,
              offices, and other light commercial properties.
            </p>
            <p className="mt-2 text-slate-700">
              <span className="font-semibold">Why it matters:</span> A clean
              entryway reflects well on your business and creates a safer, more
              welcoming environment for customers and tenants.
            </p>
            <p className="mt-1 text-slate-700">
              <span className="font-semibold">What to expect:</span> Flexible
              scheduling to minimize disruption, clear communication, and
              consistent results your clients will notice.
            </p>
            <p className="mt-3 text-brand-primary font-medium">
              Contact us for recurring service options for your storefront or
              office.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
            <Image
              src="/images/services/storefront-cleaning.jpg"
              alt="Clean storefront exterior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-200 pt-10 pb-4">
        <h2 className="text-2xl font-semibold text-brand-dark">
          Not sure which service you need?
        </h2>
        <p className="mt-3 text-slate-700 max-w-2xl">
          Tell us a little about your property and what you&apos;d like cleaned.
          We&apos;ll recommend the right service, provide a clear quote, and
          schedule a time that works best for you.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="rounded-xl2 px-5 py-3 bg-brand-primary text-white font-semibold shadow-soft hover:opacity-95"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:12409684892"
            className="rounded-xl2 px-5 py-3 border border-brand-primary text-brand-primary font-semibold hover:bg-brand-primary/5"
          >
            Call: 240-968-4892
          </a>
        </div>
      </section>
    </div>
  );
}
