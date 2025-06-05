
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Developers = () => {
  const navigate = useNavigate();

  const developers = [
    {
      name: "Alex Chen",
      role: "Lead AI Engineer & Backend Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Specializes in LLM integration, vector databases, and scalable AI infrastructure. 8+ years in AI/ML with expertise in RAG systems and neural networks.",
      tagline: "Backend Ninja 🥷",
      skills: ["Python", "FastAPI", "Vector DBs", "LLMs", "Docker"],
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      email: "alex@wednes.ai"
    },
    {
      name: "Sarah Johnson",
      role: "Frontend Architect & UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in React, TypeScript, and modern web technologies. Passionate about creating intuitive user experiences for complex AI workflows.",
      tagline: "Frontend Magician ✨",
      skills: ["React", "TypeScript", "UI/UX", "Tailwind", "Design"],
      github: "https://github.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson", 
      email: "sarah@wednes.ai"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-12">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="border-purple-300 text-purple-600 hover:bg-purple-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-6">
            Meet Our Developers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The talented team behind WEDNES AI, dedicated to making AI accessible to everyone through 
            innovative no-code solutions and cutting-edge technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {developers.map((dev, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transform hover:scale-105"
            >
              <CardHeader className="text-center pb-6">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-purple-200 group-hover:border-purple-400 transition-colors">
                    <img 
                      src={dev.image} 
                      alt={dev.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {dev.tagline}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {dev.name}
                </CardTitle>
                <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">{dev.role}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                  {dev.bio}
                </p>
                
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Core Skills</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {dev.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center gap-4 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50 group-hover:scale-110 transition-transform"
                    onClick={() => window.open(dev.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="rounded-full border-blue-300 text-blue-600 hover:bg-blue-50 group-hover:scale-110 transition-transform"
                    onClick={() => window.open(dev.linkedin, '_blank')}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="rounded-full border-green-300 text-green-600 hover:bg-green-50 group-hover:scale-110 transition-transform"
                    onClick={() => window.location.href = `mailto:${dev.email}`}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                🚀 Ready to Build Your AI Agent?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                Join thousands of developers who are already building the future with WEDNES AI.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-3"
                onClick={() => navigate("/login")}
              >
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Developers;
