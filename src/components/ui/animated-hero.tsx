
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
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 hover:scale-105 transition-transform bg-white/80 backdrop-blur-sm">
              <Play className="w-4 h-4" />
              Watch Demo Video
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-bold">
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
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
                      index === 0 ? "bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent" :
                      index === 1 ? "bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent" :
                      index === 2 ? "bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent" :
                      index === 3 ? "bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent" :
                      "bg-gradient-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent"
                    }`}
                  >
                    {title}
                  </span>
                ))}
              </span>
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 max-w-4xl text-center">
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
              className="gap-4 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 hover:from-purple-700 hover:via-blue-600 hover:to-cyan-500 hover:scale-105 transition-all text-white font-semibold"
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
