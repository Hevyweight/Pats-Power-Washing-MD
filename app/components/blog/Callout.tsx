// app/components/blog/Callout.tsx
export default function Callout({
  type = "info",
  title,
  children
}: {
  type?: "info" | "warning" | "tip" | "success" | "expert"
  title?: string
  children: React.ReactNode
}) {
  const styles = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-900",
      icon: "ℹ️"
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-900",
      icon: "⚠️"
    },
    tip: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-900",
      icon: "💡"
    },
    success: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-900",
      icon: "✅"
    },
    expert: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-900",
      icon: "👨‍🔧"
    }
  }

  const style = styles[type]

  return (
    <div className={`${style.bg} ${style.border} ${style.text} border-l-4 rounded-lg p-6 my-8`}>
      {title && (
        <div className="flex items-center gap-2 font-bold text-lg mb-3">
          <span className="text-2xl">{style.icon}</span>
          {title}
        </div>
      )}
      <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}