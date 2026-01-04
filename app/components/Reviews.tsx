import Link from 'next/link';
import GoogleReviews from './GoogleReviews';

export default function Reviews() {
  return (
    <section id="reviews-67" className="py-16 md:py-20 lg:py-24 xl:py-28 bg-[#f7f7f7]">
      <div className="w-full max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="w-full mb-12 md:mb-16">
          {/* Topper */}
          <span className="text-[0.8125rem] leading-[1.2em] uppercase tracking-[0.1em] font-bold text-[var(--primary)] mb-1 block">
            Customer Reviews
          </span>
          
          {/* Title */}
          <h2 className="text-[2.4375rem] leading-[1.2115384615] font-black text-[var(--headerColor)] mb-4 max-w-[39.375rem] lg:text-[3.0625rem] lg:leading-[1.2244897959]">
            See What Our Customers Are Saying
          </h2>
          
          {/* Text */}
          <p className="text-base leading-[1.5em] text-[var(--bodyTextColor)] w-full max-w-[51.8125rem]">
            Don&apos;t just take our word for it. Read real reviews from homeowners and businesses across Maryland, DC, and Virginia who trust Pat&apos;s Power Washing to keep their properties looking pristine.
          </p>
        </div>

        {/* Google Reviews Component */}
        <GoogleReviews />

        {/* Button */}
        <div className="text-center mt-12">
          <Link 
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base leading-[3.125rem] font-bold text-center min-w-[9.375rem] px-6 py-0 text-white bg-[var(--primary)] rounded-lg relative z-10 transition-colors duration-300 before:content-[''] before:absolute before:block before:h-full before:w-0 before:bg-black before:opacity-10 before:top-0 before:left-0 before:z-[-1] before:rounded-lg before:transition-all before:duration-300 hover:before:w-full hover:before:opacity-100"
          >
            Leave Us a Review
          </Link>
        </div>
      </div>
    </section>
  );
}