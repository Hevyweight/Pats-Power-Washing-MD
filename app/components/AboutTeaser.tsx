import CTAButtons from "./ctaButtons";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="section py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Meet Pat</h2>
          <p className="mt-4 text-slate-700">
            I’m Pat, a 20-year-old owner who built this business on quality, reliability, and hustle.
            I post real job videos and before/afters so you can see exactly what to expect.
          </p>
          <p className="mt-3 text-slate-700">
            When you book with me, you get clear communication, careful prep, and results you’ll notice immediately.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <CTAButtons />
            <Link href="/about" className="underline text-brand-primary hover:opacity-80">More about Pat →</Link>
          </div>
        </div>
        <div className="rounded-xl2 bg-brand-soft/40 p-6">
          <div className="text-sm text-slate-700">
            <div className="font-semibold">Follow the transformations:</div>
            <a
              className="block text-brand-primary underline"
              href="https://instagram.com/patspowerwashing_dmv"
              target="_blank" rel="noreferrer"
            >
              @patspowerwashing_dmv
            </a>
            <a
              className="block text-brand-primary underline"
              href="https://instagram.com/pat_dugan37"
              target="_blank" rel="noreferrer"
            >
              @pat_dugan37
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
