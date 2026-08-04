import Link from "next/link"

export const metadata = {
  title: "Terms & Conditions | Pat's Power Washing",
  description: "The terms and conditions governing use of Pat's Power Washing services and website.",
}

export default function TermsConditionsPage() {
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
            Terms & <span className="text-brand-primary">Conditions</span>
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
              Welcome to Pat&apos;s Power Washing. By accessing our website, requesting an estimate,
              scheduling services, or communicating with us, you agree to these Terms & Conditions.
            </p>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Services</h2>
              <p className="mb-3">
                Pat&apos;s Power Washing provides residential and commercial exterior cleaning services,
                including house washing, pressure washing, soft washing, roof cleaning, concrete cleaning,
                deck cleaning, fence cleaning, gutter brightening, and related exterior cleaning services.
              </p>
              <p>
                All estimates are provided in good faith and may be adjusted if unforeseen conditions are
                discovered before or during service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Scheduling</h2>
              <p>
                Appointments are scheduled based on availability. We reserve the right to reschedule
                services due to weather, equipment issues, safety concerns, or other circumstances beyond
                our reasonable control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Payments</h2>
              <p className="mb-3">
                Payment is due upon completion of services unless otherwise agreed to in writing.
              </p>
              <p className="mb-3">
                Accepted payment methods may include cash, check, credit card, or other approved payment methods.
              </p>
              <p>
                Late payments may be subject to additional fees as permitted by applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Customer Responsibilities</h2>
              <p className="mb-3">Customers agree to:</p>
              <ul className="list-disc list-inside space-y-2 marker:text-brand-primary">
                <li>Provide accurate contact information.</li>
                <li>Ensure water access is available during service.</li>
                <li>Secure pets and remove personal belongings from work areas.</li>
                <li>Notify us of any known property conditions that may affect the work.</li>
                <li>Ensure safe access to all areas scheduled for cleaning.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Estimates</h2>
              <p>
                Quotes are based on the information available at the time of inspection. Additional work
                requested by the customer or unforeseen site conditions may require a revised estimate
                before work proceeds.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Limitation of Liability</h2>
              <p className="mb-3">
                Pat&apos;s Power Washing performs services using reasonable care and industry-standard practices.
              </p>
              <p>
                To the fullest extent permitted by law, our liability is limited to the amount paid for the
                services provided. We are not responsible for pre-existing damage, hidden defects,
                improperly installed materials, normal wear and tear, or circumstances beyond our
                reasonable control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">SMS Terms & Conditions</h2>
              <p className="mb-3">
                By providing your mobile phone number and opting in, you agree to receive recurring
                automated text messages from Pat&apos;s Power Washing regarding:
              </p>
              <ul className="list-disc list-inside space-y-2 marker:text-brand-primary mb-3">
                <li>Estimates</li>
                <li>Appointment reminders</li>
                <li>Service updates</li>
                <li>Customer support</li>
                <li>Promotional offers</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 marker:text-brand-primary mb-3">
                <li>Message frequency may vary.</li>
                <li>Message and data rates may apply.</li>
                <li>Reply STOP at any time to unsubscribe.</li>
                <li>Reply HELP for assistance.</li>
              </ul>
              <p className="mb-3">
                Your consent to receive text messages is not a condition of purchasing any goods or services.
              </p>
              <p>
                For additional information, please review our{" "}
                <Link href="/privacy-policy" className="text-brand-primary hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and other materials,
                is the property of Pat&apos;s Power Washing and may not be copied, reproduced, or
                distributed without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Privacy</h2>
              <p>
                Your use of our website and services is also governed by our{" "}
                <Link href="/privacy-policy" className="text-brand-primary hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Changes to These Terms</h2>
              <p>
                Pat&apos;s Power Washing reserves the right to update these Terms & Conditions at any time.
                Changes become effective immediately upon posting to this page. Continued use of our
                website or services constitutes acceptance of any revised Terms & Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-white mb-3">Contact Information</h2>
              <p className="mb-1 text-white font-semibold">Pat&apos;s Power Washing</p>
              <p className="mb-1">
                Website:{" "}
                <a href="https://patspowerwashing.com" className="text-brand-primary hover:underline">
                  https://patspowerwashing.com
                </a>
              </p>
              <p className="mb-1">
                Email:{" "}
                <a href="mailto:pdugan1@patspowerwashing.com" className="text-brand-primary hover:underline">
                  pdugan1@patspowerwashing.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:12409684892" className="text-brand-primary hover:underline">
                  (240) 968-4892
                </a>
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