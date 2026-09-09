import { BASE_URL } from "@/lib/constants";
import Link from "next/link";
import Script from "next/script";


export const metadata = {
  title: "Reviews | Pat's Power Washing - Maryland, DC & Virginia",
  description: "Read what our customers have to say about our pressure washing services in Maryland, Washington DC, and Northern Virginia.",
  alternates: {
    canonical: `${BASE_URL}/reviews`,
  }, 
};

export default function ReviewsPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* Header */}
      <section className="bg-black pt-40">
        <div className="section text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-brand-primary" />
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
              Testimonials
            </p>
            <div className="w-16 h-px bg-brand-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
           Pat&apos;s Power Washing <span className="text-brand-primary">Reviews</span>
          </h1>
        </div>
      </section>

      {/* Elfsight Widget */}
      <section className="bg-black py-12">
        <div className="section">
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-0c174e6d-5216-4bb1-afc3-c1eb637bb2bf" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-20">
        <div className="section text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation estimate. We serve all of Maryland, DC, and Northern Virginia.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-4xl font-bold bg-white text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200"
          >
            Get A Free Quote
          </Link>
        </div>
      </section>

    </div>
  );
}