// components/service/ReviewsSection.tsx
export default function ReviewsSection({
  reviews
}: {
  reviews: Array<{ name: string; text: string; rating: number }>
}) {
  return (
    <section className="section py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <span key={j} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-slate-600 mb-4">&#34;{review.text}&#34;</p>
            <p className="font-semibold">— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}