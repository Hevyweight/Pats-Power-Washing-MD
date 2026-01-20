// app/faq/page.tsx
import FAQAccordion from '../components/FAQAccordion'
import { faqs } from '@/data/faqs'
import Link from 'next/link'

export const metadata = {
  title: "FAQ - Frequently Asked Questions | Pat's Power Washing",
  description: "Find answers to common questions about power washing services, pricing, scheduling, and more. Serving the DMV area with professional exterior cleaning.",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* FAQ Hero */}
      <section
        className="relative bg-gradient-to-b from-brand-dark to-brand-primary-dark text-white py-20 overflow-hidden"
      >
        {/* Subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg mb-6">
              Frequently Asked Questions
            </h1>

            <p className="text-lg md:text-xl text-slate-200 drop-shadow mb-8">
              Everything you need to know about professional power washing services in the DMV area.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-brand-secondary-dark text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg"
              >
                Get Free Quote
              </Link>
              
              <a
                href="tel:2409684892"
                className="inline-block bg-white/10 border border-white/30 px-8 py-3 rounded-full font-semibold text-white hover:bg-white/20 transition-all shadow-lg"
              >
                Call Now
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* Search/Filter Section (Optional - for future enhancement) */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            <span className="font-semibold text-gray-900">{faqs.length} questions</span> answered below. 
            Can&#39;t find what you&#39;re looking for?{' '}
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact me directly →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion 
            faqs={faqs} 
            initialVisible={5}
            loadMoreIncrement={5}
          />
        </div>
      </section>

      {/* Category Navigation (Quick Links) */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Pricing', 'Services', 'Technical', 'Scheduling', 'Process', 'Coverage', 'Business', 'Safety'].map((category) => (
              <div
                key={category}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer border border-gray-200"
              >
                <p className="font-medium text-gray-900">{category}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {faqs.filter(f => f.category === category).length} questions
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            I&#39;m here to help! Get in touch and I&#39;ll answer any questions you have about your specific project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send a Message
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-800 transition-all duration-300 border-2 border-white/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                View Services
              </h3>
              <p className="text-gray-600 mb-4">
                Explore all the power washing services I offer
              </p>
              <Link
                href="/services"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                See Services →
              </Link>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                View Gallery
              </h3>
              <p className="text-gray-600 mb-4">
                See before & after photos of my work
              </p>
              <Link
                href="/gallery"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                See Gallery →
              </Link>
            </div>

            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Read Reviews
              </h3>
              <p className="text-gray-600 mb-4">
                See what my customers are saying
              </p>
              <Link
                href="/reviews"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Read Reviews →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}