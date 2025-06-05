
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            See WEDNES AI in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch how easy it is to build production-ready AI agents without writing a single line of code.
            From data upload to deployed chatbot in minutes.
          </p>
        </div>
        
        <Card className="max-w-6xl mx-auto overflow-hidden shadow-2xl border-2 hover:border-primary/50 transition-all">
          <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 relative group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                size="lg" 
                className="rounded-full w-24 h-24 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all group-hover:scale-110 shadow-xl"
                variant="ghost"
              >
                <Play className="w-10 h-10 text-white ml-1" />
              </Button>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-white font-bold text-xl mb-3">Build a RAG Agent in 5 Minutes</h3>
                <p className="text-white/90 text-base">
                  From data upload to deployed chatbot - see the complete workflow with real-time preview
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
