// app/components/location/SimpleProcess.tsx
export default function SimpleProcess({
  city
}: {
  city: string
}) {
  const steps = [
    {
      number: 1,
      title: "Request Free Quote",
      description: `Contact us online or call. We'll discuss your ${city} property needs and provide a transparent quote within 24 hours.`
    },
    {
      number: 2,
      title: "Schedule Service",
      description: `Pick a convenient time that works for you. We offer flexible scheduling for ${city} residents.`
    },
    {
      number: 3,
      title: "Professional Cleaning",
      description: `Our trained team arrives on time with professional equipment and completes the job to perfection.`
    },
    {
      number: 4,
      title: "Guaranteed Satisfaction",
      description: `Walk through the results with us. If anything doesn't meet your standards, we make it right—guaranteed.`
    }
  ]

  return (
    <section className="bg-slate-50 py-16">
      <div className="section max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Our Simple Process in {city}
        </h2>
        <p className="text-center text-slate-600 mb-12">
          From quote to completion, we make it easy
        </p>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-primary-dark text-white rounded-full flex items-center justify-center font-bold text-xl">
                {step.number}
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