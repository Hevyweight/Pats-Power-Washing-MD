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
      <section className="flex-1 bg-slate-50 flex items-start justify-center px-4 lg:pt-12 pt-4 pb-16">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl">
          <h2 className="text-xl font-bold text-brand-dark mb-6">Request a Free Quote</h2>
          <JobberForm />
        </div>
      </section>
    </main>
  );
}