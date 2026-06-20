"use client";

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaStar, FaTools, FaBookOpen } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import JobberForm from "./JobberForm";

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
              {/* Phone */}
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

              {/* Email */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-start gap-4">
                <div className="bg-brand-secondary-dark/10 p-3 rounded-lg">
                  <FaEnvelope className="text-brand-secondary-dark text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1">Email</h3>
                  <a href="mailto:pdugan1@patspowerwashing.com" className="text-brand-primary hover:text-brand-primary-dark">
                    pdugan1@patspowerwashing.com
                  </a>
                </div>
              </div>

              {/* Services */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-start gap-4">
                <div className="bg-brand-secondary-dark/10 p-3 rounded-lg">
                  <FaTools className="text-brand-secondary-dark text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-2">Services</h3>
                  <div className="flex flex-col gap-1">
                    <Link href="/services/house-washing" className="text-brand-primary hover:text-brand-primary-dark text-sm">House Washing</Link>
                    <Link href="/services/pressure-washing" className="text-brand-primary hover:text-brand-primary-dark text-sm">Pressure Washing</Link>
                    <Link href="/services/commercial-pressure-washing" className="text-brand-primary hover:text-brand-primary-dark text-sm">Commercial Services</Link>
                    <Link href="/services" className="text-brand-secondary-dark hover:opacity-80 text-sm font-semibold mt-1">View All Services →</Link>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-start gap-4">
                <div className="bg-brand-secondary-dark/10 p-3 rounded-lg">
                  <FaStar className="text-brand-secondary-dark text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1">Reviews</h3>
                  <p className="text-slate-600 text-sm mb-2">See what our customers are saying.</p>
                  <Link href="/reviews" className="text-brand-secondary-dark hover:opacity-80 text-sm font-semibold">Read Reviews →</Link>
                </div>
              </div>

              {/* Blog */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 flex items-start gap-4">
                <div className="bg-brand-secondary-dark/10 p-3 rounded-lg">
                  <FaBookOpen className="text-brand-secondary-dark text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1">Blog</h3>
                  <p className="text-slate-600 text-sm mb-2">Tips, guides, and updates from Pat.</p>
                  <Link href="/blog" className="text-brand-secondary-dark hover:opacity-80 text-sm font-semibold">Visit Blog →</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Jobber Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
            <h3 className="text-xl font-bold text-brand-dark mb-6">Request a Free Quote</h3>
            <JobberForm />
          </div>

        </div>
      </div>
    </section>
  );
}