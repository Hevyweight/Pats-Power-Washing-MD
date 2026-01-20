// app/components/blog/Checklist.tsx
import { FaCheckCircle } from "react-icons/fa"

export default function Checklist({
  title,
  items
}: {
  title: string
  items: string[]
}) {
  return (
    <div className="bg-slate-50 rounded-xl p-8 my-8 border border-slate-200">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
            <span className="text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}