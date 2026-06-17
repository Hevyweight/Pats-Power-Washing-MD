import Link from "next/link";

const REVIEWS = [
  {
    title: "Incredible Results",
    body: "Pat did an amazing job on our driveway and patio. Looked brand new after years of buildup. Highly recommend!",
    name: "Sarah M.",
    date: "October 2024",
    rating: 5,
  },
  {
    title: "Professional & Punctual",
    body: "Showed up on time, worked efficiently, and the house looks fantastic. Will definitely be calling again next season.",
    name: "James T.",
    date: "September 2024",
    rating: 5,
  },
  {
    title: "Best in the DMV",
    body: "I've tried other power washing companies but Pat's is on another level. The roof looks cleaner than when we bought the house.",
    name: "Linda K.",
    date: "August 2024",
    rating: 5,
  },
  {
    title: "Great Communication",
    body: "Easy to schedule, kept me updated throughout, and the results exceeded my expectations. 10/10 experience.",
    name: "Marcus R.",
    date: "July 2024",
    rating: 5,
  },
  {
    title: "Transformed Our Deck",
    body: "Our deck was covered in mold and algae. Pat removed everything and it looks absolutely incredible now.",
    name: "Patricia W.",
    date: "June 2024",
    rating: 5,
  },
  {
    title: "Worth Every Penny",
    body: "Fair pricing, exceptional work. Our driveway and sidewalks look completely transformed. Neighbors keep asking who we used.",
    name: "David C.",
    date: "May 2024",
    rating: 5,
  },
  {
    title: "Highly Recommend",
    body: "Pat is professional, thorough, and takes pride in his work. Our property has never looked better.",
    name: "Angela B.",
    date: "April 2024",
    rating: 5,
  },
  {
    title: "Fast & Efficient",
    body: "Got the whole house done in a few hours. Amazing transformation — the siding looked brand new.",
    name: "Kevin S.",
    date: "March 2024",
    rating: 5,
  },
  {
    title: "Repeat Customer",
    body: "This is my third time using Pat's Power Washing. Consistent quality every single time. Won't use anyone else.",
    name: "Nicole H.",
    date: "February 2024",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  return (
    <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center text-white text-sm font-bold shrink-0">
      {initials}
    </div>
  );
}

export default function ReviewsStrip() {
  return (
    <section className="bg-black py-20">
      <div className="section">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-16 h-px bg-brand-primary" />
          <p className="text-sm font-semibold uppercase tracking-widest text-white">
            Testimonials
          </p>
          <div className="w-16 h-px bg-brand-primary" />
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 flex flex-col gap-2 shadow-lg ${i >= 5 ? "hidden md:flex" : ""}`}
            >
              <StarRating rating={r.rating} />
              <h3 className="font-bold text-slate-900 text-lg">{r.title}</h3>
              <p className="text-slate-600 text-sm flex-1">{r.body}</p>
              <div className="flex items-center gap-3 mt-3">
                <Avatar name={r.name} />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{r.name}</p>
                  <p className="text-xs text-slate-400">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Reviews button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/reviews"
            className="inline-flex items-center justify-between gap- rounded-lg w-full max-w-[225] md:max-w-[300] px-5 pr-5 py-3 text-xl md:text-3xl font-bold transition-all duration-200 bg-brand-primary text-white hover:bg-brand-secondary"
          >
            More Reviews
            <span className="bg-white rounded-md p-2 shrink-0">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}