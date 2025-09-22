import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <PortfolioPreview />
      <TestimonialsCarousel />
    </div>
  );
};

export default Home;