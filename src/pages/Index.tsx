
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/ui/animated-hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import DemoSection from "@/components/landing/DemoSection";
import DevelopersSection from "@/components/landing/DevelopersSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate("/login");
  };

  const handleBuildAgent = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <Hero onGetStarted={handleGetStarted} />
        <DemoSection />
        
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Build Your AI Agent?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Start building powerful AI agents today with our no-code platform.
              Get started for free and deploy production-ready code in minutes.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              onClick={handleBuildAgent}
            >
              Build Agent Now
            </Button>
          </div>
        </section>
        
        <Features />
        <HowItWorks />
        <DevelopersSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
