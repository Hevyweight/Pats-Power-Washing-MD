// app/components/blog/BlogCTA.tsx
import Link from "next/link"
import { FaPhone } from "react-icons/fa"

export default function BlogCTA({
  title = "Ready to Get Started?",
  description = "Get a free quote in under 60 seconds. No obligations.",
  variant = "default"
}: {
  title?: string
  description?: string
  variant?: "default" | "compact"
}) {
  if (variant === "compact") {
    return (
      <div className="my-8 bg-brand-primary-dark text-white rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-200 mb-4">{description}</p>
        <Link
          href="/contact"
          className="inline-block bg-brand-soft text-brand-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90"
        >
          Get Free Quote
        </Link>
      </div>
    )
  }

  return (
    <div className="my-12 bg-gradient-to-r from-brand-primary-dark to-brand-secondary-dark text-white rounded-xl p-8 md:p-12 text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/contact"
          className="bg-white text-brand-dark px-8 py-4 rounded-xl font-semibold hover:opacity-90 inline-flex items-center justify-center"
        >
          Get Free Quote
        </Link>

        <a
          href="tel:2409684892"
          className="bg-white/10 border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 inline-flex items-center justify-center gap-2"
        >
          <FaPhone />
          Call: 240-968-4892
        </a>
      </div>
    </div>
  )
}
