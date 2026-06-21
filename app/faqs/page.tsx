'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { faqs } from "@/data/faqs"
import FAQAccordion from "../components/FAQAccordion"

const categories = [
  { label: "All", value: "all" },
  { label: "Pricing", value: "Pricing" },
  { label: "Services", value: "Services" },
  { label: "Technical", value: "Technical" },
  { label: "Scheduling", value: "Scheduling" },
  { label: "Process", value: "Process" },
  { label: "Coverage", value: "Coverage" },
  { label: "Business", value: "Business" },
  { label: "Safety", value: "Safety" },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory)

  return (
  <div className="bg-black min-h-screen">

    {/* Header */}
    <section className="bg-black pt-40 pb-16">
      <div className="section">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-brand-primary" />
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Support</p>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Got <span className="text-brand-primary">Questions?</span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl">
          All Your Questions About Professional Power Washing in the DMV Answered.
        </p>
      </div>
    </section>

      {/* Category Filter Bar */}
      <section className="bg-black sticky top-16 z-30 py-4 border-b border-white/10">
        <div className="section">
          <div className="flex flex-wrap justify-center gap-3 sm:flex-nowrap sm:overflow-x-auto sm:scrollbar-hide sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 h-12 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 rounded-md ${
                  activeCategory === cat.value
                    ? 'bg-brand-primary text-white'
                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Count */}
      <section className="bg-black pt-12 pb-4">
        <div className="section">
          <p className="text-white/40 text-sm">
            Showing <span className="text-white">{filtered.length}</span> questions
            {activeCategory !== "all" && (
              <> in <span className="text-brand-primary">{activeCategory}</span></>
            )}
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-black py-8">
        <div className="section max-w-4xl">
          <FAQAccordion
            faqs={filtered}
            initialVisible={5}
            loadMoreIncrement={5}
          />
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-[#1C1C1C] py-16">
        <div className="section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "View Services", href: "/services", description: "See everything we offer" },
              { label: "See Our Work", href: "/gallery", description: "Before & after results" },
              { label: "Read Reviews", href: "/reviews", description: "What customers are saying" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-black/40 border border-white/10 p-6 flex items-center justify-between group transition-colors duration-300"
              >
                <div>
                  <p className="text-white font-extrabold text-lg">{item.label}</p>
                  <p className="text-white/40 text-sm mt-1">{item.description}</p>
                </div>
                <svg className="w-5 h-5 text-brand-primary transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-16">
        <div className="section text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Still Have Questions?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            Reach out directly. We&apos;re happy to walk you through anything before you book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-2xl font-bold bg-white text-brand-primary hover:bg-black hover:text-white transition-all duration-200"
            >
              Send a Message
            </Link>
            <a
              href="tel:12409684892"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-2xl font-bold bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary transition-all duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}