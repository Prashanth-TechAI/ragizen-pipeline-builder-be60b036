
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function VectorStoreConfig() {
  const [selectedStore, setSelectedStore] = useState("chromadb");
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Vector Store Configuration</CardTitle>
        <CardDescription>
          Select and configure a vector database to store your embeddings
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="vectorStore">Vector Store</Label>
            <select 
              id="vectorStore" 
              className="w-full p-2 border rounded-md"
              value={selectedStore}
              onChange={(e) => setSelectedStore(e.target.value)}
            >
              <option value="chromadb">ChromaDB (Local)</option>
              <option value="pinecone">Pinecone (Cloud)</option>
              <option value="weaviate">Weaviate (Cloud)</option>
              <option value="qdrant">Qdrant (Local or Cloud)</option>
              <option value="milvus">Milvus (Local or Cloud)</option>
            </select>
          </div>
          
          {selectedStore === "chromadb" && (
            <div className="space-y-2">
              <Label htmlFor="persistenceDir">Persistence Directory</Label>
              <Input id="persistenceDir" defaultValue="./chroma_db" />
              <p className="text-xs text-muted-foreground">
                Local directory where ChromaDB will store your vector data
              </p>
            </div>
          )}
          
          {selectedStore === "pinecone" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pineconeApiKey">Pinecone API Key</Label>
                <Input id="pineconeApiKey" placeholder="Your Pinecone API key" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pineconeEnvironment">Environment</Label>
                <Input id="pineconeEnvironment" placeholder="gcp-starter" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pineconeIndex">Index Name</Label>
                <Input id="pineconeIndex" placeholder="ragizen-index" />
              </div>
            </div>
          )}
          
          {selectedStore === "weaviate" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="weaviateUrl">Weaviate URL</Label>
                <Input id="weaviateUrl" placeholder="https://your-cluster.weaviate.cloud" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weaviateApiKey">API Key</Label>
                <Input id="weaviateApiKey" type="password" placeholder="Your Weaviate API key" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weaviateClass">Class Name</Label>
                <Input id="weaviateClass" placeholder="RagDocument" />
              </div>
            </div>
          )}
          
          {selectedStore === "qdrant" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Deployment Type</Label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="qdrantDeployment" defaultValue="local" defaultChecked />
                    <span>Local</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="qdrantDeployment" defaultValue="cloud" />
                    <span>Cloud</span>
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="qdrantUrl">Qdrant URL (for cloud)</Label>
                <Input id="qdrantUrl" placeholder="https://your-cluster.qdrant.io" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="qdrantApiKey">API Key (for cloud)</Label>
                <Input id="qdrantApiKey" type="password" placeholder="Your Qdrant API key" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="qdrantCollection">Collection Name</Label>
                <Input id="qdrantCollection" placeholder="ragizen_docs" />
              </div>
            </div>
          )}
          
          {selectedStore === "milvus" && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="milvusHost">Host</Label>
                  <Input id="milvusHost" placeholder="localhost" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="milvusPort">Port</Label>
                  <Input id="milvusPort" placeholder="19530" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="milvusCollection">Collection Name</Label>
                <Input id="milvusCollection" placeholder="ragizen_collection" />
              </div>
            </div>
          )}
        </div>
        
        <Button>Test Connection</Button>
      </CardContent>
    </Card>
  );
}
