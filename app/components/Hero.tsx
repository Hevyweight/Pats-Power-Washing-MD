import CTAButtons from "./ctaButtons";

export default function Hero() {
  return (
    <section className="bg-brand-dark text-white">
      <div className="section grid lg:grid-cols-2 gap-10 py-12 md:py-16 items-center">
        {/* Left: Copy */}
        <div className="space-y-5 ml-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft/80">
            Exterior Cleaning in the DMV
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Transform Your Property&apos;s Curb Appeal
          </h1>
          <p className="text-base md:text-lg opacity-90 max-w-xl">
            Pat&apos;s Power Washing provides professional exterior cleaning services
            for homes and small businesses across Maryland, DC, and Northern Virginia.
            From house washing to driveways, patios, and storefronts, we use
            commercial-grade equipment and proven techniques to rejuvenate your
            property safely and effectively.
          </p>
          <CTAButtons />
          <p className="text-sm opacity-90">
            Watch a quick clip from a recent project.
          </p>
        </div>

        {/* Right: iPhone (portrait) video */}
        <div className="flex justify-center ml-12 sm:ml-28 sm:translate-x-16">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg lg:mr-2 xl:mr-6 md:mr-12">
            <div
              className="overflow-hidden bg-black/40 shadow-soft border border-white/10"
              style={{ aspectRatio: "9 / 16", maxHeight: "34rem" }}
            >
              <video
                className="h-full w-full object-cover"
                src="/videos/back_steps.mp4"
                playsInline
                muted
                controls
                preload="metadata"
                poster="/videos/hero-portrait-poster.jpg"
                autoPlay
                loop
              >
                <source src="/videos/hero_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
