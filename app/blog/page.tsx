// app/blog/page.tsx
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { client } from '@/lib/sanity'
import { allBlogPostsQuery } from '@/lib/sanity/queries/blog'
import BlogCard from '../components/blog/BlogCard'
import Link from 'next/link'

export const metadata = {
  title: "Blog - Power Washing Tips & Guides | Pat's Power Washing",
  description: "Expert power washing tips, maintenance guides, product reviews, and comparisons from Pat's Power Washing serving the DMV area.",
}

export const revalidate = 3600 // Revalidate every hour

const postTypes = [
  { value: 'all', label: 'All Posts', icon: '📚' },
  { value: 'blogPostHowTo', label: 'How-To Guides', icon: '💡' },
  { value: 'blogPostBestTop', label: 'Best & Top Lists', icon: '⭐' },
  { value: 'blogPostCompleteGuide', label: 'Complete Guides', icon: '📖' },
  { value: 'blogPostComparison', label: 'Comparisons', icon: '⚖️' },
]

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  const allPosts = await client.fetch(allBlogPostsQuery)
  
  const selectedType = type || 'all'
  const filteredPosts = selectedType === 'all'
    ? allPosts
    : allPosts.filter((post: any) => post._type === selectedType)

  // Get featured posts (first 3 most recent)
  const featuredPosts = allPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Blog Hero */}
      <section
        className="relative bg-gradient-to-b from-brand-dark to-brand-primary-dark text-white py-20 overflow-hidden"
      >
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg mb-6">
              Power Washing Blog
            </h1>

            <p className="text-lg md:text-xl text-slate-200 drop-shadow mb-0">
              Expert tips, comprehensive guides, product reviews, and detailed
              comparisons. Everything you need to know about power washing.
            </p>

          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedType === 'all' && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Latest Articles
            </h2>
            <p className="text-gray-600">
              Fresh content to help you maintain your property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Post Type Filter */}
      <section className="py-8 border-y border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {postTypes.map((type) => (
              <Link
                key={type.value}
                href={`/blog${type.value !== 'all' ? `?type=${type.value}` : ''}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedType === type.value
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{type.icon}</span>
                <span>{type.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedType === 'all' ? 'All Posts' : postTypes.find(t => t.value === selectedType)?.label}
          </h2>
          <p className="text-gray-600 mt-1">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
          </p>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mb-4">
              <span className="text-3xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No posts yet
            </h3>
            <p className="text-gray-600 mb-6">
              Check back soon for new {postTypes.find(t => t.value === selectedType)?.label.toLowerCase()}!
            </p>
            <Link
              href="/blog"
              className="inline-block text-blue-600 hover:text-blue-700 font-medium"
            >
              ← View all posts
            </Link>
          </div>
        )}
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What You&#39;ll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {postTypes.slice(1).map((type) => (
              <div key={type.value} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{type.label}</h3>
                <p className="text-sm text-gray-600">
                  {type.value === 'blogPostHowTo' && 'Step-by-step tutorials for DIY success'}
                  {type.value === 'blogPostBestTop' && 'Top-rated products and services reviewed'}
                  {type.value === 'blogPostCompleteGuide' && 'In-depth guides covering every detail'}
                  {type.value === 'blogPostComparison' && 'Side-by-side comparisons to help you decide'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-linear-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want More Tips?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert power washing advice and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-1 
                px-6 py-4 
                rounded-full 
                bg-transparent
                border 
                border-white 
                text-white
                placeholder-white/80
                focus:outline-none 
                focus:ring-2 
                focus:ring-white
              "
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Your Property Cleaned?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stop reading and start cleaning! Get your free quote today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
