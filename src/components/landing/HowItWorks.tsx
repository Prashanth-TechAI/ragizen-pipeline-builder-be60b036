
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Agent Type",
      description: "Select between Semantic RAG chatbots for unstructured data or Analytical agents for structured data sources.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24' fill='none' stroke='%236E59A5' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='12' y1='3' x2='12' y2='21'%3E%3C/line%3E%3C/svg%3E",
    },
    {
      number: "02",
      title: "Configure Your Pipeline",
      description: "Drag and drop components to build your data pipeline. Connect sources, processors, and models.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24' fill='none' stroke='%236E59A5' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z'%3E%3C/path%3E%3Cpolyline points='8 10 12 14 16 10'%3E%3C/polyline%3E%3C/svg%3E",
    },
    {
      number: "03",
      title: "Preview & Test",
      description: "Instantly preview your chatbot within the dashboard to test functionality and fine-tune behavior.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24' fill='none' stroke='%236E59A5' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 19 21 12 17 5 21 12 2'%3E%3C/polygon%3E%3C/svg%3E",
    },
    {
      number: "04",
      title: "Build & Deploy",
      description: "Generate production-ready code with one click, then download or deploy directly to your environment.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24' fill='none' stroke='%236E59A5' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'%3E%3C/path%3E%3Cpath d='M12 11v6'%3E%3C/path%3E%3Cpath d='m9 14 3 3 3-3'%3E%3C/path%3E%3C/svg%3E",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How RagiZen.ai Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment in minutes, RagiZen.ai streamlines the entire process
            of building AI agents with our visual pipeline builder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-muted/30 rounded-xl p-6 border border-border h-full flex flex-col">
                <div className="text-4xl font-bold text-primary/10 mb-4">
                  {step.number}
                </div>
                <div className="mb-6 flex justify-center">
                  <img src={step.image} alt={step.title} className="h-20 w-20" />
                </div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-muted-foreground flex-grow">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
