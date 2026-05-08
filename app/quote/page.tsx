import type { Metadata } from "next";
import JobberForm from "../components/JobberForm";

export const metadata: Metadata = {
  title: "Get a Free Quote | Pat's Power Washing",
  description: "Request a free pressure washing quote in the DMV area.",
  robots: "noindex, nofollow",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-brand-dark to-brand-primary-dark flex flex-col items-center justify-start px-4 py-16">
      
      {/* Logo */}
      <div className="mb-8">
        <img
          src="/images/logo.png"
          alt="Pat's Power Washing"
          className="h-16 w-auto"
        />
      </div>

      {/* Headline */}
      <div className="text-center text-white mb-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Get Your Free Quote Today
        </h1>
        <p className="text-lg text-slate-200">
          Serving College Park and the entire DMV area. Fill out the form and Pat will get back to you shortly.
        </p>
      </div>

      {/* Jobber Form */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl">
        <JobberForm />
      </div>

      {/* Trust line */}
      <p className="text-slate-300 text-sm mt-6">
        ⭐ Trusted by homeowners across Maryland, DC & Virginia
      </p>

    </main>
  );
}