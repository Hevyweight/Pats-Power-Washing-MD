// app/components/blog/SeasonalGuide.tsx
export default function SeasonalGuide({
  seasons
}: {
  seasons: Array<{
    name: string
    icon: string
    timing: string
    description: string
    pros: string[]
    cons: string[]
  }>
}) {
  return (
    <div className="my-8 grid md:grid-cols-2 gap-6">
      {seasons.map((season) => (
        <div key={season.name} className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-6">
            <div className="text-5xl mb-2">{season.icon}</div>
            <h3 className="text-2xl font-bold mb-1">{season.name}</h3>
            <p className="text-slate-200 text-sm">{season.timing}</p>
          </div>
          <div className="p-6">
            <p className="text-slate-600 mb-4">{season.description}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-green-700 mb-2">✓ Pros:</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                {season.pros.map((pro, i) => (
                  <li key={i}>• {pro}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-700 mb-2">✗ Cons:</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                {season.cons.map((con, i) => (
                  <li key={i}>• {con}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}