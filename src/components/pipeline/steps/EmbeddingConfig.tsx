
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function EmbeddingConfig() {
  const [batchSize, setBatchSize] = useState(16);
  const [useCustomModel, setUseCustomModel] = useState(false);
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Embedding Model</CardTitle>
        <CardDescription>
          Choose an embedding model to convert your text into vector representations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="embeddingModel">Embedding Model</Label>
            <select id="embeddingModel" className="w-full p-2 border rounded-md">
              <option value="text-embedding-3-small">OpenAI text-embedding-3-small</option>
              <option value="text-embedding-3-large">OpenAI text-embedding-3-large</option>
              <option value="all-MiniLM-L6-v2">Sentence Transformers all-MiniLM-L6-v2</option>
              <option value="all-mpnet-base-v2">Sentence Transformers all-mpnet-base-v2</option>
              <option value="e5-large-v2">E5-large-v2</option>
              <option value="bge-large-en-v1.5">BGE-large-en-v1.5</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="batchSize">Batch Size</Label>
              <span className="text-sm text-muted-foreground">{batchSize}</span>
            </div>
            <Slider 
              id="batchSize"
              min={1} 
              max={64} 
              step={1} 
              value={[batchSize]} 
              onValueChange={(value) => setBatchSize(value[0])}
            />
            <p className="text-xs text-muted-foreground">
              Number of chunks to process at once. Higher values may be faster but require more memory.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Switch 
            id="custom-model" 
            checked={useCustomModel}
            onCheckedChange={setUseCustomModel}
          />
          <Label htmlFor="custom-model">Use custom embedding model</Label>
        </div>
        
        {useCustomModel && (
          <div className="border rounded-md p-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="customModelUrl">Model URL or Hugging Face Path</Label>
              <Input id="customModelUrl" placeholder="sentence-transformers/all-mpnet-base-v2" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modelDimensions">Vector Dimensions</Label>
              <Input id="modelDimensions" type="number" placeholder="768" />
            </div>
          </div>
        )}
        
        <div className="border rounded-md p-4">
          <h3 className="font-medium mb-2">Model Details</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-muted-foreground">Dimensions:</div>
            <div>1536</div>
            <div className="text-muted-foreground">Encoding Speed:</div>
            <div>Fast</div>
            <div className="text-muted-foreground">Quality:</div>
            <div>High</div>
            <div className="text-muted-foreground">Cost:</div>
            <div>$0.10 / 1M tokens</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
