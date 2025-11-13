export default function HowItWorks() {
  const steps = [
    { n: "1", t: "Request a free quote" },
    { n: "2", t: "Get a fast estimate" },
    { n: "3", t: "Schedule your clean" },
    { n: "4", t: "Enjoy the results" },
  ];
  return (
    <section className="section py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">How It Works</h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-xl2 border border-slate-100 p-5 shadow-soft bg-white">
            <div className="w-8 h-8 rounded-full bg-brand-secondary text-white flex items-center justify-center font-bold">
              {s.n}
            </div>
            <div className="mt-3 font-semibold">{s.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
