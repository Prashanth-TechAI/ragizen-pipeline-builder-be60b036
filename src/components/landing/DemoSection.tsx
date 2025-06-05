
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            See WEDNES AI in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how easy it is to build production-ready AI agents without writing a single line of code.
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl border-2 hover:border-primary/50 transition-all">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                size="lg" 
                className="rounded-full w-20 h-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all group-hover:scale-110"
                variant="ghost"
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </Button>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Build a RAG Agent in 5 Minutes</h3>
                <p className="text-white/80 text-sm">
                  From data upload to deployed chatbot - see the complete workflow
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DemoSection;
