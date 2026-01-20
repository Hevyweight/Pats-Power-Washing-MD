// app/components/blog/BlogHero.tsx
import Image from "next/image"
import Link from "next/link"

export default function BlogHero({
  title,
  excerpt,
  publishedAt,
  readTime,
  author,
  featuredImage
}: {
  title: string
  excerpt: string
  publishedAt: string
  readTime: string
  author?: string
  featuredImage?: string
}) {
  return (
    <section className="bg-linear-to-b from-slate-50 to-white py-12">
      <div className="section max-w-4xl">
        {/* Breadcrumbs */}
        <div className="text-sm text-slate-600 mb-6">
          <Link href="/" className="hover:text-brand-primary-dark">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-brand-primary-dark">Blog</Link>
          {' / '}
          <span className="text-slate-400">{title}</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">
          {title}
        </h1>

        <p className="text-xl text-slate-600 mb-6 leading-relaxed">
          {excerpt}
        </p>

        <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
          {author && <span className="font-medium text-slate-700">{author}</span>}
          {author && <span>•</span>}
          <time dateTime={publishedAt}>
            {new Date(publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
          <span>•</span>
          <span>{readTime} read</span>
        </div>

        {featuredImage && (
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>
    </section>
  )
}
