'use client'

import Image from 'next/image'
import Script from 'next/script'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import JobberForm from '../components/contact/JobberForm'

const services = [
  'House Washing',
  'Driveway Cleaning',
  'Roof Cleaning',
  'Deck & Fence Cleaning',
  'Pressure Washing',
  'Commercial Services',
  'Not Sure / Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name === 'firstName') {
      const lastName = form.name.split(' ').slice(1).join(' ')
      setForm({ ...form, name: `${value} ${lastName}`.trim() })
    } else if (name === 'lastName') {
      const firstName = form.name.split(' ')[0]
      setForm({ ...form, name: `${firstName} ${value}`.trim() })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const [firstName, ...lastParts] = form.name.split(' ')
    const lastName = lastParts.join(' ')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: form.email,
          phone: form.phone,
          address: form.address,
          city: form.city,
          state: form.state,
          zip: form.zip,
          service: form.service,
          message: form.message,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please try again or call us directly.')
      }
    } catch (err) {
      alert('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-black min-h-screen">

      {/* Hero */}
      <section className="relative h-[90vh] flex flex-col overflow-hidden pt-20">
        <Image
          src="/images/v-2/contact.jpg"
          alt="Contact Pat's Power Washing"
          fill
          className="object-cover object-[center_91%]"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
            Get In Touch
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            Free Estimates for the <span className="text-brand-primary">DMV</span>
          </h2>
        </div>
      </section>

      {/* Main Section */}
      <section className="bg-black py-20">
        <div className="flex flex-col lg:flex-row items-start">

            {/* Left */}
            <div className="lg:w-1/2 lg:pr-16 pl-4 sm:pl-6 lg:pl-8 xl:pl-16 pb-12 lg:pb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-brand-primary" />
                <p className="text-sm font-semibold uppercase tracking-widest text-white/70">The Process</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Ready to Get <span className="text-brand-primary">Started?</span>
              </h2>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                <span className="text-brand-primary">Here&apos;s</span> What to Expect
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Looking to get your property cleaned up? Fill out the form and we&apos;ll get back to you within 24 hours with a free, no-obligation estimate. No pressure, no hassle.
              </p>

              {/* Video */}
              <div className="aspect-video w-full mb-8 bg-[#1C1C1C]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                  title="What to Expect from Pat's Power Washing"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Bullets */}
              <ul className="space-y-4 mb-12">
                {[
                  "Fill out the form and we'll respond within 24 hours",
                  "Need immediate help? Call us directly",
                  "We serve all of Maryland, DC, and Northern Virginia",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                    <p className="text-white/60">{item}</p>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href="tel:12409684892"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-200">
                    <svg className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Phone</p>
                    <p className="text-white font-bold text-lg">(240) 968-4892</p>
                  </div>
                </a>
                <a
                  href="mailto:pdugan1@patspowerwashing.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-200">
                    <svg className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Email</p>
                    <p className="text-white font-bold">pdugan1@patspowerwashing.com</p>
                  </div>
                </a>
              </div>
            </div>

          {/* Right — Jobber Form */}
          <div className="w-full lg:w-1/2 bg-brand-primary p-8 md:p-12 rounded-l-3xl lg:sticky lg:top-24 lg:min-h-screen">
            <h3 className="text-3xl font-extrabold text-white mb-2">
              Request a Free Estimate
            </h3>
            <p className="text-white/70 mb-8">We&apos;ll get back to you within 24 hours.</p>
            <JobberForm />
          </div>

          </div>
              {/* Reviews Widget */}
              <div className="mt-16">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-16 h-px bg-brand-primary" />
                  <p className="text-sm font-semibold uppercase tracking-widest text-white">
                    Testimonials
                  </p>
                  <div className="w-16 h-px bg-brand-primary" />
                </div>
                <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
                <div className="elfsight-app-2bb2ce54-87dd-4611-bccd-0ddd3ac9d171" data-elfsight-app-lazy></div>
        </div>
      </section>

    </div>
  )
}