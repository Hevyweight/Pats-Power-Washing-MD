import CTAButtons from "./ctaButtons";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-brand-dark text-white">
      <div className="section grid lg:grid-cols-2 gap-10 py-12 md:py-16 items-center">
        {/* Left: Copy */}
        <div className="space-y-5 max-w-xl mx-auto text-center lg:text-left lg:ml-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft/80">
            Exterior Cleaning in the DMV
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Transform Your Property&apos;s Curb Appeal
          </h1>
          <p className="text-base md:text-lg opacity-90">
            Pat&apos;s Power Washing provides professional exterior cleaning services
            for homes and small businesses across Maryland, DC, and Northern Virginia.
            From house washing to driveways, patios, and storefronts, we use
            commercial-grade equipment and proven techniques to rejuvenate your
            property safely and effectively.
          </p>
          <div className="flex justify-center lg:justify-start">
            <CTAButtons />
          </div>
        </div>

        {/* Right: iPhone (portrait) image */}
        <div className="flex justify-center lg:ml-12 lg:sm:ml-24 lg:sm:translate-x-16">
          <div className="w-64 sm:w-80 md:max-w-md lg:max-w-lg lg:mr-2 xl:mr-6 md:mr-12">
            <div
              className="relative overflow-hidden bg-black/40 shadow-soft border border-white/10"
              style={{ aspectRatio: "9 / 16", maxHeight: "34rem" }}
            >
              <Image
                className="object-cover"
                src="/images/hero.jpg"
                alt="Power washing back steps before and after"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 448px, 660px"
                quality={80}  // Add this - reduces file size
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}