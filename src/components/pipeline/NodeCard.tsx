
import { cn } from "@/lib/utils";

interface NodeCardProps {
  title: string;
  description: string;
  nodeType: string;
  className?: string;
}

export default function NodeCard({ title, description, nodeType, className }: NodeCardProps) {
  const getNodeColor = (type: string) => {
    const typeMap: Record<string, string> = {
      pdf: "from-amber-500 to-orange-600",
      text: "from-amber-500 to-orange-600",
      csv: "from-amber-500 to-orange-600",
      sql: "from-amber-500 to-orange-600",
      chunk: "from-emerald-500 to-green-600",
      embed: "from-emerald-500 to-green-600",
      vector: "from-sky-500 to-blue-600",
      cache: "from-sky-500 to-blue-600",
      llm: "from-violet-500 to-purple-600",
      analyzer: "from-violet-500 to-purple-600",
      gradio: "from-fuchsia-500 to-pink-600",
      streamlit: "from-fuchsia-500 to-pink-600",
    };
    
    return typeMap[type] || "from-gray-500 to-gray-600";
  };
  
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-md p-3 cursor-grab hover:border-primary/50 hover:shadow-md transition-all duration-150 relative overflow-hidden group",
        className
      )}
      draggable="true"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b" style={{ backgroundImage: `linear-gradient(to bottom, ${getNodeColor(nodeType).replace('from-', '').replace('to-', '')}` }} />
      
      <div className="pl-2">
        <h4 className="text-sm font-medium mb-1">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(to right, ${getNodeColor(nodeType)})` }} />
    </div>
  );
}
