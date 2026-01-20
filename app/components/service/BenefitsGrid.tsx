// app/components/service/BenefitsGrid.tsx
export default function BenefitsGrid({
  benefits
}: {
  benefits: Array<{ icon: string; title: string; description: string }>
}) {
  return (
    <section className="section py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Our Service?
      </h2>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-10 
        justify-items-center
        mx-auto
        max-w-5xl
      ">
        {benefits.map((benefit, i) => (
          <div key={i} className="text-center max-w-xs">
            <div className="text-5xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-slate-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
