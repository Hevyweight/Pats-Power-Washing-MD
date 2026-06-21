import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import AboutUs from "./components/AboutUs";
import ServicesGrid from "./components/ServicesGrid";
import OurProcess from "./components/OurProcess";
import ReviewsStrip from "./components/ReviewsStrip";
import BottomCTA from "./components/BottomCTA";
import ContactSection from "./components/contact/ContactSection";
import WaveDivider from "./components/WaveDivider";
import MiniPortfolio from "./components/MiniPortfolio";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <AboutUs />
      <OurProcess />
      <MiniPortfolio />
      <ReviewsStrip />
    </>
  );
}
