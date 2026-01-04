import ElfsightGoogleReviews from "../components/GoogleReviews";

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
      </header>

      {/* Elfsight live Google reviews */}
      <div className="mt-8">
        <ElfsightGoogleReviews />
      </div>

      {/* Optional: keep your curated written reviews below */}
      {/* <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map(...)}
      </div> */}

      <section className="mt-10 border-t border-slate-200 pt-8">
        {/* your CTA section stays the same */}
      </section>
    </div>
  );
}
