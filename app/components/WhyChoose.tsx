export default function WhyChoose() {
  const items = [
    "Locally owned by a driven 20-year-old entrepreneur",
    "Fast response and on-time, professional service",
    "Transparent pricing and free quotes",
    "Quality equipment and careful property protection",
    "Serving Maryland, DC, and Virginia",
  ];
  return (
    <section className="bg-brand-light">
      <div className="section py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">Why Choose Pat’s Power Washing</h2>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-800">
          {items.map((t) => (
            <li key={t} className="bg-white rounded-xl2 border border-slate-100 px-4 py-3 shadow-soft">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
