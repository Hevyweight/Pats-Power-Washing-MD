import Link from "next/link";
import Image from "next/image";

const steps = [
  { n: "1", t: "Request a free quote", desc: "Fill out our simple online form or give us a call." },
  { n: "2", t: "Get a fast estimate", desc: "We'll get back to you quickly with a clear, upfront price." },
  { n: "3", t: "Schedule your clean", desc: "Pick a time that works for you — we show up on time, every time." },
  { n: "4", t: "Enjoy the results", desc: "Sit back and watch your property transform." },
];

export default function OurProcess() {
  return (
    <section className="bg-black overflow-hidden py-8">
      <div className="flex flex-col md:flex-row-reverse items-stretch min-h-[800px]">

        {/* Right: Image (reversed so it's on the right) */}
        <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[500px] shrink-0 order-last md:order-first">
          <Image
            src="/images/v-2/before.jpg"
            alt="Pat's Power Washing process"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            className="object-cover object-center rounded-l-4xl"
          />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-extrabold italic text-3xl md:text-5xl [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            Before
          </span>
        </div>

        {/* Left: Copy card */}
        <div className="flex-1 flex items-center py-12 md:-mr-24 md:my-12 z-10">
          <div className="bg-brand-gray rounded-r-3xl p-8 md:p-12 shadow-2xl min-h-[700px] flex flex-col justify-center w-full items-center text-center">

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-1 mb-4">
              <div className="w-20 h-px bg-brand-primary" />
              <p className="text-lg font-semibold uppercase tracking-widest text-white italic">
                Our Process
              </p>
              <div className="w-20 h-px bg-brand-primary" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Simple. Fast. <br /> <span className="text-brand-primary">Done Right.</span>
            </h2>

            {/* Subheading */}
            <p className="text-white font-semibold text-lg mb-6">
              Four steps to a cleaner property.
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-5 mb-10">
              {steps.map((s) => (
                <div key={s.n} className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-brand-primary text-white flex items-center justify-center font-extrabold text-lg">
                    {s.n}
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{s.t}</p>
                    <p className="text-white/60 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-between rounded-lg w-full max-w-[400] md:max-w-[525] gap-2 md:gap-3 pl-3 pr-3 py-3 text-xl md:text-3xl font-bold transition-all duration-200 bg-white text-brand-primary hover:bg-brand-primary hover:text-white"
              >
                Learn More About Our Process
                <span className="bg-brand-primary rounded-md p-2 shrink-0">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}