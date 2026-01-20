// app/components/blog/BlogFAQ.tsx
"use client"

import { useState } from "react"

export default function FAQAccordion({
  faqs
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="my-12 bg-slate-50 rounded-xl p-8 border border-slate-200">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition"
            >
              <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-brand-primary-dark transition-transform flex-shrink-0 ${
                  open === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {open === index && (
              <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}