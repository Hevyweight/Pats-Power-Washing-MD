'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
  category?: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
  initialVisible?: number
  loadMoreIncrement?: number
}

export default function FAQAccordion({
  faqs,
  initialVisible = 5,
  loadMoreIncrement = 5
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(initialVisible)

  const visibleFAQs = faqs.slice(0, visibleCount)
  const hasMore = visibleCount < faqs.length

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + loadMoreIncrement, faqs.length))
  }

  return (
    <div className="space-y-3">

      {/* FAQ List */}
      {faqs.length > 0 ? (
        <>
          <div className="space-y-3">
            {visibleFAQs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 bg-[#1C1C1C] overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-bold text-white flex-1 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className="w-6 h-6 text-brand-primary" />
                  </div>
                </button>

                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-white/10 pt-4">
                      {faq.answer.split('\n').map((paragraph, i) => (
                        <p key={i} className="text-white/60 leading-relaxed mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center pt-6">
              <button
                onClick={loadMore}
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-bold bg-white text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200"
              >
                Load More Questions
              </button>
              <p className="text-white/40 text-sm mt-3">
                Showing {visibleCount} of {faqs.length} questions
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 border border-white/10 bg-[#1C1C1C]">
          <p className="text-white/40 text-lg">No questions found in this category.</p>
        </div>
      )}

    </div>
  )
}