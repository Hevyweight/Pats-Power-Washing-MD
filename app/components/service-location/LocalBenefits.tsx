// app/components/service-location/LocalBenefits.tsx
export default function LocalBenefits({
  city,
  benefits
}: {
  city: string
  benefits: Array<{
    icon: string
    title: string
    description: string
  }>
}) {
  return (
    <section className="section py-16">
      <h2 className="text-3xl font-bold text-center mb-4">
        Benefits for {city} Property Owners
      </h2>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
        Why {city} residents choose our services
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="text-5xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
            <p className="text-slate-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}