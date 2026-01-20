// app/components/blog/BeforeAfterComparison.tsx
"use client"

import { useState } from "react"
import Image from "next/image"

export default function BeforeAfterComparison({
  before,
  after,
  alt
}: {
  before: string
  after: string
  alt: string
}) {
  const [position, setPosition] = useState(50)

  return (
    <div className="my-8">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        {/* After image (background) */}
        <Image
          src={after}
          alt={`${alt} - after`}
          fill
          className="object-cover"
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before}
            alt={`${alt} - before`}
            fill
            className="object-cover"
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute inset-y-0 w-1 bg-white shadow-lg"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>

        {/* Slider input */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 opacity-0 cursor-ew-resize"
        />

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
          After
        </div>
      </div>
      <p className="text-center text-sm text-slate-600 mt-3">{alt}</p>
    </div>
  )
}