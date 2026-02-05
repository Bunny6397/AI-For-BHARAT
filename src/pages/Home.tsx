import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Footer from "@/components/sections/Footer";

const Home = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Footer />
    </main>
  );
};

export default Home;