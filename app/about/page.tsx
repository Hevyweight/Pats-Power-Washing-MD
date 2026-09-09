import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from '@/lib/constants'


export const metadata = {
  title: "About | Pat's Power Washing",
  description: "Learn about Pat's Power Washing — locally owned exterior cleaning serving Maryland, DC, and Northern Virginia.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  }, 
};

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Owner-Operated",
    desc: "You work directly with Pat on every job. No crews. No shortcuts.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "On-Time Service",
    desc: "Scheduled appointments are honored. We show up when we say we will.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "5-Star Quality",
    desc: "Commercial-grade equipment and a thorough eye for detail on every job.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-brand-primary" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Community First",
    desc: "Locally owned and operated. Proudly serving the DMV community.",
  },
];

const stats = [
  { number: "200+", label: "Jobs Completed" },
  { number: "5★", label: "Average Rating" },
  { number: "3+", label: "Years Serving DMV" },
  { number: "100%", label: "Satisfaction Guaranteed" },
];

export default function AboutPage() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative h-[130vh] flex flex-col overflow-hidden pt-20">
        <Image
          src="/images/v-2/about_hero.jpg"
          alt="Pat's Power Washing"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-start text-center text-white px-4 mt-20 h-full">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-6 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
            About Pat&apos;s Power Washing
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-[0.2em] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            Locally Owned. <span className="text-brand-primary">DMV Trusted.</span>
          </h2>
        </div>
      </section>
      
      <div className="h-16 bg-black"></div>

      {/* Left image, right text */}
      <section className="bg-black overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch min-h-[700px]">
          <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-[500px] shrink-0 order-last md:order-first">
            <Image
              src="/images/v-2/about.jpg"
              alt="Pat power washing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              className="object-cover object-center rounded-r-4xl"
            />
          </div>
          <div className="flex-1 flex items-center py-12 md:-ml-24 md:my-12 z-10">
            <div className="bg-brand-gray rounded-l-3xl p-8 md:p-12 shadow-2xl min-h-[600px] flex flex-col justify-center w-full">
              <div className="flex items-center gap-1 mb-4">
                <div className="w-20 h-px bg-brand-primary" />
                <p className="text-lg font-semibold uppercase tracking-widest text-white italic">About Us</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                The <span className="text-brand-primary">Story</span> Behind Pat&apos;s Power Washing
              </h2>
              <p className="text-white/70 text-sm md:text-base mb-8 leading-relaxed">
                I started working for myself before I really knew what it meant to run a business. 
                In high school, I spent my free time mowing lawns and doing yard work for people around my hometown. 
                I liked working outside, but more than anything, I liked the feeling of having something that was mine. 
                I could find the work, do a good job, and see the result of what I had built for myself.<br/><br/>

                When I left home and went off to college, that entrepreneurial spirit came with me. 
                I tried a few different businesses and learned plenty from the ones that didn&apos;t work, 
                but eventually I found myself coming back to what I already knew: working with my hands and 
                improving people&apos;s properties. That eventually became Pat’s Power Washing.<br/><br/>

                I fell in love with power washing because of how immediate the transformation is. 
                You can show up to a property in the morning with years of dirt and organic growth covering a house, 
                driveway, patio, or set of pavers, and leave that afternoon with it looking completely different. 
                I love being able to stand back at the end of a job and physically see what I accomplished that day.<br/><br/>

                In a lot of ways, that&apos;s the same reason I chose to study Landscape Architecture at the University of Maryland. 
                I&apos;ve always been drawn to the way a property can be transformed and to the combination of design, construction, 
                and hands-on work that goes into making that happen.<br/><br/>

                My long-term goal is to take everything I&apos;m learning—from school, from working in the landscape industry, 
                and from building Pat&apos;s Power Washing—and eventually build a landscape design-build company of my own.<br/><br/>

                For now, Pat&apos;s Power Washing lets me do what got me started in the first place: work on people&apos;s properties, 
                make a visible difference, and keep building something of my own one job at a time.
             </p>

            
              {/* Read More */}
              <div className="flex justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-3 rounded-lg w-96 pl-8 pr-3 py-3 text-3xl font-bold
                  whitespace-nowrap transition-all duration-200 bg-white text-brand-primary 
                  hover:bg-brand-primary hover:text-white"
                >
                  Get A Free Quote
                  <span className="bg-brand-primary rounded-md p-2">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                    </svg>
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="h-16 bg-black"></div>

      {/* Values cards */}
      <section id="why-choose-us" className="bg-black py-20">
        <div className="section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-brand-primary" />
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Why Choose Us</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
            What Makes Us <span className="text-brand-primary">Different</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-black rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-white font-bold text-xl">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Video Section */}
<section className="bg-black pb-20">
  <div className="section">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-px bg-brand-primary" />
      <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Our Process</p>
    </div>
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
      See How We <span className="text-brand-primary">Get It Done</span>
    </h2>
    <div className="w-full max-w-3xl mx-auto rounded-3xl overflow-hidden">
      <video
        className="w-full h-175 aspect-video object-cover object-[center_20%]"
        controls
        preload="metadata"
        playsInline
      >
        <source
          src="/videos/youTube-placeholder.mp4"
          type="video/mp4"
        />
        Your browser does not support video.
      </video>
    </div>
  </div>
</section>

      {/* Trust/Stats bar */}
      <section className="bg-brand-primary py-16">
        <div className="section">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">{s.number}</p>
                <p className="text-white/80 font-semibold uppercase tracking-widest text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20">
        <div className="section text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Transform <span className="text-brand-primary">Your Property?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation quote today. We serve Maryland, DC, and Northern Virginia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-xl font-bold bg-white text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200"
            >
              Get A Free Quote
            </Link>
            <a
              href="tel:12409684892"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-brand-primary transition-all duration-200"
            >
              Call 240-968-4892
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}