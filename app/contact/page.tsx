// app/contact/page.tsx
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Get a Free Quote | Pat’s Power Washing",
};

export default function ContactPage() {
  return (
    <div className="section py-12">
      <h1 className="text-3xl font-bold text-brand-dark">
        Get a Fast, Free Quote
      </h1>
      <p className="mt-2 text-slate-700">
        We respond quickly. No obligation, no hidden fees. Prefer to call{" "}
        <a className="underline text-brand-primary" href="tel:12409684892">
          240-968-4892
        </a>
        .
      </p>

      <ContactForm />
    </div>
  );
}
