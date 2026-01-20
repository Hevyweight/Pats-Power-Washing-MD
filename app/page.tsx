import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import AboutTeaser from "./components/AboutTeaser";
import ServicesGrid from "./components/ServicesGrid";
import HowItWorks from "./components/HowItWorks";
import ReviewsStrip from "./components/Reviews";
import BottomCTA from "./components/BottomCTA";
import ContactSection from "./components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <AboutTeaser />
      <ServicesGrid />
      <HowItWorks />
      <ContactSection />
      <ReviewsStrip />
      <BottomCTA />
    </>
  );
}
