
import { useState } from "react";
import { Button } from "@/components/ui/button";
import NodeSidebar from "./NodeSidebar";

export default function PipelineBuilder() {
  const [selectedTab, setSelectedTab] = useState("semantic");

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex items-center border-b border-border p-4 gap-4">
        <div className="flex">
          <Button
            variant={selectedTab === "semantic" ? "default" : "outline"}
            onClick={() => setSelectedTab("semantic")}
            className="rounded-r-none"
          >
            Semantic RAG
          </Button>
          <Button
            variant={selectedTab === "analytical" ? "default" : "outline"}
            onClick={() => setSelectedTab("analytical")}
            className="rounded-l-none"
          >
            Analytical Agent
          </Button>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline">Preview</Button>
          <Button variant="outline">Save</Button>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            Build &amp; Deploy
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <NodeSidebar />
        <div className="flex-1 bg-gradient-to-br from-slate-50 to-white relative">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="bg-white/50 backdrop-blur-sm border border-border rounded-lg p-8 text-center shadow-sm max-w-md">
              <h3 className="text-2xl font-medium mb-2">Start Building Your Pipeline</h3>
              <p className="text-muted-foreground mb-6">
                Drag nodes from the sidebar onto the canvas to start building your {selectedTab === "semantic" ? "RAG" : "analytical"} pipeline.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-dashed border-border rounded-md p-4 flex items-center justify-center flex-col">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-amber-500 to-orange-600 flex items-center justify-center text-white font-medium mb-2">1</div>
                  <p className="text-sm text-muted-foreground">Add a data source</p>
                </div>
                <div className="border border-dashed border-border rounded-md p-4 flex items-center justify-center flex-col">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-sky-500 to-blue-600 flex items-center justify-center text-white font-medium mb-2">2</div>
                  <p className="text-sm text-muted-foreground">Configure processing</p>
                </div>
                <div className="border border-dashed border-border rounded-md p-4 flex items-center justify-center flex-col">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-violet-500 to-purple-600 flex items-center justify-center text-white font-medium mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Select models</p>
                </div>
                <div className="border border-dashed border-border rounded-md p-4 flex items-center justify-center flex-col">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-b from-fuchsia-500 to-pink-600 flex items-center justify-center text-white font-medium mb-2">4</div>
                  <p className="text-sm text-muted-foreground">Choose UI template</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
