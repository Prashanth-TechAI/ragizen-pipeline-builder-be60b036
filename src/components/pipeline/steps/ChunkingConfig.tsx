
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

interface ChunkingConfigProps {
  type: "semantic" | "analytical";
}

export default function ChunkingConfig({ type }: ChunkingConfigProps) {
  const [chunkSize, setChunkSize] = useState(500);
  const [chunkOverlap, setChunkOverlap] = useState(50);
  const [useAdvancedOptions, setUseAdvancedOptions] = useState(false);
  const [previewText, setPreviewText] = useState("");
  
  // Sample text for visualization
  const sampleText = "RagiZen.ai is a fully managed, no-code platform that empowers users to build and deploy both semantic RAG chatbots (over unstructured data like PDFs, text, CSV) and analytical agents (over structured sources like SQL, CSV, Excel) through an intuitive, step-by-step interface. By selecting sources, chunking strategy, embedding models, vector stores, LLMs, and preview UIs (Gradio or Streamlit), users click Build to generate a complete project scaffold—including Python services, configuration files, Docker manifests, and a live embedded preview—then download or clone the resulting code for production deployment.";
  
  useEffect(() => {
    // Generate visual preview based on chunk size
    const words = sampleText.split(' ');
    const wordsPerChunk = Math.floor(chunkSize / 5); // Approximate 5 chars per word
    
    let formatted = '';
    for (let i = 0; i < words.length; i++) {
      if (i % wordsPerChunk === 0 && i > 0) {
        formatted += '\n\n--- Chunk Break ---\n\n';
      }
      formatted += words[i] + ' ';
    }
    
    setPreviewText(formatted);
  }, [chunkSize, chunkOverlap]);
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Document Chunking</CardTitle>
        <CardDescription>
          {type === "semantic" 
            ? "Configure how your documents are split into chunks for embedding and retrieval" 
            : "Configure how your data is processed for analysis"
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="chunk-size">Chunk Size (tokens)</Label>
              <span className="text-sm text-muted-foreground">{chunkSize}</span>
            </div>
            <Slider 
              id="chunk-size"
              min={100} 
              max={1000} 
              step={50} 
              value={[chunkSize]} 
              onValueChange={(value) => setChunkSize(value[0])}
            />
            <p className="text-xs text-muted-foreground">
              Smaller chunks provide more focused context but may miss broader information.
              Larger chunks include more context but may dilute relevance.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="chunk-overlap">Chunk Overlap (%)</Label>
              <span className="text-sm text-muted-foreground">{chunkOverlap}%</span>
            </div>
            <Slider 
              id="chunk-overlap"
              min={0} 
              max={50} 
              step={5} 
              value={[chunkOverlap]} 
              onValueChange={(value) => setChunkOverlap(value[0])}
            />
            <p className="text-xs text-muted-foreground">
              Overlap helps maintain context between chunks. Higher values provide better context but increase storage needs.
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch 
            id="advanced-options" 
            checked={useAdvancedOptions}
            onCheckedChange={setUseAdvancedOptions}
          />
          <Label htmlFor="advanced-options">Show advanced chunking options</Label>
        </div>
        
        {useAdvancedOptions && (
          <div className="border rounded-md p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="chunkMethod">Chunking Method</Label>
                <select id="chunkMethod" className="w-full p-2 border rounded-md">
                  <option>Character-based</option>
                  <option>Token-based</option>
                  <option>Sentence-based</option>
                  <option>Paragraph-based</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="separators">Custom Separators</Label>
                <input id="separators" className="w-full p-2 border rounded-md" placeholder="\n\n, \n, . " />
              </div>
            </div>
          </div>
        )}
        
        <div className="border rounded-md p-4">
          <h3 className="font-medium mb-2">Chunking Preview</h3>
          <div className="bg-muted/30 p-4 rounded text-sm font-mono whitespace-pre-wrap max-h-48 overflow-y-auto">
            {previewText}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
