'use client'

import { useState } from 'react'

const services = [
  'House Washing',
  'Driveway Cleaning',
  'Roof Cleaning',
  'Deck & Fence Cleaning',
  'Pressure Washing',
  'Commercial Services',
  'Not Sure / Other',
]

export default function CustomContactForm() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    // TODO: wire up to Resend or Jobber API
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-white/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-2xl font-extrabold text-white mb-2">We got it!</h4>
        <p className="text-white/70">Pat will be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Name row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="text"
            name="firstName"
            value={form.name.split(' ')[0]}
            onChange={handleChange}
            required
            placeholder=" "
            className="peer w-full bg-transparent border-b-2 border-white/40 focus:border-white outline-none pt-5 pb-2 text-white placeholder-transparent transition-colors duration-200"
          />
          <label className="absolute left-0 top-0 text-white/50 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70">
            First Name
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            name="lastName"
            value={form.name.split(' ').slice(1).join(' ')}
            onChange={handleChange}
            required
            placeholder=" "
            className="peer w-full bg-transparent border-b-2 border-white/40 focus:border-white outline-none pt-5 pb-2 text-white placeholder-transparent transition-colors duration-200"
          />
          <label className="absolute left-0 top-0 text-white/50 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70">
            Last Name
          </label>
        </div>
      </div>

      {/* Email */}
      <div className="relative">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder=" "
          className="peer w-full bg-transparent border-b-2 border-white/40 focus:border-white outline-none pt-5 pb-2 text-white placeholder-transparent transition-colors duration-200"
        />
        <label className="absolute left-0 top-0 text-white/50 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70">
          Email Address
        </label>
      </div>

      {/* Phone */}
      <div className="relative">
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder=" "
          className="peer w-full bg-transparent border-b-2 border-white/40 focus:border-white outline-none pt-5 pb-2 text-white placeholder-transparent transition-colors duration-200"
        />
        <label className="absolute left-0 top-0 text-white/50 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70">
          Phone Number
        </label>
      </div>

      {/* Street Address */}
      <div className="relative">
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          placeholder=" "
          className="peer w-full bg-transparent border-b-2 border-white/40 focus:border-white outline-none pt-5 pb-2 text-white placeholder-transparent transition-colors duration-200"
        />
        <label className="absolute left-0 top-0 text-white/50 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70">
          Street Address
        </label>
      </div>

      {/* City / State / ZIP */}
      <div className="grid grid-cols-3 gap-4">
        <div className="relative">
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
            placeholder=" "
            className="peer w-full bg-transparent border-b-2 border-white/40 focus:border-white outline-none pt-5 pb-2 text-white placeholder-transparent transition-colors duration-200"
          />
          <label className="absolute left-0 top-0 text-white/50 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70">
            City
          </label>
        </div>
        <div className="relative">
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-white/40 focus:border-white outline-none pt-5 pb-2 text-white transition-colors duration-200 appearance-none"
          >
            <option value="" disabled className="text-black">State</option>
            {['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'].map((s) => (
              <option key={s} value={s} className="text-black">{s}</option>
            ))}
          </select>
          <label className="absolute left-0 top-0 text-white/50 text-sm">
            State
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            name="zip"
            value={form.zip}
            onChange={handleChange}
            required
            placeholder=" "
            className="peer w-full bg-transparent border-b-2 border-white/40 focus:border-white outline-none pt-5 pb-2 text-white placeholder-transparent transition-colors duration-200"
          />
          <label className="absolute left-0 top-0 text-white/50 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70">
            ZIP
          </label>
        </div>
      </div>

      {/* Service */}
      <div className="relative">
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="w-full bg-transparent border-b-2 border-white/40 focus:border-white outline-none pt-5 pb-2 text-white transition-colors duration-200 appearance-none"
        >
          <option value="" disabled className="text-black">Select a service</option>
          {services.map((s) => (
            <option key={s} value={s} className="text-black">{s}</option>
          ))}
        </select>
        <label className="absolute left-0 top-0 text-white/50 text-sm">
          Service Needed
        </label>
        <svg className="absolute right-0 bottom-3 w-4 h-4 text-white/50 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder=" "
          className="peer w-full bg-transparent border-b-2 border-white/40 focus:border-white outline-none pt-5 pb-2 text-white placeholder-transparent transition-colors duration-200 resize-none"
        />
        <label className="absolute left-0 top-0 text-white/50 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-white/70">
          Tell us about your project
        </label>
      </div>

      {/* SMS Consent */}
      <p className="text-white/30 text-xs leading-relaxed">
        By providing your phone number, you agree to receive visit reminders and other transactional text messages from Pat&apos;s Power Washing. Reply STOP to cancel. Message and data rates may apply.
      </p>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white text-brand-primary font-extrabold text-lg py-4 hover:bg-black hover:text-white transition-colors duration-200 disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Get My Free Estimate'}
      </button>

    </form>
  )
}