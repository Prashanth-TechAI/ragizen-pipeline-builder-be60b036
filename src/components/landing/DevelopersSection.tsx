
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const DevelopersSection = () => {
  const developers = [
    {
      name: "Alex Chen",
      role: "Lead AI Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Specializes in LLM integration and vector databases. 5+ years in AI/ML.",
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen",
      email: "alex@wednes.ai"
    },
    {
      name: "Sarah Johnson",
      role: "Frontend Architect",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in React, TypeScript, and modern web technologies. UI/UX enthusiast.",
      github: "https://github.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson", 
      email: "sarah@wednes.ai"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Meet Our Developers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented team behind WEDNES AI, dedicated to making AI accessible to everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {developers.map((dev, index) => (
            <Card key={index} className="hover:shadow-lg transition-all border-2 hover:border-primary/50">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={dev.image} 
                    alt={dev.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{dev.name}</CardTitle>
                <p className="text-primary font-medium">{dev.role}</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">{dev.bio}</p>
                <div className="flex justify-center gap-3">
                  <Button size="sm" variant="outline" className="rounded-full">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
