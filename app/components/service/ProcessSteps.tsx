// components/service/ProcessSteps.tsx
export default function ProcessSteps({
  steps
}: {
  steps: Array<{ title: string; description: string }>
}) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="section max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Process
        </h2>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-primary-dark text-white rounded-full flex items-center justify-center font-bold text-xl">
                {i + 1}
              </div>
              <div>
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