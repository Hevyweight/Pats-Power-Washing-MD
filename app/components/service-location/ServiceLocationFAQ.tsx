// app/components/service-location/ServiceLocationFAQ.tsx
"use client"

import { useState } from "react"

export default function ServiceLocationFAQ({
  service,
  city,
  faqs
}: {
  service: string
  city: string
  faqs: Array<{ question: string; answer: string }>
}) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-slate-50 py-16">
      <div className="section max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {service} FAQ for {city} Residents
        </h2>
        <p className="text-center text-slate-600 mb-12">
          Common questions about {service.toLowerCase()} in {city}
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
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
                <div className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}