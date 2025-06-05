
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "RAG Agent Builder",
      description: "Build semantic search agents over documents, PDFs, and unstructured data",
      icon: "🤖"
    },
    {
      title: "SQL Agent Builder", 
      description: "Create conversational analytics agents over databases and CSV files",
      icon: "📊"
    },
    {
      title: "Visual Pipeline Builder",
      description: "Drag-and-drop interface to configure your AI agent workflow",
      icon: "🔧"
    },
    {
      title: "One-Click Deployment",
      description: "Generate production-ready code with Docker containers and CI/CD",
      icon: "🚀"
    },
    {
      title: "Secure API Key Vault",
      description: "Store and manage your API keys securely",
      icon: "🔐"
    },
    {
      title: "Live Preview",
      description: "Test your agent instantly with embedded Streamlit/Gradio apps",
      icon: "👁️"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build, test, and deploy powerful AI agents without writing code
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
