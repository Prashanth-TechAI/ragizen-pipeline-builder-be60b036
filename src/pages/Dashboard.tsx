
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { Plus, Bot, Key, User, Activity } from "lucide-react";
import ProfileSection from "@/components/dashboard/ProfileSection";
import MyAgentsSection from "@/components/dashboard/MyAgentsSection";
import ApiKeysSection from "@/components/dashboard/ApiKeysSection";
import RecentActivitySection from "@/components/dashboard/RecentActivitySection";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleCreateAgent = () => {
    navigate("/dashboard/create-agent");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back, {user?.email?.split('@')[0]}</h1>
            <p className="text-muted-foreground">Build and manage your AI agents</p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleCreateAgent}
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Agent
            </Button>
            <Button variant="outline" onClick={handleLogout}>Logout</Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="profile"><User className="w-4 h-4 mr-2" />Profile</TabsTrigger>
            <TabsTrigger value="agents"><Bot className="w-4 h-4 mr-2" />My Agents</TabsTrigger>
            <TabsTrigger value="keys"><Key className="w-4 h-4 mr-2" />API Keys</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-all cursor-pointer" onClick={handleCreateAgent}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Create New Agent
                  </CardTitle>
                  <CardDescription>
                    Start building a new RAG or SQL agent
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all cursor-pointer" onClick={() => navigate("/dashboard?tab=agents")}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    My Agents
                  </CardTitle>
                  <CardDescription>
                    View and manage your existing agents
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-all cursor-pointer" onClick={() => navigate("/dashboard?tab=keys")}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Key className="w-5 h-5" />
                    API Keys
                  </CardTitle>
                  <CardDescription>
                    Manage your API keys securely
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <RecentActivitySection />
          </TabsContent>
          
          <TabsContent value="profile">
            <ProfileSection />
          </TabsContent>
          
          <TabsContent value="agents">
            <MyAgentsSection />
          </TabsContent>
          
          <TabsContent value="keys">
            <ApiKeysSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
