export const metadata = { title: "Reviews | Pat’s Power Washing" };

type Review = {
  n: string;
  t: string;
};

const reviews: Review[] = [
  {
    n: "Jason M., Bethesda, MD",
    t: "Our siding looks brand new. Pat’s team was professional from start to finish and took real pride in their work.",
  },
  {
    n: "Maria R., Laurel, MD",
    t: "We received a quote the same day, they arrived on time, and our driveway is completely spotless. Highly recommend.",
  },
  {
    n: "Brian C., Washington, DC",
    t: "Affordable, efficient, and detail-oriented. The difference in our steps and walkway was noticeable right away.",
  },
  {
    n: "Danielle P., Silver Spring, MD",
    t: "Great communication, clear pricing, and excellent results on our patio and fence. We’ll be using them again.",
  },
  {
    n: "Tariq H., Alexandria, VA",
    t: "They were careful around our landscaping and did a thorough job on the house wash. The curb appeal upgrade is huge.",
  },
  {
    n: "Kelly S., Arlington, VA",
    t: "Professional, respectful, and very neat. Our front walk, driveway, and steps all look like they were just poured.",
  },
  {
    n: "Neighborhood HOA Board, Bowie, MD",
    t: "Pat’s Power Washing handled multiple homes in one day and kept everything organized. Homeowners were very pleased.",
  },
  {
    n: "Jordan L., Small Business Owner, DC",
    t: "Our storefront entryway went from dull and stained to bright and welcoming. The difference is night and day.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="section py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">
          Customer Reviews
        </h1>
        <p className="mt-3 text-slate-700">
          Property owners across the DMV trust Pat&apos;s Power Washing for
          professional exterior cleaning and consistent results. Here&apos;s what
          some of our recent clients have to say.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Average feedback highlights: clear communication, on-time service, and
          visible curb appeal improvements on every job.
        </p>
      </header>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r) => (
          <figure
            key={r.n}
            className="rounded-xl2 border border-slate-100 bg-white p-5 shadow-soft flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 text-amber-400 text-sm mb-2">
                <span>★★★★★</span>
              </div>
              <blockquote className="text-slate-800 text-sm md:text-[15px] leading-relaxed">
                {r.t}
              </blockquote>
            </div>
            <figcaption className="mt-4 text-slate-600 text-sm font-medium">
              — {r.n}
            </figcaption>
          </figure>
        ))}
      </div>

      <section className="mt-10 border-t border-slate-200 pt-8">
        <h2 className="text-xl font-semibold text-brand-dark">
          Ready to become our next 5-star review?
        </h2>
        <p className="mt-2 text-slate-700 max-w-2xl">
          Whether you need a house wash, driveway cleaning, or a storefront
          refresh, we&apos;re here to help. Reach out today for a fast, free quote.
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
