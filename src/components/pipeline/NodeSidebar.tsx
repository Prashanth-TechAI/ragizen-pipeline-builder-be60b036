
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NodeCard from "./NodeCard";

interface NodeSidebarProps {
  className?: string;
}

export default function NodeSidebar({ className }: NodeSidebarProps) {
  const nodeCategories = [
    {
      title: "Data Sources",
      nodes: [
        { id: "pdf", title: "PDF", description: "Ingest PDF documents" },
        { id: "text", title: "Text", description: "Plain text documents" },
        { id: "csv", title: "CSV", description: "Structured CSV data" },
        { id: "sql", title: "SQL Database", description: "Connect to databases" },
      ],
    },
    {
      title: "Processing",
      nodes: [
        { id: "chunk", title: "Text Chunker", description: "Split text into manageable chunks" },
        { id: "embed", title: "Embeddings", description: "Generate vector embeddings" },
      ],
    },
    {
      title: "Storage",
      nodes: [
        { id: "vector", title: "Vector Store", description: "Index and store vectors" },
        { id: "cache", title: "Cache", description: "Cache results for faster access" },
      ],
    },
    {
      title: "Models",
      nodes: [
        { id: "llm", title: "LLM", description: "Large language models" },
        { id: "analyzer", title: "SQL Analyzer", description: "SQL query generation" },
      ],
    },
    {
      title: "UI",
      nodes: [
        { id: "gradio", title: "Gradio", description: "Gradio-based UI" },
        { id: "streamlit", title: "Streamlit", description: "Streamlit-based UI" },
      ],
    },
  ];

  return (
    <div className={cn("w-64 border-r border-border bg-muted/20 h-full flex flex-col", className)}>
      <div className="p-4 border-b border-border">
        <h2 className="font-medium text-lg">Node Library</h2>
        <p className="text-muted-foreground text-sm">Drag nodes to the canvas</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-6">
        {nodeCategories.map((category) => (
          <div key={category.title} className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-1 gap-2">
              {category.nodes.map((node) => (
                <NodeCard 
                  key={node.id}
                  title={node.title}
                  description={node.description}
                  nodeType={node.id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-border">
        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
          Build Pipeline
        </Button>
      </div>
    </div>
  );
}
