// app/blog/page.tsx
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { client } from '@/lib/sanity'
import { allBlogPostsQuery } from '@/lib/sanity/queries/blog'
import BlogCard from '../components/blog/BlogCard'
import Link from 'next/link'
import Image from 'next/image'
import { BASE_URL } from '@/lib/constants'

export const metadata = {
  title: "Blog - Power Washing Tips & Guides | Pat's Power Washing",
  description: "Expert power washing tips, maintenance guides, and comparisons from Pat's Power Washing serving the DMV area.",
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
}

export const revalidate = 3600

const postTypes = [
  { value: 'all', label: 'All Posts' },
  { value: 'blogPostHowTo', label: 'How-To Guides' },
  { value: 'blogPostBestTop', label: 'Best & Top Lists' },
  { value: 'blogPostCompleteGuide', label: 'Complete Guides' },
  { value: 'blogPostComparison', label: 'Comparisons' },
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

  return (
    <div className="bg-black min-h-screen">

      {/* Hero */}
      <section className="relative h-[90vh] flex flex-col overflow-hidden pt-20">
        <Image
          src="/images/v-2/blog-hero.jpg"
          alt="Pat's Power Washing Blog"
          fill
          className="object-cover object-[center_80%]"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
            The Pat&apos;s Power Washing Blog
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            Tips & Guides for <span className="text-brand-primary">DMV Homeowners</span>
          </h2>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-black sticky top-16 z-30 py-4 border-b border-white/10">
        <div className="section">
          <div className="flex flex-wrap justify-center gap-3 sm:flex-nowrap sm:overflow-x-auto sm:scrollbar-hide">
            {postTypes.map((t) => (
              <Link
                key={t.value}
                href={`/blog${t.value !== 'all' ? `?type=${t.value}` : ''}`}
                className={`px-5 py-2 h-12 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 rounded-md whitespace-nowrap flex items-center justify-center ${
                  selectedType === t.value
                    ? 'bg-brand-primary text-white'
                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }`}
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-black py-20">
        <div className="section">

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-brand-primary" />
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
              {selectedType === 'all' ? 'All Posts' : postTypes.find(t => t.value === selectedType)?.label}
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
            {filteredPosts.length} <span className="text-brand-primary">{filteredPosts.length === 1 ? 'Article' : 'Articles'}</span> Found
          </h2>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post: any) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-white/10 bg-[#1C1C1C]">
              <p className="text-white/40 text-lg mb-4">No posts in this category yet.</p>
              <Link
                href="/blog"
                className="text-brand-primary font-semibold hover:underline"
              >
                ← View all posts
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-20">
        <div className="section text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Get Your Property Cleaned?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Stop reading and start cleaning. Get your free quote today!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-2xl font-bold bg-white text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

    </div>
  )
}