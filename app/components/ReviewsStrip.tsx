const REVIEWS = [
  { name: "Sarah L., Rockville, MD", text: "On time, professional, and our siding looks brand new." },
  { name: "Tom K., Arlington, VA", text: "Deck hadn’t been cleaned in years—now it’s ready for summer." },
  { name: "Ashley L., Bowie, MD", text: "Fast quote, fair price, excellent results. Highly recommend." },
];

export default function ReviewsStrip() {
  return (
    <section className="bg-white">
      <div className="section py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">What DMV Customers Say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {REVIEWS.map((r, i) => (
            <figure key={i} className="rounded-xl2 border border-slate-100 p-5 shadow-soft bg-brand-light/40">
              <blockquote className="text-slate-800">{r.text}</blockquote>
              <figcaption className="mt-3 text-slate-600 text-sm">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
