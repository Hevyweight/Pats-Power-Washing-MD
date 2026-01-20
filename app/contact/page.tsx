// app/contact/page.tsx

import ContactHero from "../components/contact/ContactHero";
import ContactSection from "../components/contact/ContactSection"; 
// OR ContactForm if you're using that instead

export const metadata = {
  title: "Get a Free Quote | Pat’s Power Washing",
};

export default function ContactPage() {
  return (
    <>
      {/* New consistent hero */}
      <ContactHero />

      {/* Main contact section (map + info cards + form) */}
      <ContactSection />
    </>
  );
}
