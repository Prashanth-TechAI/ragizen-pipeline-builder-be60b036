
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/ui/animated-hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const handleSlidesClick = () => {
    if (isAuthenticated) {
      navigate("/slides");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-background to-muted/30">
          <Hero />
          
          <div className="container mx-auto px-4 pb-16">
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <div className="aspect-[16/9] w-full bg-muted relative">
                <img 
                  src="data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f8fafc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, sans-serif' font-size='24' fill='%23a1a1aa'%3ERAG Pipeline Builder Preview%3C/text%3E%3C/svg%3E" 
                  alt="RagiZen.ai Pipeline Builder" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-6">
                  <Button className="bg-white text-gray-900 hover:bg-gray-100" onClick={handleSlidesClick}>
                    View Slides
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Features />
        <HowItWorks />

        <section className="py-20 bg-gradient-to-br from-purple-100/50 to-blue-100/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your AI Agent?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Start building powerful AI agents today with our no-code platform.
              Get started for free and deploy production-ready code in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                onClick={handleSlidesClick}
              >
                {isAuthenticated ? "View Slides" : "Get Started"}
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
