import Link from "next/link";

const SERVICES = [
  {title: "House Soft Wash",blurb:"Gentle, low-pressure soft washing that safely removes built-up dirt, mold, and mildew so your siding looks freshly cleaned again."},
  { title: "Driveways & Sidewalks", blurb: "Deep clean oil, tire marks, and buildup for a spotless entrance." },
  { title: "Patios, Porches & Decks", blurb: "Make outdoor spaces clean, safe, and ready to enjoy." },
  { title: "Fence Cleaning", blurb: "Restore brightness and protect surfaces from premature wear." },
  { title: "Roof Soft Washing", blurb: "Low-pressure clean to remove algae and streaks without damage." },
  { title: "Storefronts & Entryways", blurb: "Light commercial cleaning for a great first impression." },
];

export default function ServicesGrid() {
  return (
    <section className="bg-brand-light/60">
      <div className="section py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Services</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-white rounded-xl2 border border-slate-100 p-5 shadow-soft">
              <h3 className="font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{s.blurb}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/services" className="inline-block underline text-brand-dark hover:text-brand-primary-dark transition">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}