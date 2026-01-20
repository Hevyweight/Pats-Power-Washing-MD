// app/blog/[slug]/page.tsx
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { blogPostBySlugQuery } from '@/lib/sanity/queries/blog'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/sanity/lib/image'

// Type definitions
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
  parentKeyword?: string
  childKeywords?: string[]
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
  // How-To specific
  whatYoullNeed?: Array<{ itemName: string; description: string }>
  stepByStepGuide?: {
    sectionTitle?: string
    steps: Array<{ stepNumber: number; stepTitle: string; content: any[] }>
  }
  commonMistakes?: Array<{ mistake: string; explanation: string }>
  whenToCallPro?: Array<{ situation: string; reason: string }>
  checklist?: { title?: string; items: string[] }
  // Best & Top specific
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
  // Complete Guide specific
  fundamentals?: any[]
  advancedTechniques?: any[]
  specificSituations?: Array<{ surfaceType: string; content: any[] }>
  comparisonTable?: {
    title?: string
    columns: string[]
    rows: Array<{ label: string; values: string[] }>
  }
  // Comparison specific
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

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await client.fetch<Array<{ slug: string }>>(
    `*[_type in ["blogPostHowTo", "blogPostBestTop", "blogPostCompleteGuide", "blogPostComparison"] && isDraft != true]{ "slug": slug.current }`
  )
  return posts.map((post) => ({ slug: post.slug }))
}

// Generate metadata
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
  }
}

export const revalidate = 3600 // Revalidate every hour

// Portable Text components
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h3>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-blue-600 hover:text-blue-700 underline">
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch<BlogPost>(blogPostBySlugQuery(slug))
  
  if (!post) notFound()
  
  const postTypeIcons = {
    blogPostHowTo: '💡',
    blogPostBestTop: '⭐',
    blogPostCompleteGuide: '📖',
    blogPostComparison: '⚖️',
  }
  
  const postTypeLabels = {
    blogPostHowTo: 'How-To Guide',
    blogPostBestTop: 'Best & Top List',
    blogPostCompleteGuide: 'Complete Guide',
    blogPostComparison: 'Comparison',
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700">Blog</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{post.title}</span>
        </nav>

        {/* Post Type Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            <span>{postTypeIcons[post._type]}</span>
            <span>{postTypeLabels[post._type]}</span>
          </span>
        </div>

        {/* Title & Meta */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime} read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
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

        {/* Introduction */}
        {post.introduction && (
          <section className="prose prose-lg max-w-none mb-12">
            <PortableText value={post.introduction} components={portableTextComponents} />
          </section>
        )}

        {/* Type-Specific Content */}
        {post._type === 'blogPostHowTo' && <HowToContent post={post} />}
        {post._type === 'blogPostBestTop' && <BestTopContent post={post} />}
        {post._type === 'blogPostCompleteGuide' && <CompleteGuideContent post={post} />}
        {post._type === 'blogPostComparison' && <ComparisonContent post={post} />}

        {/* Local Factors */}
        {post.localFactors && (
          <section className="mb-12 bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📍</span>
              <span>Local Factors (DMV Area)</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.localFactors} components={portableTextComponents} />
            </div>
          </section>
        )}

        {/* FAQ */}
        {post.faq && post.faq.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {post.faq.map((item, index) => (
                <details key={index} className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <summary className="flex items-start gap-3 cursor-pointer list-none">
                    <span className="text-blue-600 text-xl font-bold flex-shrink-0">Q{index + 1}.</span>
                    <span className="font-semibold text-gray-900 text-lg group-open:text-blue-600 transition-colors">
                      {item.question}
                    </span>
                    <svg className="w-6 h-6 ml-auto flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-4 pl-9 text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Conclusion */}
        {post.conclusion && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
            
            {post.conclusion.summaryPoints && (
              <div className="mb-6 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Takeaways:</h3>
                <ul className="space-y-2">
                  {post.conclusion.summaryPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {post.conclusion.recommendation && (
              <p className="mb-6 text-gray-700 leading-relaxed">{post.conclusion.recommendation}</p>
            )}

            {post.conclusion.ctaText && (
              <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
                <p className="text-lg mb-6">{post.conclusion.ctaText}</p>
                <Link
                  href={post.conclusion.ctaButtonLink || '/contact'}
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  {post.conclusion.ctaButtonText || 'Get Free Quote'}
                </Link>
              </div>
            )}
          </section>
        )}

        {/* Related Posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <section className="mb-12 border-t border-gray-200 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                >
                  {relatedPost.featuredImage && (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={urlFor(relatedPost.featuredImage).width(600).height(400).url()}
                        alt={relatedPost.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="text-sm text-blue-600 font-medium mb-2">
                      {postTypeIcons[relatedPost._type as keyof typeof postTypeIcons]} {postTypeLabels[relatedPost._type as keyof typeof postTypeLabels]}
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want More Power Washing Tips?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get expert advice and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Component for How-To posts
function HowToContent({ post }: { post: BlogPost }) {
  return (
    <>
      {/* What You'll Need */}
      {post.whatYoullNeed && post.whatYoullNeed.length > 0 && (
        <section className="mb-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&#39;ll Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {post.whatYoullNeed.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{item.itemName}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Step-by-Step Guide */}
      {post.stepByStepGuide && post.stepByStepGuide.steps && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {post.stepByStepGuide.sectionTitle || 'Step-by-Step Guide'}
          </h2>
          <div className="space-y-8">
            {post.stepByStepGuide.steps.map((step) => (
              <div key={step.stepNumber} className="relative pl-12">
                <div className="absolute left-0 top-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.stepNumber}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.stepTitle}</h3>
                <div className="prose prose-lg max-w-none">
                  <PortableText value={step.content} components={portableTextComponents} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Common Mistakes */}
      {post.commonMistakes && post.commonMistakes.length > 0 && (
        <section className="mb-12 bg-red-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>⚠️</span>
            <span>Common Mistakes to Avoid</span>
          </h2>
          <div className="space-y-4">
            {post.commonMistakes.map((mistake, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">✗</span>
                  <span>{mistake.mistake}</span>
                </h3>
                <p className="text-gray-700 ml-6">{mistake.explanation}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* When to Call a Pro */}
      {post.whenToCallPro && post.whenToCallPro.length > 0 && (
        <section className="mb-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>👨‍🔧</span>
            <span>When to Call a Professional</span>
          </h2>
          <div className="space-y-4">
            {post.whenToCallPro.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.situation}</h3>
                <p className="text-gray-700">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Checklist */}
      {post.checklist && post.checklist.items && post.checklist.items.length > 0 && (
        <section className="mb-12 bg-green-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {post.checklist.title || 'Checklist'}
          </h2>
          <ul className="space-y-3">
            {post.checklist.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

// Component for Best & Top posts
function BestTopContent({ post }: { post: BlogPost }) {
  return (
    <>
      {/* Criteria Section */}
      {post.criteriaSection && (
        <section className="mb-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes a Great Choice</h2>
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.criteriaSection} components={portableTextComponents} />
          </div>
        </section>
      )}

      {/* Top Items List */}
      {post.topItems && post.topItems.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Top Picks</h2>
          <div className="space-y-8">
            {post.topItems.map((item) => (
              <div key={item.rank} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-all">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold">#{item.rank}</span>
                    <span className="text-xl font-semibold">{item.itemName}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < item.rating ? 'text-yellow-400' : 'text-blue-400'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {item.image && (
                      <div className="md:col-span-1">
                        <Image
                          src={urlFor(item.image).width(400).height(400).url()}
                          alt={item.itemName}
                          width={400}
                          height={400}
                          className="w-full h-auto rounded-xl"
                        />
                      </div>
                    )}
                    <div className={item.image ? 'md:col-span-2' : 'md:col-span-3'}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {item.bestFor}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-4">{item.overview}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                            <span>✓</span>
                            <span>Pros</span>
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            {item.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-green-600 flex-shrink-0">•</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                            <span>✗</span>
                            <span>Cons</span>
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-700">
                            {item.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-red-600 flex-shrink-0">•</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 rounded-xl p-4 mb-4">
                        <p className="text-sm text-gray-700"><strong>Why We Recommend:</strong> {item.whyRecommend}</p>
                      </div>
                      
                      {item.affiliateLink && (
                        <a
                          href={item.affiliateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Check Price →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Buying Guide */}
      {post.buyingGuide && (
        <section className="mb-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Buying Guide</h2>
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.buyingGuide} components={portableTextComponents} />
          </div>
        </section>
      )}
    </>
  )
}

// Component for Complete Guide posts
function CompleteGuideContent({ post }: { post: BlogPost }) {
  return (
    <>
      {/* What You'll Need */}
      {post.whatYoullNeed && post.whatYoullNeed.length > 0 && (
        <section className="mb-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&#39;ll Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {post.whatYoullNeed.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{item.itemName}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Fundamentals */}
      {post.fundamentals && (
        <section className="mb-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Fundamentals</h2>
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.fundamentals} components={portableTextComponents} />
          </div>
        </section>
      )}

      {/* Step-by-Step */}
      {post.stepByStepGuide && post.stepByStepGuide.steps && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {post.stepByStepGuide.sectionTitle || 'Step-by-Step Process'}
          </h2>
          <div className="space-y-8">
            {post.stepByStepGuide.steps.map((step) => (
              <div key={step.stepNumber} className="relative pl-12">
                <div className="absolute left-0 top-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.stepNumber}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.stepTitle}</h3>
                <div className="prose prose-lg max-w-none">
                  <PortableText value={step.content} components={portableTextComponents} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Advanced Techniques */}
      {post.advancedTechniques && (
        <section className="mb-12 bg-purple-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🚀</span>
            <span>Advanced Techniques</span>
          </h2>
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.advancedTechniques} components={portableTextComponents} />
          </div>
        </section>
      )}

      {/* Specific Situations */}
      {post.specificSituations && post.specificSituations.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Specific Surfaces & Situations</h2>
          <div className="space-y-6">
            {post.specificSituations.map((situation, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{situation.surfaceType}</h3>
                <div className="prose prose-lg max-w-none">
                  <PortableText value={situation.content} components={portableTextComponents} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Comparison Table */}
      {post.comparisonTable && post.comparisonTable.rows && post.comparisonTable.rows.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {post.comparisonTable.title || 'Comparison'}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  {post.comparisonTable.columns.map((col, i) => (
                    <th key={i} className="px-6 py-4 text-left font-semibold">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {post.comparisonTable.rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.label}</td>
                    {row.values.map((value, j) => (
                      <td key={j} className="px-6 py-4 text-gray-700">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Common Mistakes */}
      {post.commonMistakes && post.commonMistakes.length > 0 && (
        <section className="mb-12 bg-red-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>⚠️</span>
            <span>Common Mistakes to Avoid</span>
          </h2>
          <div className="space-y-4">
            {post.commonMistakes.map((mistake, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">✗</span>
                  <span>{mistake.mistake}</span>
                </h3>
                <p className="text-gray-700 ml-6">{mistake.explanation}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* When to Call a Pro */}
      {post.whenToCallPro && post.whenToCallPro.length > 0 && (
        <section className="mb-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span>👨‍🔧</span>
            <span>When to Call a Professional</span>
          </h2>
          <div className="space-y-4">
            {post.whenToCallPro.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.situation}</h3>
                <p className="text-gray-700">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Master Checklist */}
      {post.checklist && post.checklist.items && post.checklist.items.length > 0 && (
        <section className="mb-12 bg-green-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {post.checklist.title || 'Master Checklist'}
          </h2>
          <ul className="space-y-3">
            {post.checklist.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

// Component for Comparison posts
function ComparisonContent({ post }: { post: BlogPost }) {
  return (
    <>
      {/* Quick Overview */}
      {post.quickOverview && (
        <section className="mb-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Overview</h2>
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.quickOverview} components={portableTextComponents} />
          </div>
        </section>
      )}

      {/* Comparison Table */}
      {post.comparisonTable && post.comparisonTable.rows && post.comparisonTable.rows.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {post.comparisonTable.title || 'Side-by-Side Comparison'}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  {post.comparisonTable.columns.map((col, i) => (
                    <th key={i} className="px-6 py-4 text-center font-semibold">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {post.comparisonTable.rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.label}</td>
                    {row.values.map((value, j) => (
                      <td key={j} className="px-6 py-4 text-center text-gray-700">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Option A */}
      {post.optionA && (
        <section className="mb-12">
          <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{post.optionA.name}</h2>
            
            <div className="prose prose-lg max-w-none mb-6">
              <PortableText value={post.optionA.description} components={portableTextComponents} />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span>✓</span>
                  <span>Pros</span>
                </h3>
                <ul className="space-y-2">
                  {post.optionA.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 flex-shrink-0">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span>✗</span>
                  <span>Cons</span>
                </h3>
                <ul className="space-y-2">
                  {post.optionA.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 flex-shrink-0">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Best For:</h3>
              <p className="text-gray-700">{post.optionA.bestFor}</p>
            </div>

            {post.optionA.realWorldExample && (
              <div className="bg-blue-600 text-white rounded-xl p-6">
                <h3 className="font-semibold mb-2">💡 Real-World Example</h3>
                <p>{post.optionA.realWorldExample}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Option B */}
      {post.optionB && (
        <section className="mb-12">
          <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{post.optionB.name}</h2>
            
            <div className="prose prose-lg max-w-none mb-6">
              <PortableText value={post.optionB.description} components={portableTextComponents} />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span>✓</span>
                  <span>Pros</span>
                </h3>
                <ul className="space-y-2">
                  {post.optionB.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 flex-shrink-0">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span>✗</span>
                  <span>Cons</span>
                </h3>
                <ul className="space-y-2">
                  {post.optionB.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-red-600 flex-shrink-0">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Best For:</h3>
              <p className="text-gray-700">{post.optionB.bestFor}</p>
            </div>

            {post.optionB.realWorldExample && (
              <div className="bg-purple-600 text-white rounded-xl p-6">
                <h3 className="font-semibold mb-2">💡 Real-World Example</h3>
                <p>{post.optionB.realWorldExample}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Key Differences */}
      {post.keyDifferences && post.keyDifferences.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Differences Explained</h2>
          <div className="space-y-6">
            {post.keyDifferences.map((diff, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{diff.differenceTitle}</h3>
                <div className="prose prose-lg max-w-none">
                  <PortableText value={diff.explanation} components={portableTextComponents} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Decision Framework */}
      {post.decisionFramework && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Which Should You Choose?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {post.decisionFramework.chooseOptionA && post.decisionFramework.chooseOptionA.length > 0 && (
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Choose {post.optionA?.name || 'Option A'} If:</h3>
                <ul className="space-y-2">
                  {post.decisionFramework.chooseOptionA.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-600 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {post.decisionFramework.chooseOptionB && post.decisionFramework.chooseOptionB.length > 0 && (
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Choose {post.optionB?.name || 'Option B'} If:</h3>
                <ul className="space-y-2">
                  {post.decisionFramework.chooseOptionB.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-purple-600 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {post.decisionFramework.considerBoth && post.decisionFramework.considerBoth.length > 0 && (
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Consider Both When:</h3>
                <ul className="space-y-2">
                  {post.decisionFramework.considerBoth.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}