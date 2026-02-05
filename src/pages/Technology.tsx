import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/sections/HowItWorks";
import AIIntelligence from "@/components/sections/AIIntelligence";
import Footer from "@/components/sections/Footer";

const Technology = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <HowItWorks />
        <AIIntelligence />
      </div>
      <Footer />
    </main>
  );
};

export default Technology;