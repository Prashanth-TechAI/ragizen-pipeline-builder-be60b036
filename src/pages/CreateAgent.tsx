
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Database, MessageSquare, Image } from "lucide-react";

const CreateAgent = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const agentTypes = [
    {
      id: "rag",
      title: "RAG Agent",
      description: "Build a chatbot that answers questions from documents, PDFs, text files, and websites",
      icon: MessageSquare,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Document ingestion (PDF, DOCX, TXT)",
        "Web scraping support", 
        "Custom chunking & embedding",
        "Citation & source tracking"
      ]
    },
    {
      id: "sql",
      title: "SQL Agent", 
      description: "Build an AI agent that can analyze data, generate charts, and answer questions about your databases",
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "SQL database connections",
        "CSV/Excel file analysis",
        "Automated chart generation", 
        "Natural language data querying"
      ]
    },
    {
      id: "image",
      title: "Image Generation Agent",
      description: "Create AI-powered image generation and editing capabilities",
      icon: Image,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Text-to-image generation",
        "Image editing and enhancement",
        "Style transfer capabilities",
        "Custom model integration"
      ]
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
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Create New Agent</h1>
            <p className="text-muted-foreground">Choose the type of AI agent you want to build</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {agentTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <Card 
                key={type.id}
                className={`border-2 hover:border-primary/50 transition-all cursor-pointer transform hover:scale-105 ${
                  selectedType === type.id ? "border-primary ring-2 ring-primary/20" : ""
                }`}
                onClick={() => handleTypeSelect(type.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${type.gradient} flex items-center justify-center text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-4 h-4 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-xs">
                          ✓
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-4 bg-gradient-to-r ${type.gradient} hover:opacity-90 transition-opacity`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTypeSelect(type.id);
                    }}
                  >
                    Create {type.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CreateAgent;
