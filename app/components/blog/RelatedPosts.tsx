// app/components/blog/RelatedPosts.tsx
import Link from "next/link"
import Image from "next/image"

export default function RelatedPosts({
  posts
}: {
  posts: Array<{
    title: string
    slug: string
    excerpt: string
    featuredImage?: string
    readTime: string
  }>
}) {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            {post.featuredImage && (
              <div className="relative aspect-video bg-slate-200">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2 group-hover:text-brand-primary-dark transition">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <span className="text-brand-primary-dark text-sm font-semibold">
                Read more ({post.readTime}) →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}