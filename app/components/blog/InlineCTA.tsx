// app/blog/[slug]/components/InlineCTA.tsx
import Link from "next/link"

export default function InlineCTA() {
  return (
    <div className="bg-gradient-to-r from-brand-primary-dark to-brand-secondary-dark text-white rounded-xl p-8 my-8 text-center">
      <h3 className="text-2xl font-bold mb-3">
        Ready to Transform Your Driveway?
      </h3>
      <p className="mb-6 text-slate-100">
        Get a free quote in under 60 seconds. No obligations.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link 
          href="/contact"
          className="bg-white text-brand-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90"
        >
          Get Free Quote
        </Link>
        
        <a
          href="tel:2409684892"
          className="bg-white/10 border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/20"
        >
          Call: 240-968-4892
        </a>
      </div>
    </div>
  )
}
