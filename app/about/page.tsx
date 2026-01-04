export const metadata = {
  title: "About | Pat's Power Washing",
};

import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="section py-12 space-y-10">
      {/* Intro with Image */}
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">
            About Pat&apos;s Power Washing
          </h1>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Pat&apos;s Power Washing is a locally owned exterior cleaning company 
            built from the ground up by a University of Maryland Landscape Architecture 
            student with a drive to design, build, and create a better future. I&apos;m 
            currently studying Landscape Architecture at UMD (Class of 2027), and this 
            business is both my craft and my foundation — a way to learn, grow, and work 
            toward long-term goals while serving the communities I call home.
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            What started as a small side job has grown into a dependable pressure washing 
            service for homeowners, landlords, and small businesses across Maryland, DC, and 
            Northern Virginia. Every driveway, deck, or storefront I clean helps me move closer 
            to my two major milestones:
          </p>

          <ul className="mt-4 ml-8 space-y-2 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-brand-primary mt-1">•</span>
              <span className="leading-relaxed">
                <strong className="font-semibold text-brand-dark">Purchasing my first home after graduation</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-primary mt-1">•</span>
              <span className="leading-relaxed">
                <strong className="font-semibold text-brand-dark">Growing into a build-and-design landscape company</strong>
              </span>
            </li>
          </ul>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Because of that, I take every job personally. When you hire me, you&apos;re not 
            getting a rushed crew — you&apos;re getting a motivated owner-operator with a background 
            in design, an eye for detail, and a genuine commitment to making properties look their 
            best. I treat each home or building with care: clear communication, careful preparation, 
            and a spotless cleanup from the first call to the final rinse.
          </p>
        </div>

        {/* Image on the right */}
        <div className="relative h-[400px] md:h-[600px] overflow-hidden shadow-lg">
            <Image
              className="h-full w-full object-cover"
              src="/images/about.jpg"
              alt="Power washing back steps before and after"
              fill
              sizes="100vw"
            />
        </div>
      </section>

      {/* Mission */}
      <section>
        <h2 className="text-2xl font-semibold text-brand-dark">My Mission</h2>
        <p className="mt-2 text-slate-700 max-w-2xl">
          To provide reliable, detail-oriented exterior cleaning that restores curb 
          appeal and protects surfaces — while building the foundation for my future: 
          homeownership, financial independence, and creating a build-and-design 
          landscape company that merges design, construction, and sustainable outdoor
          spaces.
        </p>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-2xl font-semibold text-brand-dark">My Values</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2 max-w-2xl">
          <li>
            <span className="font-semibold">Professionalism</span> – Prepared, 
            responsive, and respectful on every job.
          </li>
          <li>
            <span className="font-semibold">Quality Work</span> – Commercial-grade equipment, 
            safe techniques, and a designer&#39;s eye for detail.
          </li>
          <li>
            <span className="font-semibold">Trust</span> – Honest recommendations, 
            transparent pricing, and results that match what I promise.
          </li>
          <li>
            <span className="font-semibold">Growth</span> – Every project supports my education, 
            my long-term goals, and the company I&#39;m working to build.
          </li>
        </ul>
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
          <Link
            href="/contact"
            className="rounded-xl2 px-5 py-3 bg-brand-primary text-white font-semibold shadow-soft hover:opacity-95"
          >
            Get a Free Quote
          </Link>
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
