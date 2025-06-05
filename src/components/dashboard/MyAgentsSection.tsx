
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, Eye, Download, Trash2, Calendar } from "lucide-react";

const MyAgentsSection = () => {
  const [agents] = useState([
    {
      id: "session_001",
      name: "Customer Support RAG Bot",
      type: "RAG Agent",
      status: "Built",
      createdAt: "2024-01-15",
      description: "Answers customer queries from knowledge base"
    },
    {
      id: "session_002", 
      name: "Sales Analytics Agent",
      type: "SQL Agent",
      status: "Building",
      createdAt: "2024-01-14",
      description: "Analyzes sales data and generates reports"
    },
    {
      id: "session_003",
      name: "Document Q&A Bot",
      type: "RAG Agent", 
      status: "Built",
      createdAt: "2024-01-12",
      description: "Answers questions from uploaded documents"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Built": return "bg-green-100 text-green-800 border-green-200";
      case "Building": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Failed": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">My Agents</h2>
        <Button>Create New Agent</Button>
      </div>

      {agents.length === 0 ? (
        <Card>
          <CardHeader className="text-center py-12">
            <Bot className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <CardTitle>No agents yet</CardTitle>
            <CardDescription>
              Create your first AI agent to get started
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid gap-4">
          {agents.map((agent) => (
            <Card key={agent.id} className="hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bot className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{agent.name}</CardTitle>
                      <CardDescription>{agent.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={getStatusColor(agent.status)}>
                      {agent.status}
                    </Badge>
                    <Badge variant="secondary">{agent.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Created {agent.createdAt}</span>
                    <span>•</span>
                    <span>ID: {agent.id}</span>
                  </div>
                  <div className="flex gap-2">
                    {agent.status === "Built" && (
                      <>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </>
                    )}
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAgentsSection;
