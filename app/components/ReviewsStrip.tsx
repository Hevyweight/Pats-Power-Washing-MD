import Link from "next/link";

export default function ReviewsStrip() {
  return (
    <section className="bg-black py-20">
      <div className="section">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-16 h-px bg-brand-primary" />
          <p className="text-sm font-semibold uppercase tracking-widest text-white">
            Testimonials
          </p>
          <div className="w-16 h-px bg-brand-primary" />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-8xl font-extrabold text-white mb-4">
            Happy <span className="text-brand-primary">Clients</span>
          </h2>
        </div>

        {/* Elfsight Widget */}
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div className="elfsight-app-2bb2ce54-87dd-4611-bccd-0ddd3ac9d171" data-elfsight-app-lazy></div>

        {/* More Reviews button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/reviews"
            className="inline-flex items-center justify-between gap-4 rounded-lg w-full max-w-[225px] md:max-w-[300px] px-5 py-3 text-xl md:text-3xl font-bold transition-all duration-200 bg-brand-primary text-white hover:bg-brand-secondary"
          >
            More Reviews
            <span className="bg-white rounded-md p-2 shrink-0">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </span>
          </Link>
        </div>

      </div>
    </section>
  )
}