// components/FAQAccordion.tsx
'use client'

import { useState } from 'react'
import { ChevronDown, Search, X } from 'lucide-react'

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
  const [searchQuery, setSearchQuery] = useState('')

  // Filter FAQs based on search query
  const filteredFAQs = faqs.filter(faq => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.category?.toLowerCase().includes(query)
    )
  })

  const visibleFAQs = filteredFAQs.slice(0, visibleCount)
  const hasMore = visibleCount < filteredFAQs.length

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + loadMoreIncrement, filteredFAQs.length))
  }

  const clearSearch = () => {
    setSearchQuery('')
    setVisibleCount(initialVisible)
    setOpenIndex(null)
  }

  // Reset visible count when search changes
  const handleSearch = (value: string) => {
    setSearchQuery(value)
    setVisibleCount(initialVisible)
    setOpenIndex(null)
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm pb-6 -mt-2 pt-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="block w-full pl-12 pr-12 py-4 text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          )}
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Found <span className="font-semibold text-gray-900">{filteredFAQs.length}</span> question{filteredFAQs.length !== 1 ? 's' : ''} matching &#34;{searchQuery}&#34;
            </p>
            {filteredFAQs.length > 0 && (
              <button
                onClick={clearSearch}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>

      {/* FAQ List */}
      {filteredFAQs.length > 0 ? (
        <>
          <div className="space-y-3">
            {visibleFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  {/* Question */}
                  <span className="flex-1 pr-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    {faq.category && (
                      <span className="inline-block mt-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                    )}
                  </span>

                  {/* Chevron Icon */}
                  <div className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  </div>
                </button>

                {/* Answer - Animated */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index 
                      ? 'max-h-[1000px] opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-5 pt-2">
                    <div className="text-gray-700 leading-relaxed prose prose-sm max-w-none">
                      {faq.answer.split('\n').map((paragraph, i) => (
                        <p key={i} className="mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center pt-4">
              <button
                onClick={loadMore}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Load More Questions</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Showing {visibleCount} of {filteredFAQs.length} questions
              </p>
            </div>
          )}
        </>
      ) : (
        // No results state
        <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No questions found
          </h3>
          <p className="text-gray-600 mb-6">
            Try a different search term or{' '}
            <button
              onClick={clearSearch}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              clear your search
            </button>
          </p>
        </div>
      )}
    </div>
  )
}