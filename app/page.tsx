import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import AboutTeaser from "./components/AboutTeaser";
import ServicesGrid from "./components/ServicesGrid";
import HowItWorks from "./components/HowItWorks";
import ReviewsStrip from "./components/ReviewsStrip";
import BottomCTA from "./components/BottomCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <AboutTeaser />
      <ServicesGrid />
      <HowItWorks />
      <ReviewsStrip />
      <BottomCTA />
    </>
  );
}
