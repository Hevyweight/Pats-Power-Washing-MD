// app/components/service-location/StreamlinedProcess.tsx
export default function StreamlinedProcess({
  service,
  city,
  steps
}: {
  service: string
  city: string
  steps: Array<{
    title: string
    description: string
  }>
}) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="section max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Our {service} Process in {city}
        </h2>
        <p className="text-center text-slate-600 mb-12">
          Simple, professional, guaranteed
        </p>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-primary-dark text-white rounded-full flex items-center justify-center font-bold text-xl">
                {i + 1}
              </div>
              <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}