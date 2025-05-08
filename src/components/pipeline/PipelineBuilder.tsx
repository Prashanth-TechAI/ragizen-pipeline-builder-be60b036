
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import NodeSidebar from "./NodeSidebar";
import StepIndicator from "./StepIndicator";
import DataSourceConfig from "./steps/DataSourceConfig";
import ChunkingConfig from "./steps/ChunkingConfig";
import EmbeddingConfig from "./steps/EmbeddingConfig";
import VectorStoreConfig from "./steps/VectorStoreConfig";
import LLMConfig from "./steps/LLMConfig";
import UIConfig from "./steps/UIConfig";

interface PipelineBuilderProps {
  initialTab?: "semantic" | "analytical";
}

export default function PipelineBuilder({ initialTab = "semantic" }: PipelineBuilderProps) {
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleBackToProjects = () => {
    navigate("/slides");
  };

  // Steps for the pipeline builder workflow
  const steps = [
    { id: 0, name: "Data Source", component: <DataSourceConfig type={selectedTab} /> },
    { id: 1, name: "Chunking", component: <ChunkingConfig type={selectedTab} /> },
    { id: 2, name: "Embedding", component: <EmbeddingConfig /> },
    { id: 3, name: "Vector Store", component: <VectorStoreConfig /> },
    { id: 4, name: "LLM & Keys", component: <LLMConfig /> },
    { id: 5, name: "Preview UI", component: <UIConfig /> }
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center border-b border-border p-4 gap-4">
        <Button variant="ghost" onClick={handleBackToProjects}>
          ← Projects
        </Button>
        <div className="flex">
          <Button
            variant={selectedTab === "semantic" ? "default" : "outline"}
            onClick={() => setSelectedTab("semantic")}
            className="rounded-r-none"
          >
            Semantic RAG
          </Button>
          <Button
            variant={selectedTab === "analytical" ? "default" : "outline"}
            onClick={() => setSelectedTab("analytical")}
            className="rounded-l-none"
          >
            Analytical Agent
          </Button>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline">Save</Button>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            Build &amp; Deploy
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <NodeSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Step indicator */}
          <div className="px-6 py-4">
            <StepIndicator steps={steps} currentStep={currentStep} />
          </div>
          
          {/* Current step content */}
          <div className="flex-1 bg-gradient-to-br from-slate-50 to-white relative overflow-auto p-6">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
            <div className="relative z-10">
              {steps[currentStep].component}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="border-t border-border p-4 flex justify-between">
            <Button 
              variant="outline" 
              onClick={handlePrevStep}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button 
              onClick={handleNextStep}
              disabled={currentStep === steps.length - 1}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
