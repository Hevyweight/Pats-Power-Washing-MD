import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Pat's Power Washing",
  description: "How Pat's Power Washing collects, uses, and protects your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* Header */}
      <section className="bg-black pt-40 pb-16">
        <div className="section">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-brand-primary" />
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">Legal</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
            Privacy <span className="text-brand-primary">Policy</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Effective Date: January 1, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-black py-8">
        <div className="section max-w-4xl">
          <div className="prose-legal text-white/70 text-base leading-relaxed space-y-10">

            <p>
              Pat&apos;s Power Washing (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) values your privacy.
              This Privacy Policy explains how we collect, use, and protect your information when you visit
              our website or communicate with us by phone, email, or text message.
            </p>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Information We Collect</h2>
              <p className="mb-3">We may collect the following information:</p>
              <ul className="list-disc list-inside space-y-2 marker:text-brand-primary">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Property address</li>
                <li>Information you provide when requesting an estimate or service</li>
                <li>Communications between you and Pat&apos;s Power Washing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">How We Use Your Information</h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 marker:text-brand-primary">
                <li>Respond to estimate requests</li>
                <li>Schedule and provide services</li>
                <li>Send appointment reminders and service updates</li>
                <li>Respond to customer questions</li>
                <li>Send promotional offers and marketing communications when permitted by applicable law and with your consent where required</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Text Messaging</h2>
              <p className="mb-3">
                If you provide your mobile phone number and opt in to receive text messages from
                Pat&apos;s Power Washing, you may receive recurring automated text messages related to
                estimates, appointments, service updates, customer service, and promotional offers.
              </p>
              <ul className="list-disc list-inside space-y-2 marker:text-brand-primary mb-3">
                <li>Message frequency may vary.</li>
                <li>Message and data rates may apply.</li>
                <li>Reply STOP to unsubscribe at any time.</li>
                <li>Reply HELP for assistance.</li>
              </ul>
              <p>
                Your consent to receive text messages is not a condition of purchasing any goods or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Information Sharing</h2>
              <p className="mb-3">
                We do not sell, rent, or share your personal information with third parties or affiliates
                for their own marketing purposes.
              </p>
              <p className="mb-3">
                We may share your information with trusted service providers that help us operate our
                business, including payment processors, scheduling software, customer communication
                platforms, and text messaging providers, solely for the purpose of providing our services.
              </p>
              <p>
                Text messaging originator opt-in data and consent will not be shared with any third
                parties, excluding aggregators and providers of the Text Message services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Data Security</h2>
              <p>
                We use reasonable administrative and technical safeguards to protect your personal
                information from unauthorized access, disclosure, alteration, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Your Choices</h2>
              <p className="mb-3">
                You may request to update or delete your personal information by contacting us.
              </p>
              <p>
                You may unsubscribe from marketing emails or opt out of text messages at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Contact Us</h2>
              <p className="mb-1 text-white font-semibold">Pat&apos;s Power Washing</p>
              <p className="mb-1">
                Email:{" "}
                <a href="mailto:pdugan1@patspowerwashing.com" className="text-brand-primary hover:underline">
                  pdugan1@patspowerwashing.com
                </a>
              </p>
              <p className="mb-1">
                Phone:{" "}
                <a href="tel:12409684892" className="text-brand-primary hover:underline">
                  (240) 968-4892
                </a>
              </p>
              <p>
                Website:{" "}
                <a href="https://patspowerwashing.com" className="text-brand-primary hover:underline">
                  https://patspowerwashing.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with a revised Effective Date.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-16">
        <div className="section text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Still Have Questions?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            Reach out directly. We&apos;re happy to walk you through anything before you book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-2xl font-bold bg-white text-brand-primary hover:bg-black hover:text-white transition-all duration-200"
            >
              Send a Message
            </Link>
            <a
              href="tel:12409684892"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-2xl font-bold bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary transition-all duration-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}