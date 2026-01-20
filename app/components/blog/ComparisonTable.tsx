// app/components/blog/ComparisonTable.tsx
export default function ComparisonTable({
  title,
  columns,
  rows
}: {
  title?: string
  columns: string[]
  rows: Array<{ label: string; values: (string | boolean)[] }>
}) {
  return (
    <div className="my-8 overflow-x-auto">
      {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
      <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
        <thead className="bg-brand-dark text-white">
          <tr>
            <th className="p-4 text-left font-semibold">Feature</th>
            {columns.map((col, i) => (
              <th key={i} className="p-4 text-center font-semibold">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-50">
              <td className="p-4 font-medium text-slate-700">{row.label}</td>
              {row.values.map((value, j) => (
                <td key={j} className="p-4 text-center">
                  {typeof value === 'boolean' ? (
                    value ? (
                      <span className="text-green-500 text-xl">✓</span>
                    ) : (
                      <span className="text-red-400 text-xl">✗</span>
                    )
                  ) : (
                    <span className="text-slate-600">{value}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}