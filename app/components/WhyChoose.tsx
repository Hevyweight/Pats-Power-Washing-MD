export default function WhyChoose() {
  const items = [
    "Liscened and insured in the DMV",
    "Professional exterior cleaning for homes and small businesses",
    "Fast response times and reliable scheduling",
    "Transparent pricing and free, no-obligation quotes",
    "Commercial-grade equipment and safe cleaning methods",
    "Respectful, detail-focused team on every job",
  ];

  return (
    <section className="bg-brand-light">
      <div className="section py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-primary">
              Why Choose Us
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-brand-dark">
              Dependable Exterior Cleaning You Can Count On
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-700 max-w-xl">
              We focus on consistent, high-quality results, clear communication, and
              protecting your property on every job — from single-family homes to
              small commercial properties.
            </p>
          </div>
        </div>

        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-800">
          {items.map((t) => (
            <li
              key={t}
              className="bg-white rounded-xl2 border border-slate-100 px-4 py-4 shadow-soft flex gap-3"
            >
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-primary text-xs font-bold">
                ✓
              </span>
              <span className="translate-y-1 text-sm md:text-[15px] leading-snug">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
