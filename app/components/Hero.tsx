import CTAButtons from "./ctaButtons";

export default function Hero() {
  return (
    <section className="bg-brand-dark text-white">
      <div className="section grid lg:grid-cols-2 gap-10 py-12 md:py-16">
        {/* Left: Copy */}
        <div className="space-y-5 self-center">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Transform Your Home’s Curb Appeal
          </h1>
          <p className="text-lg opacity-90">
            Professional pressure washing across Maryland, DC, and Virginia —
            house washing, driveways, decks, fences, roof soft washing, and storefronts.
            Run by a hardworking, detail-oriented 20-year-old owner who treats your home like his own.
          </p>
          <CTAButtons />
          <p className="text-sm opacity-90">Watch a quick clip from Pat’s recent jobs.</p>
        </div>

        {/* Right: iPhone (portrait) video */}
        <div className="justify-self-end w-full max-w-sm md:max-w-md lg:max-w-lg">
          <div className="rounded-2xl overflow-hidden bg-black/30 shadow" 
               style={{ aspectRatio: "9 / 16", maxHeight: "34rem" }}>
            <video
              className="h-full w-full object-cover"
              src="/videos/hero-portrait.mp4"        // <-- drop your iPhone .mp4 here
              // If you only have .mov, keep it as a <source>, but MP4/H.264 is better for web.
              playsInline
              webkit-playsinline="true"
              muted
              controls
              preload="metadata"
              poster="/videos/hero-portrait-poster.jpg" // optional
            >
              <source src="/videos/hero-portrait.mp4" type="video/mp4" />
              <source src="/videos/hero-portrait.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-2 text-xs text-white/80">
            Tip: Export iPhone clips as <span className="font-semibold">H.264 .mp4</span> for widest compatibility.
          </div>
        </div>
      </div>
    </section>
  );
}
