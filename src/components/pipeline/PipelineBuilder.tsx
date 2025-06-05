
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, HelpCircle, Database, FileText, Brain, Zap, Settings, Eye, Download, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";

interface PipelineConfig {
  agentName: string;
  sourceType: string;
  sourceDetails: any;
  embedding?: string;
  vectorStore?: string;
  llmProvider: string;
  llmModel: string;
  framework?: string;
  systemPrompt: string;
  uiType: string;
}

const ragSteps = [
  { id: 1, name: "Agent Name", icon: Settings },
  { id: 2, name: "Source Type", icon: Database },
  { id: 3, name: "Source Details", icon: FileText },
  { id: 4, name: "Embedding", icon: Brain },
  { id: 5, name: "Vector Store", icon: Database },
  { id: 6, name: "LLM Provider", icon: Zap },
  { id: 7, name: "System Prompt", icon: FileText },
  { id: 8, name: "UI Type", icon: Eye },
  { id: 9, name: "Build", icon: Settings }
];

const sqlSteps = [
  { id: 1, name: "Agent Name", icon: Settings },
  { id: 2, name: "Source Type", icon: Database },
  { id: 3, name: "LLM Provider", icon: Zap },
  { id: 4, name: "Framework", icon: Brain },
  { id: 5, name: "System Prompt", icon: FileText },
  { id: 6, name: "UI Type", icon: Eye },
  { id: 7, name: "Build", icon: Settings }
];

const sourceTypes = {
  rag: ["PDF", "CSV", "Excel", "Postgres", "MySQL", "SQLite", "MongoDB", "TXT"],
  sql: ["Postgres", "MySQL", "SQLite", "CSV", "Excel"]
};

const embeddingModels = [
  "OpenAI Embedding",
  "Sentence Transformers (all-MiniLM-L6)",
  "HuggingFace Embeddings"
];

const vectorStores = ["ChromaDB", "FAISS", "Pinecone", "Qdrant", "Milvus"];

const llmProviders = {
  "OpenAI": ["gpt-4o", "gpt-4.1", "gpt-4.1-mini"],
  "Claude": ["claude-4-opus", "claude-4-sonnet", "claude-3.5-haiku"],
  "Groq": ["llama-3.3-70b-versatile", "llama-3.1-8b-instant"],
  "DeepSeek": ["deepseek-coder-v2", "deepseek-v2.5-chat", "deepseek-reasoner"],
  "Gemini": ["gemini-1.5-flash", "gemini-2.0-flash-lite"]
};

const frameworks = ["PandasAI", "VannaAI", "REPL", "Langchain SQL"];

const defaultPrompts = [
  "You are a helpful AI assistant that answers questions based on the provided context.",
  "You are an expert data analyst. Help users understand their data through clear explanations.",
  "You are a document expert. Answer questions accurately based on the uploaded documents."
];

const PipelineBuilder = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildComplete, setBuildComplete] = useState(false);
  const [sessionId] = useState(`session_${Date.now()}`);
  
  const [config, setConfig] = useState<PipelineConfig>({
    agentName: "",
    sourceType: "",
    sourceDetails: {},
    embedding: "",
    vectorStore: "",
    llmProvider: "",
    llmModel: "",
    framework: "",
    systemPrompt: defaultPrompts[0],
    uiType: ""
  });

  const isRAG = type === "rag";
  const steps = isRAG ? ragSteps : sqlSteps;
  const maxSteps = steps.length;
  const progress = (currentStep / maxSteps) * 100;

  const updateConfig = (field: string, value: any) => {
    setConfig(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < maxSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleBuild = async () => {
    setIsBuilding(true);
    // Simulate build process
    setTimeout(() => {
      setIsBuilding(false);
      setBuildComplete(true);
      toast.success("Agent built successfully!");
    }, 3000);
  };

  const getStepComponent = () => {
    const step = steps[currentStep - 1];
    
    switch (step.name) {
      case "Agent Name":
        return (
          <div className="space-y-4">
            <Label htmlFor="agentName" className="text-lg font-semibold text-gray-800 dark:text-gray-200">Agent Name</Label>
            <Input
              id="agentName"
              placeholder="Enter your agent name"
              value={config.agentName}
              onChange={(e) => updateConfig("agentName", e.target.value)}
              className="text-lg border-2 focus:border-purple-500"
            />
          </div>
        );

      case "Source Type":
        return (
          <div className="space-y-4">
            <Label className="text-lg font-semibold text-gray-800 dark:text-gray-200">Select Data Source</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sourceTypes[isRAG ? 'rag' : 'sql'].map((source) => (
                <Card 
                  key={source}
                  className={`cursor-pointer transition-all hover:shadow-lg border-2 ${
                    config.sourceType === source 
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => updateConfig("sourceType", source)}
                >
                  <CardContent className="p-4 text-center">
                    <Database className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <p className="font-medium text-gray-700 dark:text-gray-300">{source}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "Source Details":
        return (
          <div className="space-y-4">
            <Label className="text-lg font-semibold text-gray-800 dark:text-gray-200">Configure Source</Label>
            {["PDF", "CSV", "Excel", "TXT"].includes(config.sourceType) ? (
              <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center">
                <FileText className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Drag & drop files or click to browse</p>
                <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50">
                  Browse Files
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Input placeholder="Host" className="border-2 focus:border-purple-500" />
                <Input placeholder="Database Name" className="border-2 focus:border-purple-500" />
                <Input placeholder="Username" className="border-2 focus:border-purple-500" />
                <Input placeholder="Password" type="password" className="border-2 focus:border-purple-500" />
              </div>
            )}
          </div>
        );

      case "Embedding":
        return (
          <div className="space-y-4">
            <Label className="text-lg font-semibold text-gray-800 dark:text-gray-200">Choose Embedding Model</Label>
            <Select value={config.embedding} onValueChange={(value) => updateConfig("embedding", value)}>
              <SelectTrigger className="border-2 focus:border-purple-500">
                <SelectValue placeholder="Select embedding model" />
              </SelectTrigger>
              <SelectContent>
                {embeddingModels.map((model) => (
                  <SelectItem key={model} value={model}>{model}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );

      case "Vector Store":
        return (
          <div className="space-y-4">
            <Label className="text-lg font-semibold text-gray-800 dark:text-gray-200">Choose Vector Store</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {vectorStores.map((store) => (
                <Card 
                  key={store}
                  className={`cursor-pointer transition-all hover:shadow-lg border-2 ${
                    config.vectorStore === store 
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => updateConfig("vectorStore", store)}
                >
                  <CardContent className="p-4 text-center">
                    <Database className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <p className="font-medium text-gray-700 dark:text-gray-300">{store}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {config.vectorStore && (
              <div className="mt-4 space-y-2">
                <Input placeholder="API Key (if required)" className="border-2 focus:border-purple-500" />
                <Input placeholder="Index Name" className="border-2 focus:border-purple-500" />
              </div>
            )}
          </div>
        );

      case "LLM Provider":
        return (
          <div className="space-y-4">
            <Label className="text-lg font-semibold text-gray-800 dark:text-gray-200">Choose LLM Provider</Label>
            <Select value={config.llmProvider} onValueChange={(value) => updateConfig("llmProvider", value)}>
              <SelectTrigger className="border-2 focus:border-purple-500">
                <SelectValue placeholder="Select LLM provider" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(llmProviders).map((provider) => (
                  <SelectItem key={provider} value={provider}>{provider}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {config.llmProvider && (
              <div className="space-y-4">
                <Select value={config.llmModel} onValueChange={(value) => updateConfig("llmModel", value)}>
                  <SelectTrigger className="border-2 focus:border-purple-500">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    {llmProviders[config.llmProvider as keyof typeof llmProviders].map((model) => (
                      <SelectItem key={model} value={model}>{model}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input placeholder="API Key" type="password" className="border-2 focus:border-purple-500" />
              </div>
            )}
          </div>
        );

      case "Framework":
        return (
          <div className="space-y-4">
            <Label className="text-lg font-semibold text-gray-800 dark:text-gray-200">Choose Framework</Label>
            <div className="grid grid-cols-2 gap-4">
              {frameworks.map((fw) => (
                <Card 
                  key={fw}
                  className={`cursor-pointer transition-all hover:shadow-lg border-2 ${
                    config.framework === fw 
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => updateConfig("framework", fw)}
                >
                  <CardContent className="p-4 text-center">
                    <Brain className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <p className="font-medium text-gray-700 dark:text-gray-300">{fw}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "System Prompt":
        return (
          <div className="space-y-4">
            <Label className="text-lg font-semibold text-gray-800 dark:text-gray-200">System Prompt</Label>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label className="text-sm text-gray-600 dark:text-gray-400">Default Prompts</Label>
                {defaultPrompts.map((prompt, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="text-left h-auto p-3 justify-start border-purple-200 hover:border-purple-500"
                    onClick={() => updateConfig("systemPrompt", prompt)}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
              <Textarea
                placeholder="Or enter your custom system prompt..."
                value={config.systemPrompt}
                onChange={(e) => updateConfig("systemPrompt", e.target.value)}
                rows={4}
                className="border-2 focus:border-purple-500"
              />
            </div>
          </div>
        );

      case "UI Type":
        return (
          <div className="space-y-4">
            <Label className="text-lg font-semibold text-gray-800 dark:text-gray-200">Choose UI Framework</Label>
            <div className="grid grid-cols-2 gap-6">
              {["Streamlit", "Gradio"].map((ui) => (
                <Card 
                  key={ui}
                  className={`cursor-pointer transition-all hover:shadow-lg border-2 ${
                    config.uiType === ui 
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => updateConfig("uiType", ui)}
                >
                  <CardContent className="p-6 text-center">
                    <Eye className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{ui}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {ui === "Streamlit" ? "Fast prototyping with Python" : "Machine learning interfaces"}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "Build":
        return (
          <div className="space-y-6 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Ready to Build!</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Review your configuration and click build to generate your agent.
              </p>
            </div>
            
            <Card className="border-2 border-purple-200">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div><strong>Agent Name:</strong> {config.agentName}</div>
                  <div><strong>Source:</strong> {config.sourceType}</div>
                  <div><strong>LLM:</strong> {config.llmProvider} - {config.llmModel}</div>
                  <div><strong>UI:</strong> {config.uiType}</div>
                </div>
              </CardContent>
            </Card>

            {!isBuilding && !buildComplete && (
              <Button 
                onClick={handleBuild}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-3"
              >
                Build Agent
              </Button>
            )}

            {isBuilding && (
              <div className="space-y-4">
                <div className="animate-spin w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto"></div>
                <p className="text-lg text-purple-600">Building your agent...</p>
              </div>
            )}

            {buildComplete && (
              <div className="space-y-4">
                <div className="text-green-600 text-lg font-semibold">✅ Agent Built Successfully!</div>
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" className="border-purple-500 text-purple-600">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/dashboard")}
                  className="border-gray-300 text-gray-600"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </div>
            )}
          </div>
        );

      default:
        return <div>Step not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                {isRAG ? "RAG Agent Builder" : "SQL Agent Builder"}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Session ID: {sessionId}</p>
            </div>
          </div>
          <Badge variant="outline" className="text-lg px-4 py-2 border-purple-500 text-purple-600">
            {isRAG ? "Semantic RAG" : "Analytical Agent"}
          </Badge>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Step {currentStep} of {maxSteps}
            </span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-3 bg-gray-200" />
        </div>

        {/* Steps Navigation */}
        <div className="flex items-center justify-center mb-8 overflow-x-auto pb-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            
            return (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  isActive 
                    ? 'bg-purple-600 text-white' 
                    : isCompleted 
                      ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' 
                      : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'
                }`}>
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium whitespace-nowrap">{step.name}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-2 ${isCompleted ? 'bg-green-400' : 'bg-gray-300'}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Sidebar - Component Icons */}
          <div className="col-span-2">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-sm text-gray-600 dark:text-gray-400">Available Components</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {steps[currentStep - 1]?.name === "Source Type" && (
                  <div className="grid grid-cols-1 gap-2">
                    {sourceTypes[isRAG ? 'rag' : 'sql'].map((source) => (
                      <div key={source} className="flex items-center gap-2 p-2 rounded bg-gray-50 dark:bg-gray-800">
                        <Database className="w-4 h-4 text-purple-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">{source}</span>
                      </div>
                    ))}
                  </div>
                )}
                {steps[currentStep - 1]?.name === "LLM Provider" && (
                  <div className="space-y-2">
                    {Object.keys(llmProviders).map((provider) => (
                      <div key={provider} className="flex items-center gap-2 p-2 rounded bg-gray-50 dark:bg-gray-800">
                        <Zap className="w-4 h-4 text-blue-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">{provider}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Main Step Content */}
          <div className="col-span-8">
            <Card className="border-2 border-purple-100 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-purple-800 dark:text-purple-200">
                    {steps[currentStep - 1]?.name}
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="text-purple-600">
                    <HelpCircle className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                {getStepComponent()}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            {!buildComplete && (
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="border-purple-300 text-purple-600"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                {currentStep < maxSteps && (
                  <Button 
                    onClick={handleNext}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Right Sidebar - Help */}
          <div className="col-span-2">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-sm text-gray-600 dark:text-gray-400">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-gray-500 dark:text-gray-400 space-y-2">
                <p>Click the ? icon for step-specific guidance.</p>
                <p>Each step builds your agent configuration.</p>
                <p>You can always go back to modify previous steps.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineBuilder;
