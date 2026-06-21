import Link from "next/link";

interface ServiceBlockProps {
  heading: string
  body: string
  icon: React.ReactNode
  reverse?: boolean
}

export default function ServiceBlock({ heading, body, icon, reverse = false }: ServiceBlockProps) {
  return (
    <section className="bg-black overflow-hidden py-8">
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch min-h-[600px]`}>

        {/* SVG Card */}
        <div className={`relative w-full md:w-1/2 shrink-0 bg-brand-light flex items-center justify-center min-h-[300px] md:min-h-[500px] ${reverse ? 'rounded-l-4xl' : 'rounded-r-4xl'}`}>
            <div className="w-48 h-48 md:w-125 md:h-125 rounded-full bg-brand-primary flex items-center justify-center">
                {icon}
            </div>
        </div>

        {/* Copy */}
        <div className={`flex-1 flex items-center py-12 z-10 ${reverse ? 'md:-mr-24 md:my-12' : 'md:-ml-24 md:my-12'}`}>
          <div className={`bg-brand-gray ${reverse ? 'rounded-r-3xl' : 'rounded-l-3xl'} p-8 md:p-12 shadow-2xl min-h-[500px] flex flex-col justify-center`}>

            {/* Eyebrow */}
            <div className="flex items-center gap-1 mb-4">
              <div className="w-20 h-px bg-brand-primary" />
              <p className="text-lg font-semibold uppercase tracking-widest text-white italic">
                Our Approach
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              {heading}
            </h2>

            {/* Body */}
            <p className="text-white/70 text-base leading-relaxed mb-8">
              {body}
            </p>

            {/* CTA */}
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg px-8 py-3 text-2xl font-bold transition-all duration-200 bg-white text-brand-primary hover:bg-brand-gray hover:text-white"
              >
                Get a Free Estimate
                <span className="bg-brand-primary rounded-md p-2">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}