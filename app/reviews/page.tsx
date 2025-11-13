export const metadata = { title: "Reviews | Pat’s Power Washing" };

export default function ReviewsPage() {
  const reviews = [
    { n: "Jason M., Bethesda, MD", t: "Siding looks brand new. Pat takes real pride in his work." },
    { n: "Maria R., Laurel, MD", t: "Quote the same day. On time and our driveway is spotless." },
    { n: "Brian C., Washington, DC", t: "Affordable, efficient, quality service—excellent experience." },
  ];
  return (
    <div className="section py-12">
      <h1 className="text-3xl font-bold text-brand-dark">Customer Reviews</h1>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r) => (
          <figure key={r.n} className="rounded-xl2 border border-slate-100 bg-white p-5 shadow-soft">
            <blockquote className="text-slate-800">{r.t}</blockquote>
            <figcaption className="mt-3 text-slate-600 text-sm">— {r.n}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
