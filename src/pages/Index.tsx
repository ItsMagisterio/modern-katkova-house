import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Rooms from "@/components/sections/Rooms";
import Amenities from "@/components/sections/Amenities";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Rooms />
      <Amenities />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
