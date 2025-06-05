
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Eye, Download, Home, Loader2, CheckCircle } from "lucide-react";

const BuildAnimation = () => {
  const { type, sessionId } = useParams();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const buildSteps = [
    "Initializing build environment...",
    "Processing data sources...",
    "Configuring embedding models...",
    "Setting up vector database...",
    "Integrating LLM providers...",
    "Generating code templates...",
    "Building Docker containers...",
    "Finalizing deployment files...",
    "Build complete!"
  ];

  useEffect(() => {
    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < buildSteps.length) {
        setCurrentStep(buildSteps[stepIndex]);
        setProgress((stepIndex / (buildSteps.length - 1)) * 100);
        
        if (stepIndex === buildSteps.length - 1) {
          setIsComplete(true);
          clearInterval(interval);
        }
        stepIndex++;
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const handlePreview = () => {
    // Open iframe preview in new window or modal
    window.open(`/preview/${type}/${sessionId}`, '_blank', 'width=1200,height=800');
  };

  const handleDownload = () => {
    // Trigger download
    const link = document.createElement('a');
    link.href = `/api/${type}/builds/${sessionId}/download`;
    link.download = `${type}-agent-${sessionId}.zip`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-black/30 backdrop-blur-lg border-purple-500/30">
        <CardContent className="p-8 text-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              Building Your {type?.toUpperCase()} Agent
            </h1>
            <p className="text-gray-300">
              Session ID: {sessionId}
            </p>
          </div>

          {!isComplete ? (
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="relative">
                  <Loader2 className="w-20 h-20 text-purple-400 animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Progress value={progress} className="h-3" />
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
                  <p className="text-lg text-gray-200">{currentStep}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {["Data Processing", "Model Integration", "Code Generation"].map((step, index) => (
                  <div key={step} className={`p-4 rounded-lg border-2 ${
                    progress > (index + 1) * 33 
                      ? 'border-green-500 bg-green-500/10' 
                      : 'border-gray-600 bg-gray-800/50'
                  }`}>
                    <div className="flex items-center justify-center mb-2">
                      {progress > (index + 1) * 33 ? (
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      ) : (
                        <div className="w-6 h-6 border-2 border-gray-600 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex justify-center">
                <CheckCircle className="w-20 h-20 text-green-400" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-green-400 mb-2">
                  🎉 Agent Built Successfully!
                </h2>
                <p className="text-gray-300">
                  Your {type} agent is ready to use. You can preview it or download the code.
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={handlePreview}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Agent
                </Button>
                <Button 
                  onClick={handleDownload}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Code
                </Button>
              </div>

              <Button 
                variant="outline" 
                onClick={() => navigate("/dashboard")}
                className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BuildAnimation;
