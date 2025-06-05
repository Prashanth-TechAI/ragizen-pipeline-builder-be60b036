
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Database, MessageSquare, Image, Sparkles } from "lucide-react";

const CreateAgent = () => {
  const navigate = useNavigate();

  const agentTypes = [
    {
      id: "rag",
      title: "RAG Agent",
      description: "Build a chatbot that answers questions from documents, PDFs, text files, and websites with semantic search capabilities",
      icon: MessageSquare,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Document ingestion (PDF, DOCX, TXT)",
        "Web scraping support", 
        "Custom chunking & embedding",
        "Citation & source tracking",
        "Vector database integration",
        "Real-time Q&A capabilities"
      ],
      buttonText: "Build RAG Agent"
    },
    {
      id: "sql",
      title: "SQL Agent", 
      description: "Build an AI agent that can analyze data, generate charts, and answer questions about your databases with conversational analytics",
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "SQL database connections",
        "CSV/Excel file analysis",
        "Automated chart generation", 
        "Natural language data querying",
        "Multiple framework support",
        "Interactive data visualization"
      ],
      buttonText: "Build SQL Agent"
    },
    {
      id: "image",
      title: "Image Generation Agent",
      description: "Create AI-powered image generation and editing capabilities with advanced AI models",
      icon: Image,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Text-to-image generation",
        "Image editing and enhancement",
        "Style transfer capabilities",
        "Custom model integration",
        "Batch processing support",
        "High-resolution outputs"
      ],
      buttonText: "Build Image Agent"
    }
  ];

  const handleTypeSelect = (type: string) => {
    if (type === "image") {
      // For image generation, show simple build option
      navigate(`/build/${type}`);
    } else {
      // For RAG and SQL, go to pipeline builder
      navigate(`/pipeline/${type}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/dashboard")}
            className="border-purple-300 text-purple-600 hover:bg-purple-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Create New AI Agent
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Choose the type of AI agent you want to build</p>
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {agentTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <Card 
                key={type.id}
                className="group border-2 hover:border-purple-300 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                onClick={() => handleTypeSelect(type.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${type.gradient} flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <div className="absolute -top-1 -right-1">
                      <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 transition-colors">
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {type.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                            ✓
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    className={`w-full bg-gradient-to-r ${type.gradient} hover:opacity-90 transition-all duration-300 text-white font-semibold py-3 text-lg group-hover:shadow-lg`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTypeSelect(type.id);
                    }}
                  >
                    {type.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                🚀 Build Production-Ready AI Agents in Minutes
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Our no-code platform generates complete, deployable applications with Docker containers, 
                environment configurations, and CI/CD workflows. Test your agent instantly with our 
                integrated preview system, then download or deploy to any cloud platform.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CreateAgent;
