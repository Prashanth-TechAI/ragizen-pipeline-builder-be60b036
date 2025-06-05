
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { MoveRight, PhoneCall, Play } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

function Hero({ onGetStarted }: HeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "RAG Agents",
      "SQL Agents", 
      "No-Code AI",
      "Data Pipelines",
      "Smart Agents"
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 hover:scale-105 transition-transform">
              <Play className="w-4 h-4" />
              Watch Demo Video
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-bold">
              <span className="text-primary bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Build AI Agents with
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <span
                    key={index}
                    className={`absolute font-bold transition-all duration-500 ease-out ${
                      titleNumber === index ? "opacity-100 transform translate-y-0" : 
                      "opacity-0 transform translate-y-8"
                    } ${
                      index === 0 ? "text-blue-500" :
                      index === 1 ? "text-purple-500" :
                      index === 2 ? "text-green-500" :
                      index === 3 ? "text-amber-500" :
                      "text-rose-500"
                    }`}
                  >
                    {title}
                  </span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-3xl text-center">
              WEDNES AI empowers you to build and deploy both semantic RAG chatbots and analytical agents
              through an intuitive, no-code interface. Select sources, models, and UI components,
              then click Build to generate a complete, production-ready project.
            </p>
          </div>
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            <Button size="lg" className="gap-4" variant="outline">
              Contact us <PhoneCall className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              className="gap-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 hover:scale-105 transition-all"
              onClick={onGetStarted}
            >
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
