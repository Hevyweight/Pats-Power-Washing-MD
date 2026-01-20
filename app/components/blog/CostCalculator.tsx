// app/components/blog/CostCalculator.tsx
"use client"

import { useState } from "react"
import Link from "next/link"

export default function CostCalculator({
  title = "Quick Cost Estimate",
  description = "Get an instant estimate for your project",
  pricePerUnit = 0.15,
  unit = "sq ft",
  minValue = 200,
  maxValue = 2000,
  step = 100
}: {
  title?: string
  description?: string
  pricePerUnit?: number
  unit?: string
  minValue?: number
  maxValue?: number
  step?: number
}) {
  const [value, setValue] = useState(500)
  const estimate = (value * pricePerUnit).toFixed(2)

  return (
    <div className="bg-linear-to-br from-brand-primary-dark to-brand-secondary-dark text-white rounded-xl p-8 my-8">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-slate-200 mb-6">{description}</p>

      <div className="space-y-6">
        <div>
          <label className="block mb-3 font-medium">
            Property Size ({unit})
          </label>
          <input
            type="range"
            min={minValue}
            max={maxValue}
            step={step}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-soft"
          />
          <div className="flex justify-between text-sm text-slate-300 mt-2">
            <span>{minValue} {unit}</span>
            <span className="text-2xl font-bold text-white">{value} {unit}</span>
            <span>{maxValue} {unit}</span>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
          <div className="text-sm text-slate-200 mb-1">Estimated Cost</div>
          <div className="text-5xl font-bold mb-2">${estimate}</div>
          <div className="text-sm text-slate-300">
            Based on ${pricePerUnit}/{unit} (average)
          </div>
        </div>

        <Link
          href="/contact"
          className="block w-full bg-brand-soft hover:opacity-90 text-brand-dark py-4 rounded-xl font-semibold text-center transition"
        >
          Get Exact Quote
        </Link>

        <p className="text-xs text-slate-300 text-center">
          Actual pricing depends on property condition and specific needs
        </p>
      </div>
    </div>
  )
}