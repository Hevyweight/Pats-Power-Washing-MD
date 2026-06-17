import Link from "next/link";
import Image from "next/image";

export default function MiniPortfolio() {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto w-full md:w-[70%]">

        {/* Image — full width, no overlays */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
          <Image
            src="/images/v-2/after.jpg"
            alt="After power washing"
            fill
            sizes="70vw"
            quality={85}
            className="object-cover object-center"
          />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-extrabold italic text-4xl md:text-5xl [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            After
          </span>
        </div>

        {/* Button below image */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-between rounded-lg w-full max-w-[300] md:max-w-[400] px-5 pr-5 py-3 text-xl md:text-3xl font-bold transition-all duration-200 bg-white text-brand-primary hover:bg-brand-primary hover:text-white"
          >
            See Our Full Portfolio
            <span className="bg-brand-primary rounded-md p-2 shrink-0">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}