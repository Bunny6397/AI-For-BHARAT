import Navbar from "@/components/Navbar";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";

const FeaturesPage = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Features />
      </div>
      <Footer />
    </main>
  );
};

export default FeaturesPage;