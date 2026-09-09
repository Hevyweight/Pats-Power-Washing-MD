import type { Metadata } from "next";
import ContactHero from "../components/contact/ContactHero";
import JobberForm from "../components/contact/JobberForm";

export const metadata: Metadata = {
  title: "Get a Free Quote | Pat's Power Washing",
  description: "Request a free pressure washing quote in the DMV area.",
  robots: "noindex, nofollow",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 bg-black flex items-start justify-center px-4 pt-32 pb-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl">
          <h2 className="text-xl font-bold text-brand-dark mb-2">Request a Free Quote</h2>
          <p className="text-sm text-gray-600 mb-6">
            Tell us a bit about your project and we&apos;ll get back to you with a free,
            no-obligation quote — usually within 24 hours.
          </p>

          <ul className="flex flex-col gap-2 mb-6 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-brand-primary font-bold">✓</span>
              Fast response, usually same day
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-primary font-bold">✓</span>
              No obligation, no pressure
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-primary font-bold">✓</span>
              Locally owned and operated
            </li>
          </ul>
          <JobberForm />
        </div>
      </section>
    </main>
  );
}