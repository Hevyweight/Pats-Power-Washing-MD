// app/blog/[slug]/page.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { blogPostBySlugQuery } from '@/lib/sanity/queries/blog'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'
import BlogCard from '@/app/components/blog/BlogCard'

type BlogPost = {
  _id: string
  _type: 'blogPostHowTo' | 'blogPostBestTop' | 'blogPostCompleteGuide' | 'blogPostComparison'
  title: string
  slug: string
  excerpt: string
  featuredImage?: any
  author: string
  readTime: string
  publishedAt: string
  introduction?: any[]
  localFactors?: any[]
  faq?: Array<{ question: string; answer: string }>
  conclusion?: {
    summaryPoints?: string[]
    ctaText?: string
    ctaButtonText?: string
    ctaButtonLink?: string
    recommendation?: string
  }
  relatedPosts?: Array<{
    _id: string
    _type: string
    title: string
    slug: string
    excerpt: string
    featuredImage?: any
    readTime: string
    publishedAt: string
  }>
  whatYoullNeed?: Array<{ itemName: string; description: string }>
  stepByStepGuide?: {
    sectionTitle?: string
    steps: Array<{ stepNumber: number; stepTitle: string; content: any[] }>
  }
  commonMistakes?: Array<{ mistake: string; explanation: string }>
  whenToCallPro?: Array<{ situation: string; reason: string }>
  checklist?: { title?: string; items: string[] }
  criteriaSection?: any[]
  topItems?: Array<{
    rank: number
    itemName: string
    image?: any
    rating: number
    price: string
    bestFor: string
    overview: string
    pros: string[]
    cons: string[]
    whyRecommend: string
    affiliateLink?: string
  }>
  buyingGuide?: any[]
  fundamentals?: any[]
  advancedTechniques?: any[]
  specificSituations?: Array<{ surfaceType: string; content: any[] }>
  comparisonTable?: {
    title?: string
    columns: string[]
    rows: Array<{ label: string; values: string[] }>
  }
  quickOverview?: any[]
  optionA?: {
    name: string
    description: any[]
    pros: string[]
    cons: string[]
    bestFor: string
    realWorldExample: string
  }
  optionB?: {
    name: string
    description: any[]
    pros: string[]
    cons: string[]
    bestFor: string
    realWorldExample: string
  }
  keyDifferences?: Array<{ differenceTitle: string; explanation: any[] }>
  decisionFramework?: {
    chooseOptionA: string[]
    chooseOptionB: string[]
    considerBoth: string[]
  }
}

const postTypeLabels = {
  blogPostHowTo: 'How-To Guide',
  blogPostBestTop: 'Best & Top List',
  blogPostCompleteGuide: 'Complete Guide',
  blogPostComparison: 'Comparison',
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="mb-6 text-white/70 text-lg leading-relaxed">{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-extrabold text-white mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-white mt-8 mb-3">{children}</h3>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-white/80">{children}</em>
    ),
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-brand-primary hover:underline">
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-6 space-y-2 text-white/70">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-6 space-y-2 text-white/70 list-decimal list-inside">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-3 shrink-0" />
        <span>{children}</span>
      </li>
    ),
  },
}

export async function generateStaticParams() {
  const posts = await client.fetch<Array<{ slug: string }>>(
    `*[_type in ["blogPostHowTo", "blogPostBestTop", "blogPostCompleteGuide", "blogPostComparison"] && isDraft != true]{ "slug": slug.current }`
  )
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch<BlogPost>(blogPostBySlugQuery(slug))
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | Pat's Power Washing Blog`,
    description: post.excerpt,
    openGraph: post.featuredImage ? {
      images: [urlFor(post.featuredImage).width(1200).height(630).url()],
    } : undefined,
    alternates: {
      canonical: `https://www.patspowerwashing.com/blog/${slug}`,
    },
  }
}

export const revalidate = 3600

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch<BlogPost>(blogPostBySlugQuery(slug))
  if (!post) notFound()

  return (
    <div className="bg-black min-h-screen">

      {/* Header */}
      <section className="bg-black pt-40 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/30 mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white/50 line-clamp-1">{post.title}</span>
          </nav>

          {/* Post Type */}
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4">
            {postTypeLabels[post._type]}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-white/60 text-xl leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-6 text-sm text-white/30 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime} read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 mb-12">
          <Image
            src={urlFor(post.featuredImage).width(1200).height(675).url()}
            alt={post.featuredImage.alt || post.title}
            width={1200}
            height={675}
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">

        {/* Introduction */}
        {post.introduction && (
          <PortableText value={post.introduction} components={portableTextComponents} />
        )}

        {/* How-To Content */}
        {post._type === 'blogPostHowTo' && (
          <>
            {post.whatYoullNeed && post.whatYoullNeed.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-extrabold text-white mb-6">What You&apos;ll Need</h2>
                <div className="space-y-3">
                  {post.whatYoullNeed.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                      <div>
                        <p className="text-white font-semibold">{item.itemName}</p>
                        {item.description && (
                          <p className="text-white/50 text-sm mt-0.5">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {post.stepByStepGuide?.steps && (
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-white mb-8">
                  {post.stepByStepGuide.sectionTitle || 'Step-by-Step Guide'}
                </h2>
                <div className="space-y-8">
                  {post.stepByStepGuide.steps.map((step) => (
                    <div key={step.stepNumber} className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center shrink-0 text-white font-extrabold">
                        {step.stepNumber}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3">{step.stepTitle}</h3>
                        <PortableText value={step.content} components={portableTextComponents} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {post.commonMistakes && post.commonMistakes.length > 0 && (
              <div className="bg-[#1C1C1C] p-8 mb-8">
                <h2 className="text-2xl font-extrabold text-white mb-6">Common Mistakes to Avoid</h2>
                <div className="space-y-4">
                  {post.commonMistakes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                      <div>
                        <p className="text-white font-semibold">{item.mistake}</p>
                        <p className="text-white/50 text-sm mt-1">{item.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {post.whenToCallPro && post.whenToCallPro.length > 0 && (
              <div className="bg-brand-primary/10 border border-brand-primary/20 p-8 mb-8">
                <h2 className="text-2xl font-extrabold text-white mb-6">When to Call a Pro</h2>
                <div className="space-y-4">
                  {post.whenToCallPro.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
                      <div>
                        <p className="text-white font-semibold">{item.situation}</p>
                        <p className="text-white/50 text-sm mt-1">{item.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Complete Guide Content */}
        {post._type === 'blogPostCompleteGuide' && (
          <>
            {post.fundamentals && (
              <PortableText value={post.fundamentals} components={portableTextComponents} />
            )}
            {post.advancedTechniques && (
              <div className="mt-8">
                <h2 className="text-3xl font-extrabold text-white mb-6">Advanced Techniques</h2>
                <PortableText value={post.advancedTechniques} components={portableTextComponents} />
              </div>
            )}
            {/* Add image here */}
            {post.comparisonTable && (
              <div className="mb-8 overflow-x-auto">
                <h2 className="text-2xl font-extrabold text-white mb-4">{post.comparisonTable.title}</h2>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      {post.comparisonTable.columns.map((col, i) => (
                        <th key={i} className="bg-brand-primary text-white px-4 py-3 text-left text-sm font-bold">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {post.comparisonTable.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-[#1C1C1C]' : 'bg-[#272727]'}>
                        <td className="px-4 py-3 text-white font-semibold text-sm">{row.label}</td>
                        {row.values.map((val, j) => (
                          <td key={j} className="px-4 py-3 text-white/60 text-sm">{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* Comparison Content */}
        {post._type === 'blogPostComparison' && (
          <>
            {post.quickOverview && (
              <PortableText value={post.quickOverview} components={portableTextComponents} />
            )}

            {post.keyDifferences && post.keyDifferences.map((diff, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">{diff.differenceTitle}</h3>
                <PortableText value={diff.explanation} components={portableTextComponents} />
              </div>
            ))}
          </>
        )}

        {/* Best & Top Content */}
        {post._type === 'blogPostBestTop' && (
          <>
            {post.criteriaSection && (
              <PortableText value={post.criteriaSection} components={portableTextComponents} />
            )}
            {post.topItems && post.topItems.map((item) => (
              <div key={item.rank} className="bg-[#1C1C1C] p-8 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-extrabold text-brand-primary">#{item.rank}</span>
                  <h3 className="text-xl font-bold text-white">{item.itemName}</h3>
                </div>
                <p className="text-white/70 mb-4">{item.overview}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    {item.pros.map((pro, i) => (
                      <div key={i} className="flex items-start gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                        <p className="text-white/70 text-sm">{pro}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    {item.cons.map((con, i) => (
                      <div key={i} className="flex items-start gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                        <p className="text-white/70 text-sm">{con}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {post.buyingGuide && (
              <PortableText value={post.buyingGuide} components={portableTextComponents} />
            )}
          </>
        )}

        {/* Conclusion */}
        {post.conclusion && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <h2 className="text-3xl font-extrabold text-white mb-6">Final Thoughts</h2>
            {post.conclusion.summaryPoints && (
              <div className="bg-[#1C1C1C] p-8 mb-6">
                <h3 className="text-lg font-bold text-white mb-4">Key Takeaways</h3>
                <div className="space-y-3">
                  {post.conclusion.summaryPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
                      <p className="text-white/70">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {post.conclusion.recommendation && (
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {post.conclusion.recommendation}
              </p>
            )}
          </div>
        )}

      </article>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="bg-[#1C1C1C] py-20">
          <div className="section">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-brand-primary" />
              <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Keep Reading</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
              Related <span className="text-brand-primary">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {post.relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost._id} post={relatedPost as any} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-primary py-20">
        <div className="section text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Get Your Property Cleaned?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Stop reading and start cleaning. Get a free estimate today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-2xl font-bold bg-white text-brand-primary hover:bg-black hover:text-white transition-all duration-200"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

    </div>
  )
}