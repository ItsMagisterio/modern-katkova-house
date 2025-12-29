import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import RoomsSection from "@/components/RoomsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <RoomsSection />
      <AmenitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
