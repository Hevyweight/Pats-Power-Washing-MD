export const metadata = {
  title: "About | Pat’s Power Washing",
};

export default function AboutPage() {
  return (
    <div className="section py-12 space-y-10">
      {/* Intro */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">
          About Pat&apos;s Power Washing
        </h1>
        <p className="mt-4 text-slate-700 max-w-2xl">
          Pat&apos;s Power Washing is a locally owned exterior cleaning company serving
          homeowners, landlords, and small businesses throughout Maryland, DC, and
          Northern Virginia. We focus on delivering consistent, high-quality pressure
          washing and soft washing with professional service from the first call to
          the final rinse.
        </p>
        <p className="mt-3 text-slate-700 max-w-2xl">
          Every property we work on is treated with respect. That means clear
          communication before we arrive, careful preparation around your home or
          building, and a thorough cleanup when the job is done—so you&apos;re left
          with a noticeably cleaner, brighter exterior and nothing to worry about.
        </p>
      </section>

      {/* Mission */}
      <section>
        <h2 className="text-2xl font-semibold text-brand-dark">Our Mission</h2>
        <p className="mt-2 text-slate-700 max-w-2xl">
          Our mission is to provide reliable, professional exterior cleaning that
          restores curb appeal, helps protect surfaces from long-term damage, and
          gives every client confidence in the way their property looks and feels.
        </p>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-2xl font-semibold text-brand-dark">Our Values</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2 max-w-2xl">
          <li>
            <span className="font-semibold">Professionalism</span> – Respectful
            communication, clear expectations, and dependable scheduling.
          </li>
          <li>
            <span className="font-semibold">Quality Work</span> – Commercial-grade
            equipment, safe cleaning methods, and attention to detail on every job.
          </li>
          <li>
            <span className="font-semibold">Trust</span> – Honest recommendations,
            straightforward pricing, and work that matches what we promise.
          </li>
          <li>
            <span className="font-semibold">Community</span> – Proud to serve
            homeowners and local businesses across the DMV area.
          </li>
        </ul>
      </section>

      {/* Social proof / Instagram */}
      <section className="rounded-xl2 bg-brand-soft/40 p-6 max-w-2xl">
        <h2 className="text-xl font-semibold text-brand-dark">
          See Our Work in Action
        </h2>
        <p className="mt-2 text-slate-700">
          We regularly share before-and-after photos, reels, and project walkthroughs
          so you can see the quality of our work and the type of results to expect.
        </p>
        <div className="mt-3 space-y-1 text-sm">
          <a
            href="https://instagram.com/patspowerwashing_dmv"
            target="_blank"
            rel="noreferrer"
            className="text-brand-primary underline underline-offset-4"
          >
            @patspowerwashing_dmv
          </a>
          <br />
          <a
            href="https://instagram.com/pat_dugan37"
            target="_blank"
            rel="noreferrer"
            className="text-brand-primary underline underline-offset-4"
          >
            @pat_dugan37
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 pt-8">
        <h2 className="text-xl font-semibold text-brand-dark">
          Ready to schedule exterior cleaning?
        </h2>
        <p className="mt-2 text-slate-700 max-w-2xl">
          Tell us what you&apos;d like cleaned, and we&apos;ll provide a clear,
          no-obligation quote and help you find a time that works best.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
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
