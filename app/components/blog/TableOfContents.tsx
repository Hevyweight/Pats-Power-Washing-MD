// app/components/blog/TableOfContents.tsx
"use client"

import { useEffect, useState } from "react"

export default function TableOfContents({
  headings
}: {
  headings: Array<{ id: string; text: string; level: number }>
}) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 sticky top-24">
      <h2 className="text-lg font-bold mb-4 text-slate-800">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <a
              href={`#${heading.id}`}
              className={`text-sm hover:text-brand-primary-dark transition block ${
                activeId === heading.id
                  ? "text-brand-primary-dark font-semibold"
                  : "text-slate-600"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
