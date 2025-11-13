import HeroSection from "@/components/HeroSection";
import Events from "@/components/Events";
import Venue from "@/components/Venue";
import Gallery from "@/components/Gallery";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Countdown />
      <Events />
      <Venue />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
