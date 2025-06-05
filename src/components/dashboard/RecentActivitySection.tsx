
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Bot, Key, Download, Eye } from "lucide-react";

const RecentActivitySection = () => {
  const activities = [
    {
      id: "1",
      type: "agent_created",
      description: "Created RAG Agent: Customer Support Bot",
      timestamp: "2 hours ago",
      icon: Bot,
      color: "text-blue-500"
    },
    {
      id: "2",
      type: "agent_built",
      description: "Built and deployed Sales Analytics Agent",
      timestamp: "1 day ago", 
      icon: Bot,
      color: "text-green-500"
    },
    {
      id: "3",
      type: "api_key_added",
      description: "Added OpenAI API key",
      timestamp: "2 days ago",
      icon: Key,
      color: "text-purple-500"
    },
    {
      id: "4",
      type: "agent_downloaded",
      description: "Downloaded Document Q&A Bot code",
      timestamp: "3 days ago",
      icon: Download,
      color: "text-orange-500"
    },
    {
      id: "5",
      type: "agent_previewed",
      description: "Previewed Customer Support Bot",
      timestamp: "1 week ago",
      icon: Eye,
      color: "text-cyan-500"
    }
  ];

  const getActivityBadge = (type: string) => {
    switch (type) {
      case "agent_created": return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Created</Badge>;
      case "agent_built": return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Built</Badge>;
      case "api_key_added": return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">API Key</Badge>;
      case "agent_downloaded": return <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">Download</Badge>;
      case "agent_previewed": return <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200">Preview</Badge>;
      default: return <Badge variant="outline">Activity</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Recent Activity
        </CardTitle>
        <CardDescription>
          Your latest actions and agent builds
        </CardDescription>
      </CardHeader>
      <CardContent>
        {activities.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No recent activity
          </div>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center ${activity.color}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                  </div>
                  {getActivityBadge(activity.type)}
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentActivitySection;
