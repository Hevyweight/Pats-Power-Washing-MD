"use client";

import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function ContactSection() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="bg-linear-to-b from-white to-slate-50 py-16 md:py-24">
      <div className="section max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Serving College Park and the entire DMV area. Fill out the form or give us a call to get started.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Map & Contact Info */}
          <div className="space-y-6">
            {/* Google Map Embed - Lazy Loaded */}
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              {!mapLoaded ? (
                <button
                  onClick={() => setMapLoaded(true)}
                  className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-brand-dark to-brand-primary-dark text-white hover:opacity-90 transition-opacity group"
                >
                  <FaMapMarkerAlt className="text-6xl mb-4 text-brand-secondary-dark" />
                  <span className="text-xl font-semibold mb-2">View Map</span>
                  <span className="text-sm text-slate-200">College Park, MD</span>
                </button>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49601.38476244356!2d-76.96254727832031!3d38.98067990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de9b0be891%3A0x89bce0e9b7d0a6b0!2sCollege%20Park%2C%20MD!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="College Park, MD Location"
                ></iframe>
              )}
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-start gap-4">
                <div className="bg-brand-secondary-dark/10 p-3 rounded-lg">
                  <FaPhone className="text-brand-secondary-dark text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1">Phone</h3>
                  <a href="tel:2409684892" className="text-brand-primary hover:text-brand-primary-dark text-lg font-medium">
                    240-968-4892
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-start gap-4">
                <div className="bg-brand-secondary-dark/10 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-brand-secondary-dark text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1">Service Area</h3>
                  <p className="text-slate-600">
                    College Park, MD & surrounding DMV area
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-start gap-4">
                <div className="bg-brand-secondary-dark/10 p-3 rounded-lg">
                  <FaEnvelope className="text-brand-secondary-dark text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1">Email</h3>
                  <a href="mailto:info@patspowerwashing.com" className="text-brand-primary hover:text-brand-primary-dark">
                    pdugan1@patspowerwashing.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition"
                  placeholder="(240) 968-4892"
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-brand-dark mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition"
                >
                  <option value="">Select a service</option>
                  <option value="house-washing">House Washing</option>
                  <option value="driveway-cleaning">Driveway Cleaning</option>
                  <option value="patio-deck">Patio/Deck Cleaning</option>
                  <option value="commercial">Commercial Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-brand-secondary-dark hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Request Free Quote
              </button>

              <p className="text-sm text-slate-500 text-center">
                We typically respond within 1-2 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}